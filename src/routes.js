import Dashboard from "layouts/dashboard";
import Profile from "layouts/profile";
import SignIn from "layouts/authentication/sign-in";
import SignUp from "layouts/authentication/sign-up";

// Trading Gen  React icons
import Shop from "examples/Icons/Shop";
import Office from "examples/Icons/Office";
import Settings from "examples/Icons/Settings";
import Document from "examples/Icons/Document";
import SpaceShip from "examples/Icons/SpaceShip";
import CustomerSupport from "examples/Icons/CustomerSupport";
import CreditCard from "examples/Icons/CreditCard";
import Cube from "examples/Icons/Cube";

const routes = [
  {
    type: "collapse",
    name: "Dashboard",
    key: "dashboard",
    route: "/dashboard",
    icon: <Shop size="12px" />,
    component: <Dashboard />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Stock Screener",
    key: "stock",
    route: "/stock",
    icon: <Office size="12px" />,
    // component: <Stock />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "NewAI",
    key: "newai",
    route: "/newai",
    icon: <CreditCard size="12px" />,
    // component: <Billing />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "FundmentalAi",
    key: "fundmentalAi",
    route: "/fundmentalAi",
    icon: <Cube size="12px" />,
    // component: <VirtualReality />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Billioaire Tracking",
    key: "billioaireTracking",
    route: "/billioaireTracking",
    icon: <Settings size="12px" />,
    // component: <RTL />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Calendar",
    key: "calendar",
    route: "/calendar",
    icon: <Settings size="12px" />,
    // component: <RTL />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Portfolio",
    key: "portfolio",
    route: "/portfolio",
    icon: <Settings size="12px" />,
    // component: <RTL />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Invest",
    key: "invest",
    route: "/invest",
    icon: <Settings size="12px" />,
    // component: <RTL />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Community Trading",
    key: "communityTrading",
    route: "/communityTrading",
    icon: <Settings size="12px" />,
    // component: <RTL />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Education",
    key: "education",
    route: "/education",
    icon: <Settings size="12px" />,
    // component: <RTL />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Forum",
    key: "forum",
    route: "/forum",
    icon: <Settings size="12px" />,
    // component: <RTL />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Costumer",
    key: "costumer",
    route: "/costumer",
    icon: <Settings size="12px" />,
    // component: <RTL />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Featurest",
    key: "features",
    route: "/features",
    icon: <Settings size="12px" />,
    // component: <RTL />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "FeedBack",
    key: "feedBack",
    route: "/feedBack",
    icon: <Settings size="12px" />,
    // component: <RTL />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Chatbot",
    key: "chatbot",
    route: "/chatbot",
    icon: <Settings size="12px" />,
    // component: <RTL />,
    noCollapse: true,
  },
  { type: "title", title: "Account Pages", key: "account-pages" },
  {
    type: "collapse",
    name: "Profile",
    key: "profile",
    route: "/profile",
    icon: <CustomerSupport size="12px" />,
    component: <Profile />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Sign In",
    key: "sign-in",
    route: "/authentication/sign-in",
    icon: <Document size="12px" />,
    component: <SignIn />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Sign Up",
    key: "sign-up",
    route: "/authentication/sign-up",
    icon: <SpaceShip size="12px" />,
    component: <SignUp />,
    noCollapse: true,
  },
];

export default routes;
