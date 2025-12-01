
import { Suspense } from "react";
import AppointmentForm from "./AppointmentForm";

export default function ScheduleAppointmentPage() {
  return (
    <main className="min-h-screen bg-white text-black py-16 px-4 font-sans">
      <Suspense fallback={<div>Loading...</div>}>
        <AppointmentForm />
      </Suspense>
    </main>
  );
}
