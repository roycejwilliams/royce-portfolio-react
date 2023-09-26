import React, { useState, useEffect } from 'react';



const Carousel = () => {
    const [activeSlide, setActiveSlide] = useState(0); // State for Carousel 


    useEffect(() => {
      const interval = setInterval(() => {
        setActiveSlide((prevSlide) => (prevSlide + 1) % slides.length);
      }, 3000);

      return () => {
        clearInterval(interval);
      };
    }, [])

  return (
    <>
  <div className='grid grid-cols gap-12 justify-center items-center'>
    <div className='flex flex-col justify-center items-center h-full gap-12' >
        <div className='w-96 h-64  rounded-xl shadow-xl' style={{ backgroundImage: "url('./src/images/LEMA-website-portfolio.jpg')",
        backgroundSize: '100% 100%'  }}></div>  
        <div className='w-96 h-64  rounded-xl shadow-xl' style={{ backgroundImage: "url('./src/images/wigroup-portfolio.jpg')",
        backgroundSize: '100% 100%'  }}></div>
        <div className='w-96 h-64  rounded-xl shadow-xl' style={{ backgroundImage: "url('./src/images/revital-reflections.png')",
        backgroundSize: '100% 100%'  }}></div>  
        <div className='w-96 h-64  rounded-xl shadow-xl' style={{ backgroundImage: "url('./src/images/TXEA-Seal.jpg')",
        backgroundSize: '100% 100%', backgroundRepeat: "no-repeat"  }}></div> 
         <video className='w-96 h-64 rounded-xl shadow-xl object-cover' autoPlay loop muted>
           <source src='./src/videos/revital-preview.mp4' type='video/mp4' />
            Your browser does not support the video tag.
        </video>
      <div className='w-96 h-64  rounded-xl shadow-xl' style={{ backgroundImage: "url('./src/images/Oni-Real-Estate.png')",
        backgroundSize: '100% 100%'  }}></div> 
        <div className='w-96 h-64  rounded-xl shadow-xl' style={{ backgroundImage: "url('./src/images/a2d.jpg')",
        backgroundSize: '100% 100%', backgroundRepeat: "no-repeat"  }}></div>
    </div>
  </div>
  </>
  )
}

export default Carousel;