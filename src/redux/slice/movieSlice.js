import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getTrendingUrl,
  getAnimationUrl,
  getHorrorUrl,
  getMysteryUrl,
  getSearchUrl,
  getDetailsUrl,
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

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    trending: [],
    animation: [],
    horror: [],
    mystery: [],
    searched: [],
    error: false,
    status: "idle",
  },
  reducers: {
    example: (state) => {
      return { ...state };
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
  },
});

export const { example } = movieSlice.actions;
export default movieSlice.reducer;
