// Importing
import React from 'react';
import {View, Text} from 'react-native';
import RangeSliderStyles from '../stylesheets/components/RangeSliderStyles';
import GlobalStyles from '../stylesheets/GlobalStyles';

// Functional components

const Thumb = () => {
  return (
    <View
      style={[
        GlobalStyles.bgWhite,
        GlobalStyles.brPrimary,
        RangeSliderStyles.rangeSliderThumb,
      ]}
    />
  );
};

const Rail = () => {
  return (
    <View
      style={[
        GlobalStyles.flexOneContainer,
        GlobalStyles.bgGrey,
        RangeSliderStyles.rangeSliderRail,
      ]}
    />
  );
};

const RailSelected = () => {
  return (
    <View
      style={[
        GlobalStyles.bgPrimary,
        RangeSliderStyles.rangeSliderRailSelected,
      ]}
    />
  );
};

const Notch = props => {
  return <View style={RangeSliderStyles.rangeSliderNotch} {...props} />;
};

const Label = ({text, ...restProps}) => {
  return (
    <View
      style={[
        GlobalStyles.alignItemsCenter,
        GlobalStyles.pTen,
        GlobalStyles.brdFive,
        GlobalStyles.bgPrimary,
      ]}
      {...restProps}>
      <Text
        style={[
          GlobalStyles.paragraphMedium,
          GlobalStyles.openSansSemiBold,
          GlobalStyles.textLetterSpacing,
          GlobalStyles.textWhite,
        ]}>
        {text}
      </Text>
    </View>
  );
};

// Exporting
export {Thumb, Rail, RailSelected, Notch, Label};
