import { createSlice } from "@reduxjs/toolkit";
import { museumApi } from "../../store/api";

const GalleryApi = museumApi.injectEndpoints({
  endpoints: (builder) => ({
    getDepartments: builder.query({
      query: () => ({
        url: "/departments",
        method: "GET",
      }),
      providesTag: ["departments"],
    }),
  }),
});

const gallerySlice = createSlice({
  name: "departments",
  initialState: {},
  reducers: {},
//   extraReducers: (builder) => {
//     builder.addMatcher(museumApi.endpoints.addUser.matchFulfilled);
//   }, 
}); 

export default gallerySlice.reducer;

export const { useGetDepartmentsQuery, } = museumApi;