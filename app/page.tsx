"use client";

import { useState } from "react";
import CursorGlow from "@/components/CursorGlow";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import PortfolioSection from "@/components/PortfolioSection";
import AboutSection from "@/components/AboutSection";
import TechnologiesSection from "@/components/TechnologiesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import {
  useScrollTracking,
  useMousePosition,
  useContactForm,
} from "@/hooks/useCustomHooks";
import {
  navLinks,
  services,
  projects,
  stats,
  technologies,
  whyChooseItems,
  contactInfo,
} from "@/data/constants";
import "@/styles/animations.css";

export default function Home() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { scrolled, isVisible } = useScrollTracking();
  const mousePosition = useMousePosition();
  const { formData, handleChange, handleSubmit } = useContactForm();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-teal-50/30 overflow-x-hidden font-sans ">
      <CursorGlow mousePosition={mousePosition} />

      <Navigation
        scrolled={scrolled}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        navLinks={navLinks}
      />

      <HeroSection stats={stats} />

      <ServicesSection services={services} isVisible={isVisible} />

      <PortfolioSection projects={projects} isVisible={isVisible} />

      <AboutSection
        stats={stats}
        isVisible={isVisible}
        whyChooseItems={whyChooseItems}
      />

      <TechnologiesSection technologies={technologies} isVisible={isVisible} />

      <ContactSection
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        contactInfo={contactInfo}
        isVisible={isVisible}
      />

      <Footer navLinks={navLinks} />
    </div>
  );
}