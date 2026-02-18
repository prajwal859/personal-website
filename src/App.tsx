import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import DataAnalysisProjects from './components/DataAnalysisProjects';
import WorkExperience from './components/WorkExperience';
import Skills from './components/Skills';
import Hobbies from './components/Hobbies';
import Photography from './components/Photography';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'experience', 'skills', 'hobbies', 'photography', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 transition-colors">
      <Header activeSection={activeSection} isDark={isDark} setIsDark={setIsDark} />
      <Hero />
      <About />
      <DataAnalysisProjects />
      <WorkExperience />
      <Skills />
      <Hobbies />
      <Photography />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
