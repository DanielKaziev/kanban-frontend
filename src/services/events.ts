import { createApi } from "@reduxjs/toolkit/query/react";
import { IBoard, ICreateBoard } from "../types/boards";
import baseReauthQuery from "./baseReauthQuery";
import { IEvent } from "types/events";
import { ITask } from "types/tasks";

const ENDPOINT = "/events";

export const eventsApi = createApi({
  reducerPath: "eventsApi",
  baseQuery: baseReauthQuery,
  endpoints: (builder) => ({
    getEventTasksList: builder.query<Array<ITask>, string>({
      query: (boardId: string) => `${ENDPOINT}/${boardId}/tasks`,
    }),
  }),
});

export const { useGetEventTasksListQuery } = eventsApi;

export default eventsApi;
