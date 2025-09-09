import React from "react";

import { useState } from "react";

import { ArrowUpIcon } from "@heroicons/react/24/solid";

import { ArrowDownIcon } from "@heroicons/react/24/solid";

import genreids from "../Utility/genre";

import { useEffect } from "react";

function Watchlist({ watchlist, setWatchlist, handleRemoveFromWatchlist }) {
  const [search, setSearch] = useState("");
  const [genresList, setGenresList] = useState(["All Genres"]);
  const [currGenre, setCurrGenre] = useState("All Genres");

  let handleSearch = (e) => {
    setSearch(e.target.value);
  };

  let sortIncreasing = () => {
    let sortedIncreasing = [...watchlist].sort((movieA, movieB) => {
      return movieA.vote_average - movieB.vote_average;
    });
    setWatchlist(sortedIncreasing);
  };

  let sortDecreasing = () => {
    let sortedDecreasing = [...watchlist].sort((movieA, movieB) => {
      return movieB.vote_average - movieA.vote_average;
    });
    setWatchlist(sortedDecreasing);
  };

  useEffect(() => {
    let temp = watchlist.map((movieObj) => {
      return genreids[movieObj.genre_ids[0]];
    });
    temp = new Set(temp);
    setGenresList(["All Genres", ...temp]);
  }, [watchlist]);

  let handleFilter = (genre) => {
    setCurrGenre(genre);
  };

  return (
    <>
      <div className="flex justify-center flex-wrap m-4">
        {genresList.map((genre) => {
          return (
            <div
              key={genre}
              onClick={() => handleFilter(genre)}
              className={
                currGenre == genre
                  ? "flex justify-center items-center h-[3rem] w-[9rem] bg-blue-400 rounded-xl text-white font-bold mx-4 my-4 cursor-pointer"
                  : "flex justify-center items-center h-[3rem] w-[9rem] bg-gray-400 rounded-xl text-white font-bold mx-4 my-4 cursor-pointer"
              }
            >
              {genre}
            </div>
          );
        })}
      </div>

      <div className="flex justify-center my-4">
        <input
          type="text"
          placeholder="Search Movies"
          onChange={handleSearch}
          value={search}
          className="h-[3rem] w-[18rem] bg-gray-200 px-3"
        />
      </div>

      <div className="overflow-hidden rounded-lg border border-gray-200 m-8 bg-gray-950">
        <table className="w-full text-white items-center text-center">
          <thead className="border-b-2 text-blue-400">
            <tr>
              <th>Name</th>
              <th className="flex justify-center">
                <div onClick={sortIncreasing} className="p-2 cursor-pointer">
                  <ArrowDownIcon className="h-5 w-5" />
                </div>
                <div className="p-2">Rating</div>
                <div onClick={sortDecreasing} className="p-2 cursor-pointer">
                  <ArrowUpIcon className="h-5 w-5" />
                </div>
              </th>
              <th>Popularity</th>
              <th>Genre</th>
            </tr>
          </thead>

          <tbody>
            {watchlist

              .filter((movieObj) => {
                if (currGenre == "All Genres") {
                  return true;
                } else {
                  return genreids[movieObj.genre_ids[0]] == currGenre;
                }
              })
              .filter((movieObj) => {
                return movieObj.title
                  .toLowerCase()
                  .includes(search.toLowerCase());
              })
              .map((movieObj) => {
                return (
                  <tr key={movieObj.id} className="border-b-2">
                    <td className="flex items-center px-5 py-4">
                      <img
                        className="h-[13rem] w-[10rem]"
                        src={`https://image.tmdb.org/t/p/original/${movieObj.poster_path}`}
                      />
                      <div className="mx-20">{movieObj.title}</div>
                    </td>

                    <td>{movieObj.vote_average}</td>

                    <td>{movieObj.popularity}</td>

                    <td>
                      {genreids[movieObj.genre_ids[0]]} &{" "}
                      {genreids[movieObj.genre_ids[1]]}
                    </td>

                    <td
                      onClick={() => handleRemoveFromWatchlist(movieObj)}
                      className="text-red-500 text-bold cursor-pointer"
                    >
                      Delete
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Watchlist;
