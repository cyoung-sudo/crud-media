import "./Layout.css";
// Routing
import { Outlet } from "react-router-dom";
// Components
import Navigationbar from "../../components/navigation/Navigationbar";
import Footer from "../../components/navigation/Footer";

const Layout = () => {
  return (
    <>
      <Navigationbar/>
      <div id="layout-content">
        <Outlet/>
      </div>
      <Footer/>
    </>
  )
};

export default Layout;