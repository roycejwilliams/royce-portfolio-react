import React from 'react'


const Carousel = () => {
  return (
    <>
  <div className='grid grid-cols-2 gap-12 justify-center'>
    <div className='flex flex-col justify-center items-center h-full gap-12'>
        <div className='w-72 h-48 bg-white rounded-xl shadow-xl'></div>
        <div className='w-72 h-48 bg-white rounded-xl shadow-xl'></div>
        <div className='w-72 h-48 bg-white rounded-xl shadow-xl'></div>
        <div className='w-72 h-48 bg-white rounded-xl shadow-xl'></div>
    </div>
    <div className='flex flex-col justify-center items-center h-full gap-12'>
        <div className='w-72 h-48 bg-white rounded-xl shadow-xl'></div>
        <div className='w-72 h-48 bg-white rounded-xl shadow-xl'></div>
        <div className='w-72 h-48 bg-white rounded-xl shadow-xl'></div>
    </div>
  </div>
  </>
  )
}

export default Carousel;