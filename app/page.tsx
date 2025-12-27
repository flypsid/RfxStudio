import MaasuhHero from "@/components/Hero";
import About from "@/components/about";
import Solutions from "@/components/Solutions";
import Expertise from "@/components/Expertise";
import FAQ from "@/components/FAQ";

const Home = () => {
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
    </main>
  );
};

export default Home;
