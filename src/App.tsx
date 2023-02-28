import React from 'react';
import { ThemeProvider } from '@mui/material';
import { RouterProvider } from 'react-router-dom';
import router from '~/routes/rootRouter';
import theme from '@styles/theme';
import { axiosInitializer } from '~/lib/initializer/axiosInitializer';

const App = () => {
  axiosInitializer().then();

  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};

export default App;
