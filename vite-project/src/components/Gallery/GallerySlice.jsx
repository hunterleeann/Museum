import { createSlice } from "@reduxjs/toolkit";
import { museumApi } from "../../store/api";

const GalleryApi = museumApi.injectEndpoints({
  endpoints: (builder) => ({
    getDepartments: builder.query({
      query: () => ({
        url: "/departments",
        // "/departments",
        method: "GET",
      }),
      providesTag: ["departments"],
    }),
    getRandomObject: builder.query({
      query: (randomObject) => ({
        url: `/objects/${randomObject}`,
        method: "GET",
      }),
      providesTag: ["object"],
    }),
      getSelectedDepartment: builder.query({
        query: (selectedDepartment) => ({
          url: `/objects?departmentIds=${selectedDepartment}`,
          method: "GET",
        }),
        providesTag: ["department"],
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

export const { useGetDepartmentsQuery, useGetSelectedDepartmentQuery, useGetRandomObjectQuery } =
  museumApi;
