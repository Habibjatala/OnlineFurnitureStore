import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./slice/userSlice";
import ProductReducer from "./slice/productSlice";
import rootSaga from "./Saga/rootSaga";
import createSagaMiddleware from "redux-saga";
const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    user: UserReducer,
    product: ProductReducer,
  },
  middleware: () => [sagaMiddleware],
});
sagaMiddleware.run(rootSaga);
export default store;
