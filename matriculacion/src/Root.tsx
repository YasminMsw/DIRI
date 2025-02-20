import React from "react";
import { LanguageContext } from "./lang/LanguageContext";
import { IntlProvider } from "react-intl";
import App from "./App";
import "./index.css"; 


export const Root = () => {
  const { locale, messages } = React.useContext(LanguageContext);
  return (
    <IntlProvider locale={locale} messages={messages}>
      <App />
    </IntlProvider>
  );
};
