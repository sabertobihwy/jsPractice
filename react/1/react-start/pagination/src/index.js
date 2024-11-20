import React from 'react';
import ReactDOM from 'react-dom/client';
import Comp from './component/Comp';

const root = ReactDOM.createRoot(document.getElementById('root'));
const params = {
  current: 1,
  limit: 5,
  digitNum:7,
}
// root.render(<PagerList {...params}/>);

root.render(<Comp {...params}/>);


