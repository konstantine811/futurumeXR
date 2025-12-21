import React, { useState, useEffect } from "react";
import { Box, Menu, X, LogOut, User, Palette } from "lucide-react";
import { Link } from "react-router-dom";
import { RoutePath } from "@/config/route-config";
import {
  getTheme,
  setTheme,
  THEMES,
  THEME_LABELS,
  type Theme,
} from "@/utils/theme";

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
  const [isThemeMenuOpen, setIsThemeMenuOpen] = useState(false);
  const [themeMenuTimeout, setThemeMenuTimeout] = useState<ReturnType<
    typeof setTimeout
  > | null>(null);
  const [currentTheme, setCurrentTheme] = useState<Theme>("dark");

  useEffect(() => {
    const savedTheme = getTheme();
    setCurrentTheme(savedTheme);

    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close user menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isUserMenuOpen && !target.closest(".user-menu-container")) {
        setIsUserMenuOpen(false);
      }
      if (isThemeMenuOpen && !target.closest(".theme-menu-container")) {
        setIsThemeMenuOpen(false);
      }
    };

    if (isUserMenuOpen || isThemeMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () =>
        document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [isUserMenuOpen, isThemeMenuOpen]);

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

  const handleThemeChange = (newTheme: Theme) => {
    setTheme(newTheme);
    setCurrentTheme(newTheme);
  };

  const handleThemeMenuEnter = () => {
    // Clear any pending timeout
    if (themeMenuTimeout) {
      clearTimeout(themeMenuTimeout);
      setThemeMenuTimeout(null);
    }
    setIsThemeMenuOpen(true);
  };

  const handleThemeMenuLeave = () => {
    // Add delay before closing to allow cursor to move to menu
    const timeout = setTimeout(() => {
      setIsThemeMenuOpen(false);
    }, 150); // 150ms delay
    setThemeMenuTimeout(timeout);
  };

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (themeMenuTimeout) {
        clearTimeout(themeMenuTimeout);
      }
    };
  }, [themeMenuTimeout]);

  return (
    <nav className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
      <div
        className={`glass rounded-full px-6 py-3 flex items-center justify-between gap-12 shadow-2xl shadow-black/50 transition-all duration-500 pointer-events-auto ${
          isScrolled ? "px-8 py-4 bg-white/[0.04]" : ""
        }`}
      >
        <Link
          to={RoutePath.HOME}
          className="flex items-center gap-3 navbar-text"
        >
          <div className="relative w-6 h-6 flex items-center justify-center">
            <div className="absolute inset-0 bg-emerald-500 blur opacity-40"></div>
            <Box className="navbar-text relative z-10 w-5 h-5 stroke-[1.5]" />
          </div>
          <span className="navbar-text font-medium text-sm tracking-tight">
            Futurum XR
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8 text-xs font-medium navbar-text-secondary">
          <Link
            to={RoutePath.CAPABILITIES}
            className="navbar-text-hover transition-colors"
          >
            Можливості
          </Link>
          <Link
            to={RoutePath.ROADMAP}
            className="navbar-text-hover transition-colors"
          >
            Roadmap
          </Link>
        </div>

        <div className="flex items-center gap-4">
          {/* Theme Selector */}
          <div
            className="relative theme-menu-container"
            onMouseEnter={handleThemeMenuEnter}
            onMouseLeave={handleThemeMenuLeave}
          >
            <button className="p-1.5 rounded-full hover:bg-white/5 dark:hover:bg-white/5 light:hover:bg-black/5 exam:hover:bg-black/5 transition-colors navbar-text-secondary navbar-text-hover">
              <Palette size={16} />
            </button>

            {/* Theme Dropdown */}
            {isThemeMenuOpen && (
              <div className="absolute top-full right-0 mt-2 w-40 glass border-white/10 bg-black/80 backdrop-blur-xl rounded-xl shadow-2xl py-2 overflow-hidden theme-menu-dropdown">
                <div className="px-1">
                  {THEMES.map((themeOption) => (
                    <button
                      key={themeOption}
                      onClick={() => handleThemeChange(themeOption)}
                      className={`w-full text-left px-3 py-2 text-xs rounded-lg transition-all duration-150 ${
                        currentTheme === themeOption
                          ? "bg-emerald-500/20 text-emerald-400 font-medium"
                          : "text-slate-300 hover:text-white hover:bg-white/5"
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        {currentTheme === themeOption && (
                          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                        )}
                        <span>{THEME_LABELS[themeOption]}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

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
                <div className="absolute top-full right-0 mt-4 w-48 glass rounded-2xl shadow-2xl py-2 animate-in fade-in zoom-in-95 origin-top-right overflow-hidden border border-white/10">
                  <button className="w-full px-4 py-2 text-left text-[11px] font-medium text-slate-300 hover:bg-white/[0.05] transition-colors flex items-center gap-2">
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
        <div className="md:hidden absolute top-20 left-4 right-4 glass rounded-[32px] p-6 flex flex-col gap-4 shadow-2xl animate-in fade-in slide-in-from-top-4 border border-white/10 pointer-events-auto">
          <Link
            to={RoutePath.CAPABILITIES}
            className="text-sm font-medium navbar-text-secondary navbar-text-hover px-4 py-2 transition-colors"
            onClick={() => setIsMobileOpen(false)}
          >
            Можливості
          </Link>
          <Link
            to={RoutePath.ROADMAP}
            className="text-sm font-medium navbar-text-secondary navbar-text-hover px-4 py-2 transition-colors"
            onClick={() => setIsMobileOpen(false)}
          >
            Roadmap
          </Link>

          {/* Theme Selector in Mobile Menu */}
          <div className="px-4 py-2">
            <div className="text-xs font-medium navbar-text-secondary mb-2">
              Тема
            </div>
            <div className="flex flex-wrap gap-2">
              {THEMES.map((themeOption) => (
                <button
                  key={themeOption}
                  onClick={() => {
                    handleThemeChange(themeOption);
                    setIsMobileOpen(false);
                  }}
                  className={`px-3 py-1 rounded-full text-[10px] font-medium transition-all ${
                    currentTheme === themeOption
                      ? "bg-emerald-500 text-black"
                      : "bg-white/5 text-slate-300 hover:bg-white/10"
                  }`}
                >
                  {THEME_LABELS[themeOption]}
                </button>
              ))}
            </div>
          </div>

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
