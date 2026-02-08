import React from "react";
import Hyperspeed from "@/components/Hyperspeed";
import { Stat } from "@/types";

interface HeroSectionProps {
  stats: Stat[];
}

const HeroSection: React.FC<HeroSectionProps> = ({ stats }) => {
  return (
    <section
      id="home"
      className="relative pt-32 pb-20 px-4 overflow-hidden h-full "
    >
      {/* Squares Background */}
      {/* <div className="absolute inset-0 w-full h-full">
     <Hyperspeed
  effectOptions={{"distortion":"turbulentDistortion","length":400,"roadWidth":10,"islandWidth":2,"lanesPerRoad":3,"fov":90,"fovSpeedUp":150,"speedUp":2,"carLightsFade":0.4,"totalSideLightSticks":20,"lightPairsPerRoadWay":40,"shoulderLinesWidthPercentage":0.05,"brokenLinesWidthPercentage":0.1,"brokenLinesLengthPercentage":0.5,"lightStickWidth":[0.12,0.5],"lightStickHeight":[1.3,1.7],"movingAwaySpeed":[60,80],"movingCloserSpeed":[-120,-160],"carLightsLength":[12,80],"carLightsRadius":[0.05,0.14],"carWidthPercentage":[0.3,0.5],"carShiftX":[-0.8,0.8],"carFloorSeparation":[0,5],"colors":{"roadColor":526344,"islandColor":657930,"background":0,"shoulderLines":1250072,"brokenLines":1250072,"leftCars":[14177983,6770850,12732332],"rightCars":[242627,941733,3294549],"sticks":242627}}}
/>
      </div> */}

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
