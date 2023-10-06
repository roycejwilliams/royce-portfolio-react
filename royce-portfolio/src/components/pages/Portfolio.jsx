import React from 'react';
import "../../index.css";
import Dropdown from '../Dropdown';
import Carousel from '../Carousel';
import Sources from '../Sources';
import Photo from '../Photo';



const Portfolio = () => {
  return (
    <div >


      <div className='flex h-screen w-full bg-gradient-to-r from-rosered via-rosered to-white '> 
        <div className='w-2/4 flex justify-center items-center'>
          <ul className='w-auto h-auto flex items-center'>
            <Dropdown />
          </ul>
            <Sources />
        </div>
        <div className='w-2/4 flex justify-center items-center overflow-hidden h-screen bg-gradient-to-r from-rosered via-rosered to-gray'>
            <Carousel />  
        </div>
      </div>

      <div>
        <Photo />
      </div>

      
    </div>
  )
}

export default Portfolio;