// Importing
import React, {useContext, useState} from 'react';
import {View, Text, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Colors from '../../config/Colors';
import {scale} from 'react-native-size-matters';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import GlobalStyles from '../../stylesheets/GlobalStyles';
import HomeStack from '../stacks/HomeStack';
// import ProductStack from '../stacks/ProductStack';
// import ProfileStack from '../stacks/ProfileStack';
// import CheckoutStack from '../stacks/CheckoutStack';
// import PolicyStack from '../stacks/PolicyStack';
// import HelpSupportStack from '../stacks/HelpSupportStack';
import DrawerStyles from '../../stylesheets/drawers/DrawerStyles';
import {ThemeContext} from '../../manager/ThemeManager';
import ToggleSwitch from 'toggle-switch-react-native';
import {
  Font_S,
  OpenSans_SemiBold,
  Text_Letter_Spacing,
  Text_Dark,
} from '../../config/Typo';

// Constant
const Drawer = createDrawerNavigator();

// Custom drawer content
const CustomDrawerContent = props => {
  
  // Getting values from theme context provider
  const {theme, _toggleTheme} = useContext(ThemeContext);

  // Local states
  const [isOn, setIsOn] = useState(false);

  // Handling switch
  const _handleSwitch = () => {
    // Updating state
    setIsOn(!isOn);
    // Calling method to toggle theme
    _toggleTheme();
  };

  // Returning
  return (
    <View style={[GlobalStyles.flexOneContainer, GlobalStyles.bgWhite]}>
      {/* Header */}
      <View
        style={[
          theme === 'light' ? GlobalStyles.bgPrimary : GlobalStyles.bgSecondary,
          GlobalStyles.flexRow,
          GlobalStyles.alignItemsCenter,
          DrawerStyles.drawerHeader,
        ]}>
        <View
          style={[
            theme === 'light'
              ? GlobalStyles.bgWhite
              : GlobalStyles.bgSecondaryDarkest,
            GlobalStyles.mHrTen,
            GlobalStyles.brdTwentyFive,
            GlobalStyles.pFive,
            DrawerStyles.logoContainer,
          ]}>
          <Image
            source={require('../../assets/images/largelogo.png')}
            style={GlobalStyles.imageResponsive}
          />
        </View>
        <View>
          <Text
            style={[
              GlobalStyles.paragraphMedium,
              GlobalStyles.montserratSemiBold,
              GlobalStyles.textLetterSpacing,
              GlobalStyles.textWhite,
            ]}>
            MinPass
          </Text>
          <Text
            style={[
              GlobalStyles.paragraphExtraSmall,
              GlobalStyles.montserratMedium,
              GlobalStyles.textLetterSpacing,
              GlobalStyles.textWhite,
              GlobalStyles.textUppercase,
            ]}>
            Security System
          </Text>
        </View>
      </View>
      {/* Drawer items */}
      <DrawerContentScrollView
        bounces={false}
        showsVerticalScrollIndicator={false}
        style={
          theme === 'light'
            ? GlobalStyles.bgWhite
            : GlobalStyles.bgSecondaryDarkest
        }>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <View style={GlobalStyles.bgPrimaryLightest}>
        <DrawerItem
          label=""
          icon={() => (
            <ToggleSwitch
              isOn={isOn}
              onColor={Colors.secondaryDarkest}
              offColor={Colors.primary}
              label="Change App Theme"
              labelStyle={{
                color: Text_Dark,
                fontFamily: OpenSans_SemiBold,
                letterSpacing: Text_Letter_Spacing,
                fontSize: Font_S,
                marginVertical: scale(15),
              }}
              size="medium"
              onToggle={() => _handleSwitch()}
            />
          )}
        />
      </View>
    </View>
  );
};

// Main function
const HomeDrawer = () => {
  // Getting values from theme context provider
  const {theme, _toggleTheme} = useContext(ThemeContext);
  return (
    <Drawer.Navigator
      initialRouteName="HomeStack"
      screenOptions={() => ({
        headerShown: false,
        drawerActiveTintColor:
          theme === 'light' ? Colors.primary : Colors.white,
        drawerActiveBackgroundColor:
          theme === 'light' ? Colors.primaryLightest : Colors.secondary,
        drawerInactiveTintColor:
          theme === 'light' ? Colors.textDark : Colors.white,
        drawerLabelStyle: [
          GlobalStyles.paragraphSmall,
          GlobalStyles.openSansSemiBold,
          GlobalStyles.textLetterSpacing,
        ],
        drawerStyle: DrawerStyles.drawer,
        drawerType: 'slide',
      })}
      drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          drawerLabel: 'Home',
          drawerIcon: () => (
            <Icon name="home-outline" color={Colors.primary} size={scale(20)} />
          ),
        }}
      />
      
    
     
    </Drawer.Navigator>
  );
};

// Exporting
export default HomeDrawer;
