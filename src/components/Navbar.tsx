"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { href: "/#servicios", label: "Servicios" },
  { href: "/#desarrollo-web", label: "Desarrollo web" },
  { href: "/#productos", label: "Productos" },
  { href: "/#nosotros", label: "Nosotros" },
  { href: "/#testimonios", label: "Testimonios" },
  { href: "/#faqs", label: "FAQ" },
  { href: "/#contacto", label: "Contacto" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-lg" : "bg-white/95 backdrop-blur-sm"
      }`}
    >
      <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-20 2xl:px-80">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <div className="relative w-auto h-10 md:h-10 aspect-[4/1] transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/fonts/logo/ctc-logo.jpg"
                alt="CTC Logo"
                fill
                className="object-contain"
                sizes="200px"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden xl:flex items-center gap-5 2xl:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-normal text-sm transition-colors duration-200 relative group"
                style={{ color: '#003d7a' }}
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full" style={{ backgroundColor: '#003d7a' }}></span>
              </Link>
            ))}
          </div>

          {/* CTA Button Desktop - CORREGIDO CON btn-primary */}
          <div className="hidden xl:block">
            <Link
              href="/#contacto"
              className="btn-primary !py-2.5 !px-7 text-sm"
            >
              Hablar con un asesor
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="xl:hidden p-2 focus:outline-none rounded-lg"
            style={{ color: '#003d7a' }}
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-200 shadow-lg overflow-hidden"
          >
            <div className="container-custom py-6 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-3 px-4 hover:bg-gray-50 font-medium transition-all rounded-lg"
                  style={{ color: '#003d7a' }}
                >
                  {link.label}
                </Link>
              ))}
              <div className="px-4 pt-4">
                {/* CTA Button Mobile - CORREGIDO CON btn-primary */}
                <Link
                  href="/#contacto"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="btn-primary w-full !py-3.5"
                >
                  Hablar con un asesor
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}