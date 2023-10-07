import React from 'react'

const Grid = () => {
  return (
    <div className='bg-rosered h-screen w-full flex justify-center items-center'>
        <div className='w-5/6 h-5/6 grid grid-cols-3 gap-x-2 gap-y-3 '>
            <div className='bg-black rounded-lg shadow-xl row-span-2'></div>
            <div className='bg-black rounded-lg shadow-xl '></div>
            <div className='bg-black rounded-lg shadow-xl '></div>
            <div className='bg-black rounded-lg shadow-xl col-span-2'></div>
            <div className='bg-black rounded-lg shadow-xl col-span-3'></div>
        </div>
    </div>
  )
}

export default Grid