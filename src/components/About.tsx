import { BarChart3, BookOpen, Award } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: BarChart3,
      title: 'Data Analysis',
      description: 'Transforming raw data into actionable insights through statistical analysis and visualization.',
    },
    {
      icon: BookOpen,
      title: 'Education',
      description: 'Dedicated to helping students excel through personalized tutoring and clear explanations.',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Committed to delivering high-quality results and fostering continuous learning.',
    },
  ];

  return (
    <section id="about" className="py-24 px-6 bg-gray-50 dark:bg-neutral-900 transition-colors">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A guy wearing glass who loves wearing black.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Transforming data into insights and inspiring growth
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
              I'm an undergraduate student studying Applied Mathematics at the Hong Kong Polytechnic University. I enjoy writing codes, playing games, and solving integrals. In free time, I mentor students and help them achieve their academic goals. Also, I am 24/7 on my headphone listening music. I think the best way to understand other human is through their taste in music.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              I also have a stronger foundation in Statistical Learning and Python Programming. My interests are among Machine Learning, Data Science, and Mathematical Modeling. I'm committed to
              staying current with industry trends and keeping my hunger for learning continued.
            </p>
          </div>

          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-gray-400 to-gray-600 dark:from-neutral-700 dark:to-neutral-800 rounded-2xl shadow-2xl overflow-hidden">
              <div className="w-full h-full flex items-center justify-center text-white dark:text-gray-200">
                <BarChart3 size={120} className="opacity-20" />
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white dark:bg-neutral-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 dark:border-neutral-700"
            >
              <div className="w-14 h-14 bg-gray-200 dark:bg-neutral-700 rounded-lg flex items-center justify-center mb-6">
                <feature.icon size={28} className="text-gray-700 dark:text-gray-300" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
