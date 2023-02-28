import React, { useCallback, useEffect, useRef, useState } from 'react';
import { styled } from '@mui/material';
import { BizZoneType } from '@c-types/api';
import MapOptions = naver.maps.MapOptions;
import Bounds = naver.maps.Bounds;

const mapId = 'map';

const MapDiv = styled('div')(() => ({
  width: '100%',
  height: '100%',
}));

const markerContents = ({
  districtNm,
  allCnt,
  reDevelopmentCnt,
  reConstructionCnt,
  maintenanceSmallCnt,
}: BizZoneType) => `
  <div style="
    width: 104px;
    height: auto;
    border: 2px solid #505050;
    filter: drop-shadow(0px 4px 4px rgba(0,0,0,.25));
    background: #fff;
    border-radius: 4px;
    cursor: pointer;
    -webkit-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    -webkit-animation-timing-function: ease-in-out;
    animation-timing-function: ease-in-out;
  ">
    <div style="
      background-color: #505050;
      height: 24px;
      line-height: 24px;
      text-align: center;
      font-weight: 700;
      font-size: 14px;
      color: #fff;
    ">
      ${districtNm}
    </div>
    <ul style="
      list-style: none;
      padding: 0;
      margin: 0;
    ">
      <li>전체 ${allCnt}</li>
      <li>재개발 ${reDevelopmentCnt}</li>
      <li>재건축 ${reConstructionCnt}</li>
      <li>가로주택 ${maintenanceSmallCnt}</li>    
    </ul>  
  </div>
`;

interface NaverMapProps {
  mapOptions?: MapOptions;
  onBoundsChanged?: (value: Bounds) => void;
  markers?: BizZoneType[] | null;
}

const Component = ({ mapOptions, onBoundsChanged, markers }: NaverMapProps) => {
  const [currMarkers] = useState<naver.maps.Marker[]>([]);

  const mapRef = useRef<HTMLDivElement | null | any>(null);

  const handleBoundsChanged = useCallback(
    (map: naver.maps.Map) => () => {
      if (!onBoundsChanged) return;

      const bounds = map.getBounds();

      onBoundsChanged(bounds);
    },
    [onBoundsChanged],
  );

  useEffect(() => {
    const { naver } = window;

    if (!mapRef || !mapRef.current || !naver) return;

    mapRef.current = new naver.maps.Map(mapId, mapOptions);
    naver.maps.Event.addListener(
      mapRef.current,
      'dragend',
      handleBoundsChanged(mapRef.current),
    );

    const bounds = mapRef.current.getBounds();
    if (onBoundsChanged) onBoundsChanged(bounds);
  }, [mapOptions, handleBoundsChanged, mapRef, onBoundsChanged]);

  useEffect(() => {
    if (!mapRef || !mapRef.current) return;

    currMarkers.forEach((currMarker) => currMarker.setMap(null));

    markers?.forEach((marker) => {
      const { latitude, longitude } = marker;

      currMarkers.push(
        new naver.maps.Marker({
          position: new naver.maps.LatLng(Number(latitude), Number(longitude)),
          map: mapRef.current,
          icon: {
            content: markerContents(marker),
          },
        }),
      );
    });
  }, [currMarkers, markers]);

  return <MapDiv id={mapId} ref={mapRef} />;
};

export default Component;
