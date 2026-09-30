"use client";
import { useState } from "react";
import MobileNavbar from "@/components/MobileNavbar";
import ChallengeSidebar from "@/components/ChallengeSidebar";
import AccordionItem from "@/components/AccordionItem";
import CopyBlock from "@/components/CopyBlock";
import CountdownTimer from "@/components/CountdownTimer";
import { Info, ExternalLink, Image as ImageIcon, FileJson } from "lucide-react";

export default function N8nAgentChallenge() {
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
    "Prepare: Automate OM Extraction Pipeline",
    "Build: Your Automation Pipeline",
    "Submit: Share Your Underwriting Pipeline",
  ];

  return (
    <div className="min-h-screen bg-white md:bg-gray-50 text-gray-900 relative">
      <MobileNavbar />
      {isTransitioning && (
        <div className="fixed top-16 md:top-0 left-0 h-1 bg-red-600 z-[100] animate-loading-bar" />
      )}

      <div className="block md:flex">
        <ChallengeSidebar
          title="Automate OM Extraction"
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
                  <h2 className="text-xl font-bold mb-4">The Problem</h2>
                  <p className="mb-4 text-gray-600">
                    Reading a 60-page Offering Memorandum to find five key
                    metrics is killing analyst productivity. Your mission is to
                    build a visual, automated workflow in n8n that acts as an AI
                    data-entry agent. By the end, you’ll have:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-gray-600 mb-8">
                    <li>
                      A live webhook endpoint that can receive property PDFs
                      from anywhere.
                    </li>
                    <li>
                      An AI node that parses the document and extracts
                      structured JSON.
                    </li>
                    <li>
                      A robust, automated pipeline ready to connect to your deal
                      database.
                    </li>
                  </ul>
                </div>

                <div className="mb-8">
                  <h2 className="text-xl font-bold mb-4">
                    Why n8n for Real Estate?
                  </h2>
                  <p className="text-gray-600 mb-6">
                    Unlike chat interfaces, n8n lets you build node-based
                    automations that run in the background. You can visually
                    connect your inbox, Google Drive, AI models, and databases
                    in one continuous flow, creating a true "agent" that
                    underwrites deals while you sleep.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 border-l-4 border-l-blue-500">
                      <h3 className="font-bold mb-2">The Architecture</h3>
                      <p className="text-sm text-gray-600 mb-3">
                        Your pipeline will follow 4 simple steps:
                      </p>
                      <ol className="list-decimal pl-4 space-y-1 text-sm text-gray-800 font-medium">
                        <li>Webhook (Receives the file)</li>
                        <li>Read PDF (Converts binary to text)</li>
                        <li>AI Node (Reads text & extracts data)</li>
                        <li>Webhook Response (Returns JSON)</li>
                      </ol>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 border-l-4 border-l-green-500">
                      <h3 className="font-bold mb-2">
                        Structured Data (The Golden Rule)
                      </h3>
                      <p className="text-sm text-gray-600">
                        AI chats give you paragraphs of text. In this challenge,
                        you will force the AI to return strict JSON format.
                        Conversational responses will break your pipeline.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* STEP 1: BUILD */}
            {currentStep === 1 && (
              <div className="animate-in fade-in duration-300">
                <div className="border border-blue-200 bg-blue-50 rounded-lg p-6 mb-10 flex gap-4">
                  <Info className="text-blue-500 shrink-0 mt-1" size={20} />
                  <div>
                    <h2 className="font-semibold text-lg mb-2 text-blue-900">
                      Brief
                    </h2>
                    <p className="text-blue-800 text-sm leading-relaxed">
                      Follow the detailed steps below to wire together your n8n
                      workflow. You will create a webhook to catch files, parse
                      binary PDF data, write a strict system prompt, and return
                      clean data.
                    </p>
                  </div>
                </div>

                <div className="mb-12">
                  <h2 className="text-2xl font-bold mb-6">
                    Step-by-step guide
                  </h2>

                  <div className="mb-10">
                    <h3 className="text-xl font-bold mb-4">
                      Level 1: Setup the Trigger & Ingestion
                    </h3>
                    <div className="bg-white border border-gray-200 rounded-lg px-4 shadow-sm">
                      <AccordionItem
                        title="1. Open n8n & Create a Webhook"
                        defaultOpen={true}
                      >
                        <p className="text-sm text-gray-600 mb-4">
                          You can use n8n Cloud or download the free desktop
                          app. Once inside, click Add Workflow.
                        </p>
                        <a
                          href="https://n8n.io/cloud/"
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 text-sm font-semibold bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-full mt-2 mb-4 transition-colors"
                        >
                          Open n8n Cloud <ExternalLink size={14} />
                        </a>
                        <p className="text-sm text-gray-600 mb-4">
                          Click the <code>+</code> button and search for
                          "Webhook".
                        </p>
                      </AccordionItem>

                      <AccordionItem title="2. Configure the Webhook">
                        <p className="text-sm text-gray-600 mb-4">
                          Open the Webhook node settings to ensure it can
                          receive files:
                        </p>
                        <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
                          <li>
                            Change the <strong>HTTP Method</strong> to{" "}
                            <code>POST</code>.
                          </li>
                          <li>
                            Change the <strong>Respond</strong> setting to{" "}
                            <code>Using 'Respond to Webhook' Node</code>.
                          </li>
                        </ul>
                      </AccordionItem>

                      <AccordionItem title="3. Extract the Document Text">
                        <p className="text-sm text-gray-600 mb-4">
                          Webhooks receive files as "binary" data. Before the AI
                          can read the OM, you must convert it into readable
                          text.
                        </p>
                        <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
                          <li>
                            Add a <strong>Read PDF</strong> (or "Extract from
                            File") node and connect it to your Webhook.
                          </li>
                        </ul>
                      </AccordionItem>
                    </div>
                  </div>

                  <div className="mb-10">
                    <h3 className="text-xl font-bold mb-4">
                      Level 2: AI Intelligence
                    </h3>
                    <div className="bg-white border border-gray-200 rounded-lg px-4 shadow-sm">
                      <AccordionItem title="4. Get your API Keys">
                        <p className="text-sm text-gray-600 mb-4">
                          You need a brain for your agent. You can use OpenAI or
                          Groq. Go to their developer platform to generate an
                          API key.
                        </p>
                        <div className="flex flex-wrap gap-4 mb-4">
                          <a
                            href="https://platform.openai.com/api-keys"
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 text-sm font-semibold bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-full transition-colors"
                          >
                            Get OpenAI Key <ExternalLink size={14} />
                          </a>
                        </div>
                      </AccordionItem>

                      <AccordionItem title="5. Connect your AI Model">
                        <p className="text-sm text-gray-600 mb-4">
                          Add an <strong>OpenAI</strong> or{" "}
                          <strong>Groq</strong> node to your canvas. Click
                          "Create New Credential" and paste your API key.
                        </p>
                        <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
                          <li>
                            Set the resource to <strong>Chat</strong> and
                            operation to <strong>Complete</strong>.
                          </li>
                        </ul>
                      </AccordionItem>

                      <AccordionItem title="6. Write the Extraction Prompt">
                        <p className="text-sm text-gray-600 mb-4">
                          LLMs need strict instructions. Add a "System Message"
                          to your AI node and paste the following prompt:
                        </p>
                        <CopyBlock text="You are a senior real estate acquisitions analyst. Analyze the provided Offering Memorandum text and extract the exact Net Operating Income (NOI), Cap Rate, Total Units, and Year Built. If a metric is missing, return null. Return ONLY valid JSON." />
                      </AccordionItem>

                      <AccordionItem title="7. Force JSON Output Formatting">
                        <p className="text-sm text-gray-600 mb-4">
                          To ensure the AI doesn't include conversational text,
                          you must force JSON output.
                        </p>
                        <div className="bg-gray-50 border border-gray-200 p-4 rounded-md mt-2">
                          <strong className="text-sm text-gray-900">
                            How to do this:
                          </strong>
                          <p className="mt-1 text-gray-600 text-sm">
                            Look for a setting in your AI node called{" "}
                            <strong>Response Format</strong> or{" "}
                            <strong>Output Type</strong> and set it to{" "}
                            <code>JSON Object</code>.
                          </p>
                        </div>
                      </AccordionItem>
                    </div>
                  </div>

                  <div className="mb-10">
                    <h3 className="text-xl font-bold mb-4">
                      Level 3: Output & Debugging
                    </h3>
                    <div className="bg-white border border-gray-200 rounded-lg px-4 shadow-sm">
                      <AccordionItem title="8. Respond to Webhook">
                        <p className="text-sm text-gray-600 mb-4">
                          Your AI has the data, but you need to send it back to
                          whoever called the webhook. Add a{" "}
                          <strong>Respond to Webhook</strong> node at the very
                          end of your pipeline.
                        </p>
                      </AccordionItem>

                      <AccordionItem title="9. Fix CORS Headers (Crucial for Web Apps)">
                        <p className="text-sm text-gray-600 mb-4">
                          If you trigger this workflow from a custom Next.js
                          frontend, your browser might block the request due to
                          strict CORS security policies.
                        </p>
                        <div className="bg-blue-50 border border-blue-100 p-4 rounded-md mt-2">
                          <strong className="text-sm text-blue-900">
                            The Fix:
                          </strong>
                          <p className="mt-1 text-blue-800 text-sm">
                            Go all the way back to your first{" "}
                            <strong>Webhook node</strong>. Open the settings,
                            check the box for{" "}
                            <code>Respond with CORS headers</code>, and set the
                            allowed origins to <code>*</code>.
                          </p>
                        </div>
                      </AccordionItem>

                      <AccordionItem title="10. Test the Full Pipeline">
                        <p className="text-sm text-gray-600 mb-4">
                          Click "Execute Workflow" at the bottom of the screen.
                          Use Postman to send a test POST request with a sample
                          PDF to your Webhook URL.
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
                <div className="space-y-6 md:max-w-2xl bg-white border border-gray-200 rounded-xl p-5 md:p-8 shadow-sm">
                  <div>
                    <label className="block text-sm font-bold text-gray-900 mb-2">
                      Workflow Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      className="w-full border border-gray-300 rounded-lg p-3 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-black text-sm"
                      placeholder="e.g., Automated OM JSON Extractor"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-900 mb-2 flex items-center gap-2">
                      n8n Workflow JSON Export{" "}
                      <FileJson size={16} className="text-gray-500" />{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <p className="text-xs text-gray-500 mb-2">
                      In n8n, select all your nodes, press Ctrl+C (or Cmd+C),
                      and paste the raw JSON code below to prove functionality.
                    </p>
                    <textarea
                      rows={6}
                      className="w-full font-mono text-xs border border-gray-300 rounded-lg p-3 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-black resize-none"
                      placeholder='{"nodes": [...], "connections": {...}}'
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
              <button className="px-6 md:px-8 py-2.5 bg-green-600 text-white rounded-full font-bold hover:bg-green-700 transition-colors shadow-md text-sm">
                Submit Pipeline
              </button>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
