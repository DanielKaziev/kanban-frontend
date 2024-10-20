import { configureStore, isRejectedWithValue } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

import tokenApi from '../services/token';
import { authReducer } from './slices/auth';

export const rootReducer = {
  auth: authReducer,
  [tokenApi.reducerPath]: tokenApi.reducer,
};

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      tokenApi.middleware,
    ),
});

setupListeners(store.dispatch);

export default store