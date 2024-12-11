function bindActionCreators(actionCreators, dispatch){
    if(typeof actionCreators === 'function'){
        return getAutoDispatch(actionCreators,dispatch)
    }
    if(typeof actionCreators === 'object'){
        const result = {}
        for(const key of Object.keys(actionCreators)){
            // 需要加入验证
            result[key] = getAutoDispatch(actionCreators[key],dispatch)
        }
        return result
    }

}

function getAutoDispatch(actionCreatorFunc, dispatch){
    return function(...args){
        const action = actionCreatorFunc(...args)
        dispatch(action)
    }
}

export default bindActionCreators