// Importing
import {StyleSheet} from 'react-native';
import Colors from '../../config/Colors';
import shadow from '../../components/Shadow';
import {scale} from 'react-native-size-matters';

// Constants
const Icon_Container_Size = scale(35);

// Exporting
export default NotificationsStyles = StyleSheet.create({
  notificationContainer: {
    ...shadow(scale(5), Colors.shadowDark),
  },
  iconContainer: {
    width: Icon_Container_Size,
    height: Icon_Container_Size,
    borderRadius: scale(17.5),
  },
});
