

import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: 'rgb(205, 80, 41)', 
    },
    secondary: {
    main: '#6c757d', 
    },
    background: {
    default: 'rgba(255, 255, 255, 0.87)', 
    },
    text: {
    primary: '#6c757d', 
    },
  },
  typography: {
    fontFamily: 'Inter, Arial, sans-serif',
  },
});

export default theme;
