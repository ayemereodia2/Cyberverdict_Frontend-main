import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { StoreProvider } from "./Store.tsx";
import { GoogleOAuthProvider } from "@react-oauth/google";
import NotifierComponents from "react-pop-notifier";
const { NotifierProvider } = NotifierComponents;

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <StoreProvider>
        <GoogleOAuthProvider clientId="887931497542-co346fi2d7sdvvaoebg0h2eh3n71da1u.apps.googleusercontent.com">
          <NotifierProvider>
            <App />
          </NotifierProvider>
        </GoogleOAuthProvider>
      </StoreProvider>
    </BrowserRouter>
  </React.StrictMode>
);
