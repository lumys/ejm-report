import React from 'react';
import {
  NaverMap,
  Container as MapDiv,
  useNavermaps,
  Marker,
} from 'react-naver-maps';

const Component = () => {
  const navermaps = useNavermaps();

  return (
    <MapDiv style={{ width: '100%', height: '100%' }}>
      <NaverMap defaultZoom={8}>
        <Marker position={new navermaps.LatLng(37.3595704, 127.105399)} />
      </NaverMap>
    </MapDiv>
  );
};

export default Component;
