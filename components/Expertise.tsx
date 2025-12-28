"use client";

import React from "react";
import {
  Code2,
  Cpu,
  Cloud,
  ShieldCheck,
  CheckCircle2,
  LucideIcon,
} from "lucide-react";
import { useTranslations } from "next-intl";

type ExpertiseKey = "dev" | "ai" | "cloud" | "security";

const expertiseIcons: Record<ExpertiseKey, LucideIcon> = {
  dev: Code2,
  ai: Cpu,
  cloud: Cloud,
  security: ShieldCheck,
};

const expertiseKeys: ExpertiseKey[] = ["dev", "ai", "cloud", "security"];

export default function Expertise() {
  const t = useTranslations("Expertise");

  return (
    <section id="expertise" className="py-12 md:py-24 bg-white">
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {expertiseKeys.map((key) => {
            const Icon = expertiseIcons[key];
            const features = t.raw(`items.${key}.features`) as string[];
            return (
              <div
                key={key}
                className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 transition-all hover:border-emerald-200 hover:shadow-xl hover:shadow-emerald-900/5"
              >
                <div className="mb-6 flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    {t(`items.${key}.category`)}
                  </div>
                </div>

                <h3 className="mb-3 text-2xl font-bold text-slate-900">
                  {t(`items.${key}.title`)}
                </h3>
                <p className="mb-6 text-slate-600 leading-relaxed">
                  {t(`items.${key}.description`)}
                </p>

                <div className="space-y-2">
                  {features.map((feature: string, idx: number) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 text-sm text-slate-500"
                    >
                      <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
