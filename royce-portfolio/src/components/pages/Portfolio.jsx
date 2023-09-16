import React from 'react';
import "../../index.css";
import Dropdown from '../Dropdown';


const Portfolio = () => {
  return (
    <div className=' w-screen h-screen flex'>
      <div className='bg-white h-full w-2/4 flex justify-center items-center'>
        <ul className='w-3/4 h-full flex items-center'>
          <Dropdown />
        </ul>
      </div>
      <div className='bg-gradient-to-b from-gray-500 via-gray-200 to-white h-full w-2/4'> </div>
    </div>
  )
}

export default Portfolio;