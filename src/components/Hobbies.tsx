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
    <section id="hobbies" className="py-24 px-6 bg-white dark:bg-neutral-950 transition-colors">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Hobbies & Interests
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Passions that fuel my creativity and drive continuous personal growth
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {hobbies.map((hobby, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-neutral-900 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-neutral-800 hover:-translate-y-2"
            >
              <div className="w-14 h-14 bg-gray-200 dark:bg-neutral-800 rounded-lg flex items-center justify-center mb-6">
                <hobby.icon size={28} className="text-gray-700 dark:text-gray-300" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                {hobby.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {hobby.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
