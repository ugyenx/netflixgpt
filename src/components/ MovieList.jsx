import React, { useRef } from "react";
import MovieCard from "./MovieCard";
import usePopularMovies from "../hooks/usePopularMovies";

const MovieList = ({ title, movies }) => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;
    // We scroll by 500px, but you can adjust this based on card width
    const scrollAmount = 500;

    if (direction === "left") {
      current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else {
      current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="relative group px-6">
      <h1 className="text-2xl py-4 text-white font-bold">{title}</h1>

      {/* Left Arrow - Visible only on Hover of the container */}
      <button
        onClick={() => scroll("left")}
        className="absolute rounded-md left-0 top-1/2 z-40 h-32 w-12 -translate-y-1/2 bg-black/50 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 hidden md:flex items-center justify-center hover:bg-black/80"
      >
        &#10094;
      </button>

      {/* The Scrollable Container */}
      <div
        ref={scrollRef}
        className="flex overflow-x-scroll no-scrollbar scroll-smooth"
      >
        <div className="flex">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} poster_path={movie.poster_path} />
          ))}
        </div>
      </div>

      {/* Right Arrow - Visible only on Hover */}
      <button
        onClick={() => scroll("right")}
        className="absolute rounded-md right-0 top-1/2 z-40 h-32 w-12 -translate-y-1/2 bg-black/50 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 hidden md:flex items-center justify-center hover:bg-black/80"
      >
        &#10095;
      </button>
    </div>
  );
};

export default MovieList;
