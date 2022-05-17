// Importing
import {StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';

// Exporting
export default SpinWheelStyles = StyleSheet.create({
  startButton: {
    backgroundColor: 'rgba(0,0,0,.5)',
    marginTop: scale(61),
  },
  winningValue: {
    fontSize: scale(40),
    marginLeft: scale(7.5),
    bottom: scale(2),
  },
});
