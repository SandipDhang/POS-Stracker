import { all } from "redux-saga/effects";

import productWatcher from "./Product/product.saga";
import accountWatcher from "./Account/account.saga";

export default function* rootSaga() {
  yield all([productWatcher, accountWatcher]);
}
