import React from 'react'
import { CgAdd } from 'react-icons/cg';
import { FiMaximize2, FiMinimize2 } from 'react-icons/fi';

const ChartButtons = ({handle,setChartHeight,isFull}) => {
  return (
    <div className="flex items-center gap-2 sm:gap-4">
    {isFull ? (
      <button
        className="flex px-4 py-2 justify-between items-center gap-2 text-dark-gray hover:scale-110 duration-500"
        onClick={() => {
          handle.exit();
          setChartHeight(window.innerHeight * 0.5);
        }}
      >
        <FiMinimize2 size={24} />
        <span className="text-center text-custom-18">
          Exit FullScreen
        </span>
      </button>
    ) : (
      <button
        className="flex px-4 py-2 justify-between items-center gap-2 text-dark-gray hover:scale-110 duration-500"
        onClick={() => {
          handle.enter();
          setChartHeight(window.innerHeight * 0.9);
        }}
      >
        <FiMaximize2 size={24} />
        <span className="text-center text-custom-18">Full Screen</span>
      </button>
    )}

    <button className="flex px-4 py-2 justify-between items-center gap-2 text-dark-gray hover:scale-110 duration-500 sm:ml-4">
      <CgAdd size={24} />
      <span className="text-center text-custom-18">Compare</span>
    </button>
  </div>

  )
}

export default ChartButtons