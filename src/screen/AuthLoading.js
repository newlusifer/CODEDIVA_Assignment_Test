import React, { useState, useEffect, useRef } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const AuthLoading = (props) => {
    useEffect(() => {
        setTimeout(() => {
            props.navigation.navigate('SelectLanguage')
        }, 3000);
    }, [])
    return <View style={{
        flex: 1,
        backgroundColor: '#5DC9F8'
    }} />
}

export default AuthLoading;