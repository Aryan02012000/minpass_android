// Importing
import {StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';
import Colors from '../../config/Colors';
import shadow from '../../components/Shadow';

// Constants
const Item_Image_Container_Size = scale(75)
const Status_Circle_Size = scale(31)

// Exporting
export default OrderedItemCardStyles = StyleSheet.create({
  orderContainer: {
    ...shadow(scale(5), Colors.shadowDark),
  },
  orderItemContainer: {
    borderWidth: scale(1),
  },
  itemImageContainer: {
    width: Item_Image_Container_Size,
    height: Item_Image_Container_Size,
  },
  statusCircle: {
    width: Status_Circle_Size,
    height: Status_Circle_Size,
    // borderRadius: scale(31),
    borderWidth: scale(1),
  },
  statusCircleMiddle: {
    width: scale(12),
    height: scale(12),
    borderRadius: scale(12),
  },
  horizontalbarDefault: {
    height: scale(1),
    zIndex: -1,
    width: '85%',
    top: scale(15),
  },
});
