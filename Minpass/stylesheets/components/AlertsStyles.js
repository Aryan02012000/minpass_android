// Importing
import {StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';
import Colors from '../../config/Colors';

// Creating styles
export default AlertsStyles = StyleSheet.create({
  alertContenContainer: {
    height: scale(220),
  },
  lottieViewTrash: {
    width: scale(100),
    height: scale(100),
  },
  alertModalOverlay: {
    width: '100%',
    height: '100%',
  },
  actionButton: {
    width: '40%',
    height: scale(35),
  },
  dynamicLottieView: {
    width: scale(100),
    height: scale(100),
  },
});
