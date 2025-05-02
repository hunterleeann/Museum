import { configureStore } from "@reduxjs/toolkit";
import { museumApi } from "./api";
import GallerySlice from "../components/Gallery/GallerySlice";
export const store = configureStore({
  reducer: {
    [museumApi.reducerPath]: museumApi.reducer,
    gallery: GallerySlice,
  },
  middleware: (getDefaultMiddleWare) =>
    getDefaultMiddleWare().concat(museumApi.middleware),
});
