import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";

export function EmailSignup() {
  const form = useRef<HTMLFormElement>(null);
  
  const [email, setEmail] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

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
        throw new Error("Google Script failed");
      }

    } catch (err) {
      console.error("Submission failed:", err);
      setStatus("error");
    }
  };

  return (
    <section className="container mx-auto px-4 py-10 md:py-10 max-w-5xl relative">
      {/* --- INTRO & FORM SECTION --- */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h2
          className="text-3xl md:text-4xl font-bold lg:text-5xl text-white text-center mb-6 mx-auto max-w-full"
          style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: "500" }}
        >
          Be the first to know when we launch
        </h2>

        <form onSubmit={handleSubmit} className="relative max-w-xl mx-auto" ref={form}>
          <motion.div
            animate={{
              boxShadow: isFocused
                ? "0 0 35px rgba(147, 51, 234, 1)"
                : "0 0 30px rgba(147, 51, 234, 0.6)",
            }}
            transition={{ duration: 0.28 }}
            className="relative rounded-full mx-3"
          >
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              placeholder="Enter Email"
              className="
                w-full border-2 
                bg-transparent 
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
                absolute right-2 top-1/2 -translate-y-1/2 translate-x-1
                flex items-center justify-center
                w-10 h-10 md:w-12 md:h-12
                rounded-full text-black
                bg-white/90 hover:bg-purple-600 hover:text-white
                transition-all duration-300
                shadow-lg
              "
            >
              {status === "loading" ? (
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    repeat: Infinity,
                    duration: 1,
                    ease: "linear",
                  }}
                  className="border-2 border-t-transparent border-purple-600 rounded-full w-5 h-5"
                />
              ) : (
                <ChevronRight className="w-5 h-5" />
              )}
            </motion.button>
          </motion.div>
        </form>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-gray-400 italic text-xs md:text-sm mt-4"
        >
          Join our waitlist and get exclusive early access
        </motion.p>
      </motion.div>

      {/* --- FULL SCREEN MODAL / POPUP --- */}
      <AnimatePresence>
        {(status === "success" || status === "error") && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
            
            {/* 1. THE BACKDROP */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setStatus("idle")}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />

            {/* 2. THE SUCCESS CARD (Clean Version) */}
            {status === "success" && (
              <motion.div
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                transition={{ type: "spring", duration: 0.5 }}
                className="relative w-full max-w-[380px] rounded-[20px] border border-white/20 backdrop-blur-xl bg-[#6e26a8]/20 overflow-hidden shadow-[0_0_40px_rgba(110,38,168,0.3)]"
              >
                {/* Purple Background Glow */}
                <div className="absolute inset-0 -z-10 blur-3xl opacity-40 bg-[#6e26a8]" />

                <div className="flex flex-col h-full p-6 text-left">
                  {/* Top Bar: Status */}
                  <div className="flex items-center gap-3 mb-8 border-b border-white/10 pb-4">
                    <motion.div
                      animate={{ opacity: [1, 0.4, 1] }}
                      transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                      className="w-3 h-3 rounded-full bg-[#00ff00] shadow-[0_0_10px_#00ff00]"
                    />
                    <span className="font-mono text-xs tracking-[0.2em] text-white/80">
                      SPOT SECURED
                    </span>
                  </div>

                  {/* Main Content */}
                  <div className="mb-10 space-y-2">
                    <h2 className="text-4xl font-bold text-white tracking-tight">All Set.</h2>
                    <p className="text-white/70 text-sm leading-relaxed font-light">
                      Your spot is saved. We’ll send you exclusive updates as we gear up for launch.
                    </p>
                  </div>

                  {/* Footer: Serial Only */}
                  <div className="mt-auto border-t border-white/10 pt-4">
  
                  </div>
                </div>
              </motion.div>
            )}

            {/* 3. THE ERROR CARD (Clean Version) */}
            {status === "error" && (
              <motion.div
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                transition={{ type: "spring", duration: 0.5 }}
                className="relative w-full max-w-[380px] rounded-[20px] border border-white/20 backdrop-blur-xl bg-red-900/20 overflow-hidden shadow-[0_0_40px_rgba(239,68,68,0.3)]"
              >
                 {/* Red Background Glow */}
                 <div className="absolute inset-0 -z-10 blur-3xl opacity-40 bg-red-600" />

                <div className="flex flex-col h-full p-6 text-left">
                  <div className="flex items-center gap-3 mb-8 border-b border-white/10 pb-4">
                    <motion.div
                      animate={{ opacity: [1, 0, 1] }}
                      transition={{ repeat: Infinity, duration: 0.2 }}
                      className="w-3 h-3 rounded-full bg-red-500 shadow-[0_0_10px_#ef4444]"
                    />
                    <span className="font-mono text-xs tracking-[0.2em] text-red-200/80">
                      CONNECTION FAILED
                    </span>
                  </div>

                  <div className="mb-10 space-y-2">
                    <h2 className="text-4xl font-bold text-white tracking-tight">Access Denied.</h2>
                    <p className="text-white/70 text-sm leading-relaxed font-light">
                      We couldn't save your spot. Please check your internet connection and try again.
                    </p>
                  </div>

                   <div className="mt-auto border-t border-white/10 pt-4 opacity-50">
                    <div className="text-[10px] font-mono text-red-300/40 tracking-widest">
                      ERR::404::FAIL
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}