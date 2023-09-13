import React from 'react';
import { motion } from 'framer-motion';
import Button from '../Button';
import Links from '../Links';
import "../../index.css"

const Home = () => {
  return (
    <div className='bg-white w-screen h-screen flex flex-col justify-center items-center'>
      <div className='flex flex-col justify-center items-center'>
        <motion.img initial = {{opacity: 0}} animate = {{opacity: 1}} transition={{type: "tween", duration: 1}} className='w-96 h-auto' src='./src/images/image1.png' alt='Image' />
        <Button />
      </div>
      <div className='absolute bottom-0'>
         <Links />
      </div>
    </div>
  );
};

export default Home;