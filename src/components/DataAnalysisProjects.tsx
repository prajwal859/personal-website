import { BarChart3, PieChart, TrendingUp } from 'lucide-react';

export default function DataAnalysisProjects() {
  const projects = [
    {
      icon: TrendingUp,
      title: 'E-commerce Sales Analysis',
      description: 'Analyzed customer purchasing patterns and identified key revenue drivers across product categories. Created dashboards tracking KPIs and seasonal trends.',
      status: 'In Progress',
      tools: ['Python', 'Pandas', 'Tableau', 'SQL'],
    },
    {
      icon: BarChart3,
      title: 'Market Research Dataset',
      description: 'Processed and analyzed market survey data from 5000+ respondents. Performed statistical analysis to extract consumer insights and preferences.',
      status: 'Completed',
      tools: ['R', 'Excel', 'Statistical Analysis', 'Visualization'],
    },
    {
      icon: PieChart,
      title: 'Financial Performance Dashboard',
      description: 'Designed interactive dashboard visualizing quarterly financial metrics. Automated data pipeline for real-time reporting and anomaly detection.',
      status: 'In Progress',
      tools: ['Excel', 'Power BI', 'DAX', 'Data Modeling'],
    },
    {
      icon: TrendingUp,
      title: 'Social Media Analytics',
      description: 'Tracked engagement metrics across platforms. Performed sentiment analysis and identified content strategy improvements for audience growth.',
      status: 'Completed',
      tools: ['Python', 'NLP', 'Data Visualization', 'Statistics'],
    },
  ];

  return (
    <section id="projects" className="py-24 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Data Analysis Projects
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Transforming raw data into meaningful insights through comprehensive analysis and visualization
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-2"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <project.icon size={24} className="text-blue-600" />
                </div>
                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium ${
                    project.status === 'Completed'
                      ? 'bg-green-100 text-green-700'
                      : 'bg-yellow-100 text-yellow-700'
                  }`}
                >
                  {project.status}
                </span>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {project.title}
              </h3>

              <p className="text-gray-600 mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tools.map((tool, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium"
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
