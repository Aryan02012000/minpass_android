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
  import {scale} from 'react-native-size-matters';
import {ThemeContext} from '../manager/ThemeManager';
import Animated, {interpolateNode} from 'react-native-reanimated';
import GlobalStyles from '../stylesheets/GlobalStyles';
import HomeStyles from '../stylesheets/screens/HomeStyles';
import Colors from '../config/Colors';
import IonIcon from 'react-native-vector-icons/Ionicons';
import {ButtonNew} from '../components/Buttons';
import {SnackbarAlert} from '../components/Alerts';
import AlertsStyles from '../stylesheets/components/AlertsStyles';

const Settings=({navigation})=>{
    const {theme} = useContext(ThemeContext);
    var orderStatus="packed"


    // Header slide up & down animation configs
    const HEADER_HEIGHT = scale(55);
    const SCROLL_Y = useRef(new Animated.Value(0)).current;
    const diffClamp = Animated.diffClamp(SCROLL_Y, 0, HEADER_HEIGHT);
    const translateY = interpolateNode(diffClamp, {
        inputRange: [0, HEADER_HEIGHT],
        outputRange: [0, -HEADER_HEIGHT],
    });

    const onPressLogout=()=>{
     
      navigation.navigate("SignIn")
    }

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
            Settings
          </Text>
          </View>
         
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
    
      <Text
        style={[
          GlobalStyles.paragraphMedium,
          GlobalStyles.openSansSemiBold,
          GlobalStyles.textWhite,
          GlobalStyles.textLetterSpacing,
        ]}>
        Security
      </Text>
      </View>
      </View>
     
      </View>
      {/* Destinations */}
      <View
        style={[
          GlobalStyles.flexRow,
          GlobalStyles.justifyContentSpaceBetween,
          GlobalStyles.mbTen,
          GlobalStyles.flexOneContainer,
          
        ]}>
        
          <View style={{flexDirection:'column',padding:scale(5), alignItems:'center',flex:1}}>
         
          <ButtonNew label={'Two Step Login'} 
           customButtonStyle={{width:scale(200)}} ></ButtonNew>
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
    
      <Text
        style={[
          GlobalStyles.paragraphMedium,
          GlobalStyles.openSansSemiBold,
          GlobalStyles.textWhite,
          GlobalStyles.textLetterSpacing,
        ]}>
        Accounts
      </Text>
      </View>
      </View>
    
      </View>
      {/* Destinations */}
      <View
        style={[
          GlobalStyles.flexRow,
          GlobalStyles.justifyContentSpaceBetween,
          GlobalStyles.mbTen,
        ]}>
        <View style={{flexDirection:'column',padding:scale(5), alignItems:'center',flex:1}}>
         
         <ButtonNew label={'Change Master Pwd'} 
          customButtonStyle={{width:scale(200)}} ></ButtonNew>
           <ButtonNew label={'Logout'} 
          customButtonStyle={{width:scale(200)}}  onPress={onPressLogout} ></ButtonNew>
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
      
      <Text
        style={[
          GlobalStyles.paragraphMedium,
          GlobalStyles.openSansSemiBold,
          GlobalStyles.textWhite,
          GlobalStyles.textLetterSpacing,
        ]}>
        Others
      </Text>
      </View>
      </View>
    
      </View>
      {/* Destinations */}
      <View
        style={[
          GlobalStyles.flexRow,
          GlobalStyles.justifyContentSpaceBetween,
          GlobalStyles.mbTen,
        ]}>
       
        <View style={{flexDirection:'column',padding:scale(5), alignItems:'center',flex:1}}>
         
         <ButtonNew label={'Options'} 
          customButtonStyle={{width:scale(200)}} ></ButtonNew>
           <ButtonNew label={'About'} 
          customButtonStyle={{width:scale(200)}} ></ButtonNew>
         </View>
        
        
      </View>
      {/* Order item container */}
     
      {/* Order status progress */}
    
    </Pressable>
   
    </View>
</Animated.ScrollView>
          </View>
          </SafeAreaView>
          </MenuProvider>
    )

};
export default Settings