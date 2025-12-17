import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

interface XRTransitionProps {
  children: React.ReactNode;
}

// Компонент для XR-тематичного переходу
const XRTransition = ({ children }: XRTransitionProps) => {
  const location = useLocation();
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    setIsTransitioning(true);
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 600);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
      <AnimatePresence mode="wait">
        {isTransitioning && (
          <motion.div
            key="xr-overlay"
            className="fixed inset-0 pointer-events-none"
            style={{ zIndex: 10000 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
          >
            {/* Центральний портал/ефект розширення */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                className="relative"
                style={{ width: "1px", height: "1px" }}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 30, opacity: [0, 0.4, 0] }}
                exit={{ scale: 0, opacity: 0 }}
                transition={{
                  duration: 0.6,
                  ease: [0.4, 0, 0.2, 1],
                }}
              >
                <div
                  className="absolute inset-0 rounded-full"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(52, 225, 161, 0.5) 0%, rgba(52, 225, 161, 0.25) 40%, transparent 70%)",
                    filter: "blur(40px)",
                    transform: "translate(-50%, -50%)",
                    left: "50%",
                    top: "50%",
                  }}
                />
              </motion.div>
            </div>

            {/* Holographic scan line */}
            <motion.div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to bottom, transparent 0%, rgba(52, 225, 161, 0.15) 50%, transparent 100%)",
                backgroundSize: "100% 4px",
              }}
              initial={{ y: "-100%" }}
              animate={{ y: "100%" }}
              transition={{
                duration: 0.6,
                ease: "linear",
              }}
            />

            {/* Центральне світіння */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                className="rounded-full"
                style={{
                  width: "128px",
                  height: "128px",
                  background: "rgba(52, 225, 161, 0.3)",
                  filter: "blur(60px)",
                }}
                initial={{ scale: 0, opacity: 0 }}
                animate={{
                  scale: [0, 2.5, 0],
                  opacity: [0, 0.7, 0],
                }}
                transition={{
                  duration: 0.6,
                  ease: [0.4, 0, 0.2, 1],
                }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, scale: 0.99 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.01 }}
          transition={{
            duration: 0.5,
            ease: [0.4, 0, 0.2, 1],
            delay: isTransitioning ? 0.15 : 0,
          }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default XRTransition;

