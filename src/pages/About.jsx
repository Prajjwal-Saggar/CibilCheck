import { motion } from 'framer-motion';
import { FaShieldAlt, FaChartLine, FaUserCheck } from 'react-icons/fa';
import AnimatedSphere from '../components/AnimatedSphere';
import BackButton from '../components/BackButton';

const About = () => {
  const features = [
    {
      icon: <FaChartLine className="text-4xl" />,
      title: "Advanced Algorithm",
      description: "Using latest US credit scoring models for accurate estimates"
    },
    {
      icon: <FaShieldAlt className="text-4xl" />,
      title: "Secure & Private",
      description: "Your information stays on your device. No data storage."
    },
    {
      icon: <FaUserCheck className="text-4xl" />,
      title: "Instant Analysis",
      description: "Get immediate results with detailed credit insights"
    }
  ];

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

      <div className="relative z-10 max-w-4xl mx-auto pt-24 px-4 text-white">
        <motion.h1
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          className="text-4xl md:text-5xl font-tech text-center mb-8"
        >
          About CibilCheck<span className="text-[#006DA4]">+</span>
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-lg text-center mb-16"
        >
          Your trusted companion for understanding and monitoring your credit health.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white/10 backdrop-blur-md p-6 rounded-xl text-center hover:bg-white/20 transition-colors"
            >
              <div className="mb-4 text-[#006DA4]">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default About;