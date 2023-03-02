import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getTrendingUrl,
  getAnimationUrl,
  getHorrorUrl,
  getMysteryUrl,
  getSearchUrl,
} from "../../api";

export const loadInitialMovies = createAsyncThunk(
  "loadInitialMovies",
  async () => {
    const trendingMoviesData = await axios.get(getTrendingUrl());
    const animationMoviesData = await axios.get(getAnimationUrl());
    const horrorMoviesData = await axios.get(getHorrorUrl());
    const mysteryMoviesData = await axios.get(getMysteryUrl());
    return {
      trending: trendingMoviesData.data.results,
      animation: animationMoviesData.data.results,
      horror: horrorMoviesData.data.results,
      mystery: mysteryMoviesData.data.results,
    };
  }
);
export const fetchSearchMovie = createAsyncThunk(
  "fetchSearchMovie",
  async (query) => {
    const searchMovieData = await axios.get(getSearchUrl(query));
    return searchMovieData.data.results;
  }
);

const initialState = {
  trending: [],
  animation: [],
  horror: [],
  mystery: [],
  searched: [],
  error: false,
  status: "idle",
};
const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    clearSearchState: (state) => {
      state.searched = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loadInitialMovies.pending, (state, action) => {
      state.status = "loading";
    });
    builder.addCase(loadInitialMovies.fulfilled, (state, action) => {
      return {
        ...state,
        status: "succeeded",
        trending: action.payload.trending,
        animation: action.payload.animation,
        horror: action.payload.horror,
        mystery: action.payload.mystery,
      };
    });
    builder.addCase(loadInitialMovies.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    });
    //search movie
    builder.addCase(fetchSearchMovie.fulfilled, (state, action) => {
      const movies = action.payload.filter(
        (movie) => movie.backdrop_path !== null && movie.poster_path !== null
      );
      state.searched = movies;
    });
  },
});

export const { clearSearchState } = moviesSlice.actions;
export default moviesSlice.reducer;
