import React from 'react'

function Pagination({handlePrev, handleNext, pageNo}) {
  return (
    <div className='bg-gray-400 mt-5 p-3 flex justify-center'>
        <div onClick={handlePrev} className='px-4 '><i className="fa-solid fa-arrow-left"></i></div>
        <div className='font-bold'>{pageNo}</div>
        <div onClick={handleNext} className='px-4'><i className="fa-solid fa-arrow-right"></i></div>
    </div>
  )
}

export default Pagination