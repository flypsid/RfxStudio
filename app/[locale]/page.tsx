import { setRequestLocale } from "next-intl/server";
import MaasuhHero from "@/components/Hero";
import About from "@/components/about";
import Solutions from "@/components/Solutions";
import Expertise from "@/components/Expertise";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function Home({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main className="min-h-screen">
      <section id="hero">
        <MaasuhHero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="solutions">
        <Solutions />
      </section>
      <section id="expertise">
        <Expertise />
      </section>
      <section id="faq">
        <FAQ />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </main>
  );
}
