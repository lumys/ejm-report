import React, { useCallback, useState } from 'react';
import { CustomDataRouteObject } from '@c-types/common';
import Template from '@pages/LocationPage/Template';
import axiosInstance from '~/lib/initializer/axiosInitializer';
import { URL_FETCH_BIZ_ZONE_LIST_DISTRICT } from '@constants/api';
import { BizZoneType, FetchBizZoneListDistrictRequestType } from '@c-types/api';
import Bounds = naver.maps.Bounds;

const Page = () => {
  const [bizZoneList, setBizZoneList] = useState<BizZoneType[]>([]);

  const fetchBizZoneListDistrict = useCallback(async (value: Bounds) => {
    const request: FetchBizZoneListDistrictRequestType = {
      level: 1,
      neLat: value.maxY(),
      neLng: value.maxX(),
      swLat: value.minY(),
      swLng: value.minX(),
    };

    const response = await axiosInstance.post(
      URL_FETCH_BIZ_ZONE_LIST_DISTRICT,
      request,
    );

    setBizZoneList(response.data);
  }, []);

  return (
    <Template
      onBoundsChanged={fetchBizZoneListDistrict}
      bizZoneList={bizZoneList}
    />
  );
};

export const locationPage: CustomDataRouteObject = {
  id: 'location',
  path: '/',
  element: <Page />,
  headerOptions: { title: '구역검색' },
};

export default Page;
