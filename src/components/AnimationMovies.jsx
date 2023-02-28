//redux
import { useSelector } from "react-redux";
//react hooks
import { useEffect, useRef, useState } from "react";
//components
import MovieCard from "./MovieCard";
//framer motion
import { motion } from "framer-motion";

const AnimationMovies = () => {
  const carouselRef = useRef();
  //states
  const [width, setWidth] = useState(0);
  const { animation } = useSelector((state) => state.movies);
  //useEffect
  useEffect(() => {
    setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
  }, [width]);

  return (
    <motion.div
      ref={carouselRef}
      className="animation-movies-container carousel"
    >
      <h2>Animation</h2>
      <motion.div
        className="movies inner-carousel"
        drag="x"
        dragConstraints={{ right: 0, left: -width }}
      >
        {animation.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default AnimationMovies;
