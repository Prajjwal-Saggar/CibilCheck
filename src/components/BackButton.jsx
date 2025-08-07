import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowLeft } from 'react-icons/fa';

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={() => navigate(-1)}
      className="fixed top-24 left-4 z-40 bg-white/10 p-3 rounded-full backdrop-blur-sm text-white hover:bg-white/20 transition-colors"
    >
      <FaArrowLeft />
    </motion.button>
  );
};

export default BackButton;