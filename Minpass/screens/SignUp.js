// Importing
import React, {useState, useContext} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import GlobalStyles from '../stylesheets/GlobalStyles';
import Colors from '../config/Colors';
import {Button} from '../components/Buttons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import {scale} from 'react-native-size-matters';
import * as Animatable from 'react-native-animatable';
import {ThemeContext} from '../manager/ThemeManager';

// Functional component
const SignUp = ({navigation}) => {
  // Getting values from theme context provider
  const {theme} = useContext(ThemeContext);

  // Local states
  const [isPasswordInvisible, setIsPasswordInvisible] = useState(true);

  // Toggling password visibility
  const _togglePasswordVisibility = () => {
    setIsPasswordInvisible(!isPasswordInvisible);
  };

  // Returning
  return (
    <SafeAreaView
      style={[
        GlobalStyles.safeAreaView,
        theme === 'light' ? GlobalStyles.bgGrey : GlobalStyles.bgSecondaryLight,
      ]}>
      {/* <View style={GlobalStyles.centerContentContainer}> */}
      <View style={[GlobalStyles.authFormLogoFlexArea, GlobalStyles.xyCenter]}>
        <View style={GlobalStyles.authFormLogoContainer}>
          <Animatable.Image
            delay={100}
            animation="bounceIn"
            easing="ease-in-out-sine"
            useNativeDriver={true}
            source={require('../assets/images/largelogo.png')}
            style={GlobalStyles.imageResponsive}
          />
        </View>
      </View>
      <View style={GlobalStyles.flexFiveContainer}>
        <Animatable.View
          delay={400}
          animation="fadeInUp"
          easing="ease-in-out-sine"
          useNativeDriver={true}
          style={[
            theme === 'light' ? GlobalStyles.bgWhite : GlobalStyles.bgSecondary,
            GlobalStyles.flexOneContainer,
            GlobalStyles.pFifteen,
            GlobalStyles.justifyContentCenter,
            GlobalStyles.authFormContainer,
          ]}>
          {/* Form title */}
          <Animatable.View
            delay={700}
            animation="fadeInDown"
            easing="ease-in-out-back"
            useNativeDriver={true}
            style={GlobalStyles.mbThirty}>
            <Text
              style={[
                GlobalStyles.paragraphLarge,
                GlobalStyles.montserratSemiBold,
                GlobalStyles.textLetterSpacing,
                GlobalStyles.textUppercase,
                theme === 'light'
                  ? GlobalStyles.textDark
                  : GlobalStyles.textWhite,
              ]}>
              Sign Up
            </Text>
            <View
              style={[
                GlobalStyles.authFormTitleLine,
                GlobalStyles.bgPrimary,
                GlobalStyles.brdFive,
              ]}
            />
          </Animatable.View>
          <Animatable.View
            delay={1000}
            animation="fadeInUp"
            easing="ease-in-out-back"
            useNativeDriver={true}>
            {/* Input field name */}
            <View style={GlobalStyles.mbTen}>
              <Text
                style={[
                  GlobalStyles.paragraphSmall,
                  GlobalStyles.openSansSemiBold,
                  GlobalStyles.textLetterSpacing,
                  GlobalStyles.textCapitalize,
                  GlobalStyles.mbFive,
                  theme === 'light'
                    ? GlobalStyles.textDark
                    : GlobalStyles.textWhite,
                ]}>
                Name
              </Text>
              <TextInput
                placeholder="Enter your name"
                placeholderTextColor={
                  theme === 'light' ? Colors.textLight : Colors.darkGrey
                }
                style={[
                  GlobalStyles.plTen,
                  GlobalStyles.brdFive,
                  GlobalStyles.paragraphSmall,
                  GlobalStyles.openSansRegular,
                  GlobalStyles.textLetterSpacing,
                  GlobalStyles.brPrimary,
                  GlobalStyles.textInput,
                  theme === 'light'
                    ? GlobalStyles.textDark
                    : GlobalStyles.textWhite,
                  theme !== 'light' && GlobalStyles.bgSecondaryDarkest,
                ]}
              />
            </View>
            {/* Input field email */}
            <View style={GlobalStyles.mbTen}>
              <Text
                style={[
                  GlobalStyles.paragraphSmall,
                  GlobalStyles.openSansSemiBold,
                  GlobalStyles.textLetterSpacing,
                  GlobalStyles.textCapitalize,
                  GlobalStyles.mbFive,
                  theme === 'light'
                    ? GlobalStyles.textDark
                    : GlobalStyles.textWhite,
                ]}>
                Email
              </Text>
              <TextInput
                placeholder="Enter your email"
                placeholderTextColor={
                  theme === 'light' ? Colors.textLight : Colors.darkGrey
                }
                style={[
                  GlobalStyles.plTen,
                  GlobalStyles.brdFive,
                  GlobalStyles.paragraphSmall,
                  GlobalStyles.openSansRegular,
                  GlobalStyles.textLetterSpacing,
                  GlobalStyles.brPrimary,
                  GlobalStyles.textInput,
                  theme === 'light'
                    ? GlobalStyles.textDark
                    : GlobalStyles.textWhite,
                  theme !== 'light' && GlobalStyles.bgSecondaryDarkest,
                ]}
              />
            </View>
            {/* Input field password */}
            <View style={[GlobalStyles.mbTen, GlobalStyles.mbZero]}>
              <Text
                style={[
                  GlobalStyles.paragraphSmall,
                  GlobalStyles.openSansSemiBold,
                  GlobalStyles.textLetterSpacing,
                  GlobalStyles.textCapitalize,
                  GlobalStyles.mbFive,
                  theme === 'light'
                    ? GlobalStyles.textDark
                    : GlobalStyles.textWhite,
                ]}>
                Password
              </Text>
              <View style={GlobalStyles.positionRelative}>
                <TextInput
                  placeholder="Enter your password"
                  placeholderTextColor={
                    theme === 'light' ? Colors.textLight : Colors.darkGrey
                  }
                  style={[
                    GlobalStyles.plTen,
                    GlobalStyles.brdFive,
                    GlobalStyles.paragraphSmall,
                    GlobalStyles.openSansRegular,
                    GlobalStyles.textLetterSpacing,
                    GlobalStyles.brPrimary,
                    GlobalStyles.textInput,
                    theme === 'light'
                      ? GlobalStyles.textDark
                      : GlobalStyles.textWhite,
                    theme !== 'light' && GlobalStyles.bgSecondaryDarkest,
                  ]}
                  secureTextEntry={isPasswordInvisible}
                />
                {/* Icon eye */}
                <TouchableOpacity
                  onPress={() => _togglePasswordVisibility()}
                  style={[
                    GlobalStyles.positionAbsolute,
                    GlobalStyles.inputEyeIcon,
                  ]}>
                  {/* Comparing */}
                  {isPasswordInvisible ? (
                    <MaterialIcon
                      name="visibility"
                      size={scale(25)}
                      color={Colors.primary}
                    />
                  ) : (
                    <MaterialIcon
                      name="visibility-off"
                      size={scale(25)}
                      color={Colors.red}
                    />
                  )}
                </TouchableOpacity>
              </View>
            </View>
            {/* Button component */}
            <Button label="Sign In" />
            {/* Question */}
            <View
              style={[
                GlobalStyles.flexRow,
                GlobalStyles.justifyContentCenter,
                GlobalStyles.mbFive,
              ]}>
              <Text
                style={[
                  GlobalStyles.paragraphSmall,
                  GlobalStyles.openSansRegular,
                  GlobalStyles.textLetterSpacing,
                  GlobalStyles.mrFive,
                  theme === 'light'
                    ? GlobalStyles.textLight
                    : GlobalStyles.textWhite,
                ]}>
                Already have an account?
              </Text>
              <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
                <Text
                  style={[
                    GlobalStyles.paragraphSmall,
                    GlobalStyles.openSansSemiBold,
                    GlobalStyles.textLetterSpacing,
                    GlobalStyles.mrFive,
                    GlobalStyles.textPrimary,
                  ]}>
                  Sign In
                </Text>
              </TouchableOpacity>
            </View>
          </Animatable.View>
          {/* Questions end */}
        </Animatable.View>
      </View>
      {/* </View> */}
    </SafeAreaView>
  );
};

// Exporting
export default SignUp;
