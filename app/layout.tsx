import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Project Destined AI Studio",
  description:
    "Go from raw property data to working underwriting intelligence. Build custom AI tools to accelerate your commercial real estate deal flow.",
  keywords: [
    "Project Destined",
    "Real Estate AI",
    "Underwriting",
    "Deal Flow",
    "AI Agents",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-black antialiased">{children}</body>
    </html>
  );
}
