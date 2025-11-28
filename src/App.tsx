
import { Hero } from "./components/Hero";
import { Accelerate } from "./components/Accelerate";
import { SneakPeak } from "./components/SneakPeak";
import { EmailSignup } from "./components/EmailSignup";
import { FAQ } from "./components/FAQ";
import { Header } from "./components/Header";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

function App() {
  
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,      // Smoothness: higher = slower
      easing: (t) => 1 - Math.pow(1 - t, 3), // Ease-out cubic
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
    
<section className="w-full h-screen bg-[linear-gradient(to_bottom,black_0%,#421C89_40%,#a44fff_95%,black_98%)]"
>         <Header />
           <Hero />
    </section>
    <section className="bg-linear-to-b from-black to bg-[#432378] flex flex-col">
      <Accelerate />
      <SneakPeak />
      <EmailSignup />
      <FAQ />
    </section>
    </>
  );
}

export default App;
