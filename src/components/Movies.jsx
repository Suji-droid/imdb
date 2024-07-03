import React from 'react'
import MovieCard from './MovieCard'
import { useState,useEffect } from 'react'
import axios from 'axios'
import Pagination from './Pagination'

export default function Movies({handleAddtoWatchList, handleRemovefromWatchList, watchlist}) {

  const[movies,setMovies] = useState([])
  const[pageNo,setPageno] = useState(1)

  const handlePrev = ()=>{
    if(pageNo==1){
      setPageno(pageNo)
    }
    else
    setPageno(pageNo-1)
  }

  const handleNext = ()=>{
    setPageno(pageNo+1)
  }

  useEffect(()=>{
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=8a87cec99a2f581b8666477c0c1cc05a&language=en-US&page=${pageNo}`).then(function(res){
      setMovies(res.data.results)
      console.log(res.data.results)
    })
  },[pageNo])
  return (
    <div>
        <div className='text-black-400 font-bold text-2xl text-center my-3'>
          Trending Movies
        </div>

        <div className='flex flex-row justify-around flex-wrap m-4 items-center basis-auto gap-5'>
        {movies.map((movieObj)=>{
          return <MovieCard key={movieObj.id} movieObj={movieObj} poster_path={movieObj.poster_path} name={movieObj.title} handleAddtoWatchList={handleAddtoWatchList} handleRemovefromWatchList={handleRemovefromWatchList} watchlist={watchlist}/>
        })}
        </div>
        <Pagination pageNo={pageNo} handlePrev={handlePrev} handleNext={handleNext}/>
    </div>
  )
}
