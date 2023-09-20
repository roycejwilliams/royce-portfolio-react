import React from 'react';
import { motion, AnimatePresence } from 'framer-motion'

const Books = () => {
  return (
    <div
      className='w-48 h-72 rounded-md m-4 cursor-pointer shadow-xl bg-cover bg-center hover:shadow-xl hover:shadow-orange-600 transition ease-in duration-800 '
      style={{ backgroundImage: "url('./src/images/books-portfolio.jpg')" }}
        >
      <h1 className='m-4 text-xl text-black'>Readings</h1>
    </div>
  );
}

export default Books;