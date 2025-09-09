import "./app.css";

import Navbar from "./components/navbar";

import Movies from "./components/Movies";

import Watchlist from "./components/Watchlist";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Banner from "./components/Banner";

import { useEffect, useState } from "react";
import { stringify } from "postcss";

function App() {
  let [watchlist, setWatchlist] = useState([]);

  let handleAddToWatchlist = (movieObj) => {
    let newWatchlist = [...watchlist, movieObj];
    localStorage.setItem("movieApp", JSON.stringify(newWatchlist));
    setWatchlist(newWatchlist);
    console.log(newWatchlist);
  };

  let handleRemoveFromWatchlist = (movieObj) => {
    let filteredWatchlist = watchlist.filter((movie) => {
      return movie.id !== movieObj.id;
    });
    setWatchlist(filteredWatchlist);
    localStorage.setItem("movieApp", JSON.stringify(filteredWatchlist || []));
  };

  useEffect(() => {
    let moviesFromLocalStorage = localStorage.getItem("movieApp");
    if (moviesFromLocalStorage && moviesFromLocalStorage !== "undefined") {
      setWatchlist(JSON.parse(moviesFromLocalStorage));
    }
  }, []);

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Banner />
                <Movies
                  handleAddToWatchlist={handleAddToWatchlist}
                  handleRemoveFromWatchlist={handleRemoveFromWatchlist}
                  watchlist={watchlist}
                />
              </>
            }
          />
          <Route
            path="/watchlist"
            element={
              <Watchlist
                watchlist={watchlist}
                setWatchlist={setWatchlist}
                handleRemoveFromWatchlist={handleRemoveFromWatchlist}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
