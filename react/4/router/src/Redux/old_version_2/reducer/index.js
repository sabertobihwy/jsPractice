import { IncreaseAction,UserAddAction } from "../action/Number";

export function numberReducer(state = 0, action){
    switch(action.type){
        case IncreaseAction:
            return state + action.payload
        default:
            return state    
    }
}

const initialState = [
    {id: 1, name: 'a'},
    {id: 2, name: 'b'}
]

export function UserReducer(state = initialState, action){
    switch(action.type){
        case UserAddAction:
            return [...state, action.payload]
        default:
            return state    
    }
}

 const combineReducer1 = (state = {}, action )=>{
    return {
        Number: numberReducer(state.Number, action),
        User: UserReducer(state.User, action),
    }
}

const combineReducer = (reducers) =>{
    return (state = {}, action )=>{
        const result = {}
        for(const key of Object.keys(reducers)){
            result[key] = reducers[key](state[key], action)
        }
        return result // state -> {Number : state, User: state}
    }
}


export default combineReducer