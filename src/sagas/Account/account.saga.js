import { put, takeEvery, fork } from "redux-saga/effects";
import { addUser } from "../../apis/api.auth";

// Worker Saga to fetch all Stocks
function* workerAddUser() {
  try {
    const response = yield addUser();
    if (response) {
      console.log(response);
      yield put({ type: "NEW_USER", payload: response });
    }
  } catch (error) {
    console.log(error);
  }
}

// Watcher Saga who watch whenever "GET_ALL_STOCKS" action dispatch
function* watcherGetProducts() {
  yield takeEvery("ADD_USER", workerAddUser);
}

function* fetchAll() {
  yield fork(watcherGetProducts);
}

export default fetchAll();
