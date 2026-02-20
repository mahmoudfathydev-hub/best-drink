"use client";
import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Send, MapPin, Phone, Mail } from "lucide-react";
import { useFlavor } from "@/context/FlavorContext";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const { currentFlavor } = useFlavor();
  const sectionRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate Section Title
      gsap.from(".contact-title", {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      });

      // Animate Contact Info Cards (Staggered)
      gsap.from(infoRef.current?.children || [], {
        x: -50,
        opacity: 0,
        stagger: 0.2,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: infoRef.current,
          start: "top 80%",
        },
      });

      // Animate Form Inputs (Staggered)
      gsap.from(formRef.current?.children || [], {
        x: 50,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: formRef.current,
          start: "top 80%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center bg-zinc-950 py-12 sm:py-16 md:py-20 px-4 overflow-hidden"
    >
      {/* Background Blob for Atmosphere */}
      <div
        className="absolute top-[-10%] right-[-5%] w-64 h-64 sm:w-80 sm:h-80 md:w-[600px] md:h-[600px] rounded-full blur-[80px] sm:blur-[100px] md:blur-[120px] opacity-20 pointer-events-none"
        style={{ backgroundColor: currentFlavor.backgroundColor }}
      />

      <div
        className="absolute bottom-[-5%] left-[-5%] w-48 h-48 sm:w-64 sm:h-64 md:w-[500px] md:h-[500px] rounded-full blur-[60px] sm:blur-[80px] md:blur-[100px] opacity-10 pointer-events-none"
        style={{ backgroundColor: currentFlavor.backgroundColor }}
      />

      <div className="container mx-auto max-w-6xl z-10">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16 contact-title">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 mb-3 sm:mb-4">
            Get in Touch
          </h2>
          <p className="text-gray-400 text-base sm:text-lg md:text-xl max-w-2xl mx-auto">
            Have questions or want to collaborate? We'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 md:gap-20 items-start">
          {/* Contact Info Side */}
          <div ref={infoRef} className="space-y-6 sm:space-y-8">
            {/* Info Cards */}
            <div className="p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors duration-300 group">
              <div className="flex items-center gap-3 sm:gap-4 md:gap-6">
                <div
                  className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-xl sm:rounded-2xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110"
                  style={{
                    backgroundColor: `${currentFlavor.backgroundColor}20`,
                    color: currentFlavor.backgroundColor,
                  }}
                >
                  <Mail size={16} className="sm:w-5 sm:h-5 md:w-6 md:h-6" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg md:text-xl font-semibold text-white mb-1">
                    Email Us
                  </h3>
                  <p className="text-gray-400 group-hover:text-white transition-colors text-sm sm:text-base">
                    Mahmoudfathy.dev@gmail.com
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors duration-300 group">
              <div className="flex items-center gap-3 sm:gap-4 md:gap-6">
                <div
                  className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-xl sm:rounded-2xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110"
                  style={{
                    backgroundColor: `${currentFlavor.backgroundColor}20`,
                    color: currentFlavor.backgroundColor,
                  }}
                >
                  <Phone size={16} className="sm:w-5 sm:h-5 md:w-6 md:h-6" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg md:text-xl font-semibold text-white mb-1">
                    Call Us
                  </h3>
                  <p className="text-gray-400 group-hover:text-white transition-colors text-sm sm:text-base">
                    +20 120 048 1281
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors duration-300 group">
              <div className="flex items-center gap-3 sm:gap-4 md:gap-6">
                <div
                  className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-xl sm:rounded-2xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110"
                  style={{
                    backgroundColor: `${currentFlavor.backgroundColor}20`,
                    color: currentFlavor.backgroundColor,
                  }}
                >
                  <MapPin size={16} className="sm:w-5 sm:h-5 md:w-6 md:h-6" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg md:text-xl font-semibold text-white mb-1">
                    Visit Us
                  </h3>
                  <p className="text-gray-400 group-hover:text-white transition-colors text-sm sm:text-base">
                    Cairo, Egypt
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <form ref={formRef} className="space-y-4 sm:space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div className="space-y-2">
                <label className="text-xs sm:text-sm font-medium text-gray-400 ml-1">
                  First Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your first name"
                  className="w-full px-3 sm:px-4 md:px-6 py-3 sm:py-4 bg-white/5 border border-white/10 rounded-xl sm:rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:border-white/30 focus:bg-white/10 transition-all duration-300 text-sm sm:text-base"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs sm:text-sm font-medium text-gray-400 ml-1">
                  Last Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your last name"
                  className="w-full px-3 sm:px-4 md:px-6 py-3 sm:py-4 bg-white/5 border border-white/10 rounded-xl sm:rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:border-white/30 focus:bg-white/10 transition-all duration-300 text-sm sm:text-base"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs sm:text-sm font-medium text-gray-400 ml-1">
                Email Address
              </label>
              <input
                type="email"
                placeholder="name@example.com"
                className="w-full px-3 sm:px-4 md:px-6 py-3 sm:py-4 bg-white/5 border border-white/10 rounded-xl sm:rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:border-white/30 focus:bg-white/10 transition-all duration-300 text-sm sm:text-base"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs sm:text-sm font-medium text-gray-400 ml-1">
                Message
              </label>
              <textarea
                rows={4}
                placeholder="How can we help you?"
                className="w-full px-3 sm:px-4 md:px-6 py-3 sm:py-4 bg-white/5 border border-white/10 rounded-xl sm:rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:border-white/30 focus:bg-white/10 transition-all duration-300 resize-none text-sm sm:text-base"
              />
            </div>

            <button
              type="button"
              className="w-full py-3 sm:py-4 px-6 sm:px-8 rounded-xl sm:rounded-2xl font-bold text-white shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3 group text-sm sm:text-base"
              style={{
                backgroundColor: currentFlavor.backgroundColor,
                boxShadow: `0 10px 30px -10px ${currentFlavor.backgroundColor}80`,
              }}
            >
              <span>Send Message</span>
              <Send
                size={16}
                className="sm:w-5 sm:h-5 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
              />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
