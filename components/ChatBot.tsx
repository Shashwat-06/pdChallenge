"use client";
import { useState, useRef, useEffect } from "react";
import { MessageSquare, X, Send, Loader2, Copy, Check } from "lucide-react";
import ReactMarkdown from "react-markdown";

interface Message {
  role: "user" | "assistant";
  content: string;
}

// Custom CodeBlock component with Copy to Clipboard functionality (Hydration Safe)
const CodeBlock = ({ inline, className, children, ...props }: any) => {
  const [isCopied, setIsCopied] = useState(false);
  const codeString = String(children).replace(/\n$/, "");

  const handleCopy = () => {
    navigator.clipboard.writeText(codeString);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  if (inline) {
    return (
      <code
        className="bg-gray-100 text-blue-700 px-1.5 py-0.5 rounded text-xs font-mono"
        {...props}
      >
        {children}
      </code>
    );
  }

  return (
    // Changed div to span with 'block' to prevent <p> descendant hydration errors
    <span className="relative group my-3 block w-full">
      <span className="absolute right-2 top-2 opacity-0 group-hover:opacity-100 transition-opacity z-10">
        <button
          type="button"
          onClick={handleCopy}
          className="bg-gray-700 hover:bg-gray-600 text-gray-300 p-1.5 rounded-md transition-colors block"
          title="Copy to clipboard"
        >
          {isCopied ? (
            <Check size={14} className="text-green-400" />
          ) : (
            <Copy size={14} />
          )}
        </button>
      </span>
      <code
        className="block bg-gray-800 text-gray-100 rounded-md p-3 pt-8 overflow-x-auto text-xs font-mono"
        {...props}
      >
        {children}
      </code>
    </span>
  );
};

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Hello! I am the Project Destined AI Assistant. Stuck on a challenge or need help debugging your automation? Ask me anything.",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isOpen]);

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMsg: Message = { role: "user", content: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: [...messages, userMsg] }),
      });

      if (!res.ok) throw new Error("Network response was not ok");

      const data = await res.json();
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.message },
      ]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "I am having trouble connecting right now. Please try again in a moment.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-[100] flex flex-col items-end">
      {/* Chat Window */}
      {isOpen && (
        <div className="bg-white border border-gray-200 rounded-2xl shadow-2xl w-[90vw] md:w-[400px] h-[75vh] md:h-[500px] mb-4 flex flex-col overflow-hidden animate-in slide-in-from-bottom-5">
          {/* Header */}
          <div className="bg-black text-white p-4 flex justify-between items-center shrink-0">
            <div>
              <h3 className="font-bold text-sm">PD AI Assistant</h3>
              <p className="text-xs text-gray-400">Powered by Groq</p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 p-4 overflow-y-auto bg-gray-50 space-y-4">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed ${
                    msg.role === "user"
                      ? "bg-blue-600 text-white rounded-br-sm whitespace-pre-wrap"
                      : "bg-white border border-gray-200 text-gray-800 rounded-bl-sm shadow-sm"
                  }`}
                >
                  {/* Markdown Renderer for Assistant Messages */}
                  {msg.role === "assistant" ? (
                    <ReactMarkdown
                      components={{
                        p: ({ node, ...props }) => (
                          <p className="mb-3 last:mb-0" {...props} />
                        ),
                        ul: ({ node, ...props }) => (
                          <ul
                            className="list-disc pl-5 mb-3 space-y-1"
                            {...props}
                          />
                        ),
                        ol: ({ node, ...props }) => (
                          <ol
                            className="list-decimal pl-5 mb-3 space-y-1"
                            {...props}
                          />
                        ),
                        li: ({ node, ...props }) => (
                          <li className="pl-1" {...props} />
                        ),
                        strong: ({ node, ...props }) => (
                          <strong className="font-bold text-black" {...props} />
                        ),
                        h3: ({ node, ...props }) => (
                          <h3
                            className="font-bold text-base mb-2 mt-4 text-black"
                            {...props}
                          />
                        ),
                        h4: ({ node, ...props }) => (
                          <h4
                            className="font-bold text-sm mb-2 mt-4 text-black"
                            {...props}
                          />
                        ),
                        // Changed div to span with 'block' to prevent <p> descendant hydration errors
                        table: ({ node, ...props }) => (
                          <span className="block overflow-x-auto my-3 border border-gray-200 rounded-lg">
                            <table
                              className="w-full text-left border-collapse"
                              {...props}
                            />
                          </span>
                        ),
                        thead: ({ node, ...props }) => (
                          <thead
                            className="bg-gray-100 border-b border-gray-200"
                            {...props}
                          />
                        ),
                        th: ({ node, ...props }) => (
                          <th
                            className="p-2 text-xs font-bold text-gray-700 border-r border-gray-200 last:border-r-0"
                            {...props}
                          />
                        ),
                        td: ({ node, ...props }) => (
                          <td
                            className="p-2 text-xs text-gray-600 border-r border-gray-200 last:border-r-0 border-t align-top"
                            {...props}
                          />
                        ),
                        code: CodeBlock,
                      }}
                    >
                      {msg.content}
                    </ReactMarkdown>
                  ) : (
                    msg.content
                  )}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white border border-gray-200 text-gray-800 p-4 rounded-2xl rounded-bl-sm shadow-sm flex items-center gap-2">
                  <Loader2 size={16} className="animate-spin text-blue-600" />
                  <span className="text-xs text-gray-500 font-medium">
                    Thinking...
                  </span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-3 bg-white border-t border-gray-100 shrink-0">
            <form
              onSubmit={sendMessage}
              className="flex items-center gap-2 relative"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask for help..."
                className="w-full bg-gray-100 border-transparent focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 rounded-full py-2.5 pl-4 pr-12 text-sm transition-all"
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={!input.trim() || isLoading}
                className="absolute right-1.5 p-1.5 bg-black text-white rounded-full hover:bg-gray-800 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
              >
                <Send size={16} className="ml-0.5" />
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Floating Action Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-black hover:bg-gray-800 text-white p-4 rounded-full shadow-xl transition-transform hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
        >
          <MessageSquare size={24} />
        </button>
      )}
    </div>
  );
}
