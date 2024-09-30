import './App.css';
// Routing
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Root";
// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

// Create data router singleton
const router = createBrowserRouter([
  { path: "*", element: <Root /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App