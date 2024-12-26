import {handleActions, combineActions} from 'redux-actions'
import {asyncIncrease, asyncDecrease, increase, decrease} from '../../action/counter'
import {combineReducers} from 'redux'

const counterReducer = handleActions({
    [combineActions(increase,decrease,asyncIncrease, asyncDecrease)] : (state, {payload}) => state + payload
}, 0)

const reducer = combineReducers({
    counter: counterReducer
})
// function reducer(state=0, action){
//     switch(action.type){
//         case 'INCREASE':
//             return state+1
//         case 'DECREASE':
//             return state-1
//         default: 
//             return state        
//     }

// }


export default reducer