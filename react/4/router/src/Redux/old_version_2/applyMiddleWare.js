export function logger1(store){
    return function(nextDispatch){
        return function dispatch(action){
            console.log("logger1")
            //console.log(store.getState())
            nextDispatch(action)
        }
    }
}

export function logger2(store){
    return function(nextDispatch){
        return function dispatch(action){
            console.log("logger2")
            //console.log(store.getState())
            nextDispatch(action)
        }
    }
}

function compose(...funcs){
    return funcs.reduce((a,b)=> (...args) => a(b(...args)))
}

export default function applyMiddleware(...middlewares){
    return function (createStore){
        return function(reducer){
            let dispatch = () => {throw Error('middleware应用失败')}
            const store = createStore(undefined, reducer)
            const dispatchProvider = middlewares.map(mid => mid({
                getState: store.getState,
                dispatch: store.dispatch
            }))
            const nextDispatch = compose(...dispatchProvider)
            dispatch = nextDispatch(store.dispatch)
            return {
                ...store,
                dispatch
            }
        }
    }
}