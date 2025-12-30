"use client";

import { useTranslations } from "next-intl";
import {
  ScrollText,
  Target,
  Globe,
  Copyright,
  AlertTriangle,
  ExternalLink,
  RefreshCw,
  Scale,
} from "lucide-react";

export default function TermsPage() {
  const t = useTranslations("Terms");

  return (
    <main className="min-h-screen bg-white pt-24 pb-16">
      <div className="mx-auto max-w-[900px] px-4">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-sm font-medium mb-6">
            <ScrollText className="h-4 w-4" />
            {t("title")}
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            {t("title")}
          </h1>
          <p className="text-slate-500">{t("lastUpdate")}: 30 décembre 2024</p>
        </div>

        {/* Introduction */}
        <p className="text-lg text-slate-600 mb-10 text-center max-w-2xl mx-auto">
          {t("intro")}
        </p>

        <div className="space-y-8">
          {/* Objet du site */}
          <section className="bg-slate-50 rounded-2xl p-6 md:p-8 border border-slate-100">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-emerald-100 rounded-lg text-emerald-600">
                <Target className="h-5 w-5" />
              </div>
              <h2 className="text-xl font-bold text-slate-900">
                {t("object.title")}
              </h2>
            </div>
            <p className="text-slate-600 leading-relaxed">
              {t("object.content")}
            </p>
          </section>

          {/* Accès au site */}
          <section className="bg-slate-50 rounded-2xl p-6 md:p-8 border border-slate-100">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-teal-100 rounded-lg text-teal-600">
                <Globe className="h-5 w-5" />
              </div>
              <h2 className="text-xl font-bold text-slate-900">
                {t("access.title")}
              </h2>
            </div>
            <p className="text-slate-600 leading-relaxed">
              {t("access.content")}
            </p>
          </section>

          {/* Propriété intellectuelle */}
          <section className="bg-slate-50 rounded-2xl p-6 md:p-8 border border-slate-100">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-purple-100 rounded-lg text-purple-600">
                <Copyright className="h-5 w-5" />
              </div>
              <h2 className="text-xl font-bold text-slate-900">
                {t("intellectual.title")}
              </h2>
            </div>
            <p className="text-slate-600 leading-relaxed">
              {t("intellectual.content")}
            </p>
          </section>

          {/* Limitation de responsabilité */}
          <section className="bg-slate-50 rounded-2xl p-6 md:p-8 border border-slate-100">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-amber-100 rounded-lg text-amber-600">
                <AlertTriangle className="h-5 w-5" />
              </div>
              <h2 className="text-xl font-bold text-slate-900">
                {t("liability.title")}
              </h2>
            </div>
            <p className="text-slate-600 leading-relaxed">
              {t("liability.content")}
            </p>
          </section>

          {/* Liens externes */}
          <section className="bg-slate-50 rounded-2xl p-6 md:p-8 border border-slate-100">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                <ExternalLink className="h-5 w-5" />
              </div>
              <h2 className="text-xl font-bold text-slate-900">
                {t("links.title")}
              </h2>
            </div>
            <p className="text-slate-600 leading-relaxed">
              {t("links.content")}
            </p>
          </section>

          {/* Modification des CGU */}
          <section className="bg-slate-50 rounded-2xl p-6 md:p-8 border border-slate-100">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-slate-200 rounded-lg text-slate-600">
                <RefreshCw className="h-5 w-5" />
              </div>
              <h2 className="text-xl font-bold text-slate-900">
                {t("modification.title")}
              </h2>
            </div>
            <p className="text-slate-600 leading-relaxed">
              {t("modification.content")}
            </p>
          </section>

          {/* Droit applicable */}
          <section className="bg-slate-50 rounded-2xl p-6 md:p-8 border border-slate-100">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-rose-100 rounded-lg text-rose-600">
                <Scale className="h-5 w-5" />
              </div>
              <h2 className="text-xl font-bold text-slate-900">
                {t("law.title")}
              </h2>
            </div>
            <p className="text-slate-600 leading-relaxed">{t("law.content")}</p>
          </section>
        </div>
      </div>
    </main>
  );
}
