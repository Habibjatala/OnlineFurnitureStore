import { all } from "redux-saga/effects";
import { watchRegisterUser, watchSignInUser } from "./userSaga";
import {
  watchAddProduct,
  watchGetAllProduct,
  watchUpdateProduct,
  watchGetSingleProduct,
} from "./productSaga";
export default function* rootSaga() {
  yield all([
    watchRegisterUser(),
    watchSignInUser(),
    watchAddProduct(),
    watchGetAllProduct(),
    watchUpdateProduct(),
    watchGetSingleProduct(),
  ]);
}
