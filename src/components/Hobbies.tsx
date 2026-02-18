import { Zap, BookOpen, HeartHandshake, Music } from 'lucide-react';

export default function Hobbies() {
  const hobbies = [
    {
      icon: BookOpen,
      title: 'Reading',
      description: 'Immersed in classic and contemporary literature. Favorites include Osamu Dazai, Haruki Murakami (Norwegian Wood was my first completed novel), and Dostoevsky. I love exploring psychological depth and philosophical themes.',
    },
    {
      icon: Music,
      title: 'Guitar & Music',
      description: 'Self-taught guitarist passionate about alternative and indie music. Favorite artists: Radiohead, 1974AD, Albatross Nepal, The Edge Band. Also love Nepali folk rock and classical compositions.',
    },
    {
      icon: Zap,
      title: 'Anime & Design',
      description: 'Anime enthusiast - One Piece, Attack on Titan, Frieren, Cowboy Bebop. Also experienced in frontend design and Figma, combining creativity with technical skills.',
    },
    {
      icon: HeartHandshake,
      title: 'Mentoring & Community',
      description: 'Dedicated to helping others succeed. Volunteer as a tutor and mentor, finding fulfillment in supporting students achieve their academic goals and personal growth.',
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
