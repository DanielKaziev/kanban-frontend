import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { injectToken } from "utils/injectHeaders";

export let BASE_APP_URL = `http://localhost:5000/api/`;

if (process.env.NODE_ENV === 'production') {
  BASE_APP_URL = `${process.env.KANBAN_BACKEND_URL}/api/`
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
