import React from 'react'

const Card = ({item}) => {
  return (
    <div className='w-10 md:w-44 lg:w-56  shrink-0 rounded-md mx-auto md:mx-0 cursor-pointer'>
        <img src={item.Poster} alt="movie-card" className='rounded-lg'/>
        <div className=''>
            <h4 className='font-semibold pt-3 pb-1'>{item.Title}</h4>
            <p className='text-gray-600 font-normal'>{item.Type.charAt(0).toUpperCase() + item.Type.slice(1)}</p>
        </div>
    </div>
  )
}

export default Card

