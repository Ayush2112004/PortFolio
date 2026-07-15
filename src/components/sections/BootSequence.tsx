import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const messages = [
  "Booting an AI System...",
  "Loading Developer Profile...",
  "Scanning Projects...",
  "Loading Skills...",
  "Initializing Neural Engine...",
  "System Ready."
];

export const BootSequence = ({ onComplete }: { onComplete: () => void }) => {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Lock scroll
    document.body.style.overflow = 'hidden';
    
    let messageInterval: ReturnType<typeof setInterval>;
    let progressInterval: ReturnType<typeof setInterval>;

    const startSequence = () => {
      // Message typing effect
      messageInterval = setInterval(() => {
        setCurrentMessageIndex((prev) => {
          if (prev < messages.length - 1) return prev + 1;
          clearInterval(messageInterval);
          return prev;
        });
      }, 500);

      // Progress bar effect
      progressInterval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(progressInterval);
            
            // Wait a bit after 100% then hide
            setTimeout(() => {
              setIsVisible(false);
              document.body.style.overflow = '';
              setTimeout(onComplete, 500); // Give time for exit animation
            }, 800);
            return 100;
          }
          return prev + Math.floor(Math.random() * 15) + 5;
        });
      }, 300);
    };

    // Check session storage to see if we already booted this session
    const hasBooted = sessionStorage.getItem("ai_portfolio_booted");
    if (hasBooted) {
      setIsVisible(false);
      document.body.style.overflow = '';
      onComplete();
    } else {
      sessionStorage.setItem("ai_portfolio_booted", "true");
      startSequence();
    }

    return () => {
      clearInterval(messageInterval);
      clearInterval(progressInterval);
      document.body.style.overflow = '';
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-[10000] bg-[var(--background)] flex flex-col items-center justify-center font-code text-[var(--primary-accent)]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -50, filter: "blur(10px)" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <div className="max-w-md w-full px-6 flex flex-col gap-6">
            <div className="flex flex-col gap-2 min-h-[120px] justify-end">
              {messages.slice(0, currentMessageIndex + 1).map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: i === currentMessageIndex ? 1 : 0.5, x: 0 }}
                  className="text-sm md:text-base"
                >
                  {">"} {msg}
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col gap-2 mt-8">
              <div className="flex justify-between text-xs opacity-70">
                <span>SYSTEM_INITIALIZATION</span>
                <span>{Math.min(progress, 100)}%</span>
              </div>
              <div className="w-full h-1 bg-[var(--secondary-bg)] rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-[var(--primary-accent)] shadow-[0_0_10px_var(--primary-accent)]"
                  initial={{ width: 0 }}
                  animate={{ width: `${Math.min(progress, 100)}%` }}
                  transition={{ ease: "linear", duration: 0.2 }}
                />
              </div>
            </div>

            {progress >= 100 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-8 text-center text-xl text-[var(--text-primary)] font-display tracking-widest"
              >
                Welcome Ayush Rathi
              </motion.div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
