// Importing
import {Dimensions as WindowDimensions} from 'react-native';
// Defining dimension
const Dimensions = {
  width: WindowDimensions.get('window').width,
  height: WindowDimensions.get('window').height,
};
// Exporting
export default Dimensions;
