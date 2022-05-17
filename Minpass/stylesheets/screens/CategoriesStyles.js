// Importing
import {StyleSheet} from 'react-native';
import Colors from '../../config/Colors';
import Dimensions from '../../config/Dimensions';
import {scale} from 'react-native-size-matters';

// Constants
const {width} = Dimensions;
const Category_Box_Size = width * 0.5;
const Category_Image_Container_Size = scale(70);
const Category_Image_Size = scale(35);

// Exporting
export default CategoriesStyles = StyleSheet.create({
  categoryBox: {
    width: Category_Box_Size,
    height: Category_Box_Size,
  },
  categoryImageContainer: {
    width: Category_Image_Container_Size,
    height: Category_Image_Container_Size,
  },
  categoryImage: {
    tintColor: Colors.primary,
    width: Category_Image_Size,
    height: Category_Image_Size,
  },
});
