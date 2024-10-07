import { createApi } from "@reduxjs/toolkit/query/react";

import { ILoginData, IToken } from "../types/token";
import baseAuthQuery from "./baseAuthQuery";

export const tokenApi = createApi({
  reducerPath: "tokenApi",
  baseQuery: baseAuthQuery,
  endpoints: (builder) => ({
    login: builder.mutation<IToken, ILoginData>({
      query: (credentials: ILoginData) => {
        const formData = {
          iin: credentials.email,
        };
        return {
          url: "/auth/patient/login",
          method: "POST",
          body: formData,
        };
      },
    }),
    loginStuff: builder.mutation<IToken, ILoginData>({
      query: (credentials: ILoginData) => {
        const formData = {
          email: credentials.email,
          password: credentials.password
        };
        return {
          url: "/auth/stuff/login",
          method: "POST",
          body: formData,
        };
      },
    }),
    logout: builder.mutation<unknown, unknown>({
      query: () => {
        const refreshToken = localStorage.getItem("refreshToken");
        const headers: { "Refresh-Token"?: string } = refreshToken
          ? { "Refresh-Token": refreshToken }
          : {};
        return {
          headers: { ...headers },
          method: "GET",
          url: "/auth/logout",
        };
      },
    }),
    refresh: builder.query<IToken, unknown>({
      query: () => {
        const refreshToken = localStorage.getItem("refreshToken");
        const headers: { "Refresh-Token"?: string } = refreshToken
          ? { "Refresh-Token": refreshToken }
          : {};
        return {
          headers: { ...headers },
          url: "/auth/refresh",
        };
      },
    }),
  }),
});

export const { useLoginMutation, useLoginStuffMutation, useLogoutMutation, useRefreshQuery } =
  tokenApi;
export default tokenApi;
