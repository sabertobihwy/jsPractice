import { take,all,put,select,delay,call,takeEvery,takeLatest } from 'redux-saga/effects'
import { setLoadingAction,setConditionAction } from '../action/movies/searchCondition'
import fetchMovies from '../service/fetchMovies'
import { getResultAction } from '../action/movies/searchResult'

function* numberGenerator(){
    yield delay(1000)
    console.log("numberGenerator complete")
}

function* getMoviesGenerator(action){
    console.log("进来了")
    yield put(setLoadingAction(true)) 
    // const condition =  yield select(state => state.movies.condition)
    // const result = yield call(fetchMovies,'/api/movies',condition.page, condition.size)
    // yield put(getResultAction({
    //     datas: result.listData,
    //     totalCount: result.totalCount
    // }))
    // yield put(setLoadingAction(false))
    console.log("getMoviesGenerator complete")

}


function* rootSaga(){
    //yield all([numberGenerator(), getMoviesGenerator()])
    yield takeEvery('*', function* (action) {
        console.log('Action dispatched:', action.type);
    });
   // yield takeEvery(setConditionAction,getMoviesGenerator)
   yield takeEvery(setConditionAction, getMoviesGenerator);

    console.log('listening')
}

export default rootSaga
// 为什么takeEvery的时候触发一次setConditionAction会被在put(setLoadingAction)后被循环触发
