import { createApi } from "@reduxjs/toolkit/query/react";
import { IHospital } from "../types/hospitals";
import baseReauthQuery from "./baseReauthQuery";
import { IPaginatedList } from "types/paginations";
import { IApplication } from "types/application";

const ENDPOINT = "/stuff/";

export const applicationApi = createApi({
  reducerPath: "applicationApi",
  baseQuery: baseReauthQuery,
  endpoints: (builder) => ({
    getApplicationsList: builder.query<IPaginatedList<IApplication>, void>({
      query: () => `${ENDPOINT}patient-attachments`,
    }),
    getApplicationById: builder.query<IApplication, string>({
      query: (id) => `${ENDPOINT}/patient-attachments/${id}`,
    }),
    postApplicationsById: builder.query<IPaginatedList<IApplication>, void>({
      query: () => `${ENDPOINT}patient-attachments`,
    }),
    updateProcessigById: builder.mutation<void, {id: string, status: string}>({
      query: ({id, status}) => ({
        url: `/stuff/update-attachment-status/${id}`,
        method: "PATCH",
        body: { status: status },
      }),
    }),
  }),
});

export const {
  useGetApplicationsListQuery,
  useGetApplicationByIdQuery,
  useUpdateProcessigByIdMutation,
} = applicationApi;
