// Importing
import React, {createContext, useState} from 'react';

// Creating & exporting context to consume it's values & methods in Functional components
export const ThemeContext = createContext();

// Exporting context provider to provide it's values & methods globally
export const ThemeContextProvider = ({children}) => {
  // Local states
  const [theme, setTheme] = useState('dark');

  // Toggling theme
  const _toggleTheme = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };

  // Returning context provider
  return (
    <ThemeContext.Provider value={{theme, _toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  );
};

// Exporting context consumer to consume context values & methods in Class components. In this entire template, we have one Class component for the Spin Wheel screen only.
export const ThemeContextConsumer = ThemeContext.Consumer;
