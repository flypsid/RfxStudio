import { createFileRoute, Outlet, notFound } from "@tanstack/react-router";
import { I18nProvider, getMessages, isValidLocale, type Locale } from "@/src/lib/i18n";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import { useEffect } from "react";

export const Route = createFileRoute("/$locale")({
  // Validate locale exists; otherwise 404
  beforeLoad: ({ params }) => {
    const locale = (params as any).locale;
    if (!isValidLocale(locale)) {
      throw notFound();
    }
  },
  head: ({ params }) => {
    const locale = (params as any).locale as Locale;
    const messages = getMessages(locale);
    const metadata = messages.Metadata as { title: string; description: string };
    return {
      meta: [
        { title: metadata.title },
        { name: "description", content: metadata.description },
        { property: "og:title", content: metadata.title },
        { property: "og:description", content: metadata.description },
      ],
      links: [
        { rel: "canonical", href: `/${locale}` },
        { rel: "alternate", hrefLang: "fr", href: "/fr" },
        { rel: "alternate", hrefLang: "en", href: "/en" },
      ],
    };
  },
  component: LocaleLayout,
});

function LocaleLayout() {
  const { locale } = Route.useParams();

  const validLocale = locale as Locale;
  const messages = getMessages(validLocale);

  useEffect(() => {
    document.documentElement.lang = validLocale;
  }, [validLocale]);

  return (
    <I18nProvider locale={validLocale} messages={messages}>
      <Navbar />
      <Outlet />
      <Footer />
      <CookieBanner />
    </I18nProvider>
  );
}
