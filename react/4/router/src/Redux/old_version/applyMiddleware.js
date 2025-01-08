import createStore from "./createStore"
import combineReducers from "./reducer"
import { getIncreaseAction } from "./action/Number"
import {NumberReducer} from '../old_version/reducer/Number'
import {UserReducer} from '../old_version/reducer/User'

function logger1(store){
    return function(nextDispatch){
        return function(action){
            console.log('logger1')
            nextDispatch(action)
        }
    }
}
function logger2(store){
    return function(nextDispatch){
        return function(action){
            console.log('logger2')
            nextDispatch(action)
        }
    }
}

function compose(...arr){
     return arr.reduce((a,b)=>((...args)=>a(b(...args))))
    // return function(...args){
    //     let lastReturn = null
    //     for(let i = arr.length-1; i>=0; i--){
    //         if(i === arr.length-1){
    //             lastReturn = arr[i](...args)
    //         }else{
    //             lastReturn = arr[i](lastReturn)
    //         }
    //     }
    //     return lastReturn
    // }

}

function add(a){
    console.log("add")
    return a * 2
}
function multiple(a){
    console.log("multiple")
    return a * a
}
function addNum(a){
    console.log("addNum")
    return a + 1
}

//const func = compose(add,multiple,addNum)// a = (...args) => add(multiple(...args)) = 18;   addNum()
// add(multiple(addNum(...args)))
//add(multiple(addNum(3)))

//const result = func(3)
//console.log(result)


function applyMiddleware(...middlewares){
    return function(createStore){
        return function(reducer){
            let dispatch = ()=> {throw Error()}
            const store = createStore(reducer)
            const dispatchArr = middlewares.map(mid => mid({
                dispatch: store.dispatch,
                getState: store.getState
            }))
            const func = compose(...dispatchArr)
            dispatch = func(store.dispatch)
            return {
                ...store,
                dispatch
            }


        }
    }
}
const reducer = combineReducers({
    Number: NumberReducer,
    User: UserReducer
})
const store = applyMiddleware(logger1, logger2)(createStore)(reducer)
console.log(store.getState())
store.dispatch(getIncreaseAction())
console.log(store.getState())