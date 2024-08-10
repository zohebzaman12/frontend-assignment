import React from 'react'

const TimeFrameButtons = ({timeFrame,setTimeFrame}) => {
  return (
    <div className="flex items-center space-x-1 mt-4 sm:mt-0">
    {["1d", "3d", "1w", "1m", "6m", "1y", "max"].map((scale) => (
      <button
        key={scale}
        onClick={() => setTimeFrame(scale)}
        className={`px-3 py-1 ${
          timeFrame === scale
            ? "bg-blue text-white"
            : "bg-white text-blue"
        } rounded-md hover:bg-blue hover:text-white transition-colors duration-300`}
      >
        {scale}
      </button>
    ))}
  </div>
  )
}

export default TimeFrameButtons