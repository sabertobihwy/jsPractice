import randomString from "./utils/tools"

function createStore(reducer, defaultState, enhancer){

    if(typeof defaultState === 'function'){
        enhancer = defaultState
        defaultState = undefined
    }
    if(typeof enhancer === 'function'){
        return enhancer(createStore)(reducer,defaultState)
    }

    let currentState = defaultState 
    const listeners = []

    dispatch({
        type: `@@INIT${randomString(7)}`
    })

    function dispatch(action){
        // validate action: 1, plain-obj 2, type
        if(!isPlainObject(action)){
            throw TypeError() 
        }
        if(action['type'] === undefined){
            throw TypeError() 
        }
        currentState = reducer(currentState,action)
        for(let i = 0; i< listeners.length; i++){
            listeners[i]()
        }
    }

    function getState(){
        return currentState
    }

    function subscribe(listener){
        if(typeof listener !== 'function'){
            throw TypeError() 
        }
        listeners.push(listener)
        let isExist = true 
        return function unsubscibe(){
            if(!isExist){
                return 
            }
            const index = listeners.indexOf(listener)
            listeners.splice(index,1)
            isExist = false 
        }
    }

    return {
        dispatch,
        getState,
        subscribe
    }

}

function isPlainObject(obj){
    if(typeof obj !== 'object'){
        return false
    }
    if(Object.getPrototypeOf(obj) !== Object.prototype){
        return false
    }
    return true
}

export default createStore