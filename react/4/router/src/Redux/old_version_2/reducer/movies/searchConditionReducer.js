import { actionType } from "../../action/movies/searchCondition"

const initConditionVal = {
    page: 1,
    size: 10
}

export function searchConditionReducer(state = initConditionVal , action){
    switch(action.type){
        case actionType.changeCondition:
            return {...state, ...action.payload}
        default:
            return state    
    }
}

export const  isLoadingReducer = (state = false , action)=>{
    switch(action.type){
        case actionType.isLoading:
            return action.payload
        default:
            return state    
    }
}