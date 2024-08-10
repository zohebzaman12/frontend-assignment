import React from 'react';

const Statistics = () => (
  <div className="p-6 bg-white rounded-lg">
      <h2 className="text-3xl font-bold text-blue-600 mb-4">Market Statistics</h2>
      <div className="grid grid-cols-2 gap-8">
          <div>
              <h3 className="text-xl font-semibold text-gray-900">Bitcoin (BTC)</h3>
              <p className="text-gray-800">Current Price: ₹32,00,000</p>
              <p className="text-green font-medium">+2.5% (24h)</p>
          </div>
          <div>
              <h3 className="text-xl font-semibold text-gray-900">Ethereum (ETH)</h3>
              <p className="text-gray-800">Current Price: ₹2,00,000</p>
              <p className="text-red font-medium">-1.2% (24h)</p>
          </div>
          <div>
              <h3 className="text-xl font-semibold text-gray-900">Ripple (XRP)</h3>
              <p className="text-gray-800">Current Price: ₹70</p>
              <p className="text-green font-medium">+0.8% (24h)</p>
          </div>
          <div>
              <h3 className="text-xl font-semibold text-gray-900">Litecoin (LTC)</h3>
              <p className="text-gray-800">Current Price: ₹12,000</p>
              <p className="text-red font-medium">-0.4% (24h)</p>
          </div>
      </div>
  </div>
);

export default Statistics;
