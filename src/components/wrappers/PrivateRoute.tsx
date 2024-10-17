// React
import { useState, useEffect } from "react";
// Routing
import { useNavigate, Outlet } from "react-router-dom";
// Hooks
import { useAuth } from "../../hooks/AuthProvider";

const PrivateRoute = () => {
  // Auth status
  const [authenticated, setAuthenticated] = useState(false);
  // Hooks
  const auth = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if(auth.authUser) {
      setAuthenticated(true);
    } else {
      console.log("Invalid Authentication");
      navigate("/");
    }
  }, [])

  return (
    <>
      {authenticated && <Outlet/>}
    </>
  );
};

export default PrivateRoute;