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

export default function ICDeckGeneratorApp() {
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
    "Prepare: Automate IC Slide Decks",
    "Build: Your Presentation Engine",
    "Submit: Share Your Automation",
  ];

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6 text-center animate-in fade-in">
        <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6 shadow-sm border border-green-200">
          <Check size={40} strokeWidth={3} />
        </div>
        <h1 className="text-3xl font-bold mb-3 text-gray-900">Thank you!</h1>
        <p className="text-gray-600 mb-8 max-w-md">
          Your automation pipeline has been submitted successfully.
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
          title="Automate IC Slide Decks"
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
                <CountdownTimer initialMinutes={45} isActive={hasStarted} />
              </div>

              {!hasStarted ? (
                <div className="flex flex-col items-center justify-center py-24 animate-in fade-in">
                  <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-6 shadow-inner">
                    <Timer size={32} />
                  </div>
                  <h2 className="text-2xl font-bold mb-4 text-gray-900">
                    Ready to build your automation?
                  </h2>
                  <p className="text-gray-600 mb-8 max-w-md text-center">
                    Your 45-minute timer will begin as soon as you start the
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
                          After completing financial underwriting in an Excel or
                          Google Sheets pro forma, acquisitions analysts must
                          manually copy and paste numbers into standardized
                          PowerPoint or Google Slides presentations for
                          Investment Committee (IC) review. Updating returns,
                          debt parameters, and asset metrics across multiple
                          slides is slow, error-prone, and distracting during
                          live deal bidding.
                        </p>
                        <p className="mb-4 text-gray-600 leading-relaxed">
                          You will engineer an automated presentation pipeline.
                          Whenever an acquisition row in your master deal sheet
                          is updated, Make.com will read the financial outputs,
                          map them into variable presentation tags, and
                          automatically output a fully rendered, executive-ready
                          presentation deck.
                        </p>
                        <ul className="list-disc pl-5 space-y-2 text-gray-600 mb-4">
                          <li>
                            Eliminate manual copy-paste errors across pitch
                            materials.
                          </li>
                          <li>
                            Generate branded presentation files dynamically in
                            under 15 seconds.
                          </li>
                        </ul>
                      </div>

                      <div className="mb-8">
                        <h2 className="text-xl font-bold mb-4">
                          The Technology Stack
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                          <div className="bg-gray-50 p-5 rounded-lg border border-gray-100 border-t-4 border-t-blue-500">
                            <h3 className="font-bold mb-2">
                              Google Sheets & Slides
                            </h3>
                            <p className="text-sm text-gray-600">
                              Google Sheets acts as the underwriting pro forma
                              database, while Google Slides provides the
                              presentation layout using dynamic variable tags.
                            </p>
                          </div>
                          <div className="bg-gray-50 p-5 rounded-lg border border-gray-100 border-t-4 border-t-green-500">
                            <h3 className="font-bold mb-2">
                              Make.com (Integration Engine)
                            </h3>
                            <p className="text-sm text-gray-600">
                              Orchestrate the data flow by watching spreadsheet
                              row updates and executing batch substitutions
                              directly inside Google Slides templates.
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
                            Create a tagged Google Slides master template.
                            Connect it to an active deal pipeline spreadsheet
                            using Make.com, ensuring new pitch decks are
                            compiled automatically upon request.
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
                            Phase I: Prepare the Source & Presentation Templates
                          </h3>
                          <div className="bg-white border border-gray-200 rounded-lg px-2 md:px-4 shadow-sm">
                            <AccordionItem
                              title="1. Build the Master Deal Sheet"
                              defaultOpen={true}
                            >
                              <p className="text-sm text-gray-700 mb-4">
                                Open Google Sheets and create a sheet named
                                "Acquisitions Pipeline". Create the following
                                header columns in Row 1:
                              </p>
                              <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700 mb-4">
                                <li>Property Name</li>
                                <li>Asset Class</li>
                                <li>Purchase Price</li>
                                <li>Target Cap Rate</li>
                                <li>Projected IRR</li>
                                <li>Trigger Status</li>
                              </ul>
                              <p className="text-sm text-gray-700">
                                Add one row of sample underwriting metrics
                                (e.g., "Parkway Multifamily", "Multifamily",
                                "$18,500,000", "5.85%", "16.4%", "Generate").
                              </p>
                            </AccordionItem>

                            <AccordionItem title="2. Construct the Tagged Presentation Template">
                              <p className="text-sm text-gray-700 mb-4">
                                Open Google Slides and create a 2-slide
                                presentation named "Master IC Template". Style
                                it with professional typography and dark
                                headers.
                              </p>
                              <p className="text-sm text-gray-700 mb-4">
                                Insert text boxes where financial metrics should
                                appear. Format them using double curly braces so
                                the automation engine recognizes them as
                                variables:
                              </p>
                              <CopyBlock text="{{PropertyName}}" />
                              <p className="text-sm text-gray-700 mt-4 mb-2">
                                Create matching tags on Slide 1 and Slide 2 for:
                              </p>
                              <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
                                <li>
                                  <code>{`{{AssetClass}}`}</code>
                                </li>
                                <li>
                                  <code>{`{{PurchasePrice}}`}</code>
                                </li>
                                <li>
                                  <code>{`{{CapRate}}`}</code>
                                </li>
                                <li>
                                  <code>{`{{TargetIRR}}`}</code>
                                </li>
                              </ul>
                            </AccordionItem>
                          </div>
                        </div>

                        {/* Phase II */}
                        <div className="mb-10">
                          <h3 className="text-lg md:text-xl font-bold mb-4">
                            Phase II: Build the Make.com Pipeline
                          </h3>
                          <div className="bg-white border border-gray-200 rounded-lg px-2 md:px-4 shadow-sm">
                            <AccordionItem title="3. Configure the Google Sheets Trigger">
                              <p className="text-sm text-gray-700 mb-4">
                                Open Make.com and create a new Scenario.
                              </p>
                              <a
                                href="https://make.com"
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-2 text-sm font-semibold bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-full mb-4 transition-colors"
                              >
                                Open Make.com <ExternalLink size={14} />
                              </a>
                              <p className="text-sm text-gray-700 mb-4">
                                Add a <strong>Google Sheets</strong> module and
                                select the trigger <strong>"Watch Rows"</strong>
                                . Authenticate your account, select your
                                "Acquisitions Pipeline" sheet, and set the
                                filter condition to watch rows where{" "}
                                <code>Trigger Status = Generate</code>.
                              </p>
                            </AccordionItem>

                            <AccordionItem title="4. Connect the Google Slides Module">
                              <p className="text-sm text-gray-700 mb-4">
                                Add a second module to the scenario: select{" "}
                                <strong>Google Slides</strong> and choose the
                                action{" "}
                                <strong>
                                  "Create a Presentation from a Template"
                                </strong>
                                .
                              </p>
                              <p className="text-sm text-gray-700 mb-4">
                                Select your "Master IC Template" file from
                                Google Drive. Make.com will automatically
                                inspect the presentation and render inputs for
                                each double curly brace variable tag found in
                                the slides.
                              </p>
                            </AccordionItem>

                            <AccordionItem title="5. Map Pro Forma Data into Tags">
                              <p className="text-sm text-gray-700 mb-4">
                                Map the incoming columns from the Google Sheets
                                module into the presentation variables:
                              </p>
                              <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700 mb-4">
                                <li>
                                  Map column "Property Name" into{" "}
                                  <code>{`{{PropertyName}}`}</code>
                                </li>
                                <li>
                                  Map column "Purchase Price" into{" "}
                                  <code>{`{{PurchasePrice}}`}</code>
                                </li>
                                <li>
                                  Map column "Target Cap Rate" into{" "}
                                  <code>{`{{CapRate}}`}</code>
                                </li>
                                <li>
                                  Map column "Projected IRR" into{" "}
                                  <code>{`{{TargetIRR}}`}</code>
                                </li>
                              </ul>
                              <p className="text-sm text-gray-700">
                                Configure the "New Presentation Title" field to
                                dynamically generate as:{" "}
                                <code>[IC Memo] - {`{{PropertyName}}`}</code>.
                              </p>
                            </AccordionItem>
                          </div>
                        </div>

                        {/* Phase III */}
                        <div className="mb-10">
                          <h3 className="text-lg md:text-xl font-bold mb-4">
                            Phase III: Test & Close the Feedback Loop
                          </h3>
                          <div className="bg-white border border-gray-200 rounded-lg px-2 md:px-4 shadow-sm">
                            <AccordionItem title="6. Execute Test Run">
                              <p className="text-sm text-gray-700 mb-4">
                                Click "Run once" in the bottom toolbar of
                                Make.com. The scenario will pull your sample
                                row, create a copy of the Google Slides
                                template, and replace all tags with real
                                numbers.
                              </p>
                              <p className="text-sm text-gray-700 mb-4">
                                Open Google Drive to confirm the deck was
                                generated without leaving raw tags behind.
                              </p>
                            </AccordionItem>

                            <AccordionItem title="7. Update Pipeline Status">
                              <p className="text-sm text-gray-700 mb-4">
                                Add a final{" "}
                                <strong>Google Sheets: Update a Row</strong>{" "}
                                module to your scenario. Configure it to write
                                back to the original row: change the "Trigger
                                Status" to <code>Completed</code> and save the
                                generated presentation URL into a new column.
                              </p>
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
                            Pipeline Project Name{" "}
                            <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            className="w-full border border-gray-300 rounded-lg p-3 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-black text-sm"
                            placeholder="e.g., Automated Acquisitions IC Pitch Generator"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-bold text-gray-900 mb-2">
                            Make.com Canvas Screenshot{" "}
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
                                    Upload a screenshot of your Make.com
                                    workflow
                                  </p>
                                  <p className="text-xs text-gray-500 mt-1">
                                    Ensure the workflow shows the Google Sheets
                                    trigger and the Google Slides template
                                    action.
                                  </p>
                                </>
                              )}
                            </div>
                          </label>
                        </div>

                        <div>
                          <label className="block text-sm font-bold text-gray-900 mb-2">
                            Generated Presentation Share Link{" "}
                            <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="url"
                            placeholder="https://docs.google.com/presentation/d/..."
                            className="w-full border border-gray-300 rounded-lg p-3 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-black text-sm"
                          />
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
                    Submit Pipeline
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
