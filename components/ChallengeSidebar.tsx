"use client";
import { Send, ChevronLeft, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function ChallengeSidebar({
  title,
  currentStep,
  setCurrentStep,
}: {
  title: string;
  currentStep: number;
  setCurrentStep: (step: number) => void;
}) {
  const steps = ["Prepare", "Build", "Submit Project"];

  return (
    <aside className="w-full md:w-64 shrink-0 border-b md:border-b-0 md:border-r border-gray-200 md:h-screen sticky top-0 bg-white md:bg-gray-50 z-30">
      {/* Header Area */}
      <div className="p-4 md:p-6 flex items-center gap-3 md:flex-col md:items-start border-b border-gray-100 md:border-b-0">
        <Link
          href="/"
          className="flex items-center gap-2 text-gray-500 hover:text-black transition-colors shrink-0 md:mb-6"
        >
          <ChevronLeft size={20} className="md:w-4 md:h-4" />
          <span className="text-sm font-bold hidden md:block">
            Back to Studio
          </span>
        </Link>
        <h3 className="font-bold text-gray-900 truncate flex-1 text-sm md:text-base md:mb-2">
          {title}
        </h3>
      </div>

      {/* Steps Navigation - Swipeable horizontally on Mobile! */}
      <nav className="flex md:flex-col overflow-x-auto p-3 md:p-6 gap-2 md:space-y-0 hide-scrollbar bg-gray-50 md:bg-transparent shadow-inner md:shadow-none">
        {steps.map((step, idx) => {
          const isActive = currentStep === idx;
          const isPast = currentStep > idx;
          return (
            <button
              key={step}
              onClick={() => setCurrentStep(idx)}
              className={`flex items-center gap-2 md:gap-3 whitespace-nowrap px-4 md:px-3 py-2 rounded-full md:rounded-lg transition-colors text-sm ${
                isActive
                  ? "bg-black text-white md:bg-white md:shadow-sm md:text-black md:border md:border-gray-200 font-semibold"
                  : "bg-white md:bg-transparent border border-gray-200 md:border-transparent text-gray-600 hover:bg-gray-100 md:text-gray-500"
              }`}
            >
              {isPast ? (
                <CheckCircle2
                  size={16}
                  className={
                    isActive ? "text-white md:text-green-500" : "text-green-500"
                  }
                />
              ) : idx === 2 ? (
                <Send
                  size={16}
                  className={
                    isActive ? "text-white md:text-black" : "text-gray-400"
                  }
                />
              ) : (
                <div
                  className={`w-1.5 h-1.5 rounded-full hidden md:block ${isActive ? "bg-black" : "bg-gray-300"}`}
                ></div>
              )}
              <span>{step}</span>
            </button>
          );
        })}
      </nav>
    </aside>
  );
}
