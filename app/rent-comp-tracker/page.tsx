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
  Link as LinkIcon,
} from "lucide-react";

export default function RentCompTrackerApp() {
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
    "Prepare: Automate Rent Comp Tracking",
    "Build: Your Market Scraper",
    "Submit: Share Your Database",
  ];

  return (
    <div className="min-h-screen bg-white md:bg-gray-50 text-gray-900 relative">
      <MobileNavbar />

      {isTransitioning && (
        <div className="fixed top-16 md:top-0 left-0 h-1 bg-red-600 z-[100] animate-loading-bar" />
      )}

      <div className="block md:flex">
        <ChallengeSidebar
          title="Rent Comp Tracker"
          currentStep={currentStep}
          changeStep={changeStep}
        />

        {/* Full-width white canvas */}
        <main className="flex-1 flex flex-col bg-white min-h-screen shadow-sm w-full">
          {/* Centered content wrapper */}
          <div className="flex-1 flex flex-col w-full max-w-5xl mx-auto p-0 md:p-12">
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
                    <h2 className="text-xl font-bold mb-4">The Problem</h2>
                    <p className="mb-4 text-gray-600 leading-relaxed">
                      Underwriting assumptions depend heavily on accurate
                      submarket rent comps. Property management teams and
                      brokerages traditionally assign junior analysts to
                      manually check competitor property websites weekly to
                      track asking rents, floor plan availability, and hidden
                      concession specials.
                    </p>
                    <p className="mb-4 text-gray-600 leading-relaxed">
                      In this challenge, you will automate the entire data
                      pipeline. You will configure an automated web scraper on
                      Apify to monitor submarket competitor listings and pipe
                      unit-level rents, square footage, and availability
                      directly into an Airtable database via Webhooks.
                    </p>
                    <ul className="list-disc pl-5 space-y-2 text-gray-600 mb-4">
                      <li>
                        Automate weekly rental rate sweeps without manual data
                        entry.
                      </li>
                      <li>
                        Standardize effective rents and price-per-square-foot
                        calculations automatically.
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
                          Apify (Headless Scraping)
                        </h3>
                        <p className="text-sm text-gray-600">
                          Deploy a pre-built web scraping Actor that
                          systematically extracts property layout, pricing, and
                          availability records without writing scraper scripts
                          from scratch.
                        </p>
                      </div>
                      <div className="bg-gray-50 p-5 rounded-lg border border-gray-100 border-t-4 border-t-green-500">
                        <h3 className="font-bold mb-2">
                          Airtable (Relational Database)
                        </h3>
                        <p className="text-sm text-gray-600">
                          Expose an inbound Webhook endpoint that receives clean
                          JSON objects from Apify, creates database records, and
                          executes real-time metric formulas.
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
                        Configure a structured Airtable database with automated
                        ingestion. Then, deploy an Apify scraper to pull live
                        multifamily listings and push them directly into your
                        database using a webhook trigger.
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
                        Phase I: Build the Airtable Ingestion Endpoint
                      </h3>
                      <div className="bg-white border border-gray-200 rounded-lg px-2 md:px-4 shadow-sm">
                        <AccordionItem
                          title="1. Configure the Target Schema"
                          defaultOpen={true}
                        >
                          <p className="text-sm text-gray-700 mb-4">
                            Open Airtable and create a new Base named "Submarket
                            Rent Comps". Rename the primary table to "Live
                            Listings".
                          </p>
                          <a
                            href="https://airtable.com"
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 text-sm font-semibold bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-full mb-4 transition-colors"
                          >
                            Open Airtable <ExternalLink size={14} />
                          </a>
                          <p className="text-sm text-gray-700 mb-2">
                            Configure these exact fields and types:
                          </p>
                          <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
                            <li>Property Name (Single line text)</li>
                            <li>
                              Unit Type (Single line text, e.g., 1 Bed / 1 Bath)
                            </li>
                            <li>Square Footage (Number)</li>
                            <li>Asking Rent (Currency)</li>
                            <li>Source URL (URL)</li>
                          </ul>
                        </AccordionItem>

                        <AccordionItem title="2. Set up the Inbound Webhook">
                          <p className="text-sm text-gray-700 mb-4">
                            In your Airtable Base, open the "Automations" tab
                            from the top navigation bar. Click "Add trigger".
                          </p>
                          <p className="text-sm text-gray-700 mb-4">
                            Select <strong>"When a webhook is received"</strong>
                            . Airtable will generate a unique webhook URL. Copy
                            this URL to your clipboard—it acts as the pipeline
                            endpoint that Apify will call.
                          </p>
                        </AccordionItem>

                        <AccordionItem title="3. Configure the Record Creation Action">
                          <p className="text-sm text-gray-700 mb-4">
                            Under the trigger, click "Add action" and select{" "}
                            <strong>"Create record"</strong>. Set the target
                            table to "Live Listings". Leave the field mapping
                            open—we will map the scraped attributes after
                            sending a test payload.
                          </p>
                        </AccordionItem>
                      </div>
                    </div>

                    {/* Phase II */}
                    <div className="mb-10">
                      <h3 className="text-lg md:text-xl font-bold mb-4">
                        Phase II: Deploy the Scraper in Apify
                      </h3>
                      <div className="bg-white border border-gray-200 rounded-lg px-2 md:px-4 shadow-sm">
                        <AccordionItem title="4. Select a Real Estate Actor">
                          <p className="text-sm text-gray-700 mb-4">
                            Open Apify, navigate to the Actor Store, and search
                            for a real estate listing scraper (such as "Zillow
                            Real Estate Scraper" or a general web rental
                            scraper).
                          </p>
                          <a
                            href="https://apify.com/store"
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 text-sm font-semibold bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-full mb-4 transition-colors"
                          >
                            Open Apify Store <ExternalLink size={14} />
                          </a>
                        </AccordionItem>

                        <AccordionItem title="5. Define Search Parameters">
                          <p className="text-sm text-gray-700 mb-4">
                            Configure the scraper inputs. Paste a target
                            submarket URL (e.g., rentals in a specific ZIP code
                            or neighborhood). To conserve platform credits
                            during setup, limit the "Maximum Items" parameter to
                            10 records.
                          </p>
                        </AccordionItem>

                        <AccordionItem title="6. Connect the Webhook Dispatcher">
                          <p className="text-sm text-gray-700 mb-4">
                            Inside your selected Actor, navigate to the
                            "Integrations" tab. Click "Add Webhook". Paste your
                            Airtable Webhook URL from Step 2. Select the event
                            condition <strong>"Run succeeded"</strong>.
                          </p>
                          <p className="text-sm text-gray-700">
                            Click "Start" to execute a test run. Once completed,
                            Apify will package the scraped listing data into a
                            JSON array and dispatch it to Airtable.
                          </p>
                        </AccordionItem>
                      </div>
                    </div>

                    {/* Phase III */}
                    <div className="mb-10">
                      <h3 className="text-lg md:text-xl font-bold mb-4">
                        Phase III: Map Attributes & Establish Formulas
                      </h3>
                      <div className="bg-white border border-gray-200 rounded-lg px-2 md:px-4 shadow-sm">
                        <AccordionItem title="7. Map the Payload to Database Fields">
                          <p className="text-sm text-gray-700 mb-4">
                            Return to Airtable Automations. Click "Test trigger"
                            to load the test payload sent by Apify.
                          </p>
                          <p className="text-sm text-gray-700 mb-4">
                            Open the "Create record" action. Map each field in
                            your table to the corresponding incoming JSON key
                            (e.g., Property Name = `unformattedAddress` or
                            `title`, Asking Rent = `price`, Square Footage =
                            `livingArea`). Turn the automation status to{" "}
                            <strong>ON</strong>.
                          </p>
                        </AccordionItem>

                        <AccordionItem title="8. Create Calculated Underwriting Metrics">
                          <p className="text-sm text-gray-700 mb-4">
                            In your primary Airtable table, add a new Formula
                            field named "Rent Per SF". Insert this formula:
                          </p>
                          <CopyBlock text="{Asking Rent} / {Square Footage}" />
                          <p className="text-sm text-gray-700 mt-4">
                            Format the output as Currency with two decimal
                            places. Your database now automatically calculates
                            live market unit economics for every scraped
                            competitor record.
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
                        Submarket Underwriting Database Name{" "}
                        <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        className="w-full border border-gray-300 rounded-lg p-3 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-black text-sm"
                        placeholder="e.g., Downtown Austin Multifamily Comp Tracker"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-gray-900 mb-2">
                        Airtable Database Screenshot{" "}
                        <span className="text-red-500">*</span>
                      </label>
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center bg-gray-50 hover:bg-gray-100 cursor-pointer transition-colors">
                        <ImageIcon
                          className="text-gray-400 mx-auto mb-3"
                          size={32}
                        />
                        <div>
                          <p className="text-sm text-gray-700 font-bold">
                            Upload a screenshot of your active database
                          </p>
                          <p className="text-xs text-gray-500 mt-1">
                            Ensure the screenshot shows ingested records and the
                            calculated Rent Per SF column.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-gray-900 mb-2 flex items-center gap-2">
                        Apify Actor Configuration URL{" "}
                        <LinkIcon size={16} className="text-gray-500" />{" "}
                        <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="url"
                        placeholder="https://console.apify.com/actors/..."
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
                  Submit Tracker
                </button>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
