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
          className="text-3xl md:text-4xl font-bold lg:text-5xl text-white text-center mb-2 mx-auto max-w-4xl"
          style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: "500" }}
        >
          Meet Your AI Workforce
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          // Fix: Added max-w-3xl to limit width and allow mx-auto to center it
          className="text-[#ababab] text-center md:text-center text-md md:text-[16px] leading-relaxed max-w-6xl mx-auto space-y-4 mb-6"
          style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: "500" }}
        >
          Powered by AI Agents built for autonomous triage, response drafting and collaboration
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          // Fix: mx-auto applied to center the block, backgrounds removed
          className="text-gray-300 text-center md:text-center text-md md:text-[16px] leading-relaxed max-w-6xl mx-auto space-y-4"
          style={{fontFamily: "monospace"}}>
          
          We're building next-generation AI Agents that define how enterprise teams respond to RFx’s and Security Questionnaires. <br/><br/>
The agents autonomously work from your approved knowledge base and past submissions to draft RFx and VSAQ responses, flag response gaps, and route items to the right owners for human-in-the loop approval.<br/><br/>
Every response strengthens company memory, ensuring evidence-backed, traceable, and consistent submissions delivered with AI precision at business speed while reducing expert dependency.



        </motion.p>
      </motion.div>
    </section>
  );
}
