import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <div className='bg-transparent absolute'>
        <Link to="/portfolio">
            <img  className='w-20 h-auto m-4 invert' src='./src/images/royce-logo.png' alt='Image' />
        </Link>
    </div>
  )
}

export default Navbar