import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import App from "./app/App.tsx";
import { Header } from "./app/components/Header.tsx";
import "./styles/index.css";

// 1. Mount full SPA if #root exists
const rootEl = document.getElementById("root");
if (rootEl) {
    createRoot(rootEl).render(<App />);
}

// 2. Mount only Header if #react-header-root exists (for Blade pages)
const headerRootEl = document.getElementById("react-header-root");
if (headerRootEl) {
    createRoot(headerRootEl).render(<Header />);
}
  