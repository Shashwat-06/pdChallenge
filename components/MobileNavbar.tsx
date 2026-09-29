"use client";
import { useState } from "react";
import Link from "next/link";
import { Hash, Search, Menu, X } from "lucide-react";

export default function MobileNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden flex flex-col bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="flex items-center justify-between p-4">
        <Link href="/" className="flex items-center">
          <img
            src="https://projectdestined.com/lovable-uploads/fd84ac92-2d32-41a3-bd7c-a70d31a20a77.png"
            alt="Project Destined"
            className="h-7 object-contain invert opacity-90"
          />
        </Link>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-gray-700 hover:text-black focus:outline-none"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <nav className="flex flex-col px-4 pb-4 space-y-2 bg-white shadow-lg absolute top-[61px] left-0 w-full border-b border-gray-200 animate-in slide-in-from-top-2">
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 px-3 py-3 bg-blue-50 text-blue-700 rounded-md text-sm font-medium mt-2"
          >
            <Hash size={18} /> AI Skills Studio
            <div className="w-1.5 h-1.5 bg-blue-600 rounded-full ml-auto"></div>
          </Link>
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 px-3 py-3 text-gray-600 hover:bg-gray-100 rounded-md text-sm font-medium transition-colors"
          >
            <Search size={18} /> Showcase
          </Link>
        </nav>
      )}
    </div>
  );
}
