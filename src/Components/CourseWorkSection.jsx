import React from 'react';
import { useMediaQuery } from '@mui/material';
import { motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa';

const Item = ({ children }) => (
  <motion.div
    className='bg-black text-cyan-300 border border-black p-4 text-center transition-opacity duration-300 hover:opacity-80 hover:scale-110'
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
  >
    {children}
  </motion.div>
);

const courses = [
  { name: 'Data structure And Algorithm', rating: 3 },
  { name: 'Data Science', rating: 3 },
  { name: 'Database And Management System', rating: 4 },
  { name: 'Machine Learning', rating: 4 },
  { name: 'Web Development', rating: 3 },
  { name: 'Computer Networks', rating: 4 },
  { name: 'Ethical Hacking', rating: 3 },
  { name: 'Artificial Intelligence', rating: 3 },
  { name: 'Software Designing and Testing', rating: 3 },
  { name: 'OOPs', rating: 4},
  { name: 'Mathematical Modeling', rating: 3 },
  { name: 'Statistical Mathematics', rating: 3 },
];

const getRatingStars = (rating) => {
  const stars = [];
  for (let i = 0; i < rating; i++) {
    stars.push(<FaStar key={i} className='text-yellow-300 mx-1' />);
  }
  return stars;
};

const CourseWorkSection = () => {
  const isSmallScreen = useMediaQuery('(max-width:600px)');

  return (
    <section className='mx-auto max-w-[90%] md:max-w-6xl mt-20 flex flex-col items-center'>
      <h2 className='text-5xl font-black text-red-400 text-center mb-10'>Course Details</h2>
      <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 ${isSmallScreen ? 'flex-col' : 'flex-row'}`}>
        {courses.map((course, index) => (
          <Item key={index}>
            <motion.h3
              className='md:text-xl text-lg font-semibold mb-2'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {course.name}
            </motion.h3>
            <div className='flex items-center justify-center mb-2'>
              {getRatingStars(course.rating)}
            </div>
            
          </Item>
        ))}
      </div>
    </section>
  );
};

export default CourseWorkSection;
