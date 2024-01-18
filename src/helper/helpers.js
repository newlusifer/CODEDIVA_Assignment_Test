import { RFValue } from "react-native-responsive-fontsize";
import { widthPercentageToDP, heightPercentageToDP } from 'react-native-responsive-screen';
import { Dimensions, Platform, PixelRatio } from 'react-native';

export const fs = (size) => {
    const {
        width: SCREEN_WIDTH,
        height: SCREEN_HEIGHT,
    } = Dimensions.get('window');
    const fontSizeScaling = RFValue(size, SCREEN_HEIGHT)
    return fontSizeScaling;
}

const helpers = {
    fs
}