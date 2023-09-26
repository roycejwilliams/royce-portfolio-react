import React from 'react';
import "../../index.css";
import Dropdown from '../Dropdown';
import Carousel from '../Carousel';
import Sources from '../Sources';



const Portfolio = () => {
  return (
    <div className=' w-screen h-screen flex'>
      <div className='bg-white h-full w-2/4 flex justify-center items-center'>
        <ul className='w-auto h-auto flex items-center'>
          <Dropdown />
        </ul>
       <Sources />
      </div>
      <div className='bg-gradient-to-b from-gray-500 via-gray-200 to-white h-full w-2/4 flex justify-center items-center overflow-hidden'>
          <Carousel />  
      </div>
    </div>
  )
}

export default Portfolio;