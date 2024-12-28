import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';

// 创建高阶组件来跟踪路由变化
const withRouteTracker = (WrappedComponent) => {
  return (props) => {
    const location = useLocation(); // 获取路由信息
    const dispatch = useDispatch(); // 获取 dispatch 方法

    // 路由变化时更新 Redux 状态
    useEffect(() => {
      dispatch({ type: 'SET_PATH', payload: location.pathname });
    }, [dispatch, location.pathname]);

    // 返回包裹的组件并传递 props
    return <WrappedComponent {...props} />;
  };
};

export default withRouteTracker;
