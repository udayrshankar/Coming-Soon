import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

export function EmailSignup() {
  const [email, setEmail] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email submitted:", email);
  };

  return (
    <section className="container mx-auto px-4 py-16 md:py-24 max-w-5xl">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold lg:text-5xl text-white text-center mb-6 mx-auto max-w-full" style={{fontFamily: "'Roboto', sans-serif"}}>
          Be the first to know when we launch
        </h2>

        <form onSubmit={handleSubmit} className="relative max-w-xl mx-auto">
          <motion.div
            animate={{
              boxShadow: isFocused
                ? "0 0 30px rgba(147, 51, 234, 0.45)"
                : "0 0 0px rgba(147, 51, 234, 0)",
            }}
            transition={{ duration: 0.28 }}
            className="relative rounded-full"
          >
            {/* INPUT */}
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              placeholder="Enter Email"
              className="
                w-full border-2
                rounded-full px-6 md:px-8 py-3 md:py-4
                pr-16 md:pr-20
                text-white placeholder:text-gray-400
                outline-none border-purple-400
                transition-colors duration-300
              "
            />

            {/* FIXED PERFECT CIRCLE BUTTON */}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="
                absolute right-1 top-1/2 -translate-y-1/2
                flex items-center justify-center
                w-10 h-10 md:w-12 md:h-12
                rounded-full text-black
                bg-white/80 hover:bg-purple-600 hover:text-white
                transition-all duration-300
                appearance-none         
                p-0 m-0               
                leading-none
              "
            >
              <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
            </motion.button>
          </motion.div>
        </form>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-gray-400 text-xs md:text-sm mt-4"
        >
          Join our waitlist and get exclusive early access
        </motion.p>
      </motion.div>
    </section>
  );
}
