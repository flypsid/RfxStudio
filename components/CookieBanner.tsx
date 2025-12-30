"use client";

import React, { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { Cookie, X } from "lucide-react";
import { Link } from "@/i18n/navigation";

export default function CookieBanner() {
  const t = useTranslations("CookieBanner");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Vérifier si l'utilisateur a déjà fait un choix
    const cookieConsent = localStorage.getItem("cookie-consent");
    if (!cookieConsent) {
      // Délai pour une meilleure UX
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setIsVisible(false);
  };

  const handleRefuse = () => {
    localStorage.setItem("cookie-consent", "refused");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 animate-in slide-in-from-bottom duration-500">
      <div className="mx-auto max-w-4xl">
        <div className="bg-slate-900/95 backdrop-blur-lg rounded-2xl border border-slate-700/50 p-4 md:p-6 shadow-2xl">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
            {/* Icon & Message */}
            <div className="flex items-start gap-3 flex-1">
              <div className="p-2 bg-emerald-500/20 rounded-lg text-emerald-400 shrink-0">
                <Cookie className="h-5 w-5" />
              </div>
              <div className="text-sm md:text-base text-slate-300">
                <p>
                  {t("message")}{" "}
                  <Link
                    href="/privacy"
                    className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2 transition-colors"
                  >
                    {t("learnMore")}
                  </Link>
                </p>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex items-center gap-3 w-full md:w-auto">
              <button
                onClick={handleRefuse}
                className="flex-1 md:flex-none px-4 py-2 text-sm font-medium text-slate-300 bg-slate-800 hover:bg-slate-700 rounded-lg border border-slate-600 transition-all hover:border-slate-500"
              >
                {t("refuse")}
              </button>
              <button
                onClick={handleAccept}
                className="flex-1 md:flex-none px-4 py-2 text-sm font-medium text-white bg-emerald-600 hover:bg-emerald-500 rounded-lg transition-all shadow-lg shadow-emerald-600/20"
              >
                {t("accept")}
              </button>
            </div>

            {/* Close button mobile */}
            <button
              onClick={handleRefuse}
              className="absolute top-2 right-2 md:hidden p-1 text-slate-400 hover:text-white transition-colors"
              aria-label="Fermer"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
