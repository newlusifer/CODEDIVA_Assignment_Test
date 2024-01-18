import React, { useState, useEffect, useRef, useCallback } from 'react';
import { View, TouchableOpacity, StatusBar, StyleSheet, Image, TextInput, Keyboard } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { fs } from '../helper/helpers';
import Text from '../components/Text';
import _ from 'lodash';
import Pincode from '../components/Pincode';
const CreatePinCode = (props) => {
    const [confirm_pincode, setConfirm_pincode] = useState(false)
    const [pincode_value, setPincode_value] = useState('')
    const [, updateState] = useState();
    const forceUpdate = useCallback(() => updateState({}), []);
    useEffect(() => {

    }, [])
    const check_pinCode = (res) => {
        if (res.length == 6 || res.includes('4')) {
            if (confirm_pincode) {
                props.navigation.navigate('SetFingerPrint')
            }
            else {
                setConfirm_pincode(true)
                setPincode_value('')
            }
        }
        else {
            setPincode_value(res)
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
        <Pincode
            title={confirm_pincode == false ? 'ตั้งรหัส PIN CODE' : 'ยินยันรหัส PIN CODE'}
            onChangeValue={(res) => {
                console.log('check res --> ', res);
                check_pinCode(res)
            }}
            value={pincode_value}
        />
    </View>
}

export default CreatePinCode;

const styles = StyleSheet.create({

})