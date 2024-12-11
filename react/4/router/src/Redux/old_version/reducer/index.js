import {NumberReducer} from './Number'
import {UserReducer} from './User'

const combineReducer = (state = {}, action) =>{
   // console.log(state)
   // console.log(action)
    const newState = {
        Number : NumberReducer(state.Number,action),
        User: UserReducer(state.User,action)
    }
  //  console.log(newState)
  return newState
}
export default combineReducer