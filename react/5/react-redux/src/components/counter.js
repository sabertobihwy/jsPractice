import React,{ Component } from 'react'
//import store from '../redux/store'
import { connect } from 'react-redux'
import { increase,decrease,asyncDecrease,asyncIncrease } from '../redux/action/counter'

// 展示组件
function Counter(props) {
  return (
    <div>
      <h1>{props.number}</h1>
      <button onClick={props.asyncIncrease}> 异步+ </button>
      <button onClick={props.increase}> + </button>
      <button onClick={props.asyncDecrease}> 异步- </button>
      <button onClick={props.decrease}> - </button>
    </div>
  )
}

function maptoProps(state){
    return {
        number: state.counter
    }
}

function maptoDispatch(dispatch){
    return {
        asyncIncrease: ()=>{
           dispatch(asyncIncrease())
        },
        increase: ()=>{
            dispatch(increase())
        },
        asyncDecrease: ()=>{
            dispatch(asyncDecrease())
        },
        decrease: ()=>{
            dispatch(decrease())
        }
    }

}

// 容器组件
// class CounterContainer extends Component {
//     constructor(props){
//         super(props)
//         this.state = maptoProps(store.getState())
//         store.subscribe(()=>{
//             this.setState(maptoProps(store.getState()))
//         })
//     }

//   render() {
//     const eventHandler = maptoDispatch(store.dispatch)
//     return (
//       <Counter {...this.state} {...eventHandler}/>
//     )
//   }
// }


const hoc = connect(maptoProps,maptoDispatch)
export default hoc(Counter) 
