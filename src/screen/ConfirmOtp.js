import React, { useState, useEffect, useRef } from 'react';
import { View, TouchableOpacity, StatusBar, StyleSheet, Image, TextInput, Keyboard } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { fs } from '../helper/helpers';
import Text from '../components/Text';
import _ from 'lodash';
const ConfirmOtp = (props) => {
    const [otp_value, setOtp_value] = useState('------')
    const ref_textInput = useRef([0, 0, 0, 0, 0, 0])
    const [count_down_send_request, setCount_down_send_request] = useState(60)
    const time_ref = useRef(0)
    let count_temp = 60
    useEffect(() => {
        ref_textInput.current[0].focus()
        time_ref.current = setInterval(() => {
            setCount_down_send_request(count_temp--)            
            if (count_down_send_request == 0) {
                clearInterval(time_ref.current)
            }
        }, 1000)
        return () => {
            clearInterval(time_ref.current)
        }
    }, [])
    const onchange_otp = (raw_text, index) => {
        let text_array = raw_text.split('')
        let text = text_array.length > 1 ? text_array[1] : text_array[0]
        let array_otp = otp_value.split('')
        array_otp[index] = text == '' ? '-' : text
        setOtp_value(array_otp.join(''))
        if (index < 5 && text != '') {
            ref_textInput.current[index + 1].focus()
        }
    }
    return <View style={{
        flex: 1,
        backgroundColor: '#f4f4f4'
    }} >
        <StatusBar
            backgroundColor='#f4f4f4'
            barStyle='dark-content'
        />
        <View style={{ padding: wp(5) }}>
            <TouchableOpacity style={{ padding: wp(2), paddingLeft: 0, width: wp(10) }} onPress={() => {
                clearInterval(time_ref.current)
                props.navigation.navigate('RequestOtp')
            }}>
                <FontAwesomeIcon
                    icon={['fas', 'arrow-left']}
                    size={wp(4)}
                    color='#000000'
                />
            </TouchableOpacity>
        </View>
        <TouchableOpacity style={{
            flex: 1,
            paddingLeft: wp(5),
            paddingRight: wp(5)
        }}
            onPress={() => {
                Keyboard.dismiss()
                clearInterval(time_ref.current)
                props.navigation.navigate('CreatePinCode')
            }}
        >
            <Text StyleFont={'semiBold'} style={styles.TextHeader}>ยืนยันตัวตน</Text>
            <View style={{ marginTop: hp(1) }} />
            <Text style={styles.TextDetail}>กรุณากรอกรหัสยืนยันที่เราได้ส่งให้คุณ</Text>
            <View style={{ marginTop: hp(0.5) }} />
            <Text style={styles.TextDetail}>082-XXX-8998</Text>
            <TouchableOpacity style={{
                flexDirection: 'row',
                alignItems: 'center',
                width: wp(90),
                justifyContent: 'space-between',
                marginTop: hp(5),
            }} activeOpacity={1}>
                {_.map(Array(6), (item, index) => {
                    return <TextInput key={index}
                        style={{
                            width: wp(10),
                            borderBottomColor: '#d8d8d8',
                            borderBottomWidth: 1,
                            fontFamily: 'Prompt-Regular',
                            fontSize: 22,
                            textAlign: 'center'
                        }}
                        selection={{ start: 1 }}
                        keyboardType='numeric'
                        ref={(ref) => { ref_textInput.current[index] = ref }}
                        value={parseInt(otp_value.split('')[index]) ? otp_value.split('')[index] : ''}
                        onChangeText={(text) => { onchange_otp(text, index) }}
                    />
                })}
            </TouchableOpacity>
            <View style={{ alignItems: 'center', marginTop: hp(15) }}>
                <Text style={styles.TextDetail}>หากคุณไม่ได้รับรหัส?</Text>
                <TouchableOpacity style={{ padding: wp(3), flexDirection: 'row', alignItems: 'center' }}
                    activeOpacity={count_down_send_request > 0 ? 1 : undefined}>
                    <Text style={styles.text_countdown}>ส่งรหัสใหม่</Text>
                    {count_down_send_request > 0 &&
                        <Text style={styles.text_countdown}>{`(${count_down_send_request})`}</Text>
                    }
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    </View>
}

export default ConfirmOtp;

const styles = StyleSheet.create({
    TextHeader: {
        fontSize: fs(25),
        color: '#000000'
    },
    TextDetail: {
        fontSize: fs(18),
    },
    text_info: {
        fontSize: fs(14),
        color: '#929292'
    },
    text_countdown: {
        fontSize: fs(18),
        color: '#b8884e'
    },
    btn_text: {
        fontSize: fs(16),
        color: '#ffffff',
    },
    btn: {
        width: wp(90),
        height: hp(6),
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#b8884e',
    }
})