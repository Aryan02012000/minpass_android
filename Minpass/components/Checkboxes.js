// Importing
import React from 'react';
import {TouchableOpacity} from 'react-native';
import GlobalStyles from '../stylesheets/GlobalStyles';
import CheckboxesStyles from '../stylesheets/components/CheckboxesStyles';
import Icon from 'react-native-vector-icons/Ionicons';
import Colors from '../config/Colors';
import {scale} from 'react-native-size-matters';

// Functional components

// Checkbox unchecked
const CheckboxUnchecked = ({onPress, customCheckboxStyle}) => (
  <TouchableOpacity
    onPress={onPress}
    style={[
      GlobalStyles.xyCenter,
      GlobalStyles.bgGrey,
      GlobalStyles.brGrey,
      CheckboxesStyles.checkbox,
      customCheckboxStyle,
    ]}
  />
);

// Checkbox checked
const CheckboxChecked = ({onPress, customCheckboxStyle}) => (
  <TouchableOpacity
    onPress={onPress}
    style={[
      GlobalStyles.xyCenter,
      GlobalStyles.bgPrimary,
      GlobalStyles.brPrimary,
      CheckboxesStyles.checkbox,
      customCheckboxStyle,
    ]}>
    <Icon name="checkmark" size={scale(20)} color={Colors.white} />
  </TouchableOpacity>
);

// Exporting
export {CheckboxUnchecked, CheckboxChecked};
