//redux
import { useSelector } from "react-redux";
//react hooks
import { useEffect, useRef, useState } from "react";
//components
import MovieCard from "./MovieCard";
//framer motion
import { motion } from "framer-motion";

const MysteryMovies = () => {
  const carouselRef = useRef();
  //states
  const [width, setWidth] = useState(0);
  const { mystery } = useSelector((state) => state.movies);
  //useEffect
  useEffect(() => {
    setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
  }, [width]);

  return (
    <motion.div ref={carouselRef} className="mystery-movies-container carousel">
      <h2>Mystery</h2>
      <motion.div
        className="movies inner-carousel"
        drag="x"
        dragConstraints={{ right: 0, left: -width }}
      >
        {mystery.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default MysteryMovies;
