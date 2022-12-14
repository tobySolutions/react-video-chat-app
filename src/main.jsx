import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css"
import { HMSRoomProvider } from "@100mslive/react-sdk";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HMSRoomProvider>
      <App />
    </HMSRoomProvider>
  </React.StrictMode>
);
