import React from 'react';
import { Box } from '@mui/material';
import NaverMap from '@components/organisms/NaverMap';

const Template = () => {
  return (
    <Box sx={{ flex: 1 }}>
      <NaverMap zoom={8} />
    </Box>
  );
};

export default Template;
