// Importing
import React, {useContext} from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import GlobalStyles from '../stylesheets/GlobalStyles';
import RadiosStyles from '../stylesheets/components/RadiosStyles';
import {ThemeContext} from '../manager/ThemeManager';

// Functional components

// Boxed radio default
const BoxedRadioDefault = ({
  label,
  customLabelStyle,
  customRadioStyle,
  onPress,
}) => {
  // Getting values from theme context provider
  const {theme} = useContext(ThemeContext);

  // Returning
  return (
    <TouchableOpacity
      style={[
        GlobalStyles.flexRow,
        GlobalStyles.brdFive,
        RadiosStyles.boxedRadioButton,
        GlobalStyles.xyCenter,
        theme === 'light' ? GlobalStyles.brGrey : GlobalStyles.brSecondary,
        customRadioStyle,
      ]}
      onPress={onPress}>
      <View
        style={[
          GlobalStyles.brdTen,
          RadiosStyles.radioCircle,
          theme === 'light' ? GlobalStyles.brGrey : GlobalStyles.brDarkGrey,
          GlobalStyles.xyCenter,
        ]}>
        <View
          style={[
            GlobalStyles.brdFive,
            theme === 'light' ? GlobalStyles.bgGrey : GlobalStyles.bgDarkGrey,
            RadiosStyles.radioCircleCenter,
          ]}
        />
      </View>
      <Text
        style={[
          GlobalStyles.paragraphSmall,
          GlobalStyles.openSansSemiBold,
          GlobalStyles.textLetterSpacing,
          GlobalStyles.textCapitalize,
          GlobalStyles.mHrFive,
          theme === 'light' ? GlobalStyles.textDark : GlobalStyles.textDarkGrey,
          customLabelStyle,
        ]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

// Boxed radio selected
const BoxedRadioSelected = ({
  label,
  customLabelStyle,
  customRadioStyle,
  onPress,
}) => (
  <TouchableOpacity
    style={[
      GlobalStyles.flexRow,
      GlobalStyles.brdFive,
      GlobalStyles.xyCenter,
      RadiosStyles.boxedRadioButton,
      GlobalStyles.bgPrimaryLightest,
      GlobalStyles.brPrimary,
      customRadioStyle,
    ]}
    onPress={onPress}>
    <View
      style={[
        GlobalStyles.brdTen,
        GlobalStyles.brPrimary,
        GlobalStyles.xyCenter,
        RadiosStyles.radioCircle,
      ]}>
      <View
        style={[
          GlobalStyles.brdFive,
          GlobalStyles.bgPrimary,
          RadiosStyles.radioCircleCenter,
        ]}></View>
    </View>
    <Text
      style={[
        GlobalStyles.paragraphSmall,
        GlobalStyles.openSansSemiBold,
        GlobalStyles.textLetterSpacing,
        GlobalStyles.textCapitalize,
        GlobalStyles.mHrFive,
        GlobalStyles.textPrimary,
        customLabelStyle,
      ]}>
      {label}
    </Text>
  </TouchableOpacity>
);

// Circled radio default
const CircledRadioDefault = ({customRadioStyle}) => {
  // Getting values from theme context provider
  const {theme} = useContext(ThemeContext);

  // Returning
  return (
    <View
      style={[
        GlobalStyles.brdTen,
        RadiosStyles.radioCircle,
        theme === 'light' ? GlobalStyles.brGrey : GlobalStyles.brDarkGrey,
        GlobalStyles.xyCenter,
        customRadioStyle,
      ]}>
      <View
        style={[
          GlobalStyles.brdFive,
          theme === 'light' ? GlobalStyles.bgGrey : GlobalStyles.bgDarkGrey,
          RadiosStyles.radioCircleCenter,
        ]}
      />
    </View>
  );
};

// Circled radio selected
const CircledRadioSelected = ({customRadioStyle}) => (
  <View
    style={[
      GlobalStyles.brdTen,
      GlobalStyles.brPrimary,
      GlobalStyles.xyCenter,
      RadiosStyles.radioCircle,
      customRadioStyle,
    ]}>
    <View
      style={[
        GlobalStyles.brdFive,
        GlobalStyles.bgPrimary,
        RadiosStyles.radioCircleCenter,
      ]}
    />
  </View>
);

export {
  BoxedRadioDefault,
  BoxedRadioSelected,
  CircledRadioDefault,
  CircledRadioSelected,
};
