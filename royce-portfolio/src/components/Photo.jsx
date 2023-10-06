import React from 'react';
import { motion } from "framer-motion";



const Photo = () => {

  const slides = [
    './src/images/photo(5).JPG',
    './src/images/photo(6).JPG',
     './src/images/photo(4).JPG',
     './src/images/photo(1).JPG',
     './src/images/photo(8).JPG',
     './src/images/photo(10).JPG',
     './src/images/photo(11).JPG',
     './src/images/photo(12).JPG',
     './src/images/photo(14).JPG',
     './src/images/photo(16).JPG',
     './src/images/photo(17).JPG',
     './src/images/photo(18).JPG',
     './src/images/photo(19).JPG',
  ];

  return (
    <div className='bg-rosered h-screen w-full flex overflow-hidden'>
      <div className='w-1/2 h-auto flex flex-col items-center'>
          <div className='w-3/4 h-1/6 pl-6 flex items-center'>
            <h1 className='text-white text-xl tracking-widest font-libre'>THROUGH MY EYES</h1>
          </div>
            <div className='flex justify-center items-center h-full w-3/4'>
              {slides.map((slide, index) => (
                <motion.div
                drag = "x" 
                dragConstraints={{left: 0, right: 700}}
                key={index}
                className="w-2/6 h-5/6 rounded-lg shadow-sm absolute cursor-pointer" // Adjusted height to match width
                style={{
                  backgroundImage: `url('${slide}')`,
                  backgroundSize: 'cover', // Changed to 'cover' for better image fitting
                }}
              >          
                </motion.div>
              ))}
                <h3 className='text-white p-4 font-azeret w-3/4'>In my eyes the world is my reflection and perspective. It's so easy to get caught up in the what's around you, you forget what really matters.. The essence of being and paying attention is a directional signal. A signal that guides us towards a deeper understanding of life and our place in it. These qualities create a compass, helping us navigate through. Whatever it is see it through. </h3>
            </div>
          </div>
        
        <div className='h-auto w-1/2 flex justify-center items-center'> 
              <h3 className='font-libre text-lg text-white text-center tracking-widest w-3/5 uppercase'>Always Thought The way you feel can be explain through photos but thats just art in general.</h3>
        </div>
    </div>
  )
}

export default Photo;