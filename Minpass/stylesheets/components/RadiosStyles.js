// Importing
import {StyleSheet} from 'react-native';
import Colors from '../../config/Colors';
import {scale} from 'react-native-size-matters';

// Constants
const Radio_Circle_Size = scale(20);
const Radio_Circle_Center_Size = scale(10);

// Exporting
export default RadiosStyles = StyleSheet.create({
  boxedRadioButton: {
    minHeight: scale(40),
    borderWidth: scale(1),
  },
  radioCircle: {
    width: Radio_Circle_Size,
    height: Radio_Circle_Size,
    borderWidth: scale(1),
  },
  radioCircleCenter: {
    width: Radio_Circle_Center_Size,
    height: Radio_Circle_Center_Size,
  },
});
