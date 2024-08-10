
# Frontend Assignment - Crypto Dashboard

This project is a responsive and dynamic crypto dashboard built using **React** and **Tailwind CSS**. It displays real-time data fetched from the **CoinGecko API**, focusing on Bitcoin's market trends. The application features an interactive chart that visualizes price and volume changes over different timeframes, along with additional sections for statistics, analysis, and settings.

## Features

-   **Real-time Data Fetching**: Fetches the latest Bitcoin price, volume, and percentage change from the CoinGecko API over selectable timeframes (1 day, 3 days, 1 week, 1 month, 6 months, 1 year, max).
-   **Interactive Chart**: A Recharts-based chart with a responsive design that supports full-screen mode, displays tooltips, and has a dynamic reference line showing current and hovered prices.
-   **Multiple Currencies**: Switch between different currencies (USD, INR, EUR) with the UI updating accordingly.
-   **Dynamic Layout**: The chart height dynamically adjusts based on screen size and full-screen mode, ensuring optimal viewing on mobile, tablet, and desktop devices.
-   **Component-based Architecture**: Divided into reusable components like `Chart`, `Summary`, `Settings`, `Statistics`, and `Analysis`, making the codebase modular and easier to maintain.

    

## Libraries Used

-   **React**: JavaScript library for building user interfaces.
-   **Tailwind CSS**: Utility-first CSS framework for styling.
-   **Recharts**: A charting library built with React components.
-   **React Full Screen**: Provides full-screen functionality for the chart.
-   **CoinGecko API**: Source of real-time cryptocurrency data.

## Live Demo

Check out the live version of the application hosted at https://catalog-frontend-assignment.netlify.app/

