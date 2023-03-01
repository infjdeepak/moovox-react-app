//redux
//imgUrl
import { imgPaths } from "../api";
const MovieCard = ({ movie }) => {
  //dispatch

  //states
  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img src={`${imgPaths.medium}${movie.poster_path}`} alt={movie.title} />
      </div>
      <div className="movie-info">
        <h4>{movie.title}</h4>
        {/* <h5>{movie.release_date}</h5> */}
      </div>
    </div>
  );
};

export default MovieCard;
