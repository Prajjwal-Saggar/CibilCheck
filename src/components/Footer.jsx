import { motion } from 'framer-motion';
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#032030] text-white py-6 md:py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center md:text-left"
          >
            <h2 className="text-xl font-tech">
              CibilCheck<span className="text-[#006DA4]">+</span>
            </h2>
            <p className="text-sm text-gray-400 mt-1">
              Your Credit Health Companion
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex gap-6"
          >
            {[FaGithub, FaTwitter, FaLinkedin].map((Icon, index) => (
              <motion.a
                key={index}
                href="#"
                whileHover={{ scale: 1.2, color: "#006DA4" }}
                className="text-white hover:text-[#006DA4] transition-colors"
              >
                <Icon className="text-xl md:text-2xl" />
              </motion.a>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center mt-6 text-sm text-gray-400 border-t border-gray-800 pt-4"
        >
          <p>&copy; {new Date().getFullYear()} CibilCheck+. All rights reserved.</p>
          <p className="mt-1">
            Designed and developed with ❤️ for better financial decisions.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;