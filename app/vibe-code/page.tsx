"use client";
import { useState } from "react";
import ChallengeSidebar from "@/components/ChallengeSidebar";
import AccordionItem from "@/components/AccordionItem";
import CopyBlock from "@/components/CopyBlock";
import { Info, ExternalLink } from "lucide-react";

export default function VibeCodeApp() {
  const [currentStep, setCurrentStep] = useState(0);

  const handleNext = () => {
    if (currentStep < 2) setCurrentStep(currentStep + 1);
  };

  const handlePrev = () => {
    if (currentStep > 0) setCurrentStep(currentStep - 1);
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-white text-gray-900">
      <ChallengeSidebar
        title="Vibe Code a Deal Analyst"
        currentStep={currentStep}
        setCurrentStep={setCurrentStep}
      />

      <main className="flex-1 p-6 md:p-12 md:max-w-4xl flex flex-col">
        <div className="flex-1">
          {/* STEP 0: PREPARE */}
          {currentStep === 0 && (
            <div className="animate-in fade-in duration-300">
              <h1 className="text-3xl font-bold mb-8">
                Vibe Code an AI Deal Analyst
              </h1>

              <div className="bg-white border border-gray-200 rounded-xl p-8 mb-8 shadow-sm">
                <h2 className="text-xl font-bold mb-4">What you'll build</h2>
                <p className="mb-4 text-gray-600">
                  In this mission you’ll take a repetitive, manual real estate
                  task you do—like scrubbing rent rolls or extracting metrics
                  from Offering Memorandums (OMs)—and vibe code an AI app that
                  automates it using Google AI Studio. By the end, you’ll have:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-gray-600 mb-8">
                  <li>
                    A working AI copilot that accelerates your underwriting
                    workflow.
                  </li>
                  <li>
                    A live link to your app that your deal team can open and use
                    without your help.
                  </li>
                </ul>
              </div>

              <div className="mb-8">
                <h2 className="text-xl font-bold mb-4">What you're learning</h2>
                <p className="text-gray-600 mb-6">
                  When building apps with AI, the first version is never the
                  finished one. You’ll practice a three-step workflow to get a
                  reliable real estate tool:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                    <h3 className="font-bold mb-2">1. Plan and build</h3>
                    <p className="text-sm text-gray-600">
                      Describe your underwriting process clearly and review the
                      AI's logic before it writes code.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                    <h3 className="font-bold mb-2">
                      2. Debug against real data
                    </h3>
                    <p className="text-sm text-gray-600">
                      Test the app with a real property OM. Catch hallucinations
                      early so your math is bulletproof.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                    <h3 className="font-bold mb-2">3. Share your tool</h3>
                    <p className="text-sm text-gray-600">
                      Prep the interface so an Acquisitions VP could use it
                      without needing a tutorial.
                    </p>
                  </div>
                </div>

                <h3 className="font-bold mb-4">
                  Examples of what you could build:
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="border border-gray-200 p-4 rounded-lg">
                    <h4 className="font-semibold text-sm">
                      🏢 Acquisitions & Underwriting
                    </h4>
                    <p className="text-xs text-gray-500 mt-1">
                      Build an app that digests a 50-page OM and instantly
                      outputs the Cap Rate, trailing 12-month NOI, and a SWOT
                      analysis.
                    </p>
                  </div>
                  <div className="border border-gray-200 p-4 rounded-lg">
                    <h4 className="font-semibold text-sm">
                      📊 Asset Management
                    </h4>
                    <p className="text-xs text-gray-500 mt-1">
                      Create an app that parses a messy CSV rent roll and alerts
                      you to upcoming lease expirations and tenant concentration
                      risks.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* STEP 1: BUILD */}
          {currentStep === 1 && (
            <div className="animate-in fade-in duration-300">
              <h1 className="text-3xl font-bold mb-8">
                Build your AI Underwriter
              </h1>

              <div className="border border-blue-200 bg-blue-50 rounded-lg p-6 mb-10 flex gap-4">
                <Info className="text-blue-500 shrink-0 mt-1" size={20} />
                <div>
                  <h2 className="font-semibold text-lg mb-2 text-blue-900">
                    Project Brief
                  </h2>
                  <p className="text-blue-800 text-sm leading-relaxed">
                    Pick a tedious commercial real estate task. Whether it's
                    drafting investment committee memos, researching zoning
                    codes, or analyzing comp sets—vibe code an app that does the
                    heavy lifting for you.
                  </p>
                </div>
              </div>

              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-4">Step-by-step guide</h2>
                <p className="text-gray-600 mb-8 text-sm">
                  Work through the steps in order. Click the checkboxes as you
                  complete them.
                </p>

                {/* Phase I */}
                <div className="mb-10">
                  <h3 className="text-xl font-bold mb-4">
                    I. Plan it with Gemini
                  </h3>
                  <div className="bg-white border border-gray-200 rounded-lg px-4">
                    <AccordionItem
                      title="Find your CRE task"
                      defaultOpen={true}
                    >
                      <p>
                        Think about a task that eats up your hours on a Friday
                        night: scrubbing messy data, hunting for property comps,
                        or summarizing local market reports.
                      </p>
                      <div className="bg-gray-50 border border-gray-200 p-4 rounded-md mt-4">
                        <strong>No task in mind yet?</strong>
                        <p className="mt-2 text-gray-600 text-sm">
                          Try this: A "Memo Generator" that takes raw meeting
                          notes from a broker call and formats them into a
                          structured Deal Summary (Location, Ask Price, Yield
                          Metrics, Risk Factors).
                        </p>
                      </div>
                    </AccordionItem>

                    <AccordionItem title="Describe the app you want to build">
                      <p>
                        Start a new chat in Gemini and describe your app in four
                        parts: inputs (data), process (analysis), output
                        (deliverable), and goal.
                      </p>
                      <a
                        href="https://gemini.google.com"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-semibold bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-full mt-4 mb-2 transition-colors"
                      >
                        Open Google Gemini <ExternalLink size={14} />
                      </a>
                      <CopyBlock text="I want to build a real estate analysis app that takes [inputs, e.g. a multifamily Offering Memorandum PDF] and does [process, e.g. extracts the Cap Rate, NOI, and identifies deferred maintenance] to create [output, e.g. a 1-page Investment Committee memo] that helps my team [goal, e.g. quickly screen whether a deal fits our buy-box]. Help me plan it out before we build anything, and ask me clarifying questions." />
                    </AccordionItem>

                    <AccordionItem title="Give it your real context (Upload Data)">
                      <p>
                        Without actual property data, the plan stays generic.
                        Attach a sample file you actually use: an anonymized
                        rent roll (CSV), an old OM, or a market research report
                        PDF. Use the + button to add it.
                      </p>
                      <CopyBlock text="Use the attached property file as context for the app we're planning. Based on how this data is actually formatted, what edge cases or errors should I be considering for the app build?" />
                      <p className="text-xs text-red-600 mt-4 font-semibold">
                        * Note: Only use sample or publicly available OMs. Do
                        not upload confidential firm data.*
                      </p>
                    </AccordionItem>

                    <AccordionItem title="Summarize your plan into one build prompt">
                      <p>
                        Once you and Gemini agree on how the app should work,
                        ask it to consolidate everything into a master build
                        instruction.
                      </p>
                      <CopyBlock text="Pull everything we've discussed into one clear prompt I can build from, including the UI layout, the specific real estate formulas we set, and how the data should be presented. Ensure it solves my original goal of accelerating deal screening." />
                    </AccordionItem>
                  </div>
                </div>

                {/* Phase II */}
                <div className="mb-10">
                  <h3 className="text-xl font-bold mb-4">
                    II. Build it in Google AI Studio
                  </h3>
                  <div className="bg-white border border-gray-200 rounded-lg px-4">
                    <AccordionItem title="Switch to Google AI Studio to build your prototype">
                      <p>
                        Open Google AI Studio, click "New app," and paste your
                        master build prompt into the description box.
                      </p>
                      <a
                        href="https://aistudio.google.com"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-semibold bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-full mt-4 transition-colors"
                      >
                        Open Google AI Studio <ExternalLink size={14} />
                      </a>
                    </AccordionItem>

                    <AccordionItem title="Stress-test it on a real deal">
                      <p>
                        Run a fresh property listing or rent roll through your
                        new app.
                      </p>
                      <ul className="list-disc pl-5 mt-2 space-y-1 text-sm text-gray-700">
                        <li>
                          Did it calculate the Cap Rate correctly based on the
                          provided NOI?
                        </li>
                        <li>
                          Is the UI clean enough to screenshot for a slide deck?
                        </li>
                        <li>
                          Where did the AI hallucinate market data instead of
                          relying on the document?
                        </li>
                      </ul>
                    </AccordionItem>
                  </div>
                </div>

                {/* Phase III */}
                <div className="mb-10">
                  <h3 className="text-xl font-bold mb-4">
                    III. Debug & Refine
                  </h3>
                  <div className="bg-white border border-gray-200 rounded-lg px-4">
                    <AccordionItem title="Describe the gap, then fix it">
                      <p>
                        If the AI misses a step or formats the deal memo poorly,
                        describe the gap.
                      </p>
                      <CopyBlock text="In the [Financial Summary section], the [Cap Rate calculation is wrong because it included capital reserves in operating expenses]. Please change the logic so [it strictly follows standard NOI calculations]." />
                      <p className="mt-4 text-sm text-gray-700">
                        Pro-tips for real estate debugging:
                      </p>
                      <ul className="list-disc pl-5 mt-2 space-y-2 text-sm text-gray-700">
                        <li>
                          <strong>Set strict calculation rules:</strong> "From
                          now on, always use this formula for Cash-on-Cash
                          return: [formula]."
                        </li>
                        <li>
                          <strong>Formatting:</strong> "Change the output so all
                          currency is in USD, rounded to the nearest thousand,
                          and percentages have one decimal place."
                        </li>
                      </ul>
                    </AccordionItem>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* STEP 2: SUBMIT */}
          {currentStep === 2 && (
            <div className="animate-in fade-in duration-300">
              <h1 className="text-3xl font-bold mb-4">
                Submit to the PD Showcase
              </h1>
              <p className="text-gray-500 mb-8">
                Show off your custom Real Estate AI tool to the Project Destined
                network and potential employers.
              </p>

              <div className="space-y-6 max-w-2xl bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">
                    Project Title <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-lg p-3 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-black"
                    placeholder="e.g., Multifamily OM Parser & Memo Generator"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">
                    Live App Link <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="url"
                    placeholder="Paste your Google AI Studio link..."
                    className="w-full border border-gray-300 rounded-lg p-3 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-black"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">
                    Preview Image <span className="text-red-500">*</span>
                  </label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center bg-gray-50 hover:bg-gray-100 cursor-pointer transition-colors">
                    <p className="text-sm text-gray-500 font-medium">
                      Drag and drop a screenshot of your app, or click to
                      browse.
                    </p>
                    <p className="text-xs text-gray-400 mt-2">
                      Upload a key screenshot of your tool analyzing a deal.
                    </p>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">
                    Investment Thesis / Description{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    rows={4}
                    className="w-full border border-gray-300 rounded-lg p-3 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-black resize-none"
                    placeholder="What specific real estate problem did you solve? How does this tool save an analyst time?"
                  ></textarea>
                  <p className="text-xs text-gray-500 mt-2 text-right">
                    0/500 characters
                  </p>
                </div>

                <div className="flex items-center gap-3 bg-blue-50 p-4 rounded-lg border border-blue-100">
                  <input
                    type="checkbox"
                    id="showcase"
                    className="w-5 h-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    defaultChecked
                  />
                  <label
                    htmlFor="showcase"
                    className="text-sm text-blue-900 font-medium"
                  >
                    Share to PD Showcase (Earn your AI Builder badge and display
                    publicly to partner firms).
                  </label>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Working Nav Buttons tied to currentStep state */}
        <div className="flex justify-between items-center mt-12 pt-8 border-t border-gray-100 mt-auto">
          {currentStep > 0 ? (
            <button
              onClick={handlePrev}
              className="px-6 py-2.5 border border-gray-300 rounded-full font-bold hover:bg-gray-50 transition-colors text-sm"
            >
              Previous step
            </button>
          ) : (
            <div></div>
          )}

          {currentStep < 2 ? (
            <button
              onClick={handleNext}
              className="px-6 py-2.5 bg-black text-white rounded-full font-bold hover:bg-gray-800 transition-colors shadow-md text-sm"
            >
              Next step
            </button>
          ) : (
            <button className="px-8 py-2.5 bg-blue-600 text-white rounded-full font-bold hover:bg-blue-700 transition-colors shadow-md text-sm">
              Submit Project
            </button>
          )}
        </div>
      </main>
    </div>
  );
}
