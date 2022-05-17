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

import {
    MenuProvider,
    Menu,
    MenuOptions,
    MenuOption,
    MenuTrigger,
  } from 'react-native-popup-menu';
  import Modal from 'react-native-modal';
  import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
  import {scale} from 'react-native-size-matters';
import {ThemeContext} from '../manager/ThemeManager';
import Animated, {interpolateNode} from 'react-native-reanimated';
import GlobalStyles from '../stylesheets/GlobalStyles';
import HomeStyles from '../stylesheets/screens/HomeStyles';
import Colors from '../config/Colors';
import IonIcon from 'react-native-vector-icons/Ionicons';
import {Button} from '../components/Buttons';
import {SnackbarAlert} from '../components/Alerts';

const CloudHome=({navigation})=>{
    const {theme} = useContext(ThemeContext);
    var orderStatus="packed"

    const [isModalVisible,setIsModalVisible]=useState(false)
    // Header slide up & down animation configs
    const HEADER_HEIGHT = scale(55);
    const SCROLL_Y = useRef(new Animated.Value(0)).current;
    const diffClamp = Animated.diffClamp(SCROLL_Y, 0, HEADER_HEIGHT);
    const translateY = interpolateNode(diffClamp, {
        inputRange: [0, HEADER_HEIGHT],
        outputRange: [0, -HEADER_HEIGHT],
    });


    return(
    <MenuProvider>
    <SafeAreaView
      style={[
        GlobalStyles.safeAreaView,
        theme === 'light'
          ? GlobalStyles.bgGrey
          : GlobalStyles.bgSecondaryLight,
      ]}>
      <View style={GlobalStyles.flexOneContainer}>
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
            Notes
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
        
        OrderedItemCardStyles.orderContainer,
        {marginTop: 0 === 0 ? scale(0) : 0},
      ]}
      >
      {/* Order ID */}
      <View
        style={[
                GlobalStyles.bgPrimary,
          GlobalStyles.flexRow,
          GlobalStyles.justifyContentSpaceBetween,
          GlobalStyles.mbTen,
          GlobalStyles.alignItemsCenter,
          {padding:scale(10)}
        ]}>
            <View>
          <View style={{flexDirection:'row',padding:scale(5)}}>
      <IonIcon
              name="document"
              color={Colors.white}
              size={scale(15)}
            />
      <Text
        style={[
          GlobalStyles.paragraphMedium,
          GlobalStyles.openSansSemiBold,
          GlobalStyles.textWhite,
          GlobalStyles.textLetterSpacing,
        ]}>
        .file1
      </Text>
      </View>
      </View>
      <View style={GlobalStyles.alignItemsFlexEnd}>
        
          <IonIcon
              name="trash"
              color={Colors.white}
              size={scale(15)}
             style={{padding:scale(5)}}
            />
        </View>
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
         
          <Text
                style={[
                  GlobalStyles.paragraphSmall,
                  GlobalStyles.openSansSemiBold,
                  GlobalStyles.textLetterSpacing,
                  theme === 'light'
                    ? GlobalStyles.textDark
                    : GlobalStyles.textWhite,
                ]}>
           Lorem Ipsum is simply dummy text of the printing and typesetting industry.
           Lorem Ipsum is simply dummy text of the printing and typesetting industry
           </Text>
          </View>
        
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
        
        OrderedItemCardStyles.orderContainer,
        {marginTop: 0 === 0 ? scale(0) : 0},
      ]}
      >
      {/* Order ID */}
      <View
        style={[
                GlobalStyles.bgPrimary,
          GlobalStyles.flexRow,
          GlobalStyles.justifyContentSpaceBetween,
          GlobalStyles.mbTen,
          GlobalStyles.alignItemsCenter,
          {padding:scale(10)}
        ]}>
            <View>
          <View style={{flexDirection:'row',padding:scale(5)}}>
      <IonIcon
              name="document"
              color={Colors.white}
              size={scale(15)}
            />
      <Text
        style={[
          GlobalStyles.paragraphMedium,
          GlobalStyles.openSansSemiBold,
          GlobalStyles.textWhite,
          GlobalStyles.textLetterSpacing,
        ]}>
        .file2
      </Text>
      </View>
      </View>
      <View style={GlobalStyles.alignItemsFlexEnd}>
        
          <IonIcon
              name="trash"
              color={Colors.white}
              size={scale(15)}
             style={{padding:scale(5)}}
            />
        </View>
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
         
          <Text
                style={[
                  GlobalStyles.paragraphSmall,
                  GlobalStyles.openSansSemiBold,
                  GlobalStyles.textLetterSpacing,
                  theme === 'light'
                    ? GlobalStyles.textDark
                    : GlobalStyles.textWhite,
                ]}>
           Lorem Ipsum is simply dummy text of the printing and typesetting industry.
           Lorem Ipsum is simply dummy text of the printing and typesetting industry
           </Text>
          </View>
        
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
        
        OrderedItemCardStyles.orderContainer,
        {marginTop: 0 === 0 ? scale(0) : 0},
      ]}
      >
      {/* Order ID */}
      <View
        style={[
                GlobalStyles.bgPrimary,
          GlobalStyles.flexRow,
          GlobalStyles.justifyContentSpaceBetween,
          GlobalStyles.mbTen,
          GlobalStyles.alignItemsCenter,
          {padding:scale(10)}
        ]}>
            <View>
          <View style={{flexDirection:'row',padding:scale(5)}}>
      <IonIcon
              name="document"
              color={Colors.white}
              size={scale(15)}
            />
      <Text
        style={[
          GlobalStyles.paragraphMedium,
          GlobalStyles.openSansSemiBold,
          GlobalStyles.textWhite,
          GlobalStyles.textLetterSpacing,
        ]}>
        .file3
      </Text>
      </View>
      </View>
      <View style={GlobalStyles.alignItemsFlexEnd}>
        
          <IonIcon
              name="trash"
              color={Colors.white}
              size={scale(15)}
             style={{padding:scale(5)}}
            />
        </View>
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
         
          <Text
                style={[
                  GlobalStyles.paragraphSmall,
                  GlobalStyles.openSansSemiBold,
                  GlobalStyles.textLetterSpacing,
                  theme === 'light'
                    ? GlobalStyles.textDark
                    : GlobalStyles.textWhite,
                ]}>
           Lorem Ipsum is simply dummy text of the printing and typesetting industry.
           Lorem Ipsum is simply dummy text of the printing and typesetting industry
           </Text>
          </View>
        
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
        
        OrderedItemCardStyles.orderContainer,
        {marginTop: 0 === 0 ? scale(0) : 0},
      ]}
      >
      {/* Order ID */}
      <View
        style={[
                GlobalStyles.bgPrimary,
          GlobalStyles.flexRow,
          GlobalStyles.justifyContentSpaceBetween,
          GlobalStyles.mbTen,
          GlobalStyles.alignItemsCenter,
          {padding:scale(10)}
        ]}>
            <View>
          <View style={{flexDirection:'row',padding:scale(5)}}>
      <IonIcon
              name="document"
              color={Colors.white}
              size={scale(15)}
            />
      <Text
        style={[
          GlobalStyles.paragraphMedium,
          GlobalStyles.openSansSemiBold,
          GlobalStyles.textWhite,
          GlobalStyles.textLetterSpacing,
        ]}>
        .file4
      </Text>
      </View>
      </View>
      <View style={GlobalStyles.alignItemsFlexEnd}>
        
          <IonIcon
              name="trash"
              color={Colors.white}
              size={scale(15)}
             style={{padding:scale(5)}}
            />
        </View>
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
         
          <Text
                style={[
                  GlobalStyles.paragraphSmall,
                  GlobalStyles.openSansSemiBold,
                  GlobalStyles.textLetterSpacing,
                  theme === 'light'
                    ? GlobalStyles.textDark
                    : GlobalStyles.textWhite,
                ]}>
           Lorem Ipsum is simply dummy text of the printing and typesetting industry.
           Lorem Ipsum is simply dummy text of the printing and typesetting industry
           </Text>
          </View>
        
        </View>
        
      </View>
      {/* Order item container */}
     
      {/* Order status progress */}
    
    </Pressable>
    </View>
</Animated.ScrollView>
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
            <Button
              label="Select File"
              customButtonStyle={[GlobalStyles.mVrZero, GlobalStyles.mtFive]}
            />
            </View>
            <View style={GlobalStyles.mbTen}>
              <TextInput
                placeholder="Enter Description"
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
                  style={height:scale(100)}
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
    )

};
export default CloudHome