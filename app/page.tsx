"use client";

import Image from "next/image";
import { useState } from "react";

import { motion } from "framer-motion";
import Link from "next/link";
import ServicesSection from "./components/services";
import Navbar from "./components/navbar";


export default function Home() {
  const [navOpen, setNavOpen] = useState(false);
  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "Inquiry", href: "#inquiry" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Testimonials", href: "#testimonials" },
  ];

  return (
    <main className="bg-black min-h-screen text-white font-sans">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <motion.section
        id="hero"
        className="relative h-[70vh] md:h-[80vh] flex items-center justify-center"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-10"
        >
          <source src="/herobg.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black bg-opacity-60" />
        <div className="absolute inset-0 bg-linear-to-br from-yellow-200 to-yellow-950/80" />
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-center w-full px-6">
          {/* <div className="flex-1 text-center md:text-left">
            <h1 className="text-5xl md:text-7xl font-extrabold mb-4 text-yellow-700 drop-shadow-lg">HomeGrown Fitness</h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-6">Train with Fitbaee</h2>
            <p className="max-w-xl mb-8 text-lg md:text-xl text-white/80">Personalized fitness coaching for every body. Start your journey with a trainer who cares.</p>
            <Link href="#inquiry" className="inline-block px-8 py-3 bg-yellow-700 text-black font-bold rounded-full shadow-lg hover:bg-yellow-950 transition">Get Started</Link>
          </div> */}
          <div className="flex-1 flex justify-center md:justify-end mt-8 md:mt-0">
            {/* <div className="w-[180px] h-[180px] sm:w-[250px] sm:h-[250px] md:w-[350px] md:h-[350px] relative">
              <Image
                src="/Subject.png"
                alt="Fitbaee Trainer"
                fill
                className="object-contain drop-shadow-2xl"
                priority
              />
            </div> */}
          </div>
        </div>
      </motion.section>

      

      {/* About Section */}
      <motion.section
        id="about"
        className="py-16 px-4 bg-linear-to-br from-yellow-50 to-yellow-950 text-yellow-50"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center md:items-start">
          <div className="w-[180px] h-[180px] sm:w-[250px] sm:h-[250px] md:w-[350px] md:h-[350px] relative mb-8 md:mb-0 md:mr-8 shrink-0">
            <Image
              src="/Subject.png"
              alt="Fitbaee Trainer"
              fill
              className="object-contain drop-shadow-2xl"
              priority
            />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-5xl md:text-7xl font-extrabold mb-4 text-yellow-400 drop-shadow-lg">HomeGrown Fitness</h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-6">Train with Fitbaee</h2>
            
            
            <p className="text-lg mb-4">Fitbaee is a passionate fitness trainer dedicated to helping clients achieve their goals through personalized coaching, motivation, and support. With years of experience and a commitment to holistic wellness, Fitbaee empowers you to become your best self.</p>
            {/* <Link href="#inquiry" className="inline-block px-8 py-3 bg-yellow-950 text-white font-bold rounded-full shadow-lg hover:bg-yellow-950 transition">Get Started</Link> */}
          </div>
        </div>
      </motion.section>

      {/* Services Section */}
      <ServicesSection />

      

      {/* Testimonials Section */}
      <motion.section
        id="testimonials"
        className="py-16 px-4 bg-yellow-950 text-white"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-6 text-yellow-700">Testimonials</h3>
          <div className="space-y-8">
            <motion.blockquote
              className="bg-white text-black rounded-lg p-6 shadow-lg"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <p className="mb-2">"Fitbaee helped me transform my life! The support and expertise are unmatched."</p>
              <footer className="text-yellow-700 font-bold">- Alex</footer>
            </motion.blockquote>
            <motion.blockquote
              className="bg-white text-black rounded-lg p-6 shadow-lg"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <p className="mb-2">"The group classes are so much fun and motivating. Highly recommend!"</p>
              <footer className="text-yellow-700 font-bold">- Jamie</footer>
            </motion.blockquote>
          </div>
        </div>
      </motion.section>

      {/* Footer Section */}
      <footer className="py-8 px-4 bg-black text-white text-center">
        <div className="mb-2">&copy; {new Date().getFullYear()} HomeGrown Fitness. All rights reserved.</div>
        <div className="text-yellow-700">Trained by Fitbaee</div>
      </footer>
    </main>
  );
}
