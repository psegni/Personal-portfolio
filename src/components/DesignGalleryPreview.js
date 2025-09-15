import React from 'react';
import { Document, Page, pdfjs } from 'react-pdf'; // Import Document and Page from react-pdf

const galleryWorks = [
  { src: process.env.PUBLIC_URL + '/bookcover2(mockup).png', title: 'Book Cover 1', category: 'book cover design' },
  { src: process.env.PUBLIC_URL + '/bookcover3(mockup).png', title: 'Book Cover 2', category: 'book cover design' },
  { src: process.env.PUBLIC_URL + '/thumbnail design 8 modified.png', title: 'Poster Design 4', category: 'poster design' },
  { src: process.env.PUBLIC_URL + '/freshLemon.png', title: 'Poster Design 2', category: 'poster design' },
  { src: process.env.PUBLIC_URL + '/coffeeposter.png', title: 'Poster Design 3', category: 'poster design' },
  { src: process.env.PUBLIC_URL + '/classiccoffeeposter.png', title: 'Poster Design 4', category: 'poster design' },
  { src: process.env.PUBLIC_URL + '/carsellposter.png', title: 'Poster Design 5', category: 'poster design' },
  { src: process.env.PUBLIC_URL + '/laroche edit.png', title: 'Poster Design 3', category: 'poster design' },
  { src: process.env.PUBLIC_URL + '/Colepalmer poster.png', title: 'Poster Design 1', category: 'poster design' },
  { src: process.env.PUBLIC_URL + '/india Palace Thumbnail.png', title: 'Thumbnail Design 1', category: 'thumbnail design' },
  { src: process.env.PUBLIC_URL + '/sharkthumbnail.png', title: 'Thumbnail Design 2', category: 'thumbnail design' },
  { src: process.env.PUBLIC_URL + '/elonmusk thumbnail design.png', title: 'Thumbnail Design 3', category: 'thumbnail design' },
  { src: process.env.PUBLIC_URL + '/thumbnail design 4.png', title: 'Thumbnail Design 4', category: 'thumbnail design' },
  { src: process.env.PUBLIC_URL + '/hirko.png', title: 'Hirko', category: 'logo design' },
];

const categories = [
  'All',
  ...Array.from(new Set(galleryWorks.map(work => work.category)))
];

// Images inside public/images for Design Folder 1
const designImages = [
  '/images/catalogue-01.png',
  '/images/catalogue-02.png',
  '/images/catalogue-03.png',
  '/images/catalogue-04.png',
  '/images/catalogue-05.png',
  '/images/catalogue-06.png',
  '/images/catalogue-07.png',
  '/images/catalogue-08.png',
  '/images/catalogue-09.png',
  '/images/catalogue-10.png',
  '/images/catalogue-11.png',
  '/images/catalogue-12.png',
  '/images/hussein negash.png',
  '/images/አለም.png',
  '/images/tshirt-design.png'
].map(p => process.env.PUBLIC_URL + p);

const DesignGalleryPreview = () => {
  const [modalOpen, setModalOpen] = React.useState(false);
  const [modalImg, setModalImg] = React.useState(null);
  const [selectedCategory, setSelectedCategory] = React.useState('All');
  const [folderOpen, setFolderOpen] = React.useState(false);

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
      
      {/* Design Folder 1 Section */}
      <div className="mb-12">
        <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 text-center">Design Folder 1</h4>
        <div
          className="cursor-pointer bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 shadow hover:shadow-lg transition-shadow"
          onClick={() => setFolderOpen(!folderOpen)}
        >
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 6a2 2 0 012-2h3l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" />
                </svg>
              </div>
              <div>
                <div className="text-lg font-semibold text-gray-900 dark:text-white">Design Folder 1</div>
                <div className="text-sm text-gray-600 dark:text-gray-300"> {folderOpen ? 'Thank you These are some of my works' : 'open and view Some of my works'} </div>
              </div>
            </div>
            <svg className={`w-5 h-5 text-gray-600 dark:text-gray-300 transition-transform ${folderOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
          {folderOpen && (
            <div className="px-4 pb-4">
              <div className="max-h-[500px] overflow-y-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {designImages.map((src, idx) => (
                    <div key={idx} className="group cursor-pointer" onClick={() => openModal(src)}>
                      <img src={src} alt={`Design ${idx + 1}`} className="w-full h-auto rounded-lg shadow-sm group-hover:opacity-90" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
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
