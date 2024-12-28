import ConditionWrapper  from './components/Movies/ConditionWrapper';
import {Provider} from 'react-redux'
import store from "./redux/store";
import TableWrapper from './components/Movies/TableWrapper';
import {Routes,BrowserRouter as Router,Route} from 'react-router-dom'
import Admin from './components/pages/Admin';
import Login from './components/pages/Login';
import withRouteTracker from './components/hoc/withRouteTracker';
// import RouteWrapper from './components/hoc/routeWrapper';

function App() {
  const AdminT  = withRouteTracker(Admin)
  const LoginT = withRouteTracker(Login)
  return (
    <Provider store={store} >
      <Router>
          <Routes>
              <Route path="/login" element={<LoginT/>} />
              <Route path="/*" element={<AdminT/>} />
          </Routes>
      </Router>
    </Provider>
  );
}

export default App;
