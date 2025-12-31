"use client";

import { useTranslations } from "next-intl";
import {
  Lock,
  Database,
  FileSearch,
  Cookie,
  UserCheck,
  Shield,
  Clock,
} from "lucide-react";

export default function PrivacyPage() {
  const t = useTranslations("Privacy");

  return (
    <main className="min-h-screen bg-white pt-24 pb-16">
      <div className="mx-auto max-w-[900px] px-4">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-sm font-medium mb-6">
            <Lock className="h-4 w-4" />
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
          {/* Données collectées */}
          <section className="bg-slate-50 rounded-2xl p-6 md:p-8 border border-slate-100">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-emerald-100 rounded-lg text-emerald-600">
                <Database className="h-5 w-5" />
              </div>
              <h2 className="text-xl font-bold text-slate-900">
                {t("collection.title")}
              </h2>
            </div>
            <p className="text-slate-600 mb-4">{t("collection.content")}</p>
            <ul className="space-y-2 text-slate-600">
              <li className="flex items-start gap-2">
                <span className="text-emerald-500 mt-1">•</span>
                {t("collection.items.contact")}
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-500 mt-1">•</span>
                {t("collection.items.newsletter")}
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-500 mt-1">•</span>
                {t("collection.items.navigation")}
              </li>
            </ul>
          </section>

          {/* Utilisation des données */}
          <section className="bg-slate-50 rounded-2xl p-6 md:p-8 border border-slate-100">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-teal-100 rounded-lg text-teal-600">
                <FileSearch className="h-5 w-5" />
              </div>
              <h2 className="text-xl font-bold text-slate-900">
                {t("usage.title")}
              </h2>
            </div>
            <p className="text-slate-600 mb-4">{t("usage.content")}</p>
            <ul className="space-y-2 text-slate-600">
              <li className="flex items-start gap-2">
                <span className="text-teal-500 mt-1">•</span>
                {t("usage.items.respond")}
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal-500 mt-1">•</span>
                {t("usage.items.newsletter")}
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal-500 mt-1">•</span>
                {t("usage.items.improve")}
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal-500 mt-1">•</span>
                {t("usage.items.legal")}
              </li>
            </ul>
          </section>

          {/* Cookies */}
          <section className="bg-slate-50 rounded-2xl p-6 md:p-8 border border-slate-100">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-amber-100 rounded-lg text-amber-600">
                <Cookie className="h-5 w-5" />
              </div>
              <h2 className="text-xl font-bold text-slate-900">
                {t("cookies.title")}
              </h2>
            </div>
            <p className="text-slate-600 mb-4">{t("cookies.content")}</p>
            <ul className="space-y-2 text-slate-600">
              <li className="flex items-start gap-2">
                <span className="text-amber-500 mt-1">•</span>
                {t("cookies.types.essential")}
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-500 mt-1">•</span>
                {t("cookies.types.analytics")}
              </li>
            </ul>
          </section>

          {/* Droits RGPD */}
          <section className="bg-slate-50 rounded-2xl p-6 md:p-8 border border-slate-100">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                <UserCheck className="h-5 w-5" />
              </div>
              <h2 className="text-xl font-bold text-slate-900">
                {t("rights.title")}
              </h2>
            </div>
            <p className="text-slate-600 mb-4">{t("rights.content")}</p>
            <ul className="space-y-2 text-slate-600 mb-4">
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-1">•</span>
                {t("rights.items.access")}
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-1">•</span>
                {t("rights.items.rectification")}
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-1">•</span>
                {t("rights.items.deletion")}
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-1">•</span>
                {t("rights.items.portability")}
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-1">•</span>
                {t("rights.items.opposition")}
              </li>
            </ul>
            <p className="text-slate-600">
              {t("rights.contact")}{" "}
              <a
                href="mailto:contact@rfx.life"
                className="text-emerald-600 hover:text-emerald-700 transition-colors font-medium"
              >
                contact@rfx.life
              </a>
            </p>
          </section>

          {/* Sécurité */}
          <section className="bg-slate-50 rounded-2xl p-6 md:p-8 border border-slate-100">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-purple-100 rounded-lg text-purple-600">
                <Shield className="h-5 w-5" />
              </div>
              <h2 className="text-xl font-bold text-slate-900">
                {t("security.title")}
              </h2>
            </div>
            <p className="text-slate-600 leading-relaxed">
              {t("security.content")}
            </p>
          </section>

          {/* Conservation */}
          <section className="bg-slate-50 rounded-2xl p-6 md:p-8 border border-slate-100">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-slate-200 rounded-lg text-slate-600">
                <Clock className="h-5 w-5" />
              </div>
              <h2 className="text-xl font-bold text-slate-900">
                {t("retention.title")}
              </h2>
            </div>
            <p className="text-slate-600 leading-relaxed">
              {t("retention.content")}
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
