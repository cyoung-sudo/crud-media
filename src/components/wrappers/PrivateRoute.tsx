// React
import { useState, useEffect } from "react";
// Routing
import { useNavigate, Outlet } from "react-router-dom";
// Hooks
import { useAuth } from "../../hooks/AuthProvider";
import { usePopup } from "../../hooks/PopupProvider";

const PrivateRoute = () => {
  // Auth status
  const [authenticated, setAuthenticated] = useState(false);
  // Hooks
  const auth = useAuth();
  const popup = usePopup();
  const navigate = useNavigate();

  useEffect(() => {
    if(auth.authUser) {
      setAuthenticated(true);
    } else {
      navigate("/");
      popup.openPopup("Invalid Authentication");
    }
  }, [])

  return (
    <>
      {authenticated && <Outlet/>}
    </>
  );
};

export default PrivateRoute;