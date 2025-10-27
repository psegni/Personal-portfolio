import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const works = [

  { src: process.env.PUBLIC_URL + '/bookcover2(mockup).png', title: 'Book Cover 1', category: 'book cover design' },
  { src: process.env.PUBLIC_URL + '/freshLemon.png', title: 'Poster Design 2', category: 'poster design' },
  { src: process.env.PUBLIC_URL + '/coffeeposter.png', title: 'Poster Design 3', category: 'poster design' },
  { src: process.env.PUBLIC_URL + '/classiccoffeeposter.png', title: 'Poster Design 4', category: 'poster design' },
  { src: process.env.PUBLIC_URL + '/carsellposter.png', title: 'Poster Design 5', category: 'poster design' },
  { src: process.env.PUBLIC_URL + '/laroche edit.png', title: 'Poster Design 3', category: 'poster design' },
  { src: process.env.PUBLIC_URL + '/Colepalmer poster.png', title: 'Poster Design 4', category: 'poster design' },
  { src: process.env.PUBLIC_URL + '/thumbnail design 8 modified.png', title: 'Poster Design 1', category: 'poster design' },
<<<<<<< HEAD
=======
    { src: process.env.PUBLIC_URL + '/Airforce 1 poster.png', title: 'Shoes Poster Design 1', category: 'shoes poster design' },
  { src: process.env.PUBLIC_URL + '/nike red shoe poster.png', title: 'Shoes Poster Design 2', category: 'shoes poster design' },
  { src: process.env.PUBLIC_URL + '/nike teal poster.png', title: 'Shoes Poster Design 2', category: 'shoes poster design' },
  { src: process.env.PUBLIC_URL + '/puma futurez teal poster.png', title: 'Shoes Poster Design 2', category: 'shoes poster design' },
>>>>>>> 3552ac9 (Added backend and vercel configuration)
  { src: process.env.PUBLIC_URL + '/bookcover3(mockup).png', title: 'Book Cover 2', category: 'book cover design' },
  { src: process.env.PUBLIC_URL + '/india Palace Thumbnail.png', title: 'Thumbnail Design 1', category: 'thumbnail design' },
  { src: process.env.PUBLIC_URL + '/sharkthumbnail.png', title: 'Thumbnail Design 2', category: 'thumbnail design' },
  { src: process.env.PUBLIC_URL + '/elonmusk thumbnail design.png', title: 'Thumbnail Design 3', category: 'thumbnail design' },
  { src: process.env.PUBLIC_URL + '/thumbnail design 4.png', title: 'Thumbnail Design 4', category: 'thumbnail design' },
  { src: process.env.PUBLIC_URL + '/thumbnail design 1.png', title: 'Thumbnail Design 5', category: 'thumbnail design' },
<<<<<<< HEAD
  { src: process.env.PUBLIC_URL + '/jeep cars.png', title: 'Thumbnail Design 6', category: 'thumbnail design' },
  { src: process.env.PUBLIC_URL + '/spoo.png', title: 'Spooky', category: 'logo design' },
  { src: process.env.PUBLIC_URL + '/hirko.png', title: 'Hirko', category: 'logo design' },
=======
  { src: process.env.PUBLIC_URL + '/thumbnail design brooklyn.png', category: 'thumbnail design' },

  { src: process.env.PUBLIC_URL + '/jeep cars.png', title: 'Thumbnail Design 6', category: 'thumbnail design' },
  { src: process.env.PUBLIC_URL + '/spoo.png', title: 'Spooky', category: 'logo design' },
  { src: process.env.PUBLIC_URL + '/princelogo.png', title: 'Hirko', category: 'logo design' },
>>>>>>> 3552ac9 (Added backend and vercel configuration)
];

const categories = [
  { label: 'All', value: 'all' },
  { label: 'Book Cover Design', value: 'book cover design' },
  { label: 'Poster Design', value: 'poster design' },
  { label: 'Shoes Poster Design', value: 'shoes poster design' },
  { label: 'Thumbnail Design', value: 'thumbnail design' },
  { label: 'Logo Design', value: 'logo design' },


];

const Gallery = () => {
  const [selected, setSelected] = useState('all');
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImg, setModalImg] = useState(null);
  const navigate = useNavigate();

  const filteredWorks = selected === 'all' ? works : works.filter(w => w.category === selected);

  const openModal = (img) => {
    setModalImg(img);
    setModalOpen(true);
  };
  const closeModal = () => setModalOpen(false);

  return (
    <section className="py-20 bg-white dark:bg-gray-900 min-h-screen transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white text-center w-full">Gallery</h2>
          <button
            className="absolute left-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            onClick={() => navigate('/')}
          >
            Home
          </button>
        </div>
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {categories.map(cat => (
            <button
              key={cat.value}
              onClick={() => setSelected(cat.value)}
              className={`px-4 py-2 rounded-full border transition font-semibold ${selected === cat.value ? 'bg-blue-600 text-white border-blue-600' : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-700'}`}
            >
              {cat.label}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {filteredWorks.length === 0 ? (
            <div className="col-span-full text-center text-gray-500">No works found in this category.</div>
          ) : (
            filteredWorks.map((work, idx) => (
              <div key={idx} className="cursor-pointer group" onClick={() => openModal(work.src)}>
                <img src={work.src} alt={work.title} className="rounded-lg shadow-md group-hover:scale-105 transition-transform duration-200" />
                <div className="mt-2 text-center text-gray-700 dark:text-gray-300">{work.title}</div>
              </div>
            ))
          )}
        </div>
    
        {modalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50" onClick={closeModal}>
            <div className="bg-white dark:bg-gray-900 p-4 rounded-lg max-w-lg w-full relative" onClick={e => e.stopPropagation()}>
              <button className="absolute top-2 right-2 text-gray-700 dark:text-gray-300" onClick={closeModal}>✕</button>
              <img src={modalImg} alt="Enlarged work" className="w-full h-auto rounded" />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery; 
