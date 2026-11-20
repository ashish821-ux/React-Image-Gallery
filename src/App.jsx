import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import axios from 'axios';
import { useState , useEffect } from "react"
import React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';

const App = () => {

  const [userData, setUserData] = useState([]);
  const [page, setPage] = useState(1)

  useEffect(()=>{
    getData();
  },[page])

    const handleChange = (event, value) => {
    setPage(value);
    setUserData([]);
  };

  const getData = async ()=>{
   const response = await axios.get(`https://picsum.photos/v2/list?page=${page}&limit=12`) 
    setUserData(response.data);
  }

  let printUserData = <Stack className='absolute left-1/2 top-1/2' sx={{ color: 'grey.500' }} spacing={2} direction="row">
      <CircularProgress color="secondary" aria-label="Loading…" />
    </Stack>

  if(userData.length>0){
    printUserData = userData.map((item,idx)=>{
      return  <div className=' key={item.id} h-42 rounded-2xl'>
          <img src={item.download_url} alt={item.url} className='h-full rounded-2xl w-full' />
        </div>
    })
  }
  

  return (
    <div className='flex flex-col bg-zinc-900 text-white w-full min-h-screen'>
      <Navbar />
      <HeroSection />

      <div className='px-4  grid sm:grid-cols-2 grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 mx-auto w-full min-h-[60vh] items-center justify-center bg-zinc-900'>
        {printUserData}
      </div>

      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 min-h-14 px-4 flex items-center justify-center bg-white rounded-2xl">
  <Pagination count={10} variant="outlined" page={page} color="primary" onChange={handleChange} />
</div>
    </div>
  )
}

export default App