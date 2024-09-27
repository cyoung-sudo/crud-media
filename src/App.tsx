import './App.css';
// Routing
import { RouterProvider } from "react-router-dom";
import router from "./router";
// Components
import Navigationbar from "./components/navigation/Navigationbar";
import Footer from "./components/navigation/Footer";

function App() {
  return (
    <div id="app">
      <Navigationbar/>
      <div id="app-content">
        <RouterProvider router={router} />
      </div>
      <Footer/>
    </div>
  )
}

export default App