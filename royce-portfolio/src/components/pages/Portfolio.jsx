import React from 'react';
import "../../index.css";
import Dropdown from '../Dropdown';
import Carousel from '../Carousel';
import Sources from '../Sources';
import Photo from '../Photo';
import Autobio from '../Autobio';



const Portfolio = () => {
  return (
    <div >


      <div className='flex h-screen w-full bg-gradient-to-r from-rosered via-rosered to-white '> 
        <div className='w-2/4 flex justify-center items-center'>
          <ul className='w-auto h-auto flex items-center justify-center m-4'>
            <Dropdown />
          </ul>
            <Sources />
        </div>
        <div className='w-2/4 flex justify-center items-center overflow-hidden h-screen bg-gradient-to-t from-rosered to-gray'>
            <Carousel />  
        </div>
      </div>

      <div>
        <Photo />
      </div>

      <Autobio />
      
    </div>
  )
}

export default Portfolio;