import frMessages from "@/messages/fr.json";
import enMessages from "@/messages/en.json";
import { createContext, useContext } from "react";

export const locales = ["fr", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "fr";

const messagesMap: Record<Locale, any> = {
  fr: frMessages,
  en: enMessages,
};

export function getMessages(locale: string) {
  return messagesMap[locale as Locale] ?? messagesMap[defaultLocale];
}

export function isValidLocale(locale: string): locale is Locale {
  return (locales as readonly string[]).includes(locale);
}

// Get nested value by dot path
function getNested(obj: any, path: string): any {
  return path.split(".").reduce((acc, part) => (acc ? acc[part] : undefined), obj);
}

type I18nContextType = {
  locale: Locale;
  messages: any;
  t: (key: string) => string;
};

const I18nContext = createContext<I18nContextType | null>(null);

export function I18nProvider({
  locale,
  messages,
  children,
}: {
  locale: Locale;
  messages: any;
  children: React.ReactNode;
}) {
  const t = (key: string): string => {
    // Support namespace:key or plain key with dots
    // useTranslations(namespace) returns fn that expects key inside namespace
    // We also support direct full path
    const val = getNested(messages, key);
    if (val !== undefined) return String(val);
    return key;
  };

  return (
    <I18nContext.Provider value={{ locale, messages, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useLocale(): Locale {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useLocale must be used within I18nProvider");
  return ctx.locale;
}

export function useTranslations(namespace?: string) {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useTranslations must be used within I18nProvider");
  const { messages } = ctx;

  const fn = (key: string): string => {
    const fullKey = namespace ? `${namespace}.${key}` : key;
    const val = getNested(messages, fullKey);
    if (val !== undefined) {
      if (typeof val === "string") return val;
      if (Array.isArray(val)) return val as any;
      return String(val);
    }
    return fullKey;
  };
  // Attach .raw to mimic next-intl: returns raw value (array/object)
  (fn as any).raw = (key: string): any => {
    const fullKey = namespace ? `${namespace}.${key}` : key;
    return getNested(messages, fullKey);
  };
  return fn as typeof fn & { raw: (key: string) => any };
}

// For raw access
export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}
