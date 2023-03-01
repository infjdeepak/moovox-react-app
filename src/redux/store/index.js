import { configureStore } from "@reduxjs/toolkit";
import movieSlice from "../slice/movieSlice";
import movieDetailSlice from "../slice/movieDetailSlice";

const store = configureStore({
  reducer: {
    movies: movieSlice,
    movieDetail: movieDetailSlice,
  },
});

export default store;
