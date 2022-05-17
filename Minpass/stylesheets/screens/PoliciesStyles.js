// Importing
import {StyleSheet} from 'react-native';
import Colors from '../../config/Colors';
import Dimensions from '../../config/Dimensions';
import shadow from '../../components/Shadow';
import {scale} from 'react-native-size-matters';
const {width} = Dimensions;

// Exporting
export default PoliciesStyles = StyleSheet.create({
  navigationLinksContainer: {
    width: width - scale(30),
    ...shadow(scale(5), Colors.shadowDark),
  },
});
