import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronRight } from '@fortawesome/free-solid-svg-icons'


const Dropdown = () => {
  const [isOpen1, setIsOpen1] = useState(false); // State for the first section
  const [isOpen2, setIsOpen2] = useState(false); // State for the second section
  const [isOpen3, setIsOpen3] = useState(false); // State for the third section
 

  const toggleDown1 = () => {
    setIsOpen1(!isOpen1);
  };

  const toggleDown2 = () => {
    setIsOpen2(!isOpen2);
  };

  const toggleDown3 = () => {
    setIsOpen3(!isOpen3);
  };

  return (
    <div className="relative inline-block text-left">
      <span className="text-m tracking-widest text-black">Who Am I ?</span>
      <button onClick={toggleDown1} className="ml-2 p-2">
        {isOpen1 ? (
        <FontAwesomeIcon icon={faChevronDown} /> ) : (<FontAwesomeIcon icon={faChevronRight} />)}     </button>
      <div
        className={`overflow-hidden transition-max-h ${
          isOpen1 ? 'max-h-48' : 'max-h-0'
        } transition-all duration-300 ease-in-out`}
      >
        <ul className="py-1">
        <li className="px-4 py-2 text-xs text-black tracking-widest">
              Multi-disciplinary Designer
          </li>
          <li className="px-4 py-2 text-xs text-black tracking-widest">
              Computer Engineer
          </li>
          <li className="px-4 py-2 text-xs text-black tracking-widest">
            Food Enthuiast
          </li>
          <li className="px-4 py-2 text-xs text-black tracking-widest">
            Developer
          </li>
          <li className="px-4 py-2 text-xs text-black font-bold tracking-widest">
            Founder of REVITAL
          </li>
        </ul>
      </div>
      {/* Second Section */}
      <span className="text-m tracking-widest text-black">Based ? </span>
      <button onClick={toggleDown2} className="ml-2 p-2">
        {isOpen2 ? (
        <FontAwesomeIcon icon={faChevronDown} /> ) : (
          <FontAwesomeIcon icon={faChevronRight} /> )  }
      </button>
      <div
        className={`overflow-hidden transition-max-h ${
          isOpen2 ? 'max-h-72' : 'max-h-0'
        } transition-all duration-300 ease-in-out`}
      >
        <ul className="py-1">
        <li className="px-4 py-2 text-xs text-black tracking-widest">
            Austin
          </li>
          <li className="px-4 py-2 text-xs text-black tracking-widest">
            Houston
          </li>
          <li className="px-4 py-2 text-xs text-black tracking-widest">
            Seattle
          </li>
          <li className="px-4 py-2 text-xs text-black tracking-widest">
            Chicago
          </li>
          <li className="px-4 py-2 text-xs text-black tracking-widest">
            Washington D.C.
          </li>
          <li className="px-4 py-2 text-xs text-black tracking-widest">
            New Orleans
          </li>
          <li className="px-4 py-2 text-sm text-black tracking-widest font-bold">
            ANYWHERE, EVERYWHERE
          </li>
        </ul>
      </div>
        {/* Third Section */}
      <span className="text-m tracking-widest text-black">Interest ? </span>
      <button onClick={toggleDown3} className="ml-2 p-2">
        {isOpen3 ? (
        <FontAwesomeIcon icon={faChevronDown} />) : (<FontAwesomeIcon icon={faChevronRight} />) }
      </button>
      <div
        className={`overflow-hidden transition-max-h ${
          isOpen3 ? 'max-h-52' : 'max-h-0'
        } transition-all duration-300 ease-in-out`}
      >
        <ul className="py-1">
        <li className="px-4 py-2 text-xs text-black tracking-widest">
            Web Developing
          </li>
          <li className="px-4 py-2 text-xs text-black tracking-widest">
            UX/UI
          </li>
          <li className="px-4 py-2 text-xs text-black tracking-widest">
            Architecture
          </li>
          <li className="px-4 py-2 text-xs text-black tracking-widest">
            Design
          </li>
          <li className="px-4 py-2 text-xs text-black tracking-widest">
            Culinary
          </li>
        </ul>
        </div>
      </div>
  );
}

export default Dropdown;