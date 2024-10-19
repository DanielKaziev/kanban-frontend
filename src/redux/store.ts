import { configureStore, isRejectedWithValue } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

import tokenApi from '../services/token';
import { authReducer } from './slices/auth';
import { applicationApi } from '../services/application';

export const rootReducer = {
  auth: authReducer,
  [applicationApi.reducerPath]: applicationApi.reducer,
  [tokenApi.reducerPath]: tokenApi.reducer,
};

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      tokenApi.middleware,
      applicationApi.middleware,
    ),
});

setupListeners(store.dispatch);

export default store