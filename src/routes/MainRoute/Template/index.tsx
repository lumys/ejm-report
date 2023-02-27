import React from 'react';
import { Outlet } from 'react-router-dom';
import { Box, useTheme } from '@mui/material';
import AppBar from '~/components/organisms/AppBar';
import { CustomDataRouteObject } from '@c-types/common';

interface TemplateProps {
  routes: CustomDataRouteObject[];
}

const Template = ({ routes }: TemplateProps) => {
  const theme = useTheme();

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh' }}>
      <AppBar routes={routes} />

      <Box
        component="main"
        sx={{
          display: 'flex',
          flexGrow: 1,
          minHeight: '100%',
        }}
      >
        <Box sx={{ flex: 0, ...theme.mixins.toolbar }} />
        <Outlet />
      </Box>
    </Box>
  );
};

export default Template;
