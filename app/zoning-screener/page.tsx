"use client";
import { useState } from "react";
import MobileNavbar from "@/components/MobileNavbar";
import ChallengeSidebar from "@/components/ChallengeSidebar";
import AccordionItem from "@/components/AccordionItem";
import CopyBlock from "@/components/CopyBlock";
import CountdownTimer from "@/components/CountdownTimer";
import {
  Info,
  ExternalLink,
  Image as ImageIcon,
  Timer,
  Check,
} from "lucide-react";

export default function ZoningScreenerApp() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const [hasStarted, setHasStarted] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [screenshotName, setScreenshotName] = useState("");

  const changeStep = (newStep: number) => {
    if (newStep === currentStep || isTransitioning || !hasStarted) return;
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

  const handleSubmit = () => {
    setIsSubmitted(true);
  };

  const stepTitles = [
    "Prepare: Zoning Due Diligence Screener",
    "Build: Your Zoning AI Paralegal",
    "Submit: Share Your Compliance Tool",
  ];

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6 text-center animate-in fade-in">
        <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6 shadow-sm border border-green-200">
          <Check size={40} strokeWidth={3} />
        </div>
        <h1 className="text-3xl font-bold mb-3 text-gray-900">Thank you!</h1>
        <p className="text-gray-600 mb-8 max-w-md">
          Your compliance tool has been submitted successfully.
        </p>
        <button
          onClick={() => window.location.reload()}
          className="bg-black text-white px-8 py-3 rounded-full font-bold hover:bg-gray-800 transition-colors shadow-md"
        >
          Return to Dashboard
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white md:bg-gray-50 text-gray-900 relative">
      <MobileNavbar />

      {isTransitioning && (
        <div className="fixed top-16 md:top-0 left-0 h-1 bg-red-600 z-[100] animate-loading-bar" />
      )}

      <div className="block md:flex">
        <ChallengeSidebar
          title="Zoning Due Diligence"
          currentStep={currentStep}
          changeStep={changeStep}
        />

        <main className="flex-1 flex flex-col bg-white min-h-screen shadow-sm w-full">
          <div className="flex-1 flex flex-col w-full max-w-5xl mx-auto p-0 md:p-12">
            <div className="flex-1 p-6 md:p-0">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4 border-b border-gray-100 pb-6">
                <h1 className="text-2xl md:text-3xl font-bold">
                  {stepTitles[currentStep]}
                </h1>
                <CountdownTimer initialMinutes={30} isActive={hasStarted} />
              </div>

              {!hasStarted ? (
                <div className="flex flex-col items-center justify-center py-24 animate-in fade-in">
                  <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-6 shadow-inner">
                    <Timer size={32} />
                  </div>
                  <h2 className="text-2xl font-bold mb-4 text-gray-900">
                    Ready to build your AI Paralegal?
                  </h2>
                  <p className="text-gray-600 mb-8 max-w-md text-center">
                    Your 30-minute timer will begin as soon as you start the
                    challenge.
                  </p>
                  <button
                    onClick={() => setHasStarted(true)}
                    className="bg-blue-600 text-white px-10 py-3.5 rounded-full font-bold hover:bg-blue-700 transition-colors shadow-md text-lg"
                  >
                    Start the Challenge
                  </button>
                </div>
              ) : (
                <>
                  {/* STEP 0: PREPARE */}
                  {currentStep === 0 && (
                    <div className="animate-in fade-in duration-300">
                      <div className="bg-white border border-gray-200 rounded-xl p-6 md:p-8 mb-8 shadow-sm relative overflow-hidden">
                        <h2 className="text-xl font-bold mb-4">The Problem</h2>
                        <p className="mb-4 text-gray-600 leading-relaxed">
                          During the due diligence phase of an acquisition or
                          ground-up development, analysts spend dozens of hours
                          reviewing dense municipal zoning ordinances. Missing a
                          critical regulation—such as maximum Floor Area Ratio
                          (FAR), setback mandates, or parking minimums—can
                          destroy the feasibility of a deal before closing.
                        </p>
                        <p className="mb-4 text-gray-600 leading-relaxed">
                          Standard AI models hallucinate legal text. If you ask
                          a generic chatbot for the parking minimums in a
                          specific Dallas subdistrict, it may guess based on
                          generic regional averages, exposing the deal desk to
                          catastrophic regulatory risk.
                        </p>
                        <ul className="list-disc pl-5 space-y-2 text-gray-600 mb-4">
                          <li>
                            We use Google NotebookLM to build a closed-loop
                            research engine.
                          </li>
                          <li>
                            It forces the AI to only read from the exact PDF
                            code you provide, eliminating hallucinations.
                          </li>
                          <li>
                            Every metric surfaced includes an exact page
                            citation for the Investment Committee memo.
                          </li>
                        </ul>
                      </div>

                      <div className="mb-8">
                        <h2 className="text-xl font-bold mb-4">
                          The Methodology
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                          <div className="bg-gray-50 p-5 rounded-lg border border-gray-100 border-t-4 border-t-blue-500">
                            <h3 className="font-bold mb-2">
                              Source Document Grounding
                            </h3>
                            <p className="text-sm text-gray-600">
                              Load the official municipal land-use code into an
                              isolated AI notebook workspace where external
                              browsing is strictly disabled.
                            </p>
                          </div>
                          <div className="bg-gray-50 p-5 rounded-lg border border-gray-100 border-t-4 border-t-green-500">
                            <h3 className="font-bold mb-2">
                              Targeted Dimensional Extraction
                            </h3>
                            <p className="text-sm text-gray-600">
                              Deploy high-constraint prompts that extract
                              dimensional standards, conditional use thresholds,
                              and parking ratios into a structured table.
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
                        <Info
                          className="text-blue-500 shrink-0 mt-1"
                          size={20}
                        />
                        <div>
                          <h2 className="font-semibold text-lg mb-2 text-blue-900">
                            The Challenge Brief
                          </h2>
                          <p className="text-blue-800 text-sm leading-relaxed">
                            Act as a land-use paralegal on a deal desk. Set up
                            an isolated knowledge base, ingest a municipal code,
                            and extract the development rules for a specific
                            zoning district with direct citations.
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
                            Phase I: Ingest the Legal Code
                          </h3>
                          <div className="bg-white border border-gray-200 rounded-lg px-2 md:px-4 shadow-sm">
                            <AccordionItem
                              title="1. Secure the Source Document"
                              defaultOpen={true}
                            >
                              <p className="text-sm text-gray-700 mb-4">
                                First, get the actual legal text. Visit a city
                                planning department website or search online for
                                an official municipal code PDF (e.g., search for
                                "City of Austin Land Development Code Chapter 25
                                PDF" or "City of Dallas Chapter 51A PDF"). Save
                                the document to your local machine.
                              </p>
                            </AccordionItem>

                            <AccordionItem title="2. Initialize NotebookLM">
                              <p className="text-sm text-gray-700 mb-4">
                                NotebookLM isolates the AI model to your
                                uploaded document. It answers strictly from
                                source text and automatically generates
                                footnotes.
                              </p>
                              <a
                                href="https://notebooklm.google.com"
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-2 text-sm font-semibold bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-full mb-4 transition-colors"
                              >
                                Open Google NotebookLM{" "}
                                <ExternalLink size={14} />
                              </a>
                              <p className="text-sm text-gray-700">
                                Click "New Notebook". Under "Add Sources",
                                select and upload your downloaded Zoning Code
                                PDF. Wait 30 seconds for the document index to
                                generate.
                              </p>
                            </AccordionItem>
                          </div>
                        </div>

                        {/* Phase II */}
                        <div className="mb-10">
                          <h3 className="text-lg md:text-xl font-bold mb-4">
                            Phase II: The Due Diligence Interrogation
                          </h3>
                          <div className="bg-white border border-gray-200 rounded-lg px-2 md:px-4 shadow-sm">
                            <AccordionItem title="3. Establish the Paralegal Persona">
                              <p className="text-sm text-gray-700 mb-4">
                                Prime the notebook to eliminate conversational
                                filler and enforce citation rigor. Paste this
                                prompt into the chat bar:
                              </p>
                              <CopyBlock text="You are a meticulous land-use attorney assisting a commercial real estate acquisitions desk. You must answer all inquiries using ONLY the text in the uploaded document. If a standard or limit is not explicitly documented, state 'Not specified in source text'. You must include the exact page number or section citation for every metric." />
                            </AccordionItem>

                            <AccordionItem title="4. Extract Dimensional Standards">
                              <p className="text-sm text-gray-700 mb-4">
                                Select a target zoning district from your
                                document (such as MF-2 Multifamily or C-2
                                Commercial). Run this extraction query:
                              </p>
                              <CopyBlock
                                text="Locate the development standards for the [Insert District Name] zoning classification. Generate a structured table containing:
1. Maximum Building Height (in feet and stories)
2. Maximum Floor Area Ratio (FAR)
3. Minimum Front, Side, and Rear Yard Setbacks
4. Maximum Lot Coverage Percentage
5. Exact Document Citation / Page Number"
                              />
                            </AccordionItem>

                            <AccordionItem title="5. Extract Parking Requirements">
                              <p className="text-sm text-gray-700 mb-4">
                                Parking ratios dictate density and construction
                                costs. Extract the exact ratio using this
                                command:
                              </p>
                              <CopyBlock text="Extract the off-street vehicle parking requirements for multifamily residential development in this district. Detail any differences based on unit mix (e.g., Studio, 1-Bedroom, 2-Bedroom) and identify whether bicycle parking is mandated. Include the section citation." />
                            </AccordionItem>
                          </div>
                        </div>

                        {/* Phase III */}
                        <div className="mb-10">
                          <h3 className="text-lg md:text-xl font-bold mb-4">
                            Phase III: Synthesize the IC Memo
                          </h3>
                          <div className="bg-white border border-gray-200 rounded-lg px-2 md:px-4 shadow-sm">
                            <AccordionItem title="6. Compile the Due Diligence Summary">
                              <p className="text-sm text-gray-700 mb-4">
                                Consolidate the verified standards into an
                                executive briefing document ready for
                                underwriting review:
                              </p>
                              <CopyBlock text="Combine the dimensional limits, setback rules, and parking minimums we just verified into a clean 'Zoning Due Diligence Summary'. Format it with clear bold headers, bulleted constraints, and citations for each standard so an underwriting director can quickly cross-check the development pro forma." />
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
                            Target Municipality & Zoning Classification{" "}
                            <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            className="w-full border border-gray-300 rounded-lg p-3 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-black text-sm"
                            placeholder="e.g., City of Dallas, District MF-2(A)"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-bold text-gray-900 mb-2">
                            NotebookLM Verification Screenshot{" "}
                            <span className="text-red-500">*</span>
                          </label>
                          <label
                            htmlFor="screenshot-upload"
                            className="block border-2 border-dashed border-gray-300 rounded-lg p-8 text-center bg-gray-50 hover:bg-gray-100 cursor-pointer transition-colors"
                          >
                            <input
                              type="file"
                              id="screenshot-upload"
                              className="hidden"
                              accept="image/*"
                              onChange={(e) =>
                                setScreenshotName(
                                  e.target.files?.[0]?.name || "",
                                )
                              }
                            />
                            <ImageIcon
                              className="text-gray-400 mx-auto mb-3"
                              size={32}
                            />
                            <div>
                              {screenshotName ? (
                                <p className="text-sm text-green-600 font-bold break-all">
                                  Attached: {screenshotName}
                                </p>
                              ) : (
                                <>
                                  <p className="text-sm text-gray-700 font-bold">
                                    Upload a screenshot of your NotebookLM
                                    output
                                  </p>
                                  <p className="text-xs text-gray-500 mt-1">
                                    Ensure the screenshot clearly shows the
                                    dimensional table and primary source
                                    citations.
                                  </p>
                                </>
                              )}
                            </div>
                          </label>
                        </div>

                        <div>
                          <label className="block text-sm font-bold text-gray-900 mb-2">
                            Risk Mitigation Thesis{" "}
                            <span className="text-red-500">*</span>
                          </label>
                          <textarea
                            rows={4}
                            className="w-full border border-gray-300 rounded-lg p-3 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-black resize-none text-sm"
                            placeholder="Explain how document-grounded AI eliminates legal and underwriting risk compared to using a public chat interface."
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
                            Share to the Project Destined Showcase.
                          </label>
                        </div>
                      </div>
                    </div>
                  )}
                </>
              )}
            </div>

            {hasStarted && (
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
                  <button
                    onClick={handleSubmit}
                    className="px-6 md:px-8 py-2.5 bg-blue-600 text-white rounded-full font-bold hover:bg-blue-700 transition-colors shadow-md text-sm"
                  >
                    Submit Screener
                  </button>
                )}
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
