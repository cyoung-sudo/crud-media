import "./Layout.css";
// Routing
import { Outlet } from "react-router-dom";
// Components
import Navigationbar from "../navigation/Navigationbar";
import Footer from "../navigation/Footer";
import ScrollToTop from "../utils/ScrollToTop";
// Context
import AuthProvider from "../../hooks/AuthProvider";

const Layout = () => {
  return (
    <AuthProvider>
      <Navigationbar/>
      <div id="layout-content">
        <ScrollToTop/>
        <Outlet/>
      </div>
      <Footer/>
    </AuthProvider>
  )
};

export default Layout;