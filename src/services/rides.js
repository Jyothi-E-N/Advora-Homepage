import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const ridesHeaders = {};

const baseUrl = "https://assessment.api.vweb.app";

const createRequest = (url) => ({ url, headers: ridesHeaders });

export const ridesApi = createApi({
    reducerPath: "ridesApi",
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder) => ({
        getRides: builder.query({
            query: () => createRequest(`/rides`),
        }),
        getUser: builder.query({
            query: () => createRequest(`/user`),
        }),
    }),
});

export const { useGetRidesQuery } = ridesApi;
export const { useGetUserQuery } = ridesApi;