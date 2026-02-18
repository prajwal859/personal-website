export default function Skills() {
  const skillCategories = [
    {
      category: 'Data & Analytics',
      skills: [
        { name: 'Python', level: 85 },
        { name: 'SQL', level: 90 },
        { name: 'Excel & VBA', level: 95 },
        { name: 'Tableau & Power BI', level: 80 },
        { name: 'Statistical Analysis', level: 85 },
        { name: 'Data Visualization', level: 88 },
      ],
    },
    {
      category: 'Programming & Development',
      skills: [
        { name: 'JavaScript/TypeScript', level: 80 },
        { name: 'React', level: 82 },
        { name: 'HTML & CSS', level: 90 },
        { name: 'Database Design', level: 78 },
        { name: 'Git & Version Control', level: 85 },
      ],
    },
    {
      category: 'Soft Skills',
      skills: [
        { name: 'Teaching & Mentoring', level: 92 },
        { name: 'Communication', level: 90 },
        { name: 'Problem Solving', level: 88 },
        { name: 'Project Management', level: 82 },
        { name: 'Research & Analysis', level: 87 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 px-6 bg-gray-50 dark:bg-neutral-900 transition-colors">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Expertise
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Technical and professional competencies developed through data analysis and education
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white dark:bg-neutral-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 dark:border-neutral-700"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                {category.category}
              </h3>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-700 dark:text-gray-300 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-gray-500 dark:text-gray-400 text-sm">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-300 dark:bg-neutral-700 rounded-full h-2 overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-gray-600 to-gray-700 dark:from-gray-400 dark:to-gray-500 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
