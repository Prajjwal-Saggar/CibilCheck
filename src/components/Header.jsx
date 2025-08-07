import { motion } from 'framer-motion';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { FaBars, FaTimes, FaArrowLeft } from 'react-icons/fa';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isHome = location.pathname === '/';

  return (
    <header className="fixed w-full z-50 bg-[#032030]/80 backdrop-blur-md">
      <nav className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            {!isHome && (
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => navigate(-1)}
                className="text-white p-2 rounded-full hover:bg-white/10"
              >
                <FaArrowLeft />
              </motion.button>
            )}
            <Link to="/">
              <motion.h1 
                whileHover={{ scale: 1.05 }}
                className="text-2xl font-tech text-white"
              >
                CibilCheck<span className="text-[#006DA4]">+</span>
              </motion.h1>
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {['Home', 'Calculator', 'About'].map((item) => (
              <Link
                key={item}
                to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                className="relative group"
              >
                <span className={`text-white transition-colors ${
                  location.pathname === (item === 'Home' ? '/' : `/${item.toLowerCase()}`) 
                    ? 'text-[#006DA4]' 
                    : 'hover:text-[#006DA4]'
                }`}>
                  {item}
                </span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#006DA4] transition-all group-hover:w-full" />
              </Link>
            ))}
          </div>

          <motion.button
            whileTap={{ scale: 0.95 }}
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={isOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
          className="md:hidden overflow-hidden"
        >
          <div className="py-4 space-y-4">
            {['Home', 'Calculator', 'About'].map((item) => (
              <Link
                key={item}
                to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className={`block text-white hover:text-[#006DA4] transition-colors ${
                  location.pathname === (item === 'Home' ? '/' : `/${item.toLowerCase()}`) 
                    ? 'text-[#006DA4]' 
                    : ''
                }`}
              >
                {item}
              </Link>
            ))}
          </div>
        </motion.div>
      </nav>
    </header>
  );
};

export default Header;