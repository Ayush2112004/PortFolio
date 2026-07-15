import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Brain, Code2, Server, Database as DatabaseIcon, Cpu, BrainCircuit, GitBranch } from "lucide-react";

const brainLobes = [
  {
    id: "frontend",
    label: "Frontend Lobe",
    icon: Code2,
    color: "#00E5FF",
    position: { x: -150, y: -100 },
    data: {
      technologies: ["React.js", "Tailwind CSS", "Framer Motion", "Three.js"],
      experience: "Tuned Society UI/UX",
      projects: ["Mavelo Luxury Car Rental (UI)"]
    }
  },
  {
    id: "backend",
    label: "Backend Lobe",
    icon: Server,
    color: "#7C3AED",
    position: { x: 150, y: -100 },
    data: {
      technologies: ["Node.js", "Express.js", "REST APIs", "JWT"],
      experience: "Tuned Society Backend",
      projects: ["Mavelo Core API", "Smart Attendance API"]
    }
  },
  {
    id: "dsa",
    label: "Logic Core (DSA)",
    icon: Cpu,
    color: "#00F5A0",
    position: { x: 0, y: -180 },
    data: {
      technologies: ["C++", "Java", "Python", "Problem Solving"],
      experience: "400+ Problems Solved",
      projects: ["Competitive Programming", "Algorithmic Optimization"]
    }
  },
  {
    id: "database",
    label: "Memory Lobe (DB)",
    icon: DatabaseIcon,
    color: "#F5A623",
    position: { x: -100, y: 100 },
    data: {
      technologies: ["MongoDB", "MySQL", "Database Design"],
      experience: "Data Modeling for Tuned Society",
      projects: ["Smart Attendance DB", "Mavelo DB"]
    }
  },
  {
    id: "ai",
    label: "Neural Lobe (AI)",
    icon: BrainCircuit,
    color: "#FF0055",
    position: { x: 100, y: 100 },
    data: {
      technologies: ["TensorFlow", "Keras", "OpenCV", "Python"],
      experience: "Machine Learning Models",
      projects: ["Road Damage Detection", "Smart Attendance (Face Rec)"]
    }
  }
];

export const AIBrain = () => {
  const [activeLobe, setActiveLobe] = useState<string | null>(null);

  const activeData = brainLobes.find(l => l.id === activeLobe);

  return (
    <section className="relative py-32 overflow-hidden min-h-screen flex items-center" id="ai-brain">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,245,160,0.05)_0%,rgba(3,7,18,1)_70%)] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full flex flex-col items-center">
        
        <div className="mb-12 text-center flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-4 mb-4"
          >
            <Brain className="text-[var(--primary-accent)]" size={32} />
            <h2 className="text-3xl md:text-5xl font-display font-bold">NEURAL_MAP</h2>
          </motion.div>
          <p className="text-[var(--text-secondary)] font-mono text-sm max-w-md">
            Hover over the neural lobes to inspect sector data.
          </p>
        </div>

        <div className="relative w-full max-w-4xl aspect-square md:aspect-video flex items-center justify-center">
          
          {/* Central Brain Core */}
          <motion.div 
            className="absolute z-20 w-32 h-32 md:w-48 md:h-48 rounded-full bg-[var(--secondary-bg)] border border-[var(--primary-accent)]/30 shadow-[0_0_50px_rgba(0,245,160,0.2)] flex items-center justify-center flex-col gap-2 group cursor-pointer"
            animate={{ 
              boxShadow: activeLobe 
                ? `0 0 80px ${activeData?.color}40` 
                : "0 0 50px rgba(0,245,160,0.2)"
            }}
            transition={{ duration: 0.5 }}
          >
            <div className="absolute inset-0 rounded-full border border-white/5 animate-[spin_10s_linear_infinite]" />
            <div className="absolute inset-2 rounded-full border border-[var(--primary-accent)]/20 animate-[spin_15s_linear_infinite_reverse]" />
            <Brain size={48} className="text-[var(--primary-accent)] opacity-80" />
            <span className="font-mono text-xs text-[var(--text-secondary)] tracking-widest uppercase mt-2">Core</span>
          </motion.div>

          {/* Render Lobes */}
          {brainLobes.map((lobe) => {
            const isActive = activeLobe === lobe.id;
            const isDimmed = activeLobe !== null && activeLobe !== lobe.id;

            return (
              <motion.div
                key={lobe.id}
                className="absolute z-30 flex flex-col items-center justify-center"
                style={{ 
                  x: lobe.position.x, 
                  y: lobe.position.y,
                  // Scale positions for mobile
                  transform: `translate(${lobe.position.x}px, ${lobe.position.y}px)`
                }}
                animate={{
                  x: window.innerWidth < 768 ? lobe.position.x * 0.6 : lobe.position.x * 1.5,
                  y: window.innerWidth < 768 ? lobe.position.y * 0.6 : lobe.position.y * 1.5,
                  scale: isActive ? 1.2 : isDimmed ? 0.8 : 1,
                  opacity: isDimmed ? 0.4 : 1,
                }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                onMouseEnter={() => setActiveLobe(lobe.id)}
                onMouseLeave={() => setActiveLobe(null)}
              >
                {/* Connecting Line (simulated with SVG would be better, but we use a glowing div directed to center) */}
                
                <div 
                  className={`w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center cursor-crosshair relative group overflow-hidden`}
                  style={{ backgroundColor: `${lobe.color}15`, border: `1px solid ${lobe.color}50` }}
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: `radial-gradient(circle, ${lobe.color}40 0%, transparent 70%)` }} />
                  <lobe.icon size={24} style={{ color: lobe.color }} className="relative z-10" />
                </div>
                <div className="mt-3 font-mono text-xs tracking-wider" style={{ color: isActive ? lobe.color : "var(--text-secondary)" }}>
                  {lobe.label}
                </div>
              </motion.div>
            );
          })}

          {/* Info Panel Overlay */}
          <AnimatePresence>
            {activeData && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="absolute z-40 bottom-[-50px] md:bottom-[10%] left-1/2 -translate-x-1/2 w-[90%] md:w-[400px] glass p-6 rounded-2xl border pointer-events-none"
                style={{ borderColor: `${activeData.color}50`, boxShadow: `0 10px 30px ${activeData.color}20` }}
              >
                <div className="flex items-center gap-3 mb-4 border-b border-white/10 pb-4">
                  <activeData.icon style={{ color: activeData.color }} size={24} />
                  <h3 className="font-display font-bold text-xl" style={{ color: activeData.color }}>
                    {activeData.label}
                  </h3>
                </div>
                
                <div className="flex flex-col gap-4">
                  <div>
                    <h4 className="text-[var(--text-secondary)] font-mono text-xs mb-1 uppercase tracking-wider">Experience</h4>
                    <p className="text-sm text-[var(--text-primary)]">{activeData.data.experience}</p>
                  </div>
                  <div>
                    <h4 className="text-[var(--text-secondary)] font-mono text-xs mb-1 uppercase tracking-wider">Projects</h4>
                    <ul className="text-sm text-[var(--text-primary)] list-disc pl-4 space-y-1">
                      {activeData.data.projects.map(p => <li key={p}>{p}</li>)}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-[var(--text-secondary)] font-mono text-xs mb-1 uppercase tracking-wider">Technologies</h4>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {activeData.data.technologies.map(t => (
                        <span key={t} className="text-xs font-mono px-2 py-1 rounded bg-[var(--background)] border border-white/5 text-[var(--text-secondary)]">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>

        {/* GitHub Link Replacement */}
        <div className="mt-20">
          <a 
            href="https://github.com/Ayush2112004" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover-trigger inline-flex items-center gap-3 px-6 py-3 rounded-full border border-[var(--text-secondary)]/30 text-[var(--text-secondary)] hover:text-[var(--primary-accent)] hover:border-[var(--primary-accent)] transition-colors duration-300 glass"
          >
            <GitBranch size={20} />
            <span className="font-mono text-sm tracking-widest uppercase">Access GitHub Repository</span>
          </a>
        </div>

      </div>
    </section>
  );
};
