import React, { useState, useEffect, useRef } from 'react';
import { View, TouchableOpacity, StatusBar, StyleSheet } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { fs } from '../helper/helpers';
import Text from '../components/Text';
const SelectLanguage = (props) => {   
    return <View style={{
        flex: 1,
        backgroundColor: '#ffffff'
    }} >
        <StatusBar
            backgroundColor='#ffffff'
            barStyle='dark-content'
        />
        <View style={{
            flex: 1,
            justifyContent: 'center',
        }}>
            <View style={{
                paddingLeft: wp(5),
                paddingRight: wp(5)
            }}>
                <Text StyleFont={'semiBold'} style={styles.TextHeader}>ยินดีต้อนรับ</Text>
                <Text style={styles.TextDetail}>กรุณาเลือกภาษา</Text>
            </View>
            <View style={{
                alignItems: 'center',
                marginTop: hp(10)
            }}>
                <TouchableOpacity style={styles.btn_style}>
                    <Text style={styles.btn_text}>English</Text>
                </TouchableOpacity>
                <View style={{ marginTop: hp(3) }} />
                <TouchableOpacity style={styles.btn_style}
                    onPress={() => {
                        props.navigation.navigate('TermsOfService')
                    }}
                >
                    <Text style={styles.btn_text}>ไทย</Text>
                </TouchableOpacity>
            </View>
        </View>
    </View>
}

export default SelectLanguage;

const styles = StyleSheet.create({
    TextHeader: {
        fontSize: fs(20),
        color: '#000000'
    },
    TextDetail: {
        fontSize: fs(16),
    },
    btn_text: {
        fontSize: fs(16),
        color: '#ffffff'
    },
    btn_style: {
        width: wp(90),
        height: hp(6),
        borderRadius: 5,
        backgroundColor: '#b8884e',
        justifyContent: 'center',
        alignItems: 'center'
    }
})