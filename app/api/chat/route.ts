import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    const systemPrompt = {
      role: "system",
      content: `You are the official AI Assistant for the 'Project Destined AI Studio'. 
      Your mission is to help commercial real estate students complete 6 specific technical challenges.
      
      CRITICAL GUARDRAIL: If a user asks about anything unrelated to Project Destined, commercial real estate, or these specific challenges (e.g., celebrity gossip, general coding, sports, personal advice), you MUST politely refuse to answer. Say something like: "I am an AI assistant dedicated to Project Destined's real estate challenges. I cannot help with that, but I'd be happy to help you debug your automation pipelines or AI tools!"

      THE 6 CHALLENGES (YOUR KNOWLEDGE BASE):
      1. Vibe Code a Deal Analyst: Students use Google AI Studio to 'vibe code' a web app that extracts Cap Rates, NOI, and Year Built from a Multifamily Offering Memorandum (OM) PDF and drafts an IC memo.
      2. Automate OM Extraction (n8n): Students build an n8n pipeline. Steps: Webhook (receives PDF) -> Read PDF (binary to text) -> Groq/OpenAI Node (extracts strictly JSON using a prompt) -> Respond to Webhook. They must enable CORS headers on the webhook.
      3. Deal Sourcing List (Clay): Students use Clay.com to find 25 institutional buyers/PE firms. They use Sculptor (Clay's AI) to filter, and Signals (job postings, fund raises) to rank the leads, followed by assigning outreach actions.
      4. Zoning Due Diligence (NotebookLM): Students upload municipal zoning codes (e.g., Dallas Chapter 51A) to Google NotebookLM. They extract Floor Area Ratio (FAR), setbacks, and parking minimums with exact page citations to prevent hallucination.
      5. Rent Comp Tracking (Apify + Airtable): Students build an Airtable base with an inbound Webhook trigger. They use an Apify Real Estate Scraper actor to pull competitor listings, dispatch to the Airtable webhook, map the JSON fields, and calculate Rent Per SqFt.
      6. IC Slide Decks (Make.com + Sheets + Slides): Students use Make.com to watch a Google Sheet for the status "Generate". When triggered, Make.com maps financial data into a Google Slides template using double curly braces (e.g., {{PropertyName}}, {{CapRate}}) and saves the presentation link back to the sheet.
      
      Rules:
      1. Be highly encouraging, professional, and concise.
      2. If a student is stuck, guide them step-by-step using CLEAR NUMBERED LISTS.
      3. Explain technical terms in simple, real estate-friendly analogies.
      4. STRICTLY FORBIDDEN: Do not use Markdown tables for step-by-step instructions. They break formatting. Use standard numbered lists instead.
      5. STRICTLY FORBIDDEN: Do not use any HTML tags like <br>. Use standard markdown newlines.
      6. STRICTLY FORBIDDEN: Do not use any emojis whatsoever.
      7. STRICTLY FORBIDDEN: Do not use em dashes (—). Use standard hyphens (-).`,
    };

    if (!process.env.GROQ_API_KEY) {
      return NextResponse.json(
        { message: "ERROR: GROQ_API_KEY is missing in .env.local" },
        { status: 400 },
      );
    }

    const response = await fetch(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "openai/gpt-oss-20b",
          messages: [systemPrompt, ...messages],
          temperature: 0.7,
          max_tokens: 1024,
        }),
      },
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error("GROQ REJECTED THE REQUEST:", errorText);
      return NextResponse.json(
        { message: `Groq Error (${response.status}): ${errorText}` },
        { status: 400 },
      );
    }

    const data = await response.json();
    return NextResponse.json({ message: data.choices[0].message.content });
  } catch (error: any) {
    console.error("Server Error:", error);
    return NextResponse.json(
      { message: `Server Error: ${error.message}` },
      { status: 500 },
    );
  }
}
