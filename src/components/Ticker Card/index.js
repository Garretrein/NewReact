import React, { useState, useEffect } from "react";
import "./TickerWidget.css"; // Assume this CSS file styles your ticker similar to the image provided.
import "../../assets/images/bitcoin.png";
const initialData = [
  {
    id: "s&p500",
    label: "S&P 500",
    value: 4714.1,
    change: -1.07,
    changeValue: 51.0,
    icon: "../../assets/images/circle (1).png",
  },
  {
    id: "us100",
    label: "US 100",
    value: 16069.9,
    change: -1.22,
    changeValue: 205.3,
    icon: "../../assets/images/100.png",
  },
  {
    id: "eurtousd",
    label: "EUR to USD",
    value: 1.09508,
    change: -0.36,
    changeValue: 0.00397,
    icon: "../../assets/images/exchange.png",
  },
  {
    id: "bitcoin",
    label: "Bitcoin",
    value: 43344,
    change: 2.57,
    changeValue: 1086,
    icon: "../../assets/images/bitcoin.png",
  },
  {
    id: "eth",
    label: "Ethereum",
    value: 2164.3,
    change: -0.67,
    changeValue: 13.2,
    icon: "../../assets/images/ethereum",
  },
];

const TicketWidget = () => {
  const [tickerData, setTickerData] = useState(initialData);

  useEffect(() => {
    // Here you would set up a subscription to a real-time data feed
    // and update the `tickerData` state with the new data.
  }, []);

  const formatChange = (change, changeValue) => {
    const sign = change > 0 ? "▲" : "▼";
    return `${sign} ${Math.abs(change).toFixed(2)}% (${changeValue.toFixed(1)})`;
  };

  return (
    <div className="ticker-widget">
      <span className="ticket-title">Ticker widget</span>
      <div className="item-container mt-4">
        {tickerData.map((item, idx) => (
          <div key={item.id} className="flex-item">
            <div className="ticket-min-part">
              <div className="flex">
                <img alt="icon" className="ticket-icon" src={item.icon} />
                <span className="ticker-label">{item.label}</span>
                <span className="ticker-value">{item.value.toLocaleString()}</span>
              </div>
              <span className="ticker-change">{formatChange(item.change, item.changeValue)}</span>
            </div>
            {/* {idx !== 0 && <span className="vertical-divide"></span>} */}
          </div>
        ))}
      </div>
      <div className="ticker-footer">Track all markets on TradingView</div>
    </div>
  );
};

export default TicketWidget;
