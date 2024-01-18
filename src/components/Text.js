import {
    Platform,
    Text,
    StyleSheet,
    Dimensions
} from 'react-native';
import React, { useState, useEffect } from 'react';

export default function CustomText(props) {
    return (
        <Text allowFontScaling={false} numberOfLines={props.numberOfLines ? props.numberOfLines : null} ellipsizeMode={props.ellipsizeMode ? props.ellipsizeMode : null} onPress={props.onPress ? props.onPress : null} style={[styles.defaultStyle(props.StyleFont), props.style]}>
            {props.children}
        </Text>
    );
}
const styles = StyleSheet.create({
    defaultStyle: StyleFont => ({
        fontFamily: StyleFont == undefined ? "Prompt-Regular" : StyleFont == 'medium' ? 'Prompt-Medium' : "Prompt-SemiBold"
    }),
});
