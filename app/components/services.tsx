"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const serviceTabs = [
  { name: "Workouts" },
  { name: "Nutrition" },
  { name: "Wellness" },
  { name: "Sculpting" },
];

const serviceCards: Record<string, { title: string; desc: string; duration: string; price: string }[]> = {
  Workouts: [
    {
      title: "Personal Training Session",
      desc: "One-on-one coaching tailored to your goals.",
      duration: "60 min",
      price: "$60/session",
    },
    {
      title: "Group Bootcamp",
      desc: "High-energy group workout for all levels.",
      duration: "45 min",
      price: "$20/person",
    },
    {
      title: "Virtual Training",
      desc: "Online coaching for remote clients.",
      duration: "50 min",
      price: "$40/session",
    },
    {
      title: "Athletic Performance",
      desc: "Advanced training for athletes to boost performance.",
      duration: "75 min",
      price: "$75/session",
    },
  ],
  Nutrition: [
    {
      title: "Meal Planning Consultation",
      desc: "Custom meal plans for your lifestyle.",
      duration: "30 min",
      price: "$35/session",
    },
    {
      title: "Nutrition Coaching",
      desc: "Ongoing support for healthy eating habits.",
      duration: "Weekly",
      price: "$120/month",
    },
    {
      title: "Supplement Guidance",
      desc: "Advice on safe and effective supplements.",
      duration: "20 min",
      price: "$25/session",
    },
    {
      title: "Macro Tracking",
      desc: "Personalized macro tracking for optimal results.",
      duration: "Monthly",
      price: "$50/month",
    },
  ],
  Wellness: [
    {
      title: "Mindfulness Session",
      desc: "Guided meditation and stress reduction.",
      duration: "30 min",
      price: "$30/session",
    },
    {
      title: "Mobility & Recovery",
      desc: "Stretching and recovery routines.",
      duration: "40 min",
      price: "$35/session",
    },
    {
      title: "Lifestyle Coaching",
      desc: "Support for sleep, habits, and holistic wellness.",
      duration: "Monthly",
      price: "$100/month",
    },
    {
      title: "Stress Management",
      desc: "Techniques and support for managing stress.",
      duration: "45 min",
      price: "$40/session",
    },
  ],
  Sculpting: [
    {
      title: "Body Sculpting Program",
      desc: "Targeted workouts to shape and define your physique.",
      duration: "8 weeks",
      price: "$400/program",
    },
    {
      title: "HIIT & Cardio Blast",
      desc: "High-intensity interval training for fat loss.",
      duration: "30 min",
      price: "$25/session",
    },
    {
      title: "Strength Training",
      desc: "Build muscle and strength with expert guidance.",
      duration: "60 min",
      price: "$55/session",
    },
    {
      title: "Core & Abs Focus",
      desc: "Intense core and abs sculpting routines.",
      duration: "40 min",
      price: "$35/session",
    },
  ],
};

export default function ServicesSection() {
  const [selected, setSelected] = useState<string>("Workouts");

  return (
    <motion.section
      id="services"
      className="py-2 px-4 bg-yellow-50 text-black"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-4xl mx-auto">
        <h3 className="text-3xl font-bold mb-6 text-center text-yellow-700">Programs & Services</h3>
        <div className="flex justify-center mb-8 gap-4 flex-wrap">
          {serviceTabs.map((tab) => (
            <button
              key={tab.name}
              className={`cursor-pointer px-6 py-2 rounded-full font-semibold border-2 transition-all duration-200 ${selected === tab.name ? "bg-yellow-700 text-white border-yellow-700" : "bg-black text-white border-black hover:bg-yellow-700 hover:text-black hover:border-yellow-700"}`}
              onClick={() => setSelected(tab.name)}
            >
              {tab.name}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-3 gap-6 bento-grid">
          {serviceCards[selected].map((card, idx) => {
            // Assign bento grid positions
            let gridClass = "";
            if (idx === 0) gridClass = "col-span-2 row-span-2";
            if (idx === 1) gridClass = "col-span-1 row-span-1";
            if (idx === 2) gridClass = "col-span-1 row-span-2";
            return (
              <motion.div
                key={card.title}
                className={`p-6 bg-yellow-950 text-black font-extrabold rounded-lg shadow-lg border-2 flex flex-col justify-between ${gridClass}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, delay: 0.1 * idx }}
              >
                <div>
                  <h4 className="text-xl font-bold mb-2 text-yellow-700">{card.title}</h4>
                  <p className="mb-4 text-white">{card.desc}</p>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-white/70 text-sm">{card.duration}</span>
                  <span className="text-yellow-700 font-bold text-lg">{card.price}</span>
                </div>
              </motion.div>
            );
          })}
        </div>
        <div className="flex justify-center mt-5">
          <Link href="/inquiry" className="inline-block px-8 py-3 bg-yellow-700 text-black font-bold rounded-full shadow-lg hover:bg-yellow-950 transition text-lg">Work With Fitbaee</Link>
        </div>
      </div>
    </motion.section>
  );
}
