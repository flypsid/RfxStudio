"use client";

import { useTranslations } from "next-intl";
import {
  FileText,
  Building2,
  Users,
  Server,
  Scale,
  Shield,
} from "lucide-react";

export default function LegalPage() {
  const t = useTranslations("Legal");

  return (
    <main className="min-h-screen bg-white pt-24 pb-16">
      <div className="mx-auto max-w-[900px] px-4">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-sm font-medium mb-6">
            <FileText className="h-4 w-4" />
            {t("title")}
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            {t("title")}
          </h1>
          <p className="text-slate-500">{t("lastUpdate")}: December 30, 2025</p>
        </div>

        <div className="space-y-8">
          {/* Éditeur du site */}
          <section className="bg-slate-50 rounded-2xl p-6 md:p-8 border border-slate-100">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-emerald-100 rounded-lg text-emerald-600">
                <Building2 className="h-5 w-5" />
              </div>
              <h2 className="text-xl font-bold text-slate-900">
                {t("editor.title")}
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-slate-600">
              <div>
                <p className="font-medium text-slate-800">
                  {t("editor.company")}
                </p>
                <p className="text-sm">{t("editor.form")}</p>
              </div>
              <div>
                <p className="text-sm text-slate-500">
                  {t("editor.headquarters")}
                </p>
                <p>{t("editor.address")}</p>
              </div>
              <div>
                <p className="text-sm text-slate-500">{t("editor.email")}</p>
                <a
                  href="mailto:contact@rfx.life"
                  className="text-emerald-600 hover:text-emerald-700 transition-colors"
                >
                  {t("editor.emailValue")}
                </a>
              </div>
            </div>
          </section>

          {/* Direction */}
          <section className="bg-slate-50 rounded-2xl p-6 md:p-8 border border-slate-100">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-teal-100 rounded-lg text-teal-600">
                <Users className="h-5 w-5" />
              </div>
              <h2 className="text-xl font-bold text-slate-900">
                {t("directors.title")}
              </h2>
            </div>
            <div className="text-slate-600">
              <div>
                <p className="text-sm text-slate-500">{t("directors.ceo")}</p>
                <p className="font-medium text-slate-800">
                  {t("directors.ceoName")}
                </p>
              </div>
            </div>
          </section>

          {/* Hébergement */}
          <section className="bg-slate-50 rounded-2xl p-6 md:p-8 border border-slate-100">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                <Server className="h-5 w-5" />
              </div>
              <h2 className="text-xl font-bold text-slate-900">
                {t("hosting.title")}
              </h2>
            </div>
            <div className="text-slate-600">
              <p className="font-medium text-slate-800">
                {t("hosting.provider")}
              </p>
              <p className="text-sm">{t("hosting.location")}</p>
            </div>
          </section>

          {/* Propriété intellectuelle */}
          <section className="bg-slate-50 rounded-2xl p-6 md:p-8 border border-slate-100">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-purple-100 rounded-lg text-purple-600">
                <Scale className="h-5 w-5" />
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
                <Shield className="h-5 w-5" />
              </div>
              <h2 className="text-xl font-bold text-slate-900">
                {t("liability.title")}
              </h2>
            </div>
            <p className="text-slate-600 leading-relaxed">
              {t("liability.content")}
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
