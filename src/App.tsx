import { Box, CssBaseline, ThemeProvider } from '@mui/material';
import React from 'react';
import { theme } from './theme/theme';

// Common Components
import Footer from './components/common/Footer';
import Navbar from './components/common/Navbar';
import ScrollToTop from './components/common/ScrollToTop';

// Section Components
import About from './components/sections/About';
import Contact from './components/sections/Contact';
import Education from './components/sections/Education';
import Experience from './components/sections/Experience';
import Hero from './components/sections/Hero';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          minHeight: '100vh',
          bgcolor: 'background.default',
          color: 'text.primary',
        }}
      >
        {/* Navigation */}
        <Navbar />

        {/* Main Content */}
        <Box component="main">
          <Box id="hero" sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
            <Hero />
          </Box>

          <Box id="about" sx={{ py: 8 }}>
            <About />
          </Box>

          <Box id="experience" sx={{ py: 8, bgcolor: 'grey.50' }}>
            <Experience />
          </Box>

          <Box id="education" sx={{ py: 8 }}>
            <Education />
          </Box>

          <Box id="projects" sx={{ py: 8, bgcolor: 'grey.50' }}>
            <Projects />
          </Box>

          <Box id="skills" sx={{ py: 8 }}>
            <Skills />
          </Box>

          <Box id="contact" sx={{ py: 8, bgcolor: 'grey.50' }}>
            <Contact />
          </Box>
        </Box>

        {/* Footer */}
        <Footer />

        {/* Scroll to Top Button */}
        <ScrollToTop />
      </Box>
    </ThemeProvider>
  );
};

export default App;
