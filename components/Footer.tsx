import React from "react";
import { Instagram, Linkedin, MapPin } from "lucide-react";
import { FaGoogle } from "react-icons/fa";
import { NavLink } from "@/types";

interface FooterProps {
  navLinks: NavLink[];
}

const Footer: React.FC<FooterProps> = ({ navLinks }) => {
  return (
    <footer className="bg-gray-950 text-gray-400 py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="footer-section">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10  rounded-xl flex items-center justify-center">
                <img src="/logo.png" alt="Digital Arc Logo" />
              </div>
              <span className="text-white font-bold text-lg">Digital Arc Technologies</span>
            </div>
            <p className="text-sm leading-relaxed">
              Building exceptional web experiences that drive business growth
              and digital transformation.
            </p>
          </div>

          <div className="footer-section">
            <h4 className="text-white font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-teal-400 transition-colors inline-flex items-center gap-2 footer-link group"
                  >
                    <span className="transform transition-transform group-hover:translate-x-1">
                      →
                    </span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="text-white font-bold text-lg mb-4">Follow Us</h4>

            <div className="flex gap-3">
              {/* Instagram */}
              <a
                href="https://www.instagram.com/digitalarctechnologies"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="social-icon w-10 h-10 bg-gray-800 rounded-xl flex items-center justify-center
                 hover:bg-gradient-to-br hover:from-teal-500 hover:to-cyan-600
                 transition-all transform hover:-translate-y-1 hover:shadow-lg
                 hover:shadow-teal-500/30"
              >
                <Instagram className="w-5 h-5 text-white" />
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/company/digital-arc-technologies/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="social-icon w-10 h-10 bg-gray-800 rounded-xl flex items-center justify-center
                 hover:bg-gradient-to-br hover:from-teal-500 hover:to-cyan-600
                 transition-all transform hover:-translate-y-1 hover:shadow-lg
                 hover:shadow-teal-500/30"
              >
                <Linkedin className="w-5 h-5 text-white" />
              </a>

              {/* Google Business / Location */}
              <a
                href="https://share.google/Gfxis71gW3e1EokpA"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Google Business"
                className="social-icon w-10 h-10 bg-gray-800 rounded-xl flex items-center justify-center
                 hover:bg-gradient-to-br hover:from-teal-500 hover:to-cyan-600
                 transition-all transform hover:-translate-y-1 hover:shadow-lg
                 hover:shadow-teal-500/30"
              >
                <FaGoogle className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-sm">
          <p className="footer-copyright">
            &copy; 2026 Digital Arc Technologies. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
