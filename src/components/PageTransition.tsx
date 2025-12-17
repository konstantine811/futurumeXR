import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Preloader from "./Preloader";
import { txtConfig } from "@/config/txt-config";

interface PageTransitionProps {
  children: React.ReactNode;
}

// Компонент для переходу між сторінками з Preloader
const PageTransition = ({ children }: PageTransitionProps) => {
  const location = useLocation();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [showContent, setShowContent] = useState(true);

  useEffect(() => {
    // Одразу ховаємо контент та показуємо прелоадер
    setShowContent(false);
    setIsTransitioning(true);

    // Після завершення анімації прелоадера показуємо новий контент
    const timer = setTimeout(() => {
      setIsTransitioning(false);
      // Невелика затримка перед показом контенту для плавності
      setTimeout(() => {
        setShowContent(true);
      }, 0);
    }, 100); // Тривалість показу Preloader + час на fade

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
      <AnimatePresence mode="wait">
        {isTransitioning && (
          <motion.div
            key="preloader-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ ease: "easeInOut", duration: 0.1 }}
            style={{ zIndex: 10000 }}
          >
            <Preloader text={txtConfig.title.toUpperCase()} />
          </motion.div>
        )}
      </AnimatePresence>

      {showContent && (
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0.3 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0.3 }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
            }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      )}
    </>
  );
};

export default PageTransition;
