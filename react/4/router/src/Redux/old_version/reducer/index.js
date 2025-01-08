import {NumberReducer} from './Number'
import {UserReducer} from './User'

const combineReducer = (state = {}, action) =>{
    const newState = {
        Number : NumberReducer(state.Number,action),
        User: UserReducer(state.User,action)
    }
  return newState
}
// reducers = { Number: NumberReducer, User: UserReducer}
// 1. object  2. plain object 3. 所有reducer调用两次，都不能返回undefined
// 这个函数主要就是多了validate的验证，保证reducer有默认值，一定不会是undefined
const combineReducers = (reducers) =>{
    return (state = {}, action) => {
        const result = {}
        for(const key of Object.keys(reducers)){
            result[key] = reducers[key](state[key],action)
        }
        return result
    }
}


export default combineReducers