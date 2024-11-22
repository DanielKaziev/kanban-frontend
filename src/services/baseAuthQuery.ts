import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { BASE_APP_AUTH_URL } from "./baseAppQuery";
import { injectToken } from "./injectHeaders";

const baseAuthQuery = fetchBaseQuery({
  credentials: "include",
  baseUrl: BASE_APP_AUTH_URL,
  prepareHeaders: (headers, api) => {
    headers = injectToken(headers, api);
    return headers;
  },
});

export default baseAuthQuery;
