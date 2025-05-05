import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const museumApi = createApi({
  reducerPath: "museumApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://collectionapi.metmuseum.org/public/collection/v1",
  }),
  endpoints: () => ({}),
});

