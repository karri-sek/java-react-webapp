import { createStore, applyMiddleware, compose } from 'redux';
import { forbiddenWordsMiddleware } from "../middleware";
import { rootReducer } from '../reducers/index';
import createSagaMiddleware from "redux-saga";
import apiSaga from "../sagas/apiSaga";
import thunk from "redux-thunk";

const initialiseSagaMiddleware = createSagaMiddleware();
const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, storeEnhancers(applyMiddleware(forbiddenWordsMiddleware,thunk,initialiseSagaMiddleware)));
initialiseSagaMiddleware.run(apiSaga);
export default store;