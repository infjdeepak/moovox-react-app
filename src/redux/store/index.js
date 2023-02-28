import { configureStore } from "@reduxjs/toolkit";
import movieSlice from "../slice/movieSlice";

const store = configureStore({
  reducer: {
    movies: movieSlice,
  },
});

export default store;
