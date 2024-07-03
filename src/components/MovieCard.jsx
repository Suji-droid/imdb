import React from "react";

function MovieCard({
  movieObj,
  poster_path,
  name,
  handleAddtoWatchList,
  handleRemovefromWatchList,
  watchlist,
}) {
  function doesContain() {
    for (let i = 0; i < watchlist.length; i++) {
      if (watchlist[i].id == movieObj.id) {
        return true;
      }
    }
    return false;
  }

  return (
    <div
      className="flex flex-col flex-wrap justify-between items-end h-[30vh] w-[20vh] bg-cover bg-center rounded-lg hover:scale-110 duration-300 hover:cursor-pointer"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${poster_path})`,
      }}
    >
      {doesContain(movieObj) ? (
        <div
          onClick={() => {
            handleRemovefromWatchList(movieObj);
          }}
          className="bg-gray-900 text-right rounded-lg m-2"
        >
          &#10060;
        </div>
      ) : (
        <div
          onClick={() => {
            handleAddtoWatchList(movieObj);
          }}
          className="bg-gray-900 text-right rounded-lg m-2"
        >
          &#128525;
        </div>
      )}

      <div className="text-white font-bold p-2 w-full text-center bg-gray-900/60 rounded-b-lg ">
        {name}
      </div>
    </div>
  );
}

export default React.memo(MovieCard);
