import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'
import Calculator from './pages/Calculator'
import { motion, AnimatePresence } from 'framer-motion'
import './App.css'

const App = () => {
  return (
    <Router>
      <AnimatePresence mode='wait'>
      
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/calculator" element={<Calculator />} />
          </Routes>
      
      </AnimatePresence>
    </Router>
  )
}

export default App