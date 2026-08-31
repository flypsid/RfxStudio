import React, { useState } from "react";
import { Linkedin, Github, ArrowRight, Loader2 } from "lucide-react";
import { useTranslations, useLocale } from "@/src/lib/i18n";
import { Link } from "@tanstack/react-router";
import { subscribeNewsletterFn } from "@/src/lib/serverFns";
import { toast } from "sonner";

export default function Footer() {
  const t = useTranslations("Footer");
  const locale = useLocale();
  const [isPending, setIsPending] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsPending(true);
    const formData = new FormData(e.currentTarget);
    const email = String(formData.get("email") || "");
    try {
      const result = await subscribeNewsletterFn({ data: { email } });
      if (result.success) {
        toast.success(result.message || "Subscribed!");
        (e.target as HTMLFormElement).reset();
      } else {
        toast.error(result.message || "Subscription failed.");
      }
    } catch {
      toast.error("Subscription failed.");
    } finally {
      setIsPending(false);
    }
  };

  return (
    <footer className="bg-slate-900 pt-16 pb-8 text-slate-400">
      <div className="mx-auto max-w-[1180px] px-4 xl:px-0">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4 lg:gap-8 mb-16">
          <div className="md:col-span-1">
            <Link to="/$locale" params={{ locale }} className="flex items-center gap-2 mb-6">
              <img
                src="/images/Rfxstudio.png"
                alt="Rfx Studio"
                width={180}
                height={60}
                className="h-12 w-auto object-contain"
              />
            </Link>
            <p className="text-sm leading-relaxed mb-6">{t("tagline")}</p>
            <div className="flex gap-4">
              <a
                href="https://github.com/flypsid"
                target="_blank"
                rel="noopener noreferrer"
                className="h-8 w-8 flex items-center justify-center rounded-full bg-slate-800 hover:bg-emerald-600 hover:text-white transition-all text-slate-400"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href="https://twitter.com/flypsid"
                target="_blank"
                rel="noopener noreferrer"
                className="h-8 w-8 flex items-center justify-center rounded-full bg-slate-800 hover:bg-emerald-600 hover:text-white transition-all text-slate-400"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current">
                  <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                </svg>
              </a>
              <a
                href="https://linkedin.com/in/flypsid"
                target="_blank"
                rel="noopener noreferrer"
                className="h-8 w-8 flex items-center justify-center rounded-full bg-slate-800 hover:bg-emerald-600 hover:text-white transition-all text-slate-400"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">{t("solutions")}</h4>
            <ul className="space-y-4 text-sm">
              <li>
                <a href="https://viralis.media/" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors">
                  {t("solutionsLinks.viralis")}
                </a>
              </li>
              <li>
                <a href="https://resume.rfx.life/" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors">
                  {t("solutionsLinks.resumeiq")}
                </a>
              </li>
              <li>
                <a href="#solutions" className="hover:text-emerald-400 transition-colors">
                  {t("solutionsLinks.fusepay")}
                </a>
              </li>
              <li>
                <a href="#solutions" className="hover:text-emerald-400 transition-colors">
                  {t("solutionsLinks.fiscally")}
                </a>
              </li>
              <li>
                <a href="#solutions" className="hover:text-emerald-400 transition-colors">
                  {t("solutionsLinks.tripmind")}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">{t("company")}</h4>
            <ul className="space-y-4 text-sm">
              <li>
                <a href="#about" className="hover:text-emerald-400 transition-colors">
                  {t("companyLinks.about")}
                </a>
              </li>
              <li>
                <a href="#expertise" className="hover:text-emerald-400 transition-colors">
                  {t("companyLinks.expertise")}
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-emerald-400 transition-colors">
                  {t("companyLinks.contact")}
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-emerald-400 transition-colors">
                  {t("companyLinks.faq")}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">{t("newsletter.title")}</h4>
            <p className="text-sm mb-4">{t("newsletter.description")}</p>
            <form onSubmit={handleSubmit} className="flex flex-col gap-2">
              <input
                type="email"
                name="email"
                required
                disabled={isPending}
                placeholder={t("newsletter.placeholder")}
                className="bg-slate-800 border-slate-700 text-white placeholder-slate-500 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-emerald-500 border disabled:opacity-50"
              />
              <button
                type="submit"
                disabled={isPending}
                className="bg-emerald-600 text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-emerald-700 transition-colors flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isPending ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <>
                    {t("newsletter.subscribe")}
                    <ArrowRight className="h-4 w-4" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <div>
            &copy; {new Date().getFullYear()} {t("copyright")}
          </div>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            <Link to="/$locale/legal" params={{ locale }} className="hover:text-emerald-400 transition-colors">
              {t("legal")}
            </Link>
            <Link to="/$locale/privacy" params={{ locale }} className="hover:text-emerald-400 transition-colors">
              {t("privacy")}
            </Link>
            <Link to="/$locale/terms" params={{ locale }} className="hover:text-emerald-400 transition-colors">
              {t("terms")}
            </Link>
            <a
              href="https://rfx.life"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-emerald-400 transition-colors basis-full sm:basis-auto justify-center sm:justify-start"
              title="Développement Web & IA"
            >
              {t("builtBy")}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
