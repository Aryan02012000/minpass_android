// Importing
import React, {useContext} from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import Modal from 'react-native-modal';
import LottieView from 'lottie-react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Colors from '../config/Colors';
import {Button} from './Buttons';
import GlobalStyles from '../stylesheets/GlobalStyles';
import AlertsStyles from '../stylesheets/components/AlertsStyles';
import {scale} from 'react-native-size-matters';
import Snackbar from 'react-native-snackbar';
import {ThemeContext} from '../manager/ThemeManager';

// Functional components

// Confirmation alert
const ConfirmationAlert = ({
  isVisible,
  title,
  subTitle,
  onPressClose,
  onPressCancel,
  onPressDelete,
  isItemDeleted,
  isCloseVisible,
  dynamicLottieView,
  loop,
  dynamicLottieViewTitle,
  cancelButtonLabel,
  confirmButtonLabel,
}) => {
  // Getting values from theme context provider
  const {theme} = useContext(ThemeContext);

  // Returning
  return (
    <View>
      <Modal
        isVisible={isVisible}
        backdropColor={Colors.secondaryLight}
        backdropOpacity={0.8}
        style={GlobalStyles.mTen}>
        {/* Modal content */}
        <View
          style={[
            theme === 'light' ? GlobalStyles.bgWhite : GlobalStyles.bgSecondary,
            GlobalStyles.positionRelative,
            GlobalStyles.brdTwenty,
            GlobalStyles.xyCenter,
            AlertsStyles.alertContenContainer,
          ]}>
          {/* Trash lottie animation */}
          <LottieView
            source={require('../assets/lottie/trash.json')}
            autoPlay
            loop
            style={AlertsStyles.lottieViewTrash}
            resizeMode="cover"
          />
          {/* Title */}
          <View>
            <Text
              style={[
                GlobalStyles.paragraphMedium,
                GlobalStyles.montserratSemiBold,
                GlobalStyles.textLetterSpacing,
                theme === 'light'
                  ? GlobalStyles.textDark
                  : GlobalStyles.textWhite,
              ]}>
              {title}
            </Text>
            <Text
              style={[
                GlobalStyles.paragraphSmall,
                GlobalStyles.openSansRegular,
                GlobalStyles.textLetterSpacing,
                GlobalStyles.textCenter,
                theme === 'light'
                  ? GlobalStyles.textLight
                  : GlobalStyles.textDarkGrey,
              ]}>
              {subTitle}
            </Text>
          </View>
          {/* Action buttons */}
          <View style={[GlobalStyles.flexRow, GlobalStyles.mVrFifteen]}>
            {/* Button component */}
            <Button
              label={cancelButtonLabel}
              customButtonStyle={[
                GlobalStyles.mHrFive,
                GlobalStyles.mVrZero,
                GlobalStyles.bgDanger,
                GlobalStyles.brDanger,
                AlertsStyles.actionButton,
              ]}
              onPress={onPressCancel}
            />
            {/* Button component */}
            <Button
              label={confirmButtonLabel}
              customButtonStyle={[
                GlobalStyles.mHrFive,
                GlobalStyles.mVrZero,
                AlertsStyles.actionButton,
              ]}
              onPress={onPressDelete}
            />
          </View>
          {isItemDeleted ? (
            <View
              style={[
                GlobalStyles.positionAbsolute,
                GlobalStyles.bgWhite,
                GlobalStyles.brdTwenty,
                GlobalStyles.xyCenter,
                AlertsStyles.alertModalOverlay,
              ]}>
              {/* Trash lottie animation */}
              <LottieView
                source={dynamicLottieView}
                autoPlay
                loop={loop}
                style={AlertsStyles.dynamicLottieView}
                resizeMode="cover"
              />
              {/* Done title */}
              <Text
                style={[
                  GlobalStyles.paragraphMedium,
                  GlobalStyles.montserratSemiBold,
                  GlobalStyles.textLetterSpacing,
                  GlobalStyles.textDark,
                ]}>
                {dynamicLottieViewTitle}
              </Text>
              {/* Modal close icon */}
              {isCloseVisible ? (
                <View
                  style={[
                    GlobalStyles.positionAbsolute,
                    GlobalStyles.xyCenter,
                    GlobalStyles.brdFifteen,
                    GlobalStyles.bgPrimaryLightest,
                    GlobalStyles.modalCloseIconContainer,
                  ]}>
                  <TouchableOpacity onPress={onPressClose}>
                    <Icon
                      name="close-outline"
                      size={scale(25)}
                      color={Colors.primary}
                    />
                  </TouchableOpacity>
                </View>
              ) : null}
            </View>
          ) : null}
        </View>
      </Modal>
    </View>
  );
};

// Snackbar alert
const SnackbarAlert = (
  text,
  textColor,
  backgroundColor,
  actionText,
  actionTextColor,
) =>
  Snackbar.show({
    text: text,
    textColor: textColor,
    backgroundColor: backgroundColor,
    duration: 3000,
    action: {
      text: actionText,
      textColor: actionTextColor,
    },
  });

// Exporting
export {ConfirmationAlert, SnackbarAlert};
