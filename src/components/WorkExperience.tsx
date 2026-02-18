import { Briefcase, Calendar } from 'lucide-react';

export default function WorkExperience() {
  const experiences = [
    {
      role: 'Data Analyst',
      company: 'Tech Solutions Ltd',
      period: 'Current',
      duration: '1 year+',
      responsibilities: [
        'Analyze large datasets to identify business trends and opportunities',
        'Create interactive dashboards for stakeholder reporting',
        'Develop SQL queries for data extraction and transformation',
        'Present insights to leadership for strategic decision-making',
      ],
    },
    {
      role: 'Junior Data Analyst',
      company: 'Digital Marketing Agency',
      period: '2023 - 2024',
      duration: '1 year',
      responsibilities: [
        'Tracked campaign performance metrics and ROI analysis',
        'Automated data collection and reporting processes',
        'Collaborated with marketing teams on data-driven strategies',
        'Created visualizations for client presentations',
      ],
    },
    {
      role: 'Statistics Tutor',
      company: 'Education Center',
      period: '2022 - Present',
      duration: '2+ years',
      responsibilities: [
        'Taught statistics and data analysis concepts to 50+ students',
        'Developed customized learning materials and assessments',
        'Mentored struggling students with personalized approaches',
        'Maintained 85% student grade improvement rate',
      ],
    },
  ];

  return (
    <section id="experience" className="py-24 px-6 bg-white dark:bg-neutral-950 transition-colors">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Work Experience
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Professional journey combining data analysis expertise and educational impact
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-neutral-900 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-gray-400 dark:border-neutral-700"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {exp.role}
                  </h3>
                  <p className="text-lg text-gray-700 dark:text-gray-300 font-medium">
                    {exp.company}
                  </p>
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mb-2">
                    <Calendar size={18} />
                    <span className="font-medium">{exp.period}</span>
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{exp.duration}</p>
                </div>
              </div>

              <div className="mt-6">
                <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3 flex items-center gap-2">
                  <Briefcase size={16} />
                  Key Responsibilities
                </p>
                <ul className="space-y-2">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx} className="text-gray-600 dark:text-gray-400 flex items-start gap-3">
                      <span className="text-gray-400 dark:text-gray-600 mt-1">•</span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
