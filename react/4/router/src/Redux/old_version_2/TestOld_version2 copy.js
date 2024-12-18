import createStore from "./createStore";
import combineReducer, { LoadingReducer, CitiesReducer } from "./reducer";
import applyMiddleware, { logger1,logger2 } from "./applyMiddleWare";
import thunk from "./thunk";
import fetchCitiesAction from "./action/thunk_action";

//const store = createStore(undefined, numberReducer)
const reducer = combineReducer(
    {isLoading: LoadingReducer, cities: CitiesReducer}
)

const store = createStore(reducer, applyMiddleware(thunk,logger1,logger2))

const unsubs = store.subscribe(()=>{console.log(store.getState())})

store.dispatch(fetchCitiesAction())

//unsubs()