"use client";
import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";
import { useFlavor } from "@/context/FlavorContext";

export default function Footer() {
  const { currentFlavor } = useFlavor();

  return (
    <footer className="relative bg-zinc-950 border-t border-white/10 overflow-hidden">
      {/* Background Gradient */}
      <div className="container max-w-7xl mx-auto">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            background: `radial-gradient(circle at 50% 50%, ${currentFlavor.backgroundColor}, transparent 70%)`,
          }}
        />

        <div className="relative z-10 container mx-auto px-4 py-8 sm:py-12 md:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
            {/* Brand Section */}
            <div className="space-y-3 sm:space-y-4">
              <h3
                className="text-xl sm:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400"
                style={{ color: currentFlavor.backgroundColor }}
              >
                Best Drink
              </h3>
              <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                Crafting exceptional beverages with passion and innovation.
                Experience the perfect blend of taste and quality.
              </p>
              <div className="flex gap-2 sm:gap-3">
                <a
                  href="#"
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-300 hover:scale-110"
                  style={{ borderColor: `${currentFlavor.backgroundColor}30` }}
                >
                  <Github size={14} className="sm:w-4 sm:h-4" />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-300 hover:scale-110"
                  style={{ borderColor: `${currentFlavor.backgroundColor}30` }}
                >
                  <Twitter size={14} className="sm:w-4 sm:h-4" />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-300 hover:scale-110"
                  style={{ borderColor: `${currentFlavor.backgroundColor}30` }}
                >
                  <Linkedin size={14} className="sm:w-4 sm:h-4" />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-300 hover:scale-110"
                  style={{ borderColor: `${currentFlavor.backgroundColor}30` }}
                >
                  <Instagram size={14} className="sm:w-4 sm:h-4" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-3 sm:space-y-4">
              <h4 className="text-base sm:text-lg font-semibold text-white">
                Quick Links
              </h4>
              <ul className="space-y-2 sm:space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-2 group text-sm sm:text-base"
                  >
                    <span className="w-1 h-1 rounded-full bg-gray-600 group-hover:bg-white transition-colors duration-300"></span>
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-2 group text-sm sm:text-base"
                  >
                    <span className="w-1 h-1 rounded-full bg-gray-600 group-hover:bg-white transition-colors duration-300"></span>
                    Our Products
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-2 group text-sm sm:text-base"
                  >
                    <span className="w-1 h-1 rounded-full bg-gray-600 group-hover:bg-white transition-colors duration-300"></span>
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-2 group text-sm sm:text-base"
                  >
                    <span className="w-1 h-1 rounded-full bg-gray-600 group-hover:bg-white transition-colors duration-300"></span>
                    Blog
                  </a>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div className="space-y-3 sm:space-y-4">
              <h4 className="text-base sm:text-lg font-semibold text-white">
                Services
              </h4>
              <ul className="space-y-2 sm:space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-2 group text-sm sm:text-base"
                  >
                    <span className="w-1 h-1 rounded-full bg-gray-600 group-hover:bg-white transition-colors duration-300"></span>
                    Custom Beverages
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-2 group text-sm sm:text-base"
                  >
                    <span className="w-1 h-1 rounded-full bg-gray-600 group-hover:bg-white transition-colors duration-300"></span>
                    Event Catering
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-2 group text-sm sm:text-base"
                  >
                    <span className="w-1 h-1 rounded-full bg-gray-600 group-hover:bg-white transition-colors duration-300"></span>
                    Wholesale
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-2 group text-sm sm:text-base"
                  >
                    <span className="w-1 h-1 rounded-full bg-gray-600 group-hover:bg-white transition-colors duration-300"></span>
                    Consultation
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-3 sm:space-y-4">
              <h4 className="text-base sm:text-lg font-semibold text-white">
                Contact Info
              </h4>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-start gap-3">
                  <div
                    className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                    style={{
                      backgroundColor: `${currentFlavor.backgroundColor}20`,
                      color: currentFlavor.backgroundColor,
                    }}
                  >
                    <Mail size={12} className="sm:w-4 sm:h-4" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs sm:text-sm">Email</p>
                    <p className="text-white text-xs sm:text-sm">
                      Mahmoudfathy.dev@gmail.com
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div
                    className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                    style={{
                      backgroundColor: `${currentFlavor.backgroundColor}20`,
                      color: currentFlavor.backgroundColor,
                    }}
                  >
                    <Phone size={12} className="sm:w-4 sm:h-4" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs sm:text-sm">Phone</p>
                    <p className="text-white text-xs sm:text-sm">
                      +20 120 048 1281
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div
                    className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                    style={{
                      backgroundColor: `${currentFlavor.backgroundColor}20`,
                      color: currentFlavor.backgroundColor,
                    }}
                  >
                    <MapPin size={12} className="sm:w-4 sm:h-4" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs sm:text-sm">Location</p>
                    <p className="text-white text-xs sm:text-sm">
                      Cairo, Egypt
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="mt-8 sm:mt-12 md:mt-16 pt-6 sm:pt-8 border-t border-white/10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-400 text-xs sm:text-sm">
                © 2026 Best Drink. All rights reserved.
              </p>
              <div className="flex gap-4 sm:gap-6">
                <p className="text-red-500 text-xs sm:text-sm">
                  Created with ❤️ by{" "}
                  <a
                    href="https://mahmoudfathy.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-red-600 cursor-pointer transition-colors duration-300"
                  >
                    Mahmoud Fathy
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
