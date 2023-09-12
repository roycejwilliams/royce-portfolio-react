import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Button = () => {
  return (
    <Link to="/portfolio" className="w-96 h-32 flex justify-center items-center absolute">
      <motion.button
        animate={{ opacity: 1 }}
        transition={{ type: "tween", duration: 1.5, delay: 3 }}
        initial={{ y: 75, opacity: 0 }}
        className="before:inline-block before:content-['\2014'] before:absolute before:-left-3.5 relative w-28 h-22 text-xl tracking-widest font-libre after:inline-block after:content-['\2014'] after:absolute"
      >
        ENTER
      </motion.button>
    </Link>
  );
};

export default Button;