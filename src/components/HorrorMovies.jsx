//redux
import { useSelector } from "react-redux";
//react hooks
import { useEffect, useRef, useState } from "react";
//components
import MovieCard from "./MovieCard";
//framer motion
import { motion } from "framer-motion";

const HorrorMovies = () => {
  const carouselRef = useRef();
  //states
  const [width, setWidth] = useState(0);
  const { horror } = useSelector((state) => state.movies);
  //useEffect
  useEffect(() => {
    setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
  }, [width]);

  return (
    <motion.div ref={carouselRef} className="horror-movies-container carousel">
      <h2>Horror</h2>
      <motion.div
        className="movies inner-carousel"
        drag="x"
        dragConstraints={{ right: 0, left: -width }}
      >
        {horror.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default HorrorMovies;
