"use client";

import { useState } from "react";
import Navbar from "../components/navbar";

export default function InquiryPage() {
  const [form, setForm] = useState({});

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white text-black py-16 px-4 font-sans">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-yellow-700 text-center">Client Inquiry Form</h1>
          <form className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-1">
                <label className="block mb-2 font-semibold" htmlFor="firstName">First Name *</label>
                <input type="text" id="firstName" name="firstName" required className="w-full px-4 py-2 border border-black rounded focus:outline-none focus:border-yellow-700" />
              </div>
              <div className="flex-1">
                <label className="block mb-2 font-semibold" htmlFor="lastName">Last Name *</label>
                <input type="text" id="lastName" name="lastName" required className="w-full px-4 py-2 border border-black rounded focus:outline-none focus:border-yellow-700" />
              </div>
            </div>
            <div>
              <label className="block mb-2 font-semibold" htmlFor="birthDate">Birth Date *</label>
              <input type="date" id="birthDate" name="birthDate" required className="w-full px-4 py-2 border border-black rounded focus:outline-none focus:border-yellow-700" />
            </div>
            <div>
              <label className="block mb-2 font-semibold">Gender *</label>
              <div className="flex gap-4">
                <label><input type="radio" name="gender" value="male" required className="mr-2" /> Male</label>
                <label><input type="radio" name="gender" value="female" required className="mr-2" /> Female</label>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-1">
                <label className="block mb-2 font-semibold" htmlFor="height">Height (cm/in) *</label>
                <input type="text" id="height" name="height" required className="w-full px-4 py-2 border border-black rounded focus:outline-none focus:border-yellow-700" />
              </div>
              <div className="flex-1">
                <label className="block mb-2 font-semibold" htmlFor="weight">Weight (kg/lb) *</label>
                <input type="text" id="weight" name="weight" required className="w-full px-4 py-2 border border-black rounded focus:outline-none focus:border-yellow-700" />
              </div>
            </div>
            <div>
              <label className="block mb-2 font-semibold" htmlFor="phone">Phone Number *</label>
              <input type="tel" id="phone" name="phone" required className="w-full px-4 py-2 border border-black rounded focus:outline-none focus:border-yellow-700" />
            </div>
            <div>
              <label className="block mb-2 font-semibold" htmlFor="email">Email</label>
              <input type="email" id="email" name="email" className="w-full px-4 py-2 border border-black rounded focus:outline-none focus:border-yellow-700" />
            </div>
            <div>
              <label className="block mb-2 font-semibold" htmlFor="address">Address *</label>
              <input type="text" id="address" name="address" required className="w-full px-4 py-2 border border-black rounded focus:outline-none focus:border-yellow-700" />
            </div>
            <div>
              <label className="block mb-2 font-semibold" htmlFor="healthProblems">Do you have any diagnosed health problems?</label>
              <textarea id="healthProblems" name="healthProblems" rows={2} className="w-full px-4 py-2 border border-black rounded focus:outline-none focus:border-yellow-700" />
            </div>
            <div>
              <label className="block mb-2 font-semibold" htmlFor="medications">Are you taking any medications? If yes, please list below.</label>
              <textarea id="medications" name="medications" rows={2} className="w-full px-4 py-2 border border-black rounded focus:outline-none focus:border-yellow-700" />
            </div>
            <div>
              <label className="block mb-2 font-semibold" htmlFor="injuries">Do you have any injuries? If yes, please list below.</label>
              <textarea id="injuries" name="injuries" rows={2} className="w-full px-4 py-2 border border-black rounded focus:outline-none focus:border-yellow-700" />
            </div>
            <div>
              <label className="block mb-2 font-semibold" htmlFor="trainingFrequency">How often do you want to do personal training per week?</label>
              <input type="number" id="trainingFrequency" name="trainingFrequency" min={1} max={7} className="w-full px-4 py-2 border border-black rounded focus:outline-none focus:border-yellow-700" />
            </div>
            <div>
              <label className="block mb-2 font-semibold">How does your current diet look?</label>
              <div className="flex flex-wrap gap-4">
                <label><input type="checkbox" name="diet" value="Low-fat" className="mr-2" /> Low-fat</label>
                <label><input type="checkbox" name="diet" value="Low-carb" className="mr-2" /> Low-carb</label>
                <label><input type="checkbox" name="diet" value="High-protein" className="mr-2" /> High-protein</label>
                <label><input type="checkbox" name="diet" value="Vegetarian/Vegan" className="mr-2" /> Vegetarian/Vegan</label>
                <label><input type="checkbox" name="diet" value="No special diet" className="mr-2" /> No special diet</label>
              </div>
            </div>
            <div>
              <label className="block mb-2 font-semibold">Do you smoke?</label>
              <div className="flex gap-4">
                <label><input type="radio" name="smoke" value="yes" className="mr-2" /> Yes</label>
                <label><input type="radio" name="smoke" value="no" className="mr-2" /> No</label>
              </div>
            </div>
            <div>
              <label className="block mb-2 font-semibold">What is your daily activity level? 1 being low activity, 5 being high activity</label>
              <div className="flex gap-2">
                {[1,2,3,4,5].map((level) => (
                  <label key={level}><input type="radio" name="activityLevel" value={level} className="mr-2" /> {level}</label>
                ))}
              </div>
            </div>
            <div>
              <label className="block mb-2 font-semibold">What is your daily stress level? 1 being low stress, 5 being high stress</label>
              <div className="flex gap-2">
                {[1,2,3,4,5].map((level) => (
                  <label key={level}><input type="radio" name="stressLevel" value={level} className="mr-2" /> {level}</label>
                ))}
              </div>
            </div>
            <div>
              <label className="block mb-2 font-semibold">Which of the following statements fit in with your goals?</label>
              <div className="flex flex-wrap gap-4">
                <label><input type="checkbox" name="goals" value="Improved health" className="mr-2" /> Improved health</label>
                <label><input type="checkbox" name="goals" value="Improved endurance" className="mr-2" /> Improved endurance</label>
                <label><input type="checkbox" name="goals" value="Increased strength" className="mr-2" /> Increased strength</label>
                <label><input type="checkbox" name="goals" value="Increased muscle mass" className="mr-2" /> Increased muscle mass</label>
                <label><input type="checkbox" name="goals" value="Fat loss" className="mr-2" /> Fat loss</label>
                <label><input type="checkbox" name="goals" value="Other" className="mr-2" /> Other</label>
              </div>
            </div>
            <div>
              <label className="block mb-2 font-semibold">Please rate readiness to change. 1 being not ready, 5 being ready yesterday</label>
              <div className="flex gap-2">
                {[1,2,3,4,5].map((level) => (
                  <label key={level}><input type="radio" name="readiness" value={level} className="mr-2" /> {level}</label>
                ))}
              </div>
            </div>
            <button type="submit" className="w-full py-3 bg-yellow-700 text-black font-bold rounded-full shadow-lg hover:bg-yellow-950 transition">Submit</button>
          </form>
        </div>
      </main>
    </>
  );
}
