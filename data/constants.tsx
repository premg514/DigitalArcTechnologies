import React from "react";
import { NavLink, Service, Project, Stat, Technology, ContactInfo } from "@/types";

export const navLinks: NavLink[] = [
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Work", href: "#portfolio" },
  { name: "Contact", href: "#contact" },
];

export const services: Service[] = [
  {
    icon: "🎨",
    title: "Web Design",
    description:
      "Beautiful, user-friendly designs that captivate your audience and enhance user experience.",
    features: ["UI/UX Design", "Responsive Layouts", "Brand Identity"],
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: "💻",
    title: "Web Development",
    description:
      "Robust, scalable websites built with modern technologies like Next.js, React, and Node.js.",
    features: ["Custom Development", "API Integration", "Database Design"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: "🚀",
    title: "E-Commerce Solutions",
    description:
      "Powerful online stores with secure payment integration and inventory management.",
    features: ["Payment Gateway", "Product Management", "Analytics"],
    color: "from-teal-500 to-green-500",
  },
  {
    icon: "📱",
    title: "Responsive Design",
    description:
      "Mobile-first websites that look perfect on all devices and screen sizes.",
    features: ["Mobile Optimization", "Cross-browser", "Touch-friendly"],
    color: "from-orange-500 to-red-500",
  },
  {
    icon: "⚡",
    title: "Performance Optimization",
    description:
      "Lightning-fast websites optimized for speed, SEO, and user engagement.",
    features: ["Speed Optimization", "SEO Best Practices", "Core Web Vitals"],
    color: "from-yellow-500 to-orange-500",
  },
  {
    icon: "🔧",
    title: "Maintenance & Support",
    description:
      "Ongoing support and updates to keep your website running smoothly.",
    features: ["24/7 Support", "Regular Updates", "Security Patches"],
    color: "from-indigo-500 to-purple-500",
  },
];

export const projects: Project[] = [
  {
    id: 0,
    title: "Spilora",
    description:
      "an e-commerce platform with products list, inventory management, and cart.",
    category: "E-Commerce",
    categoryColor: "text-teal-600",
    technologies: ["Next.js", "Tailwind"],
    techColor: "bg-teal-50 text-teal-700",
    clientInfo: "Organic Farm Client",
    clientIcon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
      </svg>
    ),
    gradient: "from-teal-500 to-cyan-600",
    emoji: "🛒",
  },
  {
    id: 1,
    title: "Creative Studio Portfolio",
    description:
      "Modern portfolio website with stunning animations, interactive galleries, and seamless user experience.",
    category: "Web Design",
    categoryColor: "text-purple-600",
    technologies: ["React", "Tailwind", "Framer"],
    techColor: "bg-purple-50 text-purple-700",
    clientInfo: "2024",
    clientIcon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
        <path
          fillRule="evenodd"
          d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
          clipRule="evenodd"
        />
      </svg>
    ),
    gradient: "from-purple-500 to-pink-600",
    emoji: "🎨",
  },
  {
    id: 2,
    title: "Business Dashboard",
    description:
      "Comprehensive business management platform with real-time analytics, team collaboration, and reporting tools.",
    category: "SaaS Platform",
    categoryColor: "text-blue-600",
    technologies: ["Next.js", "PostgreSQL", "AWS"],
    techColor: "bg-blue-50 text-blue-700",
    clientInfo: "Growing Client",
    clientIcon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
        <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
      </svg>
    ),
    gradient: "from-blue-500 to-indigo-600",
    emoji: "📱",
  },
  {
    id: 3,
    title: "Restaurant Ordering System",
    description:
      "Online ordering platform with menu management, real-time order tracking, and customer loyalty program.",
    category: "Food & Beverage",
    categoryColor: "text-orange-600",
    technologies: ["React", "Express", "Stripe"],
    techColor: "bg-orange-50 text-orange-700",
    clientInfo: "Local Business",
    clientIcon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
        <path
          fillRule="evenodd"
          d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
          clipRule="evenodd"
        />
      </svg>
    ),
    gradient: "from-orange-500 to-red-600",
    emoji: "🍕",
  },
  {
    id: 4,
    title: "Medical Appointment Portal",
    description:
      "Patient management system with appointment scheduling, medical records, and telemedicine capabilities.",
    category: "Healthcare",
    categoryColor: "text-green-600",
    technologies: ["Next.js", "Socket.io", "MySQL"],
    techColor: "bg-green-50 text-green-700",
    clientInfo: "Certified Secure",
    clientIcon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
        <path
          fillRule="evenodd"
          d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
          clipRule="evenodd"
        />
      </svg>
    ),
    gradient: "from-green-500 to-emerald-600",
    emoji: "🏥",
  },
  {
    id: 5,
    title: "E-Learning Platform",
    description:
      "Interactive learning management system with course creation, progress tracking, and certification features.",
    category: "Education",
    categoryColor: "text-yellow-600",
    technologies: ["React", "Node.js", "MongoDB"],
    techColor: "bg-yellow-50 text-yellow-700",
    clientInfo: "EdTech Startup",
    clientIcon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
        <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
      </svg>
    ),
    gradient: "from-yellow-500 to-amber-600",
    emoji: "📚",
  },
];

export const stats: Stat[] = [
  { value: "98%", label: "Satisfaction" },
  { value: "3+", label: "Years Exp" },
];

export const technologies: Technology[] = [
  { name: "Next.js", icon: "⚡", color: "from-gray-800 to-black" },
  { name: "React", icon: "⚛️", color: "from-blue-500 to-blue-700" },
  { name: "Tailwind CSS", icon: "🎨", color: "from-teal-500 to-cyan-600" },
  { name: "Node.js", icon: "🚀", color: "from-green-500 to-green-700" },
  { name: "TypeScript", icon: "📘", color: "from-blue-600 to-blue-800" },
  { name: "MongoDB", icon: "🍃", color: "from-green-600 to-green-800" },
  { name: "PostgreSQL", icon: "🐘", color: "from-blue-700 to-indigo-700" },
  { name: "AWS", icon: "☁️", color: "from-orange-500 to-orange-700" },
];

export const whyChooseItems: string[] = [
  "Experienced team with proven track record",
  "Modern technology stack (Next.js, React, Tailwind CSS)",
  "Responsive and mobile-first approach",
  "SEO-optimized websites",
  "Timely delivery and competitive pricing",
  "Ongoing support and maintenance",
];

export const contactInfo: ContactInfo[] = [
  {
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
      />
    ),
    title: "Phone",
    value: "+91 63029 03019",
  },
  {
    icon: (
      <>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </>
    ),
    title: "Location",
    value: "Tadepalligudem, Andhra Pradesh, India",
  },
];