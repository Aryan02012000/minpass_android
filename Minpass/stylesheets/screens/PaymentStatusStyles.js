// Importing
import {StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';

// Constants
const Border_Radius_Size = scale(40);

// Exporting
export default PaymentStatusStyles = StyleSheet.create({
  buttonsContainer: {
    borderTopLeftRadius: Border_Radius_Size,
    borderTopRightRadius: Border_Radius_Size,
  },
  customButton: {
    borderWidth: scale(1),
  },
});
