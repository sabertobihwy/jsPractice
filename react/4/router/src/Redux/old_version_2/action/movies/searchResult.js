import {actionType} from './searchCondition'

export function getResultAction(result){
    return {
        type: actionType.getResult,
        payload: result
    }
}