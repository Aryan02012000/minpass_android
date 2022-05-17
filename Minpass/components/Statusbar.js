// Importing
import React, {useContext} from 'react';
import {View, StatusBar} from 'react-native';
import StatusbarStyles from '../stylesheets/components/StatusbarStyles';
import {ThemeContext} from '../manager/ThemeManager';
import Colors from '../config/Colors';

// Custom statusbar
const CustomStatusBar = ({...props}) => {
  // Getting values from theme context provider
  const {theme} = useContext(ThemeContext);

  // Returning
  return (
    <View
      style={[
        StatusbarStyles.statusBar,
        {
          backgroundColor:
            theme === 'light' ? Colors.primaryDark : Colors.secondaryDarkest,
        },
      ]}>
      <StatusBar
        translucent
        backgroundColor={
          theme === 'light' ? Colors.primaryDark : Colors.secondaryDarkest
        }
        {...props}
      />
    </View>
  );
};

// Exporting
export default CustomStatusBar;
