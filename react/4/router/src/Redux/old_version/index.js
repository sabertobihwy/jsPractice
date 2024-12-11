import createStore from "./createStore"
import combineReducer from './reducer/index'
import bindActionCreators from './bindActionCreator'
import {getAddAction,getDelAction} from '../old_version/action/User'
import { v4 as uuidv4 } from 'uuid'


///console.log(combineReducer)
const store = createStore(combineReducer, {Number: 0})
//console.log(store.getState())
// store.suscribe(()=>{
//     console.log("this is a listener,应该运行在dispatch之后")
// })
// store.dispatch(getIncreaseAction())
// console.log(store.getState()) 

// const getAdd = bindActionCreators(getAddAction,store.dispatch)
// getAdd({id: uuidv4(), name:"user3", age: 33})
// console.log(store.getState())

const userAction = bindActionCreators({add: getAddAction, del: getDelAction},store.dispatch)
userAction.add({id: 123, name:"user3", age: 33})
console.log(store.getState()) 

userAction.del(123)

console.log(store.getState()) 