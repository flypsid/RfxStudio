"use client";

import React from "react";
import {
  TrendingUp,
  FileSearch,
  Headphones,
  Wallet,
  Calculator,
  Plane,
  ArrowRight,
  LucideIcon,
} from "lucide-react";
import { useTranslations } from "next-intl";

type SolutionKey =
  | "viralis"
  | "resumeiq"
  | "relayon"
  | "fusepay"
  | "fiscally"
  | "tripmind";

const solutionIcons: Record<SolutionKey, LucideIcon> = {
  viralis: TrendingUp,
  resumeiq: FileSearch,
  relayon: Headphones,
  fusepay: Wallet,
  fiscally: Calculator,
  tripmind: Plane,
};

const solutionLinks: Record<SolutionKey, string> = {
  viralis: "https://viralis.media/",
  resumeiq: "https://resume.rfx.life/",
  relayon: "#",
  fusepay: "#",
  fiscally: "#",
  tripmind: "#",
};

const solutionKeys: SolutionKey[] = [
  "viralis",
  "resumeiq",
  "relayon",
  "fusepay",
  "fiscally",
  "tripmind",
];

export default function Solutions() {
  const t = useTranslations("Solutions");

  return (
    <section id="solutions" className="py-12 md:py-24 bg-slate-50">
      <div className="mx-auto max-w-[1180px] px-4 md:px-0">
        <div className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-sm font-medium mb-4">
            {t("badge")}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            {t("title")} <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-600 to-teal-500">
              {t("titleHighlight")}
            </span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">{t("description")}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutionKeys.map((key) => {
            const Icon = solutionIcons[key];
            const link = solutionLinks[key];
            return (
              <div
                key={key}
                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:ring-emerald-200"
              >
                <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                  <Icon className="h-24 w-24 text-emerald-600" />
                </div>

                <div>
                  <div className="mb-4 inline-flex items-center justify-center rounded-lg bg-emerald-50 p-3 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-slate-900">
                    {t(`items.${key}.title`)}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    {t(`items.${key}.description`)}
                  </p>
                </div>

                {link ? (
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 flex items-center gap-2 text-sm font-medium text-emerald-600 opacity-100 md:opacity-0 transform translate-y-0 md:translate-y-2 transition-all duration-300 md:group-hover:opacity-100 md:group-hover:translate-y-0"
                  >
                    {t("discover")} <ArrowRight className="h-4 w-4" />
                  </a>
                ) : (
                  <div className="mt-6 flex items-center gap-2 text-sm font-medium text-emerald-600 opacity-100 md:opacity-0 transform translate-y-0 md:translate-y-2 transition-all duration-300 md:group-hover:opacity-100 md:group-hover:translate-y-0 cursor-pointer">
                    {t("discover")} <ArrowRight className="h-4 w-4" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
