import React from "react";
import { Stat, VisibilityState } from "@/types";

interface AboutSectionProps {
  stats: Stat[];
  isVisible: VisibilityState;
  whyChooseItems: string[];
}

const AboutSection: React.FC<AboutSectionProps> = ({
  stats,
  isVisible,
  whyChooseItems,
}) => {
  return (
    <section id="about" className="py-24 bg-white" data-animate>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`grid lg:grid-cols-2 gap-12 items-center ${isVisible["about"] ? "about-visible" : ""}`}
        >
          <div className="space-y-6 about-content">
            <div className="inline-block px-4 py-2 bg-teal-50 border border-teal-200 rounded-full text-teal-700 text-sm font-medium badge-pop">
              About Us
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 title-slide-up">
              Digital Arc Technologies
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed fade-in-text">
              We are a passionate team of web development experts with extensive
              experience in the software domain. Our mission is to help
              businesses establish a powerful online presence through innovative
              and efficient web solutions.
            </p>
            <p
              className="text-lg text-gray-700 leading-relaxed fade-in-text"
              style={{ animationDelay: "0.2s" }}
            >
              With years of industry experience, we understand what it takes to
              build websites that not only look great but also deliver
              measurable business results. We stay ahead of the curve with the
              latest technologies and best practices.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="stat-card bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="text-4xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent mb-2 counter-animate">
                    {stat.value}
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="why-choose bg-white p-8 lg:p-10 rounded-2xl shadow-xl border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 title-slide-up">
              Why Choose Us?
            </h3>
            <ul className="space-y-4">
              {whyChooseItems.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 list-item-slide"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-full flex items-center justify-center mt-1 checkmark-scale">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-700 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;