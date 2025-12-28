"use client";

import { useLocale, useTranslations } from "next-intl";
import { useRouter, usePathname } from "@/i18n/navigation";
import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { routing } from "@/i18n/routing";

const localeFlags: Record<string, string> = {
  fr: "https://flagcdn.com/w40/fr.png",
  en: "https://flagcdn.com/w40/gb.png",
};

export default function LanguageSwitcher() {
  const t = useTranslations("LanguageSwitcher");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLocaleChange = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale });
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 transition-colors text-sm font-medium text-slate-700"
        aria-label="Change language"
      >
        <Image
          src={localeFlags[locale]}
          alt={t(locale as "fr" | "en")}
          width={20}
          height={15}
          className="rounded-sm object-cover"
        />
        <span>{t(locale as "fr" | "en")}</span>
        <ChevronDown
          className={`h-4 w-4 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-36 rounded-lg bg-white shadow-lg ring-1 ring-slate-200 z-50">
          {routing.locales.map((loc) => (
            <button
              key={loc}
              onClick={() => handleLocaleChange(loc)}
              className={`flex items-center gap-2 w-full px-3 py-2.5 text-sm text-left hover:bg-slate-50 first:rounded-t-lg last:rounded-b-lg transition-colors ${
                locale === loc
                  ? "bg-emerald-50 text-emerald-700 font-medium"
                  : "text-slate-600"
              }`}
            >
              <Image
                src={localeFlags[loc]}
                alt={t(loc as "fr" | "en")}
                width={20}
                height={15}
                className="rounded-sm object-cover"
              />
              {t(loc as "fr" | "en")}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
