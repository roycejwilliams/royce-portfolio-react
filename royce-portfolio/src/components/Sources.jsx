import React from 'react'

import { Link } from 'react-router-dom'


const Sources = () => {
  return (
    <div className='w-auto h-auto flex justify-center items-center'>
        {/* Biography */}
        <Link to="/bio" className='w-48 h-72 rounded-md m-4 cursor-pointer shadow-lg shadow-gray-500 bg-cover bg-center hover:shadow-lg hover:shadow-white transition ease-in duration-800 '
        style={{ backgroundImage: "url('./src/images/books-portfolio.jpg')" }}
        >
            <h1 className='m-4 text-xl text-black font-clash'>Bio</h1>
        </Link>
        {/* Inspiration */}
        <Link to="/inspo" className='w-48 h-72 rounded-md cursor-pointer shadow-lg shadow-gray-500 hover:shadow-lg hover:shadow-white transition ease-in duration-800 bg-cover' 
          style={{ backgroundImage: "url('./src/images/random-thoughts.jpg')" }}>
            <h1 className='m-4 text-xl font-clash'>Inspiration</h1>
        </Link>
    </div>
  )
}

export default Sources