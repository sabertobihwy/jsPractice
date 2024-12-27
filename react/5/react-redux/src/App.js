import ConditionWrapper  from './components/Movies/ConditionWrapper';
import {Provider} from 'react-redux'
import store from "./redux/store";
import TableWrapper from './components/Movies/TableWrapper';


function App() {
  return (
    <Provider store={store} >
      <ConditionWrapper />
      <TableWrapper />
    </Provider>
  );
}

export default App;
