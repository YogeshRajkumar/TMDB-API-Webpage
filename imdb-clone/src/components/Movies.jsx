import { useEffect } from "react";
import { useState } from "react";
import MovieCard from "./MovieCard";
import axios from "axios";
import PageChange from "./PageChange";

function Movies({
  handleAddToWatchlist,
  handleRemoveFromWatchlist,
  watchlist,
}) {
  const [movies, setMovies] = useState([]);
  const [pageNo, setPageNo] = useState(1);

  const handlePrevious = () => {
    if (pageNo > 1) {
      setPageNo(pageNo - 1);
    }
  };

  const handleNext = () => {
    setPageNo(pageNo + 1);
  };

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=bbb467fe33b35ee6758d334bcef6bf30&language=en-US&page=${pageNo}`
      )
      .then(function (res) {
        setMovies(res.data.results);
      });
  }, [pageNo]);
  return (
    <div className="p-5 bg-gray-900">
      <div className="text-2xl m-4 font-bold text-center text-blue-400">Trending Movies</div>

      <div className="flex flex-wrap justify-around gap-10">
        {movies.map((movieObj) => {
          return (
            <MovieCard 
              key={movieObj.id}
              poster_path={movieObj.poster_path}
              name={movieObj.original_title}
              handleAddToWatchlist={handleAddToWatchlist}
              movieObj={movieObj}
              handleRemoveFromWatchlist={handleRemoveFromWatchlist}
              watchlist={watchlist}
            />
          );
        })}
      </div>
      <PageChange
        pageNo={pageNo}
        handlePrevious={handlePrevious}
        handleNext={handleNext}
      />
    </div>
  );
}

export default Movies;
