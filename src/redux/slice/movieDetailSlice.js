//redux
import { createSlice } from "@reduxjs/toolkit";

const movieDetailSlice = createSlice({
  name: "movieDetail",
  initialState: {
    movie: null,
  },

  reducers: {
    loadMovieDetail: (state, action) => {
      state.movie = action.payload;
    },
  },
});

export const { loadMovieDetail } = movieDetailSlice.actions;
export default movieDetailSlice.reducer;
