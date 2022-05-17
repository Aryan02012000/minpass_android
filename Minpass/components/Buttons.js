// Importing
import React, {useContext} from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import ButtonsStyles from '../stylesheets/components/ButtonsStyles';
import Icon from 'react-native-vector-icons/Ionicons';
import GlobalStyles from '../stylesheets/GlobalStyles';
import {scale} from 'react-native-size-matters';
import Colors from '../config/Colors';
import {ThemeContext} from '../manager/ThemeManager';


// Functional components


const ButtonNew = ({label, customLabelStyle, customButtonStyle, onPress}) => (
  <TouchableOpacity
    style={[
      GlobalStyles.xyCenter,
      GlobalStyles.brdFive,
      GlobalStyles.mVrFive,
      GlobalStyles.bgPrimaryLightest,
      GlobalStyles.brPrimary,
      ButtonsStyles.button,
      customButtonStyle,
    ]}
    onPress={onPress}>
    <Text
      style={[
        GlobalStyles.paragraphSmall,
        GlobalStyles.openSansRegular,
        GlobalStyles.textLetterSpacing,
        
        GlobalStyles.textDark,
        customLabelStyle,
      ]}>
      {label}
    </Text>
  </TouchableOpacity>
);

// Button
const Button = ({label, customLabelStyle, customButtonStyle, onPress}) => (
  <TouchableOpacity
    style={[
      GlobalStyles.xyCenter,
      GlobalStyles.brdFive,
      GlobalStyles.mVrTwenty,
      GlobalStyles.bgPrimary,
      GlobalStyles.brPrimary,
      ButtonsStyles.button,
      customButtonStyle,
    ]}
    onPress={onPress}>
    <Text
      style={[
        GlobalStyles.paragraphMedium,
        GlobalStyles.openSansSemiBold,
        GlobalStyles.textLetterSpacing,
        GlobalStyles.textUppercase,
        GlobalStyles.textWhite,
        customLabelStyle,
      ]}>
      {label}
    </Text>
  </TouchableOpacity>
);

// Button with icon
const ButtonWithIcon = ({
  iconName,
  iconSize,
  iconColor,
  customButtonStyle,
  onPress,
}) => (
  <TouchableOpacity
    style={[
      GlobalStyles.xyCenter,
      GlobalStyles.brdFive,
      GlobalStyles.brPrimary,
      ButtonsStyles.button,
      customButtonStyle,
    ]}
    onPress={onPress}>
    <Icon name={iconName} size={iconSize} color={iconColor} />
  </TouchableOpacity>
);

// Circled submit button
const CircledSubmitButton = ({icon, onPress}) => {
  // Getting values from theme context provider
  const {theme} = useContext(ThemeContext);

  // Returning
  return (
    <TouchableOpacity
      style={[
        GlobalStyles.positionAbsolute,
        GlobalStyles.brdFifty,
        GlobalStyles.alignItemsCenter,
        GlobalStyles.justifyContentCenter,
        GlobalStyles.alignSelfCenter,
        theme === 'light'
          ? GlobalStyles.bgWhite
          : GlobalStyles.bgSecondaryDarkest,
        ButtonsStyles.circledSubmitButtonContainer,
      ]}
      onPress={onPress}>
      <View
        style={[
          theme === 'light' ? GlobalStyles.bgPrimary : GlobalStyles.bgSecondary,
          GlobalStyles.brdForty,
          GlobalStyles.alignItemsCenter,
          GlobalStyles.justifyContentCenter,
          ButtonsStyles.circledSubmitButton,
        ]}>
        <Icon
          name={icon}
          size={scale(25)}
          color={theme === 'light' ? Colors.white : Colors.primary}
        />
      </View>
    </TouchableOpacity>
  );
};

// Exporting
export {Button,ButtonNew, ButtonWithIcon, CircledSubmitButton};
