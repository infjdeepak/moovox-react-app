//redux
import { useSelector } from "react-redux";
//imgUrl
import { imgPaths } from "../api";
//hooks
import { useEffect, useState } from "react";

const SearchMovie = () => {
  //states
  const { trending } = useSelector((state) => state.movies);
  const [movieBg, setMovieBg] = useState(trending[0]);
  //useEffect
  useEffect(() => {
    const interval = setInterval(() => {
      setMovieBg(trending[Math.floor(Math.random() * trending.length)]);
      console.log("This will run every second!");
    }, 10000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="search-wrapper">
      <div className="search-container">
        <h1>
          There are millions of films and television series to explore.
          Investigate this right now.
        </h1>
        <form>
          <input type="text" />
          <button>Search</button>
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

export default SearchMovie;
// const randomBg = () => {
//   return trending[Math.floor(Math.random() * trending.length)];
// };
