//redux
import { fetchSearchMovie } from "../redux/slice/movieSlice";
import { useSelector, useDispatch } from "react-redux";
//imgUrl
import { imgPaths } from "../api";
import { useEffect, useState } from "react";

const Search = () => {
  const dispatch = useDispatch();
  //states
  const [movieBg, setMovieBg] = useState();
  const [query, setQuery] = useState("");
  const { trending } = useSelector((state) => state.movies);
  //handlker
  const searchInputHandler = (e) => {
    setQuery(e.target.value);
  };
  const searchMovieHandler = (e) => {
    e.preventDefault();
    dispatch(fetchSearchMovie(query));
    setQuery("");
  };
  useEffect(() => {
    setMovieBg(trending[Math.floor(Math.random() * trending.length)]);
  }, []);
  return (
    <div className="search-wrapper">
      <div className="search-container">
        <h1>
          There are millions of films to explore. Investigate this right now.
        </h1>
        <form>
          <input
            onChange={searchInputHandler}
            type="text"
            placeholder="Search for a film."
            value={query}
          />
          <button onClick={searchMovieHandler}>Search</button>
        </form>
      </div>
      <div className="search-bg-img">
        <img
          src={movieBg ? `${imgPaths.original}${movieBg.backdrop_path}` : ""}
          alt=""
        />
      </div>
    </div>
  );
};

export default Search;
