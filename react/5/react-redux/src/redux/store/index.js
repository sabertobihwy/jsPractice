import { createStore, applyMiddleware } from "redux"
import logger from "redux-logger"
import reducer from "../reducer/counter"
import createSagaMiddleware from 'redux-saga'
import rootSaga from "../saga"
import { composeWithDevTools } from 'redux-devtools-extension'

const sagaMid =  createSagaMiddleware()

const store = createStore(reducer,composeWithDevTools(applyMiddleware(sagaMid,logger))
    
)

sagaMid.run(rootSaga)

export default store