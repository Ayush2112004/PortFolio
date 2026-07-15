import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cpu, Server, Database as DatabaseIcon, Code, Wrench } from "lucide-react";

const categories = [
  {
    id: "languages",
    title: "Languages",
    icon: Code,
    techs: [
      { name: "C++", exp: "Proficient", prof: 90 },
      { name: "Java", exp: "Proficient", prof: 85 },
      { name: "Python", exp: "Proficient", prof: 85 },
      { name: "JavaScript", exp: "Advanced", prof: 95 },
      { name: "TypeScript", exp: "Intermediate", prof: 80 }
    ]
  },
  {
    id: "frontend",
    title: "Frontend",
    icon: Cpu,
    techs: [
      { name: "React.js", exp: "Advanced", prof: 95 },
      { name: "Tailwind CSS", exp: "Advanced", prof: 90 },
      { name: "HTML5", exp: "Advanced", prof: 95 },
      { name: "CSS3", exp: "Advanced", prof: 90 }
    ]
  },
  {
    id: "backend",
    title: "Backend",
    icon: Server,
    techs: [
      { name: "Node.js", exp: "Advanced", prof: 90 },
      { name: "Express.js", exp: "Advanced", prof: 95 },
      { name: "REST APIs", exp: "Advanced", prof: 95 },
      { name: "JWT Auth / MVC", exp: "Advanced", prof: 90 }
    ]
  },
  {
    id: "data-cloud",
    title: "Database & Cloud",
    icon: DatabaseIcon,
    techs: [
      { name: "MongoDB", exp: "Advanced", prof: 90 },
      { name: "MySQL", exp: "Intermediate", prof: 80 },
      { name: "AWS", exp: "Intermediate", prof: 75 },
      { name: "Azure", exp: "Intermediate", prof: 75 }
    ]
  },
  {
    id: "ml",
    title: "Machine Learning",
    icon: Code, // Will use Code icon for this
    techs: [
      { name: "TensorFlow", exp: "Intermediate", prof: 80 },
      { name: "Keras", exp: "Intermediate", prof: 80 },
      { name: "NumPy & Pandas", exp: "Intermediate", prof: 85 },
      { name: "Scikit-Learn", exp: "Intermediate", prof: 80 }
    ]
  },
  {
    id: "tools",
    title: "Tools & Platforms",
    icon: Wrench,
    techs: [
      { name: "Git / GitHub", exp: "Advanced", prof: 95 },
      { name: "Docker", exp: "Intermediate", prof: 75 },
      { name: "Postman", exp: "Advanced", prof: 90 },
      { name: "VS Code", exp: "Advanced", prof: 95 }
    ]
  }
];

export const TechStack = () => {
  const [activeCategory, setActiveCategory] = useState(categories[0].id);

  return (
    <section className="relative py-32 overflow-hidden" id="tech-stack">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-4"
            >
              <Cpu className="text-[var(--primary-accent)]" />
              <h2 className="text-3xl md:text-5xl font-display font-bold">TECH_STACK</h2>
            </motion.div>
            <div className="h-px w-full max-w-xs bg-gradient-to-r from-[var(--primary-accent)] to-transparent opacity-50" />
          </div>
          <p className="text-[var(--text-secondary)] font-mono text-sm">
            Core processing units and neural pathways.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Categories Sidebar */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            {categories.map((cat, i) => (
              <motion.button
                key={cat.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                onClick={() => {
                  setActiveCategory(cat.id);
                  if (window.innerWidth < 1024) {
                    setTimeout(() => {
                      document.getElementById('tech-details')?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                    }, 100);
                  }
                }}
                className={`relative p-4 rounded-xl flex items-center gap-4 text-left transition-all duration-300 overflow-hidden ${
                  activeCategory === cat.id
                    ? "glass border-[var(--primary-accent)] shadow-[0_0_20px_rgba(0,245,160,0.15)]"
                    : "glass border-transparent hover:border-white/10"
                }`}
              >
                {activeCategory === cat.id && (
                  <motion.div
                    layoutId="active-category-bg"
                    className="absolute inset-0 bg-gradient-to-r from-[var(--primary-accent)]/10 to-transparent"
                  />
                )}
                <cat.icon className={`relative z-10 ${activeCategory === cat.id ? "text-[var(--primary-accent)]" : "text-[var(--text-secondary)]"}`} />
                <span className={`relative z-10 font-display font-medium ${activeCategory === cat.id ? "text-[var(--primary-accent)]" : "text-[var(--text-primary)]"}`}>
                  {cat.title}
                </span>
              </motion.button>
            ))}
          </div>

          {/* Tech Details */}
          <div id="tech-details" className="lg:col-span-8 relative scroll-mt-24">
            <AnimatePresence mode="wait">
              {categories.map(
                (cat) =>
                  activeCategory === cat.id && (
                    <motion.div
                      key={cat.id}
                      initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
                      animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                      exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                      className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full"
                    >
                      {cat.techs.map((tech, idx) => (
                        <div key={tech.name} className="glass p-6 rounded-2xl group hover:border-[var(--primary-accent)]/50 transition-colors duration-300">
                          <div className="flex justify-between items-center mb-6">
                            <h3 className="font-display text-xl text-[var(--text-primary)] group-hover:text-[var(--primary-accent)] transition-colors">
                              {tech.name}
                            </h3>
                            <span className="font-mono text-xs text-[var(--text-secondary)] py-1 px-2 rounded bg-[var(--secondary-bg)]">
                              {tech.exp}
                            </span>
                          </div>
                          
                          <div className="relative">
                            <div className="flex justify-between text-xs mb-2 text-[var(--text-secondary)] font-mono">
                              <span>Proficiency</span>
                              <span>{tech.prof}%</span>
                            </div>
                            <div className="h-1.5 w-full bg-[var(--secondary-bg)] rounded-full overflow-hidden">
                              <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: `${tech.prof}%` }}
                                transition={{ duration: 1, delay: 0.2 + idx * 0.1, ease: "circOut" }}
                                className="h-full bg-gradient-to-r from-[var(--secondary-accent)] to-[var(--primary-accent)] shadow-[0_0_10px_var(--primary-accent)]"
                              />
                            </div>
                          </div>
                        </div>
                      ))}
                    </motion.div>
                  )
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
};
