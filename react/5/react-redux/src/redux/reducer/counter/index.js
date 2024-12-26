import {handleActions, combineActions} from 'redux-actions'
import {asyncIncrease, asyncDecrease, increase, decrease} from '../../action/counter'
import {combineReducers} from 'redux'
import  change from '../../action/movies/condition'
import  {setMoviesResult,isLoading} from '../../action/movies/result'

const counterReducer = handleActions({
    [combineActions(increase,decrease,asyncIncrease, asyncDecrease)] : (state, {payload}) => state + payload
}, 0)

const resultReducer = handleActions({
    [setMoviesResult]: (state, {payload}) => {
       return {
        ...state,
        totalCount : payload.totalCount,
        datas: payload.listData
       }
    },
    [isLoading]: (state, {payload}) => {
        return {
            ...state,
            isLoading: payload
        }
    }

},{
    datas: [],
    totalCount: 0,
    isLoading: false
}
)

const conditionReducer = handleActions({
    [change]:  (state, {payload}) => {
        return {
            ...state,
            ...payload
        }
    }
},{
    page: 1,
    size: 10
})

const moviesReducer = combineReducers({
    condition: conditionReducer,
    result: resultReducer
})

const reducer = combineReducers({
    counter: counterReducer,
    movies: moviesReducer
})


export default reducer