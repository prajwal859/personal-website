import { Zap, BookOpen, HeartHandshake, Music } from 'lucide-react';

export default function Hobbies() {
  const hobbies = [
    {
      icon: BookOpen,
      title: 'Reading',
      description: 'Enjoy reading books on data science, psychology, and personal development. Currently exploring machine learning concepts and behavioral economics.',
    },
    {
      icon: Music,
      title: 'Music',
      description: 'Passionate about music production and listening to various genres. Find music therapeutic and often use it to enhance creativity and focus.',
    },
    {
      icon: Zap,
      title: 'Technology & Innovation',
      description: 'Fascinated by emerging technologies and their real-world applications. Constantly exploring new tools and frameworks to expand my skill set.',
    },
    {
      icon: HeartHandshake,
      title: 'Mentoring & Volunteering',
      description: 'Dedicated to helping others succeed. Volunteer as a tutor and mentor, finding fulfillment in supporting students achieve their academic goals.',
    },
  ];

  return (
    <section id="hobbies" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Hobbies & Interests
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Passions that fuel my creativity and drive continuous personal growth
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {hobbies.map((hobby, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-2"
            >
              <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <hobby.icon size={28} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {hobby.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {hobby.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-8 rounded-xl border border-blue-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Beyond the Data
          </h3>
          <p className="text-gray-700 leading-relaxed">
            I believe that a well-rounded life contributes to better problem-solving and creative thinking.
            These hobbies and interests help me maintain a balance between professional work and personal
            growth. Whether I'm reading about the latest data science trends, enjoying music, or mentoring
            students, each activity brings something valuable to my career and personal development.
          </p>
        </div>
      </div>
    </section>
  );
}
