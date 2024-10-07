import { FetchArgs, FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { BaseQueryFn } from "@reduxjs/toolkit/query";
import baseAppQuery from "./baseAppQuery";
import baseAuthQuery from "./baseAuthQuery";
import { IToken, ITokenData } from "../types/token";
import { clearTokenState, writeToken } from "../redux/slices/auth";

const baseReauthQuery: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  let result = await baseAppQuery(args, api, extraOptions);

  if (result.error && result.error.status === 401) {
    const refreshResult = await baseAuthQuery(
      "/auth/refresh",
      api,
      extraOptions
    );

    if (refreshResult.data) {
      const data = refreshResult.data as ITokenData;
      api.dispatch(writeToken(data));

      result = await baseAppQuery(args, api, extraOptions);
    } else {
      api.dispatch(clearTokenState());
    }
  }
  return result;
};

export default baseReauthQuery;
