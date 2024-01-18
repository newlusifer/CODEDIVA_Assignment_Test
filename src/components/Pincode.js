import React, { useState, useEffect, useRef, useCallback } from 'react';
import { View, TouchableOpacity, StatusBar, StyleSheet, Image, TextInput, Keyboard } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { fs } from '../helper/helpers';
import Text from '../components/Text';
import _ from 'lodash';
export default function CreatePinCode(props) {
    const pin_value = useRef([])
    const [, updateState] = useState();
    const forceUpdate = useCallback(() => updateState({}), []);
    const id_onpress_btn = useRef(null)
    useEffect(() => {

    }, [])
    useEffect(() => {
        pin_value.current = props.value
        forceUpdate()
    }, [props.value])
    return <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }}>
        <Text style={styles.TextDetail}>{props.title}</Text>
        <TouchableOpacity style={{
            flexDirection: 'row',
            alignItems: 'center',
            width: wp(50),
            justifyContent: 'space-between',
            marginTop: hp(3),
        }} activeOpacity={1}>
            {_.map(Array(6), (item, index) => {
                return <FontAwesomeIcon key={index}
                    icon={[pin_value.current.length > index ? 'fas' : 'far', 'circle']}
                    size={wp(4)}
                    color={pin_value.current.length > index ? '#b8884e' : '#828282'}
                />
            })}
        </TouchableOpacity>
        <TouchableOpacity style={{
            flexDirection: 'row',
            alignItems: 'center',
            width: wp(80),
            justifyContent: 'space-between',
            marginTop: hp(6),
            flexWrap: 'wrap'
        }} activeOpacity={1}>
            {_.map(Array(12), (item, index) => {
                return <View key={index} style={{ width: wp(26), justifyContent: 'center', alignItems: 'center', marginBottom: hp(3) }}>
                    {index != 9 && index != 11 &&
                        <TouchableOpacity style={{ width: wp(18), height: wp(18), borderRadius: 100, borderWidth: 1, borderColor: '#828282', justifyContent: 'center', alignItems: 'center', backgroundColor: id_onpress_btn.current == index ? '#b8884e' : '#ffffff' }}
                            activeOpacity={1}
                            onPress={() => {
                                if (pin_value.current.length <= 5) {
                                    pin_value.current += index + 1
                                    props.onChangeValue(pin_value.current)
                                }
                                forceUpdate()                               
                            }}
                            onPressIn={() => {
                                id_onpress_btn.current = index
                                forceUpdate()
                            }}
                            onPressOut={() => {
                                id_onpress_btn.current = null
                                forceUpdate()
                            }}
                        >
                            <Text style={styles.TextPin(id_onpress_btn.current == index ? '#ffffff' : '#828282')}>{index == 10 ? '0' : index + 1}</Text>
                        </TouchableOpacity>
                    }
                    {index == 11 &&
                        <TouchableOpacity style={{ width: wp(18), height: wp(18), borderRadius: 100, justifyContent: 'center', alignItems: 'center' }}
                            onPress={() => {
                                pin_value.current = pin_value.current.substr(0, pin_value.current.length - 1);
                                props.onChangeValue(pin_value.current)
                                forceUpdate()                              
                            }}
                        >
                            <FontAwesomeIcon key={index}
                                icon={['fas', 'delete-left']}
                                size={wp(7)}
                                color='#646465'
                            />
                        </TouchableOpacity>
                    }
                    {index == 9 && props.scan_finger &&
                        <TouchableOpacity style={{ width: wp(18), height: wp(18), borderRadius: 100, justifyContent: 'center', alignItems: 'center' }}
                            onPress={() => {

                            }}
                        >
                            <FontAwesomeIcon key={index}
                                icon={['fas', 'fingerprint']}
                                size={wp(10)}
                                color='#b8884e'
                            />
                        </TouchableOpacity>
                    }
                </View>
            })}
        </TouchableOpacity>
    </View>
}

const styles = StyleSheet.create({
    TextDetail: {
        fontSize: fs(18),
    },
    TextPin: (color) => ({
        fontSize: fs(30),
        color: color
    }),
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