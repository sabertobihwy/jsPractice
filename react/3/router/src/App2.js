import {Routes,BrowserRouter as Router,Route,useNavigate,
        useLocation,useParams } from 'react-router-dom'
import qs from 'query-string'
import React from 'react'

function A(props) {
    const navigate = useNavigate();
    const {a,b,c} = useParams()
    // 跳转到 PageB 并附加数据
  const handleNavigate = () => {
    navigate('/b?a=1&b=2#123', {
      state: { message: 'Hello from PageA!', id: 123 }
    });
  };
  return (
    <div>
        <button onClick={handleNavigate}>组件A</button>
        {a} {b} {c}
    </div>
  )
}

function B(props) {
    const location = useLocation();
    const query = qs.parse(location.search)
    console.log(JSON.stringify(query, null, 2));
    // 获取附加的数据
    const { message, id } = location.state || {};  // location.state 是传递的数据
    return (
      <div>
          <button onClick={()=>{
          }}>组件B,{message},{id}</button>
      </div>
    )
  }



function App2() {
  return (
    <Router>
      <Routes>
        <Route path='/a/:a/:b/:c' element={<A />} />
        <Route path='/b' element={<B />} />
      </Routes>
    </Router>
    
  );
}

export default App2;
