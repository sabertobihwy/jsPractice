import { takeEvery,delay,put,select,call } from 'redux-saga/effects'
import { asyncIncrease,asyncDecrease,increase,decrease } from '../action/counter'
import { fetchMovies,setMoviesResult,isLoading } from '../action/movies/result'
import fetchMoviesAsyn from '../../service/fetchMovies'

function* rootSaga(){
    yield takeEvery(asyncIncrease.toString(),asyncIncreaseSaga)
    yield takeEvery(asyncDecrease.toString(), asyncDecreaseSaga)
    yield takeEvery(fetchMovies.toString(), fetchMoviesSaga)
}

function* asyncIncreaseSaga(){
    yield delay(1000)
    yield put(increase())
}

function* asyncDecreaseSaga(){
    yield delay(1000)
    yield put(decrease())
}

function* fetchMoviesSaga(){
    yield put(isLoading(true))
    const condition = yield select(state => state.movies.condition)
    try {
        const resp = yield call(fetchMoviesAsyn, '/api/movies',condition.page, condition.size)
        yield put(setMoviesResult(resp))
    } catch (error) {
        console.log(error.message)
    }finally{
        yield put(isLoading(false))
    }
}

export default rootSaga