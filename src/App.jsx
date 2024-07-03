import { useEffect, useState } from "react";
import "./App.css";
import Banner from "./components/Banner";
import Movies from "./components/Movies";
import { Navigationbar } from "./components/Navigationbar";
import Watchlist from "./components/Watchlist";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {

    let [watchlist, setWatchlist] = useState([])
  
    let handleAddtoWatchList = (movieObj)=>{
      let newWatchlist = [...watchlist,movieObj]
      localStorage.setItem('moviesApp',JSON.stringify(newWatchlist))
      setWatchlist(newWatchlist)
      console.log(newWatchlist)
    }

    let handleRemovefromWatchList = (movieObj) =>{
      let filteredWatchList = watchlist.filter((movie)=>{
        return movie.id != movieObj.id
      })
      localStorage.setItem('moviesApp',JSON.stringify(filteredWatchList))
    setWatchlist(filteredWatchList)
  }

  useEffect(()=>{
    let moviesFromLocalStorage = localStorage.getItem('moviesApp')
    if(!moviesFromLocalStorage){
      return
    }
    setWatchlist(JSON.parse(moviesFromLocalStorage))
  },[])

  return (
    <>
      <BrowserRouter>
        <Navigationbar />

        <Routes>
          <Route path="/watchlist" element={<Watchlist watchlist={watchlist} setWatchlist={setWatchlist} handleRemovefromWatchList={handleRemovefromWatchList}/>} />
          <Route path="/" element={<><Banner/><Movies watchlist={watchlist} handleRemovefromWatchList={handleRemovefromWatchList} handleAddtoWatchList={handleAddtoWatchList}/></>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

//https://api.themoviedb.org/3/movie/popular?api_key=8a87cec99a2f581b8666477c0c1cc05a&language=en-US&page=1
