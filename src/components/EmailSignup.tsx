import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, CheckCircle2, XCircle } from "lucide-react";

export function EmailSignup() {
  const [email, setEmail] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  // Replace with your Google Script URL
  const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwQEbT9FYODJuX-NfbNWOTZB9ZyjXMY0VOpdyTe3YMs6GJJE8h5fUiE82_vT1poqSE5/exec";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setStatus("loading");

    try {
      const res = await fetch(SCRIPT_URL, {
        method: "POST",
        body: JSON.stringify({ email }),
      });

      const result = await res.json();

      if (result.success) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }

    setTimeout(() => {
      setStatus("idle");
    }, 2500);
  };

  return (
    <section className="container mx-auto px-4 py-10 md:py-10 max-w-5xl relative">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h2
          className="text-3xl md:text-4xl font-bold lg:text-5xl text-white text-center mb-6 mx-auto max-w-full"
          style={{ fontFamily: "'Roboto', sans-serif" }}
        >
          Be the first to know when we launch
        </h2>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="relative max-w-xl mx-auto">
          <motion.div
            animate={{
              boxShadow: isFocused
                ? "0 0 35px rgba(147, 51, 234, 1)"
                : "0 0 30px rgba(147, 51, 234, 0.4)",
            }}
            transition={{ duration: 0.28 }}
            className="relative rounded-full"
          >
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

            <motion.button
              type="submit"
              disabled={status === "loading"}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="
                absolute right-1 top-1/2 -translate-y-1/2
                flex items-center justify-center
                w-10 h-10 md:w-12 md:h-12
                rounded-full text-black
                bg-white/80 hover:bg-purple-600 hover:text-white
                transition-all duration-300
                p-0 m-0 leading-none
              "
            >
              {status === "loading" ? (
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
                  className="border-2 border-t-transparent border-purple-600 rounded-full w-5 h-5"
                />
              ) : (
                <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
              )}
            </motion.button>
          </motion.div>
        </form>

        {/* Subtext */}
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

      {/* POPUP FEEDBACK (Success / Error) */}
      <AnimatePresence>
        {status === "success" && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-6 right-6 backdrop-blur-xl px-5 py-3 rounded-xl text-white flex items-center gap-2 shadow-xl border border-green-300/20 z-50"
          >
            <CheckCircle2 className="w-5 h-5" />
            <span>Email Submitted</span>
          </motion.div>
        )}

        {status === "error" && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-6 right-6 backdrop-blur-xl px-5 py-3 rounded-xl text-white flex items-center gap-2 shadow-xl border border-red-300/20"
          >
            <XCircle className="w-5 h-5" />
            <span>Something went wrong.</span>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
