"use client";

import { useState } from "react";
import emailjs from '@emailjs/browser';

export default function InquiryPage() {
  type InquiryFormState = {
    firstName?: string;
    lastName?: string;
    name?: string;
    service?: string;
    date?: string;
    time?: string;
    phone?: string;
    email?: string;
    address?: string;
    zipCode?: string;
    birthDate?: string;
    gender?: string;
    height?: string;
    weight?: string;
    healthProblems?: string;
    medications?: string;
    injuries?: string;
    trainingFrequency?: string;
    diet?: string[];
    smoke?: string;
    activityLevel?: string;
    stressLevel?: string;
    goals?: string[];
    readiness?: string;
    [key: string]: string | string[] | undefined;
  };

  const [form, setForm] = useState<InquiryFormState>({});
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    if (type === "checkbox") {
      setForm((prev) => {
        const arr = (prev[name] as string[] | undefined) || [];
        if (checked) {
          return { ...prev, [name]: [...arr, value] };
        } else {
          return { ...prev, [name]: arr.filter((v: string) => v !== value) };
        }
      });
    } else if (type === "radio") {
      setForm((prev) => ({ ...prev, [name]: value }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      await emailjs.send(
        "service_ld0qvt7",
        "template_gzd61om",
        {
          first_name: form.firstName || "",
          last_name: form.lastName || "",
          name: (form.firstName || "") + " " + (form.lastName || ""),
          service: form.service || "",
          date: form.date || form.birthDate || "",
          time: form.time || "",
          number: form.phone || "",
          email: form.email || "",
          address: form.address || "",
          zip_code: form.zipCode || "",
          birthdate: form.birthDate || "",
          gender: form.gender || "",
          height: form.height || "",
          weight: form.weight || "",
          "diagnosed-health": form.healthProblems || "",
          medications: form.medications || "",
          injuries: form.injuries || "",
          training: form.trainingFrequency || "",
          diet: Array.isArray(form.diet) ? form.diet.join(", ") : form.diet || "",
          smoke: form.smoke || "",
          activity: form.activityLevel || "",
          stress: form.stressLevel || "",
          goals: Array.isArray(form.goals) ? form.goals.join(", ") : form.goals || "",
          readiness: form.readiness || ""
        },
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
    <main className="min-h-screen bg-white text-black py-16 px-4 font-sans">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-yellow-700 text-center">Client Inquiry Form</h1>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block mb-2 font-semibold" htmlFor="firstName">First Name *</label>
              <input type="text" id="firstName" name="firstName" required value={form.firstName || ""} onChange={handleChange} className="w-full px-4 py-2 border border-black rounded focus:outline-none focus:border-yellow-700" />
            </div>
            <div className="flex-1">
              <label className="block mb-2 font-semibold" htmlFor="lastName">Last Name *</label>
              <input type="text" id="lastName" name="lastName" required value={form.lastName || ""} onChange={handleChange} className="w-full px-4 py-2 border border-black rounded focus:outline-none focus:border-yellow-700" />
            </div>
          </div>
          <div>
            <label className="block mb-2 font-semibold" htmlFor="birthDate">Birth Date *</label>
            <input type="date" id="birthDate" name="birthDate" required value={form.birthDate || ""} onChange={handleChange} className="w-full px-4 py-2 border border-black rounded focus:outline-none focus:border-yellow-700" />
          </div>
          <div>
            <label className="block mb-2 font-semibold">Gender *</label>
            <div className="flex gap-4">
              <label><input type="radio" name="gender" value="male" required checked={form.gender === "male"} onChange={handleChange} className="mr-2" /> Male</label>
              <label><input type="radio" name="gender" value="female" required checked={form.gender === "female"} onChange={handleChange} className="mr-2" /> Female</label>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block mb-2 font-semibold" htmlFor="height">Height (cm/in) *</label>
              <input type="text" id="height" name="height" required value={form.height || ""} onChange={handleChange} className="w-full px-4 py-2 border border-black rounded focus:outline-none focus:border-yellow-700" />
            </div>
            <div className="flex-1">
              <label className="block mb-2 font-semibold" htmlFor="weight">Weight (kg/lb) *</label>
              <input type="text" id="weight" name="weight" required value={form.weight || ""} onChange={handleChange} className="w-full px-4 py-2 border border-black rounded focus:outline-none focus:border-yellow-700" />
            </div>
          </div>
          <div>
            <label className="block mb-2 font-semibold" htmlFor="phone">Phone Number *</label>
            <input type="tel" id="phone" name="phone" required value={form.phone || ""} onChange={handleChange} className="w-full px-4 py-2 border border-black rounded focus:outline-none focus:border-yellow-700" />
          </div>
          <div>
            <label className="block mb-2 font-semibold" htmlFor="email">Email</label>
            <input type="email" id="email" name="email" value={form.email || ""} onChange={handleChange} className="w-full px-4 py-2 border border-black rounded focus:outline-none focus:border-yellow-700" />
          </div>
          <div>
            <label className="block mb-2 font-semibold" htmlFor="address">Address *</label>
            <input type="text" id="address" name="address" required value={form.address || ""} onChange={handleChange} className="w-full px-4 py-2 border border-black rounded focus:outline-none focus:border-yellow-700" />
          </div>
          <div>
            <label className="block mb-2 font-semibold" htmlFor="zipCode">Zip Code</label>
            <input type="text" id="zipCode" name="zipCode" value={form.zipCode || ""} onChange={handleChange} className="w-full px-4 py-2 border border-black rounded focus:outline-none focus:border-yellow-700" />
          </div>
          <div>
            <label className="block mb-2 font-semibold" htmlFor="service">Service</label>
            <select
              id="service"
              name="service"
              value={form.service || ""}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-black rounded focus:outline-none focus:border-yellow-700"
              required
            >
              <option value="" disabled>Select a service</option>
              <optgroup label="Personal Training">
                <option value="PT-1on1">1-on-1 Training</option>
                <option value="PT-Group">Group Training</option>
                <option value="PT-Online">Online Training</option>
              </optgroup>
              <optgroup label="Nutrition">
                <option value="Nutrition-Consult">Consultation</option>
                <option value="Nutrition-MealPlan">Custom Meal Plan</option>
              </optgroup>
              <optgroup label="Wellness">
                <option value="Wellness-Yoga">Yoga</option>
                <option value="Wellness-Meditation">Meditation</option>
                <option value="Wellness-Recovery">Recovery & Mobility</option>
              </optgroup>
              <optgroup label="Sports Performance">
                <option value="Sports-Strength">Strength & Conditioning</option>
                <option value="Sports-Speed">Speed & Agility</option>
                <option value="Sports-Skill">Skill Development</option>
              </optgroup>
              <optgroup label="Other">
                <option value="Other-Assessment">Fitness Assessment</option>
                <option value="Other-Consult">General Consultation</option>
              </optgroup>
            </select>
          </div>
          <div>
            <label className="block mb-2 font-semibold" htmlFor="date">Preferred Date</label>
            <input type="date" id="date" name="date" value={form.date || ""} onChange={handleChange} className="w-full px-4 py-2 border border-black rounded focus:outline-none focus:border-yellow-700" />
          </div>
          <div>
            <label className="block mb-2 font-semibold" htmlFor="time">Preferred Time</label>
            <input type="time" id="time" name="time" value={form.time || ""} onChange={handleChange} className="w-full px-4 py-2 border border-black rounded focus:outline-none focus:border-yellow-700" />
          </div>
          <div>
            <label className="block mb-2 font-semibold" htmlFor="healthProblems">Do you have any diagnosed health problems?</label>
            <textarea id="healthProblems" name="healthProblems" rows={2} value={form.healthProblems || ""} onChange={handleChange} className="w-full px-4 py-2 border border-black rounded focus:outline-none focus:border-yellow-700" />
          </div>
          <div>
            <label className="block mb-2 font-semibold" htmlFor="medications">Are you taking any medications? If yes, please list below.</label>
            <textarea id="medications" name="medications" rows={2} value={form.medications || ""} onChange={handleChange} className="w-full px-4 py-2 border border-black rounded focus:outline-none focus:border-yellow-700" />
          </div>
          <div>
            <label className="block mb-2 font-semibold" htmlFor="injuries">Do you have any injuries? If yes, please list below.</label>
            <textarea id="injuries" name="injuries" rows={2} value={form.injuries || ""} onChange={handleChange} className="w-full px-4 py-2 border border-black rounded focus:outline-none focus:border-yellow-700" />
          </div>
          <div>
            <label className="block mb-2 font-semibold" htmlFor="trainingFrequency">How often do you want to do personal training per week?</label>
            <input type="number" id="trainingFrequency" name="trainingFrequency" min={1} max={7} value={form.trainingFrequency || ""} onChange={handleChange} className="w-full px-4 py-2 border border-black rounded focus:outline-none focus:border-yellow-700" />
          </div>
          <div>
            <label className="block mb-2 font-semibold">How does your current diet look?</label>
            <div className="flex flex-wrap gap-4">
              <label><input type="checkbox" name="diet" value="Low-fat" checked={form.diet?.includes("Low-fat") || false} onChange={handleChange} className="mr-2" /> Low-fat</label>
              <label><input type="checkbox" name="diet" value="Low-carb" checked={form.diet?.includes("Low-carb") || false} onChange={handleChange} className="mr-2" /> Low-carb</label>
              <label><input type="checkbox" name="diet" value="High-protein" checked={form.diet?.includes("High-protein") || false} onChange={handleChange} className="mr-2" /> High-protein</label>
              <label><input type="checkbox" name="diet" value="Vegetarian/Vegan" checked={form.diet?.includes("Vegetarian/Vegan") || false} onChange={handleChange} className="mr-2" /> Vegetarian/Vegan</label>
              <label><input type="checkbox" name="diet" value="No special diet" checked={form.diet?.includes("No special diet") || false} onChange={handleChange} className="mr-2" /> No special diet</label>
            </div>
          </div>
          <div>
            <label className="block mb-2 font-semibold">Do you smoke?</label>
            <div className="flex gap-4">
              <label><input type="radio" name="smoke" value="yes" checked={form.smoke === "yes"} onChange={handleChange} className="mr-2" /> Yes</label>
              <label><input type="radio" name="smoke" value="no" checked={form.smoke === "no"} onChange={handleChange} className="mr-2" /> No</label>
            </div>
          </div>
          <div>
            <label className="block mb-2 font-semibold">What is your daily activity level? 1 being low activity, 5 being high activity</label>
            <div className="flex gap-2">
              {[1,2,3,4,5].map((level) => (
                <label key={level}><input type="radio" name="activityLevel" value={level} checked={form.activityLevel === String(level)} onChange={handleChange} className="mr-2" /> {level}</label>
              ))}
            </div>
          </div>
          <div>
            <label className="block mb-2 font-semibold">What is your daily stress level? 1 being low stress, 5 being high stress</label>
            <div className="flex gap-2">
              {[1,2,3,4,5].map((level) => (
                <label key={level}><input type="radio" name="stressLevel" value={level} checked={form.stressLevel === String(level)} onChange={handleChange} className="mr-2" /> {level}</label>
              ))}
            </div>
          </div>
          <div>
            <label className="block mb-2 font-semibold">Which of the following statements fit in with your goals?</label>
            <div className="flex flex-wrap gap-4">
              <label><input type="checkbox" name="goals" value="Improved health" checked={form.goals?.includes("Improved health") || false} onChange={handleChange} className="mr-2" /> Improved health</label>
              <label><input type="checkbox" name="goals" value="Improved endurance" checked={form.goals?.includes("Improved endurance") || false} onChange={handleChange} className="mr-2" /> Improved endurance</label>
              <label><input type="checkbox" name="goals" value="Increased strength" checked={form.goals?.includes("Increased strength") || false} onChange={handleChange} className="mr-2" /> Increased strength</label>
              <label><input type="checkbox" name="goals" value="Increased muscle mass" checked={form.goals?.includes("Increased muscle mass") || false} onChange={handleChange} className="mr-2" /> Increased muscle mass</label>
              <label><input type="checkbox" name="goals" value="Fat loss" checked={form.goals?.includes("Fat loss") || false} onChange={handleChange} className="mr-2" /> Fat loss</label>
              <label><input type="checkbox" name="goals" value="Other" checked={form.goals?.includes("Other") || false} onChange={handleChange} className="mr-2" /> Other</label>
            </div>
          </div>
          <div>
            <label className="block mb-2 font-semibold">Please rate readiness to change. 1 being not ready, 5 being ready yesterday</label>
            <div className="flex gap-2">
              {[1,2,3,4,5].map((level) => (
                <label key={level}><input type="radio" name="readiness" value={level} checked={form.readiness === String(level)} onChange={handleChange} className="mr-2" /> {level}</label>
              ))}
            </div>
          </div>
          {error && <div className="text-red-600 font-semibold mb-2">{error}</div>}
          {submitted && <div className="text-green-600 font-semibold mb-2">Thank you for your inquiry! We'll be in touch soon.</div>}
          <button type="submit" className="w-full py-3 bg-yellow-700 text-black font-bold rounded-full shadow-lg hover:bg-yellow-950 transition" disabled={loading}>{loading ? "Sending..." : "Submit"}</button>
        </form>
      </div>
    </main>
  );
}
