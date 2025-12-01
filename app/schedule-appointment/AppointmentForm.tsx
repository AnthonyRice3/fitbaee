"use client";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import emailjs from '@emailjs/browser';

export default function AppointmentForm() {
  type AppointmentFormState = {
    name?: string;
    age?: string;
    phone?: string;
    date?: string;
    time?: string;
    service?: string;
    [key: string]: string | undefined;
  };
  const [form, setForm] = useState<AppointmentFormState>({});
  const searchParams = useSearchParams();
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    const serviceFromQuery = searchParams.get("service");
    if (serviceFromQuery) {
      setForm((prev) => ({ ...prev, service: serviceFromQuery }));
    }
  }, [searchParams]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      await emailjs.send(
        "service_ld0qvt7",
        "template_gzd61om",
        form,
        "fP3VrCnq3NBoW1mKL"
      );
      setSubmitted(true);
      setForm({});
    } catch (err) {
      setError("Failed to send. Please try again.");
    }
    setLoading(false);
  };

  return (
    <div className="max-w-xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-yellow-700 text-center">Schedule Appointment</h1>
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div>
          <label className="block mb-2 font-semibold" htmlFor="service">Select Service *</label>
          <select
            id="service"
            name="service"
            required
            className="w-full px-4 py-2 border border-black rounded focus:outline-none focus:border-yellow-700"
            value={form.service || ""}
            onChange={handleChange}
          >
            <option value="" disabled>Select a service</option>
            <option value="Personal Training Session">Personal Training Session</option>
            <option value="Group Bootcamp">Group Bootcamp</option>
            <option value="Virtual Training">Virtual Training</option>
            <option value="Athletic Performance">Athletic Performance</option>
            <option value="Meal Planning Consultation">Meal Planning Consultation</option>
            <option value="Nutrition Coaching">Nutrition Coaching</option>
            <option value="Supplement Guidance">Supplement Guidance</option>
            <option value="Macro Tracking">Macro Tracking</option>
            <option value="Mindfulness Session">Mindfulness Session</option>
            <option value="Mobility & Recovery">Mobility & Recovery</option>
            <option value="Lifestyle Coaching">Lifestyle Coaching</option>
            <option value="Stress Management">Stress Management</option>
            <option value="Body Sculpting Program">Body Sculpting Program</option>
            <option value="HIIT & Cardio Blast">HIIT & Cardio Blast</option>
            <option value="Strength Training">Strength Training</option>
            <option value="Core & Abs Focus">Core & Abs Focus</option>
          </select>
        </div>
        <div>
          <label className="block mb-2 font-semibold" htmlFor="name">Name *</label>
          <input type="text" id="name" name="name" required className="w-full px-4 py-2 border border-black rounded focus:outline-none focus:border-yellow-700" value={form.name || ""} onChange={handleChange} />
        </div>
        <div>
          <label className="block mb-2 font-semibold" htmlFor="age">Age *</label>
          <input type="number" id="age" name="age" required min={1} className="w-full px-4 py-2 border border-black rounded focus:outline-none focus:border-yellow-700" value={form.age || ""} onChange={handleChange} />
        </div>
        <div>
          <label className="block mb-2 font-semibold" htmlFor="phone">Phone Number *</label>
          <input type="tel" id="phone" name="phone" required className="w-full px-4 py-2 border border-black rounded focus:outline-none focus:border-yellow-700" value={form.phone || ""} onChange={handleChange} />
        </div>
        <div>
          <label className="block mb-2 font-semibold" htmlFor="date">Select Date *</label>
          <input type="date" id="date" name="date" required className="w-full px-4 py-2 border border-black rounded focus:outline-none focus:border-yellow-700" value={form.date || ""} onChange={handleChange} />
        </div>
        <div>
          <label className="block mb-2 font-semibold" htmlFor="time">Select Time *</label>
          <input type="time" id="time" name="time" required className="w-full px-4 py-2 border border-black rounded focus:outline-none focus:border-yellow-700" value={form.time || ""} onChange={handleChange} />
        </div>
        {error && <div className="text-red-600 font-semibold mb-2">{error}</div>}
        {submitted && <div className="text-green-600 font-semibold mb-2">Your appointment request has been sent! We'll contact you soon.</div>}
        <button type="submit" className="w-full py-3 bg-yellow-700 text-black font-bold rounded-full shadow-lg hover:bg-yellow-950 transition" disabled={loading}>{loading ? "Sending..." : "Schedule"}</button>
      </form>
    </div>
  );
}
