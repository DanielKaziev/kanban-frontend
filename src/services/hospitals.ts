import { createApi } from "@reduxjs/toolkit/query/react";
import { IHospital } from "../types/hospitals";
import baseReauthQuery from "./baseReauthQuery";
import { IPaginatedList } from "types/paginations";
import { IOwnApplication } from "types/application";

const ENDPOINT = "/hospital/";

export const hospitalsApi = createApi({
  reducerPath: "hospitalsApi",
  baseQuery: baseReauthQuery,
  endpoints: (builder) => ({
    getHospitalsList: builder.query<IPaginatedList<IHospital>, void>({
      query: () => `${ENDPOINT}/hospitals`,
    }),
    getHospitalsById: builder.query<IHospital, string>({
      query: (id) => `${ENDPOINT}/hospitals/${id}`,
    }),
    postRequestById: builder.mutation<void, string>({
      query: (id) => ({
        url: "/patient/create-attachment",
        method: 'POST',
        body: {hospitalId: id},
      }),
    }),
    getRequestByPatient: builder.query<IOwnApplication, string>({
      query: () => ({
        url: `/patient/get-own-attachment`,
        method: "GET"
      }),
    })
  }),
});

export const { useGetHospitalsListQuery, useGetHospitalsByIdQuery, useGetRequestByPatientQuery, usePostRequestByIdMutation } = hospitalsApi;
