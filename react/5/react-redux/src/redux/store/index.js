import { createStore, applyMiddleware } from "redux"
import logger from "redux-logger"
import reducer from "../reducer/counter"
import createSagaMiddleware from 'redux-saga'
import rootSaga from "../saga"

const sagaMid =  createSagaMiddleware()

const store = createStore(reducer,
    applyMiddleware(sagaMid,logger)
)

sagaMid.run(rootSaga)

export default store