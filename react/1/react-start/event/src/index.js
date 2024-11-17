import React from 'react';
import ReactDOM from 'react-dom/client';
import Tick from './component/Tick';
import TickControl from './component/TickControl';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <TickControl onClick={()=>{console.log(123)}}/>
);
