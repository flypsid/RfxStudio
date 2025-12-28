"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { useTranslations } from "next-intl";

type FaqKey = "integration" | "security" | "support" | "crm" | "customization";

const faqKeys: FaqKey[] = [
  "integration",
  "security",
  "support",
  "crm",
  "customization",
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const t = useTranslations("FAQ");

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-12 md:py-24 bg-slate-50">
      <div className="mx-auto max-w-[800px] px-4 md:px-0">
        <div className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-sm font-medium mb-4">
            {t("badge")}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            {t("title")}
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">{t("description")}</p>
        </div>

        <div className="space-y-4">
          {faqKeys.map((key, index) => (
            <div
              key={key}
              className={`overflow-hidden rounded-2xl border bg-white transition-all duration-300 ${
                activeIndex === index
                  ? "border-emerald-200 shadow-lg ring-1 ring-emerald-100"
                  : "border-slate-200 hover:border-emerald-100"
              }`}
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="flex w-full items-center justify-between p-6 text-left focus:outline-none"
              >
                <span className="text-lg font-semibold text-slate-900">
                  {t(`items.${key}.question`)}
                </span>
                <span
                  className={`ml-4 flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-colors ${
                    activeIndex === index
                      ? "bg-emerald-100 text-emerald-600"
                      : "bg-slate-100 text-slate-500"
                  }`}
                >
                  {activeIndex === index ? (
                    <Minus className="h-4 w-4" />
                  ) : (
                    <Plus className="h-4 w-4" />
                  )}
                </span>
              </button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="p-6 pt-0 text-slate-600 leading-relaxed border-t border-slate-100/50">
                      <div className="pt-4">{t(`items.${key}.answer`)}</div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
