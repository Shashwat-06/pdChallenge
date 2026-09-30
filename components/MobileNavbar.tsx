"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X, Bell, User } from "lucide-react";

export default function MobileNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden flex flex-col bg-white border-b border-gray-200 sticky top-0 z-[60] h-16 justify-center">
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center gap-4">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-black focus:outline-none"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <Link href="/" className="flex items-center">
            {/* Updated to use local public folder image */}
            <img
              src="/pdLogo.png"
              alt="Project Destined"
              className="h-6 object-contain invert opacity-90"
            />
          </Link>
        </div>

        <div className="flex items-center gap-4 text-black">
          <button className="focus:outline-none">
            <Bell size={20} />
          </button>
          <div className="w-7 h-7 bg-gray-100 rounded-full flex items-center justify-center border border-gray-300 overflow-hidden cursor-pointer">
            <User size={16} className="text-gray-500" />
          </div>
        </div>
      </div>

      {isOpen && (
        <nav className="flex flex-col px-4 pb-4 space-y-2 bg-white shadow-xl absolute top-16 left-0 w-full border-b border-gray-200 animate-in slide-in-from-top-2 z-50">
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="px-3 py-3 bg-blue-50 text-blue-700 rounded-md text-sm font-medium mt-2"
          >
            AI Skills Studio
          </Link>
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="px-3 py-3 text-gray-600 hover:bg-gray-100 rounded-md text-sm font-medium transition-colors"
          >
            Showcase
          </Link>
        </nav>
      )}
    </div>
  );
}
