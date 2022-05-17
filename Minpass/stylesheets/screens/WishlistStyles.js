// Importing
import {StyleSheet} from 'react-native';
import Colors from '../../config/Colors';
import shadow from '../../components/Shadow';
import {scale} from 'react-native-size-matters';

// Exporting
export default WishlistStyles = StyleSheet.create({
  itemContainer: {
    height: scale(120),
    ...shadow(scale(5), Colors.shadowDark),
  },
  itemPhotoContainer: {
    width: scale(80),
    height: scale(100),
  },
  addedDateContainer: {
    width: scale(125),
    height: scale(35),
    borderWidth: scale(1),
    borderRadius: scale(5),
  },
  buttonWithIcon: {
    width: scale(35),
    height: scale(35),
  },
});
