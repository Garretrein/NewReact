import React, { useEffect } from "react";

const TechAnalysis = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-technical-analysis.js";
    script.async = true;

    script.innerHTML = JSON.stringify({
      interval: "1W",
      width: "100%",
      isTransparent: false,
      height: "60%",
      symbol: "NASDAQ:AAPL",
      showIntervalTabs: true,
      displayMode: "multiple",
      locale: "en",
      colorTheme: "dark",
    });

    const container = document.getElementById("tradingview-widget-container");
    container.appendChild(script);

    return () => {
      container.removeChild(script);
    };
  }, []);

  return (
    <div id="tradingview-widget-container">
      <div className="tradingview-widget-container__widget"></div>
      <div className="tradingview-widget-copyright">
        <a href="https://www.tradingview.com/" rel="noopener noreferrer" target="_blank">
          <span className="blue-text">Track all markets on TradingView</span>
        </a>
      </div>
    </div>
  );
};

export default TechAnalysis;
