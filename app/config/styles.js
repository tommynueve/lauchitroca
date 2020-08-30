import { Platform } from 'react-native';

import colors from './colors';

export default {
    colors,
    font: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
};
