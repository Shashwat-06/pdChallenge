"use client";
import { Send } from "lucide-react";
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
  const steps = ["Prepare", "Build", "Submit project"];

  return (
    <aside className="w-full md:w-64 shrink-0 p-6 border-r md:h-screen md:sticky md:top-0 bg-white">
      <Link
        href="/"
        className="flex items-center gap-2 mb-8 cursor-pointer hover:text-gray-600 transition-colors"
      >
        <span className="text-sm font-medium">&lt; {title}</span>
      </Link>
      <nav className="space-y-4">
        {steps.map((step, idx) => {
          const isActive = currentStep === idx;
          const isSubmit = idx === 2;

          return (
            <button
              key={step}
              onClick={() => setCurrentStep(idx)}
              className={`flex items-center gap-3 w-full text-left transition-colors ${isActive ? "text-black font-semibold" : "text-gray-500 hover:text-black"}`}
            >
              {isSubmit ? (
                <Send
                  size={16}
                  className={isActive ? "text-black" : "text-gray-500"}
                />
              ) : (
                <span
                  className={`w-4 h-[1px] ${isActive ? "bg-black" : "bg-gray-400"}`}
                ></span>
              )}
              <span className="text-sm font-medium">{step}</span>
            </button>
          );
        })}
      </nav>
    </aside>
  );
}
