import GlobalSidebar from "@/components/GlobalSidebar";
import MobileNavbar from "@/components/MobileNavbar";
import ChallengeCard from "@/components/ChallengeCard";

// Standardized all logos using the reliable Favicon CDN approach
const GeminiIcon = (
  <img
    src="https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://gemini.google.com&size=256"
    alt="Google Gemini"
    className="w-7 h-7 rounded object-contain"
  />
);

const NotebookLMIcon = (
  <img
    src="https://unpkg.com/@lobehub/icons-static-svg/icons/notebooklm.svg"
    alt="NotebookLM"
    className="w-7 h-7 rounded object-contain"
  />
);

const N8nIcon = (
  <img
    src="https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://n8n.io&size=256"
    alt="n8n"
    className="w-7 h-7 rounded object-contain"
  />
);

const ClayIcon = (
  <img
    src="https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://clay.com&size=256"
    alt="Clay"
    className="w-7 h-7 rounded object-contain"
  />
);

const ApifyIcon = (
  <img
    src="https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://apify.com&size=256"
    alt="Apify"
    className="w-7 h-7 rounded object-contain"
  />
);

const MakeIcon = (
  <img
    src="https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://make.com&size=256"
    alt="Make.com"
    className="w-7 h-7 rounded object-contain"
  />
);

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-white text-black">
      <GlobalSidebar />
      <MobileNavbar />
      <main className="flex-1 p-6 md:p-12 md:max-w-6xl mx-auto overflow-y-auto">
        {/* Changed md:mt-2 to md:-mt-6 to pull the logo up and align it perfectly with the sidebar */}
        <header className="flex flex-col items-center justify-center text-center mt-6 md:-mt-6 mb-12 md:mb-20">
          <div className="mb-6 hidden md:block">
            <img
              src="https://projectdestined.com/lovable-uploads/fd84ac92-2d32-41a3-bd7c-a70d31a20a77.png"
              alt="Project Destined"
              className="h-20 object-contain invert drop-shadow-sm opacity-90"
            />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
            AI & Automation Challenges
          </h1>
          <p className="text-gray-500 max-w-2xl text-base md:text-lg leading-relaxed">
            Building the next generation of owners through experiential
            learning. Complete these technical challenges to gain practical
            skills, build custom real estate tools, and earn digital badges to
            showcase on your LinkedIn profile.
          </p>
        </header>

        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ChallengeCard
              title="Vibe Code a Deal Analyst"
              desc="Build an AI app that digests offering memorandums, extracts Cap Rates, and drafts investment committee memos."
              icon={GeminiIcon}
              href="/vibe-code"
              users="893"
            />
            <ChallengeCard
              title="Automate OM Extraction"
              desc="Build an underwriting pipeline in n8n. Parse property PDFs via webhook and extract structured intelligence to a database."
              icon={N8nIcon}
              href="/n8n-agent"
              users="412"
            />
            <ChallengeCard
              title="Build a Deal Sourcing List"
              desc="Build a lead list in Clay—a list of institutional buyers or sellers, ranked by live buying signals so the ones worth calling sit at the top."
              icon={ClayIcon}
              href="/clay-sourcing"
              users="256"
            />
            <ChallengeCard
              title="Zoning Due Diligence Screener"
              desc="Use Google NotebookLM to parse 300-page municipal zoning codes, extracting Floor Area Ratios and setbacks without hallucination."
              icon={NotebookLMIcon}
              href="/zoning-screener"
              users="642"
            />
            <ChallengeCard
              title="Automate Rent Comp Tracking"
              desc="Build a headless web scraper in Apify to monitor competitor leasing sites and pipe live rent prices directly to Airtable."
              icon={ApifyIcon}
              href="/rent-comp-tracker"
              users="389"
            />
            <ChallengeCard
              title="Automate IC Slide Decks"
              desc="Connect Google Sheets to Google Slides using Make.com. Generate branded Investment Committee pitch decks instantly from underwriting data."
              icon={MakeIcon}
              href="/ic-deck-generator"
              users="512"
            />
          </div>
        </section>
      </main>
    </div>
  );
}
