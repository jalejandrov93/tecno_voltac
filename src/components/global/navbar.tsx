"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Zap } from "lucide-react";
import { NAV_LINKS, COMPANY_INFO } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import Image from "next/image";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [logoError, setLogoError] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Cerrar el menú móvil cuando cambia la ruta
    // Este es un caso legítimo de sincronización con el router de Next.js
    // eslint-disable-next-line
    setIsOpen((prevIsOpen) => (prevIsOpen ? false : prevIsOpen));
  }, [pathname]);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleToggle();
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? "bg-white/40 dark:bg-slate-900/40 backdrop-blur-md shadow-lg shadow-slate-200/50 dark:shadow-slate-900/50"
        : "bg-transparent"
        }`}
    >
      <nav
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        aria-label="Navegación principal"
      >
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 group"
            aria-label="Tecnovoltac - Inicio"
          >
            {!logoError ? (
              <div className="relative h-14 group-hover:scale-105 transition-transform">
                <Image
                  src="/img/tv_logo.svg"
                  alt="Tecnovoltac Logo"
                  width={180}
                  height={180}
                  className="w-full h-full object-contain"
                  priority
                  onError={() => setLogoError(true)}
                />
              </div>
            ) : (
              <>
                <div className="w-10 h-10 rounded-xl bg-linear-to-br from-primary to-primary/80 flex items-center justify-center shadow-lg shadow-primary/30 group-hover:scale-105 transition-transform">
                  <Zap className="w-6 h-6 text-white" aria-hidden="true" />
                </div>
                <span className="text-xl font-bold text-slate-900 dark:text-white">
                  Tecno<span className="text-primary">voltac</span>
                </span>
              </>
            )}

          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2 border-b border-transparent font-medium transition-all ${isActive
                    ? "text-primary border-b border-blue-500"
                    : "text-slate-600  dark:text-slate-300 hover:text-primary hover:border-b hover:border-blue-500"
                    }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="hidden items-center gap-2 text-sm text-slate-600 dark:text-slate-300 hover:text-primary transition-colors"
              aria-label={`Llamar a ${COMPANY_INFO.phone}`}
            >
              <Phone className="w-4 h-4" aria-hidden="true" />
              <span className="hidden lg:inline">{COMPANY_INFO.phone}</span>
            </a>
            <Link href="/contacto">
              <Button
                variant="default"
                size="sm"
                className="group relative overflow-hidden bg-blue-600 px-8 py-4 font-semibold text-white transition-all dark:bg-blue-600 dark:hover:bg-blue-700 dark:text-white rounded-full w-30 hover:w-36 h-10"
              >
                <Phone className="w-4 h-4" aria-hidden="true" />
                Cotizar
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-linear-to-r from-transparent via-white/30 to-transparent skew-x-12"></div>
              </Button>
            </Link>
            <AnimatedThemeToggler />
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            onClick={handleToggle}
            onKeyDown={handleKeyDown}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {isOpen ? (
              <X className="w-6 h-6" aria-hidden="true" />
            ) : (
              <Menu className="w-6 h-6" aria-hidden="true" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              id="mobile-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden overflow-hidden "
            >
              <div className="py-4 space-y-1 border-t border-slate-200 bg-slate-100 dark:bg-slate-800 dark:border-slate-700 rounded-3xl p-1">
                {NAV_LINKS.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`block px-4 py-3 rounded-lg font-medium transition-all ${isActive
                        ? "text-primary bg-primary/10"
                        : "text-slate-600 dark:text-slate-300 hover:text-primary hover:bg-primary/5"
                        }`}
                      aria-current={isActive ? "page" : undefined}
                    >
                      {link.label}
                    </Link>
                  );
                })}
                <div className="pt-4 px-4 space-y-3">
                  <a
                    href={`tel:${COMPANY_INFO.phone}`}
                    className="items-center gap-2 text-slate-600 dark:text-slate-300 hidden"
                    aria-label={`Llamar a ${COMPANY_INFO.phone}`}
                  >
                    <Phone className="w-4 h-4" aria-hidden="true" />
                    {COMPANY_INFO.phone}
                  </a>
                  <Link href="/contacto">
                    <Button
                      variant="default"
                      className="w-full"
                    >
                      Solicitar Cotización
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Navbar;
