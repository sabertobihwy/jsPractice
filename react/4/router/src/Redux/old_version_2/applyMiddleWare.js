export function logger1(store){
    return function(nextDispatch){
        return function dispatch(action){
            console.log("logger1")
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
        return function(reducer, defaultState){
            let dispatch = () => {throw Error('middleware应用失败')}
            const store = createStore(reducer, defaultState) // 这个时候执行init dispatch，所以不会被中间件记录到
            const dispatchProvider = middlewares.map(mid => mid({
                getState: store.getState,
                dispatch: (...args)=>{dispatch(...args)}
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