//redux
import { loadInitialMovies } from "../redux/slice/movieSlice";
import { useDispatch, useSelector } from "react-redux";

//react hooks
import { useEffect } from "react";

//components
import TrendingMovies from "../components/TrendingMovies";
import AnimationMovies from "../components/AnimationMovies";
import MysteryMovies from "../components/MysteryMovies";
import HorrorMovies from "../components/HorrorMovies";
import SearchMovie from "../components/SearchMovie";
const Home = () => {
  //dispatch
  const dispatch = useDispatch();

  //states
  const { status } = useSelector((state) => state.movies);

  //fetching movies
  useEffect(() => {
    if (status === "idle") {
      dispatch(loadInitialMovies());
    }
  }, [status]);

  //rendrenig
  if (status === "loading") {
    return <h1>Loading....</h1>;
  }
  return (
    <>
      <SearchMovie />
      <div className="movies-wrapper">
        <TrendingMovies />
        <AnimationMovies />
        <MysteryMovies />
        <HorrorMovies />
      </div>
    </>
  );
};

export default Home;
