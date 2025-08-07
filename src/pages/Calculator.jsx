import { motion } from 'framer-motion';
import CalComponent from '../components/CalComponent';
import AnimatedSphere from '../components/AnimatedSphere';
import BackButton from '../components/BackButton';

const Calculator = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative min-h-screen bg-gradient-to-b from-[#032030] to-[#006DA4]"
    >
      <div className="absolute inset-0 z-0">
        <AnimatedSphere />
      </div>

      <BackButton />

      <div className="relative z-10 max-w-4xl mx-auto pt-24 px-4">
        <motion.h1 
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          className="text-4xl md:text-5xl font-tech text-white text-center mb-10"
        >
          CIBIL Score Calculator
        </motion.h1>
        
        <motion.div
          initial={{ y: 20 }}
          animate={{ y: 0 }}
        >
          <CalComponent />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Calculator;