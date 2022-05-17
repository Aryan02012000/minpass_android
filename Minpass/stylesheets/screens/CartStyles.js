// Importing
import {StyleSheet} from 'react-native';
import Colors from '../../config/Colors';
import shadow from '../../components/Shadow';
import {scale} from 'react-native-size-matters';

// Exporting
export default CartStyles = StyleSheet.create({
  itemContainer: {
    ...shadow(scale(5), Colors.shadowDark),
  },
  itemPhotoContainer: {
    width: scale(80),
    height: scale(100),
  },
  qtyContainer: {
    width: scale(100),
    height: scale(35),
    borderWidth: scale(1),
  },
  buttonWithIcon: {
    width: scale(35),
    height: scale(35),
  },
  applyButton: {
    width: null,
    height: scale(30),
    paddingHorizontal: scale(12.5),
    right: scale(5),
    top: scale(5),
  },
  cartInfo: {
    flex: 1.5,
  },
  codeApplyContainer: {
    width: '100%',
    height: scale(40),
  },
  codeTextInput: {
    borderWidth: scale(1),
  },
  cartTotalContainer: {
    width: '100%',
  },
  cartTotalRow: {
    paddingVertical: scale(7.5),
    borderBottomWidth: scale(1),
  },
});
