import {createTheme} from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: '#1a237e',
      light: '#1f5cde',
    },
    secondary: {
      main: '#931cff',
      light: '#d09eff',
    },
    warning: {
      main: '#ff9100',
      light: '#ffc88c',
    },
    success: {
      main: '#11ff00',
      light: '#a4ff9d',
    },
    error: {
      main: '#ff0000',
      light: '#ff8a80',
    },
  },
});
export default theme;