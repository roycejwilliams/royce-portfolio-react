import React from 'react'

const Grid = () => {


  const sounds = [
    "https://embed.music.apple.com/us/album/orange-village/1677236538?i=1677236904",
    "https://embed.music.apple.com/us/album/waiting-for-you-feat-naomi-sharon-single/1702395843",

  ];



  return (
    <div className='bg-rosered h-screen w-full flex justify-center items-center'>
        <div className='w-5/6 h-5/6 grid grid-cols-3 gap-x-2 gap-y-3 '>
            <div className='bg-gradient-to-b from-black via-black/70 to-white/20 rounded-lg shadow-xl backdrop-blur row-span-2 flex items-center'>
              <ul className='w-5/6 h-5/6 font-azeret text-white m-4 flex flex-col justify-evenly text-sm uppercase'>
                <h2 className='text-xl font-clash tracking-widest font-bold'>My Skills</h2>
                <li className="flex items-center"><span>UX/UI</span><hr className="flex-grow border-t border-gray-300 ml-2" /></li>
                <li className="flex items-center"><span>Marketing</span><hr className="flex-grow border-t border-gray-300 ml-2" /></li>
                <li className="flex items-center"><span>Product Design</span><hr className="flex-grow border-t border-gray-300 ml-2" /></li>
                <li className="flex items-center"><span>Strategic Design</span><hr className="flex-grow border-t border-gray-300 ml-2" /></li>
                <li className="flex items-center"><span>Consumer Research</span><hr className="flex-grow border-t border-gray-300 ml-2" /></li>
                <li className="flex items-center"><span>Web Development/Design</span><hr className="flex-grow border-t border-gray-300 ml-2" /></li>
              </ul>
            </div>
            <div className='bg-black rounded-lg shadow-xl flex'>
               
            </div>
            <div className='bg-black rounded-lg shadow-xl '></div>
            {/* Apple Music - Rotation */}
            <div className='bg-black rounded-lg shadow-xl col-span-2 flex'>
                <div className='w-2/5 h-full flex justify-center items-center' >
                  <div className='w-5/6 h-5/6 flex justify-center items-center' >
                    <img
                        src="./src/images/Apple_Music.png"
                        className="w-full h-auto" // Apply CSS classes if needed
                      />
                  </div>
                </div>
                  
                <div className='w-3/5 h-full flex flex-col justify-center'>
                  <h3 className='uppercase font-clash mb-4 tracking-widest text-white text-2xl font-bold'>Current Rotation</h3>
                  <iframe
                    allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
                    width="80%"  // Use responsive width
                    height="200"
                    style={{ maxWidth: '500px', maxHeight:'500px', overflow: 'hidden', borderRadius: '10px' }}
                    sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
                    src={}
                    title="Apple Music Embed"
                  ></iframe>
                </div>
            </div>

            <div className='bg-black rounded-lg shadow-xl col-span-3'></div>
        </div>
    </div>
  )
}

export default Grid;

