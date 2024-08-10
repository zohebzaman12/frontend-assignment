import React, { useEffect, useState } from "react";
import Chart from "./Chart.jsx";
import Summary from "./Summary.jsx";
import Settings from "./Settings.jsx";
import Statistics from "./Statistics.jsx";
import Analysis from "./Analysis.jsx";
import Navigation from "./Navigation.jsx";
import PriceSection from "./PriceSection.jsx";
import useFetchData from "../utils/useFetchData.js";
import ErrorElement from "./ErrorElement.jsx";

const Dashboard = () => {
  const [activeItem, setActiveItem] = useState("Chart");
  const {
    data,
    currentPrice,
    percentageChange,
    priceChange,
    loading,
    error,
    setLoading,
    fetchData,
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



  const renderComponent = () => {
    if (error && activeItem === 'Chart') {
      return <ErrorElement error={error}/>;
    }

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
        return <ErrorElement error={error}/>;
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
