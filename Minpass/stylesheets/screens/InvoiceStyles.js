// Importing
import {StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';
import Colors from '../../config/Colors';
import Dimensions from '../../config/Dimensions';

// Constants
const {width} = Dimensions;
const Logo_Container_Size = scale(60);
const Table_Row_Spacing = scale(7.5);

// Exporting
export default InvoiceStyles = StyleSheet.create({
  invoiceContainer: {
    width: width - scale(30),
    borderWidth: scale(1),
  },
  logoContainer: {
    width: Logo_Container_Size,
    height: Logo_Container_Size,
  },
  orderIdContainer: {
    borderWidth: scale(1),
    borderRadius: scale(5),
    borderStyle: 'dashed',
  },
  divider: {
    height: scale(1),
  },
  itemsTableHeading: {
    padding: Table_Row_Spacing,
  },
  itemsTableDataRow: {
    padding: Table_Row_Spacing,
  },
});
