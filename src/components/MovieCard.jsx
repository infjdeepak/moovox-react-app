//redux
import { loadMovieDetail } from "../redux/slice/movieDetailSlice";
//imgUrl
import { useDispatch } from "react-redux";
import { imgPaths } from "../api";
//router
import { Link } from "react-router-dom";
const MovieCard = ({ movie }) => {
  //dispatch
  const dispatch = useDispatch();
  //handler
  const loadDetailHandler = () => {
    dispatch(loadMovieDetail(movie));
  };
  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img src={`${imgPaths.medium}${movie.poster_path}`} alt={movie.title} />
      </div>
      <div className="movie-info">
        <h4>{movie.title}</h4>
        <Link to={`/movie/${movie.id}`} onClick={loadDetailHandler}>
          more details
        </Link>
      </div>
    </div>
  );
};

export default MovieCard;
