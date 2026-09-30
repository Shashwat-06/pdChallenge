"use client";
import { useState } from "react";
import ChallengeSidebar from "@/components/ChallengeSidebar";
import AccordionItem from "@/components/AccordionItem";
import CopyBlock from "@/components/CopyBlock";
import CountdownTimer from "@/components/CountdownTimer";
import { Info, ExternalLink, Image as ImageIcon } from "lucide-react";

export default function VibeCodeApp() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const changeStep = (newStep: number) => {
    if (newStep === currentStep || isTransitioning) return;

    setCurrentStep(newStep);
    window.scrollTo({ top: 0, behavior: "smooth" });

    setIsTransitioning(true);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const handleNext = () => {
    if (currentStep < 2) changeStep(currentStep + 1);
  };
  const handlePrev = () => {
    if (currentStep > 0) changeStep(currentStep - 1);
  };

  const stepTitles = [
    "Prepare: Vibe Code an AI Deal Analyst",
    "Build: Your AI Underwriter",
    "Submit: Share Your AI Tool",
  ];

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-white md:bg-gray-50 text-gray-900 relative">
      {isTransitioning && (
        <div className="fixed top-[61px] md:top-0 left-0 h-1 bg-red-600 z-[100] animate-loading-bar" />
      )}

      <ChallengeSidebar
        title="Vibe Code a Deal Analyst"
        currentStep={currentStep}
        changeStep={changeStep}
      />

      <main className="flex-1 p-0 md:p-12 md:max-w-4xl flex flex-col bg-white min-h-screen shadow-sm">
        <div className="flex-1 p-6 md:p-0">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4 border-b border-gray-100 pb-6">
            <h1 className="text-2xl md:text-3xl font-bold">
              {stepTitles[currentStep]}
            </h1>
            <CountdownTimer initialMinutes={45} />
          </div>

          {/* STEP 0: PREPARE */}
          {currentStep === 0 && (
            <div className="animate-in fade-in duration-300">
              <div className="bg-white border border-gray-200 rounded-xl p-6 md:p-8 mb-8 shadow-sm relative overflow-hidden">
                <h2 className="text-xl font-bold mb-4">
                  What you'll build today
                </h2>
                <p className="mb-4 text-gray-600 leading-relaxed">
                  "Vibe coding" means building software using everyday language
                  instead of writing traditional code. You don't need to know
                  Python or JavaScript. You just need to know how to give clear
                  instructions—like training a new intern.
                </p>
                <p className="mb-4 text-gray-600 leading-relaxed">
                  In this challenge, you’ll take a repetitive, manual real
                  estate task you do—like scrubbing messy rent rolls,
                  summarizing broker emails, or extracting metrics from 50-page
                  Offering Memorandums (OMs)—and you will vibe code a custom AI
                  web app that does it for you. By the end, you’ll have:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-gray-600 mb-4">
                  <li>
                    A custom-built AI app that accelerates your daily
                    underwriting workflow.
                  </li>
                  <li>
                    A live link to your app that your deal team can open and use
                    instantly.
                  </li>
                </ul>
              </div>

              <div className="mb-8">
                <h2 className="text-xl font-bold mb-4">
                  The Non-Tech Builder's Playbook
                </h2>
                <p className="text-gray-600 mb-6">
                  When building apps with AI, the first output is almost never
                  the finished product. You will practice a three-step agile
                  workflow to guarantee your real estate tool is actually
                  reliable:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                  <div className="bg-gray-50 p-5 rounded-lg border border-gray-100 border-t-4 border-t-blue-500">
                    <h3 className="font-bold mb-2">1. Plan with Gemini</h3>
                    <p className="text-sm text-gray-600">
                      Before touching the app builder, you will use Google
                      Gemini as your "architect". You will map out the exact
                      data inputs, logical rules, and expected outputs.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-5 rounded-lg border border-gray-100 border-t-4 border-t-orange-500">
                    <h3 className="font-bold mb-2">2. Debug vs. Reality</h3>
                    <p className="text-sm text-gray-600">
                      AI is prone to hallucination. You will test the app with a
                      real property OM to ensure its Cap Rate math is
                      bulletproof before trusting it.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-5 rounded-lg border border-gray-100 border-t-4 border-t-green-500">
                    <h3 className="font-bold mb-2">3. Polish & Share</h3>
                    <p className="text-sm text-gray-600">
                      A good tool is easy to use. You will ask the AI to clean
                      up the user interface so a non-technical VP of
                      Acquisitions could use it without a tutorial.
                    </p>
                  </div>
                </div>

                <h3 className="font-bold mb-4">
                  Examples of what you could build right now:
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="border border-gray-200 p-5 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Investment Committee Memo Generator
                    </h4>
                    <p className="text-sm text-gray-600">
                      Build an app where an analyst can drop in a PDF Offering
                      Memorandum. The app instantly extracts the Asking Price,
                      trailing 12-month NOI, Year Built, and drafts a 1-page
                      SWOT analysis for the IC deck.
                    </p>
                  </div>
                  <div className="border border-gray-200 p-5 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Lease Expiration Risk Analyzer
                    </h4>
                    <p className="text-sm text-gray-600">
                      Create an app that parses a messy CSV rent roll,
                      calculates tenant concentration percentages, and
                      automatically flags any leases expiring in the next 12
                      months with a red warning.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* STEP 1: BUILD */}
          {currentStep === 1 && (
            <div className="animate-in fade-in duration-300">
              <div className="border border-blue-200 bg-blue-50 rounded-lg p-5 md:p-6 mb-10 flex gap-4">
                <Info className="text-blue-500 shrink-0 mt-1" size={20} />
                <div>
                  <h2 className="font-semibold text-lg mb-2 text-blue-900">
                    The Challenge Brief
                  </h2>
                  <p className="text-blue-800 text-sm leading-relaxed">
                    Pick one tedious commercial real estate task you hate doing
                    manually. Follow the highly detailed steps below to plan it
                    with Gemini, generate the interface in Google AI Studio, and
                    debug it until it works perfectly. Check off each step as
                    you complete it.
                  </p>
                </div>
              </div>

              <div className="mb-12">
                <h2 className="text-xl md:text-2xl font-bold mb-6">
                  Step-by-step guide
                </h2>

                {/* Phase I */}
                <div className="mb-10">
                  <h3 className="text-lg md:text-xl font-bold mb-4">
                    Phase I: Plan it with Gemini
                  </h3>
                  <div className="bg-white border border-gray-200 rounded-lg px-2 md:px-4 shadow-sm">
                    <AccordionItem
                      title="1. Find your CRE task"
                      defaultOpen={true}
                    >
                      <p className="text-sm text-gray-700 mb-4">
                        Think about a task that eats up your hours on a Friday
                        night. It needs to be a task involving text, data, or
                        calculation.
                      </p>
                      <div className="bg-gray-50 border border-gray-200 p-4 rounded-md mt-4">
                        <strong className="text-sm text-gray-900">
                          Don't have an idea? Use this one:
                        </strong>
                        <p className="mt-2 text-gray-600 text-sm">
                          Build a Broker Notes to Deal Summary app. Analysts
                          often take messy, unstructured notes while on the
                          phone with a broker. The app will take those messy
                          notes and format them into a perfectly structured
                          table (Location, Ask Price, Yield Metrics, Value-Add
                          Potential, Risk Factors).
                        </p>
                      </div>
                    </AccordionItem>

                    <AccordionItem title="2. Map the 4-Part Framework">
                      <p className="text-sm text-gray-700 mb-4">
                        Open a new chat in Gemini. To build an app fast, you
                        need to be extremely specific. We use the 4-Part
                        Framework: Inputs (what data are you giving it?),
                        Process (what rules must it follow?), Output (how should
                        it look?), and Goal (why are we doing this?).
                      </p>
                      <a
                        href="https://gemini.google.com"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-semibold bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-full mb-4 transition-colors"
                      >
                        Open Google Gemini <ExternalLink size={14} />
                      </a>
                      <CopyBlock
                        text="I want to build a real estate analysis web app. Here is the framework:
- INPUT: A multifamily Offering Memorandum PDF.
- PROCESS: Extract the Cap Rate, NOI, Year Built, and identify any deferred maintenance mentioned in the text.
- OUTPUT: A clean, 1-page Investment Committee memo with bullet points and a financial table.
- GOAL: Help my acquisitions team screen deals in 5 minutes instead of 2 hours.

Act as my software architect. Interview me ONE question at a time to refine these rules before we write any code."
                      />
                    </AccordionItem>

                    <AccordionItem title="3. Ground it in Reality (Upload Data)">
                      <p className="text-sm text-gray-700 mb-4">
                        A major mistake beginners make is keeping the
                        conversation theoretical. The AI needs to see exactly
                        what your messy data looks like.
                      </p>
                      <p className="text-sm text-gray-700 mb-4">
                        Find a sample file you actually use: an anonymized rent
                        roll CSV, an old OM PDF, or an Excel market research
                        report. Use the + button in Gemini to upload it.
                      </p>
                      <CopyBlock text="I have attached a sample property file so you can see exactly what the data looks like. Based on how this data is actually formatted, what edge cases, missing data fields, or mathematical errors should we be prepared to handle in our app's logic?" />
                      <p className="text-xs text-red-600 mt-4 font-semibold">
                        * Note: Only use sample or publicly available OMs. Never
                        upload confidential firm data. *
                      </p>
                    </AccordionItem>

                    <AccordionItem title="4. Generate the 'Master Build Prompt'">
                      <p className="text-sm text-gray-700 mb-4">
                        Once you and Gemini have discussed the edge cases, you
                        need it to write the "Master Prompt." This is the
                        ultimate set of instructions that you will copy and
                        paste into the actual App Builder in the next step.
                      </p>
                      <CopyBlock
                        text="We are ready. Pull absolutely everything we've discussed into one massive, clear Master Prompt that I can feed into a code generator. It must explicitly detail:
1. The UI layout (where the buttons and text boxes go)
2. The strict real estate formulas we agreed on
3. The exact presentation of the output data. 
Write it so the code-generator can build it flawlessly on the first try."
                      />
                    </AccordionItem>
                  </div>
                </div>

                {/* Phase II */}
                <div className="mb-10">
                  <h3 className="text-lg md:text-xl font-bold mb-4">
                    Phase II: Build in Google AI Studio
                  </h3>
                  <div className="bg-white border border-gray-200 rounded-lg px-2 md:px-4 shadow-sm">
                    <AccordionItem title="5. Switch to Google AI Studio & Generate">
                      <p className="text-sm text-gray-700 mb-4">
                        Google AI Studio has a feature that turns text prompts
                        directly into functioning web apps. Copy the massive
                        Master Prompt that Gemini just wrote for you.
                      </p>
                      <a
                        href="https://aistudio.google.com"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-semibold bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-full mb-4 transition-colors"
                      >
                        Open Google AI Studio <ExternalLink size={14} />
                      </a>
                      <p className="text-sm text-gray-700">
                        Click New app, paste your Master Prompt into the
                        description box, and hit Enter. Watch as it writes the
                        code and renders the interface!
                      </p>
                    </AccordionItem>

                    <AccordionItem title="6. The Reality Stress-Test">
                      <p className="text-sm text-gray-700 mb-4">
                        Once the app appears on your screen, don't just look at
                        it—you must test it. Upload a fresh property listing or
                        rent roll (different from the one you used in planning)
                        into your new app interface.
                      </p>
                      <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
                        <li>
                          Did it calculate the Cap Rate correctly based on the
                          provided NOI?
                        </li>
                        <li>Did it crash because a field was missing?</li>
                        <li>
                          Crucial: Did it hallucinate? (e.g., guessing the Year
                          Built instead of reading it from the document).
                        </li>
                      </ul>
                    </AccordionItem>
                  </div>
                </div>

                {/* Phase III */}
                <div className="mb-10">
                  <h3 className="text-lg md:text-xl font-bold mb-4">
                    Phase III: Debug & Polish
                  </h3>
                  <div className="bg-white border border-gray-200 rounded-lg px-2 md:px-4 shadow-sm">
                    <AccordionItem title="7. Describe the gap, then fix it">
                      <p className="text-sm text-gray-700 mb-4">
                        If the app misses a step or does bad math, do not try to
                        fix the code yourself. Use the chat box inside AI Studio
                        to describe the gap in plain English.
                      </p>
                      <CopyBlock text="In the Financial Summary section, the Cap Rate calculation is wrong because it included capital reserves in the operating expenses. Please change the logic so it strictly follows standard NOI calculations (Revenue minus Operating Expenses only)." />
                    </AccordionItem>

                    <AccordionItem title="8. Set Standing Rules to stop Hallucinations">
                      <p className="text-sm text-gray-700 mb-4">
                        LLMs love to invent information to sound helpful. You
                        must establish absolute, unbreakable rules for your app.
                      </p>
                      <CopyBlock text="From now on, follow this absolute rule: If a data point like 'Year Built' or 'Occupancy Rate' is NOT explicitly written in the uploaded document, you must output 'Data Not Provided'. You are strictly forbidden from guessing or estimating market averages." />
                    </AccordionItem>

                    <AccordionItem title="9. Polish for your Non-Tech Colleagues">
                      <p className="text-sm text-gray-700 mb-4">
                        You know how to use your app, but if you send this to a
                        colleague, they will be confused. Ask the AI to clean up
                        the interface to look like professional SaaS software.
                      </p>
                      <CopyBlock text="Update the User Interface. Add a clear welcome message explaining exactly what this tool does and what kind of file the user should upload. Hide any technical error logs. Make the background clean and professional." />
                    </AccordionItem>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* STEP 2: SUBMIT */}
          {currentStep === 2 && (
            <div className="animate-in fade-in duration-300">
              <div className="space-y-6 md:max-w-2xl bg-white border border-gray-200 rounded-xl p-5 md:p-8 shadow-sm">
                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">
                    Project Title <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-lg p-3 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-black text-sm"
                    placeholder="e.g., Multifamily OM Parser & Memo Generator"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">
                    Live App Link (Google AI Studio){" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <p className="text-xs text-gray-500 mb-2">
                    In Google AI Studio, click the 'Share' button in the top
                    right and copy the public link.
                  </p>
                  <input
                    type="url"
                    placeholder="https://aistudio.google.com/..."
                    className="w-full border border-gray-300 rounded-lg p-3 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-black text-sm"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">
                    Preview Image <span className="text-red-500">*</span>
                  </label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center bg-gray-50 hover:bg-gray-100 cursor-pointer transition-colors">
                    <ImageIcon
                      className="text-gray-400 mx-auto mb-3"
                      size={32}
                    />
                    <div>
                      <p className="text-sm text-gray-700 font-bold">
                        Upload a screenshot of your app
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        Upload a key screenshot of your tool actively analyzing
                        a real estate deal.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">
                    Investment Thesis / Description{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    rows={4}
                    className="w-full border border-gray-300 rounded-lg p-3 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-black resize-none text-sm"
                    placeholder="Pitch it: What specific real estate bottleneck did you solve? How much time does this save an analyst?"
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
                    Share to the Project Destined Showcase (Earn your AI Builder
                    badge and display publicly to partner firms).
                  </label>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="flex justify-between items-center mt-8 md:mt-12 pt-6 md:pt-8 border-t border-gray-100 pb-6 md:pb-0 px-6 md:px-0">
          {currentStep > 0 ? (
            <button
              onClick={handlePrev}
              className="px-5 md:px-6 py-2.5 border border-gray-300 rounded-full font-bold hover:bg-gray-50 transition-colors text-sm"
            >
              Previous step
            </button>
          ) : (
            <div></div>
          )}

          {currentStep < 2 ? (
            <button
              onClick={handleNext}
              className="px-5 md:px-6 py-2.5 bg-black text-white rounded-full font-bold hover:bg-gray-800 transition-colors shadow-md text-sm"
            >
              Next step
            </button>
          ) : (
            <button className="px-6 md:px-8 py-2.5 bg-blue-600 text-white rounded-full font-bold hover:bg-blue-700 transition-colors shadow-md text-sm">
              Submit Project
            </button>
          )}
        </div>
      </main>
    </div>
  );
}
