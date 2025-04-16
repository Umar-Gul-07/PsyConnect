import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Slider.css';

const slides = [
  {
    id: 1,
    title: 'Find the Best Psychologist',
    subtitle: 'Your mental health matters.',
    image: 'images/slides/slider-mainbg-03.jpg',
  },
  {
    id: 2,
    title: 'Talk to Experts Online',
    subtitle: 'Confidential & Professional Help',
    image: 'images/slides/slider-mainbg-04.jpg',
  },
];

const textVariant = {
  hidden: { y: 80, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1, 
    transition: { duration: 1, ease: 'easeOut', delay: 0.5 } 
  },
  exit: { y: -50, opacity: 0, transition: { duration: 0.6 } },
};

const Slider = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="slider-container">
      <AnimatePresence mode="wait">
        <motion.div
          key={slides[index].id}
          className="slide"
          style={{ backgroundImage: `url(${slides[index].image})` }}
          initial={{ scale: 1.05, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          transition={{ duration: 1.2 }}
        >
          <div className="overlay" />
          <motion.div
            className="text-box"
            variants={textVariant}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <h1>{slides[index].title}</h1>
            <p>{slides[index].subtitle}</p>
            <motion.a
              className="cta-button"
              href="#"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              Get Started
            </motion.a>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Slider;
