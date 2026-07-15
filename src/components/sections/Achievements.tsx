import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Trophy, Code2, Star, GitMerge } from "lucide-react";

const AnimatedCounter = ({ from = 0, to, duration = 2 }: { from?: number, to: number, duration?: number }) => {
  const [count, setCount] = useState(from);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;

    let startTimestamp: number;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
      
      // Easing function for smooth slowdown
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      
      setCount(Math.floor(easeOutQuart * (to - from) + from));
      
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    
    window.requestAnimationFrame(step);
  }, [isInView, from, to, duration]);

  return <span ref={ref}>{count}</span>;
};

const stats = [
  { icon: Code2, label: "Coding Problems Solved", value: 400, suffix: "+" },
  { icon: Trophy, label: "Cloud Certifications", value: 2, suffix: "" },
  { icon: Star, label: "Professional Courses", value: 1, suffix: "" },
  { icon: GitMerge, label: "Projects Developed", value: 10, suffix: "+" },
];

export const Achievements = () => {
  return (
    <section className="relative py-20 overflow-hidden" id="achievements">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="glass p-6 rounded-2xl flex flex-col items-center justify-center text-center group"
            >
              <div className="p-4 bg-[var(--secondary-bg)] rounded-full mb-4 text-[var(--text-secondary)] group-hover:text-[var(--primary-accent)] group-hover:shadow-[0_0_15px_rgba(0,245,160,0.3)] transition-all duration-300">
                <stat.icon size={28} />
              </div>
              <div className="text-4xl font-display font-bold text-[var(--text-primary)] mb-2 flex items-center justify-center">
                <AnimatedCounter to={stat.value} />
                <span className="text-[var(--primary-accent)]">{stat.suffix}</span>
              </div>
              <div className="font-mono text-xs text-[var(--text-secondary)] tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
