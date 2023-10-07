import React, { useEffect, useRef } from 'react';


const Autobio = () => {

    const split = useRef(null);

    useEffect(() => {
        function random(min, max) {
            return Math.random() * (max - min) + min;
        }
    }
    
    
    
    
    
    )



  return (
    <div className='bg-rosered h-screen w-full flex justify-center items-center'>
        <div className='w-3/4 h-2/3 text-center flex items-center p-4'>
            <h5 className=' font-clash font-medium tracking-wide text-white uppercase text-3xl '>A Computer Engineer With a designer’s focus, Royce is an aspiring agency owner and developer based in Austin, Tx. Founder of Revital Studios, his work is dedicated to helping businesses grow.</h5>
        </div>
    </div>
  )
}

export default Autobio