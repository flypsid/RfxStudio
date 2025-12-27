import MaasuhHero from "@/components/Hero";
import About from "@/components/about";

const Home = () => {
  return (
    <main className="min-h-screen">
      <section id="hero">
        <MaasuhHero />
      </section>
      <section id="about">
        <About />
      </section>
    </main>
  );
};

export default Home;
