import { configureStore } from "@reduxjs/toolkit";
import moviesSlice from "../slice/moviesSlice";
import movieDetailSlice from "../slice/movieDetailSlice";

const store = configureStore({
  reducer: {
    movies: moviesSlice,
    movieDetail: movieDetailSlice,
  },
});

export default store;
