import { put, takeEvery, fork } from "redux-saga/effects";
import { getAllStocks } from "../../apis/api.stock";

// Worker Saga to fetch all Stocks
function* workerGetProducts() {
  try {
    const response = yield getAllStocks();
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

function* fetchAll() {
  yield fork(watcherGetProducts);
}

export default fetchAll();
