import { createApi } from "@reduxjs/toolkit/query/react";
import { ILoginData, IRegisterData, IToken, ITokenData } from "../types/token";
import baseAuthQuery from "./baseAuthQuery";

export const tokenApi = createApi({
  reducerPath: "tokenApi",
  baseQuery: baseAuthQuery,
  endpoints: (builder) => ({
    login: builder.mutation<ITokenData, ILoginData>({
      query: (credentials: ILoginData) => {
        return {
          url: "/auth/login",
          method: "POST",
          body: credentials,
        };
      },
    }),
    register: builder.mutation<ITokenData, IRegisterData>({
      query: (credentials: IRegisterData) => {
        return {
          url: "/auth/registration",
          method: "POST",
          body: credentials,
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
    refresh: builder.query<ITokenData, unknown>({
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

export const { useLoginMutation, useRegisterMutation, useLogoutMutation, useRefreshQuery } =
  tokenApi;
export default tokenApi;
