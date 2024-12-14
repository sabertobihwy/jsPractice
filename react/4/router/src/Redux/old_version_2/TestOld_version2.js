import { getIncreaseAction } from "./action/Number";
import createStore from "./createStore";
import combineReducer, { numberReducer,UserReducer } from "./reducer";
import randomString from "./utils/tools";
import applyMiddleware, { logger1,logger2 } from "./applyMiddleWare";

//const store = createStore(undefined, numberReducer)
const reducer = combineReducer(
    {Number: numberReducer, User: UserReducer}
)
//const store = createStore(undefined, reducer)

const store = applyMiddleware(logger1,logger2)(createStore)(reducer)

const unsubs = store.subscribe(()=>{console.log(store.getState())})

store.dispatch({
    type: `@@UNKNOWN${randomString(7)}`
})

store.dispatch(getIncreaseAction())

unsubs()
