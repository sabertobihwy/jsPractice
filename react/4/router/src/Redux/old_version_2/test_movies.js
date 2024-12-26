import createStore from "./createStore"
import reducer from "./reducer/combine"
import applyMiddleware from "./applyMiddleWare"
import thunk from "./thunk"
import fetchMoviesAction from "./service/fetchMoviesAction"
import { setConditionAction } from "./action/movies/searchCondition"

// fetchMovies('/api/movies',1, 10).then(resp => {
//     console.log(resp)
// })

const store = createStore(reducer, applyMiddleware(thunk))

const unsubs = store.subscribe(()=>{console.log(store.getState())})

store.dispatch(setConditionAction())

store.dispatch(fetchMoviesAction())

unsubs()