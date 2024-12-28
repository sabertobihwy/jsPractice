import React from 'react';
import { Route } from 'react-router-dom';
import withRouteTracker from './withRouteTracker'; // 高阶组件

const RouteWrapper = ({ element, ...rest }) => {
  // 使用高阶组件包装传入的元素
  const ElementWithTracking = withRouteTracker(element);
  return <Route {...rest} element={<ElementWithTracking />} />;
};

export default RouteWrapper;