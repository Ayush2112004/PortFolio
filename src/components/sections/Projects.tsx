import { useRef } from "react";
import { motion, useTransform, useSpring, useMotionValue } from "framer-motion";
import { FolderGit2, ExternalLink, Code2 as Github, FolderLock } from "lucide-react";

const projects = [
  {
    id: "001",
    title: "Mavelo Luxury Car Rental",
    description: "Full-stack MERN application with secure booking workflows, REST APIs, and automated email confirmations using Nodemailer.",
    tech: ["React.js", "Node.js", "MongoDB", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/Ayush2112004",
    demo: "https://github.com/Ayush2112004",
    status: "MISSION_ACCOMPLISHED"
  },
  {
    id: "002",
    title: "Road Damage Detection",
    description: "Computer vision system using CNN models to detect and classify road damage with robust data augmentation pipelines.",
    tech: ["Python", "TensorFlow", "Keras", "Machine Learning"],
    github: "https://github.com/Ayush2112004",
    demo: "https://github.com/Ayush2112004",
    status: "MISSION_ACCOMPLISHED"
  },
  {
    id: "003",
    title: "Smart Attendance System",
    description: "Automated attendance tracking using real-time face recognition with OpenCV, featuring structured database logs and report generation.",
    tech: ["Python", "OpenCV", "Database", "Face Recognition"],
    github: "#",
    demo: "#",
    status: "MISSION_ACCOMPLISHED"
  }
];

const ProjectCard = ({ project, index }: any) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15, mass: 0.1 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15, mass: 0.1 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="relative glass rounded-2xl p-6 md:p-8 cursor-crosshair group perspective-1000"
    >
      <div 
        className="absolute inset-0 bg-gradient-to-br from-[var(--primary-accent)]/5 to-[var(--secondary-accent)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" 
        style={{ transform: "translateZ(-10px)" }}
      />
      
      <div className="flex justify-between items-start mb-8" style={{ transform: "translateZ(30px)" }}>
        <div className="p-3 bg-[var(--secondary-bg)] rounded-lg border border-[var(--primary-accent)]/30 text-[var(--primary-accent)]">
          {project.status === "IN_PROGRESS" ? <FolderLock size={24} /> : <FolderGit2 size={24} />}
        </div>
        <div className="flex gap-4">
          <a href={project.github} className="text-[var(--text-secondary)] hover:text-[var(--primary-accent)] transition-colors hover-trigger">
            <Github size={20} />
          </a>
          <a href={project.demo} className="text-[var(--text-secondary)] hover:text-[var(--primary-accent)] transition-colors hover-trigger">
            <ExternalLink size={20} />
          </a>
        </div>
      </div>

      <div style={{ transform: "translateZ(40px)" }}>
        <div className="flex items-center gap-3 mb-2">
          <span className="font-mono text-xs text-[var(--primary-accent)] bg-[var(--primary-accent)]/10 px-2 py-1 rounded">
            FILE_{project.id}
          </span>
          <span className="font-mono text-xs text-[var(--text-secondary)]">
            {project.status}
          </span>
        </div>
        <h3 className="text-2xl font-display font-bold text-[var(--text-primary)] mb-4 group-hover:text-[var(--primary-accent)] transition-colors">
          {project.title}
        </h3>
        <p className="text-[var(--text-secondary)] mb-6 leading-relaxed text-sm md:text-base">
          {project.description}
        </p>
      </div>

      <div className="flex flex-wrap gap-2 mt-auto" style={{ transform: "translateZ(20px)" }}>
        {project.tech.map((t: string) => (
          <span key={t} className="text-xs font-mono text-[var(--text-secondary)] bg-[var(--secondary-bg)] px-2 py-1 rounded border border-white/5">
            {t}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

export const Projects = () => {
  return (
    <section className="relative py-32 overflow-hidden" id="projects">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-4"
          >
            <FolderGit2 className="text-[var(--primary-accent)]" />
            <h2 className="text-3xl md:text-5xl font-display font-bold">MISSION_FILES</h2>
          </motion.div>
          <div className="h-px w-full max-w-md bg-gradient-to-r from-[var(--primary-accent)] to-transparent opacity-50" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-1000">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
};
