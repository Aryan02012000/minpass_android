// Importing
import React from 'react';
import {View} from 'react-native';
import LottieView from 'lottie-react-native';
import GlobalStyles from '../stylesheets/GlobalStyles';
import * as Animatable from 'react-native-animatable';

// Functional components

// Screen loader
const ScreenLoader = ({message}) => (
  <View style={[GlobalStyles.flexOneContainer, GlobalStyles.xyCenter]}>
    <View style={[GlobalStyles.loaderContainer]}>
      {/* Lottie view */}
      <LottieView
        source={require('../assets/lottie/screen-loader.json')}
        loop
        autoPlay
        resizeMode="cover"
      />
    </View>
    <Animatable.Text
      delay={500}
      animation="fadeInUp"
      easing="ease-in-out-sine"
      useNativeDriver={true}
      style={[
        GlobalStyles.paragraphLarge,
        GlobalStyles.montserratSemiBold,
        GlobalStyles.textLetterSpacing,
        GlobalStyles.textDark,
      ]}>
      Please wait...
    </Animatable.Text>
    <Animatable.Text
      delay={1000}
      animation="fadeInUp"
      useNativeDriver={true}
      easing="ease-in-out-sine"
      style={[
        GlobalStyles.paragraphSmall,
        GlobalStyles.openSansRegular,
        GlobalStyles.textLetterSpacing,
        GlobalStyles.textDark,
        GlobalStyles.textCenter,
      ]}>
      {message}
    </Animatable.Text>
  </View>
);

// Exporting
export {ScreenLoader};
