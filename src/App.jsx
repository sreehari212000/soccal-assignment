import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Categorybar from './components/Categorybar'
import MediaShowcase from './components/MediaShowcase'
import Carousel from './components/Carousel'




function App() {
    const [searchterm, setSearchterm] = useState("saw")
    const [category, setCategory] = useState("")
    const [data, setData] = useState({})
    const [loading, setLoading] = useState(true)    
      
    const fetchFromAPI = async ()=>{
        const URL = `https://www.omdbapi.com/?i=tt3896198&apikey=b2171778&type=${category}&s=${searchterm}`
        const response = await fetch(URL)
        const result = await response.json()
        setLoading(false)      
        setData(result);           
    }
    useEffect(()=>{
        fetchFromAPI()
    }, [searchterm, category])
    
  return (
    <div className='min-w-[350px] max-w-[1870px] mx-auto'>
        <Navbar setSearchterm={setSearchterm} fetchFromAPI={fetchFromAPI}/>
        <Categorybar setCategory={setCategory} category={category}/>
        <Carousel />
        <MediaShowcase loading={loading} data={data}/>
    </div>
  )
}

export default App
