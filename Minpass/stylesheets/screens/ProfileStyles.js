// Importing
import {StyleSheet} from 'react-native';
import Colors from '../../config/Colors';
import Dimensions from '../../config/Dimensions';
import shadow from '../../components/Shadow';
import {scale} from 'react-native-size-matters';

// Constants
const {width} = Dimensions;
const Profile_Photo_Container_Size = scale(100);
const Camera_Icon_Container_Size = scale(40);
const Navigation_Links_Container_Spacing = scale(15);

// Exporting
export default ProfileStyles = StyleSheet.create({
  headerBackground: {
    flex: 1.75,
  },
  profilePhotoContainer: {
    width: Profile_Photo_Container_Size,
    height: Profile_Photo_Container_Size,
  },
  cameraContainer: {
    width: Camera_Icon_Container_Size,
    height: Camera_Icon_Container_Size,
  },
  profileEmailContainer: {
    paddingVertical: scale(7.5),
  },
  navigationLinks: {
    flex: 3.25,
  },
  navigationLinksContainer: {
    width: width - scale(30),
    marginVertical: Navigation_Links_Container_Spacing,
    marginHorizontal: Navigation_Links_Container_Spacing,
    ...shadow(scale(5), Colors.shadowDark),
  },
});
