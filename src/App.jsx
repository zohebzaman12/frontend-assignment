import React from "react";
import Dashboard from "./components/Dashboard";

const App = () => {
  return (
    <div className="bg-[#F4F5F9] flex flex-col items-center min-h-screen">
      {/* Header Section */}
      <div className="bg-white w-full flex justify-center items-center gap-2 shadow-sm py-4">
        <img src="/logo.svg" className="h-16 sm:h-24" alt="Logo" />
        <h1 className="text-3xl sm:text-4xl font-circular-book font-bold">
          CATALOG
        </h1>
      </div>

      {/* Main Content Section */}
      <div className="bg-white p-4 sm:p-10 w-full sm:w-3/4 m-4 sm:m-20 rounded-lg shadow-sm mt-20 sm:mt-28">
        <Dashboard />
      </div>
    </div>
  );
};

export default App;
