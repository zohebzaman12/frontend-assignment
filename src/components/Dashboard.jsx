import React, { useEffect, useState } from "react";
import Chart from "./Chart.jsx";
import Summary from "./Summary.jsx";
import Settings from "./Settings.jsx";
import Statistics from "./Statistics.jsx";
import Analysis from "./Analysis.jsx";
import { Bars } from "react-loader-spinner";
import Navigation from "./Navigation.jsx";
import PriceSection from "./PriceSection.jsx";
import useFetchData from "../utils/useFetchData.js";

const Dashboard = () => {
  const [activeItem, setActiveItem] = useState("Chart");
  const {
    data,
    currentPrice,
    percentageChange,
    priceChange,
    loading,
    setLoading,
    setData,
    setCurrentPrice,
    setPercentageChange,
    setPriceChange,
  } = useFetchData();
  const [currency, setCurrency] = useState("usd");
  const [currencySign, setCurrencySign] = useState("$");

  useEffect(() => {
    switch (currency) {
      case "usd":
        setCurrencySign("$");
        break;
      case "inr":
        setCurrencySign("₹");
        break;
      case "eur":
        setCurrencySign("€");
        break;
      default:
        setCurrencySign("$");
    }
    setLoading(true);
    fetchData().finally(() => setLoading(false));
  }, [currency]);

  const fetchData = async (timeFrame = "1d") => {
    let days;
    switch (timeFrame) {
      case "1d":
        days = 1;
        break;
      case "3d":
        days = 3;
        break;
      case "1w":
        days = 7;
        break;
      case "1m":
        days = 30;
        break;
      case "6m":
        days = 180;
        break;
      case "1y":
        days = 365;
        break;
      case "max":
        days = "365";
        break;
      default:
        days = 1;
    }

    const response = await fetch(
      `https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=${currency}&days=${days}`
    );
    const result = await response.json();

    console.log(result);

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
  };

  const renderComponent = () => {
    switch (activeItem) {
      case "Summary":
        return <Summary />;
      case "Chart":
        return (
          <Chart
            fetchData={fetchData}
            data={data}
            currentPrice={currentPrice}
          />
        );
      case "Statistics":
        return <Statistics />;
      case "Analysis":
        return <Analysis />;
      case "Settings":
        return <Settings setCurrency={setCurrency} />;
      default:
        return <div>Select an item</div>;
    }
  };

  return (
    <div className="flex flex-col gap-6 sm:gap-10">
      {/* Price and Change Section */}
      <PriceSection
        loading={loading}
        currentPrice={currentPrice}
        priceChange={priceChange}
        percentageChange={percentageChange}
        currency={currency}
        currencySign={currencySign}
      />

      {/* Navigation Items */}
      <Navigation activeItem={activeItem} setActiveItem={setActiveItem} />

      {/* Render Component */}
      <div className="mt-4">{renderComponent()}</div>
    </div>
  );
};

export default Dashboard;
