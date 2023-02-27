import React from 'react';
import { CustomDataRouteObject } from '@c-types/common';
import Template from '@routes/MainRoute/Template';
import { locationPage } from '@pages/LocationPage';

const routes: CustomDataRouteObject[] = [locationPage];

const mainRoute: CustomDataRouteObject = {
  id: 'main',
  path: '/',
  element: <Template routes={routes} />,
  children: routes,
  loader: undefined,
};

export default mainRoute;
