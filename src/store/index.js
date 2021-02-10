import { createStore, applyMiddleware, compose } from "redux";
import Reducers from "../reducers";
import reduxLogger from "redux-logger";

// To createa  Saga Middleware
import createSagaMiddleware from "redux-saga";

// Import our Saga
import rootSaga from "../sagas/sagas";

// Creating our Middleware
const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const Store = createStore(
  Reducers,
  composeEnhancers(applyMiddleware(sagaMiddleware, reduxLogger))
);

sagaMiddleware.run(rootSaga);

export default Store;
