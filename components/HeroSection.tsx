import React from "react";
import Squares from "@/components/Squares";
import { Stat } from "@/types";

interface HeroSectionProps {
  stats: Stat[];
}

const HeroSection: React.FC<HeroSectionProps> = ({ stats }) => {
  return (
    <section id="home" className="relative pt-32 pb-20 px-4 overflow-hidden h-full ">
      {/* Squares Background */}
      <div className="absolute inset-0 w-full h-full">
        <Squares
          speed={0.5}
          squareSize={40}
          direction="diagonal"
          borderColor="#14b8a6"
          hoverFillColor="#0d9488"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 hero-content">
            <div className="badge-slide inline-flex items-center gap-2 px-4 py-2 bg-teal-50 border border-teal-200 rounded-full text-teal-700 text-sm font-medium">
              <span className="w-2 h-2 bg-teal-500 rounded-full pulse-dot"></span>
              Trusted by 50+ businesses
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight hero-title">
              Building Digital
              <span className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent gradient-text">
                {" "}
                Excellence
              </span>
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed hero-description">
              Transform your business with cutting-edge web solutions. We craft
              stunning, high-performance websites that drive measurable results
              and elevate your brand.
            </p>

            <div className="flex flex-wrap gap-4 hero-buttons">
              <a
                href="#contact"
                className="group bg-gradient-to-r from-teal-500 to-cyan-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-xl hover:shadow-teal-500/40 transition-all transform hover:-translate-y-1 flex items-center gap-2 button-pulse"
              >
                Start Your Project
                <svg
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
              <a
                href="#services"
                className="border-2 border-gray-900 text-gray-900 px-8 py-4 rounded-xl font-semibold hover:bg-gray-900 hover:text-white transition-all button-grow"
              >
                Our Services
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 stats-appear">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="stat-item"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="text-3xl font-bold text-gray-900 stat-value">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          <img
            src="/gifs/hero.gif"
            style={{ height: "550px" }}
            alt="Hero illustration"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;