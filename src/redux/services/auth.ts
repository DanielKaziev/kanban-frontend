import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IToken, TLoginData } from "types/auth";
import baseAppQuery from "./baseAppQuery";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: baseAppQuery,
  endpoints: (builder) => ({
    login: builder.mutation<IToken, TLoginData>({
      query: (credentials: TLoginData) => {
        return {
          url: "",
          method: "POST",
          body: credentials,
        };
      },
    }),
  }),
});

export const { useLoginMutation } = authApi;
