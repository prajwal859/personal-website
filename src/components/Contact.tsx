import { Mail, MapPin, Github } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-white dark:bg-neutral-950">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Have questions or want to collaborate? Reach out directly!
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-gray-50 dark:bg-neutral-900 p-8 rounded-xl border border-gray-200 dark:border-neutral-800">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
              Contact Information
            </h3>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gray-200 dark:bg-neutral-800 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="text-gray-700 dark:text-gray-300" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">University Email</h4>
                  <a
                    href="mailto:prajal.subedi@connect.polyu.hk"
                    className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                  >
                    prajal.subedi@connect.polyu.hk
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gray-200 dark:bg-neutral-800 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="text-gray-700 dark:text-gray-300" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Personal Email</h4>
                  <a
                    href="mailto:prajwalsubedi824@gmail.com"
                    className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                  >
                    prajwalsubedi824@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gray-200 dark:bg-neutral-800 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-gray-700 dark:text-gray-300" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Location</h4>
                  <p className="text-gray-600 dark:text-gray-400">Hong Kong</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gray-200 dark:bg-neutral-800 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Github className="text-gray-700 dark:text-gray-300" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">GitHub</h4>
                  <a
                    href="https://github.com/prajwal859"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                  >
                    github.com/prajwal859
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
