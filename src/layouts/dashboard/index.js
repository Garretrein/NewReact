import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import StockHeatmap from "components/Widgets/stockheatmap";
import CryptoHeatmap from "components/Widgets/cryptoheatmap";
import TickerWidget from "components/Widgets/ticker";
import "./style.css";
import SoftTypography from "components/SoftTypography";
import MarketMood from "components/marketmood";
import ForexMood from "components/marketmood/forex";
import CryptoMood from "components/marketmood/crypto";
import StockMood from "components/marketmood/stock";
function Dashboard() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <div className="dashboard-container">
        <div className="ticker-part">
          <div className="ticker-title">
            <span> TickerWidget</span>
          </div>
          <TickerWidget />
        </div>
        <div className="marketmood-part">
          <div className="market-mood-top">
            <div className="market-mood-title">
              <span> MarketMood </span>
            </div>
            <MarketMood className="market-mood-overview" />
          </div>
          <div className="detail-mood">
            <div className="forex-market-mood">
              <ForexMood />
            </div>
            <div className="crypto-market-mood">
              <CryptoMood />
            </div>
            <div className="Stock-market-mood">
              <StockMood />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </DashboardLayout>
  );
}

export default Dashboard;
