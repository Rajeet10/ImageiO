import React from 'react';
import { motion } from 'framer-motion';

const Home = () => {
    return(
        <div className="flex h-screen">
        <motion.h1 
        initial={{opacity:0 ,y:-400}}
        animate={{ 
          scale:1.5,
          opacity:1,
          transition:{duration:2},
          y:0
        }} 
        className="m-auto text-3xl">ImageiO
        </motion.h1>
      </div>
    );

}

export default Home
