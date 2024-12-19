import { actionType } from "../../action/movies/searchCondition"

const initialVal = {
    datas: [],
    totalCount: 0
}

export function searchResultReducer(state = initialVal , action){
    switch(action.type){
        case actionType.getResult:
            return {...state, ...action.payload}
        default:
            return state    
    }
}