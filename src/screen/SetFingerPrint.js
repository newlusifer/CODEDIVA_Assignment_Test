import React, { useState, useEffect, useRef, useCallback } from 'react';
import { View, TouchableOpacity, StatusBar, StyleSheet, Image, TextInput, Keyboard } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { fs } from '../helper/helpers';
import Text from '../components/Text';
import _ from 'lodash';
import Pincode from '../components/Pincode';
const SetFingerPrint = (props) => {
    const [confirm_pincode, setConfirm_pincode] = useState(false)
    const [, updateState] = useState();
    const forceUpdate = useCallback(() => updateState({}), []);
    useEffect(() => {

    }, [])
    return <View style={{
        flex: 1,
        backgroundColor: '#f4f4f4'
    }} >
        <StatusBar
            backgroundColor='#f4f4f4'
            barStyle='dark-content'
        />
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <View style={{ width: wp(90), marginBottom: hp(15) }}>
                <Text StyleFont={'semiBold'} style={styles.TextHeader}>Touch ID</Text>
                <View style={{ marginTop: hp(3) }} />
                <Text style={styles.TextDetail}>ตั้งค่าล็อกอินด้วยลายนิ้วมือ</Text>
                <View style={{ marginTop: hp(0.5) }} />
                <Text style={styles.TextDetail}>เพื่อการเข้าถึงที่รวดเร็วขึ้น</Text>
            </View>
            <View style={{
                width: hp(12),
                height: hp(12),
                borderRadius: 100,
                backgroundColor: '#ffffff',
                justifyContent: 'center',
                alignItems: 'center',
                shadowColor: '#000000',
                shadowOffset: { height: 0, width: 0 },
                shadowOpacity: 1,
                shadowRadius: 2,
                elevation: 4,
            }}>
                <FontAwesomeIcon
                    icon={['fas', 'fingerprint']}
                    size={hp(10)}
                    color={'#b8884e'}
                />
            </View>
            <View style={{ marginTop: hp(20) }} />
            <TouchableOpacity style={styles.btn}>
                <Text style={styles.btn_text}>ตั้งค่าลายนิ้วมือ</Text>
            </TouchableOpacity>
            <View style={{ marginTop: hp(1) }} />
            <TouchableOpacity style={styles.btn_skip} onPress={() => {
                props.navigation.navigate('EnterPinCode')
            }} >
                <Text style={styles.btn_text_skip}>ข้าม</Text>
            </TouchableOpacity>
        </View>
    </View>
}

export default SetFingerPrint;

const styles = StyleSheet.create({
    TextHeader: {
        fontSize: fs(25),
        color: '#000000'
    },
    TextDetail: {
        fontSize: fs(18),
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
    },
    btn_skip: {
        width: wp(20),
        height: hp(6),
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btn_text_skip: {
        fontSize: fs(16),
        color: '#b8884e',
    },
})