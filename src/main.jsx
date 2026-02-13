import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <>
      <video
        autoPlay
        loop
        muted
        playsInline
        className="bg-video"
      >
        <source src="/bg6.mp4" type="video/mp4" />
      </video>

      <App />
    </>
  </StrictMode>
);