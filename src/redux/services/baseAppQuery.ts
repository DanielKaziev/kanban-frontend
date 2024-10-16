import { fetchBaseQuery } from '@reduxjs/toolkit/query'

const baseAppQuery = fetchBaseQuery({
  baseUrl: process.env.BACKEND_URL,
});

export default baseAppQuery;
