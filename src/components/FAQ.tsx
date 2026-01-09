import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { useEffect } from "react";
import { PopupModal } from 'react-calendly';

const faqs = [
  {
    question: "What is Anseru and who is it for?",
    answer:
      "Anseru is an AI agentic platform orchestrating an intelligent agent workflow that automates research, builds justified answers, enforces compliance rules, collaborates with your team, and delivers auditable RFP responses. Our AI completes RFXs and Vendor Security Assessment Questionnaires using responses grounded only in your knowledge base. Agents draft review-ready artifacts, highlight key risks, and collaborate with security, sales, compliance, legal, operations, and product teams that handle vendor questionnaires every day.",
  },

  {
    question: "Can we join an early pilot program?",
    answer:
      "Yes. During pilot onboarding, our platform connects to your designated knowledge sources and drafts responses to your RFx and VSAQs. Early adopters participate in controlled pilots, receive implementation support, and enjoy pilot discounts.",
  },

];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(-1);
  const [isopen, setIsOpen] = useState(false);
    const [rootElement, setRootElement] = useState<HTMLElement | null>(null);
  
    useEffect(() => {
      // FIX: Mount to body instead of 'root' to avoid z-index wars with your header
      if (typeof window !== "undefined") {
        setRootElement(document.body);
      }
    }, []);

  return (
    <section className="container mx-auto px-4 py-5 max-w-6xl">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold lg:text-5xl text-white text-center mb-6 mx-auto max-w-6xl"
        style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: "500" }}
      >
        Frequently Asked Questions (FAQ)
      </motion.h2>

      <div className="space-y-4 max-w-3xl mx-auto">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="group"
          >
            <motion.div
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.2 }}
              className="relative overflow-hidden rounded-2xl"
            >
              {/* Animated gradient border */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(147,51,234,0.5), rgba(236,72,153,0.5), rgba(147,51,234,0.5))",
                  backgroundSize: "200% 100%",
                }}
                animate={{
                  backgroundPosition: ["0% 0%", "100% 0%", "0% 0%"],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />

              <div className="relative p-5 bg-purple-900/30 backdrop-blur-sm border border-purple-500/30 rounded-2xl overflow-hidden">
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className="w-full text-left flex items-center justify-between gap-4 group-hover:bg-purple-900/20 transition-colors duration-300"
                >
                  <span className="text-white text-sm md:text-base pr-4">
                    {faq.question}
                  </span>

                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.5, type: "tween" }}
                    className="shrink-0"
                  >
                    {openIndex === index ? (
                      <Minus className="w-5 h-5 md:w-6 md:h-6 text-purple-300" />
                    ) : (
                      <Plus className="w-5 h-5 md:w-6 md:h-6 text-purple-300" />
                    )}
                  </motion.div>
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <motion.div
                        initial={{ y: -10 }}
                        animate={{ y: 0 }}
                        exit={{ y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="px-6 md:px-8 py-10 md:pb-6 text-gray-300 text-sm md:text-base leading-relaxed"
                      >
                        {faq.answer}
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
      <div className="space-y-4 max-w-3xl mx-auto">
          <motion.div
            key={-1}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 3 * 0.1 }}
            className="group"
          >
            <motion.div
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.2 }}
              className="relative overflow-hidden rounded-2xl"
            >
              {/* Animated gradient border */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(147,51,234,0.5), rgba(236,72,153,0.5), rgba(147,51,234,0.5))",
                  backgroundSize: "200% 100%",
                }}
                animate={{
                  backgroundPosition: ["0% 0%", "100% 0%", "0% 0%"],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />

              <div className="relative p-5 bg-purple-900/30 backdrop-blur-sm border border-purple-500/30 rounded-2xl overflow-hidden">
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === -1 ? null : -1)
                  }
                  className="w-full text-left flex items-center justify-between gap-4 group-hover:bg-purple-900/20 transition-colors duration-300"
                >
                  <span className="text-white text-sm md:text-base pr-4">
                    How can I get in touch or request an NDA?
                  </span>

                  <motion.div
                    animate={{ rotate: openIndex === -1 ? 180 : 0 }}
                    transition={{ duration: 0.5, type: "tween" }}
                    className="shrink-0"
                  >
                    {openIndex === -1 ? (
                      <Minus className="w-5 h-5 md:w-6 md:h-6 text-purple-300" />
                    ) : (
                      <Plus className="w-5 h-5 md:w-6 md:h-6 text-purple-300" />
                    )}
                  </motion.div>
                </button>

                <AnimatePresence>
                  {openIndex === -1 && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <motion.div
                        initial={{ y: -10 }}
                        animate={{ y: 0 }}
                        exit={{ y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="px-6 md:px-8 py-10 md:pb-6 text-gray-300 text-sm md:text-base leading-relaxed"
                      >
                       Our team will guide you on activating the right agents and formal associations, including NDAs and security reviews. Email <a className="text-white underline" href="mailto:kg.goutham@anseru.ai">kg.goutham@anseru.ai</a> or click <button className="font-bold" onClick={() => setIsOpen(true)}>Book a Call</button> to discuss how drafting agents can be mapped to your sales, security, compliance, and business workflows.
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </motion.div>
          <PopupModal
        url="https://calendly.com/kg-goutham-anseru/30min"
        onModalClose={() => setIsOpen(false)}
        open={isopen}
        rootElement={rootElement!}

        pageSettings={{
            backgroundColor: "1a1a1a",
            hideEventTypeDetails: false,
            hideLandingPageDetails: true,
            primaryColor: "00a2ff",    
            textColor: "ffffff"      
        }}
      />
      </div>
    </section>
  );
}
