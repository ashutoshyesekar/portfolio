import Navigation from "@/components/navigation";
import HeroStatic from "@/components/hero-static";
import About from "@/components/about";
import Skills from "@/components/skills";
import Experience from "@/components/experience";
import Education from "@/components/education";
import ContactStatic from "@/components/contact-static";
import Footer from "@/components/footer";

export default function HomeStatic() {
  return (
    <div className="bg-primary-dark text-white min-h-screen">
      <Navigation />
      <main>
        <HeroStatic />
        <About />
        <Skills />
        <Experience />
        <Education />
        <ContactStatic />
      </main>
      <Footer />
    </div>
  );
}