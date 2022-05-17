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
import {Button} from '../components/Buttons';
import {CheckboxChecked, CheckboxUnchecked} from '../components/Checkboxes';
import {SnackbarAlert} from '../components/Alerts';

const PasswordGenerator=({navigation})=>{
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
    
    
    <View style={{marginHorizontal:scale(4),marginTop:scale(90)}}>
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
                                    name="eye"
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
                                Password Generator
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
                      GlobalStyles.alignItemsCenter,
                      {padding:scale(10)}
                    ]}>
                    <View style={{flex:1,flexDirection:'column',alignItems:'center'}}>
                    
                      <TextInput
                            placeholder="Password Generator"
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
                              ,{width:scale(250)}
                            ]}
                          />

                    
                    
                    </View>
                    
                  </View>

                    <View
                        style={[
                         
                        GlobalStyles.flexRow,
                        GlobalStyles.justifyContentSpaceBetween,
                        GlobalStyles.mbTen,
                        GlobalStyles.alignItemsCenter,
                        {padding:scale(10)}
                        ]}>
                    <View>
                          <View style={{flexDirection:'row',padding:scale(5),alignItems:'center'}}>
                          
                          <Text
                              style={[
                              GlobalStyles.paragraphMedium,
                              GlobalStyles.openSansSemiBold,
                              GlobalStyles.textPrimary,
                              GlobalStyles.textLetterSpacing,
                              ]}>
                              Password Length
                          </Text>
                          <TextInput
                      placeholder="Len"
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
                        ,{width:scale(50),marginLeft:scale(10)}
                      ]}
                    />
                              
                          </View>

                          <View style={{flexDirection:'row',padding:scale(5),alignItems:'center'}}>
                          
                          <Text
                              style={[
                              GlobalStyles.paragraphMedium,
                              GlobalStyles.openSansSemiBold,
                              GlobalStyles.textPrimary,
                              GlobalStyles.textLetterSpacing,
                              {marginRight:scale(10)}]}>
                              Include Uppercase Letters
                          </Text>
                          <CheckboxChecked />
                              
                          </View>

                          <View style={{flexDirection:'row',padding:scale(5),alignItems:'center'}}>
                          
                          <Text
                              style={[
                              GlobalStyles.paragraphMedium,
                              GlobalStyles.openSansSemiBold,
                              GlobalStyles.textPrimary,
                              GlobalStyles.textLetterSpacing,
                              ,{marginRight:scale(10)}]}>
                              Include Lowercase Letters
                          </Text>
                          <CheckboxChecked />
                              
                          </View>

                          <View style={{flexDirection:'row',padding:scale(5),alignItems:'center'}}>
                          
                          <Text
                              style={[
                              GlobalStyles.paragraphMedium,
                              GlobalStyles.openSansSemiBold,
                              GlobalStyles.textPrimary,
                              GlobalStyles.textLetterSpacing,
                              ,{marginRight:scale(10)}]}>
                              Include Numbers
                          </Text>
                          <CheckboxChecked />
                              
                              
                          </View>

                          <View style={{flexDirection:'row',padding:scale(5),alignItems:'center'}}>
                          
                          <Text
                              style={[
                              GlobalStyles.paragraphMedium,
                              GlobalStyles.openSansSemiBold,
                              GlobalStyles.textPrimary,
                              GlobalStyles.textLetterSpacing,
                              {marginRight:scale(10)}
                              ]}>
                              Include Symbols
                          </Text>
                        <CheckboxChecked />
                              
                          </View>

                    </View>
             
              
                    </View>

                    <View style={{flexDirection:'column',alignItems:'center'}}>
                    <Button label={'Generate'}  customButtonStyle={{width:scale(200)}} ></Button>
                    </View>
    
    </Pressable>

   
    </View>
</Animated.ScrollView>
          </View>
          </SafeAreaView>
          </MenuProvider>
    )

};
export default PasswordGenerator