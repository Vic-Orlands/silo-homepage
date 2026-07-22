import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

interface FAQCategory {
  category: string;
  items: FAQItem[];
}

export default function ChangelogAndFaq() {
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>(
    {},
  );

  const toggleItem = (id: string) => {
    setExpandedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const faqData: FAQCategory[] = [
    {
      category: "General",
      items: [
        {
          id: "gen-1",
          question: "What is Silo?",
          answer:
            "Silo is a local-first password manager you run yourself. Your vault is an encrypted file on your machine—there is no account, no cloud sync, and no remote copy of your master password.",
        },
        {
          id: "gen-2",
          question: "Who is Silo for?",
          answer:
            "Developers and security-curious users who want to understand every boundary in a password manager. Silo is an open educational project: useful day to day, but not yet audited for critical production credentials.",
        },
        {
          id: "gen-3",
          question: "What can I store in a vault?",
          answer:
            "Login entries with usernames, passwords, URLs, and optional TOTP secrets. You manage them through the CLI, the interactive terminal shell, or—when the local broker is running—approved autofill via the browser extension.",
        },
        {
          id: "gen-4",
          question: "Is Silo open source?",
          answer:
            "Yes. The CLI, core crypto, local broker, native host, and browser extension live in the public Silo repository so you can read, build, and audit the code yourself.",
        },
      ],
    },
    {
      category: "Security & privacy",
      items: [
        {
          id: "sec-1",
          question: "Where is my data stored?",
          answer:
            "Only on your machine, in an encrypted vault file. Silo never uploads entries. Exports are deliberate plaintext JSON—treat those files carefully and delete them when you are done.",
        },
        {
          id: "sec-2",
          question: "How is the vault protected?",
          answer:
            "Keys are derived with Argon2id and vault writes are atomic, keeping a previous .bak copy. Unlock happens locally for a command or a shell/broker session—then the vault locks again when you quit or time out.",
        },
        {
          id: "sec-3",
          question: "Does the browser extension see my master password?",
          answer:
            "No. The extension talks to a local broker that already holds an unlocked session. It only receives login or TOTP values you explicitly approve—never the master password.",
        },
      ],
    },
    {
      category: "Using Silo",
      items: [
        {
          id: "use-1",
          question: "How do I get started?",
          answer:
            "Clone the Silo repository, then run cargo run -p silo -- init to create a vault. Add logins with silo add, browse them in silo shell, and use silo broker when you want browser autofill.",
        },
        {
          id: "use-2",
          question: "What is the difference between the CLI and the shell?",
          answer:
            "Each CLI command unlocks, does one job, and exits. The shell unlocks once and keeps an interactive workspace open—search, inspect, copy passwords or TOTP codes, then quit to lock.",
        },
        {
          id: "use-3",
          question: "How do one-time codes work?",
          answer:
            "TOTP secrets are stored in the vault and codes are generated locally with silo otp or the o key in the shell. Copied secrets clear from the clipboard after about 20 seconds if nothing else has replaced them.",
        },
      ],
    },
  ];

  return (
    <div className="w-full bg-[#030303] text-zinc-300 relative z-10 font-sans border-t border-zinc-900">
      <section
        id="faq"
        className="border-t border-zinc-900 bg-[#020202] py-24 scroll-mt-24"
      >
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center md:text-left mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white">
              Frequently Asked Questions
            </h2>
            <p className="text-zinc-500 text-sm mt-3">
              Straight answers about Silo’s local vault, CLI, shell, and
              browser bridge.
            </p>
          </div>

          <div className="space-y-16">
            {faqData.map((group) => (
              <div
                key={group.category}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 border-t border-zinc-900 pt-8"
              >
                <div className="lg:col-span-3 text-left">
                  <h3 className="text-white text-lg font-bold tracking-tight select-none">
                    {group.category}
                  </h3>
                </div>

                <div className="lg:col-span-9 border-t border-zinc-900/60 lg:border-t-0 divide-y divide-zinc-900/60">
                  {group.items.map((item) => {
                    const isExpanded = !!expandedItems[item.id];
                    return (
                      <div
                        key={item.id}
                        className="py-4.5 first:pt-0 last:pb-0 transition-all duration-300"
                        id={`faq-item-${item.id}`}
                      >
                        <button
                          onClick={() => toggleItem(item.id)}
                          className="w-full flex items-center justify-between text-left gap-4 py-3 text-sm font-semibold text-zinc-300 hover:text-white transition-colors cursor-pointer select-none"
                        >
                          <span className="tracking-tight">
                            {item.question}
                          </span>
                          <ChevronDown
                            className={`w-4 h-4 text-zinc-500 shrink-0 transition-transform duration-300 ${
                              isExpanded ? "rotate-180 text-emerald-700" : ""
                            }`}
                          />
                        </button>

                        <div
                          className={`overflow-hidden transition-all duration-300 ${
                            isExpanded
                              ? "max-h-60 opacity-100 mt-2.5 pb-2"
                              : "max-h-0 opacity-0 pointer-events-none"
                          }`}
                        >
                          <p className="text-zinc-400 text-sm leading-relaxed font-sans font-normal pl-1">
                            {item.answer}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
