"use client";

export default function Footer() {
  return (
    <footer className="w-full bg-black text-yellow-700 py-6 mt-16 border-t border-yellow-700">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <div className="font-bold text-lg">HomeGrown &copy; {new Date().getFullYear()}</div>
        <div className="text-sm mt-2 md:mt-0">
          <a href="/inquiry" className="hover:text-yellow-950 transition">Inquiry</a>
          <span className="mx-2">|</span>
          <a href="/schedule-appointment" className="hover:text-yellow-950 transition">Schedule Appointment</a>
        </div>
        <div className="text-xs mt-2 md:mt-0">Made with Next.js & Tailwind CSS</div>
      </div>
    </footer>
  );
}
