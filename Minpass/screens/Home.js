// Importing
import React, {useState, useRef, useEffect, useContext} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
  Pressable,
  TextInput,
} from 'react-native';
import Modal from 'react-native-modal';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import GlobalStyles from '../stylesheets/GlobalStyles';
import HomeStyles from '../stylesheets/screens/HomeStyles';
import Swiper from 'react-native-swiper';
import FaIcon from 'react-native-vector-icons/FontAwesome5';
import IonIcon from 'react-native-vector-icons/Ionicons';
import Colors from '../config/Colors';
import {scale} from 'react-native-size-matters';
import {ProductCard} from '../components/Cards';
import PRODUCTS from '../data/PRODUCTS';
import CATEGORIES_HOME from '../data/CATEGORIES_HOME';
import OFFER_BANNERS from '../data/OFFER_BANNERS';
import BRANDS from '../data/BRANDS';
import FEEDBACKS from '../data/FEEDBACKS';
import HOME_SLIDERS from '../data/HOME_SLIDERS';
import Animated, {interpolateNode} from 'react-native-reanimated';
import OrderedItemCardStyles from '../stylesheets/components/OrderedItemCardStyles';
import {Button} from '../components/Buttons';
import {
  MenuProvider,
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';
import {SnackbarAlert} from '../components/Alerts';
import {ScreenLoader} from '../components/Loaders';
import {ThemeContext} from '../manager/ThemeManager';

// Functional component
const Home = ({navigation}) => {
  // Getting values from theme context provider
  const {theme} = useContext(ThemeContext);
  var orderStatus="packed"
  // Local states
  const [isModalVisible,setIsModalVisible]=useState(false)
  const [isLoading, setIsLoading] = useState(true);
  const [homeSliderPhotos, setHomeSliderPhotos] = useState(HOME_SLIDERS);
  const [products, setProducts] = useState(PRODUCTS);
  const [categories, setCategories] = useState(CATEGORIES_HOME);
  const [offerBanners, setOfferBanners] = useState(OFFER_BANNERS);
  const [brands, setBrands] = useState(BRANDS);
  const [feedbacks, setFeedbacks] = useState(FEEDBACKS);

  // Header slide up & down animation configs
  const HEADER_HEIGHT = scale(55);
  const SCROLL_Y = useRef(new Animated.Value(0)).current;
  const diffClamp = Animated.diffClamp(SCROLL_Y, 0, HEADER_HEIGHT);
  const translateY = interpolateNode(diffClamp, {
    inputRange: [0, HEADER_HEIGHT],
    outputRange: [0, -HEADER_HEIGHT],
  });
  
  // Hooks
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2500);
  }, []);

  // Toggling heart icon
  const _toggleHeartIcon = itemID => {
    // Copy products
    const newProducts = [...products];
    // Getting index of selected item
    const index = products.findIndex(item => item.id === itemID);
    // Checking
    if (newProducts[index].addedInWishlist) {
      newProducts[index].addedInWishlist = false;
      SnackbarAlert(
        'Item removed from wishlist.',
        Colors.white,
        Colors.red,
        'Got it',
        Colors.white,
      );
    } else {
      newProducts[index].addedInWishlist = true;
      SnackbarAlert(
        'Item added to wishlist.',
        Colors.white,
        Colors.green,
        'Got it',
        Colors.white,
      );
    }
    // Updating state
    setProducts(newProducts);
  };

  // Checking
  if (isLoading) {
    // Returning
    return <ScreenLoader message="Your App is being loaded." />;
  }

  // Returning
  return (
    <MenuProvider>
      <SafeAreaView
        style={[
          GlobalStyles.safeAreaView,
          theme === 'light'
            ? GlobalStyles.bgGrey
            : GlobalStyles.bgSecondaryLight,
        ]}>
        <View style={GlobalStyles.flexOneContainer}>
          {/* Header */}
          <Animated.View
            style={[
              GlobalStyles.pHrTen,
              GlobalStyles.positionAbsolute,
              GlobalStyles.lZero,
              GlobalStyles.rZero,
              GlobalStyles.tZero,
              GlobalStyles.justifyContentSpaceEvenly,
              theme === 'light'
                ? GlobalStyles.bgPrimary
                : GlobalStyles.bgSecondary,
              HomeStyles.header,
              {
                transform: [
                  {
                    translateY: translateY,
                  },
                ],
              },
            ]}>
            {/* Search bar */}
            
            <View style={GlobalStyles.flexRow}>
              <View
                style={[
                  GlobalStyles.flexOneContainer,
                  GlobalStyles.flexRow,
                  GlobalStyles.alignItemsCenter,
                ]}>
                {/* Menu icon */}
                {/* <TouchableOpacity onPress={() => navigation.openDrawer()}>
                  <IonIcon
                    name="menu-outline"
                    size={scale(30)}
                    color={Colors.white}
                  />
                </TouchableOpacity> */}
                {/* Header logo */}
                <View
                  style={[
                    theme === 'light'
                      ? GlobalStyles.bgWhite
                      : GlobalStyles.bgSecondaryDarkest,
                    GlobalStyles.pFive,
                    GlobalStyles.brdTwenty,
                    GlobalStyles.mlTen,
                    HomeStyles.headerLogoContainer,
                  ]}>
                  <Image
                    source={require('../assets/images/largelogo.png')}
                    style={GlobalStyles.imageResponsive}
                  />
                </View>
              </View>
              <View
                style={[
                  GlobalStyles.flexOneContainer,
                  GlobalStyles.flexRow,
                  GlobalStyles.alignItemsCenter,
                  GlobalStyles.justifyContentFlexEnd,
                ]}>
                {/* Mic icon */}
               
                {/* Context menu */}
                <Menu>
                  {/* Context menu icon */}
                  <MenuTrigger
                    children={
                      <IonIcon
                        name="ellipsis-vertical"
                        size={scale(25)}
                        color={Colors.white}
                      />
                    }
                  />
                  {/* Contect menu options */}
                  <MenuOptions
                    customStyles={{
                      optionsContainer: [
                        GlobalStyles.brdFive,
                        GlobalStyles.pTen,
                        theme === 'light'
                          ? GlobalStyles.bgWhite
                          : GlobalStyles.bgSecondaryDarkest,
                        HomeStyles.menuOptions,
                      ],
                    }}>
                    {/* Option 1 */}
                    <MenuOption
                      customStyles={{
                        optionWrapper: GlobalStyles.pTen,
                        optionText: [
                          GlobalStyles.paragraphSmall,
                          GlobalStyles.openSansRegular,
                          GlobalStyles.textLetterSpacing,
                          theme === 'light'
                            ? GlobalStyles.textLight
                            : GlobalStyles.textWhite,
                        ],
                      }}
                      text="Settings"
                      onSelect={() =>
                        navigation.navigate("Settings")
                        // SnackbarAlert(
                        //   'Clicked on Menu Option 1',
                        //   Colors.white,
                        //   Colors.red,
                        //   'Got it',
                        //   Colors.white,
                        // )
                      }
                    />
                    {/* Option 2 */}
                   
               
                    {/* Option 4 */}
                   
                  </MenuOptions>
                </Menu>
              </View>
            </View>
          </Animated.View>
          {/* Scrollview */}
          <Animated.ScrollView
            bounces={false}
            scrollEventThrottle={16}
            showsVerticalScrollIndicator={false}
            onScroll={Animated.event(
              [{nativeEvent: {contentOffset: {y: SCROLL_Y}}}],
              {useNativeDriver: true},
            )}>
  
            <View style={{marginHorizontal:scale(4),marginTop:scale(70)}}>
                     
           <View
            style={[
          GlobalStyles.flexRow,
          GlobalStyles.justifyContentSpaceBetween,
          GlobalStyles.mbTen,
          GlobalStyles.alignItemsCenter,
          {padding:scale(10)}
        ]}>
            
        <View>
          <View style={{flexDirection:'row',padding:scale(5)}}>
          <Text
        style={[
          GlobalStyles.paragraphMedium,
          GlobalStyles.openSansSemiBold,
          GlobalStyles.textPrimary,
          GlobalStyles.textLetterSpacing,
        ]}>
           Password Vault
          </Text>
          </View>
         
        </View>
        <View style={GlobalStyles.alignItemsFlexEnd}>
        <Button label={'Add'} onPress={()=>setIsModalVisible(!isModalVisible)}  customButtonStyle={{width:scale(100),height:scale(25)}}></Button>
        </View>
      </View>
    <Pressable
      style={[
        theme === 'light'
          ? GlobalStyles.bgWhite
          : GlobalStyles.bgSecondaryDarkest,
        GlobalStyles.mHrFifteen,
        GlobalStyles.mbFifteen,
        GlobalStyles.brdFive,
        GlobalStyles.pTen,
        OrderedItemCardStyles.orderContainer,
        {marginTop: 0 === 0 ? scale(0) : 0},
      ]}
      >
      {/* Order ID */}
      <View style={{flexDirection:'row',padding:scale(5)}}>
      <IonIcon
              name="logo-chrome"
              color={Colors.primary}
              size={scale(15)}
            />
      <Text
        style={[
          GlobalStyles.paragraphMedium,
          GlobalStyles.openSansSemiBold,
          GlobalStyles.textPrimary,
          GlobalStyles.textLetterSpacing,
        ]}>
        :.www.geeksforgeeks.org
      </Text>
      </View>
      {/* Destinations */}
      <View
        style={[
          GlobalStyles.flexRow,
          GlobalStyles.justifyContentSpaceBetween,
          GlobalStyles.mbTen,
        ]}>
        <View>
          <View style={{flexDirection:'row',padding:scale(5)}}>
         <IonIcon
              name="person-outline"
              color={Colors.primary}
              size={scale(15)}
            />
          <Text
                style={[
                  GlobalStyles.paragraphSmall,
                  GlobalStyles.openSansSemiBold,
                  GlobalStyles.textLetterSpacing,
                  theme === 'light'
                    ? GlobalStyles.textDark
                    : GlobalStyles.textWhite,
                ]}>
            :.Study@2011
          </Text>
          </View>
          <View style={{flexDirection:'row',padding:scale(5)}}>
         <IonIcon
              name="eye"
              color={Colors.primary}
              size={scale(15)}
             
            />
         <Text
                style={[
                  GlobalStyles.paragraphSmall,
                  GlobalStyles.openSansSemiBold,
                  GlobalStyles.textLetterSpacing,
                  theme === 'light'
                    ? GlobalStyles.textDark
                    : GlobalStyles.textWhite,
                ]}>
            :.Gfk@47#
          </Text>
          </View>
        </View>
        <View style={GlobalStyles.alignItemsFlexEnd}>
        <IonIcon
              name="create"
              color={Colors.primary}
              size={scale(15)}
              style={{padding:scale(5)}}
            />
          <IonIcon
              name="trash"
              color={Colors.primary}
              size={scale(15)}
             style={{padding:scale(5)}}
            />
        </View>
      </View>
      {/* Order item container */}
     
      {/* Order status progress */}
    
    </Pressable>
              
    <Pressable
      style={[
        theme === 'light'
          ? GlobalStyles.bgWhite
          : GlobalStyles.bgSecondaryDarkest,
        GlobalStyles.mHrFifteen,
        GlobalStyles.mbFifteen,
        GlobalStyles.brdFive,
        GlobalStyles.pTen,
        OrderedItemCardStyles.orderContainer,
        {marginTop: 0 === 0 ? scale(0) : 0},
      ]}
      >
      {/* Order ID */}
      <View style={{flexDirection:'row',padding:scale(5)}}>
      <IonIcon
              name="logo-chrome"
              color={Colors.primary}
              size={scale(15)}
            />
      <Text
        style={[
          GlobalStyles.paragraphMedium,
          GlobalStyles.openSansSemiBold,
          GlobalStyles.textPrimary,
          GlobalStyles.textLetterSpacing,
        ]}>
        :.www.leetcode.com
      </Text>
      </View>
      {/* Destinations */}
      <View
        style={[
          GlobalStyles.flexRow,
          GlobalStyles.justifyContentSpaceBetween,
          GlobalStyles.mbTen,
        ]}>
        <View>
          <View style={{flexDirection:'row',padding:scale(5)}}>
         <IonIcon
              name="person-outline"
              color={Colors.primary}
              size={scale(15)}
            />
          <Text
                style={[
                  GlobalStyles.paragraphSmall,
                  GlobalStyles.openSansSemiBold,
                  GlobalStyles.textLetterSpacing,
                  theme === 'light'
                    ? GlobalStyles.textDark
                    : GlobalStyles.textWhite,
                ]}>
            :.Coding4all
          </Text>
          </View>
          <View style={{flexDirection:'row',padding:scale(5)}}>
         <IonIcon
              name="eye"
              color={Colors.primary}
              size={scale(15)}
             
            />
          <Text
                style={[
                  GlobalStyles.paragraphSmall,
                  GlobalStyles.openSansSemiBold,
                  GlobalStyles.textLetterSpacing,
                  theme === 'light'
                    ? GlobalStyles.textDark
                    : GlobalStyles.textWhite,
                ]}>
            :.Jk@938$
          </Text>
          </View>
        </View>
        <View style={GlobalStyles.alignItemsFlexEnd}>
        <IonIcon
              name="create"
              color={Colors.primary}
              size={scale(15)}
              style={{padding:scale(5)}}
            />
          <IonIcon
              name="trash"
              color={Colors.primary}
              size={scale(15)}
             style={{padding:scale(5)}}
            />
        </View>
      </View>
      {/* Order item container */}
     
      {/* Order status progress */}
    
    </Pressable>

    <Pressable
      style={[
        theme === 'light'
          ? GlobalStyles.bgWhite
          : GlobalStyles.bgSecondaryDarkest,
        GlobalStyles.mHrFifteen,
        GlobalStyles.mbFifteen,
        GlobalStyles.brdFive,
        GlobalStyles.pTen,
        OrderedItemCardStyles.orderContainer,
        {marginTop: 0 === 0 ? scale(0) : 0},
      ]}
      >
      {/* Order ID */}
      <View style={{flexDirection:'row',padding:scale(5)}}>
      <IonIcon
              name="logo-chrome"
              color={Colors.primary}
              size={scale(15)}
            />
      <Text
        style={[
          GlobalStyles.paragraphMedium,
          GlobalStyles.openSansSemiBold,
          GlobalStyles.textPrimary,
          GlobalStyles.textLetterSpacing,
        ]}>
        :.www.udemy.com
      </Text>
      </View>
      {/* Destinations */}
      <View
        style={[
          GlobalStyles.flexRow,
          GlobalStyles.justifyContentSpaceBetween,
          GlobalStyles.mbTen,
        ]}>
        <View>
          <View style={{flexDirection:'row',padding:scale(5)}}>
         <IonIcon
              name="person-outline"
              color={Colors.primary}
              size={scale(15)}
            />
          <Text
                style={[
                  GlobalStyles.paragraphSmall,
                  GlobalStyles.openSansSemiBold,
                  GlobalStyles.textLetterSpacing,
                  theme === 'light'
                    ? GlobalStyles.textDark
                    : GlobalStyles.textWhite,
                ]}>
            :.courses4us
          </Text>
          </View>
          <View style={{flexDirection:'row',padding:scale(5)}}>
         <IonIcon
              name="eye"
              color={Colors.primary}
              size={scale(15)}
             
            />
          <Text
                style={[
                  GlobalStyles.paragraphSmall,
                  GlobalStyles.openSansSemiBold,
                  GlobalStyles.textLetterSpacing,
                  theme === 'light'
                    ? GlobalStyles.textDark
                    : GlobalStyles.textWhite,
                ]}>
            :.Awe#!124
          </Text>
          </View>
        </View>
        <View style={GlobalStyles.alignItemsFlexEnd}>
        <IonIcon
              name="create"
              color={Colors.primary}
              size={scale(15)}
              style={{padding:scale(5)}}
            />
          <IonIcon
              name="trash"
              color={Colors.primary}
              size={scale(15)}
             style={{padding:scale(5)}}
            />
        </View>
      </View>
      {/* Order item container */}
     
      {/* Order status progress */}
    
    </Pressable>
              
    <Pressable
      style={[
        theme === 'light'
          ? GlobalStyles.bgWhite
          : GlobalStyles.bgSecondaryDarkest,
        GlobalStyles.mHrFifteen,
        GlobalStyles.mbFifteen,
        GlobalStyles.brdFive,
        GlobalStyles.pTen,
        OrderedItemCardStyles.orderContainer,
        {marginTop: 0 === 0 ? scale(0) : 0},
      ]}
      >
      {/* Order ID */}
      <View style={{flexDirection:'row',padding:scale(5)}}>
      <IonIcon
              name="logo-chrome"
              color={Colors.primary}
              size={scale(15)}
            />
      <Text
        style={[
          GlobalStyles.paragraphMedium,
          GlobalStyles.openSansSemiBold,
          GlobalStyles.textPrimary,
          GlobalStyles.textLetterSpacing,
        ]}>
        :.www.github.com
      </Text>
      </View>
      {/* Destinations */}
      <View
        style={[
          GlobalStyles.flexRow,
          GlobalStyles.justifyContentSpaceBetween,
          GlobalStyles.mbTen,
        ]}>
        <View>
          <View style={{flexDirection:'row',padding:scale(5)}}>
         <IonIcon
              name="person-outline"
              color={Colors.primary}
              size={scale(15)}
            />
          <Text
                style={[
                  GlobalStyles.paragraphSmall,
                  GlobalStyles.openSansSemiBold,
                  GlobalStyles.textLetterSpacing,
                  theme === 'light'
                    ? GlobalStyles.textDark
                    : GlobalStyles.textWhite,
                ]}>
            :.GC_003
          </Text>
          </View>
          <View style={{flexDirection:'row',padding:scale(5)}}>
         <IonIcon
              name="eye"
              color={Colors.primary}
              size={scale(15)}
             
            />
          <Text
                style={[
                  GlobalStyles.paragraphSmall,
                  GlobalStyles.openSansSemiBold,
                  GlobalStyles.textLetterSpacing,
                  theme === 'light'
                    ? GlobalStyles.textDark
                    : GlobalStyles.textWhite,
                ]}>
            :.Dev_repo@24
          </Text>
          </View>
        </View>
        <View style={GlobalStyles.alignItemsFlexEnd}>
        <IonIcon
              name="create"
              color={Colors.primary}
              size={scale(15)}
              style={{padding:scale(5)}}
            />
          <IonIcon
              name="trash"
              color={Colors.primary}
              size={scale(15)}
             style={{padding:scale(5)}}
            />
        </View>
      </View>
      {/* Order item container */}
     
      {/* Order status progress */}
    
    </Pressable>    
        
    <Pressable
      style={[
        theme === 'light'
          ? GlobalStyles.bgWhite
          : GlobalStyles.bgSecondaryDarkest,
        GlobalStyles.mHrFifteen,
        GlobalStyles.mbFifteen,
        GlobalStyles.brdFive,
        GlobalStyles.pTen,
        OrderedItemCardStyles.orderContainer,
        {marginTop: 0 === 0 ? scale(0) : 0},
      ]}
      >
      {/* Order ID */}
      <View style={{flexDirection:'row',padding:scale(5)}}>
      <IonIcon
              name="logo-chrome"
              color={Colors.primary}
              size={scale(15)}
            />
      <Text
        style={[
          GlobalStyles.paragraphMedium,
          GlobalStyles.openSansSemiBold,
          GlobalStyles.textPrimary,
          GlobalStyles.textLetterSpacing,
        ]}>
        :.www.w3schools.com
      </Text>
      </View>
      {/* Destinations */}
      <View
        style={[
          GlobalStyles.flexRow,
          GlobalStyles.justifyContentSpaceBetween,
          GlobalStyles.mbTen,
        ]}>
        <View>
          <View style={{flexDirection:'row',padding:scale(5)}}>
         <IonIcon
              name="person-outline"
              color={Colors.primary}
              size={scale(15)}
            />
          <Text
                style={[
                  GlobalStyles.paragraphSmall,
                  GlobalStyles.openSansSemiBold,
                  GlobalStyles.textLetterSpacing,
                  theme === 'light'
                    ? GlobalStyles.textDark
                    : GlobalStyles.textWhite,
                ]}>
            :.Explore_tech
          </Text>
          </View>
          <View style={{flexDirection:'row',padding:scale(5)}}>
         <IonIcon
              name="eye"
              color={Colors.primary}
              size={scale(15)}
             
            />
          <Text
                style={[
                  GlobalStyles.paragraphSmall,
                  GlobalStyles.openSansSemiBold,
                  GlobalStyles.textLetterSpacing,
                  theme === 'light'
                    ? GlobalStyles.textDark
                    : GlobalStyles.textWhite,
                ]}>
            :.Abc@#456
          </Text>
          </View>
        </View>
        <View style={GlobalStyles.alignItemsFlexEnd}>
        <IonIcon
              name="create"
              color={Colors.primary}
              size={scale(15)}
              style={{padding:scale(5)}}
            />
          <IonIcon
              name="trash"
              color={Colors.primary}
              size={scale(15)}
             style={{padding:scale(5)}}
            />
        </View>
      </View>
      {/* Order item container */}
     
      {/* Order status progress */}
    
    </Pressable>    
         
            </View>
          </Animated.ScrollView>
        </View>

        <View>

        <Modal
          isVisible={isModalVisible}
          backdropColor={Colors.secondaryLight}
          backdropOpacity={0.9}
          style={GlobalStyles.mTen}>
          {/* Modal content */}
          <View
            style={[
              theme === 'light'
                ? GlobalStyles.bgWhite
                : GlobalStyles.bgSecondary,
              GlobalStyles.pFifteen,
              GlobalStyles.brdTen,
              GlobalStyles.positionRelative,
            ]}>
            {/* Modal title */}
            <Text
              style={[
                GlobalStyles.paragraphLarge,
                GlobalStyles.montserratSemiBold,
                GlobalStyles.textLetterSpacing,
                GlobalStyles.textUppercase,
                theme === 'light'
                  ? GlobalStyles.textDark
                  : GlobalStyles.textWhite,
              ]}>
              Add Details
            </Text>
            {/* Modal info */}
            <Text
              style={[
                GlobalStyles.paragraphSmall,
                GlobalStyles.openSansRegular,
                GlobalStyles.textLetterSpacing,
                GlobalStyles.mbFifteen,
                theme === 'light'
                  ? GlobalStyles.textLight
                  : GlobalStyles.textDarkGrey,
              ]}>
             
            </Text>
            {/* Input field email */}
            <View style={GlobalStyles.mbTen}>
              <TextInput
                placeholder="Enter Site Name"
                placeholderTextColor={
                  theme === 'light' ? Colors.textLight : Colors.darkGrey
                }
                style={[
                  GlobalStyles.plTen,
                  GlobalStyles.brdFive,
                  GlobalStyles.paragraphSmall,
                  GlobalStyles.openSansRegular,
                  GlobalStyles.textLetterSpacing,
                  GlobalStyles.brPrimary,
                  GlobalStyles.textInput,
                  theme === 'light'
                    ? GlobalStyles.textDark
                    : GlobalStyles.textWhite,
                  theme !== 'light' && GlobalStyles.bgSecondaryDarkest,
                ]}
              />
            </View>
            <View style={GlobalStyles.mbTen}>
              <TextInput
                placeholder="Enter User Name"
                placeholderTextColor={
                  theme === 'light' ? Colors.textLight : Colors.darkGrey
                }
                style={[
                  GlobalStyles.plTen,
                  GlobalStyles.brdFive,
                  GlobalStyles.paragraphSmall,
                  GlobalStyles.openSansRegular,
                  GlobalStyles.textLetterSpacing,
                  GlobalStyles.brPrimary,
                  GlobalStyles.textInput,
                  theme === 'light'
                    ? GlobalStyles.textDark
                    : GlobalStyles.textWhite,
                  theme !== 'light' && GlobalStyles.bgSecondaryDarkest,
                ]}
              />
            </View>
            <View style={GlobalStyles.mbTen}>
              <TextInput
                placeholder="Enter Password"
                placeholderTextColor={
                  theme === 'light' ? Colors.textLight : Colors.darkGrey
                }
                style={[
                  GlobalStyles.plTen,
                  GlobalStyles.brdFive,
                  GlobalStyles.paragraphSmall,
                  GlobalStyles.openSansRegular,
                  GlobalStyles.textLetterSpacing,
                  GlobalStyles.brPrimary,
                  GlobalStyles.textInput,
                  theme === 'light'
                    ? GlobalStyles.textDark
                    : GlobalStyles.textWhite,
                  theme !== 'light' && GlobalStyles.bgSecondaryDarkest,
                ]}
              />
            </View>
            {/* Button component */}
            <Button
              label="Save"
              customButtonStyle={[GlobalStyles.mVrZero, GlobalStyles.mtFive]}
            />

            {/* Modal close icon */}
            <View
              style={[
                GlobalStyles.positionAbsolute,
                GlobalStyles.xyCenter,
                GlobalStyles.brdFifteen,
                GlobalStyles.modalCloseIconContainer,
                theme === 'light'
                  ? GlobalStyles.bgPrimaryLightest
                  : GlobalStyles.bgSecondaryDarkest,
              ]}>
              <TouchableOpacity
                onPress={() => setIsModalVisible(!isModalVisible)}>
                <MaterialIcon
                  name="close"
                  size={scale(20)}
                  color={Colors.primary}
                />
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
        </View>
      </SafeAreaView>
    </MenuProvider>
  );
};

// Exporting
export default Home;
