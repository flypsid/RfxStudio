"use client";

import React from "react";
import Image from "next/image";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  User,
  Smartphone,
  Linkedin,
  Facebook,
} from "lucide-react";
import { useTranslations } from "next-intl";

export default function Contact() {
  const t = useTranslations("Contact");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Logic backend would go here
  };

  return (
    <section id="contact" className="py-12 md:py-24 bg-white">
      <div className="mx-auto max-w-[1180px] px-4 xl:px-0">
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Contact Info Column */}
          <div className="flex flex-col h-full bg-slate-50 border border-slate-100 rounded-3xl p-8 md:p-10 justify-between">
            <div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-8">
                {t("offices.title")}
              </h3>

              <div className="space-y-8">
                <div>
                  <h4 className="flex items-center gap-2 font-bold text-emerald-700 mb-3">
                    <Image
                      src="https://flagcdn.com/w40/us.png"
                      width={28}
                      height={21}
                      alt="USA"
                      className="rounded-sm object-cover"
                    />
                    {t("offices.usa")}
                  </h4>
                  <div className="pl-8 space-y-1.5 text-sm md:text-base text-slate-600">
                    <p className="flex items-start gap-2">
                      <MapPin className="h-4 w-4 mt-1 text-slate-400 shrink-0" />
                      1021 E Lincolnway Suite 8794, Cheyenne, Wyoming, 82001
                    </p>
                    <p className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-slate-400" /> +1 (307)
                      412-1850
                    </p>
                    <div className="flex flex-wrap gap-4 text-xs font-medium text-slate-500 mt-2">
                      <span className="px-2 py-1 bg-white rounded border">
                        EIN: 35-2912218
                      </span>
                      <span className="px-2 py-1 bg-white rounded border">
                        D-U-N-S: 14-016-6632
                      </span>
                    </div>
                  </div>
                </div>

                <div className="h-px bg-slate-200"></div>

                <div>
                  <h4 className="flex items-center gap-2 font-bold text-emerald-700 mb-3">
                    <Image
                      src="https://flagcdn.com/w40/cm.png"
                      width={28}
                      height={21}
                      alt="Cameroun"
                      className="rounded-sm object-cover"
                    />
                    {t("offices.cameroon")}
                  </h4>
                  <div className="pl-8 space-y-1.5 text-sm md:text-base text-slate-600">
                    <p className="flex items-start gap-2">
                      <MapPin className="h-4 w-4 mt-1 text-slate-400 shrink-0" />
                      73 Rue LT0003DO5, Douala V, 21105
                    </p>
                    <p className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-slate-400" /> +237 677 349
                      448
                    </p>
                  </div>
                </div>

                <div className="h-px bg-slate-200"></div>

                <div>
                  <h4 className="flex items-center gap-2 font-bold text-emerald-700 mb-3">
                    <Image
                      src="https://flagcdn.com/w40/cg.png"
                      width={28}
                      height={21}
                      alt="Congo"
                      className="rounded-sm object-cover"
                    />
                    {t("offices.congo")}
                  </h4>
                  <div className="pl-8 space-y-1.5 text-sm md:text-base text-slate-600">
                    <p className="flex items-start gap-2">
                      <MapPin className="h-4 w-4 mt-1 text-slate-400 shrink-0" />
                      Av. du Cardinal Émile Biayenda (P6CP+XW5), Brazzaville
                    </p>
                    <p className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-slate-400" /> +242 06 692
                      8047
                    </p>
                  </div>
                </div>

                <div className="h-px bg-slate-200"></div>

                <div>
                  <h4 className="flex items-center gap-2 font-bold text-emerald-700 mb-3">
                    <Image
                      src="https://flagcdn.com/w40/ca.png"
                      width={28}
                      height={21}
                      alt="Canada"
                      className="rounded-sm object-cover"
                    />
                    {t("offices.canada")}
                  </h4>
                  <div className="pl-8 space-y-1.5 text-sm md:text-base text-slate-600">
                    <p className="flex items-start gap-2">
                      <MapPin className="h-4 w-4 mt-1 text-slate-400 shrink-0" />
                      26 Avenue de l&apos;Europe, 62250 Leulinghen-Bernes
                    </p>
                    <p className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-slate-400" /> +1 (438)
                      824-9359
                    </p>
                    <p className="flex items-center gap-2">
                      <Mail className="h-4 w-4 text-slate-400" />{" "}
                      canada@maasuh.com
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 pt-8 border-t border-slate-200">
              <div className="flex flex-col md:flex-row gap-6 md:items-center text-sm">
                <a
                  href="mailto:contact@maasuh.com"
                  className="flex items-center gap-2 text-slate-600 hover:text-emerald-600 transition-colors"
                >
                  <div className="h-8 w-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                    <Mail className="h-4 w-4" />
                  </div>
                  contact@maasuh.com
                </a>
                <a
                  href="https://x.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-slate-600 hover:text-emerald-600 transition-colors"
                >
                  <div className="h-8 w-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                    <svg
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      className="h-4 w-4 fill-current"
                    >
                      <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                    </svg>
                  </div>
                  X
                </a>
                <a
                  href="https://linkedin.com/company/maasuhllc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-slate-600 hover:text-emerald-600 transition-colors"
                >
                  <div className="h-8 w-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                    <Linkedin className="h-4 w-4" />
                  </div>
                  LinkedIn
                </a>
                <a
                  href="https://www.facebook.com/maasuhllc/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-slate-600 hover:text-emerald-600 transition-colors"
                >
                  <div className="h-8 w-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                    <Facebook className="h-4 w-4" />
                  </div>
                  Facebook
                </a>
              </div>
            </div>
          </div>

          {/* Form Column */}
          <div className="flex flex-col h-full bg-emerald-900 rounded-3xl p-8 md:p-10 text-white relative overflow-hidden">
            {/* Abstract Background Shapes */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-emerald-800 rounded-full opacity-20 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-60 h-60 bg-teal-600 rounded-full opacity-20 blur-3xl"></div>

            <div className="relative z-10 flex flex-col h-full">
              <h3 className="text-2xl font-semibold mb-2">{t("form.title")}</h3>
              <p className="text-emerald-100 mb-8 text-sm">
                {t("form.subtitle")}
              </p>

              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-4 grow"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label
                      htmlFor="name"
                      className="text-xs font-medium text-emerald-200 ml-1"
                    >
                      {t("form.name")}
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 h-5 w-5 text-emerald-700" />
                      <input
                        type="text"
                        id="name"
                        className="w-full bg-emerald-950/50 border border-emerald-800 rounded-xl px-4 py-2.5 pl-10 text-white placeholder-emerald-700/50 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all"
                        placeholder={t("form.namePlaceholder")}
                      />
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <label
                      htmlFor="phone"
                      className="text-xs font-medium text-emerald-200 ml-1"
                    >
                      {t("form.phone")}
                    </label>
                    <div className="relative">
                      <Smartphone className="absolute left-3 top-3 h-5 w-5 text-emerald-700" />
                      <input
                        type="tel"
                        id="phone"
                        className="w-full bg-emerald-950/50 border border-emerald-800 rounded-xl px-4 py-2.5 pl-10 text-white placeholder-emerald-700/50 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all"
                        placeholder={t("form.phonePlaceholder")}
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label
                    htmlFor="email"
                    className="text-xs font-medium text-emerald-200 ml-1"
                  >
                    {t("form.email")}
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-5 w-5 text-emerald-700" />
                    <input
                      type="email"
                      id="email"
                      className="w-full bg-emerald-950/50 border border-emerald-800 rounded-xl px-4 py-2.5 pl-10 text-white placeholder-emerald-700/50 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all"
                      placeholder={t("form.emailPlaceholder")}
                    />
                  </div>
                </div>

                <div className="space-y-1.5 grow flex flex-col">
                  <label
                    htmlFor="message"
                    className="text-xs font-medium text-emerald-200 ml-1"
                  >
                    {t("form.message")}
                  </label>
                  <textarea
                    id="message"
                    className="w-full grow bg-emerald-950/50 border border-emerald-800 rounded-xl px-4 py-3 text-white placeholder-emerald-700/50 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all min-h-[120px]"
                    placeholder={t("form.messagePlaceholder")}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="mt-4 w-full bg-white text-emerald-900 font-bold py-3 px-6 rounded-xl hover:bg-emerald-50 transition-colors flex items-center justify-center gap-2 group"
                >
                  {t("form.submit")}
                  <Send className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
