import React from 'react';
import { Box } from '@mui/material';
import NaverMap from '@components/organisms/NaverMap';

const mapOptions = {
  zoom: 8,
};

const Template = () => {
  return (
    <Box sx={{ flex: 1 }}>
      <NaverMap />
    </Box>
  );
};

export default Template;
