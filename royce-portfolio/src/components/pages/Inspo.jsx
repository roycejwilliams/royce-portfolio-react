import React from 'react'
import Navbar from '../Navbar';

const inspo = ['',
               '',];

const Inspo = () => {
  return (
    <div className='bg-black w-screen h-screen flex'>
      <Navbar />
      <div className='bg-black w-full h-700 flex flex-col absolute bottom-0 justify-evenly'> 
        <div className='w-auto h-auto inline-block ml-4 text-white'>
          <h1 className='font-clash text-5xl my-4 font-medium'>Inspiration</h1>
          <p className='font-clash font-regular tracking-wider'>Inspirations - that either inspire my work or guide my progress. This is only a small sample I wish i could put the world on here. <br></br><br></br> Books, Youtube, Podcast, Fashion, News, Architecture, Etc... I’m inspired by it all.  </p>
        </div>
        <div className='w-full h-96 border flex justify-center'>
          
        </div>
        <div className='w-auto h-16 text-white flex items-center ml-4'>
          <p className='font-clash tracking-wider'>Knowledge is power,  any suggestion or recommendations feel free to reach out. </p>
        </div>
      </div>
     
    </div>
  )
}

export default Inspo;