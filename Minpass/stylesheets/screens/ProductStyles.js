// Importing
import {StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';
import Colors from '../../config/Colors';
import Dimensions from '../../config/Dimensions';

// Constants
const Thumnail_Conatiner_Size = scale(60);
const Thumnail_Spacing = scale(5);
const Option_Container_Size = scale(40);
const Header_Icon_Container_Size = scale(40);
const Thumbnail_Image_Container_Size = scale(60);
const Border_Top_Left_Right_Radius_Size = scale(40);
const Button_With_Icon_Container_Size = scale(40);
// Getting window width & height from dimensions
const {width} = Dimensions;

// Exporting
export default ProductStyles = StyleSheet.create({
  header: {
    width: width,
    zIndex: 1,
  },
  headerIconContainer: {
    width: Header_Icon_Container_Size,
    height: Header_Icon_Container_Size,
  },
  largeImageContainer: {
    width: width,
    height: '100%',
  },
  thumbnailFlatlist: {
    bottom: Thumnail_Conatiner_Size / 4,
  },
  thumbnailImageContainer: {
    width: Thumbnail_Image_Container_Size,
    height: Thumbnail_Image_Container_Size,
    padding: scale(5),
    marginHorizontal: Thumnail_Spacing,
    borderWidth: scale(1),
    borderStyle: 'solid',
  },
  detailsContainer: {
    flex: 1.3,
    borderTopLeftRadius: Border_Top_Left_Right_Radius_Size,
    borderTopRightRadius: Border_Top_Left_Right_Radius_Size,
  },
  optionsContainer: {
    flexWrap: 'wrap',
  },
  optionSize: {
    borderWidth: scale(1),
    width: Option_Container_Size,
    height: Option_Container_Size,
  },
  optionColor: {
    width: Option_Container_Size,
    height: Option_Container_Size,
  },
  buttonWithIcon: {
    width: Button_With_Icon_Container_Size,
    height: Button_With_Icon_Container_Size,
  },
  ratingBarBackground: {
    width: '75%',
    height: scale(10),
  },
  ratingBarForground: {
    height: '100%',
  },
  fiveStarRatingBar: {
    width: '75%',
  },
  fourStarRatingBar: {
    width: '55%',
  },
  threeStarRatingBar: {
    width: '35%',
  },
  twoStarRatingBar: {
    width: '45%',
  },
  oneStarRatingBar: {
    width: '10%',
  },
  listContainer: {
    borderWidth: 1,
    paddingBottom: scale(7.5),
  },
  list: {
    marginBottom: scale(7.5),
  },
});
