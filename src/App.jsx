import React from "react";
import Dashboard from "./components/Dashboard";

const App = () => {
  return (
    <div className="bg-[#F4F5F9] flex flex-col justify-center items-center min-h-screen">
      <div className='bg-white w-full flex justify-center items-center gap-2 shadow-sm pb-4 pt-4'>
      <img src='/logo.svg' className='h-24'></img>
      <h1 className="text-4xl font-circular-book font-bold">CATALOG</h1>
    </div>
      <div className="bg-white p-4 sm:p-10 w-full sm:w-3/4 m-4 sm:m-20 rounded-lg shadow-sm">
        <Dashboard />
      </div>
    </div>
  );
};

export default App;
