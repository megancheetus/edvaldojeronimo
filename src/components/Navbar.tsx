import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link as RouterLink } from "react-router-dom";

const navLinks = [
  { label: "Sobre", href: "#sobre", isHash: true },
  { label: "Atuação", href: "#atuacao", isHash: true },
  { label: "Formação", href: "#formacao", isHash: true },
  { label: "Blog", href: "/blog", isHash: false },
  { label: "Contato", href: "#contato", isHash: true },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 nav-glass ${
        scrolled ? "shadow-sm border-b border-border" : ""
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <a href="#" className="text-2xl font-bold text-primary tracking-tight">
          Edvaldo Jerônimo
        </a>

        {/* Desktop */}
        <nav className="hidden md:flex gap-8">
          {navLinks.map((l) => (
            l.isHash ? (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {l.label}
              </a>
            ) : (
              <RouterLink
                key={l.href}
                to={l.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {l.label}
              </RouterLink>
            )
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden bg-background border-b border-border"
          >
            <div className="flex flex-col gap-4 px-6 py-6">
              {navLinks.map((l) => (
                l.isHash ? (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                  >
                    {l.label}
                  </a>
                ) : (
                  <RouterLink
                    key={l.href}
                    to={l.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                  >
                    {l.label}
                  </RouterLink>
                )
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
