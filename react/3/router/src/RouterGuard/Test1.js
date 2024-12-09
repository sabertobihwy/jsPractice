import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate, useLocation } from 'react-router-dom';

function Home() {
  return <h1>首页</h1>;
}

function A() {
  return <h1>页面 A</h1>;
}

function RouteGuard({ children }) {
  //const [isBlocking, setIsBlocking] = useState(false);  // 是否阻止导航
  const [nextLocation, setNextLocation] = useState(null);  // 存储目标路径
  const [showDialog, setShowDialog] = useState(false);  // 控制弹窗显示
  const navigate = useNavigate();
  const location = useLocation();

  // 处理跳转前逻辑
  const handleNavigate = (nextLoc) => {
    if (nextLoc !== location.pathname) {
      setNextLocation(nextLoc);
      setShowDialog(true);  // 显示确认框
    }
  };

  // 用户确认跳转
  const handleConfirm = () => {
    if (nextLocation) {
      navigate(nextLocation); // 执行跳转
    }
    setShowDialog(false); // 关闭确认框
  };

  // 用户取消跳转
  const handleCancel = () => {
    setShowDialog(false); // 关闭确认框
  };

  // 路由跳转拦截
//   useEffect(() => {
//     if (isBlocking) {
//       setShowDialog(true); // 路由变化时显示对话框
//     }
//   }, [isBlocking, location]);

  return (
    <>
      {showDialog && (
        <div style={styles.overlay}>
          <div style={styles.dialog}>
            <p>你确定要离开当前页面吗？</p>
            <button onClick={handleConfirm}>确定</button>
            <button onClick={handleCancel}>取消</button>
          </div>
        </div>
      )}

      <div>
        <button onClick={() => handleNavigate('/')}>跳转到首页</button>
        <button onClick={() => handleNavigate('/a')}>跳转到页面 A</button>
      </div>
      {children}
    </>
  );
}

const styles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dialog: {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '8px',
    textAlign: 'center',
  },
};

function App() {
  return (
    <Router>
      <RouteGuard>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/a" element={<A />} />
        </Routes>
      </RouteGuard>
    </Router>
  );
}

export default App;
