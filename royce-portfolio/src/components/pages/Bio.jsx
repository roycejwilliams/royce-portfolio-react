import React from 'react';
import Navbar from '../Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faArrowRight } from '@fortawesome/free-solid-svg-icons'


const emailAddress = "roycewilliamsj@gmail.com";

    const handleEmailClick = () => {
      window.location.href = `mailto:${emailAddress}`;
    };


const Bio = () => {
  return (
   
    


    <div className='bg-rosered w-screen h-screen'>
      <Navbar />
        <div className=' w-auto h-full flex'>
          <div className='w-1/2 flex justify-center items-center'>
            <div className='w-5/6'>
              <h1 className='text-white text-xl font-clash ml-4 tracking-wider font-medium'>Hey, I'm Royce Williams. <br></br><br></br> I'm a Computer Engineer and Multi-Disciplinary Designer building brands and digital experiences.</h1>
            </div>
          </div>

          <div className='w-1/2 flex justify-center items-center'>
            <div className='w-3/4 h-3/4  flex flex-col gap-y-8'>
              <p className='text-white font-azeret font-light text-md'>My journey began as a Biology major when I first entered college, but over the years, I shifted my focus towards technology. Design has always been a significant part of my upbringing. Growing up in New Orleans and later moving to Houston in my early years exposed me to diverse cultures and art, which greatly influenced my eclectic taste. These formative experiences led me to merge art and design, prompting me to change my major during my junior year (quite the pivot, I know).
              <br></br><br></br>
              The knowledge and skills I acquired through both technology and art disciplines inspired me to seize the opportunity to help develop brands and foster a thriving community of sustainable businesses.  
              <br></br><br></br>
              I believe that my wealth of experiences and keen attention to detail would be a valuable asset to any company seeking an experienced, self-taught designer and coder. I am actively seeking a full-time position as a new graduate in roles such as Front-End Developer, Product Designer, or Project Manager.</p>
              {/* Contact Button */}
              <button onClick={handleEmailClick} className="font-clash flex justify-start items-center w-2/3 text-gray-200 text-2xl font-medium hover:text-white cursor-pointer tracking-wide group">
                <span >Feel Free to Reach Out.</span>
                <span className="relative left-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-0 group-hover:translate-x-2/3 opacity-0 group-hover:opacity-100 ease">
                  <FontAwesomeIcon icon={faArrowRight} />
                </span>
                
              </button>

            </div>
            
          </div>
       </div>
    </div>
    
    
  );
}

export default Bio;