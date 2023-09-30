import React, { useState, useEffect, useRef } from 'react';
import { motion } from "framer-motion";



const Carousel = () => {
    const app = useRef(); // "Carousel" named it "app" 

    const slides = [
      './src/images/LEMA-website-portfolio.jpg',
      './src/images/wigroup-portfolio.jpg',
      './src/images/revital-reflections.png',
      './src/images/TXEA-Seal.jpg',
      './src/videos/revital-preview.mp4',
      './src/images/Oni-Real-Estate.png',
      './src/images/a2d.jpg',
    ];

    

    return (
      <motion.div ref={app} className='grid grid-cols gap-12 justify-center items-center'>
        <motion.div animate={{ y: [0, 1000] }} transition={{ repeat: Infinity, duration: 10 }} className='flex flex-col justify-center items-center h-full gap-12 cursor-grab'>
          {slides.map((slide, index) => (
            <motion.div
              key={index}
              className={`w-96 h-64 rounded-xl shadow-xl`}
              style={{
                backgroundImage: `url('${slide}')`,
                backgroundSize: '100% 100%',
              }}
            >
              {index === 4 && (
                <video
                  className='w-96 h-64 rounded-xl shadow-xl object-cover'
                  autoPlay
                  loop
                  muted
                >
                  <source src={slide} type='video/mp4' />
                  Your browser does not support the video tag.
                </video>
              )}
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    );
  };
  
  export default Carousel;
  
  
  
  
  
  