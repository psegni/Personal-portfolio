import React, { useState, useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Services from './components/Services';
import Contact from './components/Contact';
import Loading from './components/Loading';
import InteractiveBackground from './components/InteractiveBackground';
import { Routes, Route } from 'react-router-dom';
import Gallery from './components/Gallery';
import DesignGalleryPreview from './components/DesignGalleryPreview';
import NotFound from './components/NotFound';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <InteractiveBackground />
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={
              <>
                <Home />
                <About />
                <Services />
                <Projects />
                <DesignGalleryPreview />
                <Contact />
              </>
            } />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
