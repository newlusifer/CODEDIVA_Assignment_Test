import React, { useState, useEffect, useRef } from 'react';
import { View, TouchableOpacity, StatusBar, StyleSheet, TextInput, Keyboard } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { fs } from '../helper/helpers';
import Text from '../components/Text';
const Login = (props) => {
    const [selected_save_login, setSelected_save_login] = useState(false)
    return <View style={{
        flex: 1,
        backgroundColor: '#ffffff'
    }} >
        <StatusBar
            backgroundColor='#ffffff'
            barStyle='dark-content'
        />
        <TouchableOpacity style={{
            flex: 1,
            justifyContent: 'center', alignItems: 'center'
        }}
            activeOpacity={1}
            onPress={() => {
                Keyboard.dismiss()
            }}
        >
            <TextInput
                style={styles.text_input}
                placeholder='ชื่อผู้ใช้งาน'
            />
            <View style={{ marginTop: hp(5) }} />
            <TextInput
                style={styles.text_input}
                placeholder='รหัสผ่าน'
            />
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                width: wp(90),
                marginTop: hp(3)
            }}>
                <TouchableOpacity style={{
                    flexDirection: 'row',
                    alignItems: 'center'
                }}
                    onPress={() => {
                        setSelected_save_login(!selected_save_login)
                    }}
                >
                    <FontAwesomeIcon
                        icon={['far', selected_save_login ? 'check-square' : 'square']}
                        size={wp(4.5)}
                        color='#dbdbdb'
                    />
                    <View style={{ marginRight: wp(2) }} />
                    <Text style={styles.text}>บันทึกการเข้าสู่ระบบ</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.text}>ลืมรหัสผ่าน?</Text>
                </TouchableOpacity>
            </View>
            <View style={{ marginTop: hp(5) }} />
            <TouchableOpacity style={styles.btn('#b8884e', '#b8884e')}
                onPress={() => {
                    props.navigation.navigate('RequestOtp')
                }}
            >
                <Text style={styles.text_btn('#ffffff')}>เข้าสู่ระบบ</Text>
            </TouchableOpacity>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                width: wp(90),
                marginTop: hp(3),
                marginBottom: hp(3)
            }}>
                <View style={{ flex: 1, borderBottomColor: '#d8d8d8', borderBottomWidth: 1, marginRight: wp(2) }} />
                <Text style={styles.text}>ไม่มีบัญชีผู้ใช้</Text>
                <View style={{ flex: 1, borderBottomColor: '#d8d8d8', borderBottomWidth: 1, marginLeft: wp(2) }} />
            </View>
            <TouchableOpacity style={styles.btn('#ffffff', '#b8b8b8')}>
                <Text style={styles.text_btn('#b8884e')}>เปิดบัญชีเพื่อลงทะเบียนบัญชีผู้ใช้</Text>
            </TouchableOpacity>
        </TouchableOpacity>
    </View>
}

export default Login;

const styles = StyleSheet.create({
    text: {
        fontSize: fs(14),
    },
    text_input: {
        width: wp(90),
        borderBottomColor: '#dbdbdb',
        borderBottomWidth: 1,
        fontFamily: 'Prompt-Regular',
        fontSize: fs(14)
    },
    text_btn: (color) => ({
        fontSize: fs(14),
        color: color
    }),
    btn: (bg, bdc) => ({
        width: wp(90),
        height: hp(6),
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: bg,
        borderColor: bdc,
        borderWidth: 1
    })
})