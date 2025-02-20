import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import msgs from "./lang/es.json";
import { IntlProvider } from "react-intl";
import { LanguageProvider } from "./lang/LanguageProvider.tsx";
import { Root } from "./Root.tsx";

const locale = navigator.language;

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <LanguageProvider>
      <Root />
    </LanguageProvider>
  </StrictMode>
);
