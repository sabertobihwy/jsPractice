import {Routes,BrowserRouter as Router,Route} from 'react-router-dom'
import Login from "./pages/login/Login";
import Admin from "./pages/admin/Admin";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/*' element={<Admin/>} />
      </Routes>
    </Router>
    
  );
}

export default App;
