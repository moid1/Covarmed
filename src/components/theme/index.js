// src/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1191c1', // First color
    },
    secondary: {
      main: '#21426a', // Second color
    },
    background: {
      default: '#FFFFFF', // White background
    },
  },
});

export default theme;
