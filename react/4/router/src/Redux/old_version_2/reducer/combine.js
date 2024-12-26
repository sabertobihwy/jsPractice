import combineReducer from './index'
import { LoadingReducer } from './index'
import { isLoadingReducer, searchConditionReducer } from './movies/searchConditionReducer'
import { searchResultReducer } from './movies/searchResultReducer'

const moviesReducer =  combineReducer({
    condition: searchConditionReducer,
    result: searchResultReducer
})

const reducer = combineReducer({
    movies: moviesReducer,
    isLoading: isLoadingReducer
})


export default reducer