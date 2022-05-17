// Importing
import React, {useContext} from 'react';
import {View, Text} from 'react-native';
import LottieView from 'lottie-react-native';
import * as Animatable from 'react-native-animatable';
import GlobalStyles from '../stylesheets/GlobalStyles';
import {ThemeContext} from '../manager/ThemeManager';

// Functional component
const Issue = ({title, description, lottieSource}) => {
  // Getting values from theme context provider
  const {theme} = useContext(ThemeContext);

  // Returning
  return (
    <View
      style={[
        GlobalStyles.flexOneContainer,
        GlobalStyles.alignItemsCenter,
        GlobalStyles.justifyContentCenter,
        GlobalStyles.flexColumn,
        theme === 'light' ? GlobalStyles.bgWhite : GlobalStyles.bgSecondary,
      ]}>
      {/* Lottie view */}
      <Animatable.View
        delay={500}
        animation="fadeInDown"
        easing="ease-in-out-sine"
        useNativeDriver={true}
        style={[GlobalStyles.mbTwenty, GlobalStyles.lottieViewContainer]}>
        <LottieView source={lottieSource} autoPlay loop />
      </Animatable.View>
      {/* Issue title */}
      <Animatable.Text
        delay={1000}
        animation="fadeInUp"
        easing="ease-in-out-sine"
        useNativeDriver={true}
        style={[
          GlobalStyles.paragraphLarge,
          GlobalStyles.textLetterSpacing,
          GlobalStyles.montserratSemiBold,
          GlobalStyles.mbFive,
          theme === 'light' ? GlobalStyles.textDark : GlobalStyles.textWhite,
        ]}>
        {title}
      </Animatable.Text>
      {/* Issue description */}
      <Animatable.View
        delay={1500}
        animation="fadeInUp"
        easing="ease-in-out-sine"
        useNativeDriver={true}
        style={GlobalStyles.pHrTwenty}>
        <Text
          style={[
            GlobalStyles.paragraphSmall,
            GlobalStyles.openSansRegular,
            GlobalStyles.textLetterSpacing,
            GlobalStyles.textCenter,
            theme === 'light' ? GlobalStyles.textDark : GlobalStyles.textWhite,
          ]}>
          {description}
        </Text>
      </Animatable.View>
    </View>
  );
};

// Exporting
export default Issue;
