import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-4">
            Hi, I'm <span className="text-blue-600">Prajal</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            Data Analyst & Tutor
          </p>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Passionate about data-driven insights, education, and helping others grow.
            I specialize in data analysis and providing quality tutoring across multiple subjects.
          </p>
        </div>

        <div className="flex items-center justify-center gap-6 mb-12">
          <a
            href="https://github.com/prajwal859"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-100 text-gray-700 hover:bg-blue-600 hover:text-white transition-all duration-300 hover:scale-110"
          >
            <Github size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/prajal-subedi-42a122240/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-100 text-gray-700 hover:bg-blue-600 hover:text-white transition-all duration-300 hover:scale-110"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="mailto:25094262d@connect.polyu.hk"
            className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-100 text-gray-700 hover:bg-blue-600 hover:text-white transition-all duration-300 hover:scale-110"
          >
            <Mail size={20} />
          </a>
        </div>

        <div className="flex items-center justify-center gap-4">
          <button
            onClick={() => scrollToSection('projects')}
            className="px-8 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
          >
            View My Work
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="px-8 py-3 bg-white text-gray-900 rounded-lg font-medium border-2 border-gray-200 hover:border-blue-600 hover:text-blue-600 transition-all duration-300"
          >
            Get In Touch
          </button>
        </div>

        <button
          onClick={() => scrollToSection('about')}
          className="mt-20 text-gray-400 hover:text-blue-600 transition-colors animate-bounce"
        >
          <ArrowDown size={32} />
        </button>
      </div>
    </section>
  );
}
