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