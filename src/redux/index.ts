import store, { rootReducer } from "./store";

export type RootState = typeof rootReducer;
export type AppDispatch = typeof store.dispatch;

export default store;
