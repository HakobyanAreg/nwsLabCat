import watchers from "./sagas";
import createSagaMiddleware from 'redux-saga';
import {applyMiddleware, compose, createStore} from "redux";
import reducers from './reducers'
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const saga = createSagaMiddleware();
export const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(saga))
)

saga.run(watchers)
