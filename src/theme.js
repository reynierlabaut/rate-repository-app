import {Platform} from 'react-native';

const theme = {
  appBar: {
    colorPrimary: '#24292e',
    textPrimary: '#fff',
    textSecondary: '#aaa',
  },
  colors: {
    textPrimary: '#24292e',
    textSecondary: '#586869',
    primary: '#0366d6',
    white: '#fefefe',
    blue: 'blue',
  },
  fontSizes: {
    body: 14,
    subheading: 16,
  },
  fonts: {
    main: Platform.select({
      ios: 'Arial',
      android: 'Roboto',
      default: 'System',
    }),
  },
  fontWeigths: {
    normal: '400',
    bold: '700',
  },
};

export default theme;
