import React, { useEffect } from "react";
import {
  API_OPTIONS,
  POPULAR_MOVIES,
  UPCOMING_MOVIES,
} from "../utils/constants";
import { useDispatch } from "react-redux";
import { addPopularMovies, addUpcomingMovies } from "../utils/moviesSlice";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    getPopularMovies();
  }, []);
  const getPopularMovies = async () => {
    const data = await fetch(UPCOMING_MOVIES, API_OPTIONS);
    const json = await data.json();
    dispatch(addUpcomingMovies(json.results));
  };
};

export default useUpcomingMovies;
