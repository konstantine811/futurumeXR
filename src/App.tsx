import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Preloader from "./components/Preloader";
import { RoutePath } from "./config/route-config";
import Navbar from "./components/Navbar";
import PageTransition from "./components/PageTransition";
import { Footer } from "./components/Footer";

// Ліниве завантаження сторінок
const Home = lazy(() => import("./pages/Home"));
const Capabilities = lazy(() => import("./pages/Capabilities"));
const Roadmap = lazy(() => import("./pages/Roadmap"));
const ThemeSettings = lazy(() => import("./pages/ThemeSettings"));

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white dark:bg-darker text-slate-600 dark:text-slate-300 font-sans selection:bg-accent selection:text-darker overflow-x-hidden transition-colors duration-300">
        <Navbar />
        <Suspense fallback={<Preloader text="FUTURUM XR" />}>
          <PageTransition>
            <Routes>
              <Route path={RoutePath.HOME} element={<Home />} />
              <Route path={RoutePath.CAPABILITIES} element={<Capabilities />} />
              <Route path={RoutePath.ROADMAP} element={<Roadmap />} />
              <Route
                path={RoutePath.THEME_SETTINGS}
                element={<ThemeSettings />}
              />
            </Routes>
          </PageTransition>
        </Suspense>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
