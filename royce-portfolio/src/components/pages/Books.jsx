import React from 'react';

const Books = () => {
  return (
    <div
      className='w-48 h-72 rounded-md m-4 cursor-pointer shadow-lg shadow-gray-500 bg-cover bg-center hover:shadow-md hover:shadow-white transition ease-in duration-800 '
      style={{ backgroundImage: "url('./src/images/books-portfolio.jpg')" }}
        >
      <h1 className='m-4 text-xl text-black font-clash'>Readings</h1>
    </div>
  );
}

export default Books;