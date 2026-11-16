import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { navigation, profile } from "../content/site";

export function Nav() {
  const { pathname, hash } = useLocation();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [current, setCurrent] = useState("");

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setScrolled(window.scrollY > 12);
      setProgress(max > 0 ? window.scrollY / max : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  useEffect(() => {
    setOpen(false);
  }, [pathname, hash]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    if (pathname !== "/") {
      setCurrent("");
      return undefined;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setCurrent(visible.target.id);
      },
      { rootMargin: "-35% 0px -50% 0px", threshold: [0.1, 0.25, 0.5] }
    );
    navigation.forEach((item) => {
      const node = document.getElementById(item.id);
      if (node) observer.observe(node);
    });
    return () => observer.disconnect();
  }, [pathname]);

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""} ${open ? "is-open" : ""}`}>
      <div className="scroll-progress" style={{ transform: `scaleX(${progress})` }} />
      <Link className="brand" to="/#top">
        {profile.brand}
      </Link>
      <button
        className="nav-toggle"
        type="button"
        aria-expanded={open}
        aria-controls="site-nav"
        onClick={() => setOpen((value) => !value)}
      >
        <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
        <i />
        <i />
      </button>
      <nav id="site-nav" className="nav-panel" aria-label="Primary">
        {navigation.map((item) => (
          <Link
            key={item.id}
            to={item.href}
            className={current === item.id ? "is-current" : undefined}
            aria-current={current === item.id ? "true" : undefined}
            onClick={() => setOpen(false)}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
