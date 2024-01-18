import React, { useState, useEffect, useRef } from 'react';
import { View, TouchableOpacity, StatusBar, StyleSheet, Image } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { fs } from '../helper/helpers';
import Text from '../components/Text';
const RequestOtp = (props) => {
    return <View style={{
        flex: 1,
        backgroundColor: '#f4f4f4'
    }} >
        <StatusBar
            backgroundColor='#f4f4f4'
            barStyle='dark-content'
        />
        <View style={{ padding: wp(5), position: 'absolute' }}>
            <TouchableOpacity style={{ padding: wp(2), paddingLeft: 0,width: wp(10) }} onPress={() => {
                props.navigation.navigate('Login')
            }}>
                <FontAwesomeIcon
                    icon={['fas', 'arrow-left']}
                    size={wp(4)}
                    color='#000000'
                />
            </TouchableOpacity>
        </View>
        <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Image
                source={require('../../assets/images/icons/phonelink_lock.png')}
                style={{
                    width: wp(20),
                    height: wp(20),
                    resizeMode: 'contain',
                    tintColor: '#b8884e'
                }}
            />
            <View style={{ marginTop: hp(5) }} />
            <Text StyleFont={'semiBold'} style={styles.TextHeader}>OTP จะถูกส่งไปที่เบอร์โทรศัพท์</Text>
            <View style={{ marginTop: hp(1) }} />
            <Text style={styles.TextDetail}>082-XXX-8998</Text>
            <View style={{ marginTop: hp(5) }} />
            <TouchableOpacity style={styles.btn}
                onPress={() => { props.navigation.navigate('ConfirmOtp') }}
            >
                <Text style={styles.btn_text}>ขอรหัส OTP</Text>
            </TouchableOpacity>
            <View style={{ marginTop: hp(3) }} />
            <Text style={styles.text_info}>กรณีเบอร์โทรศัพท์ไม่ถูกต้องกรุณาติดต่อเบอร์ 02-XXX-XXX</Text>
        </View>
    </View>
}

export default RequestOtp;

const styles = StyleSheet.create({
    TextHeader: {
        fontSize: fs(25),
        color: '#000000'
    },
    TextDetail: {
        fontSize: fs(22),
        color: '#b8884e'
    },
    text_info: {
        fontSize: fs(14),
        color: '#929292'
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