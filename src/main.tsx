import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ConfigProvider, theme as antdTheme } from "antd";
import App from "./App";
import { store } from "./store";
import "./index.css";

function readStoredTheme(): "dark" | "light" {
  if (typeof window === "undefined") return "dark";
  return window.localStorage.getItem("sb-theme") === "light" ? "light" : "dark";
}

function ThemedApp() {
  const [theme, setTheme] = useState<"dark" | "light">(readStoredTheme);

  useEffect(() => {
    const initial = readStoredTheme();
    document.documentElement.setAttribute("data-theme", initial);
    setTheme(initial);

    const observer = new MutationObserver(() => {
      const next = document.documentElement.getAttribute("data-theme");
      if (next === "light" || next === "dark") setTheme(next);
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });
    return () => observer.disconnect();
  }, []);

  return (
    <ConfigProvider
      theme={{
        algorithm:
          theme === "dark" ? antdTheme.darkAlgorithm : antdTheme.defaultAlgorithm,
        token: {
          colorPrimary: "#e63946",
          fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif",
        },
      }}
    >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ConfigProvider>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemedApp />
    </Provider>
  </React.StrictMode>,
);
