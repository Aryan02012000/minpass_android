// Importing
import {StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';
import Colors from '../../config/Colors';
import shadow from '../../components/Shadow';

// Exporting
export default AddressesStyles = StyleSheet.create({
  addressContainer: {
    height: scale(145),
    ...shadow(scale(5), Colors.shadowDark),
  },
  statusContainer: {
    height: scale(25),
  },
});
