// Importing
import {StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';

// Constants
const Logo_Container_Size = scale(50);

// Exporting
export default DrawerStyles = StyleSheet.create({
  drawer: {
    width: scale(290),
  },
  drawerHeader: {
    height: scale(100),
  },
  logoContainer: {
    width: Logo_Container_Size,
    height: Logo_Container_Size,
  },
});
