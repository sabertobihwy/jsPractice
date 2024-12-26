export const actionType = {
    changeCondition: 'searchCondition',
    getResult: 'searchResult',
    isLoading: 'isLoading'
}

export function setConditionAction(condition){
    return {
        type: actionType.changeCondition,
        payload: condition
    }
}

export function setLoadingAction(isLoading){
    return {
        type: actionType.isLoading,
        payload: isLoading
    }
}

