import React from 'react';

interface LifestylePackagesProps {
  config?: {
    categories?: Array<{
      id: string;
      name: string;
      icon: string;
    }>;
  };
}

export const LifestylePackages: React.FC<LifestylePackagesProps> = ({ config }) => {
  if (!config?.categories?.length) return null;

  return (
    <div className="px-4 py-6">
      <h2 className="text-lg sm:text-xl font-semibold mb-4">Lifestyle Health Check-up Packages</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {config.categories.map((category) => (
          <button key={category.id} className="flex flex-col items-center p-2 hover:bg-gray-50 rounded-lg transition-colors">
            <div className="w-12 h-12 sm:w-16 sm:h-16 mb-2">
              <img
                src={category.icon}
                alt={category.name}
                className="w-full h-full object-contain"
                loading="lazy"
              />
            </div>
            <span className="text-xs sm:text-sm text-center">{category.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
}