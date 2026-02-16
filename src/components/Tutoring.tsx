import { Star, Users, TrendingUp } from 'lucide-react';

export default function Tutoring() {
  const tutoringData = [
    {
      subject: 'Mathematics',
      levels: 'High School to University',
      description: 'Algebra, Geometry, Calculus, Statistics',
      students: '50+',
    },
    {
      subject: 'Physics',
      levels: 'High School to University',
      description: 'Mechanics, Thermodynamics, Optics',
      students: '30+',
    },
    {
      subject: 'Chemistry',
      levels: 'High School',
      description: 'Organic, Inorganic, Physical Chemistry',
      students: '25+',
    },
    {
      subject: 'Data Science',
      levels: 'University Level',
      description: 'Python, Statistics, Machine Learning Basics',
      students: '15+',
    },
  ];

  const achievements = [
    {
      icon: Users,
      title: 'Student Success',
      stat: '120+',
      description: 'Students tutored',
    },
    {
      icon: TrendingUp,
      title: 'Improvement Rate',
      stat: '85%',
      description: 'Students improved grades',
    },
    {
      icon: Star,
      title: 'Rating',
      stat: '4.9/5',
      description: 'Average student rating',
    },
  ];

  return (
    <section id="tutoring" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Tutoring Experience
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Helping students excel across multiple subjects with personalized learning approaches
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {achievements.map((item, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl border border-blue-200 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <item.icon size={24} className="text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">
                {item.stat}
              </h3>
              <p className="text-gray-600 font-medium mb-1">
                {item.title}
              </p>
              <p className="text-sm text-gray-500">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {tutoringData.map((subject, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {subject.subject}
                  </h3>
                  <p className="text-blue-600 font-medium">
                    {subject.levels}
                  </p>
                </div>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                  {subject.students}
                </span>
              </div>
              <p className="text-gray-600">
                {subject.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
