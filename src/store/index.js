import { createStore, applyMiddleware } from "redux";
import Reducers from "../reducers";

const Store = createStore(Reducers);

export default Store;
