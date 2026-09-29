"use client";
import { useState } from "react";
import { ChevronDown, ChevronUp, Check } from "lucide-react";

export default function AccordionItem({
  title,
  children,
  defaultOpen = false,
}: {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="border-b last:border-0 border-gray-100 py-4">
      <div
        className="flex items-center justify-between cursor-pointer group"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center gap-4">
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsChecked(!isChecked);
            }}
            className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${isChecked ? "bg-black border-black text-white" : "border-gray-300 group-hover:border-gray-400"}`}
          >
            {isChecked && <Check size={14} strokeWidth={3} />}
          </button>
          <h3
            className={`font-medium text-gray-900 ${isChecked ? "line-through text-gray-400" : ""}`}
          >
            {title}
          </h3>
        </div>
        {isOpen ? (
          <ChevronUp size={20} className="text-gray-400" />
        ) : (
          <ChevronDown size={20} className="text-gray-400" />
        )}
      </div>

      {isOpen && (
        <div className="mt-4 pl-9 text-sm text-gray-700 space-y-4">
          {children}
        </div>
      )}
    </div>
  );
}
