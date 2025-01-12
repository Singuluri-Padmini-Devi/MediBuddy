import React from 'react';
import type { HealthPackage } from '../types';
import { Clock, Plus, Minus } from 'lucide-react';

const packages: HealthPackage[] = [
  {
    id: '1',
    title: 'Medibuddy Fit health check-up',
    testsCount: 90,
    reportTime: '10-12 hrs',
    includes: ['Cholesterol - Total', 'Vitamin D... + 87 more'],
    fasting: {
      required: true,
      hours: '07-08 Hrs'
    },
    price: 0,
    available: {
      home: true,
      lab: false
    },
    sponsored: true
  }
];

export const FeaturedPackages = () => {
  return (
    <div className="px-4 py-2">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg sm:text-xl font-semibold">Featured Health Check-ups</h2>
        <button className="text-blue-600 text-sm hover:text-blue-700">View All</button>
      </div>
      
      <div className="flex space-x-2 sm:space-x-4 overflow-x-auto pb-4 scrollbar-hide">
        <button className="px-3 sm:px-4 py-1 bg-blue-50 text-blue-600 rounded-full text-sm whitespace-nowrap">
          Popular
        </button>
        <button className="px-3 sm:px-4 py-1 text-gray-600 rounded-full text-sm whitespace-nowrap hover:bg-gray-50">
          Center Visit
        </button>
        <button className="px-3 sm:px-4 py-1 text-gray-600 rounded-full text-sm whitespace-nowrap hover:bg-gray-50">
          Full Body Check Up
        </button>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mt-4">
        {packages.map((pkg) => (
          <div key={pkg.id} className="bg-white rounded-lg border p-4 hover:shadow-md transition-shadow">
            {pkg.sponsored && (
              <span className="text-xs bg-red-500 text-white px-2 py-0.5 rounded">
                Sponsored
              </span>
            )}
            <h3 className="text-lg font-medium mt-2">{pkg.title}</h3>
            
            <div className="flex items-center mt-2 text-sm text-gray-600">
              <Clock className="h-4 w-4 mr-1" />
              <span>Reports in {pkg.reportTime}</span>
            </div>
            
            <div className="mt-4 flex justify-between">
              <div>
                <p className="text-sm font-medium">{pkg.testsCount} Tests</p>
                <ul className="text-sm text-gray-600 mt-1">
                  {pkg.includes.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-sm font-medium">Includes</p>
                <p className="text-sm text-gray-600 mt-1">Radiology</p>
              </div>
            </div>

            <div className="mt-4 flex justify-between items-center">
              <div>
                <p className="text-sm font-medium">₹{pkg.price}</p>
              </div>
              <div className="flex items-center space-x-2">
                <button className="p-1 rounded-full border hover:bg-gray-50">
                  <Minus className="h-4 w-4" />
                </button>
                <span className="text-sm">1</span>
                <button className="p-1 rounded-full border hover:bg-gray-50">
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}