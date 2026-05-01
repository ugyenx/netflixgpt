import { useDispatch } from "react-redux";
import { addTopratedMovies } from "../utils/moviesSlice";
import { API_OPTIONS, TOP_RATED_MOVIES } from "../utils/constants";
import { useEffect } from "react";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    getNowPlayingMovies();
  }, []);
  const getNowPlayingMovies = async () => {
    const data = await fetch(TOP_RATED_MOVIES, API_OPTIONS);
    const json = await data.json();
    dispatch(addTopratedMovies(json.results));
  };
};

export default useTopRatedMovies;
