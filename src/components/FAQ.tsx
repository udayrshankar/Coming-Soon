import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: 'What is this platform and who is it for?',
    answer: "It's an upcoming response automation solution for sales, procurement, operations, legal, and compliance professionals who regularly respond to, or create, complex RFPs, RFIs & Security Questionnaires.",
  },
  {
    question: 'When will the platform officially launch?',
    answer: "We're finalizing the last details and will announce the launch date soon. Sign up to get notified as soon as it goes live!",
  },
  {
    question: 'How can I get early access or join the beta?',
    answer: 'Simply sign up with your email. Early registrants will receive invitations for beta testing, feature previews, and feedback opportunities.',
  },
  {
    question: 'Will there be special launch offers or pricing?',
    answer: 'Yes! Early sign-ups will receive exclusive launch discounts and priority onboarding assistance.',
  },
  {
    question: 'How is my email and data handled during signup?',
    answer: 'We will only use your contact details for launch and product updates. Your information is kept secure and private—no spam or sharing.',
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(-1);

  return (
    <section className="container mx-auto px-4 py-5 max-w-3xl">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold lg:text-5xl text-white text-center mb-6 mx-auto max-w-3xl" style={{fontFamily: "'Roboto', sans-serif"}}
      >
        Frequently Asked Questions
      </motion.h2>

      <div className="space-y-4">
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
                  background: 'linear-gradient(90deg, rgba(147,51,234,0.5), rgba(236,72,153,0.5), rgba(147,51,234,0.5))',
                  backgroundSize: '200% 100%',
                }}
                animate={{
                  backgroundPosition: ['0% 0%', '100% 0%', '0% 0%'],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              
              <div className="relative p-5 bg-purple-900/30 backdrop-blur-sm border border-purple-500/30 rounded-2xl overflow-hidden">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
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
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <motion.div
                        initial={{ y: -10 }}
                        animate={{ y: 0 }}
                        exit={{ y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="px-6 md:px-8 py-5 md:pb-6 text-gray-300 text-sm md:text-base leading-relaxed"
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
    </section>
  );
}
