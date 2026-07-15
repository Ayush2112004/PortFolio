import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, ShieldAlert } from "lucide-react";

export const Contact = () => {
  const [focused, setFocused] = useState<string | null>(null);



  return (
    <section className="relative py-32 overflow-hidden" id="contact">
      <div className="max-w-4xl mx-auto px-6 relative z-10">

        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-4 mb-4 text-[var(--primary-accent)]"
          >
            <ShieldAlert size={28} />
            <h2 className="text-3xl md:text-5xl font-display font-bold text-[var(--text-primary)]">
              SECURE_CONNECTION
            </h2>
          </motion.div>
          <p className="text-[var(--text-secondary)] font-mono text-sm max-w-md mx-auto">
            Establish a direct neural link. All communications are encrypted end-to-end.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass p-8 md:p-12 rounded-2xl relative"
        >
          {/* Animated scanning line */}
          <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
            <motion.div
              className="w-full h-1 bg-[var(--primary-accent)]/30 blur-sm absolute top-0"
              animate={{ y: ["0%", "1000%"] }}
              transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
            />
          </div>

          <form action="https://formsubmit.co/ayushrathi125@gmail.com" method="POST" className="relative z-10 flex flex-col gap-6">
            {/* FormSubmit Configuration */}
            <input type="hidden" name="_subject" value="New Mission Log from AI-OS Portfolio!" />
            <input type="hidden" name="_template" value="box" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value={typeof window !== 'undefined' ? window.location.href : ''} />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative">
                <label className="font-mono text-xs text-[var(--text-secondary)] mb-2 block uppercase tracking-wider">
                  Identification
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  onFocus={() => setFocused("name")}
                  onBlur={() => setFocused(null)}
                  className="w-full bg-[var(--background)] border border-[var(--text-secondary)]/30 rounded-lg px-4 py-3 text-[var(--text-primary)] focus:outline-none focus:border-[var(--primary-accent)] focus:shadow-[0_0_15px_rgba(0,245,160,0.2)] transition-all duration-300"
                  placeholder="Enter Name"
                />
                {focused === "name" && <div className="absolute right-3 top-[38px] w-2 h-2 rounded-full bg-[var(--primary-accent)] animate-pulse" />}
              </div>
              <div className="relative">
                <label className="font-mono text-xs text-[var(--text-secondary)] mb-2 block uppercase tracking-wider">
                  Comm_Address
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  onFocus={() => setFocused("email")}
                  onBlur={() => setFocused(null)}
                  className="w-full bg-[var(--background)] border border-[var(--text-secondary)]/30 rounded-lg px-4 py-3 text-[var(--text-primary)] focus:outline-none focus:border-[var(--primary-accent)] focus:shadow-[0_0_15px_rgba(0,245,160,0.2)] transition-all duration-300"
                  placeholder="name@domain.com"
                />
                {focused === "email" && <div className="absolute right-3 top-[38px] w-2 h-2 rounded-full bg-[var(--primary-accent)] animate-pulse" />}
              </div>
            </div>

            <div className="relative">
              <label className="font-mono text-xs text-[var(--text-secondary)] mb-2 block uppercase tracking-wider">
                Data_Payload
              </label>
              <textarea
                name="message"
                required
                rows={5}
                onFocus={() => setFocused("message")}
                onBlur={() => setFocused(null)}
                className="w-full bg-[var(--background)] border border-[var(--text-secondary)]/30 rounded-lg px-4 py-3 text-[var(--text-primary)] focus:outline-none focus:border-[var(--primary-accent)] focus:shadow-[0_0_15px_rgba(0,245,160,0.2)] transition-all duration-300 resize-none"
                placeholder="Initialize transmission sequence..."
              />
              {focused === "message" && <div className="absolute right-3 top-[38px] w-2 h-2 rounded-full bg-[var(--primary-accent)] animate-pulse" />}
            </div>

            <button
              type="submit"
              className="hover-trigger relative group w-full md:w-auto self-end px-8 py-4 rounded-lg bg-[var(--primary-accent)] text-[#030712] font-bold overflow-hidden transition-transform hover:scale-105 active:scale-95 flex items-center justify-center gap-3"
            >
              <div className="absolute inset-0 bg-white/20 translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out" />
              <span className="relative flex items-center gap-2 font-mono uppercase tracking-widest text-sm">
                Transmit <Send size={16} />
              </span>
            </button>

          </form>
        </motion.div>

      </div>
    </section>
  );
};

export const Footer = () => (
  <footer className="relative z-10 border-t border-[var(--text-secondary)]/10 bg-[#030712]/50 backdrop-blur-md">
    <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-2 text-[var(--text-secondary)] font-mono text-sm">
        <div className="w-2 h-2 rounded-full bg-[var(--primary-accent)] animate-pulse" />
        SYSTEM_ONLINE
      </div>
      <div className="text-[var(--text-secondary)] text-sm">
        &copy; {new Date().getFullYear()} Ayush Rathi. All rights reserved.
      </div>
      <div className="flex gap-4">
        <a
          href="mailto:ayushrathi125@gmail.com"
          className="text-[var(--text-secondary)] hover:text-[var(--primary-accent)] transition-colors hover-trigger flex items-center justify-center w-10 h-10 rounded-full border border-white/5 bg-[var(--background)]"
          title="ayushrathi125@gmail.com"
        >
          <Mail size={18} />
        </a>
      </div>
    </div>
  </footer>
);
