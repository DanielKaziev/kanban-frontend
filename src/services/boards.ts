import { createApi } from "@reduxjs/toolkit/query/react";
import { IBoard, ICreateBoard } from "../types/boards";
import baseReauthQuery from "./baseReauthQuery";

const ENDPOINT = "/boards";

export const boardsApi = createApi({
  reducerPath: "boardsApi",
  baseQuery: baseReauthQuery,
  endpoints: (builder) => ({
    getOwnBoardsList: builder.query<Array<IBoard>, any>({
      query: () => `${ENDPOINT}/own`,
    }),
    createBoard: builder.mutation<IBoard, ICreateBoard>({
      query: (board: ICreateBoard) => ({
        url: `${ENDPOINT}`,
        body: board,
        method: "POST",
      }),
    }),
  }),
});

export const { useGetOwnBoardsListQuery, useCreateBoardMutation } = boardsApi;

export default boardsApi;
