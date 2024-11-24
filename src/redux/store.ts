import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import tokenApi from "../services/token";
import { authReducer } from "./slices/auth";
import boardsApi from "../services/boards";
import eventsApi from "../services/events";

export const rootReducer = {
  auth: authReducer,
  [tokenApi.reducerPath]: tokenApi.reducer,
  [boardsApi.reducerPath]: boardsApi.reducer,
  [eventsApi.reducerPath]: eventsApi.reducer,
};

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      tokenApi.middleware,
      boardsApi.middleware,
      eventsApi.middleware
    ),
});

setupListeners(store.dispatch);

export default store;
