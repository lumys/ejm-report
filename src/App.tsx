import React from 'react';
import { ThemeProvider } from '@mui/material';
import { RouterProvider } from 'react-router-dom';
import router from '~/routes/rootRouter';
import theme from '@styles/theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};

export default App;
