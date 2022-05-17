// Importing
import {StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';
import Colors from '../../config/Colors';
import shadow from '../../components/Shadow';

// Exporting
export default ProductListCardStyles = StyleSheet.create({
  itemContainer: {
    borderWidth: scale(1),
    ...shadow(scale(5), Colors.shadowDark),
  },
  photoContainer: {
    width: scale(80),
    height: scale(100),
  },
  addButton: {
    width: scale(60),
    height: scale(30),
  },
});
