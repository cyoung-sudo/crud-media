import { createContext, useState, useEffect, useContext, ReactNode } from 'react';

interface PopupContextType {
  message: string | null;
  openPopup: (content: string) => void;
  closePopup: () => void;
}

const PopupContext = createContext<PopupContextType | null>(null);

const PopupProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    // Scroll to top
    if(message) window.scrollTo(0, 0);

    const timer = setTimeout(() => {
      closePopup()
    }, 3000)
    return () => clearTimeout(timer)
  }, [message]);

  const openPopup = (content: string) => {
    setMessage(content)
  };

  const closePopup = () => {
    setMessage(null);
  };

  return (
    <PopupContext.Provider value={{ message, openPopup, closePopup }}>
      {children}
    </PopupContext.Provider>
  );
};

export default PopupProvider;

export const usePopup = () => {
  const context = useContext(PopupContext);
  if (!context) {
    throw new Error('usePopup must be used within a PopupProvider');
  }
  return context;
};