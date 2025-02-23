'use client';

import React from 'react';
import { ReactNode } from 'react';
import { motion } from 'framer-motion';

const animations = {
  initial: { opacity: 0, y: 100 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -100 },
}

function AnimatedYPage({children}: {children: ReactNode}) {
  return (
    <motion.div 
      variants={animations} 
      initial='initial'
      animate='animate' 
      exit='exit'
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  )
}

export default AnimatedYPage;