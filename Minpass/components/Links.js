// Importing
import React, {useContext} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import LinksStyles from '../stylesheets/components/LinksStyles';
import Icon from 'react-native-vector-icons/Feather';
import GlobalStyles from '../stylesheets/GlobalStyles';
import {ThemeContext} from '../manager/ThemeManager';
import Colors from '../config/Colors';

// Functional components

// Screen navigation link with left & right icons
const LinkWithLeftRightIcons = ({
  iconLeft,
  iconLeftColor,
  iconLeftSize,
  title,
  iconRight,
  iconRightColor,
  iconRightSize,
  onPress,
  customLinkStyles,
}) => {
  // Getting values from theme context provider
  const {theme} = useContext(ThemeContext);

  // Returning
  return (
    <View>
      <TouchableOpacity
        style={[
          GlobalStyles.flexRow,
          GlobalStyles.alignItemsCenter,
          GlobalStyles.justifyContentSpaceBetween,
          GlobalStyles.mHrFifteen,
          theme === 'light' ? GlobalStyles.brGrey : GlobalStyles.brSecondary,
          LinksStyles.screenNavLink,
          customLinkStyles,
        ]}
        onPress={onPress}>
        <View style={[GlobalStyles.flexRow, GlobalStyles.alignItemsCenter]}>
          <Icon name={iconLeft} size={iconLeftSize} color={iconLeftColor} />
          <Text
            style={[
              GlobalStyles.paragraphSmall,
              GlobalStyles.openSansSemiBold,
              GlobalStyles.textLetterSpacing,
              GlobalStyles.mlFifteen,
              theme === 'light'
                ? GlobalStyles.textDark
                : GlobalStyles.textWhite,
            ]}>
            {title}
          </Text>
        </View>
        <Icon name={iconRight} size={iconRightSize} color={iconRightColor} />
      </TouchableOpacity>
    </View>
  );
};

// Exporting
export {LinkWithLeftRightIcons};
