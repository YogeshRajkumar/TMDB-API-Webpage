import MovieLogo from "../MovieLogo.png";

import { Link } from "react-router-dom";

const navbar = () => {
  return (
    <div className="flex border space-x-8 items-center pl-3 py-4 bg-gray-100">
      <img className="w-[50px]" src={MovieLogo} alt="" />
      <Link className="text-blue-500 text-2xl font-bold" to="/">
        Movies
      </Link>
      <Link className="text-blue-500 text-2xl font-bold" to="/watchlist">
        Watchlist
      </Link>
    </div>
  );
};

export default navbar;
