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
import Modal from 'react-native-modal';
import * as Animatable from 'react-native-animatable';
import {ThemeContext} from '../manager/ThemeManager';

// Functional component
const SignIn = ({navigation}) => {
  // Getting values from theme context provider
  const {theme} = useContext(ThemeContext);

  // Local states
  const [isPasswordInvisible, setIsPasswordInvisible] = useState(true);
  const [isModalVisible, setIsModalVisible] = useState(false);

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
              Sign In
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
            <Button label="Sign In" onPress={()=>navigation.navigate("Homenew")} />
            {/* Questions start */}
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
                Forgot password?
              </Text>
              <TouchableOpacity onPress={() => setIsModalVisible(true)}>
                <Text
                  style={[
                    GlobalStyles.paragraphSmall,
                    GlobalStyles.openSansSemiBold,
                    GlobalStyles.textLetterSpacing,
                    GlobalStyles.mrFive,
                    GlobalStyles.textPrimary,
                  ]}>
                  Reset
                </Text>
              </TouchableOpacity>
            </View>
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
                Don't have an account?
              </Text>
              <TouchableOpacity onPress={() => navigation.navigate('Signupnew')}>
                <Text
                  style={[
                    GlobalStyles.paragraphSmall,
                    GlobalStyles.openSansSemiBold,
                    GlobalStyles.textLight,
                    GlobalStyles.textLetterSpacing,
                    GlobalStyles.mrFive,
                    GlobalStyles.textPrimary,
                  ]}>
                  Sign Up
                </Text>
              </TouchableOpacity>
            </View>
          </Animatable.View>
          {/* Questions end */}
        </Animatable.View>
      </View>
      {/* Forgot password Modal */}
      <View>
        <Modal
          isVisible={isModalVisible}
          backdropColor={Colors.secondaryLight}
          backdropOpacity={0.9}
          style={GlobalStyles.mTen}>
          {/* Modal content */}
          <View
            style={[
              theme === 'light'
                ? GlobalStyles.bgWhite
                : GlobalStyles.bgSecondary,
              GlobalStyles.pFifteen,
              GlobalStyles.brdTen,
              GlobalStyles.positionRelative,
            ]}>
            {/* Modal title */}
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
              Reset password
            </Text>
            {/* Modal info */}
            <Text
              style={[
                GlobalStyles.paragraphSmall,
                GlobalStyles.openSansRegular,
                GlobalStyles.textLetterSpacing,
                GlobalStyles.mbFifteen,
                theme === 'light'
                  ? GlobalStyles.textLight
                  : GlobalStyles.textDarkGrey,
              ]}>
              We'll send 4 digit code to your eMail.
            </Text>
            {/* Input field email */}
            <View style={GlobalStyles.mbTen}>
              <TextInput
                placeholder="Enter email address"
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
            {/* Button component */}
            <Button
              label="Reset password"
              customButtonStyle={[GlobalStyles.mVrZero, GlobalStyles.mtFive]}
            />

            {/* Modal close icon */}
            <View
              style={[
                GlobalStyles.positionAbsolute,
                GlobalStyles.xyCenter,
                GlobalStyles.brdFifteen,
                GlobalStyles.modalCloseIconContainer,
                theme === 'light'
                  ? GlobalStyles.bgPrimaryLightest
                  : GlobalStyles.bgSecondaryDarkest,
              ]}>
              <TouchableOpacity
                onPress={() => setIsModalVisible(!isModalVisible)}>
                <MaterialIcon
                  name="close"
                  size={scale(20)}
                  color={Colors.primary}
                />
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    </SafeAreaView>
  );
};

// Exporting
export default SignIn;
