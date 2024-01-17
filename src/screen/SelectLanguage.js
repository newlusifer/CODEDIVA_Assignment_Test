import React, { useState, useEffect, useRef } from 'react';
import { View, TouchableOpacity, StatusBar } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const SelectLanguage = (props) => {
    return <View style={{
        flex: 1,
        backgroundColor: '#ffffff'
    }} >
        <StatusBar
            backgroundColor='#ffffff'
            barStyle='dark-content'
        />
    </View>
}

export default SelectLanguage;