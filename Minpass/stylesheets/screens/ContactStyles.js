// Importing
import {StyleSheet} from 'react-native';
import Colors from '../../config/Colors';
import Dimensions from '../../config/Dimensions';
import {scale} from 'react-native-size-matters';
import shadow from '../../components/Shadow';

// Constants
const {width} = Dimensions;

// Exporting
export default ContactStyles = StyleSheet.create({
  outletSearchbar: {
    zIndex: 1,
    width: width - scale(30),
    height: scale(45),
    ...shadow(scale(5), Colors.darkGrey),
  },
  outletSearchbarIconContainer: {
    height: scale(45),
    width: scale(45),
  },
  outletSearchInput: {
    height: scale(45),
  },
  contactDetailsContainer: {
    bottom: scale(15),
    width: width - scale(30),
    height: scale(200),
    ...shadow(scale(5), Colors.darkGrey),
  },
  sendMailButtonContainer: {
    right: scale(45),
  },
});
