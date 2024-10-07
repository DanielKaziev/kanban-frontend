import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import i18n from "i18next";
import { injectToken } from "./injectHeaders";

export const BASE_APP_URL = `${process.env.REACT_APP_API_URL}/api/`;

const baseAppQuery = fetchBaseQuery({
  credentials: "include",
  baseUrl: BASE_APP_URL,
  prepareHeaders: (headers, api) => {
    headers = injectToken(headers, api);
    headers.set("Content-Language", i18n.language);
    return headers;
  },
});

export default baseAppQuery;
