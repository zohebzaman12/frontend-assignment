import React from "react";
import { Bars } from "react-loader-spinner";

const PriceSection = ({ loading, currentPrice, priceChange, percentageChange,currency,currencySign }) => (
  <div className="font-circular-book">
    {loading ? (
      <div className="flex justify-start items-center h-16 ml-4 sm:ml-0">
        <Bars
          height={30}
          width={30}
          color="#6F7177"
          ariaLabel="oval-loading"
          secondaryColor="#ffffff"
          strokeWidth={2}
          strokeWidthSecondary={2}
        />
      </div>
    ) : (
      <div>
        <div className="flex flex-col sm:flex-row items-baseline">
          <span className="text-custom-50 sm:text-custom-70">{currentPrice}</span>
          <span className="text-custom-16 sm:text-custom-24 text-neutral-gray sm:relative sm:bottom-[30px] sm:left-[5px]">
            {currency.toUpperCase()}
          </span>
        </div>
        <span className={`text-custom-14 sm:text-custom-18 ${priceChange >= 0 ? "text-green" : "text-red"}`}>
          {priceChange >= 0
            ? `+ ${currencySign}${priceChange} (+${percentageChange}%)`
            : `${currencySign}${priceChange} (${percentageChange}%)`}
        </span>
      </div>
    )}
  </div>
);

export default PriceSection;
