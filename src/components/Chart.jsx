import React, { useEffect, useState } from "react";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Area,
  Bar,
  ReferenceLine,
  ComposedChart,
} from "recharts";
import { Oval } from "react-loader-spinner";
import CustomTooltip from "./CustomTooltip";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import ChartButtons from "./ChartButtons";
import TimeFrameButtons from "./TimeFrameButtons";

const Chart = ({ fetchData, data, currentPrice }) => {
  const handle = useFullScreenHandle();
  const [timeFrame, setTimeFrame] = useState("1d");
  const [activeData, setActiveData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isFull, setIsFull] = useState(false);
  const [chartHeight, setChartHeight] = useState(window.innerHeight * 0.7);

  useEffect(() => {
    setLoading(true);
    fetchData(timeFrame).then(() => setLoading(false));
  }, [timeFrame]);

  useEffect(() => {
    const updateChartHeight = () => {
      setChartHeight(calculateChartHeight());
    };

    window.addEventListener("resize", updateChartHeight);

    return () => window.removeEventListener("resize", updateChartHeight);
  }, [isFull]);

  console.log(chartHeight);

  const calculateChartHeight = () => {
    const screenHeight = window.visualViewport
      ? window.visualViewport.height
      : window.innerHeight;
    const screenWidth = window.visualViewport
      ? window.visualViewport.width
      : window.innerWidth;

    if (isFull) {
      return screenHeight * 0.9;
    }

    if (screenWidth <= 768) {
      // For small screens (e.g., mobile devices)
      return screenHeight * 0.5;
    } else if (screenWidth <= 1024) {
      // For medium screens (e.g., tablets)
      return screenHeight * 0.6;
    } else {
      // For large screens (e.g., desktops)
      return screenHeight * 0.7;
    }
  };

  const handleMouseMove = (state) => {
    if (state.isTooltipActive) {
      const { activePayload } = state;
      if (activePayload && activePayload.length > 0) {
        const activeDataPoint = activePayload[0].payload;
        setActiveData(activeDataPoint);
      }
    } else {
      setActiveData(null);
    }
  };

  const CustomLabel = ({ viewBox }) => {
    const { y, width } = viewBox;
    const chartWidth = width || 0;
    const offsetX = chartWidth + 40;

    return (
      <foreignObject x={offsetX} y={y - 20} width={90} height={40}>
        <div className="bg-blue text-white px-2 py-1 rounded-lg font-circular-book text-lg text-center ">
          {currentPrice}
        </div>
      </foreignObject>
    );
  };

  const CustomLabelBlack = ({ viewBox }) => {
    const { y, width } = viewBox;
    const chartWidth = width || 0;
    const offsetX = chartWidth + 40;

    return (
      <foreignObject x={offsetX} y={y - 20} width={90} height={40}>
        <div className="bg-black text-white px-2 py-1 rounded-lg font-circular-book text-lg relative text-center z-[9999]">
          {activeData.price}
        </div>
      </foreignObject>
    );
  };

  return (
    <FullScreen
      handle={handle}
      onChange={(isFullScreen) => {
        setIsFull(isFullScreen);
        setChartHeight(
          isFullScreen ? window.innerHeight * 0.9 : window.innerHeight * 0.7
        );
      }}
    >
      <div className={`${isFull ? "p-8" : ""}`}>
        <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center md:justify-center lg:justify-between items-center mb-4 gap-4 sm:gap-0">
          <ChartButtons
            handle={handle}
            setChartHeight={setChartHeight}
            isFull={isFull}
          />
          <TimeFrameButtons timeFrame={timeFrame} setTimeFrame={setTimeFrame} />
        </div>

        <ResponsiveContainer width="100%" height={chartHeight}>
          {loading ? (
            <div className="flex justify-center items-center h-full">
              <Oval
                height={60}
                width={60}
                color="#6F7177"
                ariaLabel="oval-loading"
                secondaryColor="#ffffff"
                strokeWidth={2}
                strokeWidthSecondary={2}
              />
            </div>
          ) : (
            <ComposedChart
              data={data}
              onMouseMove={handleMouseMove}
              onMouseLeave={() => setActiveData(null)}
              margin={{ top: 5, right: 0, bottom: 25, left: 10 }}
            >
              <defs>
                <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="25%" stopColor="#4B40EE" stopOpacity={0.1} />
                  <stop offset="75%" stopColor="#4B40EE" stopOpacity={0.05} />
                </linearGradient>
              </defs>
              <CartesianGrid vertical={true} horizontal={false} />

             
              <XAxis dataKey="time" visibility="hidden" />

           
              <YAxis yAxisId="left" visibility="hidden" />


              <YAxis
                yAxisId="right"
                orientation="right"
                domain={[0, (dataMax) => dataMax * 8]}
                visibility="hidden"
              />

              <Tooltip
                content={<CustomTooltip />}
                cursor={{ strokeDasharray: "3 3" }}
              />

             
              <Area
                type="linear"
                dataKey="price"
                stroke="#4B40EE"
                fill="url(#gradient)"
                strokeWidth={2}
                yAxisId="left" 
              />


              <Bar
                dataKey="volume"
                barSize={5}
                fill="#e0e0e0"
                yAxisId="right" 
              />

             
              {currentPrice && (
                <ReferenceLine
                  y={currentPrice}
                  strokeDasharray="3 3"
                  label={CustomLabel}
                  yAxisId="left"
                />
              )}

           
              {activeData && (
                <ReferenceLine
                  y={activeData.price}
                  strokeDasharray="3 3"
                  label={CustomLabelBlack}
                  yAxisId="left"
                />
              )}
            </ComposedChart>
          )}
        </ResponsiveContainer>
      </div>
    </FullScreen>
  );
};

export default Chart;
