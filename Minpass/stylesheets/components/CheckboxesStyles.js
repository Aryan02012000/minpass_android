// Importing
import {StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';

// Exporting
export default CheckboxesStyles = StyleSheet.create({
  checkbox: {
    width: scale(25),
    height: scale(25),
    marginRight: scale(7.5),
    borderRadius: scale(3),
    borderWidth: scale(1),
  },
});
