import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useActiveSection } from "../hooks/useActiveSection";

const NAV_ITEMS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

const SECTION_IDS = ["about", "skills", "projects", "experience", "education", "contact"];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const activeSection = useActiveSection(SECTION_IDS);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-ink/90 backdrop-blur-xl border-b border-ink-muted shadow-[0_4px_40px_rgba(0,0,0,0.4)]"
            : "bg-transparent"
        }`}
      >
        <div className="section-container flex items-center justify-between h-16 lg:h-18">
          {/* Logo */}
          <a href="#hero" className="font-display font-800 text-lg text-frost tracking-tight">
            AKP<span className="text-accent">.</span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map(({ label, href }) => {
              const id = href.replace("#", "");
              return (
                <a
                  key={label}
                  href={href}
                  className={`nav-link ${activeSection === id ? "active" : ""}`}
                >
                  {label}
                  {activeSection === id && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute -bottom-0.5 left-0 right-0 h-0.5 bg-accent rounded-full"
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          {/* <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => window.open("mailto:pandeyaman997@gmail.com", "_blank")}
              className="btn-secondary text-sm py-2 px-4"
            >
              Hire Me
            </button>
          </div> */}

          {/* Mobile menu button */}
          <button
            className="md:hidden text-silver hover:text-frost transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed top-16 left-0 right-0 z-40 bg-ink-soft/95 backdrop-blur-xl border-b border-ink-muted md:hidden"
          >
            <nav className="section-container py-6 flex flex-col gap-4">
              {NAV_ITEMS.map(({ label, href }) => (
                
                <a  key={label}
                  href={href}
                  className="font-display text-silver hover:text-frost transition-colors py-1 text-base"
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                </a>
              ))}
              {/* <button
                onClick={() => {
                  setMenuOpen(false);
                  window.open("mailto:pandeyaman997@gmail.com", "_blank");
                }}
                className="btn-primary mt-2 self-start"
              >
                Hire Me
              </button> */}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};