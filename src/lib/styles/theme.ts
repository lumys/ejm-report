import { createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#ef4e56',
    },
  },
  mixins: {
    toolbar: {
      minHeight: 100,
    },
  },
});

export default theme;
