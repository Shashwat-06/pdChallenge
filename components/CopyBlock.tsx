"use client";
import { Copy, Check } from "lucide-react";
import { useState } from "react";

export default function CopyBlock({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative bg-gray-50 border border-gray-200 rounded-md p-4 mt-2 font-mono text-sm text-gray-800">
      <button
        onClick={handleCopy}
        className="absolute top-3 right-3 text-gray-400 hover:text-black transition-colors"
        title="Copy to clipboard"
      >
        {copied ? (
          <Check size={16} className="text-green-600" />
        ) : (
          <Copy size={16} />
        )}
      </button>
      <p className="pr-8 whitespace-pre-wrap">{text}</p>
    </div>
  );
}
