import { put, takeEvery, all } from "redux-saga/effects";
import Axios from "axios";

// Worker Saga to fetch all Stocks
function* workerGetProducts() {
  try {
    const response = yield Axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    if (response) {
      yield put({ type: "FETCH_ALL_STOCKS", payload: response });
    }
  } catch (error) {
    console.log(error);
  }
}

// Watcher Saga who watch whenever "GET_ALL_STOCKS" action dispatch
function* watcherGetProducts() {
  yield takeEvery("GET_ALL_STOCKS", workerGetProducts);
}

// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([watcherGetProducts()]);
}
