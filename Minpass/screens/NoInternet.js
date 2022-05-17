// Importing
import React from 'react';
import {SafeAreaView} from 'react-native';
import GlobalStyles from '../stylesheets/GlobalStyles';
import Issue from '../components/Issue';

// Functional component
const NoInternet = () => {
  return (
    <SafeAreaView style={[GlobalStyles.safeAreaView, GlobalStyles.bgGrey]}>
      <Issue
        title="No Internet!"
        description="Check your internet settings and try again."
        lottieSource={require('../assets/lottie/no-internet.json')}
      />
    </SafeAreaView>
  );
};

// Exporting
export default NoInternet;
