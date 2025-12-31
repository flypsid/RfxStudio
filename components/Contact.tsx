"use client";

import React, { useActionState, useEffect } from "react";
import Image from "next/image";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  User,
  Smartphone,
  Linkedin,
  Github,
  Loader2,
} from "lucide-react";
import { useTranslations } from "next-intl";
import { submitContactForm } from "@/lib/actions";
import { toast } from "sonner";

const initialState = {
  success: false,
  message: "",
  errors: {},
};

export default function Contact() {
  const t = useTranslations("Contact");
  const [state, formAction, isPending] = useActionState(
    submitContactForm,
    initialState
  );

  useEffect(() => {
    if (state.message) {
      if (state.success) {
        toast.success(state.message);
      } else {
        toast.error(state.message);
      }
    }
  }, [state]);

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
                      src="https://flagcdn.com/w40/cm.png"
                      width={28}
                      height={21}
                      alt="Cameroon"
                      className="rounded-sm object-cover"
                    />
                    {t("offices.cameroon")}
                  </h4>
                  <div className="pl-8 space-y-1.5 text-sm md:text-base text-slate-600">
                    <p className="flex items-start gap-2">
                      <MapPin className="h-4 w-4 mt-1 text-slate-400 shrink-0" />
                      12 Boulevard Omnispore, Yaounde, Cameroon
                    </p>
                    <p className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-slate-400" /> +237 6 96 27
                      52 99
                    </p>
                  </div>
                </div>

                <div className="h-px bg-slate-200"></div>

                <div>
                  <h4 className="flex items-center gap-2 font-bold text-emerald-700 mb-3">
                    <Image
                      src="https://flagcdn.com/w40/ae.png"
                      width={28}
                      height={21}
                      alt="Dubai"
                      className="rounded-sm object-cover"
                    />
                    {t("offices.dubai")}
                  </h4>
                  <div className="pl-8 space-y-1.5 text-sm md:text-base text-slate-600">
                    <p className="flex items-start gap-2">
                      <MapPin className="h-4 w-4 mt-1 text-slate-400 shrink-0" />
                      Business Bay, Tower 1, Dubai, UAE
                    </p>
                    <p className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-slate-400" /> +971 4 301
                      6560
                    </p>
                  </div>
                </div>

                <div className="h-px bg-slate-200"></div>

                <div>
                  <h4 className="flex items-center gap-2 font-bold text-emerald-700 mb-3">
                    <Image
                      src="https://flagcdn.com/w40/sg.png"
                      width={28}
                      height={21}
                      alt="Singapore"
                      className="rounded-sm object-cover"
                    />
                    {t("offices.singapore")}
                  </h4>
                  <div className="pl-8 space-y-1.5 text-sm md:text-base text-slate-600">
                    <p className="flex items-start gap-2">
                      <MapPin className="h-4 w-4 mt-1 text-slate-400 shrink-0" />
                      1 Raffles Place, Tower 2, Singapore 048616
                    </p>
                    <p className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-slate-400" /> +65 6688 8660
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 pt-8 border-t border-slate-200">
              <div className="flex flex-col md:flex-row gap-6 md:items-center text-sm">
                <a
                  href="mailto:contact@rfx.life"
                  className="flex items-center gap-2 text-slate-600 hover:text-emerald-600 transition-colors"
                >
                  <div className="h-8 w-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                    <Mail className="h-4 w-4" />
                  </div>
                  contact@rfx.life
                </a>
                <a
                  href="https://github.com/flypsid"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-slate-600 hover:text-emerald-600 transition-colors"
                >
                  <div className="h-8 w-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                    <Github className="h-4 w-4" />
                  </div>
                  GitHub
                </a>
                <a
                  href="https://twitter.com/flypsid"
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
                  href="https://linkedin.com/in/flypsid"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-slate-600 hover:text-emerald-600 transition-colors"
                >
                  <div className="h-8 w-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                    <Linkedin className="h-4 w-4" />
                  </div>
                  LinkedIn
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

              <form action={formAction} className="flex flex-col gap-4 grow">
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
                        name="name"
                        id="name"
                        required
                        disabled={isPending}
                        className="w-full bg-emerald-950/50 border border-emerald-800 rounded-xl px-4 py-2.5 pl-10 text-white placeholder-emerald-700/50 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all disabled:opacity-50"
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
                        name="phone"
                        id="phone"
                        disabled={isPending}
                        className="w-full bg-emerald-950/50 border border-emerald-800 rounded-xl px-4 py-2.5 pl-10 text-white placeholder-emerald-700/50 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all disabled:opacity-50"
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
                      name="email"
                      id="email"
                      required
                      disabled={isPending}
                      className="w-full bg-emerald-950/50 border border-emerald-800 rounded-xl px-4 py-2.5 pl-10 text-white placeholder-emerald-700/50 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all disabled:opacity-50"
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
                    name="message"
                    id="message"
                    required
                    disabled={isPending}
                    className="w-full grow bg-emerald-950/50 border border-emerald-800 rounded-xl px-4 py-3 text-white placeholder-emerald-700/50 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all min-h-[120px] disabled:opacity-50"
                    placeholder={t("form.messagePlaceholder")}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isPending}
                  className="mt-4 w-full bg-white text-emerald-900 font-bold py-3 px-6 rounded-xl hover:bg-emerald-50 transition-all flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isPending ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                    </>
                  ) : (
                    <>
                      {t("form.submit")}
                      <Send className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
