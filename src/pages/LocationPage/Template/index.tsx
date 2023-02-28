import React from 'react';
import { Box } from '@mui/material';
import NaverMap from '@components/organisms/NaverMap';
import { BizZoneType } from '@c-types/api';
import Bounds = naver.maps.Bounds;

const mapOptions = { zoom: 8 };

interface TemplateProps {
  onBoundsChanged?: (value: Bounds) => void;
  bizZoneList?: BizZoneType[];
}

const Template = ({ onBoundsChanged, bizZoneList }: TemplateProps) => {
  return (
    <Box sx={{ flex: 1 }}>
      <NaverMap
        mapOptions={mapOptions}
        onBoundsChanged={onBoundsChanged}
        markers={bizZoneList}
      />
    </Box>
  );
};

export default Template;
