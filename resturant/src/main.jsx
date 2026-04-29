import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import UserProvider from "./Context/userContext.jsx";
import MenuProvider from "./Context/menuContext.jsx";
import MessageProvider from "./Context/messageContext.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <UserProvider>
        <MenuProvider>
          <MessageProvider>
            <App />
            {/* app is cildren for user provider */}
          </MessageProvider>
        </MenuProvider>
      </UserProvider>
    </BrowserRouter>
  </StrictMode>
);
