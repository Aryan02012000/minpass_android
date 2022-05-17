// Importing
import {StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';
import Colors from '../../config/Colors';
import Dimensions from '../../config/Dimensions';

// Constants
const {width} = Dimensions;

// Exporting
export default ShippingPaymentStyles = StyleSheet.create({
  scrollViewContentContainer: {
    width: width,
  },
  radioboxContainer: {
    borderWidth: scale(1),
  },
  gatewayImage: {
    width: scale(70),
    height: scale(35),
  },
});
