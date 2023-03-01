//redux
import { useSelector } from "react-redux";
//react hooks
import { useEffect, useRef, useState } from "react";
//components
import MovieCard from "./MovieCard";
//framer motion
import { motion } from "framer-motion";

const SearchedMovies = () => {
  const carouselRef = useRef();
  //states
  const { searched } = useSelector((state) => state.movies);
  const [width, setWidth] = useState(0);
  //useEffect
  useEffect(() => {
    setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
  }, [width, searched]);
  return (
    <>
      <motion.div
        ref={carouselRef}
        className="searched-movies-container carousel"
      >
        <h2>Search Results:</h2>
        <motion.div
          className="movies inner-carousel"
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
        >
          {searched.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </motion.div>
      </motion.div>
    </>
  );
};

export default SearchedMovies;
