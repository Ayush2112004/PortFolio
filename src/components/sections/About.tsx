import { motion } from "framer-motion";
import { User, Target, MapPin, GraduationCap, Activity, ShieldCheck } from "lucide-react";

const ProfileCard = ({ title, icon: Icon, children, className, delay = 0 }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6, delay }}
    whileHover={{ scale: 1.02 }}
    className={`glass p-6 rounded-2xl border-t border-l border-[var(--primary-accent)]/20 relative overflow-hidden group ${className}`}
  >
    <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--primary-accent)]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-[var(--primary-accent)]/10 transition-colors" />
    
    <div className="flex items-center gap-3 mb-4">
      <div className="p-2 rounded-lg bg-[var(--secondary-bg)] border border-[var(--primary-accent)]/30 text-[var(--primary-accent)]">
        <Icon size={20} />
      </div>
      <h3 className="font-mono text-sm tracking-widest text-[var(--text-secondary)]">{title}</h3>
    </div>
    
    <div className="relative z-10 text-[var(--text-primary)]">
      {children}
    </div>
  </motion.div>
);

export const About = () => {
  return (
    <section className="relative py-32 overflow-hidden" id="about">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-4"
          >
            <ShieldCheck className="text-[var(--primary-accent)]" />
            <h2 className="text-3xl md:text-5xl font-display font-bold">PROFILE_DATA</h2>
          </motion.div>
          <div className="h-px w-full max-w-md bg-gradient-to-r from-[var(--primary-accent)] to-transparent opacity-50" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          <ProfileCard title="IDENTITY" icon={User} className="md:col-span-2 lg:col-span-2" delay={0.1}>
            <p className="text-lg md:text-xl leading-relaxed text-[var(--text-secondary)]">
              I am a <span className="text-white font-medium">Computer Science undergraduate</span> at VIT Bhopal University. 
              I am proficient in <span className="text-[var(--highlight)]">C++, Java, and Python</span> with hands-on experience in building scalable full-stack applications using the <span className="text-white font-medium">MERN stack</span>.
            </p>
          </ProfileCard>

          <ProfileCard title="CURRENT_STATUS" icon={Activity} delay={0.2}>
            <div className="flex flex-col gap-4">
              <div className="flex justify-between items-center border-b border-white/5 pb-2">
                <span className="text-[var(--text-secondary)] text-sm">Status</span>
                <span className="text-[var(--primary-accent)] text-sm flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[var(--primary-accent)] animate-pulse" />
                  Available for Hire
                </span>
              </div>
              <div className="flex justify-between items-center border-b border-white/5 pb-2">
                <span className="text-[var(--text-secondary)] text-sm">Focus</span>
                <span className="text-sm">SDE Opportunities</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[var(--text-secondary)] text-sm">Coffee</span>
                <span className="text-sm">Processing...</span>
              </div>
            </div>
          </ProfileCard>

          <ProfileCard title="MISSION_OBJECTIVE" icon={Target} className="lg:col-span-2" delay={0.3}>
            <p className="text-[var(--text-secondary)] leading-relaxed">
              Seeking Software Development Engineer opportunities to leverage my skills in Data Structures and Algorithms, backend development, REST APIs, and database design. 
              I am driven to solve complex problems, having tackled 400+ coding challenges across platforms like LeetCode and Codeforces, and I aim to engineer robust, scalable solutions.
            </p>
          </ProfileCard>

          <div className="flex flex-col gap-6">
            <ProfileCard title="LOCATION" icon={MapPin} delay={0.4}>
              <p className="font-display text-xl">India</p>
              <p className="text-[var(--text-secondary)] text-sm mt-1">Global Remote Ready</p>
            </ProfileCard>

            <ProfileCard title="EDUCATION" icon={GraduationCap} delay={0.5}>
              <p className="font-medium text-sm">VIT Bhopal University</p>
              <p className="text-[var(--text-secondary)] text-xs mt-1">B.Tech CSE (8.5 CGPA) | 2023–2027</p>
            </ProfileCard>
          </div>

        </div>
      </div>
    </section>
  );
};
