import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Tutoring from './components/Tutoring';
import DataAnalysisProjects from './components/DataAnalysisProjects';
import WorkExperience from './components/WorkExperience';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Hobbies from './components/Hobbies';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'tutoring', 'projects', 'experience', 'skills', 'certifications', 'hobbies', 'contact'];
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
    <div className="min-h-screen bg-white">
      <Header activeSection={activeSection} />
      <Hero />
      <About />
      <Tutoring />
      <DataAnalysisProjects />
      <WorkExperience />
      <Skills />
      <Certifications />
      <Hobbies />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
