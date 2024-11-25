import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { injectToken } from "./injectHeaders";

export let BASE_APP_AUTH_URL = `${process.env.REACT_APP_AUTH_API_URL}/api`;
export let BASE_APP_URL = `${process.env.REACT_APP_API_URL}/api/boards`;

if (process.env.NODE_ENV === "production") {
  BASE_APP_AUTH_URL = `${process.env.REACT_APP_BACKEND_URL}/api`;
  BASE_APP_URL = `${process.env.REACT_APP_BACKEND_URL}/api/boards`;
}

const baseAppQuery = fetchBaseQuery({
  credentials: "include",
  baseUrl: BASE_APP_URL,
  prepareHeaders: (headers, api) => {
    headers = injectToken(headers, api);
    return headers;
  },
});

export default baseAppQuery;
