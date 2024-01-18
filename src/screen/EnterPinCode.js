import React, { useState, useEffect, useRef, useCallback, } from 'react';
import { View, TouchableOpacity, StatusBar, StyleSheet, Image, TextInput, Keyboard, Modal, NativeModules } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { fs } from '../helper/helpers';
import Text from '../components/Text';
import _ from 'lodash';
import Pincode from '../components/Pincode';
const { StatusBarManager } = NativeModules;
const EnterPinCode = (props) => {
    const [pincode_value, setPincode_value] = useState('')
    const [show_modal, setShow_modal] = useState(true)
    const [, updateState] = useState();
    const forceUpdate = useCallback(() => updateState({}), []);
    useEffect(() => {

    }, [])
    const check_pinCode = (res) => {
        setPincode_value(res)
    }
    return <View style={{
        flex: 1,
        backgroundColor: '#f4f4f4'
    }} >
        <StatusBar
            backgroundColor={show_modal ? 'rgba(0,0,0,0.5)' : '#f4f4f4'}
            barStyle='dark-content'
        />
        <Modal visible={show_modal} transparent>
            <TouchableOpacity style={{
                flex: 1,
                backgroundColor: 'rgba(0,0,0,0.5)',
                justifyContent: 'center',
                alignItems: 'center',
                paddingTop: - StatusBarManager.HEIGHT
            }}
                onPress={() => { setShow_modal(false) }}
            >
                <TouchableOpacity style={{
                    width: wp(70),
                    backgroundColor: '#ffffff',
                    borderRadius: 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                    paddingTop: hp(3)
                }}
                    activeOpacity={1}
                >
                    <FontAwesomeIcon
                        icon={['fas', 'fingerprint']}
                        size={wp(10)}
                        color={'#fb7b7b'}
                    />
                    <View style={{ marginTop: hp(2) }} />
                    <Text StyleFont={'semiBold'} style={styles.TextHeader}>Touch ID for</Text>
                    <Text StyleFont={'semiBold'} style={styles.TextHeader}>"CGS Application"</Text>
                    <View style={{ marginTop: hp(1) }} />
                    <Text style={styles.TextDetail}>เข้าใช้งานด้วย Touch ID หรือ</Text>
                    <Text style={styles.TextDetail}>ยกเลิกเพื่อกลับไปใช้รหัส PIN</Text>
                    <View style={{ marginTop: hp(0.5) }} />
                    <TouchableOpacity style={styles.btn}>
                        <Text style={styles.TextBtn_bold}>Enter Password</Text>
                    </TouchableOpacity>
                    <View style={{ borderBottomColor: '#e3e3e3', borderBottomWidth: 1.5, width: wp(70) }} />
                    <TouchableOpacity style={styles.btn} onPress={() => { setShow_modal(false) }}>
                        <Text style={styles.TextBtn_small}>ยกเลิก</Text>
                    </TouchableOpacity>
                </TouchableOpacity>
            </TouchableOpacity>
        </Modal>
        <Pincode
            title={'กรุณากรอกรหัส PIN'}
            scan_finger
            onChangeValue={(res) => {               
                check_pinCode(res)
            }}
            value={pincode_value}
        />
    </View>
}

export default EnterPinCode;

const styles = StyleSheet.create({
    TextHeader: {
        fontSize: fs(20),
        color: '#000000'
    },
    TextDetail: {
        fontSize: fs(16),
        color: '#030303'
    },
    TextBtn_bold: {
        fontSize: fs(20),
        color: '#0076ff'
    },
    TextBtn_small: {
        fontSize: fs(16),
        color: '#0076ff'
    },
    btn: {
        width: wp(70),
        height: hp(6),
        justifyContent: 'center',
        alignItems: 'center'
    }
})