// Importing
import {scale} from 'react-native-size-matters';
import Colors from './Colors';

// Constants
// Defining font families
const Montserrat_Light = 'Montserrat-Light'; // Not in use yet
const Montserrat_Medium = 'Montserrat-Medium';
const Montserrat_Regular = 'Montserrat-Regular'; // Not in use yet
const Montserrat_SemiBold = 'Montserrat-SemiBold';
const OpenSans_Light = 'OpenSans-Light'; // Not in use yet
const OpenSans_Regular = 'OpenSans-Regular';
const OpenSans_SemiBold = 'OpenSans-SemiBold';

// Defining font sizes
const Font_XXL = scale(36);
const Font_XL = scale(24);
const Font_L = scale(16);
const Font_M = scale(14);
const Font_S = scale(12);
const Font_XSM = scale(10);

// Defining text letter spacing
const Text_Letter_Spacing = scale(0.5);

// Defining text colors
const Text_Dark = Colors.textDark;
const Text_Dark_Grey = Colors.darkGrey;
const Text_Light = Colors.textLight;
const Text_Primary = Colors.primary;
const Text_Primary_Dark = Colors.primaryDark;
const Text_Pink = Colors.pink;
const Text_White = Colors.white;
const Text_Danger = Colors.red;
const Text_Warning = Colors.yellow;
const Text_Success = Colors.green;

// Defining text transforms
const Text_Uppercase = 'uppercase';
const Text_Lowercase = 'lowercase';
const Text_Capitalize = 'capitalize';

// Exporting
export {
  Montserrat_Light,
  Montserrat_Medium,
  Montserrat_Regular,
  Montserrat_SemiBold,
  OpenSans_Light,
  OpenSans_Regular,
  OpenSans_SemiBold,
  Font_XXL,
  Font_XL,
  Font_L,
  Font_M,
  Font_S,
  Font_XSM,
  Text_Letter_Spacing,
  Text_Dark,
  Text_Dark_Grey,
  Text_Light,
  Text_Primary,
  Text_Primary_Dark,
  Text_Pink,
  Text_White,
  Text_Danger,
  Text_Warning,
  Text_Success,
  Text_Uppercase,
  Text_Lowercase,
  Text_Capitalize,
};
