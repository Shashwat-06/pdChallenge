"use client";
import { useState } from "react";
import ChallengeSidebar from "@/components/ChallengeSidebar";
import AccordionItem from "@/components/AccordionItem";
import CopyBlock from "@/components/CopyBlock";
import { Info, ExternalLink, Image as ImageIcon } from "lucide-react";

export default function ClaySourcingChallenge() {
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
        title="Build a Deal Sourcing List"
        currentStep={currentStep}
        setCurrentStep={setCurrentStep}
      />

      <main className="flex-1 p-6 md:p-12 md:max-w-4xl flex flex-col">
        <div className="flex-1">
          {/* STEP 0: PREPARE */}
          {currentStep === 0 && (
            <div className="animate-in fade-in duration-300">
              <h1 className="text-3xl font-bold mb-8">
                Build a Lead List and Rank Your Targets
              </h1>

              <div className="bg-white border border-gray-200 rounded-xl p-8 mb-8 shadow-sm">
                <h2 className="text-xl font-bold mb-4">What you'll build</h2>
                <p className="text-gray-600 mb-4">
                  In this mission you'll build a lead list in Clay — a list of
                  real estate firms, institutional buyers, or developers that
                  could become clients or partners, ranked so the ones worth
                  contacting sit at the top.
                </p>
                <p className="text-gray-600 mb-4">
                  No acquisitions or brokerage role yet? Pick a commercial real
                  estate firm you'd love to work for and run this exercise as if
                  you already had a seat on their deal desk. Build the account
                  list and prioritize outreach the way their team actually
                  would.
                </p>
                <ul className="list-disc pl-5 space-y-2 text-gray-600 mb-8">
                  <li>
                    <strong>Time:</strong> about 25 minutes
                  </li>
                  <li>
                    <strong>You'll need:</strong> a Clay account (the free trial
                    is enough)
                  </li>
                </ul>
              </div>

              <div className="mb-8">
                <h2 className="text-xl font-bold mb-4">What you're learning</h2>
                <p className="text-gray-600 mb-6">
                  Clay can surface more companies and signals than you could
                  ever act on. The ongoing skill you'll use is the ability to
                  apply strict real estate filters, synthesize results, and
                  ultimately make the final decision about what should be
                  prioritized.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                    <h3 className="font-bold mb-2">The Search Loop</h3>
                    <p className="text-sm text-gray-600">
                      The build is one short loop. You write a one-sentence
                      definition and describe it to Clay in plain words, and
                      Clay drafts the filters. You tighten the filters and cut
                      whatever slipped through.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                    <h3 className="font-bold mb-2">Ranking Signals</h3>
                    <p className="text-sm text-gray-600">
                      Clay can surface several kinds of signal: hiring, a new
                      leader, active research, fresh funding. Which one is worth
                      tracking depends on your target's actual buying trigger.
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
                Build Your Target List
              </h1>

              <div className="border border-blue-200 bg-blue-50 rounded-lg p-6 mb-10 flex gap-4">
                <Info className="text-blue-500 shrink-0 mt-1" size={20} />
                <div>
                  <h2 className="font-semibold text-lg mb-2 text-blue-900">
                    Project Brief
                  </h2>
                  <p className="text-blue-800 text-sm leading-relaxed">
                    Build a target account list of 25 real estate firms that fit
                    your ideal customer definition. Then use the Signals tool to
                    prioritize accounts for outreach. Follow the steps below
                    carefully.
                  </p>
                </div>
              </div>

              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-4">Step-by-step guide</h2>

                {/* Phase I */}
                <div className="mb-10">
                  <h3 className="text-xl font-bold mb-4">
                    I. Define and Search
                  </h3>
                  <div className="bg-white border border-gray-200 rounded-lg px-4">
                    <AccordionItem title="1. Open Clay and set up your trial">
                      <p className="text-sm text-gray-600 mb-4">
                        Go to clay.com and sign up with your email. The 14-day
                        trial should not require a credit card. After the video
                        orientation, you'll answer one more question and select{" "}
                        <strong>Start building</strong> to open your new
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

                    <AccordionItem
                      title="2. Define your target"
                      defaultOpen={true}
                    >
                      <p className="text-sm text-gray-600 mb-4">
                        Before touching any search tool, make sure you can
                        articulate what defines the target for your search. Use
                        this shape:
                      </p>
                      <CopyBlock text="Companies that [do a specific thing], in [a city or region], with [a size range], because [why they would be a good fit for your CRE deal or service]." />
                      <div className="bg-gray-50 border border-gray-200 p-4 rounded-md mt-4">
                        <strong className="text-sm text-gray-900">
                          CRE Sourcing Example:
                        </strong>
                        <p className="mt-1 text-gray-600 text-sm">
                          Companies that{" "}
                          <strong>invest in value-add multifamily</strong>, in
                          the <strong>United States</strong>, with{" "}
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
                          In the left sidebar, click <strong>Find leads</strong>
                          , then <strong>Companies</strong>.
                        </li>
                        <li>
                          Locate the <strong>Chat</strong> button on your
                          screen. This is Sculptor.
                        </li>
                        <li>
                          Turn your definition sentence into a search using the
                          prompt below and paste it into the search box.
                        </li>
                      </ul>
                      <a
                        href="https://app.clay.com"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-semibold bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-full mt-2 mb-4 transition-colors"
                      >
                        Open Clay Workspace <ExternalLink size={14} />
                      </a>
                      <CopyBlock text="[Private Equity and Institutional Investment] companies in [United States] with [50 to 500] employees that [invest in commercial real estate, specifically multifamily or industrial assets]." />
                    </AccordionItem>
                  </div>
                </div>

                {/* Phase II */}
                <div className="mb-10">
                  <h3 className="text-xl font-bold mb-4">
                    II. Tighten and Save
                  </h3>
                  <div className="bg-white border border-gray-200 rounded-lg px-4">
                    <AccordionItem title="4. Tighten the filters and prune the results">
                      <p className="text-sm text-gray-600 mb-4">
                        Clay drafted filters from your words. Now check its work
                        against your definition sentence. Industry labels are
                        self-reported and broad, so a firm can carry the right
                        label and still do something different from what you
                        meant.
                      </p>
                      <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700 mb-4">
                        <li>
                          <strong>Find the impostor:</strong> Scan the table for
                          at least one company that technically matches your
                          filters but doesn't belong (e.g., a residential
                          mortgage broker). Work out which filter let it in,
                          then tighten that filter.
                        </li>
                        <li>
                          <strong>Check a known good:</strong> Think of one firm
                          you already know should be on this list (e.g.,
                          Blackstone or Starwood). If it isn't in the results,
                          loosen the filter.
                        </li>
                        <li>
                          <strong>Repeat</strong> until the list is short enough
                          to read end to end, somewhere around 25 companies.
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
                          Click <strong>Continue</strong> underneath the preview
                          of the companies, then{" "}
                          <strong>Save to a new workbook and table</strong>.
                        </li>
                        <li>
                          On the import options screen, click{" "}
                          <strong>Save and run 10 rows</strong>.
                        </li>
                        <li>
                          Once the table opens, rename it to something you'll
                          recognize, like "Target Multifamily Buyers."
                        </li>
                      </ul>
                    </AccordionItem>
                  </div>
                </div>

                {/* Phase III */}
                <div className="mb-10">
                  <h3 className="text-xl font-bold mb-4">
                    III. Find your Signal
                  </h3>
                  <div className="bg-white border border-gray-200 rounded-lg px-4">
                    <AccordionItem title="6. Pick the signal that matters most">
                      <p className="text-sm text-gray-600 mb-4">
                        A Clay signal alerts you to changes at a company or with
                        a contact. If you are selling a deal, a new Head of
                        Acquisitions could be a reason to connect. Explore the
                        options in Clay's Signals panel:
                      </p>
                      <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700 mb-4">
                        <li>
                          <strong>Job posting:</strong> Hiring for an
                          Acquisitions Manager means they are actively looking
                          to deploy capital.
                        </li>
                        <li>
                          <strong>New hire:</strong> A new leader often
                          re-evaluates pipeline deals in their first 90 days.
                        </li>
                        <li>
                          <strong>News and fundraising:</strong> A funding round
                          or new fund close means fresh budget.
                        </li>
                      </ul>
                    </AccordionItem>

                    <AccordionItem title="7. Apply your signal and verify">
                      <p className="text-sm text-gray-600 mb-4">
                        Go to the signal icon on the left, then select your
                        signal type (e.g., Job Posting). Follow the workflow on
                        the pop up screen, select{" "}
                        <strong>Use existing Clay table</strong>, and choose the
                        table you just saved.
                      </p>
                      <p className="text-sm text-gray-600 mb-4">
                        <strong>Verify and log:</strong> Spot-check at least
                        three accounts. Open the primary source (e.g., a careers
                        page for a job posting) in a new tab. Note the date. If
                        it's stale, drop it.
                      </p>
                    </AccordionItem>
                  </div>
                </div>

                {/* Phase IV */}
                <div className="mb-10">
                  <h3 className="text-xl font-bold mb-4">
                    IV. Rank and Decide
                  </h3>
                  <div className="bg-white border border-gray-200 rounded-lg px-4">
                    <AccordionItem title="8. Make the cut to five & assign an action">
                      <p className="text-sm text-gray-600 mb-4">
                        Clay surfaced the candidates. Choosing which five matter
                        this week is your job. Consider freshness (is the
                        evidence from the last month?) and fit.
                      </p>
                      <p className="text-sm text-gray-600 mb-4">
                        Finish each of the five lines with what you'll do about
                        it:
                      </p>
                      <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
                        <li>
                          <strong>"Reach out":</strong> The signal is strong and
                          specific. Message a decision-maker this week.
                        </li>
                        <li>
                          <strong>"Add to sequence":</strong> The fit is right
                          but timing is routine. Add to standard outreach.
                        </li>
                        <li>
                          <strong>"Watch":</strong> The signal is promising but
                          unverified. Set a date to check again.
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
                Submit your Target List
              </h1>
              <p className="text-gray-500 mb-8">
                Show off your data-driven sourcing strategy to your network and
                potential employers.
              </p>

              <div className="space-y-6 max-w-2xl bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">
                    Project Title <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-lg p-3 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-black"
                    placeholder="e.g., Top 5 Institutional Buyers (Multifamily)"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">
                    Clay Table Screenshot{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-10 text-center bg-gray-50 hover:bg-gray-100 cursor-pointer transition-colors flex flex-col items-center justify-center gap-3">
                    <ImageIcon className="text-gray-400" size={32} />
                    <div>
                      <p className="text-sm text-gray-700 font-bold">
                        Upload a screenshot of your ranked Clay table
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        Ensure the screenshot shows your Top 5 targets and the
                        active "Signal" column (e.g., Hiring, News).
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">
                    Sourcing Strategy / Thesis{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    rows={5}
                    className="w-full border border-gray-300 rounded-lg p-3 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-black resize-none"
                    placeholder="Briefly describe the lead list you built and the criteria you used to search and filter. How will this be useful to your deal desk? What 'Next Action' did you set?"
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
                    Share to Showcase (Showcase projects are public and earn
                    your AI project builder badge).
                  </label>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Working Nav Buttons */}
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
              Submit Targets
            </button>
          )}
        </div>
      </main>
    </div>
  );
}
