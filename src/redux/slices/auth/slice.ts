import { createSlice } from "@reduxjs/toolkit";

import initialState, { DEFAULT } from "./initialState";
import { ITokenData, IUserData } from "../../../types/token";
import tokenApi from "../../../services/token";
import { jwtDecode } from "jwt-decode";

const clearTokenStateReducer = (state: IUserData) => {
  localStorage.removeItem("accessToken");
  localStorage.removeItem("refreshToken");
  localStorage.removeItem("user");
  state.isAuth = false;
  Object.keys(DEFAULT).forEach((key) => {
    state[key] = DEFAULT[key];
  });
};

const writeTokenReducer = (
  state: IUserData,
  { payload }: { payload: ITokenData }
) => {
  localStorage.setItem("accessToken", payload.accessToken);
  localStorage.setItem("refreshToken", payload.refreshToken);
  const token = payload.accessToken
  const userData = jwtDecode(token) as IUserData;
  
  Object.keys(DEFAULT).forEach((key) => {
    state[key] = userData[key];
  });
  
  state.isAuth = true

};

export const slice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    clearTokenState: clearTokenStateReducer,
    writeToken: writeTokenReducer,
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(tokenApi.endpoints.login.matchFulfilled, writeTokenReducer)
      .addMatcher(tokenApi.endpoints.refresh.matchFulfilled, writeTokenReducer)
      .addMatcher(tokenApi.endpoints.register.matchFulfilled, writeTokenReducer)
      .addMatcher(
        tokenApi.endpoints.logout.matchFulfilled,
        clearTokenStateReducer
      );
  },
});

const authReducer = slice.reducer;

export { authReducer };
