import { motion } from "framer-motion";
//redux
//imgUrl
import { imgPaths } from "../api";
const MovieCard = ({ movie }) => {
  //dispatch

  //states
  return (
    <motion.div className="movie-card">
      <motion.div className="movie-poster">
        <img src={`${imgPaths.medium}${movie.poster_path}`} alt={movie.title} />
      </motion.div>
      <div className="movie-info">
        <h4>{movie.title}</h4>
        <h5>{movie.release_date}</h5>
      </div>
      <div className="rating">
        <p>{movie.vote_average}</p>
      </div>
    </motion.div>
  );
};

export default MovieCard;
