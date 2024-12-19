import combineReducer from './index'
import { searchConditionReducer } from './movies/searchConditionReducer'
import { searchResultReducer } from './movies/searchResultReducer'

const moviesReducer =  combineReducer({
    condition: searchConditionReducer,
    result: searchResultReducer
})

const reducer = combineReducer({
    movies: moviesReducer
})

export default reducer