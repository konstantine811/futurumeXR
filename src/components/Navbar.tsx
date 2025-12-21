import React, { useState, useEffect } from "react";
import { Box, Menu, X, LogOut, User } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { RoutePath } from "@/config/route-config";
import { ThemeSelector } from "@/components/ThemeSelector";

interface NavbarProps {
  onLoginClick?: () => void;
  user?: { email: string; role: string; name: string } | null;
  onLogout?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({
  onLoginClick,
  user = null,
  onLogout,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const location = useLocation();

  // Smooth scroll to section
  const scrollToSection = (sectionId: string, e?: React.MouseEvent<HTMLAnchorElement>) => {
    if (e) {
      e.preventDefault();
    }
    
    // If we're not on the home page, navigate to home first
    if (location.pathname !== RoutePath.HOME) {
      window.location.href = `${RoutePath.HOME}#${sectionId}`;
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 100; // Offset for fixed navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    
    setIsMobileOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle hash navigation on mount
  useEffect(() => {
    if (location.pathname === RoutePath.HOME && window.location.hash) {
      const hash = window.location.hash.substring(1); // Remove #
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          const offset = 100; // Offset for fixed navbar
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }
      }, 300); // Small delay to ensure page is rendered
    }
  }, [location.pathname]);

  // Close user menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isUserMenuOpen && !target.closest(".user-menu-container")) {
        setIsUserMenuOpen(false);
      }
    };

    if (isUserMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () =>
        document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [isUserMenuOpen]);

  const handleLogin = () => {
    if (onLoginClick) {
      onLoginClick();
    } else {
      // Default behavior - navigate to login page or show modal
      console.log("Login clicked");
    }
  };

  const handleLogout = () => {
    if (onLogout) {
      onLogout();
    } else {
      // Default behavior
      console.log("Logout clicked");
    }
    setIsUserMenuOpen(false);
  };

  return (
    <nav className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
      <div
        className={`glass rounded-full px-6 py-3 flex items-center justify-between gap-12 shadow-2xl shadow-black/50 transition-all duration-500 pointer-events-auto ${
          isScrolled ? "px-8 py-4" : ""
        }`}
      >
        <a
          href={RoutePath.HOME}
          onClick={(e) => {
            if (location.pathname === RoutePath.HOME) {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
          className="flex items-center gap-3 navbar-text"
        >
          <div className="relative w-6 h-6 flex items-center justify-center">
            <div className="absolute inset-0 bg-emerald-500 blur opacity-40"></div>
            <Box className="navbar-text relative z-10 w-5 h-5 stroke-[1.5]" />
          </div>
          <span className="navbar-text font-medium text-sm tracking-tight">
            Futurum XR
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8 text-xs font-medium navbar-text-secondary">
          <a
            href="#solutions"
            onClick={(e) => scrollToSection("solutions", e)}
            className="navbar-text-hover transition-colors cursor-pointer"
          >
            Рішення
          </a>
          <a
            href="#examples"
            onClick={(e) => scrollToSection("examples", e)}
            className="navbar-text-hover transition-colors cursor-pointer"
          >
            Приклади
          </a>
          <a
            href="#roadmap"
            onClick={(e) => scrollToSection("roadmap", e)}
            className="navbar-text-hover transition-colors cursor-pointer"
          >
            Roadmap
          </a>
        </div>

        <div className="flex items-center gap-4">
          {/* Theme Selector */}
          <ThemeSelector variant="dropdown" />

          {user ? (
            <div className="relative user-menu-container">
              <button
                onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                className="flex items-center gap-3 pl-2 pr-4 py-1 bg-white/5 border border-white/10 rounded-full hover:border-emerald-500/30 transition-all"
              >
                <div className="w-7 h-7 rounded-full bg-emerald-500 flex items-center justify-center text-black font-bold text-[10px]">
                  {user.name
                    ? user.name[0].toUpperCase()
                    : user.email[0].toUpperCase()}
                </div>
                <div className="hidden sm:block text-left">
                  <p className="text-[10px] font-bold text-white truncate max-w-[80px]">
                    {user.name || user.email}
                  </p>
                </div>
              </button>

              {isUserMenuOpen && (
                <div className="absolute top-full right-0 mt-4 w-48 glass rounded-2xl shadow-2xl py-2 animate-in fade-in zoom-in-95 origin-top-right overflow-hidden">
                  <button className="w-full px-4 py-2 text-left text-[11px] font-medium text-slate-300 hover:bg-white/5 transition-colors flex items-center gap-2">
                    <User size={14} /> Профіль
                  </button>
                  <button
                    onClick={handleLogout}
                    className="w-full px-4 py-2 text-left text-[11px] font-medium text-red-400 hover:bg-red-500/10 transition-colors flex items-center gap-2"
                  >
                    <LogOut size={14} /> Вийти
                  </button>
                </div>
              )}
            </div>
          ) : (
            <button
              onClick={handleLogin}
              className="px-4 py-1.5 text-xs font-medium bg-white text-black hover:bg-slate-200 rounded-full transition-all"
            >
              Увійти
            </button>
          )}

          <button
            className="md:hidden navbar-text-secondary navbar-text-hover transition-colors"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
          >
            {isMobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileOpen && (
        <div className="md:hidden absolute top-20 left-4 right-4 glass rounded-[32px] p-6 flex flex-col gap-4 shadow-2xl animate-in fade-in slide-in-from-top-4 pointer-events-auto">
          <a
            href="#solutions"
            onClick={(e) => scrollToSection("solutions", e)}
            className="text-sm font-medium navbar-text-secondary navbar-text-hover px-4 py-2 transition-colors cursor-pointer"
          >
            Рішення
          </a>
          <a
            href="#examples"
            onClick={(e) => scrollToSection("examples", e)}
            className="text-sm font-medium navbar-text-secondary navbar-text-hover px-4 py-2 transition-colors cursor-pointer"
          >
            Приклади
          </a>
          <a
            href="#roadmap"
            onClick={(e) => scrollToSection("roadmap", e)}
            className="text-sm font-medium navbar-text-secondary navbar-text-hover px-4 py-2 transition-colors cursor-pointer"
          >
            Roadmap
          </a>

          {/* Theme Selector in Mobile Menu */}
          <ThemeSelector
            variant="mobile"
            onSelect={() => setIsMobileOpen(false)}
          />

          {!user && (
            <button
              onClick={() => {
                handleLogin();
                setIsMobileOpen(false);
              }}
              className="w-full py-4 bg-white text-black font-bold rounded-2xl mt-4 transition-all hover:bg-slate-200"
            >
              Увійти
            </button>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
