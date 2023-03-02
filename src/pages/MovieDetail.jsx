import { useSelector } from "react-redux";
import { imgPaths } from "../api/";
const MovieDetail = () => {
  const { movie } = useSelector((state) => state.movieDetail);
  return (
    <div className="movie-detail-wrapper">
      <div className="detail-head">
        <h1>{movie.title}</h1>
        <h5>
          <span>Rating: </span> {movie.vote_average}
        </h5>
        <h5>
          <span>Release date: </span> {movie.release_date}
        </h5>
      </div>
      <div className="detail-text">
        <h3>Overview:</h3>
        <p>{movie.overview}</p>
      </div>
      <div className="bg-img">
        <img src={`${imgPaths.original}${movie.backdrop_path}`} alt="" />
      </div>
    </div>
  );
};

export default MovieDetail;
