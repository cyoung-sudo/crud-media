import './App.css';
// Routing
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routesConfig } from './routes/routesConfig';
// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

// Create data router singleton
export const router = createBrowserRouter(routesConfig);

function App() {
  return <RouterProvider router={router} />;
}

export default App