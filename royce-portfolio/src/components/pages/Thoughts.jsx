import React from 'react'

const Thoughts = () => {
  return (
    <div className='w-48 h-72 rounded-md cursor-pointer shadow-lg shadow-gray-500 hover:shadow-md hover:shadow-white transition ease-in duration-800 bg-cover' 
    style={{ backgroundImage: "url('./src/images/random-thoughts.jpg')" }}>
      <h1 className='m-4 text-xl font-clash'>Thoughts</h1>
    </div>
  )
}

export default Thoughts;