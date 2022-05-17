// Importing
import React, {useContext} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeTab from '../tabs/HomeTab';
import Categories from '../../screens/Categories';
import GridProducts from '../../screens/GridProducts';
import ListProducts from '../../screens/ListProducts';
import Product from '../../screens/Product';
import ProductReviews from '../../screens/ProductReviews';
import SpinWheel from '../../screens/SpinWheel';
import Colors from '../../config/Colors';
import Icon from 'react-native-vector-icons/Ionicons';
import {scale} from 'react-native-size-matters';
import {HeaderTitle} from '../../components/Header';
import GlobalStyles from '../../stylesheets/GlobalStyles';
import {ThemeContext} from '../../manager/ThemeManager';

// Constant
const Stack = createStackNavigator();

// Function
function HomeStack() {
  // Getting values from theme context provider
  const {theme} = useContext(ThemeContext);

  // Returning
  return (
    <Stack.Navigator
      initialRouteName="HomeTab"
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
        name="HomeTab"
        component={HomeTab}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Categories"
        component={Categories}
        options={{
          headerTitle: () => <HeaderTitle title="All Categories" />,
        }}
      />
      <Stack.Screen
        name="GridProducts"
        component={GridProducts}
        options={({route, navigation}) => ({
          headerTitle: () => <HeaderTitle title={route.params.title} />,
          headerRight: () => (
            <Icon
              name="list-outline"
              color={Colors.white}
              size={scale(20)}
              style={GlobalStyles.stackedScreenHeaderRightIcon}
              onPress={() =>
                navigation.navigate('ListProducts', {title: route.params.title})
              }
            />
          ),
        })}
      />
      <Stack.Screen
        name="ListProducts"
        component={ListProducts}
        options={({route, navigation}) => ({
          headerTitle: () => <HeaderTitle title={route.params.title} />,
          headerRight: () => (
            <Icon
              name="grid-outline"
              color={Colors.white}
              size={scale(20)}
              style={GlobalStyles.stackedScreenHeaderRightIcon}
              onPress={() =>
                navigation.navigate('GridProducts', {title: route.params.title})
              }
            />
          ),
        })}
      />
      <Stack.Screen
        name="Product"
        component={Product}
        options={{headerTitle: () => <HeaderTitle title="Product Details" />}}
      />
      <Stack.Screen
        name="ProductReviews"
        component={ProductReviews}
        options={{
          headerTitle: () => <HeaderTitle title="Product Reviews" />,
        }}
      />
      <Stack.Screen
        name="SpinWheel"
        component={SpinWheel}
        options={{
          headerTitle: () => <HeaderTitle title="Spin & Win" />,
        }}
      />
    </Stack.Navigator>
  );
}

// Exporting
export default HomeStack;
