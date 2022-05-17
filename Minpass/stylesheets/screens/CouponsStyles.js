// Importing
import {StyleSheet} from 'react-native';
import Colors from '../../config/Colors';
import {scale} from 'react-native-size-matters';
import shadow from '../../components/Shadow';

// Constants
const Brand_Image_Conainer_Size = scale(50);

// Exporting
export default CouponsStyles = StyleSheet.create({
  couponContainer: {
    height: scale(128),
    ...shadow(scale(5), Colors.shadowDark),
  },
  couponDetails: {
    width: '100%',
    height: '100%',
    zIndex: 1,
  },
  brandImageConainer: {
    width: Brand_Image_Conainer_Size,
    height: Brand_Image_Conainer_Size,
    left: scale(35),
  },
  couponInfoContainer: {
    flex: 0.75,
    left: scale(45),
    height: scale(100),
  },
});
