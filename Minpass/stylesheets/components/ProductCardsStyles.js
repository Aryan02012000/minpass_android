// Importing
import {StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';

// Exporting
export default ProductCardsStyles = StyleSheet.create({
  itemContainer: {
    borderWidth: scale(1),
  },
  badge: {
    paddingHorizontal: scale(12.5),
    paddingVertical: scale(2.5),
    borderRadius: scale(25),
    maxHeight: scale(25),
  },
  photoContainer: {
    width: '100%',
    height: scale(130),
  },
  addButton: {
    width: scale(60),
    height: scale(30),
  },
});
