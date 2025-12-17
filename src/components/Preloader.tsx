import { motion } from "framer-motion";

interface PreloaderProps {
  onComplete?: () => void;
  text?: string;
}

const Preloader = ({ onComplete, text = "LOADING" }: PreloaderProps) => {
  const letters = text.split("");

  return (
    <motion.div
      className="fixed top-0 left-0 w-full h-full bg-black/10 flex items-center justify-center"
      style={{ zIndex: 9999 }}
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      onAnimationComplete={onComplete}
    >
      <div className="relative w-full h-[100px] flex items-center justify-center">
        {letters.map((letter, index) => (
          <motion.span
            key={index}
            className="inline-block mx-[5px] text-white text-xl"
            style={{
              fontFamily: "'Quattrocento Sans', sans-serif",
            }}
            initial={{ filter: "blur(0px)" }}
            animate={{
              filter: ["blur(0px)", "blur(4px)"],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "reverse",
              delay: index / 5,
              ease: "linear",
            }}
          >
            {letter}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
};

export default Preloader;
