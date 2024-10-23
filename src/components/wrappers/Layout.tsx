import "./Layout.css";
// React
import { useState, useEffect } from "react";
// Routing
import { Outlet } from "react-router-dom";
// Components
import Navigationbar from "../navigation/Navigationbar";
import Footer from "../navigation/Footer";
import ScrollToTop from "../utils/ScrollToTop";
// Context
import AuthProvider from "../../hooks/AuthProvider";
// API
import OtherAPI from "../../apis/OtherAPI";

const Layout = () => {
  // Server loading status
  const [serverLoading, setServerLoading] = useState(true);

  // Ping to wakeup server
  useEffect(() => {
    OtherAPI.ping()
    .then(res => {
      if(res.data.success) {
        setServerLoading(false);
      }
    })
    .catch(err => console.log(err));
  }, []);

  return (
    <>
      {!serverLoading &&
        <AuthProvider>
          <Navigationbar/>
          <div id="layout-content">
            <ScrollToTop/>
            <Outlet/>
          </div>
          <Footer/>
        </AuthProvider>
      }

      {serverLoading && 
        <div id="layout-loading">
          <h1>Loading...</h1>
          <p>Waking up server</p>
          <p>Could take a minute :)</p>
        </div>
      }
    </>
  )
};

export default Layout;