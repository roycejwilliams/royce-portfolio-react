import React from 'react'
import Books from './pages/Books'
import Thoughts from './pages/Thoughts'

const Sources = () => {
  return (
    <div className='w-auto h-auto flex justify-center items-center'>
        <Books />
        <Thoughts />
    </div>
  )
}

export default Sources