import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import tokenApi from "../services/token";
import { authReducer } from "./slices/auth";
import boardsApi from "../services/boards";

export const rootReducer = {
  auth: authReducer,
  [tokenApi.reducerPath]: tokenApi.reducer,
  [boardsApi.reducerPath]: boardsApi.reducer,
};

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(tokenApi.middleware, boardsApi.middleware),
});

setupListeners(store.dispatch);

export default store;
