import { useEffect, useState } from "react";

export default function Tournament() {
  const [timeLeft, setTimeLeft] = useState({ d: 0, h: 0, m: 0, s: 0 });

  useEffect(() => {
    const targetDate = new Date("2025-10-18T00:00:00");
    const tick = () => {
      const now = new Date().getTime();
      const diff = targetDate.getTime() - now;
      setTimeLeft({
        d: Math.max(Math.floor(diff / (1000 * 60 * 60 * 24)), 0),
        h: Math.max(Math.floor((diff / (1000 * 60 * 60)) % 24), 0),
        m: Math.max(Math.floor((diff / (1000 * 60)) % 60), 0),
        s: Math.max(Math.floor((diff / 1000) % 60), 0),
      });
    };
    tick();
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="tournament" className="py-20 bg-blue-50 text-center">
      <h2 className="text-3xl font-bold text-blue-800 mb-4 heading">
        NU Fencing Cup Details
      </h2>
      <p className="max-w-lg mx-auto text-gray-700 mb-8">
        Join us in Astana for the Republican Fencing Tournament! Open categories
        and world-class competition await.
      </p>
      <div className="flex justify-center gap-8 text-blue-700 text-xl font-mono">
        <div>
          {timeLeft.d} <span className="block text-sm text-gray-500">Days</span>
        </div>
        <div>
          {timeLeft.h}{" "}
          <span className="block text-sm text-gray-500">Hours</span>
        </div>
        <div>
          {timeLeft.m}{" "}
          <span className="block text-sm text-gray-500">Minutes</span>
        </div>
        <div>
          {timeLeft.s}{" "}
          <span className="block text-sm text-gray-500">Seconds</span>
        </div>
      </div>
      <button className="mt-8 px-6 py-3 bg-blue-400 text-white rounded-full shadow-md hover:bg-blue-500 transition">
        Register
      </button>
    </section>
  );
}
