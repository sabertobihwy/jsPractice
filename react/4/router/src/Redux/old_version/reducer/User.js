import {addAction,delAction} from '../action/User'
import { v4 as uuidv4 } from 'uuid'

const initialState = [
	{id: uuidv4(), name:"user1", age: 11},
	{id: uuidv4(), name:"user2", age: 11}
]

export function UserReducer(state = initialState, action ){
   // console.log('===USER REDUCER===')
    //console.log(state,action)
    switch(action.type){
        case addAction:
            return [...state, action.payload]
        case delAction:
            return state.filter(it => 
                it.id !== action.payload
            )    
        default:
            return state     
    }
}