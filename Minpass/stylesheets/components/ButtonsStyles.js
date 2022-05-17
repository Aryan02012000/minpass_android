// Importing
import {StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';
import Colors from '../../config/Colors';
import shadow from '../../components/Shadow';

// Constants
const Circled_Button_Container_Size = scale(60);
const Circled_Button_Size = scale(50);

// Exporting
export default ButtonsStyles = StyleSheet.create({
  button: {
    width: '100%',
    height: scale(40),
    borderWidth: scale(1),
  },
  circledSubmitButtonContainer: {
    width: Circled_Button_Container_Size,
    height: Circled_Button_Container_Size,
    bottom: scale(-30),
    zIndex: 1,
    ...shadow(scale(7.5), Colors.darkGrey),
  },
  circledSubmitButton: {
    width: Circled_Button_Size,
    height: Circled_Button_Size,
  },
});
