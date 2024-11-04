import React from 'react'

const Categorybar = ({setCategory, category}) => {
  return (
    <div className='bg-gray-100 px-16 md:px-5 xl:px-64 hidden md:flex justify-between py-2 text-sm'>
        <div className='flex gap-5'>
            <p onClick={() => setCategory("movie")} className={`cursor-pointer ${category === "movie" && 'font-medium'}`}>Movies</p>
            <p onClick={() => setCategory("series")} className={`cursor-pointer ${category === "series" && 'font-medium'}`}>Stream</p>
            <p onClick={() => setCategory("episode")} className={`cursor-pointer ${category === "episode" && 'font-medium'}`}>Events</p>
            <p>Plays</p>
            <p>Sports</p>
            <p>Activities</p>
        </div>

        <div className='flex gap-5'>
            <p>ListYourShow</p>
            <p>Corporates</p>
            <p>Offers</p>
            <p className=''>Gift Cards</p>
        </div>
    </div>
  )
}

export default Categorybar