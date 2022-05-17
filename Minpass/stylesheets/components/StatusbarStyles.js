// Importing
import {StyleSheet} from 'react-native';
import {getStatusBarHeight} from 'react-native-status-bar-height';

// Creating styles
export default StatusbarStyles = StyleSheet.create({
  statusBar: {
    height: getStatusBarHeight(),
  },
});
