"use client";

import React from "react";
import {
  Bot,
  ShieldCheck,
  Layers,
  Users,
  TrendingUp,
  FileCheck,
  LucideIcon,
} from "lucide-react";
import { useTranslations } from "next-intl";

type FeatureKey =
  | "innovation"
  | "security"
  | "ecosystem"
  | "support"
  | "scalability"
  | "compliance";

const featureIcons: Record<FeatureKey, LucideIcon> = {
  innovation: Bot,
  security: ShieldCheck,
  ecosystem: Layers,
  support: Users,
  scalability: TrendingUp,
  compliance: FileCheck,
};

const featureKeys: FeatureKey[] = [
  "innovation",
  "security",
  "ecosystem",
  "support",
  "scalability",
  "compliance",
];

export default function About() {
  const t = useTranslations("About");

  return (
    <section className="py-12 md:py-24 bg-white overflow-hidden">
      <div className="mx-auto max-w-[1180px] px-4 md:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Image Area */}
          <div className="relative h-[600px] w-full hidden lg:block rounded-2xl overflow-hidden bg-emerald-50 border border-emerald-100 p-8">
            <div className="absolute inset-0 bg-linear-to-br from-emerald-50 via-white to-emerald-100 opacity-80" />

            {/* Abstract Decorative Elements representing Ma'a Suh Ecosystem */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-emerald-400/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-teal-400/10 rounded-full blur-2xl" />

            <div className="relative z-10 flex flex-col justify-center h-full space-y-8">
              <div className="bg-white/60 backdrop-blur-sm p-6 rounded-xl border border-white/50 shadow-sm w-3/4 self-start transform -rotate-2 transition hover:rotate-0 duration-500">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-emerald-100 rounded-lg text-emerald-600">
                    <ShieldCheck size={20} />
                  </div>
                  <span className="font-semibold text-slate-800">
                    {t("decorative.security")}
                  </span>
                </div>
                <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-emerald-500 w-full animate-[shimmer_2s_infinite]"></div>
                </div>
              </div>

              <div className="bg-white/60 backdrop-blur-sm p-6 rounded-xl border border-white/50 shadow-sm w-3/4 self-end transform rotate-3 transition hover:rotate-0 duration-500">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-teal-100 rounded-lg text-teal-600">
                    <TrendingUp size={20} />
                  </div>
                  <span className="font-semibold text-slate-800">
                    {t("decorative.growth")}
                  </span>
                </div>
                <div className="flex items-end gap-1 h-8">
                  <div className="w-1/5 bg-teal-200 h-[40%] rounded-t-sm"></div>
                  <div className="w-1/5 bg-teal-300 h-[60%] rounded-t-sm"></div>
                  <div className="w-1/5 bg-teal-400 h-[30%] rounded-t-sm"></div>
                  <div className="w-1/5 bg-teal-500 h-[80%] rounded-t-sm"></div>
                  <div className="w-1/5 bg-emerald-500 h-full rounded-t-sm"></div>
                </div>
              </div>
              <div className="bg-white/60 backdrop-blur-sm p-6 rounded-xl border border-white/50 shadow-sm w-4/5 self-center transform -rotate-1 transition hover:rotate-0 duration-500">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                    <Bot size={20} />
                  </div>
                  <span className="font-semibold text-slate-800">
                    {t("decorative.ai")}
                  </span>
                </div>
                <p className="text-xs text-slate-500">
                  {t("decorative.aiDesc")}
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-sm font-medium mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              {t("badge")}
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
              {t("title")} <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-600 to-teal-500">
                {t("titleHighlight")}
              </span>
            </h2>

            <p className="text-slate-600 text-lg mb-12">{t("description")}</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {featureKeys.map((key) => {
                const Icon = featureIcons[key];
                return (
                  <div key={key} className="flex gap-4 group">
                    <div className="shrink-0">
                      <div
                        className={`p-3 rounded-xl bg-slate-50 border border-slate-100 group-hover:bg-emerald-50 group-hover:border-emerald-100 transition-colors duration-300`}
                      >
                        <Icon className="h-6 w-6 text-slate-600 group-hover:text-emerald-600 transition-colors" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">
                        {t(`features.${key}.title`)}
                      </h3>
                      <p className="text-sm text-slate-500 leading-relaxed">
                        {t(`features.${key}.description`)}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
