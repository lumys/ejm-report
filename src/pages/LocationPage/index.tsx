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
  loader,
};

export default Page;
