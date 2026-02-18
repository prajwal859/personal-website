import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Photography() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const photos = [
    {
      title: 'Golden Hour at the Harbor',
      location: 'Harbor, Thailand',
      image: '/images/portfolio/WhatsApp_Image_2026-02-18_at_5.55.57_PM_(1).jpeg',
    },
    {
      title: 'Urban Architecture',
      location: 'Urban Landscape',
      image: '/images/portfolio/WhatsApp_Image_2026-02-18_at_5.55.57_PM_(11).jpeg',
    },
    {
      title: 'City Symmetry',
      location: 'Downtown',
      image: '/images/portfolio/WhatsApp_Image_2026-02-18_at_5.55.57_PM_(3).jpeg',
    },
    {
      title: 'Cityscapes at Dusk',
      location: 'Urban Area',
      image: '/images/portfolio/WhatsApp_Image_2026-02-18_at_5.55.57_PM_(6).jpeg',
    },
    {
      title: 'Hidden Views',
      location: 'Urban Perspective',
      image: '/images/portfolio/WhatsApp_Image_2026-02-18_at_5.55.57_PM_(2).jpeg',
    },
  ];

  const nextImage = () => {
    setSelectedImage((prev) =>
      prev === null ? 0 : (prev + 1) % photos.length
    );
  };

  const prevImage = () => {
    setSelectedImage((prev) =>
      prev === null ? photos.length - 1 : (prev - 1 + photos.length) % photos.length
    );
  };

  return (
    <section id="photography" className="py-24 px-6 bg-gray-50 dark:bg-neutral-900 transition-colors">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Photography & Moments
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Capturing the world through my lens - architecture, nature, and urban landscapes
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
          {photos.map((photo, index) => (
            <div
              key={index}
              onClick={() => setSelectedImage(index)}
              className="group cursor-pointer relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 aspect-square animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <img
                src={photo.image}
                alt={photo.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white text-sm font-medium text-center px-2">{photo.title}</p>
              </div>
            </div>
          ))}
        </div>

        {selectedImage !== null && (
          <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 animate-fade-in">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white hover:bg-white/20 p-2 rounded-lg transition-colors"
            >
              <X size={28} />
            </button>

            <button
              onClick={prevImage}
              className="absolute left-4 text-white hover:bg-white/20 p-2 rounded-lg transition-colors"
            >
              <ChevronLeft size={32} />
            </button>

            <div className="flex flex-col items-center gap-4 max-w-3xl w-full">
              <img
                src={photos[selectedImage].image}
                alt={photos[selectedImage].title}
                className="w-full max-h-[70vh] object-contain rounded-lg animate-scale-in"
              />
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {photos[selectedImage].title}
                </h3>
                <p className="text-gray-300">{photos[selectedImage].location}</p>
                <p className="text-gray-400 text-sm mt-2">
                  {selectedImage + 1} / {photos.length}
                </p>
              </div>
            </div>

            <button
              onClick={nextImage}
              className="absolute right-4 text-white hover:bg-white/20 p-2 rounded-lg transition-colors"
            >
              <ChevronRight size={32} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
