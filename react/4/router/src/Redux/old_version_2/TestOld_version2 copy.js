import createStore from "./createStore";
import combineReducer, { LoadingReducer, CitiesReducer } from "./reducer";
import applyMiddleware, { logger1,logger2 } from "./applyMiddleWare";
import {logger} from 'redux-logger'
import thunk from "./thunk";
import fetchCitiesAction from "./action/thunk_action";
import { setConditionAction } from "./action/movies/searchCondition";

import { searchConditionReducer } from "./reducer/movies/searchConditionReducer";
import { searchResultReducer } from "./reducer/movies/searchResultReducer";

//import reducer from "./reducer/combine";

//const store = createStore(undefined, numberReducer)
// const reducer1 = combineReducer(
//     {cities: CitiesReducer}
// )
// const reducer = combineReducer(
//     {isLoading: LoadingReducer , reducer1: reducer1}
// )

const moviesReducer =  combineReducer({
    condition: searchConditionReducer,
    result: searchResultReducer
})

const reducer = combineReducer({
    movies: moviesReducer,
    isLoading: LoadingReducer
})



const store = createStore(reducer, applyMiddleware(thunk,logger))

const unsubs = store.subscribe(()=>{console.log(store.getState())})

store.dispatch(setConditionAction({
    page: 1,
}))

// store.dispatch(fetchCitiesAction())

//unsubs()