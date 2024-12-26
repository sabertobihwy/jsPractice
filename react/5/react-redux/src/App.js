import CounterContainer from "./components/counter";
import {Provider} from 'react-redux'
import store from "./redux/store";

function App() {
  return (
    <Provider store={store} >
      <CounterContainer />
    </Provider>
  );
}

export default App;
