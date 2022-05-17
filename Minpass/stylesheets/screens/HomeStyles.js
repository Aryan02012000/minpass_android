// Importing
import {StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';
import Colors from '../../config/Colors';
import shadow from '../../components/Shadow';
import {
  Font_XL,
  Font_XSM,
  OpenSans_Regular,
  OpenSans_SemiBold,
  Text_Capitalize,
  Text_Letter_Spacing,
} from '../../config/Typo';

// Constants
const Header_Logo_Container_Size = scale(40);
const Feature_Icon_Image_Size = scale(35);
const Category_Image_Container_Size = scale(130);
const Confetti_Icon_Container_Size = scale(64);
const Brand_Logo_Container_Size = scale(70);
const Brand_Logo_Size = scale(35);
const Customer_Image_Container_Size = scale(70);
const Bill_Icon_Container_Size = scale(70);
const Bill_Icon_Size = scale(35);

// Exporting
export default HomeStyles = StyleSheet.create({
  header: {
    zIndex: 10,
    height: scale(80),
  },
  headerLogoContainer: {
    width: Header_Logo_Container_Size,
    height: Header_Logo_Container_Size,
  },
  menuOptions: {
    width: scale(220),
    ...shadow(10, Colors.shadowDark),
  },
  searchBarContainer: {
    height: scale(40),
  },
  searchBarIcon: {
    right: scale(10),
    top: scale(5),
  },
  mainSlider: {
    height: scale(192),
    marginTop: scale(110),
  },
  swiperPagination: {
    bottom: scale(18),
  },
  dot: {
    width: scale(11),
    height: scale(11),
    borderRadius: scale(5.5),
    marginLeft: scale(3),
    marginRight: scale(3),
    marginTop: scale(3),
    marginBottom: scale(3),
    borderWidth: scale(1),
  },
  featuresContainer: {
    marginTop: scale(25),
    marginBottom: scale(17.5),
    borderWidth: scale(1),
  },
  featureIconImage: {
    width: Feature_Icon_Image_Size,
    height: Feature_Icon_Image_Size,
    tintColor: Colors.primary,
  },
  sectionHeadingContainer: {
    marginTop: scale(17.5),
    marginBottom: scale(17.5),
  },
  categoryImageContainer: {
    width: Category_Image_Container_Size,
    height: Category_Image_Container_Size,
  },
  categoryTitleContainer: {
    bottom: scale(5),
    right: scale(5),
    borderTopLeftRadius: scale(15),
    borderBottomRightRadius: scale(15),
  },
  productCardContainer: {
    width: scale(180),
  },
  spinWinBannerContainer: {
    height: scale(173),
  },
  spinWinInfoContainer: {
    width: '100%',
    height: '100%',
  },
  confettiIconContainer: {
    width: Confetti_Icon_Container_Size,
    height: Confetti_Icon_Container_Size,
    bottom: scale(10),
    left: scale(10),
  },
  offerImageContainer: {
    width: scale(280),
    height: scale(140),
  },
  offerLabelContainer: {
    bottom: scale(5),
    left: scale(5),
  },
  brandLogoContainer: {
    width: Brand_Logo_Container_Size,
    height: Brand_Logo_Container_Size,
    borderWidth: scale(1),
  },
  brandImage: {
    width: Brand_Logo_Size,
    height: Brand_Logo_Size,
    tintColor: Colors.primary,
  },
  feedbackContainer: {
    height: scale(230),
    borderWidth: scale(1),
  },
  customerImageContainer: {
    width: Customer_Image_Container_Size,
    height: Customer_Image_Container_Size,
  },
  quoteLeft: {
    left: scale(0),
    top: scale(-20),
  },
  quoteRight: {
    right: scale(0),
    bottom: scale(-20),
  },
  iconLabelContainer: {
    margin: scale(7.5),
  },
  billPayIconsContainer: {
    padding: scale(7.5),
    borderWidth: scale(1),
    flexWrap: 'wrap',
  },
  iconContainer: {
    width: Bill_Icon_Container_Size,
    height: Bill_Icon_Container_Size,
  },
  icon: {
    width: Bill_Icon_Size,
    height: Bill_Icon_Size,
    tintColor: Colors.primary,
  },
});
