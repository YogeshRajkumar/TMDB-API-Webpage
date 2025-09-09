import React from "react";

function MovieCard({
  poster_path,
  name,
  handleAddToWatchlist,
  movieObj,
  handleRemoveFromWatchlist,
  watchlist,
}) {
  function doesContain(movieObj) {
    for (let i = 0; i < watchlist.length; i++) {
      if (watchlist[i].id === movieObj.id) {
        return true;
      }
    }
    return false;
  }
  return (
    <div
      className="h-[50vh] w-[200px] bg-center bg-cover rounded-xl hover:scale-110 duration-300 flex flex-col justify-between cursor-pointer"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${poster_path})`,
      }}
    >
      {doesContain(movieObj) ? (
        <div
          onClick={() => handleRemoveFromWatchlist(movieObj)}
          className="m-4 flex justify-center h-8 w-8 items-center rounded-lg flex-col bg-gray-900/60 text-white font-bold text-xl pb-1"
        >
          &#128525;
        </div>
      ) : (
        <div
          onClick={() => handleAddToWatchlist(movieObj)}
          className="m-4 flex justify-center h-8 w-8 items-center rounded-lg flex-col bg-gray-900/60 text-white font-bold text-xl pb-1"
        >
          +
        </div>
      )}
      <div className="text-white text-xl w-full text-center rounded-xl bg-gray-900/60 p-1">
        {name}
      </div>
    </div>
  );
}

export default MovieCard;
