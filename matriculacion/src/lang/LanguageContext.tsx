import React, { createContext, useState, ReactNode } from "react";
import esMessages from "./es.json";
import enMessages from "./en.json";
interface LanguageContextProps {
  locale: string;
  messages: Record<string, string>;
  changeLanguage: (lang: string) => void;
}
export const messagesMap: { [key: string]: Record<string, string> } = {
  en: enMessages,
  es: esMessages,
};
export const LanguageContext = createContext<LanguageContextProps>({
  locale: "en",
  messages: enMessages,
  changeLanguage: () => {},
});
