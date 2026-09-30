"use client";
import { useState, useEffect } from "react";
import { Timer, Trophy } from "lucide-react";

export default function CountdownTimer({
  initialMinutes = 30,
}: {
  initialMinutes?: number;
}) {
  const [timeLeft, setTimeLeft] = useState(initialMinutes * 60);

  useEffect(() => {
    if (timeLeft <= 0) return;
    const interval = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [timeLeft]);

  const mins = Math.floor(timeLeft / 60);
  const secs = timeLeft % 60;
  const isLow = timeLeft < 300; // turns red under 5 minutes

  return (
    <div
      className={`flex items-center gap-3 px-4 py-2 rounded-full font-mono text-sm font-bold shadow-sm transition-all duration-500 ${
        isLow
          ? "bg-red-50 text-red-600 border border-red-200 shadow-red-100"
          : "bg-gray-900 text-white border border-gray-800"
      }`}
    >
      <div className="flex items-center gap-1.5">
        <Timer size={16} className={isLow ? "animate-pulse" : ""} />
        <span>
          {mins.toString().padStart(2, "0")}:{secs.toString().padStart(2, "0")}
        </span>
      </div>
      <div
        className={`w-[1px] h-4 ${isLow ? "bg-red-200" : "bg-gray-700"}`}
      ></div>
      <div className="flex items-center gap-1.5">
        <Trophy
          size={14}
          className={isLow ? "text-red-500" : "text-yellow-400"}
        />
        <span>250 XP</span>
      </div>
    </div>
  );
}
