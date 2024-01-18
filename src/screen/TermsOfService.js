import React, { useState, useEffect, useRef } from 'react';
import { View, TouchableOpacity, StatusBar, StyleSheet } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { fs } from '../helper/helpers';
import Text from '../components/Text';
const TermsOfService = (props) => {
    return <View style={{
        flex: 1,
        backgroundColor: '#f4f4f4'
    }} >
        <StatusBar
            backgroundColor='#f4f4f4'
            barStyle='dark-content'
        />
        <View style={{
            flex: 1,
            justifyContent: 'space-between'
        }}>
            <View style={{
                padding: wp(5)
            }}>
                <TouchableOpacity style={{ padding: wp(2), paddingLeft: 0, width: wp(10), }} onPress={() => {
                    props.navigation.navigate('SelectLanguage')
                }}>
                    <FontAwesomeIcon
                        icon={['fas', 'arrow-left']}
                        size={wp(4)}
                        color='#000000'
                    />
                </TouchableOpacity>
            </View>
            <View style={{
                width: wp(100),
                height: hp(75),
                backgroundColor: '#ffffff',
                borderTopLeftRadius: 15,
                borderTopRightRadius: 15,
                shadowColor: '#000000',
                shadowOffset: { height: -3, width: 0 },
                shadowOpacity: 1,
                shadowRadius: 2,
                elevation: 5,
                alignItems: 'center',
            }}>
                <View style={{
                    width: wp(90),
                    flexDirection: 'row',
                    alignItems: 'center',
                    borderBottomWidth: 2,
                    borderBottomColor: '#f2f2f2',
                    paddingTop: hp(3),
                    paddingBottom: hp(3)
                }}>
                    <FontAwesomeIcon
                        icon={['far', 'file-lines']}
                        size={hp(3)}
                        color='#b8884e'
                    />
                    <View style={{ marginRight: wp(2) }} />
                    <Text StyleFont={'semiBold'} style={styles.TextHeader}>เงื่อนไขการใช้บริการ</Text>
                </View>
                <View style={{
                    flex: 1,
                    justifyContent: 'flex-end'
                }}>
                    <View style={{
                        width: wp(90),
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        paddingBottom: hp(3)
                    }}>
                        <TouchableOpacity style={styles.btn_style(true)}>
                            <Text style={styles.btn_text(true)}>ปฏิเสธ</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btn_style(false)}
                            onPress={() => {
                                props.navigation.navigate('Login')
                            }}
                        >
                            <Text style={styles.btn_text(false)}>ยอมรับ</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    </View>
}

export default TermsOfService;

const styles = StyleSheet.create({
    TextHeader: {
        fontSize: fs(25),
        color: '#000000'
    },
    TextDetail: {
        fontSize: fs(16),
    },
    btn_text: (outline) => ({
        fontSize: fs(16),
        color: outline ? '#b8884e' : '#ffffff',
    }),
    btn_style: (outline) => ({
        width: wp(42),
        height: hp(6),
        backgroundColor: outline ? '#ffffff' : '#b8884e',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: outline ? '#b8884e' : '#ffffff',
        justifyContent: 'center',
        alignItems: 'center',
    })
})