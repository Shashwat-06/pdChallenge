"use client";
import { useState } from "react";
import MobileNavbar from "@/components/MobileNavbar";
import ChallengeSidebar from "@/components/ChallengeSidebar";
import AccordionItem from "@/components/AccordionItem";
import CopyBlock from "@/components/CopyBlock";
import CountdownTimer from "@/components/CountdownTimer";
import { Info, ExternalLink, Image as ImageIcon } from "lucide-react";

export default function ClaySourcingChallenge() {
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
    "Prepare: Build a Deal Sourcing List",
    "Build: Your Target List",
    "Submit: Share Your Strategy",
  ];

  return (
    <div className="min-h-screen bg-white md:bg-gray-50 text-gray-900 relative">
      <MobileNavbar />
      {isTransitioning && (
        <div className="fixed top-16 md:top-0 left-0 h-1 bg-red-600 z-[100] animate-loading-bar" />
      )}

      <div className="block md:flex">
        <ChallengeSidebar
          title="Build a Deal Sourcing List"
          currentStep={currentStep}
          changeStep={changeStep}
        />

        {/* FULL WIDTH WHITE BACKGROUND */}
        <main className="flex-1 flex flex-col bg-white min-h-screen shadow-sm w-full">
          {/* CENTERED CONTENT WRAPPER */}
          <div className="flex-1 flex flex-col w-full max-w-5xl mx-auto p-0 md:p-12">
            <div className="flex-1 p-6 md:p-0">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4 border-b border-gray-100 pb-6">
                <h1 className="text-2xl md:text-3xl font-bold">
                  {stepTitles[currentStep]}
                </h1>
                <CountdownTimer initialMinutes={25} />
              </div>

              {/* STEP 0: PREPARE */}
              {currentStep === 0 && (
                <div className="animate-in fade-in duration-300">
                  <div className="bg-white border border-gray-200 rounded-xl p-6 md:p-8 mb-8 shadow-sm relative overflow-hidden">
                    <h2 className="text-xl font-bold mb-4">The Objective</h2>
                    <p className="text-gray-600 mb-4">
                      In commercial real estate, finding the right buyer or
                      off-market seller is half the battle. Your mission is to
                      build a hyper-targeted lead list in Clay—and rank them
                      based on <strong>real-time buying signals</strong> so the
                      hottest prospects sit at the top.
                    </p>
                    <p className="text-gray-600 mb-4">
                      Run this exercise as if you have a live deal on the desk
                      and need to generate 5 high-probability call targets for
                      your MD.
                    </p>
                  </div>

                  <div className="mb-8">
                    <h2 className="text-xl font-bold mb-4">The Methodology</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                      <div className="bg-gray-50 p-5 rounded-lg border border-gray-100 border-t-4 border-t-blue-500">
                        <h3 className="font-bold mb-2">Finding the Needle</h3>
                        <p className="text-sm text-gray-600">
                          Transition from generic searches to highly actionable
                          ones ("Family offices in Dallas investing in
                          Value-Add").
                        </p>
                      </div>
                      <div className="bg-gray-50 p-5 rounded-lg border border-gray-100 border-t-4 border-t-orange-500">
                        <h3 className="font-bold mb-2">Ranking Signals</h3>
                        <p className="text-sm text-gray-600">
                          A list of names isn't enough. Use AI to scan the web
                          for triggers: Did they just hire a Head of
                          Acquisitions? Did they close a fund?
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
                        Brief
                      </h2>
                      <p className="text-blue-800 text-sm leading-relaxed">
                        Build a target account list of 25 real estate firms that
                        fit your ideal customer definition. Then use the Signals
                        tool to prioritize accounts for outreach. Follow the
                        steps below carefully.
                      </p>
                    </div>
                  </div>

                  <div className="mb-12">
                    <h2 className="text-2xl font-bold mb-6">
                      Step-by-step guide
                    </h2>

                    <div className="mb-10">
                      <h3 className="text-lg md:text-xl font-bold mb-4">
                        Level 1: Define and Search
                      </h3>
                      <div className="bg-white border border-gray-200 rounded-lg px-2 md:px-4 shadow-sm">
                        <AccordionItem
                          title="1. Open Clay and set up your trial"
                          defaultOpen={true}
                        >
                          <p className="text-sm text-gray-600 mb-4">
                            Go to clay.com and sign up with your email. Select{" "}
                            <strong>Start building</strong> to open your
                            workspace.
                          </p>
                          <a
                            href="https://clay.com"
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 text-sm font-semibold bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-full mt-2 mb-4 transition-colors"
                          >
                            Sign up for Clay <ExternalLink size={14} />
                          </a>
                        </AccordionItem>

                        <AccordionItem title="2. Define your target">
                          <p className="text-sm text-gray-600 mb-4">
                            Before touching any search tool, make sure you can
                            articulate what defines the target for your search.
                          </p>
                          <CopyBlock text="Companies that [do a specific thing], in [a city or region], with [a size range], because [why they would be a good fit for your CRE deal or service]." />
                          <div className="bg-gray-50 border border-gray-200 p-4 rounded-md mt-4">
                            <strong className="text-sm text-gray-900">
                              CRE Sourcing Example:
                            </strong>
                            <p className="mt-1 text-gray-600 text-sm">
                              Companies that{" "}
                              <strong>invest in value-add multifamily</strong>,
                              in the <strong>United States</strong>, with{" "}
                              <strong>50-500 employees</strong>, because{" "}
                              <strong>
                                they have the capital to acquire the off-market
                                Dallas portfolio I am brokering
                              </strong>
                              .
                            </p>
                          </div>
                        </AccordionItem>

                        <AccordionItem title="3. Search with Sculptor">
                          <p className="text-sm text-gray-600 mb-4">
                            Sculptor is Clay's AI copilot that helps you turn a
                            go-to-market idea into a working Clay workflow using
                            natural language.
                          </p>
                          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700 mb-4">
                            <li>
                              In the left sidebar, click{" "}
                              <strong>Find leads</strong>, then{" "}
                              <strong>Companies</strong>.
                            </li>
                            <li>
                              Locate the <strong>Chat</strong> button on your
                              screen. This is Sculptor.
                            </li>
                          </ul>
                          <CopyBlock text="[Private Equity and Institutional Investment] companies in [United States] with [50 to 500] employees that [invest in commercial real estate, specifically multifamily or industrial assets]." />
                        </AccordionItem>
                      </div>
                    </div>

                    <div className="mb-10">
                      <h3 className="text-lg md:text-xl font-bold mb-4">
                        Level 2: Tighten and Save
                      </h3>
                      <div className="bg-white border border-gray-200 rounded-lg px-2 md:px-4 shadow-sm">
                        <AccordionItem title="4. Tighten the filters and prune the results">
                          <p className="text-sm text-gray-600 mb-4">
                            Clay drafted filters from your words. Now check its
                            work. Industry labels are self-reported and broad.
                          </p>
                          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700 mb-4">
                            <li>
                              <strong>Find the impostor:</strong> Scan the table
                              for a company that technically matches but doesn't
                              belong. Tighten the filter to drop them.
                            </li>
                            <li>
                              <strong>Repeat</strong> until the list is short
                              enough to read end to end, somewhere around 25
                              companies.
                            </li>
                          </ul>
                        </AccordionItem>

                        <AccordionItem title="5. Save the results as a named list">
                          <p className="text-sm text-gray-600 mb-4">
                            You'll pull the results out of the search screen and
                            into a table of your own.
                          </p>
                          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
                            <li>
                              Click <strong>Continue</strong> underneath the
                              preview of the companies, then{" "}
                              <strong>Save to a new workbook and table</strong>.
                            </li>
                            <li>
                              Once the table opens, rename it to something
                              you'll recognize, like "Target Multifamily
                              Buyers."
                            </li>
                          </ul>
                        </AccordionItem>
                      </div>
                    </div>

                    <div className="mb-10">
                      <h3 className="text-lg md:text-xl font-bold mb-4">
                        Level 3: Find your Signal
                      </h3>
                      <div className="bg-white border border-gray-200 rounded-lg px-2 md:px-4 shadow-sm">
                        <AccordionItem title="6. Pick the signal that matters most">
                          <p className="text-sm text-gray-600 mb-4">
                            A Clay signal alerts you to changes at a company or
                            with a contact. Explore the options in Clay's
                            Signals panel:
                          </p>
                          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700 mb-4">
                            <li>
                              <strong>Job posting:</strong> Hiring for an
                              Acquisitions Manager means they are actively
                              looking to deploy capital.
                            </li>
                            <li>
                              <strong>New hire:</strong> A new leader often
                              re-evaluates pipeline deals in their first 90
                              days.
                            </li>
                          </ul>
                        </AccordionItem>

                        <AccordionItem title="7. Apply your signal and verify">
                          <p className="text-sm text-gray-600 mb-4">
                            Go to the signal icon on the left, then select your
                            signal type (e.g., Job Posting). Follow the workflow
                            on the pop up screen, select{" "}
                            <strong>Use existing Clay table</strong>, and choose
                            the table you just saved.
                          </p>
                        </AccordionItem>
                      </div>
                    </div>

                    <div className="mb-10">
                      <h3 className="text-lg md:text-xl font-bold mb-4">
                        Level 4: Rank and Decide
                      </h3>
                      <div className="bg-white border border-gray-200 rounded-lg px-2 md:px-4 shadow-sm">
                        <AccordionItem title="8. Make the cut to five & assign an action">
                          <p className="text-sm text-gray-600 mb-4">
                            Clay surfaced the candidates. Choosing which five
                            matter this week is your job. Consider freshness and
                            fit.
                          </p>
                          <p className="text-sm text-gray-600 mb-4">
                            Finish each of the five lines with what you'll do
                            about it:
                          </p>
                          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
                            <li>
                              <strong>"Reach out":</strong> The signal is strong
                              and specific. Message a decision-maker this week.
                            </li>
                            <li>
                              <strong>"Watch":</strong> The signal is promising
                              but unverified. Set a date to check again.
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
                  <div className="space-y-6 bg-white border border-gray-200 rounded-xl p-5 md:p-8 shadow-sm">
                    <div>
                      <label className="block text-sm font-bold text-gray-900 mb-2">
                        Target List Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        className="w-full border border-gray-300 rounded-lg p-3 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-black text-sm"
                        placeholder="e.g., Top 5 Institutional Buyers (Multifamily)"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-gray-900 mb-2">
                        Sourcing Strategy / Thesis{" "}
                        <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        rows={5}
                        className="w-full border border-gray-300 rounded-lg p-3 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-black resize-none text-sm"
                        placeholder="1. Who was the target? 2. What Buying Signal did you use? 3. What is the Next Action?"
                      ></textarea>
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
                <button className="px-6 md:px-8 py-2.5 bg-green-600 text-white rounded-full font-bold hover:bg-blue-700 transition-colors shadow-md text-sm">
                  Submit Targets
                </button>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
