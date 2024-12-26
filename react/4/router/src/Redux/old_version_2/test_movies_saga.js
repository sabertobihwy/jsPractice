 import { createStore, applyMiddleware } from 'redux';
//import createStore from "./createStore"
import reducer from "./reducer/combine"
//import applyMiddleware from "./applyMiddleWare"

import { setConditionAction, setLoadingAction } from "./action/movies/searchCondition"
import createSagaMiddleware from 'redux-saga'
import rootSaga from "./saga"
import logger from "redux-logger"


const sagaMid = createSagaMiddleware()

const store = createStore(reducer, applyMiddleware(sagaMid,logger))

sagaMid.run(rootSaga)

// register window funcs

 //store.dispatch(setLoadingAction(true))

window.setCondition = (condition)=>{
    store.dispatch(setConditionAction(condition))
}

// 疑问：是不是我disptch任何action，这样写都要经历一次fetchStudents？？
// 是的，最开始dispatch init的时候就直接要运行了

// 而且只运行一次，结束了就不运行saga task了

