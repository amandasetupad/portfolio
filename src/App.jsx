import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { Nav } from "./components/Nav";
import { Footer } from "./components/Contact";
import { NotFound } from "./components/NotFound";
import { Home } from "./pages/Home";
import { CaseStudy } from "./pages/CaseStudy";

function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const target = document.getElementById(hash.slice(1));
      if (target) {
        requestAnimationFrame(() => {
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}

export default function App() {
  return (
    <>
      <a className="skip" href="#content">
        Skip to content
      </a>
      <ScrollManager />
      <Nav />
      <main id="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work/:slug" element={<CaseStudy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
