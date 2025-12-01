"use client";
import { useState } from "react";
import { motion } from "framer-motion";

const images = [
  "/gallery/session1.png",
  "/gallery/session2.png",
  "/gallery/session3.png",
  "/gallery/session4.png",
  "/gallery/session5.png",
];

export default function Gallery() {
  const [current, setCurrent] = useState(0);

  const nextImage = () => setCurrent((prev) => (prev + 1) % images.length);
  const prevImage = () => setCurrent((prev) => (prev - 1 + images.length) % images.length);

  return (
    <motion.section
      id="gallery"
      className="py-12 px-4 bg-black text-white flex flex-col items-center"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
    >
      <h3 className="text-3xl font-bold mb-6 text-yellow-500 text-center">Gallery: Past Training Sessions</h3>
      <div className="relative w-full max-w-2xl h-80 flex items-center justify-center">
        <button
          onClick={prevImage}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-yellow-700 text-black rounded-full p-2 shadow hover:bg-yellow-900"
          aria-label="Previous"
        >
          &#8592;
        </button>
        <motion.img
          key={images[current]}
          src={images[current]}
          alt={`Session ${current + 1}`}
          className="rounded-lg shadow-lg object-cover w-full h-80"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        />
        <button
          onClick={nextImage}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-yellow-700 text-black rounded-full p-2 shadow hover:bg-yellow-900"
          aria-label="Next"
        >
          &#8594;
        </button>
      </div>
      <div className="mt-4 flex gap-2 justify-center">
        {images.map((img, idx) => (
          <button
            key={img}
            className={`w-3 h-3 rounded-full ${idx === current ? "bg-yellow-500" : "bg-gray-400"}`}
            onClick={() => setCurrent(idx)}
            aria-label={`Go to image ${idx + 1}`}
          />
        ))}
      </div>

      {/* Call to Action */}
      <div className="mt-8 text-center">
        <a
          href="https://instagram.com/homegrownfb"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 bg-yellow-700 text-black font-bold rounded-full shadow-lg hover:bg-yellow-900 transition text-lg"
        >
          View More Photos on Instagram @homegrownfb
        </a>
      </div>
    </motion.section>
  );
}
