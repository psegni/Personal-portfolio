import React from 'react';

const galleryWorks = [
  { src: process.env.PUBLIC_URL + '/bookcover2(mockup).png', title: 'Book Cover 1', category: 'book cover design' },
  { src: process.env.PUBLIC_URL + '/bookcover3(mockup).png', title: 'Book Cover 2', category: 'book cover design' },
  { src: process.env.PUBLIC_URL + '/thumbnail design 8 modified.png', title: 'Poster Design 4', category: 'poster design' },
  { src: process.env.PUBLIC_URL + '/freshLemon.png', title: 'Poster Design 2', category: 'poster design' },
  { src: process.env.PUBLIC_URL + '/laroche edit.png', title: 'Poster Design 3', category: 'poster design' },
  { src: process.env.PUBLIC_URL + '/jeep cars.png', title: 'Thumbnail Design 2', category: 'thumbnail design' },
  { src: process.env.PUBLIC_URL + '/Colepalmer poster.png', title: 'Poster Design 1', category: 'poster design' },
  { src: process.env.PUBLIC_URL + '/thumbnail design 1.png', title: 'Thumbnail Design 1', category: 'thumbnail design' },
  { src: process.env.PUBLIC_URL + '/thumbnail design 4.png', title: 'Thumbnail Design 3', category: 'thumbnail design' },
  { src: process.env.PUBLIC_URL + '/hirko.png', title: 'Hirko', category: 'logo design' },
];

const categories = [
  'All',
  ...Array.from(new Set(galleryWorks.map(work => work.category)))
];

const DesignGalleryPreview = () => {
  const [modalOpen, setModalOpen] = React.useState(false);
  const [modalImg, setModalImg] = React.useState(null);
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const openModal = (img) => {
    setModalImg(img);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const filteredWorks = selectedCategory === 'All'
    ? galleryWorks
    : galleryWorks.filter(work => work.category === selectedCategory);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
      <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Design Gallery</h3>
      
      {/* Video Section */}
      <div className="mb-12">
        <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 text-center">Design Video </h4>
        <div className="flex justify-center">
          <video
            controls
            className="rounded-lg shadow-lg"
            style={{ width: '100%', maxWidth: '600px' }}
          >
            <source src={process.env.PUBLIC_URL + '/segnidesign.mp4'} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-3 mb-8 justify-center">
        {categories.map(category => (
          <button
            key={category}
            className={`px-4 py-2 rounded-full border font-medium transition-colors duration-200 focus:outline-none ${
              selectedCategory === category
                ? 'bg-blue-600 text-white border-blue-600'
                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 border-gray-300 hover:bg-blue-100 dark:hover:bg-blue-900'
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredWorks.slice(0, 6).map((work, idx) => (
          <div key={idx} className="cursor-pointer group" onClick={() => openModal(work.src)}>
            <img src={work.src} alt={work.title} className="rounded-lg shadow-md group-hover:scale-105 transition-transform duration-200" />
            <div className="mt-2 text-center text-gray-700 dark:text-gray-300">{work.title}</div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-6">
        <a href="/gallery" className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">View More</a>
      </div>
      
      {/* Modal for Image viewing */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50" onClick={closeModal}>
          <div className="bg-white dark:bg-gray-900 p-4 rounded-lg max-w-lg w-full relative" onClick={e => e.stopPropagation()}>
            <button className="absolute top-2 right-2 text-gray-700 dark:text-gray-300" onClick={closeModal}>✕</button>
            {modalImg && (
              <img src={modalImg} alt="Design Work" className="w-full rounded-lg" />
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default DesignGalleryPreview;
