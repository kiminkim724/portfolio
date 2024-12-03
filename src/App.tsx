import { Box, Container } from '@chakra-ui/react'
import Header from './components/Header'
import "./index.css"
import Home from './pages/Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Projects from './pages/Projects/Projects'
import { motion } from 'framer-motion'

function App() {
  return (
    <Router>
      <Container fluid px="0">
        <Box position="sticky" top={0} zIndex={1000}>
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            style={{ backgroundColor: 'black' }}
          >
            <Header />
          </motion.div>
        </Box>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </Container>
    </Router>
  )
}

export default App