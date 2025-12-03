import { motion } from "framer-motion";

export function Accelerate() {
  return (
    <section className="container mx-auto px-4 py-10 md:py-1 max-w-full">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="relative"
      >
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          // Fix: Added max-w-3xl to limit width and allow mx-auto to center it
          className="text-3xl md:text-4xl font-bold lg:text-5xl text-white text-center mb-6 mx-auto max-w-4xl"
          style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: "500" }}
        >
          A True Adaptive AI Learning Engine
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          // Fix: mx-auto applied to center the block, backgrounds removed
          className="text-gray-300 text-center md:text-center text-md md:text-lg leading-relaxed max-w-5xl mx-auto space-y-4"
          style={{fontFamily: "monospace"}}>
          
          <p>We’re building the next-generation response automation platform, 
            our proprietary AI learns from your team’s feedback and real-time win/loss outcomes. 
            Designed for teams who want to accelerate response times, maximize win rates, and stay ahead of compliance, 
            all in one intuitive platform.</p>
<p>Built by GRC and Security professionals – whether you're in sales, security, legal or compliance, our adaptive AI, advanced workflows, and enterprise-grade security will become your new competitive edge</p>

        </motion.p>
      </motion.div>
    </section>
  );
}
