import { useState, useEffect } from "react";
import { X, Copy, Check, Apple, Terminal, ChevronRight, Download } from "lucide-react";

interface DownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialPlatform?: "mac" | "windows" | "linux" | "shell";
}

export default function DownloadModal({ isOpen, onClose, initialPlatform = "mac" }: DownloadModalProps) {
  const [activeTab, setActiveTab] = useState<"mac" | "windows" | "linux" | "shell">("mac");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setActiveTab(initialPlatform);
    }
  }, [isOpen, initialPlatform]);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const platformData = {
    mac: {
      title: "macOS Installation",
      subtitle:
        "Clone the Silo repository and build the CLI with Cargo on your Mac.",
      command: "git clone https://github.com/Vic-Orlands/Silo.git && cd Silo",
      secondary: "Then create a vault and open the interactive shell:",
      downloadLabel: "Open Silo on GitHub",
      isCommandOnly: false,
    },
    windows: {
      title: "Windows Installation",
      subtitle:
        "Clone the Silo repository and build with Cargo (Rust toolchain required).",
      command: "git clone https://github.com/Vic-Orlands/Silo.git && cd Silo",
      secondary: "Then create a vault and open the interactive shell:",
      downloadLabel: "Open Silo on GitHub",
      isCommandOnly: false,
    },
    linux: {
      title: "Linux Installation",
      subtitle:
        "Clone the Silo repository and build the CLI with Cargo on Linux.",
      command: "git clone https://github.com/Vic-Orlands/Silo.git && cd Silo",
      secondary: "Then create a vault and open the interactive shell:",
      downloadLabel: "Open Silo on GitHub",
      isCommandOnly: false,
    },
    shell: {
      title: "Shell & broker",
      subtitle:
        "After cloning, initialize a vault and work from the terminal shell or local broker.",
      command: "cargo run -p silo -- init",
      secondary: "Interactive workspace (unlock once, then work):",
      downloadLabel: "cargo run -p silo -- shell",
      isCommandOnly: true,
    },
  };

  const current = platformData[activeTab];

  return (
    <div className={`fixed inset-0 z-50 flex items-end justify-center transition-all duration-300 ${isOpen ? "pointer-events-auto" : "pointer-events-none"}`}>
      
      <div 
        className={`absolute inset-0 bg-black/65 backdrop-blur-sm transition-opacity duration-300 ease-in-out ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
        onClick={onClose}
      />

      
      <div 
        className={`relative bg-zinc-950 border-t border-x border-zinc-800/80 rounded-t-2xl rounded-b-none w-full max-w-lg overflow-hidden shadow-2xl z-10 p-6 pb-8 transition-all duration-300 ease-out transform ${
          isOpen ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
        }`}
        id="download-modal-box"
      >
        
        <div className="flex items-center justify-between pb-4 border-b border-zinc-900">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-emerald-950/40 border border-emerald-900/40 flex items-center justify-center text-emerald-700">
              <Terminal className="w-4.5 h-4.5" />
            </div>
            <div>
              <h3 className="text-white text-base font-semibold tracking-tight">Access Silo CLI</h3>
              <p className="text-zinc-500 text-[11px] font-mono">Select your workspace configuration</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="text-zinc-500 hover:text-white p-1 rounded-lg hover:bg-zinc-900 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        
        <div className="flex items-center justify-around gap-2 bg-zinc-900/50 p-1.5 rounded-xl border border-zinc-900 my-5">
          {(["mac", "windows", "linux", "shell"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 py-2 text-xs font-medium rounded-lg uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === tab 
                  ? "bg-zinc-800 text-emerald-700 font-semibold shadow-sm" 
                  : "text-zinc-500 hover:text-zinc-300"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        
        <div className="space-y-4">
          <div>
            <h4 className="text-zinc-200 text-sm font-semibold">{current.title}</h4>
            <p className="text-zinc-400 text-xs mt-1.5 leading-relaxed">{current.subtitle}</p>
          </div>

          
          <div className="bg-black border border-zinc-900 rounded-xl p-3.5 font-mono relative group">
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-2 text-xs text-zinc-300 overflow-x-auto whitespace-nowrap scrollbar-none pr-12">
                <ChevronRight className="w-4 h-4 text-emerald-700 shrink-0" />
                <span>{current.command}</span>
              </div>
              <button
                onClick={() => handleCopy(current.command)}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 bg-zinc-950/80 hover:bg-zinc-900 text-zinc-400 hover:text-white p-1.5 rounded-md border border-zinc-800 transition-all cursor-pointer"
                title="Copy code to clipboard"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-700 font-bold" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
          </div>

          
          <div className="pt-2">
            <p className="text-zinc-500 text-[11px] mb-3">{current.secondary}</p>
            {current.isCommandOnly ? (
              <div className="bg-zinc-900/40 border border-zinc-800/40 rounded-xl p-3.5 flex items-center justify-between">
                <span className="text-zinc-300 font-mono text-xs">{current.downloadLabel}</span>
                <button
                  onClick={() => handleCopy(current.downloadLabel)}
                  className="text-zinc-400 hover:text-white text-xs font-medium flex items-center gap-1.5"
                >
                  <span>Copy</span>
                  <Copy className="w-3.5 h-3.5" />
                </button>
              </div>
            ) : (
              <a
                href="https://github.com/Vic-Orlands/Silo"
                target="_blank"
                rel="noreferrer"
                className="w-full bg-white hover:bg-zinc-100 text-black text-xs font-semibold py-3 px-4 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-white/5 transition-all active:scale-98 cursor-pointer"
              >
                {activeTab === "mac" ? (
                  <Apple className="w-4 h-4 fill-current" />
                ) : (
                  <Download className="w-4 h-4" />
                )}
                <span>{current.downloadLabel}</span>
              </a>
            )}
          </div>
        </div>

        
        <div className="mt-6 pt-4 border-t border-zinc-900 flex items-center justify-between text-[10px] text-zinc-500 font-mono">
          <span>SHA-256 Verified</span>
          <span>No sudo required</span>
        </div>
      </div>
    </div>
  );
}
