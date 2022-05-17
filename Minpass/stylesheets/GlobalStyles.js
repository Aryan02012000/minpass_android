// Importing
import {StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';
import Colors from '../config/Colors';
import Dimensions from '../config/Dimensions';
import {
  Montserrat_Medium,
  Montserrat_SemiBold,
  OpenSans_Regular,
  OpenSans_SemiBold,
  Font_L,
  Font_M,
  Font_S,
  Font_XSM,
  Text_Letter_Spacing,
  Text_Dark,
  Text_Dark_Grey,
  Text_Light,
  Text_Uppercase,
  Text_Capitalize,
  Font_XXL,
  Font_XL,
  Text_Lowercase,
  Text_Primary,
  Text_Pink,
  Text_White,
  Text_Danger,
  Text_Warning,
  Text_Primary_Dark,
  Text_Success,
} from '../config/Typo';

// Constants
const {width} = Dimensions;

// Exporting
export default GlobalStyles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
  flexRow: {
    flexDirection: 'row',
  },
  flexColumn: {
    flexDirection: 'column',
  },
  flexOneContainer: {
    flex: 1,
  },
  flexTwoContainer: {
    flex: 2,
  },
  flexThreeContainer: {
    flex: 3,
  },
  flexFourContainer: {
    flex: 4,
  },
  flexFiveContainer: {
    flex: 5,
  },
  loaderContainer: {
    width: scale(75),
    height: scale(75),
    marginBottom: scale(30),
  },
  stackedScreenHeader: {
    height: scale(50),
  },
  stackedScreenHeaderLeftIcon: {
    marginLeft: scale(15),
  },
  stackedScreenHeaderRightIcon: {
    marginRight: scale(15),
  },
  overFlowHidden: {
    overflow: 'hidden',
  },
  positionRelative: {
    position: 'relative',
  },
  positionAbsolute: {
    position: 'absolute',
  },
  lZero: {
    left: 0,
  },
  rZero: {
    right: 0,
  },
  tZero: {
    top: 0,
  },
  bZero: {
    bottom: 0,
  },
  alignItemsCenter: {
    alignItems: 'center',
  },
  alignItemsFlexEnd: {
    alignItems: 'flex-end',
  },
  justifyContentCenter: {
    justifyContent: 'center',
  },
  justifyContentFlexEnd: {
    justifyContent: 'flex-end',
  },
  justifyContentSpaceBetween: {
    justifyContent: 'space-between',
  },
  justifyContentSpaceAround: {
    justifyContent: 'space-around',
  },
  justifyContentSpaceEvenly: {
    justifyContent: 'space-evenly',
  },
  xyCenter: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  alignSelfCenter: {
    alignSelf: 'center',
  },
  alignSelfRight: {
    alignSelf: 'flex-end',
  },
  alignSelfLeft: {
    alignSelf: 'flex-start',
  },
  brWhite: {
    borderColor: Colors.white,
  },
  brPrimary: {
    borderColor: Colors.primary,
  },
  brDanger: {
    borderColor: Colors.red,
  },
  brWarning: {
    borderColor: Colors.yellow,
  },
  brGrey: {
    borderColor: Colors.grey,
  },
  brDarkGrey: {
    borderColor: Colors.darkGrey,
  },
  brLightGrey: {
    borderColor: Colors.lightGrey,
  },
  brSecondaryDarkest: {
    borderColor: Colors.secondaryDarkest,
  },
  brSecondary: {
    borderColor: Colors.secondary,
  },
  bgWhite: {
    backgroundColor: Colors.white,
  },
  bgPurple: {
    backgroundColor: Colors.purple,
  },
  bgPink: {
    backgroundColor: Colors.pink,
  },
  bgGrey: {
    backgroundColor: Colors.grey,
  },
  bgDarkGrey: {
    backgroundColor: Colors.darkGrey,
  },
  bgPrimary: {
    backgroundColor: Colors.primary,
  },
  bgPrimaryLightest: {
    backgroundColor: Colors.primaryLightest,
  },
  bgSecondary: {
    backgroundColor: Colors.secondary,
  },
  bgSecondaryLight: {
    backgroundColor: Colors.secondaryLight,
  },
  bgSecondaryDarkest: {
    backgroundColor: Colors.secondaryDarkest,
  },
  bgSuccess: {
    backgroundColor: Colors.green,
  },
  bgDanger: {
    backgroundColor: Colors.red,
  },
  bgWarning: {
    backgroundColor: Colors.yellow,
  },
  textDark: {
    color: Text_Dark,
  },
  textDarkGrey: {
    color: Text_Dark_Grey,
  },
  textLight: {
    color: Text_Light,
  },
  textPrimary: {
    color: Text_Primary,
  },
  textPrimaryDark: {
    color: Text_Primary_Dark,
  },
  textPink: {
    color: Text_Pink,
  },
  textWhite: {
    color: Text_White,
  },
  textDanger: {
    color: Text_Danger,
  },
  textWarning: {
    color: Text_Warning,
  },
  textSuccess: {
    color: Text_Success,
  },
  textCenter: {
    textAlign: 'center',
  },
  textRight: {
    textAlign: 'right',
  },
  textJustify: {
    textAlign: 'justify',
  },
  textLetterSpacing: {
    letterSpacing: Text_Letter_Spacing,
  },
  textUppercase: {
    textTransform: Text_Uppercase,
  },
  textCapitalize: {
    textTransform: Text_Capitalize,
  },
  textLowercase: {
    textTransform: Text_Lowercase,
  },
  headingExtraExtraLarge: {
    fontSize: Font_XXL,
  },
  headingExtraLarge: {
    fontSize: Font_XL,
  },
  montserratMedium: {
    fontFamily: Montserrat_Medium,
  },
  montserratSemiBold: {
    fontFamily: Montserrat_SemiBold,
  },
  paragraphLarge: {
    fontSize: Font_L,
  },
  paragraphMedium: {
    fontSize: Font_M,
  },
  paragraphSmall: {
    fontSize: Font_S,
  },
  paragraphExtraSmall: {
    fontSize: Font_XSM,
  },
  openSansRegular: {
    fontFamily: OpenSans_Regular,
  },
  openSansSemiBold: {
    fontFamily: OpenSans_SemiBold,
  },
  mZero: {
    margin: 0,
  },
  mFive: {
    margin: scale(5),
  },
  mTen: {
    margin: scale(10),
  },
  mFifteen: {
    margin: scale(15),
  },
  mTwenty: {
    margin: scale(20),
  },
  mTwentyFive: {
    margin: scale(25),
  },
  mtZero: {
    marginTop: 0,
  },
  mtFive: {
    marginTop: scale(5),
  },
  mtTen: {
    marginTop: scale(10),
  },
  mtFifteen: {
    marginTop: scale(15),
  },
  mtTwenty: {
    marginTop: scale(20),
  },
  mtTwentyFive: {
    marginTop: scale(25),
  },
  mtThirty: {
    marginTop: scale(30),
  },
  mtThirtyFive: {
    marginTop: scale(35),
  },
  mbZero: {
    marginBottom: 0,
  },
  mbFive: {
    marginBottom: scale(5),
  },
  mbTen: {
    marginBottom: scale(10),
  },
  mbFifteen: {
    marginBottom: scale(15),
  },
  mbTwenty: {
    marginBottom: scale(20),
  },
  mbTwentyFive: {
    marginBottom: scale(25),
  },
  mbThirty: {
    marginBottom: scale(30),
  },
  mbThirtyFive: {
    marginBottom: scale(35),
  },
  mlZero: {
    marginLeft: 0,
  },
  mlFive: {
    marginLeft: scale(5),
  },
  mlTen: {
    marginLeft: scale(10),
  },
  mlFifteen: {
    marginLeft: scale(15),
  },
  mlTwenty: {
    marginLeft: scale(20),
  },
  mrZero: {
    marginRight: 0,
  },
  mrFive: {
    marginRight: scale(5),
  },
  mrTen: {
    marginRight: scale(10),
  },
  mrFifteen: {
    marginRight: scale(15),
  },
  mrTwenty: {
    marginRight: scale(20),
  },
  mHrZero: {
    marginHorizontal: 0,
  },
  mHrFive: {
    marginHorizontal: scale(5),
  },
  mHrTen: {
    marginHorizontal: scale(10),
    marginTop: scale(110)
  },
  mHrFifteen: {
    marginHorizontal: scale(15),
  },
  mHrTwenty: {
    marginHorizontal: scale(20),
  },
  mVrZero: {
    marginVertical: 0,
  },
  mVrTwo: {
    marginVertical: scale(2),
  },
  mVrFive: {
    marginVertical: scale(5),
  },
  mVrTen: {
    marginVertical: scale(10),
  },
  mVrFifteen: {
    marginVertical: scale(15),
  },
  mVrTwenty: {
    marginVertical: scale(20),
  },
  mVrThirty: {
    marginVertical: scale(30),
  },
  mVrThirtyFive: {
    marginVertical: scale(35),
  },
  pZero: {
    padding: 0,
  },
  pFive: {
    padding: scale(5),
  },
  pTen: {
    padding: scale(10),
  },
  pFifteen: {
    padding: scale(15),
  },
  pTwenty: {
    padding: scale(20),
  },
  pThirty: {
    padding: scale(30),
  },
  ptZero: {
    paddingTop: 0,
  },
  ptFive: {
    paddingTop: scale(5),
  },
  ptTen: {
    paddingTop: scale(10),
  },
  ptFifteen: {
    paddingTop: scale(15),
  },
  ptTwenty: {
    paddingTop: scale(20),
  },
  pbZero: {
    paddingBottom: 0,
  },
  pbFive: {
    paddingBottom: scale(5),
  },
  pbTen: {
    paddingBottom: scale(10),
  },
  pbFifteen: {
    paddingBottom: scale(15),
  },
  pbTwenty: {
    paddingBottom: scale(20),
  },
  plZero: {
    paddingLeft: 0,
  },
  plFive: {
    paddingLeft: scale(5),
  },
  plTen: {
    paddingLeft: scale(10),
  },
  plFifteen: {
    paddingLeft: scale(15),
  },
  plTwenty: {
    paddingLeft: scale(20),
  },
  prZero: {
    paddingRight: 0,
  },
  prFive: {
    paddingRight: scale(5),
  },
  prTen: {
    paddingRight: scale(10),
  },
  prFifteen: {
    paddingRight: scale(15),
  },
  prTwenty: {
    paddingRight: scale(20),
  },
  pHrZero: {
    paddingHorizontal: 0,
  },
  pHrFive: {
    paddingHorizontal: scale(5),
  },
  pHrTen: {
    paddingHorizontal: scale(10),
  },
  pHrFifteen: {
    paddingHorizontal: scale(15),
  },
  pHrTwenty: {
    paddingHorizontal: scale(20),
  },
  pVrZero: {
    paddingVertical: 0,
  },
  pVrFive: {
    paddingVertical: scale(5),
  },
  pVrTen: {
    paddingVertical: scale(10),
  },
  pVrFifteen: {
    paddingVertical: scale(15),
  },
  pVrTwenty: {
    paddingVertical: scale(20),
  },
  pVrThirty: {
    paddingVertical: scale(30),
  },
  pVrThirtyFive: {
    paddingVertical: scale(35),
  },
  brdZero: {
    borderRadius: 0,
  },
  brdFive: {
    borderRadius: scale(5),
  },
  brdTen: {
    borderRadius: scale(10),
  },
  brdFifteen: {
    borderRadius: scale(15),
  },
  brdTwenty: {
    borderRadius: scale(20),
  },
  brdTwentyFive: {
    borderRadius: scale(25),
  },
  brdForty: {
    borderRadius: scale(40),
  },
  brdFifty: {
    borderRadius: scale(50),
  },
  brdHundred: {
    borderRadius: scale(100),
  },
  authFormLogoFlexArea: {
    flex: 1.25,
  },
  authFormLogoContainer: {
    width: scale(85),
    height: scale(85),
  },
  imageResponsive: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'contain',
  },
  authFormContainer: {
    borderTopLeftRadius: scale(30),
    borderTopRightRadius: scale(30),
  },
  authFormTitleLine: {
    width: scale(40),
    height: scale(3),
    marginTop: scale(7.5),
  },
  textInput: {
    height: scale(40),
    borderWidth: scale(1),
  },
  inputEyeIcon: {
    right: scale(7.5),
    top: scale(7.5),
  },
  lottieViewContainer: {
    width: scale(150),
    height: scale(150),
  },
  modalCloseIconContainer: {
    width: scale(30),
    height: scale(30),
    right: scale(7.5),
    top: scale(7.5),
  },
  scrollviewContentContainer: {
    flexGrow: 1,
  },
  productsFilterIconContainer: {
    width: width - scale(30),
  },
  productsFilterIcon: {
    width: scale(70),
    height: scale(35),
    borderWidth: scale(1),
  },
  rbSheetSectionTitleContainer: {
    borderTopWidth: scale(1),
    borderBottomWidth: scale(1),
  },
  sortOptionRow: {
    borderBottomWidth: scale(1),
    borderBottomColor: Colors.lightGrey,
  },
  brandsFilterContainer: {
    flexWrap: 'wrap',
    marginTop: scale(7.5),
  },
  brandOptionContainer: {
    borderWidth: scale(1),
    borderRadius: scale(50),
    marginVertical: scale(7.5),
  },
  applyFilterButton: {
    width: scale(150),
    height: scale(35),
  },
});
