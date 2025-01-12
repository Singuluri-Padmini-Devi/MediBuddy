import React from 'react';

interface PromoBannerProps {
  config?: any;
}

export const PromoBanner: React.FC<PromoBannerProps> = ({ config }) => {
  return (
    <div className="px-4 py-2">
      <div className="bg-pink-50 rounded-lg p-4 sm:p-6 flex items-center justify-between">
        <div className="flex-1">
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900">Baby On Board?</h3>
          <p className="text-sm sm:text-base text-gray-600 mt-1">Get Pregnancy Care Tests!</p>
          <p className="text-xs sm:text-sm text-gray-500 mt-1">Diabetes, ANC, Ferritin, HIV/Elisa & Thyroid</p>
          <button className="mt-3 text-blue-600 text-sm sm:text-base font-medium hover:text-blue-700 transition-colors">
            BOOK NOW →
          </button>
        </div>
        <div className="w-20 h-20 sm:w-24 sm:h-24 ml-4 rounded-lg overflow-hidden flex-shrink-0">
          <img
            src="https://images.unsplash.com/photo-1518935761255-7f1c76f9e5bc?auto=format&fit=crop&w=200&h=200"
            alt="Pregnant woman"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}