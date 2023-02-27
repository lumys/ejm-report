import React from 'react';
import { CustomDataRouteObject } from '@c-types/common';
import Template from '@routes/MainRoute/Template';

const routes: CustomDataRouteObject[] = [];

const mainRoute: CustomDataRouteObject = {
  id: 'main',
  path: '/',
  element: <Template />,
  children: routes,
  loader: undefined,
};

export default mainRoute;
