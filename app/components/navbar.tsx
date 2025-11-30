"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [navOpen, setNavOpen] = useState(false);
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Inquiry", href: "/inquiry" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Testimonials", href: "#testimonials" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black bg-opacity-80 border-b border-yellow-700">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        <div className="text-2xl font-extrabold text-yellow-700">HomeGrown</div>
        <button
          className="md:hidden text-white focus:outline-none"
          aria-label="Toggle navigation"
          onClick={() => setNavOpen((open) => !open)}
        >
          <svg width="32" height="32" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" d={navOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
        <ul className="hidden md:flex gap-8 text-lg font-semibold">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link href={link.href} className="hover:text-yellow-700 transition">{link.name}</Link>
            </li>
          ))}
        </ul>
      </div>
      {/* Mobile menu */}
      {navOpen && (
        <ul className="md:hidden flex flex-col bg-black bg-opacity-95 border-t border-yellow-700 px-4 py-4">
          {navLinks.map((link) => (
            <li key={link.name} className="py-2">
              <Link href={link.href} className="block w-full text-lg font-semibold hover:text-yellow-700 transition" onClick={() => setNavOpen(false)}>{link.name}</Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
