import Link from "next/link";
import { Hash } from "lucide-react";

export default function GlobalSidebar() {
  return (
    <aside className="w-64 border-r border-gray-200 h-screen sticky top-0 p-4 bg-gray-50 shrink-0 hidden md:block">
      <div className="flex items-center gap-2 mb-8 px-2 mt-6 md:mt-2">
        {/* Updated to use local public folder image */}
        <img
          src="/pdLogo.png"
          alt="Project Destined"
          className="h-8 object-contain invert opacity-90"
        />
      </div>

      <nav className="space-y-1 mb-8">
        <Link
          href="/"
          className="flex items-center gap-3 px-3 py-2 bg-blue-50 text-blue-700 rounded-md text-sm font-medium"
        >
          <Hash size={16} /> AI Skills Studio{" "}
          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full ml-auto"></div>
        </Link>
      </nav>
    </aside>
  );
}
