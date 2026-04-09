import Spotlight from '@/components/Spotlight';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col items-center">
      <Spotlight />
      <Navbar />
      
      <div className="w-full max-w-4xl px-6 md:px-12 relative z-10 pb-8">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Footer />
      </div>
    </main>
  );
}
