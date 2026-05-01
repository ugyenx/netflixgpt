import React from "react";
import { POSTER_URL } from "../utils/constants";

const MovieCard = ({ poster_path }) => {
  if (!poster_path) return null;

  return (
    /* 
       1. w-48 (12rem) is roughly 192px. Use w-[200px] if you want exactly 200px.
       2. flex-shrink-0 prevents the "squishing" effect. 
    */
    <div className="w-48 pr-4 flex-shrink-0">
      <img
        className="rounded-lg hover:scale-110 transition-transform duration-300"
        src={POSTER_URL + poster_path}
        alt="Movie Poster"
      />
    </div>
  );
};

export default MovieCard;
