import { motion } from "framer-motion";
import { Countdown } from "./Countdown";
import { ChevronDown } from "lucide-react";
import gradient from "../assets/Group 339.png";
import { ParallaxMotion } from "./Parallax";

export function Hero() {
  return (
    <section className="max-w-full py-12 text-center">
      {/* COMING SOON Background Text */}
      <div className="absolute inset-0 bottom-0 flex items-center justify-center overflow-hidden pointer-events-none">
        <ParallaxMotion speed={-300}>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 0.1, y: 0 }}
            transition={{ duration: 2, delay: 1 }}
            className="text-[10rem] md:text-[20rem] lg:text-[35rem] tracking-tight select-none text-white translate-y-70 md:translate-y-45"
            style={{ lineHeight: 0.8, fontFamily: "'Six Caps', sans-serif" }}
          >
            COMING SOON
          </motion.div>
        </ParallaxMotion>
      </div>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="
          relative z-10
          -translate-y-20   /* mobile: higher */
          lg:translate-y-5  /* laptops/desktops (same as original look) */
        "
      >
        <h1
          className="mb-4 md:mb-6"
          style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: "500" }}
        >
          <span className="block text-white text-4xl lg:text-7xl">
            Revolutionizing
          </span>
          <span className="block text-white text-4xl lg:text-7xl">
            Response Automation
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-gray-300 text-sm md:text-base max-w-2xl mx-auto mb-8 md:mb-12 px-4"
        >
          Unlock the future with smart, secure, AI-powered response management
          system Goodbye man hours. Hello automation.
        </motion.p>

        <Countdown />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          transition={{
            duration: 0.8,
            delay: 1.5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="mt-12 md:mt-16"
        >
          <ChevronDown className="rounded-full bg-white/40 w-8 h-8 mx-auto text-purple-300 -translate-y-7 md:translate-y-9" />
        </motion.div>
      </motion.div>

      <img
        src={gradient}
        className="w-full object-cover object-top absolute bottom-0 md:bottom-0 left-0 z-2"
        alt=""
      />
    </section>
  );
}
