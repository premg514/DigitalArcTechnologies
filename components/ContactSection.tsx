import React from "react";
import { FormData, ContactInfo, VisibilityState } from "@/types";

interface ContactSectionProps {
  formData: FormData;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  contactInfo: ContactInfo[];
  isVisible: VisibilityState;
}

const ContactSection: React.FC<ContactSectionProps> = ({
  formData,
  handleChange,
  handleSubmit,
  contactInfo,
  isVisible,
}) => {
  const formFields = [
    {
      name: "name" as keyof FormData,
      label: "Name",
      type: "text",
      placeholder: "Your Name",
      required: true,
    },
    {
      name: "email" as keyof FormData,
      label: "Email",
      type: "email",
      placeholder: "your@email.com",
      required: true,
    },
    {
      name: "phone" as keyof FormData,
      label: "Phone",
      type: "tel",
      placeholder: "+91 XXXXX XXXXX",
      required: false,
    },
  ];

  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-teal-900 relative overflow-hidden"
      data-animate
    >
      {/* Animated background */}
      <div className="absolute inset-0 opacity-20">
        <div className="mesh-gradient"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          className={`text-center mb-16 ${isVisible["contact"] ? "section-visible" : ""}`}
        >
          <div className="inline-block px-4 py-2 bg-teal-500/20 border border-teal-400/30 rounded-full text-teal-300 text-sm font-medium mb-4 badge-pop">
            Let's Talk
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4 title-slide-up">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto subtitle-fade">
            Ready to start your project? We'd love to hear from you!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8 contact-info">
            <h3 className="text-2xl font-bold text-white mb-6 fade-in-text">
              Contact Information
            </h3>

            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <div
                  key={index}
                  className="contact-card flex items-start gap-4 p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-xl flex items-center justify-center icon-pulse">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      {item.icon}
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-teal-400 mb-1">
                      {item.title}
                    </p>
                    <p className="text-white">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form bg-white rounded-2xl p-8 lg:p-10 shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              {formFields.map((field, index) => (
                <div
                  key={field.name}
                  className="form-group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    name={field.name}
                    value={formData[field.name]}
                    onChange={handleChange}
                    required={field.required}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent text-gray-900 placeholder-gray-400 transition-all outline-none input-focus"
                    placeholder={field.placeholder}
                  />
                </div>
              ))}

              <div className="form-group" style={{ animationDelay: "0.3s" }}>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent text-gray-900 placeholder-gray-400 transition-all outline-none resize-none input-focus"
                  placeholder="Tell us about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-teal-500 to-cyan-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-xl hover:shadow-teal-500/40 transition-all transform hover:-translate-y-1 active:scale-95 submit-button"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;