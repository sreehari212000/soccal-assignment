import React from 'react'
import Card from './Card'

const defaultClasses  = "mx-16 lg:mx-64 flex justify-center items-center h-1/2 mt-44 text-2xl"



const MediaShowcase = ({loading, data}) => {

    if(loading){
        return <h1 className={`${defaultClasses}`}>Loading...</h1>
    }
    else if(data.Response === 'False'){
        return <h5 className={`${defaultClasses}`}>{data.Error}</h5>
    }else if(data.Plot){
        return <div className='mx-16 lg:mx-64'>
            <Card item={data}/>
        </div>
    }
  return (
    <div className='mx-16 md:mx-5 xl:mx-64 flex gap-7 overflow-x-scroll custom-scrollbar rounded-md'>
        {
            data.Search.map((item)=> <Card key={item.imdbID} item={item}/> )
        }
    </div>
  )
}

export default MediaShowcase