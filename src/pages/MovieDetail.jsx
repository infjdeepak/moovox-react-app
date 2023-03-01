import { useSelector } from "react-redux";
import { imgPaths } from "../api/";
const MovieDetail = () => {
  const { movie } = useSelector((state) => state.movieDetail);
  console.log(movie);
  return (
    <div className="movie-detail-wrapper">
      <h1>{movie.title}</h1>
      <p>{movie.overview}</p>
      <div className="bg-img">
        <img src={`${imgPaths.original}${movie.backdrop_path}`} alt="" />
      </div>
    </div>
  );
};

export default MovieDetail;
