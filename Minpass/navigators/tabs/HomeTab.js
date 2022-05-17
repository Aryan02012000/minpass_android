// Importing
import React, {useContext} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../../screens/Home';
import CloudHome from '../../screens/CloudHome';
import PasswordGenerator from '../../screens/PasswordGenerator';
import Icon from 'react-native-vector-icons/Ionicons';
import Colors from '../../config/Colors';
import {scale} from 'react-native-size-matters';
import NoInternet from '../../screens/NoInternet';
import {ThemeContext} from '../../manager/ThemeManager';

// Constant
const Tab = createBottomTabNavigator();

// Function
function HomeTab() {
  // Getting values from theme context provider
  const {theme} = useContext(ThemeContext);

  // Returning
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'key' : 'key';
          } else if (route.name === 'SignIn') {
            iconName = focused ? 'briefcase' : 'briefcase';
          } else if (route.name === 'SignUp') {
            iconName = focused ? 'cog' : 'cog';
          } else if (route.name === 'NoInternet') {
            iconName = focused ? 'wifi' : 'wifi-outline';
          }
          // Returning
          return <Icon name={iconName} size={scale(size)} color={color} />;
        },
        tabBarStyle: {
          backgroundColor:
            theme === 'light' ? Colors.white : Colors.secondaryDarkest,
          borderTopWidth: scale(0.75),
          borderTopColor:
            theme === 'light' ? Colors.lightGrey : Colors.darkGrey,
        },
        tabBarActiveTintColor: Colors.primary,
        tabBarInactiveTintColor: Colors.darkGrey,
        tabBarShowLabel: false,
      })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="SignIn" component={CloudHome} />
      <Tab.Screen name="SignUp" component={PasswordGenerator} />
      {/* <Tab.Screen name="NoInternet" component={NoInternet} /> */}
    </Tab.Navigator>
  );
}

// Exporting
export default HomeTab;
