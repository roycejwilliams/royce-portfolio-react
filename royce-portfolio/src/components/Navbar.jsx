import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <div className='bg-transparent absolute top-0 '>
        <Link to="/portfolio" className='cursor-pointer'>
            <img  className='w-16 h-auto m-4 invert' src='./src/images/royce-logo.png' alt='Image' />
        </Link>
    </div>
  )
}

export default Navbar