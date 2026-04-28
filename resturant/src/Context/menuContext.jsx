import { createContext, useEffect, useState } from "react";

export const menuContext = createContext();

export default function MenuProvider({ children }) {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    const allMenu = JSON.parse(localStorage.getItem("menu"));
    if (allMenu) {
      setMenu(allMenu);
    }
  }, []);

  return (
    <menuContext.Provider value={{ menu, setMenu }}>
      {children}
    </menuContext.Provider>
  );
}
