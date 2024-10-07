import { createSlice } from "@reduxjs/toolkit";

import initialState, { DEFAULT } from "./initialState";
import { IToken } from "../../../types/token";
import tokenApi from "../../../services/token";
import { IAuthInitState } from "./types";
import Config from "../../../config/Config";

const clearTokenStateReducer = (state: IAuthInitState) => {
  localStorage.removeItem("accessToken");
  localStorage.removeItem("refreshToken");
  localStorage.removeItem("user");
  state.isAuth = false;
  Object.keys(DEFAULT).forEach((key) => {
    state[key] = DEFAULT[key];
  });
};

const writeTokenReducer = (
  state: IAuthInitState,
  { payload }: { payload: IToken }
) => {
  localStorage.setItem("accessToken", payload.tokenData.accessToken);
  localStorage.setItem("refreshToken", payload.tokenData.refreshToken);
  if (!payload.user.roleName) {
    payload.user.roleName = Config.Roles.PATIENT
  }
  localStorage.setItem("user", JSON.stringify(payload.user))
  
  Object.keys(payload.user).forEach((key) => {
    state[key] = payload.user[key];
  });

  if (!state.roleName) {
    state.roleName = Config.Roles.PATIENT
  }

  state.isAuth = true;
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
      .addMatcher(tokenApi.endpoints.loginStuff.matchFulfilled, writeTokenReducer)
      .addMatcher(
        tokenApi.endpoints.logout.matchFulfilled,
        clearTokenStateReducer
      );
  },
});

const authReducer = slice.reducer;

export { authReducer };
