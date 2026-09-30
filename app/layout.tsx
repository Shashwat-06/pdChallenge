import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Project Destined | AI & Automation Challenges",
  description:
    "Building the next generation of owners through experiential learning. Complete technical challenges to gain practical skills, build custom real estate AI tools, and earn badges to share on LinkedIn.",
  keywords: [
    "Project Destined",
    "Real Estate AI",
    "Experiential Learning",
    "Underwriting",
    "Automation",
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
