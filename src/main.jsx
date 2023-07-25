import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import AuthContext from "./contexts/AuthContext.jsx";
import Toastify from "./components/Toastify.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AuthContext>
      <Toastify />
      <App />
    </AuthContext>
  </BrowserRouter>
);
