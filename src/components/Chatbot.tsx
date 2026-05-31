import { useState, useRef, useEffect } from "react";
import { Bot, X, MessageSquare, Send } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type Message = {
  id: string;
  sender: "bot" | "user";
  text: string;
};

const FAQ_OPTIONS = [
  { label: "What products do you export?", answer: "We export premium Indian spices, herbal products (like Moringa and Spirulina), Banana Leaf, Bamboo Salt, and Granite." },
  { label: "Where do you ship to?", answer: "We ship globally to the USA, Europe, Middle East, Southeast Asia, Australia, and Africa." },
  { label: "How do I place an order?", answer: "You can place an order by requesting a quote on our Contact page or messaging us on WhatsApp." },
  { label: "Do you provide certificates?", answer: "Yes, we provide all necessary quality and origin certificates including FSSAI, APEDA, and ISO." },
];

const DEFAULT_ANSWER = "For specific or further queries, please contact us at +91 9080531831 or email mitgroupsindia@gmail.com.";

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    { id: "init", sender: "bot", text: "Hello! Welcome to Mars International Trading. How can I help you today?" }
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isOpen]);

  const handleOptionClick = (option: typeof FAQ_OPTIONS[0]) => {
    const userMsg: Message = { id: Date.now().toString(), sender: "user", text: option.label };
    setMessages(prev => [...prev, userMsg]);

    setTimeout(() => {
      const botMsg: Message = { id: (Date.now() + 1).toString(), sender: "bot", text: option.answer };
      setMessages(prev => [...prev, botMsg]);
    }, 500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userMsg: Message = { id: Date.now().toString(), sender: "user", text: inputValue.trim() };
    setMessages(prev => [...prev, userMsg]);
    setInputValue("");

    setTimeout(() => {
      const botMsg: Message = { id: (Date.now() + 1).toString(), sender: "bot", text: DEFAULT_ANSWER };
      setMessages(prev => [...prev, botMsg]);
    }, 500);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        aria-label="Open Chatbot"
        className={`fixed right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-navy text-gold-light shadow-lg transition hover:scale-110 ${isOpen ? 'hidden' : 'bottom-24'}`}
      >
        <Bot className="h-6 w-6" />
        <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-navy opacity-30" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 z-50 flex w-[350px] flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between bg-navy p-4 text-cream">
              <div className="flex items-center gap-2">
                <Bot className="h-5 w-5 text-gold-light" />
                <span className="font-display font-medium text-lg">Mars Assistant</span>
              </div>
              <button onClick={() => setIsOpen(false)} className="rounded-full p-1 hover:bg-cream/20 transition">
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Chat Area */}
            <div className="flex-1 overflow-y-auto p-4 h-[350px] bg-slate-50/50">
              <div className="space-y-4">
                {messages.map((msg) => (
                  <div key={msg.id} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
                    <div className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm shadow-sm ${msg.sender === "user" ? "bg-gold-light text-navy rounded-br-none" : "bg-white border border-border rounded-bl-none text-foreground"}`}>
                      {msg.text}
                    </div>
                  </div>
                ))}
                
                {/* Options display if it's the beginning */}
                {messages.length === 1 && (
                  <div className="flex flex-wrap gap-2 mt-4">
                    {FAQ_OPTIONS.map((opt, i) => (
                      <button
                        key={i}
                        onClick={() => handleOptionClick(opt)}
                        className="rounded-xl border border-gold-light/40 bg-white px-3 py-2 text-xs font-medium text-navy transition hover:bg-gold-light/10 hover:border-gold-light text-left shadow-sm"
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                )}
                
                <div ref={messagesEndRef} />
              </div>
            </div>

            {/* Input Area */}
            <div className="border-t border-border bg-white p-3">
              <form onSubmit={handleSubmit} className="flex items-center gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Type a message..."
                  className="flex-1 rounded-full border border-border bg-slate-50 px-4 py-2 text-sm focus:border-gold-light focus:outline-none focus:ring-1 focus:ring-gold-light"
                />
                <button
                  type="submit"
                  disabled={!inputValue.trim()}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-navy text-gold-light transition hover:bg-navy/90 disabled:opacity-50"
                >
                  <Send className="h-4 w-4" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
