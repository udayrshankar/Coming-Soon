import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, CheckCircle2, XCircle } from "lucide-react";
import emailjs from '@emailjs/browser';
import posthog from 'posthog-js'; 

export function EmailSignup() {
  // 1. FIX: useRef must be inside the component
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
      // Step 1: Send to Google Sheets
      // Note: Ensure your Google Script returns JSON with correct CORS headers
      const res = await fetch(SCRIPT_URL, {
        method: "POST",
        body: JSON.stringify({ email }),
      });

      // If needed, check res.ok here, though Google Scripts sometimes return 200 even on logical errors
      const result = await res.json();

      if (result.success) {
        // Step 2: Send Email via EmailJS
        // 2. FIX: We await this so we don't jump to error state prematurely
        await emailjs.sendForm(
          'service_eo8tlit', 
          'template_7q10xqb', 
          form.current!, 
          { publicKey: '9_sq3d4xHRFAJr9vY' }
        );
        posthog.capture('joined_waitlist', {
        location: 'hero_section',
        marketing_source: document.referrer // Tracks where they came from (Twitter, LinkedIn, etc.)
      });
        // 3. FIX: Only set success here
        setStatus("success");
        setEmail("");
        
      } else {
        // Handle Google Script returning { success: false }
        throw new Error("Google Script failed");
      }

    } catch (err) {
      console.error("Submission failed:", err);
      setStatus("error");
    }

    // Reset status to idle after 4 seconds (gives time to read the message)
    setTimeout(() => {
      setStatus("idle");
    }, 4000);
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
          style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: "500" }}
        >
          Be the first to know when we launch
        </h2>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="relative max-w-xl mx-auto" ref={form}>
          <motion.div
            animate={{
              boxShadow: isFocused
                ? "0 0 35px rgba(147, 51, 234, 1)"
                : "0 0 30px rgba(147, 51, 234, 0.6)", // Lower opacity when not focused
            }}
            transition={{ duration: 0.28 }}
            className="relative rounded-full mx-3"
          >
            <input
              type="email"
              name="email" // Required for EmailJS
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
              // 4. FIX: Added bg-transparent so it doesn't default to white
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

      {/* POPUP FEEDBACK */}
      <AnimatePresence>
        {status === "success" && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-6 right-6 backdrop-blur-xl bg-black/40 px-5 py-3 rounded-xl text-white flex items-center gap-2 shadow-2xl border border-green-500/50 z-50"
          >
            <CheckCircle2 className="w-5 h-5 text-green-400" />
            <span className="font-medium">You're on the list!</span>
          </motion.div>
        )}

        {status === "error" && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-6 right-6 backdrop-blur-xl bg-black/40 px-5 py-3 rounded-xl text-white flex items-center gap-2 shadow-2xl border border-red-500/50 z-50"
          >
            <XCircle className="w-5 h-5 text-red-400" />
            <span className="font-medium">Something went wrong.</span>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}