import { Award, Calendar, ExternalLink } from 'lucide-react';

export default function Certifications() {
  const certifications = [
    {
      title: 'Google Data Analytics Professional Certificate',
      issuer: 'Google',
      date: '2024',
      description: 'Comprehensive training in data analysis, visualization, and SQL',
      status: 'Completed',
    },
    {
      title: 'Python for Data Science',
      issuer: 'DataCamp',
      date: '2023',
      description: 'Advanced Python programming for statistical analysis and data manipulation',
      status: 'Completed',
    },
    {
      title: 'SQL Mastery & Database Design',
      issuer: 'Udemy',
      date: '2023',
      description: 'Deep dive into SQL queries, optimization, and relational database design',
      status: 'Completed',
    },
    {
      title: 'Advanced Excel for Business Analytics',
      issuer: 'LinkedIn Learning',
      date: '2023',
      description: 'Expert-level Excel skills including pivot tables, VLOOKUP, and data visualization',
      status: 'Completed',
    },
    {
      title: 'Tableau Desktop Specialist',
      issuer: 'Tableau',
      date: '2024',
      description: 'Professional data visualization and dashboard creation',
      status: 'In Progress',
    },
    {
      title: 'Statistics for Data Analysis',
      issuer: 'Coursera',
      date: 'Current',
      description: 'Statistical methods and hypothesis testing for data-driven decision making',
      status: 'In Progress',
    },
  ];

  return (
    <section id="certifications" className="py-24 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Certifications & Credentials
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Professional certifications demonstrating expertise in data analysis and related fields
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Award size={24} className="text-blue-600" />
                </div>
                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium whitespace-nowrap ${
                    cert.status === 'Completed'
                      ? 'bg-green-100 text-green-700'
                      : 'bg-blue-100 text-blue-700'
                  }`}
                >
                  {cert.status}
                </span>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {cert.title}
              </h3>

              <p className="text-blue-600 font-medium mb-3">
                {cert.issuer}
              </p>

              <p className="text-gray-600 mb-4">
                {cert.description}
              </p>

              <div className="flex items-center gap-2 text-gray-500 text-sm">
                <Calendar size={16} />
                <span>{cert.date}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-blue-50 p-8 rounded-xl border border-blue-200 text-center">
          <p className="text-gray-700 mb-4">
            Continuous learning is important to me. I regularly pursue new certifications to stay updated
            with industry trends and best practices.
          </p>
        </div>
      </div>
    </section>
  );
}
