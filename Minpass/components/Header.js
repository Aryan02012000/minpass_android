// Importing
import React from 'react';
import {Text} from 'react-native';
import GlobalStyles from '../stylesheets/GlobalStyles';

// Header title
const HeaderTitle = ({title}) => (
  <Text
    style={[
      GlobalStyles.paragraphMedium,
      GlobalStyles.openSansSemiBold,
      GlobalStyles.textLetterSpacing,
      GlobalStyles.textCapitalize,
      GlobalStyles.textWhite,
    ]}>
    {title}
  </Text>
);

// Exporting
export {HeaderTitle};
