import React from 'react';
import { ThemeProvider } from '@mui/material';
import { NavermapsProvider } from 'react-naver-maps';
import { RouterProvider } from 'react-router-dom';
import router from '~/routes/rootRouter';
import theme from '@styles/theme';

const ncpClientId = 'f4gwmtnyhl';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <NavermapsProvider ncpClientId={ncpClientId}>
        <RouterProvider router={router} />
      </NavermapsProvider>
    </ThemeProvider>
  );
};

export default App;
