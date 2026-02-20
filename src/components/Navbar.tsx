"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, Menu, X } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { backgroundColor } = useTheme();

  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Products", href: "#products" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? "backdrop-blur-sm bg-opacity-80" : "bg-transparent"} ${isScrolled ? "shadow-md" : ""}`}
      style={{
        backgroundColor: backgroundColor,
        transition: "background-color 300ms ease",
      }}
    >
      <div className="container p-2 max-w-7xl mx-auto flex justify-between items-center font-medium px-2 sm:px-4">
        <div className="logo p-1 sm:p-2 rounded-full w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 transition-all duration-300">
          <Link href="/" onClick={handleLinkClick}>
            <Image
              src="/images/Newlogo.png"
              alt="logo"
              width={92}
              height={92}
              className="w-full h-full rounded-full"
              priority
            />
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-4 lg:gap-6">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-white hover:text-gray-200 transition-colors text-sm lg:text-base font-medium"
              onClick={handleLinkClick}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="hidden lg:block">
          <Link
            href="#contact"
            className="flex items-center gap-2 bg-transparent text-white font-semibold px-3 lg:px-4 py-2 rounded-lg transition-colors text-sm lg:text-base"
            onClick={handleLinkClick}
          >
            Call Us
            <Phone size={16} className="lg:w-5 lg:h-5" />
          </Link>
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white hover:text-gray-200 focus:outline-none p-1"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X size={24} className="sm:w-6 sm:h-6" />
            ) : (
              <Menu size={24} className="sm:w-6 sm:h-6" />
            )}
          </button>
        </div>
      </div>
      <div
        className={`md:hidden w-full overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 py-4" : "max-h-0 py-0"
        }`}
        style={{ backgroundColor }}
      >
        <div className="container mx-auto px-2 sm:px-4 flex flex-col items-center gap-4">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="w-full text-center py-2 text-base sm:text-lg hover:text-gray-200 transition-colors text-white"
              onClick={handleLinkClick}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="#contact"
            className="w-full flex justify-center items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-4 py-2 rounded-lg transition-colors text-base sm:text-lg"
            onClick={handleLinkClick}
          >
            Call Us
            <Phone size={18} className="sm:w-5 sm:h-5" />
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
