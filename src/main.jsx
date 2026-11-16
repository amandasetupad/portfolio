import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./styles/global.css";

document.documentElement.classList.add("js");

// Follow the <base> tag injected at build time so /work/:slug resolves on both
// username.github.io and username.github.io/repo. Dev has no base tag.
function routerBasename() {
  const baseEl = document.querySelector("base");
  if (!baseEl?.href) return "/";
  const path = new URL(baseEl.href, window.location.origin).pathname;
  if (!path || path === "/") return "/";
  return path.replace(/\/$/, "") || "/";
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename={routerBasename()}>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
