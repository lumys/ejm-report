import React from 'react';
import { NaverMap, Container as MapDiv, NaverMapProps } from 'react-naver-maps';

const Component = (props: NaverMapProps) => {
  return (
    <MapDiv style={{ width: '100%', height: '100%' }}>
      <NaverMap {...props} />
    </MapDiv>
  );
};

export default Component;
