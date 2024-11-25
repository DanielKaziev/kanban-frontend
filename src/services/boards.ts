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
    getBoardById: builder.query<IBoard, string>({
      query: (id: string) => `${ENDPOINT}/${id}`,
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
    updateTaskEvent: builder.mutation({
      query: ({ taskId, newEventId }) => ({
        url: `/tasks/${taskId}/move`,
        method: "PATCH",
        body: { target: newEventId },
      }),
    }),
  }),
});

export const {
  useGetOwnBoardsListQuery,
  useCreateBoardMutation,
  useGetBoardEventsByidListQuery,
  useUpdateTaskEventMutation,
  useCreateEventMutation,
  useGetBoardByIdQuery,
} = boardsApi;

export default boardsApi;
