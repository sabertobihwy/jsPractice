import { takeEvery,delay,put } from 'redux-saga/effects'
import { asyncIncrease,asyncDecrease,increase,decrease } from '../action/counter'

function* rootSaga(){
    yield takeEvery(asyncIncrease.toString(),asyncIncreaseSaga)
    yield takeEvery(asyncDecrease.toString(), asyncDecreaseSaga)
}

function* asyncIncreaseSaga(){
    yield delay(1000)
    yield put(increase())
}

function* asyncDecreaseSaga(){
    yield delay(1000)
    yield put(decrease())
}

export default rootSaga