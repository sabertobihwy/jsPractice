export const actionType = {
    changeCondition: Symbol('searchCondition'),
    getResult: Symbol('searchResult'),
    isLoading: Symbol('isLoading')
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

