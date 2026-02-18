import { Github, TrendingUp } from 'lucide-react';

export default function DataAnalysisProjects() {
  const projects = [
    {
      icon: TrendingUp,
      title: 'Air Pollution Predictor',
      description: 'Developed a machine learning model to predict air quality levels using historical pollution data and weather patterns. Implemented data preprocessing, feature engineering, and model evaluation with high accuracy predictions.',
      tools: ['Python', 'Pandas', 'Machine Learning', 'Data Analysis'],
      github: 'https://github.com/prajwal859/air-pollution-predictor.git',
    },
    {
      icon: TrendingUp,
      title: 'Heart Disease Analysis',
      description: 'Comprehensive analysis of heart disease datasets including exploratory data analysis, statistical testing, and predictive modeling. Created visualizations highlighting key risk factors and disease patterns.',
      tools: ['Python', 'Statistics', 'Data Visualization', 'Healthcare Analytics'],
      github: 'https://github.com/prajwal859/heart-disease-analysis.git',
    },
  ];

  return (
    <section id="projects" className="py-24 px-6 bg-gray-50 dark:bg-neutral-900 transition-colors">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Data Analysis Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Real-world projects transforming data into actionable insights
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-neutral-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-neutral-700 hover:-translate-y-2"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-gray-200 dark:bg-neutral-700 rounded-lg flex items-center justify-center">
                  <project.icon size={24} className="text-gray-700 dark:text-gray-300" />
                </div>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-100 dark:bg-neutral-700 rounded-lg text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                  title="View on GitHub"
                >
                  <Github size={20} />
                </a>
              </div>

              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                {project.title}
              </h3>

              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tools.map((tool, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-gray-100 dark:bg-neutral-700 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
