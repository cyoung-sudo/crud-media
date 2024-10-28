import "./Popup.css";
// Hooks
import { usePopup } from "../../hooks/PopupProvider";

const Popup = () => {
  // Hooks
  const popup = usePopup();

  return (
    <div id="popup">
      {popup.message && 
        <div>{popup.message}</div>
      }
    </div>
  );
}

export default Popup;