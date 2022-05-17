// Importing
import {StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';
import Colors from '../../config/Colors';

// Constants
const THUMB_RADIUS = 12;

// Exporting
export default RangeSliderStyles = StyleSheet.create({
  rangeSliderThumb: {
    width: scale(THUMB_RADIUS * 2),
    height: scale(THUMB_RADIUS * 2),
    borderRadius: scale(THUMB_RADIUS),
    borderWidth: scale(2),
  },
  rangeSliderRail: {
    height: scale(4),
    borderRadius: scale(2),
  },
  rangeSliderRailSelected: {
    height: scale(4),
    borderRadius: scale(2),
  },
  rangeSliderNotch: {
    width: scale(8),
    height: scale(8),
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderTopColor: Colors.primary,
    borderLeftWidth: scale(4),
    borderRightWidth: scale(4),
    borderTopWidth: scale(8),
  },
});
