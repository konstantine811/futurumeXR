import { RoutePath } from "@/config/route-config";
import { txtConfig } from "@/config/txt-config";
import { Link, useLocation } from "react-router-dom";

function Navigation() {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { path: RoutePath.HOME, label: "Головна" },
    { path: RoutePath.CAPABILITIES, label: "Можливості" },
    { path: RoutePath.ROADMAP, label: "Roadmap" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link
            to={RoutePath.HOME}
            className="text-2xl font-bold text-white hover:text-purple-400 transition-colors"
          >
            {txtConfig.title}
          </Link>

          <div className="flex gap-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-2 rounded-lg transition-all ${
                  isActive(item.path)
                    ? "bg-purple-600 text-white"
                    : "text-gray-300 hover:text-white hover:bg-white/10"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
