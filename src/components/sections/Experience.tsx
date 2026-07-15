import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Clock } from "lucide-react";

const logs = [
  {
    id: "LOG_01",
    role: "Full Stack Developer",
    company: "Tuned Society",
    period: "Feb 2026 - Present",
    desc: "Developed a two-sided marketplace connecting users with verified garages. Built scalable backend services using Node.js, Express, MongoDB, and REST APIs. Implemented vendor onboarding, booking workflows, geolocation search, and real-time notifications."
  }
];

export const Experience = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const beamHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="relative py-32 overflow-hidden" id="experience" ref={containerRef}>
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        <div className="mb-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-4 mb-4"
          >
            <Clock className="text-[var(--primary-accent)]" />
            <h2 className="text-3xl md:text-5xl font-display font-bold">SYSTEM_LOGS</h2>
          </motion.div>
        </div>

        <div className="relative">
          {/* Animated Vertical Beam */}
          <div className="absolute left-[15px] md:left-1/2 top-0 bottom-0 w-1 bg-white/10 md:-translate-x-1/2 rounded-full overflow-hidden">
            <motion.div 
              className="absolute top-0 w-full bg-[var(--primary-accent)] shadow-[0_0_15px_var(--primary-accent)]" 
              style={{ height: beamHeight }} 
            />
          </div>

          <div className="flex flex-col gap-12">
            {logs.map((log, i) => (
              <div key={log.id} className={`relative flex flex-col md:flex-row items-center gap-8 ${i % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                
                {/* Center Node */}
                <motion.div 
                  className="absolute left-[15px] md:left-1/2 w-4 h-4 rounded-full bg-[var(--secondary-bg)] border-2 border-[var(--primary-accent)] md:-translate-x-1/2 z-10"
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: 0.2 }}
                  whileHover={{ scale: 1.5, backgroundColor: "var(--primary-accent)", boxShadow: "0 0 10px var(--primary-accent)" }}
                />

                {/* Content */}
                <motion.div 
                  className={`ml-12 md:ml-0 md:w-1/2 glass p-6 rounded-xl hover:border-[var(--primary-accent)]/50 transition-colors duration-300 ${i % 2 === 0 ? "md:pl-12" : "md:pr-12 text-left md:text-right"}`}
                  initial={{ opacity: 0, x: i % 2 === 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                >
                  <div className="font-mono text-[var(--primary-accent)] text-xs mb-2">[{log.id}] {log.period}</div>
                  <h3 className="text-xl font-display font-bold text-[var(--text-primary)]">{log.role}</h3>
                  <h4 className="text-sm font-medium text-[var(--text-secondary)] mb-4">{log.company}</h4>
                  <p className="text-[var(--text-secondary)] text-sm leading-relaxed">{log.desc}</p>
                </motion.div>
                
                <div className="hidden md:block md:w-1/2" />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
