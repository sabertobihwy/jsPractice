import {Routes,BrowserRouter as Router,Route, useLocation,useParams, Outlet, useNavigate,Navigate } from 'react-router-dom'
import {useState} from 'react'
import Login from "./pages/login/Login";
import Admin from "./pages/admin/Admin";
import config from './config'

function ProtectedRoute({element}){
  if(config.isLogin){
    return (element)
  }else{
    return <Navigate to="/login" replace />
  }
}
function User(){
  return (
    <div>
      <h2>User固定的</h2>
        <Outlet />
    </div>
  )
}

function Account(){
  const {id} = useParams()
  return (
    <div>
      {id}
    </div>
  )
}

function Home(){
  const nav = useNavigate()
  const location = useLocation()
  const {message} = location.state || {}
  return ( 
  <>
  <h1>{message}</h1>
  <button onClick={()=>{nav('/login')}}>to login</button>
  </>
  )
}

function Login2(){
  const nav = useNavigate()
  const [val, setVal] = useState(0)
  return (<>
    <h1>登陆页</h1>
    <input type='number' val={val} onChange={(e)=>{
      setVal(+e.target.value)
    }}></input>
    <button onClick={()=>{
      let url = '/user/' + val
      config.login().then(resp => nav(url))
      .catch(error => nav('/',{state: {message:'login failed'}}))
      
    }}>login</button>
  </>)
}

function App() {
  return (
    <div>
      <h1>all 固定的</h1>
    <Router>
      <Routes>
        <Route path='/login' element={<Login2/>} />
        <Route path='/user' element={<ProtectedRoute element={<User></User>}/>} >
          <Route path=":id" element={<Account />} />
        </Route>
        <Route path='/' element={<Home/>} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
