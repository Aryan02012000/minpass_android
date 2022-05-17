// Importing
import {StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';
import Colors from '../../config/Colors';
import shadow from '../../components/Shadow';

// Exporting
export default OrderStyles = StyleSheet.create({
  sectionContainer: {
    ...shadow(scale(5), Colors.shadowDark),
  },
  row: {
    borderBottomWidth: scale(1),
  },
  customActionButton: {
    width: '48%',
  },
  textareaContainer: {
    height: scale(130),
    borderWidth: scale(1),
  },
});
