import { motion } from "framer-motion";

// 1. Store text in variables for cleaner mapping
const textBlock1 = "We’re building the next-generation response automation platform, our proprietary AI learns from your team’s feedback and real-time win/loss outcomes. Designed for teams who want to accelerate response times, maximize win rates, and stay ahead of compliance, all in one intuitive platform.";
const textBlock2 = "Built by GRC and Security professionals – whether you're in sales, security, legal or compliance, our adaptive AI, advanced workflows, and enterprise-grade security will become your new competitive edge.";

// 2. Define Animation Variants
const typewriterContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.01, 
      delayChildren: 0.6,   
    },
  },
};

const typewriterLetter = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export function Accelerate() {
  return (
    <section className="container mx-auto px-4 py-1 max-w-full">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="relative"
      >
        {/* Header Section */}
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-3xl md:text-4xl font-bold lg:text-5xl text-white text-center mb-6 mx-auto max-w-4xl"
          style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: "500" }}
        >
          A True Adaptive AI Learning Engine
        </motion.h2>

        {/* Typewriter Text Section */}
        <motion.div
          variants={typewriterContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          // Fix: Changed to div to allow valid <p> nesting
          className="text-gray-300 text-center text-base md:text-lg leading-relaxed max-w-5xl mx-auto space-y-4"
          style={{ fontFamily: "monospace" }}
        >
          {/* First Paragraph Loop */}
          <p>
            {textBlock1.split("").map((char, index) => (
              <motion.span key={index} variants={typewriterLetter}>
                {char}
              </motion.span>
            ))}
          </p>

          {/* Second Paragraph Loop */}
          <p>
            {textBlock2.split("").map((char, index) => (
              <motion.span 
                // We add the length of block1 to the key to ensure unique keys
                key={index + textBlock1.length} 
                variants={typewriterLetter}
              >
                {char}
              </motion.span>
            ))}
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}