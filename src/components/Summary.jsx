import React from 'react';

const Summary = () => (
  <div className="p-6 bg-white rounded-lg">
      <h2 className="text-3xl font-bold text-blue-600 mb-4">Catalog Overview</h2>
      <p className="text-gray-800 mb-6">
          Welcome to Catalog's crypto dashboard. Here, you can monitor the latest trends, 
          track your portfolio performance, and stay informed with real-time updates.
      </p>
      <ul className="space-y-4">
          <li className="flex justify-between items-center">
              <span className="text-gray-800 font-semibold">Total Market Value:</span>
              <span className="text-gray-900 font-bold">₹10,23,45,000</span>
          </li>
          <li className="flex justify-between items-center">
              <span className="text-gray-800 font-semibold">Top Performing Asset:</span>
              <span className="text-gray-900 font-bold">Bitcoin (BTC)</span>
          </li>
          <li className="flex justify-between items-center">
              <span className="text-gray-800 font-semibold">24h Volume:</span>
              <span className="text-gray-900 font-bold">₹2,34,56,789</span>
          </li>
      </ul>
      <div className="mt-6">
          <button className="w-full px-4 py-3 bg-blue text-white rounded-md font-semibold hover:bg-[#342da1] transition duration-300">Explore More</button>
      </div>
  </div>
);

export default Summary;
