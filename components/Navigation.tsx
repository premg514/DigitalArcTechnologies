import React from "react";
import Link from "next/link";
import { NavLink } from "@/types";

interface NavigationProps {
  scrolled: boolean;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  navLinks: NavLink[];
}

const Navigation: React.FC<NavigationProps> = ({
  scrolled,
  isOpen,
  setIsOpen,
  navLinks,
}) => {
  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/90 backdrop-blur-xl py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group logo-bounce">
            <div className="relative w-12 h-12 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:shadow-teal-500/50 transition-all duration-300 group-hover:scale-110">
              <img src="/logo.png" alt="Digital Arc Logo" />
              <div className="absolute inset-0 rounded-xl bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                className="nav-link text-sm font-medium text-gray-700 hover:text-teal-600 transition-colors relative group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {link.name}
                <span className="nav-underline absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-teal-600 to-cyan-600 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
            <a
              href="#contact"
              className="cta-button bg-gradient-to-r from-teal-500 to-cyan-600 text-white px-6 py-2.5 rounded-xl text-sm font-medium hover:shadow-lg hover:shadow-teal-500/40 transition-all transform hover:scale-105 active:scale-95"
            >
              Get Started
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6 text-gray-700 transition-transform duration-300"
              style={{ transform: isOpen ? "rotate(90deg)" : "rotate(0deg)" }}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 mobile-menu-slide">
            <div className="flex flex-col gap-4 bg-white rounded-2xl p-6 shadow-xl">
              {navLinks.map((link, index) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="mobile-menu-item text-base font-medium text-gray-700 hover:text-teal-600 transition-colors py-2"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                className="bg-gradient-to-r from-teal-500 to-cyan-600 text-white px-6 py-3 rounded-xl text-center font-medium shadow-lg shadow-teal-500/30"
                onClick={() => setIsOpen(false)}
              >
                Get Started
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;