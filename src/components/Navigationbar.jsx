import React from "react";
import Logo from "../movie-icon-1.png";
import { Link } from "react-router-dom";

export const Navigationbar = () => {
  return (
    <div className="flex border space-x-6 items-center py-1 w-full bg-white">
      <img className="w-[40px] md:w-[60px]" src={Logo} alt="Movies Logo" />
      <Link className="text-black-400 font-bold text-xl md:text-2xl hover:text-gray-500" to="/">Movies</Link>
      <Link className="text-black-400 font-bold text-xl md:text-2xl hover:text-gray-500" to="/watchlist">Watchlist</Link>
    </div>
  );
};
