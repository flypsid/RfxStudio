"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { SoftButton } from "@/components/ui/SoftButton";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Remplace "Actualités" par "Expertise" comme demandé
  const navItems = ["A propos", "Nos solutions", "Expertise", "FAQ"];

  const navLinks: { [key: string]: string } = {
    "A propos": "#about",
    "Nos solutions": "#solutions",
    Expertise: "#expertise",
    FAQ: "#faq",
  };

  // Gère le clic sur les liens de navigation (fix pour mobile)
  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    setIsOpen(false);

    // Petit délai pour permettre au menu de se fermer avant le scroll
    setTimeout(() => {
      const targetId = href.replace("#", "");
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-[#F3F5F7]/80 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-[1180px] items-center justify-between px-4 py-4 md:px-0 md:py-6">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-3">
          <Image
            src="/images/logofull.webp"
            alt="Ma'a Suh Logo"
            width={150}
            height={40}
            className="h-10 w-auto object-contain"
          />
        </a>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item}
              href={navLinks[item] || "#"}
              className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-900"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden gap-2 md:flex">
          <a href="#contact">
            <SoftButton>Contact</SoftButton>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-slate-600 hover:text-slate-900 focus:outline-none"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="border-b border-slate-200 bg-white md:hidden"
          >
            <div className="flex flex-col space-y-4 px-6 py-6 text-center">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={navLinks[item] || "#"}
                  className="text-base font-medium text-slate-600 hover:text-slate-900"
                  onClick={(e) => handleNavClick(e, navLinks[item] || "#")}
                >
                  {item}
                </a>
              ))}
              <div className="flex flex-col gap-3 pt-4">
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, "#contact")}
                >
                  <SoftButton>Contact</SoftButton>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
