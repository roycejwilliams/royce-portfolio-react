import React from 'react'
import { motion } from 'framer-motion'

const Links = () => {
  return (
    <>
    <div className='w-screen h-32 flex justify-center items-center'>
        <motion.ul animate= {{opacity: 1}} transition={{type: "tween", duration: 1, delay: 1.5 }} initial={{opacity:0}} className='w-3/4 h-auto flex justify-between font-libre'>
            <li className='text-sm tracking-widest text-gray-500'>
              <a href='mailto: roycewilliamsj@gmail.com'>Get in Touch.</a>
            </li>
            <li className='text-sm tracking-widest text-gray-500'>
              <a href='https://www.rvtl.studio' target='blank'>REVITAL</a>
            </li>
        </motion.ul>
    </div>
    </>
  )
}

export default Links;