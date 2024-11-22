import { createApi } from "@reduxjs/toolkit/query/react";
import { IBoard } from "../types/boards";
import baseReauthQuery from "./baseReauthQuery";

const ENDPOINT = "/boards";

export const boardsApi = createApi({
  reducerPath: "boardsApi",
  baseQuery: baseReauthQuery,
  endpoints: (builder) => ({
    getOwnBoardsList: builder.query<Array<IBoard>, any>({
      query: () => `${ENDPOINT}/own`,
    }),
  }),
});

export const { useGetOwnBoardsListQuery } = boardsApi;

export default boardsApi;
