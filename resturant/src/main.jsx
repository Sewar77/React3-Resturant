import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import UserProvider from "./Context/userContext.jsx";
import MenuProvider from "./Context/menuContext.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <UserProvider>
        <MenuProvider>
          <App />
          {/* app is cildren for user provider */}
        </MenuProvider>
      </UserProvider>
    </BrowserRouter>
  </StrictMode>
);
