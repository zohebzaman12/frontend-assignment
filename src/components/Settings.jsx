import React from 'react';

const Settings = ({ setCurrency }) => {

  const handleCurrencyChange = (event) => {
    setCurrency(event.target.value);
  };

  return (
    <div className="p-6 bg-white rounded-lg">
      <h2 className="text-3xl font-bold text-blue-600 mb-4">User Settings</h2>
      <form>
        <div className="mb-6">
          <label className="block text-gray-800 font-semibold mb-2">Email Notifications</label>
          <select className="w-full mt-2 p-3 border border-gray-300 rounded-md">
            <option>Enabled</option>
            <option>Disabled</option>
          </select>
        </div>
        <div className="mb-6">
          <label className="block text-gray-800 font-semibold mb-2">Currency Display</label>
          <select
            className="w-full mt-2 p-3 border border-gray-300 rounded-md"
            onChange={handleCurrencyChange}
          >
            <option value="usd">USD ($)</option>
            <option value="inr">INR (₹)</option>
            <option value="eur">EUR (€)</option>
          </select>
        </div>
        <div className="mb-6">
          <label className="block text-gray-800 font-semibold mb-2">Language</label>
          <select className="w-full mt-2 p-3 border border-gray-300 rounded-md">
            <option>English</option>
            <option>Hindi</option>
            <option>Kannada</option>
          </select>
        </div>
        <button className="w-full px-4 py-3 bg-blue text-white rounded-md font-semibold hover:bg-[#342da1] transition duration-300">
          Save Settings
        </button>
      </form>
    </div>
  );
};

export default Settings;
