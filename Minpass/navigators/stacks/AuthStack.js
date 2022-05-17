// Importing
import React, {useContext} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SignIn from '../../screens/SignIn';
import Settings from '../../screens/Settings';
import SignUp from '../../screens/SignUp';
import {HeaderTitle} from '../../components/Header';
import Colors from '../../config/Colors';
import {scale} from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/Ionicons';
import GlobalStyles from '../../stylesheets/GlobalStyles';
import {ThemeContext} from '../../manager/ThemeManager';
import HomeDrawer from '../drawers/HomeDrawer';

// Constant
const Stack = createStackNavigator();

// Function
function AuthStack() {
  // Getting values from theme context provider
  const {theme} = useContext(ThemeContext);

  // Returning
  return (
    <Stack.Navigator
      initialRouteName="Signin"
      screenOptions={({navigation}) => ({
        headerTitleAlign: 'center',
        headerStyle: [
          GlobalStyles.stackedScreenHeader,
          theme === 'light' ? GlobalStyles.bgPrimary : GlobalStyles.bgSecondary,
        ],
        headerLeft: () => (
          <Icon
            name="arrow-back-sharp"
            color={Colors.white}
            size={scale(20)}
            style={GlobalStyles.stackedScreenHeaderLeftIcon}
            onPress={() => navigation.goBack()}
          />
        ),
      })}>
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={() => ({
          // headerTitle: () => <HeaderTitle title="Legal Policies" />,
          headerShown:false
        })}
      />
       <Stack.Screen
        name="Signupnew"
        component={SignUp}
        options={() => ({
          // headerTitle: () => <HeaderTitle title="Legal Policies" />,
          headerShown:false
        })}
      />
      <Stack.Screen
        name="Settings"
        component={Settings}
        options={({route}) => ({
          headerShown:false
          // headerTitle: () => <HeaderTitle title={route.params.title} />,
        })}
      />

      <Stack.Screen
        name="Homenew"
        component={HomeDrawer} 
        options={()=>({
          headerShown:false
        })}
        // options={({route}) => ({
        //   headerTitle: () => <HeaderTitle title={route.params.title} />,
        // })}
      />
    </Stack.Navigator>
  );
}

// Exporting
export default AuthStack;
