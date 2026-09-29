import Sidebar from "@/components/Sidebar";
import AccordionItem from "@/components/AccordionItem";
import CopyBlock from "@/components/CopyBlock";
import { Info, ExternalLink } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-white text-gray-900">
      <Sidebar />

      <main className="flex-1 p-6 md:p-12 md:max-w-4xl">
        <h1 className="text-3xl font-bold mb-8">Vibe Code an App</h1>

        {/* Project Brief Banner */}
        <div className="border border-gray-200 rounded-lg p-6 mb-10 flex gap-4">
          <Info className="text-gray-500 shrink-0 mt-1" size={20} />
          <div>
            <h2 className="font-semibold text-lg mb-2">Project Brief</h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Pick a repetitive, manual task you keep running into. It could be
              at a job, internship, in your job search, or in a student org.
              Vibe code an app that supports that work in Google AI Studio.
            </p>
          </div>
        </div>

        {/* Step-by-step Guide */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Step-by-step guide</h2>
          <p className="text-gray-600 mb-8 text-sm">
            Work through the steps in order and check each one off as you go to
            track your progress.
          </p>

          {/* Phase I */}
          <div className="mb-10">
            <h3 className="text-xl font-bold mb-4">I. Plan it with Gemini</h3>
            <div className="bg-white border border-gray-200 rounded-lg px-4">
              <AccordionItem title="Find your task">
                <p>
                  Think about a task you do often that's slow, repetitive, or
                  easy to get wrong: something from your job or internship, your
                  job search, a class project, or a student org you're part of.
                  That's your starting point.
                </p>
                <div className="bg-blue-50 text-blue-800 p-4 rounded-md mt-4">
                  <strong>No task in mind yet?</strong>
                  <p className="mt-2 text-blue-700">
                    Ask the AI Skills Instructor to brainstorm with you. A few
                    starting shapes that tend to work well: turning messy
                    meeting or class notes into a task list, tracking job
                    applications so nothing falls through, coordinating signups
                    for a student org event, or turning a spreadsheet you
                    already keep by hand into something that updates itself.
                  </p>
                </div>
              </AccordionItem>

              <AccordionItem title="Describe the app you want to build">
                <p>
                  Start a new chat in Gemini and describe your app in four
                  parts: inputs, process, output, and goal.
                </p>
                <a
                  href="https://gemini.google.com"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-full mt-4 mb-2 transition-colors"
                >
                  Open Google Gemini <ExternalLink size={14} />
                </a>
                <CopyBlock text="I want to build an app that takes [inputs, e.g. my class notes] and does [process, e.g. sorts out key terms and definitions] to create [output, e.g. flashcards] that helps me [goal, e.g. study for an exam]. Help me plan it out before we build anything, and interview me one question at a time for any details, rules, or likely mistakes I haven't mentioned yet." />
              </AccordionItem>

              <AccordionItem title="Give it your real context">
                <p>
                  Without your specifics, the plan stays generic. If you have a
                  file that holds them, attach it: the spreadsheet you keep by
                  hand, a doc with the rules or process, a sample of past work,
                  an export from an app you already use. Use the + button to add
                  it from your computer or Google Drive.
                </p>
                <CopyBlock text="Use the attached file as context for the app we're planning. Based on what's actually in it, what should I be considering that I haven't mentioned?" />
              </AccordionItem>

              <AccordionItem title="Summarize your plan into one build prompt">
                <p>
                  Once your plan holds up, ask Gemini to combine the whole
                  conversation into a single prompt you can build from, and
                  check it against your original goal.
                </p>
                <CopyBlock text="Pull everything we've discussed into one clear prompt I can build from, including the plan, the rules we set, and how the app should be structured. Then review that prompt against my original goal: is anything missing, unclear, or contradictory, and does it still solve the problem I started with?" />
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
                  Open Google AI Studio, go to New app and paste your build
                  prompt into the description box.
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

              <AccordionItem title="Test it on a real example">
                <p>
                  Test your app with real inputs. Click through every button,
                  view every screen, and compare what you expected against what
                  it actually did.
                </p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>Does it complete the main task, start to finish?</li>
                  <li>
                    Does the output look correct and include everything it
                    should?
                  </li>
                  <li>
                    Where does it guess instead of using your real information?
                  </li>
                </ul>
              </AccordionItem>
            </div>
          </div>

          {/* Phase III */}
          <div className="mb-10">
            <h3 className="text-xl font-bold mb-4">III. Debug it</h3>
            <div className="bg-white border border-gray-200 rounded-lg px-4">
              <AccordionItem
                title="Describe the gap, then fix it"
                defaultOpen={true}
              >
                <p>
                  If you spot a bug, describe the gap between what you wanted
                  and what you got.
                </p>
                <CopyBlock text="In [feature/screen], [what's wrong]. Please change it so [what you want instead]." />
                <p className="mt-4">
                  Words aren't always the fastest way to describe a bug. You can
                  try these instead:
                </p>
                <ul className="list-disc pl-5 mt-2 space-y-2">
                  <li>
                    <strong>Use images to describe the issue.</strong>{" "}
                    Screenshot the problem, annotate what's wrong, and send that
                    with your request. This is usually quicker than describing a
                    layout issue in a sentence.
                  </li>
                  <li>
                    <strong>Ask the model to suggest options.</strong> When
                    something bothers you but you can't say why: "Suggest three
                    ways to improve this, with the trade-offs of each, so I can
                    choose."
                  </li>
                  <li>
                    <strong>Roll it back.</strong> If a change made things
                    worse, restore an earlier version from your app's file in
                    Google Drive rather than prompting your way back.
                  </li>
                  <li>
                    <strong>Add a rule.</strong> Some fixes are worth turning
                    into a standing rule, so it holds on every run from here.
                    Just tell Gemini: "From now on, always [the rule you want it
                    to follow]."
                  </li>
                </ul>
              </AccordionItem>
            </div>
          </div>

          {/* Nav Buttons */}
          <div className="flex justify-between items-center mt-12 pt-8 border-t border-gray-100">
            <button className="px-6 py-2 border border-gray-300 rounded-full font-medium hover:bg-gray-50 transition-colors">
              Previous step
            </button>
            <button className="px-6 py-2 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition-colors">
              Next step
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
