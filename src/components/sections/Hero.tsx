import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere, MeshDistortMaterial, Icosahedron } from "@react-three/drei";
import { Download, ChevronRight, Code2, Database, Terminal, GitBranch } from "lucide-react";

const roles = [
  "Software Engineer",
  "Full Stack Developer",
  "MERN Stack Specialist",
  "Machine Learning Enthusiast",
  "Problem Solver"
];

const Typewriter = () => {
  const [currentRole, setCurrentRole] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typeSpeed = isDeleting ? 50 : 100;
    const fullText = roles[roleIndex];

    const timer = setTimeout(() => {
      if (!isDeleting && currentRole === fullText) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && currentRole === "") {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      } else {
        setCurrentRole(fullText.substring(0, currentRole.length + (isDeleting ? -1 : 1)));
      }
    }, typeSpeed);

    return () => clearTimeout(timer);
  }, [currentRole, isDeleting, roleIndex]);

  return (
    <span className="text-xl md:text-2xl font-mono text-[var(--secondary-accent)] h-8 block">
      {">"} {currentRole}
      <motion.span
        animate={{ opacity: [0, 1, 0] }}
        transition={{ repeat: Infinity, duration: 0.8 }}
        className="inline-block w-2 h-5 bg-[var(--primary-accent)] ml-1 align-middle"
      />
    </span>
  );
};

const AICore = () => {
  const meshRef = useRef<any>(null);
  const icosahedronRef = useRef<any>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
    }
    if (icosahedronRef.current) {
      icosahedronRef.current.rotation.x = state.clock.getElapsedTime() * -0.1;
      icosahedronRef.current.rotation.y = state.clock.getElapsedTime() * -0.2;
    }
  });

  return (
    <group>
      {/* Inner Glowing Core */}
      <Sphere ref={meshRef} args={[1.5, 64, 64]} scale={1.2}>
        <MeshDistortMaterial
          color="#00F5A0"
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0.2}
          metalness={0.8}
          transparent
          opacity={0.8}
        />
      </Sphere>
      {/* Outer Wireframe Shell representing the "Bust" / Neural Node */}
      <Icosahedron ref={icosahedronRef} args={[2.2, 2]}>
        <meshBasicMaterial color="#00E5FF" wireframe transparent opacity={0.3} />
      </Icosahedron>
    </group>
  );
};

const FloatingCard = ({ delay, icon: Icon, title, value, className }: any) => {
  return (
    <motion.div
      className={`absolute glass p-3 md:p-4 rounded-xl flex flex-col md:flex-row items-center text-center md:text-left gap-2 md:gap-4 z-20 max-w-[140px] md:max-w-none ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.8, ease: "easeOut" }}
      whileHover={{ scale: 1.05, borderColor: "var(--primary-accent)" }}
      style={{
        y: useTransform(useScroll().scrollY, [0, 500], [0, -50 + Math.random() * -100])
      }}
    >
      <div className="p-2 md:p-3 bg-[var(--secondary-bg)] rounded-lg text-[var(--primary-accent)]">
        <Icon size={18} className="md:w-5 md:h-5" />
      </div>
      <div className="flex-1">
        <div className="text-[10px] md:text-xs text-[var(--text-secondary)] font-mono mb-1">{title}</div>
        <div className="font-display font-bold text-xs md:text-sm text-[var(--text-primary)] leading-tight">{value}</div>
      </div>
    </motion.div>
  );
};

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10">
        
        {/* Left Content */}
        <div className="flex flex-col gap-6">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[var(--primary-accent)]/30 bg-[var(--primary-accent)]/10 text-[var(--primary-accent)] text-xs font-mono mb-6">
              <span className="w-2 h-2 rounded-full bg-[var(--primary-accent)] animate-pulse" />
              SYSTEM.STATUS: ONLINE
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tighter mb-4">
              AYUSH
              <br />
              <span className="text-gradient">RATHI</span>
            </h1>
            <Typewriter />
          </motion.div>

          <motion.p
            className="text-[var(--text-secondary)] text-lg max-w-md leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Computer Science undergraduate at VIT Bhopal University. Strong foundations in Data Structures & Algorithms with hands-on experience building scalable full-stack applications using the MERN stack.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4 mt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <button 
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="hover-trigger relative group px-6 py-3 rounded-lg bg-[var(--primary-accent)] text-[#030712] font-bold overflow-hidden transition-transform hover:scale-105 active:scale-95"
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
              <span className="relative flex items-center gap-2">
                Explore Mission <ChevronRight size={18} />
              </span>
            </button>
            <a 
              href="/Ayush_Rathi_Resume.pdf" 
              download="Ayush_Rathi_Resume.pdf"
              className="hover-trigger px-6 py-3 rounded-lg border border-[var(--text-secondary)]/30 text-[var(--text-primary)] font-medium hover:border-[var(--primary-accent)] hover:text-[var(--primary-accent)] hover:shadow-[0_0_15px_rgba(0,245,160,0.2)] transition-all duration-300 flex items-center gap-2"
            >
              <Download size={18} /> Resume.pdf
            </a>
          </motion.div>
        </div>

        {/* Right 3D Content */}
        <div className="relative h-[500px] lg:h-[700px] w-full flex items-center justify-center">
          <motion.div 
            className="absolute inset-0 z-0"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
              <ambientLight intensity={0.5} />
              <directionalLight position={[10, 10, 5]} intensity={1} />
              <AICore />
            </Canvas>
          </motion.div>

          {/* Floating Stats */}
          <FloatingCard 
            delay={0.8}
            icon={Code2}
            title="ALGORITHMS"
            value="Data Structures & Algorithms"
            className="top-[5%] left-[2%] md:top-[10%] md:left-[-10%]"
          />
          <FloatingCard 
            delay={1.0}
            icon={Terminal}
            title="EDUCATION"
            value="8.5 CGPA"
            className="top-[70%] left-[2%] md:left-[-5%]"
          />
          <FloatingCard 
            delay={1.2}
            icon={Database}
            title="STACK"
            value="MERN Active"
            className="top-[15%] right-[2%] md:top-[20%] md:right-[-10%]"
          />
          <FloatingCard 
            delay={1.4}
            icon={GitBranch}
            title="CERTIFICATIONS"
            value="AWS & Azure"
            className="top-[80%] right-[2%] md:right-[-5%]"
          />
        </div>

      </div>
    </section>
  );
};
