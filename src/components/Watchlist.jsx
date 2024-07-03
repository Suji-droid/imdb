import React, { useState, useEffect } from "react";
import genreids from "../utility/genre";

function Watchlist({ watchlist, setWatchlist, handleRemovefromWatchList }) {
  const [search, setSearch] = useState("");
  const [genreList, SetGenreList] = useState(["All Genres"]);
  const [currGenre, setCurrGenre] = useState("All Genres");

  let handleFilter = (genre) => {
    setCurrGenre(genre);
  };

  function handleSearch(e) {
    setSearch(e.target.value);
  }

  let sortIncreasing = () => {
    let sortedIncreasing = watchlist.sort((movieA, movieB) => {
      return movieA.vote_average - movieB.vote_average;
    });
    setWatchlist([...sortedIncreasing]);
  };

  let sortDecreasing = () => {
    let sortedDecreasing = watchlist.sort((movieA, movieB) => {
      return movieB.vote_average - movieA.vote_average;
    });
    setWatchlist([...sortedDecreasing]);
  };

  useEffect(() => {
    let temp = watchlist.map((movieObj) => {
      return genreids[movieObj.genre_ids[0]];
    });
    temp = new Set(temp);
    SetGenreList(["All Genres", ...temp]);
    console.log(temp);
  }, [watchlist]);

  return (
    <>
      <div className="flex justify-center flex-wrap m-3">
        {genreList.map((genre) => {
          return (
            <div
              key={genre}
              onClick={() => handleFilter(genre)}
              className={
                currGenre == genre
                  ? "flex flex-wrap justify-center items-center gap-1 font-bold text-white h-[2.5rem] w-[9rem] m-2 bg-blue-400 hover:bg-blue-500 hover:cursor-pointer rounded-lg"
                  : "flex flex-wrap justify-center items-center gap-1 font-thin md:font-bold text-white text-sm md:text-lg lg:h-[2.5rem] lg:w-[9rem] md:h-[2.5rem] md:w-[9rem] h-[1.5rem] w-[5rem] m-2 bg-gray-400/60 hover:bg-gray-500/60 hover:cursor-pointer rounded-lg"
              }
            >
              {genre}
            </div>
          );
        })}
      </div>

      <div className="flex justify-center my-5">
        <input
          onChange={handleSearch}
          value={search}
          className="h-[2.5rem] w-[18rem] px-4 bg-gray-200 outline-none"
          type="text"
          placeholder="Search for Movies"
        />
      </div>

      <div className="overflow-none rounded-t-lg text-center border border-gray-300 m-2 md:m-8">
        <table className="w-full text-gray-500">
          <thead className="border-b-2">
            <tr>
              <th>Name</th>

              <th className="hidden sm:table-cell">
                <div className="flex items-center justify-center gap-2">
                  <div
                    onClick={sortIncreasing}
                    className="hover:cursor-pointer"
                  >
                    <i className="fa-solid fa-arrow-up"></i>
                  </div>
                  <div>Ratings</div>
                  <div
                    onClick={sortDecreasing}
                    className="hover:cursor-pointer"
                  >
                    <i className="fa-solid fa-arrow-down"></i>
                  </div>
                </div>
              </th>

              <th className="hidden sm:table-cell">
                <div className="flex items-center justify-center gap-2">
                  <div
                    onClick={sortIncreasing}
                    className="hover:cursor-pointer"
                  >
                    <i className="fa-solid fa-arrow-up"></i>
                  </div>
                  Popularity
                  <div
                    onClick={sortDecreasing}
                    className="hover:cursor-pointer"
                  >
                    <i className="fa-solid fa-arrow-down"></i>
                  </div>
                </div>
              </th>

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
                  .includes(search.toLocaleLowerCase());
              })
              .map((movieObj) => {
                return (
                  <tr key={movieObj.id} className="border-b-2">
                    <td className="flex items-center flex-wrap px-5 py-3">
                      <img
                        className="h-[4rem] w-[8rem]"
                        src={`https://image.tmdb.org/t/p/original/${movieObj.backdrop_path}`}
                        alt="Movie Poster"
                      />
                      <div className="p-2">{movieObj.title}</div>
                    </td>

                    <td className="hidden sm:table-cell">
                      {movieObj.vote_average}
                    </td>
                    <td className="hidden sm:table-cell">
                      {movieObj.popularity}
                    </td>
                    <td>{genreids[movieObj.genre_ids[0]]}</td>
                    <td
                      onClick={() => {
                        handleRemovefromWatchList(movieObj);
                      }}
                      className="text-red-700 hover:cursor-pointer hover:text-red-400"
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

export default React.memo(Watchlist);
