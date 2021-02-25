import { put, takeEvery, fork } from "redux-saga/effects";
import { addUser } from "../../apis/api.auth";
import * as ActionTypes from "../../actions/Accounts/action.types";

// Worker Saga to fetch all Stocks
function* workerFetchUser(data) {
  try {
    const userData = data?.payload;
    const user = { ...userData };
    const response = yield addUser(user);
    if (response) {
      yield put({ type: ActionTypes.FETCH_USER_INFO, payload: response.data });
    }
  } catch (error) {
    console.log(error, "error");
  }
}

// Watcher Saga who watch whenever "GET_ALL_STOCKS" action dispatch
function* watcherFetchUser() {
  yield takeEvery(ActionTypes.FETCH_USER, workerFetchUser);
}

function* fetchAll() {
  yield fork(watcherFetchUser);
}

export default fetchAll();
