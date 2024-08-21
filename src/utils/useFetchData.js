// useFetchData.js
import { useState, useEffect } from "react";
const apiKey = import.meta.env.VITE_COINGECKO_API_KEY;

const useFetchData = (currency = "usd") => {
  const [data, setData] = useState([]);
  const [currentPrice, setCurrentPrice] = useState(0);
  const [percentageChange, setPercentageChange] = useState(0);
  const [priceChange, setPriceChange] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);


  // useEffect to fetch data when currency changes
  useEffect(() => {
    setLoading(true);
    setError(null);
    fetchData().finally(() => setLoading(false));
  }, [currency]);

  // Function to fetch data from the API
  const fetchData = async (timeFrame = "1d") => {
    const daysMapping = {
      "1d": 1,
      "3d": 3,
      "1w": 7,
      "1m": 30,
      "6m": 180,
      "1y": 365,
      max: "365",
    };

    const days = daysMapping[timeFrame] || 1;

    try {
      const response = await fetch(
        `https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=${currency}&days=${days}&x_cg_demo_api_key=${apiKey}`
      );

      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }

      const result = await response.json();

      // Format data for chart rendering
      const formattedData = result.prices.map((price, index) => {
        return {
          time: new Date(price[0]).toLocaleDateString(),
          price: Math.round(price[1] * 100) / 100,
          volume: result.total_volumes[index][1],
        };
      });

      const startPrice = formattedData[0].price;
      const endPrice = formattedData[formattedData.length - 1].price;
      const percentageChange = ((endPrice - startPrice) / startPrice) * 100;
      const priceChange = endPrice - startPrice;

      setData(formattedData);
      setCurrentPrice(endPrice);
      setPercentageChange(Math.round(percentageChange * 100) / 100);
      setPriceChange(Math.round(priceChange * 100) / 100);
    } catch (err) {
      console.error("Failed to fetch data:", err);
      setError(err.message || "An error occurred while fetching data.");
    }
  };

  return {
    data,
    currentPrice,
    percentageChange,
    priceChange,
    loading,
    error,
    fetchData,
    setLoading,
  };
};

export default useFetchData;
