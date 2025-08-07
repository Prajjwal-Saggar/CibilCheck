import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaCalculator, FaArrowRight } from 'react-icons/fa';
import AnimatedSphere from '../components/AnimatedSphere';

const Home = () => {
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

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-white">
        <motion.h1 
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          className="text-5xl sm:text-6xl md:text-8xl font-bold mb-6 font-tech text-center"
        >
          CibilCheck<span className="text-[#006DA4]">+</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-xl md:text-2xl text-center max-w-2xl mb-8"
        >
          Calculate your CIBIL score instantly and get a detailed analysis of your credit health
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-base md:text-lg text-center max-w-3xl mb-12 text-gray-300"
        >
          CibilCheck+ is your trusted companion for understanding your creditworthiness. Our advanced algorithm analyzes multiple factors including payment history, credit utilization, and account diversity to provide you with an accurate CIBIL score estimation. Make informed financial decisions with our detailed insights and recommendations.
        </motion.p>

        <motion.div
          initial={{ y: 50 }}
          animate={{ y: 0 }}
          className="flex gap-4 md:gap-6 flex-wrap justify-center"
        >
          <Link to="/calculator">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 bg-[#006494] px-6 md:px-8 py-3 md:py-4 rounded-lg text-base md:text-lg font-semibold"
            >
              Calculate Score <FaCalculator />
            </motion.button>
          </Link>
          
          <Link to="/about">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 border-2 border-[#006494] px-6 md:px-8 py-3 md:py-4 rounded-lg text-base md:text-lg font-semibold"
            >
              Learn More <FaArrowRight />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Home;