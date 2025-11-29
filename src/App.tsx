import { Hero } from "./components/Hero";
import { Accelerate } from "./components/Accelerate";
import FeatureCards from "./components/SneakPeak";
import { EmailSignup } from "./components/EmailSignup";
import { FAQ } from "./components/FAQ";
import Header from "./components/Header";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

function App() {
  
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => 1 - Math.pow(1 - t, 3), 
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
  <>
    {/* HERO SECTION - Unchanged */}
    <section className="w-full h-screen bg-[linear-gradient(to_bottom,black_0%,#421C89_40%,#a44fff_95%,black_98%)]">
         <Header />
         <Hero />
    </section>

    {/* CONTENT SECTION - "The Kinetic Void" */}
    <section className="relative w-full bg-black flex flex-col overflow-hidden py-20">
      
      {/* --- BACKGROUND LAYER START --- */}
      
      {/* 1. The Structure: Subtle Indigo Grid 
          We use a darker, purple-tinted grid (#4c1d95) at very low opacity. 
          This connects the grid to your brand color, making it feel intentional. */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none 
          bg-[linear-gradient(to_right,#4c1d952e_1px,transparent_1px),linear-gradient(to_bottom,#4c1d952e_1px,transparent_1px)] 
          bg-[size:40px_40px] 
          [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" 
      />

      {/* 2. The Liveliness: Dual Ambient Spotlights 
          We position these well below 'top-0' to ensure the seam remains black. 
          Using two colors creates a 3D atmosphere. */}
      
      {/* Left Glow: Deep Blue/Indigo for depth */}
      <div className="absolute top-[200px] left-[-10%] w-[50%] h-[500px] bg-indigo-900/40 rounded-full blur-[120px] pointer-events-none" />

      {/* Right Glow: Vibrancy (Your Brand Purple) */}
      <div className="absolute top-[350px] right-[-5%] w-[40%] h-[500px] bg-[#6d28d9]/30 rounded-full blur-[100px] pointer-events-none" />

      {/* --- BACKGROUND LAYER END --- */}


      {/* Content Wrapper - z-10 puts this physically above the background lights */}
      <div className="relative z-10 flex flex-col gap-10">
        <Accelerate />
        <FeatureCards />
        <EmailSignup />
        <FAQ />
      </div>

    </section>
  </>
  );
}

export default App;