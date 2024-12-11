function isPlainObject(action){
    if(typeof action !== 'object'){
        return false 
    }
    return Object.getPrototypeOf(action) === Object.prototype
}

function getRandomString(){
    return Math.random().toString(36).slice(2,9)
}


const createStore =  function(reducer, defaultState){

    let currState = defaultState
    let currReducer = reducer 
    const listeners = []

    function dispatch(action){
        // action is plain obj
        if(!isPlainObject(action)){
            throw TypeError()
        }
        // action has type
        if(action['type'] === undefined){
            throw TypeError()
        }
        currState = currReducer(currState,action)
        for (const listener of listeners) {
            listener()
        }
    }

    function getState(){
        return currState
    }

    function suscribe(listener){
        listeners.push(listener)
        let isRemove = false
        return function(){
            if(isRemove){
                return 
            }
            const index = listeners.indexOf(listener)
            listeners.splice(index, 1)
        }
    }
    // 初始化
    dispatch({
        type: `@@redux/init${getRandomString()}`
    })

    return {
        dispatch,
        getState,
        suscribe
    }



}

export default createStore