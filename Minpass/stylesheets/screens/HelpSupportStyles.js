// Importing
import {StyleSheet} from 'react-native';
import Colors from '../../config/Colors';
import {scale} from 'react-native-size-matters';

// Exporting
export default HelpSupportStyles = StyleSheet.create({
  contentCotainer: {
    flexGrow: 1,
  },
  contentCardContainer: {
    borderWidth: scale(1),
    width: scale(270),
  },
});
