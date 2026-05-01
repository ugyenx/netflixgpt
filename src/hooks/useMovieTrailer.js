import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  const url = `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`;
  const getMovieVideos = async () => {
    const data = await fetch(url, API_OPTIONS);

    const json = await data.json();
    const filteredTrailer = json.results.filter(
      (video) => video?.type === "Trailer",
    );
    const trailer = filteredTrailer.length
      ? filteredTrailer[0]
      : json.results[0];
    dispatch(addTrailerVideo(trailer));
  };
  useEffect(() => {
    getMovieVideos();
  }, []);
};
export default useMovieTrailer;
