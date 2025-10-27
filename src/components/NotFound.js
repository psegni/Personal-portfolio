import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900 text-center p-8">
      <div className="text-7xl mb-4">🚫</div>
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">404 - Page Not Found</h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">Sorry, the page you are looking for does not exist.</p>
      <button
        onClick={() => navigate('/')}
        className="px-6 py-3 bg-teal-600 text-white rounded-lg font-semibold hover:bg-teal-700 transition"
      >
        Go to Home
      </button>
    </div>
  );
};

export default NotFound; 