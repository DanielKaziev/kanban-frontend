import { createApi } from "@reduxjs/toolkit/query/react";
import { IBoard, ICreateBoard } from "../types/boards";
import baseReauthQuery from "./baseReauthQuery";
import { IEvent } from "types/events";

const ENDPOINT = "";

export const boardsApi = createApi({
  reducerPath: "boardsApi",
  baseQuery: baseReauthQuery,
  endpoints: (builder) => ({
    getOwnBoardsList: builder.query<Array<IBoard>, any>({
      query: () => `${ENDPOINT}/own`,
    }),
    getBoardEventsByidList: builder.query<Array<IEvent>, string>({
      query: (boardId: string) => `${ENDPOINT}/${boardId}/events`,
    }),
    createBoard: builder.mutation<IBoard, ICreateBoard>({
      query: (board: ICreateBoard) => ({
        url: `${ENDPOINT}`,
        body: board,
        method: "POST",
      }),
    }),
    createEvent: builder.mutation<IBoard, { name: string; boardId: string }>({
      query: ({ name, boardId }: { name: string; boardId: string }) => ({
        url: `${ENDPOINT}/${boardId}/events`,
        body: {
          name: name,
          order: 1,
        },
        method: "POST",
      }),
    }),
  }),
});

export const {
  useGetOwnBoardsListQuery,
  useCreateBoardMutation,
  useGetBoardEventsByidListQuery,
  useCreateEventMutation,
} = boardsApi;

export default boardsApi;
