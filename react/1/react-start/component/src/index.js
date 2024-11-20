import React from 'react'; // imr 
import ReactDOM from 'react-dom/client';
import MyComp from  './MyComponent'
import MyClassComp from './MyClassComponent'
import ProvinceLst from './components/ProvinceLst';
import Tick from './components/Tick';
import Circle from './components/Circle';
import CircleList from './components/CircleList.';
import ModelTest from './components/common/Modal/ModelTest';


const root = ReactDOM.createRoot(document.getElementById('root'));

// let div = (<div>
//   <MyComp number = "123" />
//   <MyClassComp number = 'c'/>
//   <MyClassComp number = {1} enable obj = {{a:1}} ui = {<h1>JSX元素</h1>}/>
// </div>)
// root.render(div)

//-----------
// async function  getProvinces() {
//   const arr = await fetch('https://study.duyiedu.com/api/citylist')
//   .then(resp => resp.json()).then(obj => obj.data)
//   return arr
// }

// async function render() {
//   root.render(<> "loading ..." </>)
//   const arr = await getProvinces()
//   root.render(<> <ProvinceLst arr = {arr}/> </>)
// }

// function tick(){
//   root.render(<> <Tick time ={10} />  </>)
// }

// tick()
//-----------
// const c = {
//   left : 100,
//   top: 100,
//   xSpeed: 200,
//   ySpeed: 200,
//   color: 'green'
// }

// // root.render(<> <Circle {...c}/> </>)

// root.render(<CircleList/>)
//---

// Modal
root.render(<ModelTest text={"广告位"}></ModelTest>)