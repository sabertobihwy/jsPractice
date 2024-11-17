import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));
const arr = [1,2,3,4]
const numbers = new Array(10)
numbers.fill(0)
const lis = numbers.map((item,i)=>(<li key={i}>{i}</li>))

const h1 = (
  <React.Fragment>
    {/*  */}
    <p>
      {lis}
    </p>
    <img src="" alt="" />
  </React.Fragment>
)

root.render(h1)
