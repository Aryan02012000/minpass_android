// Importing
import {StyleSheet} from 'react-native';
import Colors from '../../config/Colors';
import {scale} from 'react-native-size-matters';
import shadow from '../../components/Shadow';

// Exporting
export default ReviewCardStyles = StyleSheet.create({
  reviewContainer: {
    ...shadow(scale(5), Colors.shadowDark),
  },
  reviewerImage: {
    width: scale(40),
    height: scale(40),
  },
});
