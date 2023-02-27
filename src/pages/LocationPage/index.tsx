import React from 'react';
import { CustomDataRouteObject } from '@c-types/common';
import Template from '@pages/LocationPage/Template';

const loader = async () => {
  return 'User';
};

const Page = () => {
  return <Template />;
};

export const locationPage: CustomDataRouteObject = {
  id: 'location',
  path: '/',
  element: <Page />,
  headerOptions: { title: '구역검색' },
  loader,
};

export default Page;
