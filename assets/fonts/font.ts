import { Platform } from 'react-native';

export default {
    primary: {
        regular: Platform.OS === 'ios' ? 'OpenSans-Regular' : 'OpenSans',
        bold: Platform.OS === 'ios' ? 'OpenSans-Bold' : 'OpenSans_Bold',
        extraBold: Platform.OS === 'ios' ? 'OpenSans-ExtraBold' : 'OpenSans_ExtraBold',
    },
};
