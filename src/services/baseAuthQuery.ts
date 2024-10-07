import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { BASE_APP_URL } from "./baseAppQuery";

const baseAuthQuery = fetchBaseQuery({
  credentials: "include",
  baseUrl: BASE_APP_URL,
});

export default baseAuthQuery;
