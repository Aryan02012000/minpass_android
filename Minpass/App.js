// Importing
import React, {useState, useEffect} from 'react';
import StatusBar from './components/Statusbar';
import {NavigationContainer} from '@react-navigation/native';
import Splash from './screens/Splash';
import HomeDrawer from './navigators/drawers/HomeDrawer';
import AuthStack from './navigators/stacks/AuthStack'

import {ThemeContextProvider} from './manager/ThemeManager';

// Root functional component
const App = () => {
  // Local states
  const [isLoading, setIsLoading] = useState(true);

  // Hooks
  useEffect(() => {
    // Updating state value after 2.5 seconds of delay. You may change the value of milliseconds(2500) as per your need.
    setTimeout(() => {
      // Updating state
      setIsLoading(false);
    }, 2500);
  }, []);

  // Checking & comparing
  if (isLoading) {
    // Returning
    return <Splash />;
  }

  // Returning
  return (
    <ThemeContextProvider>
      <NavigationContainer>
        {/* Custom stausbar */}
        <StatusBar barStyle="light-content" />
        {/* Drawer navigator */}
       {/* <HomeDrawer /> */}
       <AuthStack />
      </NavigationContainer>
    </ThemeContextProvider>
  );
};

// Exporting
export default App;
