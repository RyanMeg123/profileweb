import fs from 'node:fs';
import path from 'node:path';
import Spotlight from '@/components/Spotlight';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Footer from '@/components/Footer';

const PORTRAIT_CANDIDATES = ['resume.png', 'profile-photo.jpg'];

function getPortraitSrc() {
  const file = PORTRAIT_CANDIDATES.find((name) =>
    fs.existsSync(path.join(process.cwd(), 'public', name))
  );
  return file ? `/${file}` : undefined;
}

export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col items-center">
      <Spotlight />
      <Navbar />
      
      <div className="w-full max-w-4xl px-6 md:px-12 relative z-10 pb-8">
        <Hero portraitSrc={getPortraitSrc()} />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Footer />
      </div>
    </main>
  );
}
