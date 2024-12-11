import {IncreaseAction,DecreaseAction} from '../action/Number'

export function NumberReducer(state = 10,action){
	switch(action.type){
		case IncreaseAction:
			return state+1 
		case DecreaseAction:
			return state-1	
		default:
			return state	
	}
}