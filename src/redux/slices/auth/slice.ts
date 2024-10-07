import { createSlice } from "@reduxjs/toolkit";

import initialState, { DEFAULT } from "./initialState";
import { ITokenData } from "../../../types/token";
import tokenApi from "../../../services/token";
import { IAuthInitState } from "./types";
import { jwtDecode } from "jwt-decode";

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
  { payload }: { payload: ITokenData }
) => {
  localStorage.setItem("accessToken", payload.accessToken);
  localStorage.setItem("refreshToken", payload.refreshToken);
  const token = payload.accessToken
  const {id, email, username } = jwtDecode(token) as IAuthInitState
  state.id = id
  state.email = email
  state.username = username
  state.isAuth = true;
  state.roleName = "User"
  

  // if (!payload.user.roleName) {
  //   payload.user.roleName = Config.Roles.PATIENT
  // }
  // localStorage.setItem("user", JSON.stringify(payload.user))
  
  // Object.keys(payload.user).forEach((key) => {
  //   state[key] = payload.user[key];
  // });

  // if (!state.roleName) {
  //   state.roleName = Config.Roles.PATIENT
  // }


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
