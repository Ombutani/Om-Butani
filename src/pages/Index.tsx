
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import ContactForm from "@/components/ContactForm";
import Education from "@/components/Education";
import { Toaster } from "@/components/ui/toaster";

const Index = () => {
  return (
    <div className="relative min-h-screen .  bg-black ">
      <Navbar />
      <main className="pt-24 md:pt-28">
        <Hero />
        <div className="max-w-7xl mx-auto px-2">
          <Education />
          <Skills />
          <Experience />
          <Projects />
          <ContactForm />
        </div>
      </main>
      <Toaster />
      <footer className="py-8 mt-12 text-center text-gray-400 text-sm bg-white/10 dark:bg-background/40 border-t border-gray-800 shadow-glass transition-colors">
        <div className="flex flex-col md:flex-row items-center justify-between container mx-auto gap-2">
          <span>
            © {new Date().getFullYear()}{" "}
            <span className="font-bold text-gradient-primary">Om Butani</span>. All rights reserved.
          </span>
          <span>
           Make by<span className="text-primary"> ❤️ </span>Om Enterprises
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Index;
