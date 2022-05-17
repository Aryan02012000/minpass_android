// Importing
import React from 'react';
import {View, SafeAreaView, ImageBackground} from 'react-native';
import GlobalStyles from '../stylesheets/GlobalStyles';
import SplashStyles from '../stylesheets/screens/SplashStyles';
import * as Animatable from 'react-native-animatable';

// Functional component
const Splash = () => {
  return (
    <SafeAreaView style={[GlobalStyles.safeAreaView, GlobalStyles.bgGrey]}>
      <ImageBackground
        source={require('../assets/images/login-bg-1.png')}
        style={[GlobalStyles.flexOneContainer, GlobalStyles.positionRelative]}
        // blurRadius={10}
        resizeMode="cover">
        {/* Overlaty */}
        <View
          style={[
            GlobalStyles.positionAbsolute,
            GlobalStyles.bgWhite,
            GlobalStyles.lZero,
            GlobalStyles.tZero,
            SplashStyles.overlay,
          ]}></View>
        <View
          style={[
            GlobalStyles.flexOneContainer,
            GlobalStyles.pFifteen,
            GlobalStyles.xyCenter,
          ]}>
          <View style={[GlobalStyles.pThirty, SplashStyles.logoContainer]}>
            <Animatable.Image
              delay={100}
              animation="bounceIn"
              easing="ease-in-out-sine"
              useNativeDriver={true}
              style={GlobalStyles.imageResponsive}
              source={require('../assets/images/largelogo.png')}
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
            MinPass
          </Animatable.Text>
          <Animatable.Text
            delay={1000}
            animation="fadeInUp"
            easing="ease-in-out-sine"
            useNativeDriver={true}
            style={[
              GlobalStyles.paragraphSmall,
              GlobalStyles.montserratMedium,
              GlobalStyles.textLetterSpacing,
              GlobalStyles.textPrimary,
              GlobalStyles.textUppercase,
              SplashStyles.slogan,
            ]}>
           Security System
          </Animatable.Text>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

// Exporting
export default Splash;
