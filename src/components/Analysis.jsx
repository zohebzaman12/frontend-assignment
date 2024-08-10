import React from 'react';

const Analysis = () => (
  <div className="p-6 bg-white rounded-lg">
      <h2 className="text-3xl font-bold text-blue-600 mb-4">Market Analysis</h2>
      <p className="text-gray-800 mb-6">
          The crypto market has shown mixed signals in the last 24 hours. Bitcoin continues 
          to dominate with strong growth, while altcoins like Ethereum and Litecoin are experiencing 
          slight corrections. Our analysis suggests a potential uptrend for BTC, while ETH may 
          face resistance at ₹2,10,000.
      </p>
      <div>
          <h3 className="text-xl font-semibold text-gray-900">Key Indicators:</h3>
          <ul className="mt-4 space-y-2 list-disc pl-6">
              <li className="text-gray-700"><span className="font-bold">BTC RSI:</span> 65 (Bullish)</li>
              <li className="text-gray-700"><span className="font-bold">ETH Support Level:</span> ₹1,95,000</li>
              <li className="text-gray-700"><span className="font-bold">Market Sentiment:</span> Neutral</li>
          </ul>
      </div>
  </div>
);

export default Analysis;
