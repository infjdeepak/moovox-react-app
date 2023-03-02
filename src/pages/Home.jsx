//redux
import { loadInitialMovies } from "../redux/slice/moviesSlice";
import { useDispatch, useSelector } from "react-redux";
//react hooks
import { useEffect } from "react";
//components
import TrendingMovies from "../components/TrendingMovies";
import AnimationMovies from "../components/AnimationMovies";
import MysteryMovies from "../components/MysteryMovies";
import HorrorMovies from "../components/HorrorMovies";
import Search from "../components/Search";
import SearchedMovies from "../components/SearchedMovies";
import StatusMessage from "../components/StatusMessage";

const Home = () => {
  //dispatch
  const dispatch = useDispatch();
  //states
  const { status } = useSelector((state) => state.movies);
  const { searched } = useSelector((state) => state.movies);
  //fetching movies
  useEffect(() => {
    if (status === "idle") {
      dispatch(loadInitialMovies());
    }
  }, [status]);

  if (status === "loading") {
    return <StatusMessage message={"Loading....."} />;
  }
  return (
    <>
      <Search />
      <div className="movies-wrapper">
        {searched.length === 0 ? "" : <SearchedMovies />}
        <TrendingMovies />
        <AnimationMovies />
        <MysteryMovies />
        <HorrorMovies />
      </div>
    </>
  );
};

export default Home;
