// Importing
import {StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';

// Constants
const Logo_Container_Size = scale(300);

// Exporting
export default SplashStyles = StyleSheet.create({
  overlay: {
    width: '100%',
    height: '100%',
    opacity: 0.85,
  },
  logoContainer: {
    width: Logo_Container_Size,
    height: Logo_Container_Size,
    marginBottom: scale(7.5),
  },
  slogan: {
    marginBottom: scale(90),
    lineHeight: scale(22),
  },
});
