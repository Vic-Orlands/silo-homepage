import { useState } from "react";
import {
  Search,
  
  Sparkles,
  Monitor,
  ShoppingBag,
  Mic,
  Camera,
  Languages,
  Flame,

} from "lucide-react";
import { RAYCAST_COMMANDS } from "../../data";
import { RaycastCommand } from "../../types";

export default function FeatureSection() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCommandId, setSelectedCommandId] =
    useState<string>("schedule");

  const filteredCommands = RAYCAST_COMMANDS.filter(
    (cmd) =>
      cmd.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (cmd.subtitle &&
        cmd.subtitle.toLowerCase().includes(searchQuery.toLowerCase())),
  );

  const renderIcon = (cmd: RaycastCommand) => {
    if (cmd.id === "schedule") {
      return (
        <div className="relative w-6 h-6 flex items-center justify-center bg-zinc-800 text-zinc-100 rounded-md border border-zinc-700/50 shadow-sm overflow-hidden select-none">
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-emerald-800" />
          <span className="text-[8px] font-bold font-sans mt-1">07</span>
        </div>
      );
    }

    const iconClass = "w-4 h-4";
    switch (cmd.icon) {
      case "Sparkles":
        return (
          <div className="w-6 h-6 rounded-md bg-emerald-950/40 border border-emerald-900/40 text-emerald-700 flex items-center justify-center">
            <Sparkles className={iconClass} />
          </div>
        );
      case "Monitor":
        return (
          <div className="w-6 h-6 rounded-md bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center">
            <Monitor className={iconClass} />
          </div>
        );
      case "ShoppingBag":
        return (
          <div className="w-6 h-6 rounded-md bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center">
            <ShoppingBag className={iconClass} />
          </div>
        );
      case "Mic":
        return (
          <div className="w-6 h-6 rounded-md bg-emerald-950/40 border border-emerald-900/40 text-emerald-700 flex items-center justify-center">
            <Mic className={iconClass} />
          </div>
        );
      case "Camera":
        return (
          <div className="w-6 h-6 rounded-md bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center">
            <Camera className={iconClass} />
          </div>
        );
      case "Languages":
        return (
          <div className="w-6 h-6 rounded-md bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center">
            <Languages className={iconClass} />
          </div>
        );
      case "Flame":
        return (
          <div className="w-6 h-6 rounded-md bg-orange-500/10 border border-orange-500/20 text-orange-400 flex items-center justify-center">
            <Flame className={iconClass} />
          </div>
        );
      default:
        return (
          <div className="w-6 h-6 rounded-md bg-zinc-800 text-zinc-400 flex items-center justify-center">
            <Monitor className={iconClass} />
          </div>
        );
    }
  };

  return (
    <section className="relative w-full py-14 md:py-0 md:pb-20 bg-[#030303] overflow-hidden">
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-emerald-950/5 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] rounded-full bg-zinc-950/10 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <div
          className="lg:col-span-5 flex flex-col justify-center text-left"
          id="feature-description-col"
        >
          <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight font-sans leading-[1.15]">
            A fresh new coat
          </h2>
          <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mt-4 max-w-md font-sans">
            The look and feel of Raycast has been updated to feel right at home
            on macOS Tahoe. Enjoy refined iconography, dynamic visual responses,
            and streamlined spacing.
          </p>
        </div>

        
        <div
          className="lg:col-span-7 flex justify-center [perspective:1200px] py-10"
          id="feature-tilted-col"
        >
          
          <div className="w-full max-w-[620px] rounded-2xl tilted-mac-ui overflow-hidden bg-zinc-950 border border-zinc-900 relative">
            
            <div className="absolute inset-0 z-0">
              <img
                src="https://images.unsplash.com/photo-1607799279861-4dd421887fb3?auto=format&fit=crop&w=800&q=80"
                alt="Sleek dark computer deck background"
                className="w-full h-full object-cover opacity-25 filter grayscale contrast-125 brightness-50"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black via-black/80 to-transparent" />
            </div>

            
            <div className="relative z-10 w-full p-4 md:p-5 flex flex-col h-auto min-h-[380px] bg-black/45 backdrop-blur-xl border border-white/5 rounded-2xl shadow-inner">
              
              <div className="flex items-center justify-between pb-3.5 border-b border-white/5">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-zinc-800" />
                  <div className="w-2.5 h-2.5 rounded-full bg-zinc-800" />
                  <div className="w-2.5 h-2.5 rounded-full bg-zinc-800" />
                </div>
                <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-zinc-900/45 border border-white/5 text-[10px] font-mono text-zinc-500 select-none">
                  <span>⌥ Space</span>
                </div>
              </div>

              
              <div className="relative mt-4">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-zinc-400 pointer-events-none" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search for apps and commands..."
                  className="w-full bg-zinc-900/30 hover:bg-zinc-900/40 focus:bg-zinc-900/60 text-[14px] text-white placeholder-zinc-500 font-sans pl-10.5 pr-4 py-2.5 rounded-xl border border-white/5 focus:border-white/10 outline-none transition-all"
                  id="mac-search-input"
                />
              </div>

              
              <div
                className="mt-4 flex-1 overflow-y-auto max-h-[220px] space-y-1 pr-1"
                id="mac-commands-list"
              >
                {filteredCommands.length > 0 ? (
                  filteredCommands.map((cmd) => {
                    const isSelected = selectedCommandId === cmd.id;
                    return (
                      <div
                        key={cmd.id}
                        onClick={() => setSelectedCommandId(cmd.id)}
                        className={`flex items-center justify-between px-3 py-2 rounded-lg cursor-pointer transition-all duration-150 ${
                          isSelected
                            ? "bg-white/10 border-l-2 border-emerald-700 text-white"
                            : "hover:bg-white/5 text-zinc-300"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          {renderIcon(cmd)}
                          <div className="flex flex-col">
                            <span className="text-[13px] font-sans font-medium leading-tight">
                              {cmd.title}
                            </span>
                            {cmd.subtitle && (
                              <span className="text-[10px] text-zinc-500 font-sans mt-0.5">
                                {cmd.subtitle}
                              </span>
                            )}
                          </div>
                        </div>

                        <div className="flex items-center gap-2">
                          
                          {cmd.shortcut && (
                            <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-zinc-800 text-zinc-400 border border-zinc-700/30">
                              {cmd.shortcut}
                            </span>
                          )}
                          <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">
                            {cmd.category}
                          </span>
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <div className="py-8 text-center text-zinc-500 text-xs font-sans">
                    No commands matched "{searchQuery}"
                  </div>
                )}
              </div>

              <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-zinc-500 select-none">
                <div className="flex items-center gap-1">
                  <span>Use</span>
                  <span className="px-1 py-0.2 bg-zinc-900 border border-zinc-800 rounded font-mono text-[9px]">
                    ↑↓
                  </span>
                  <span>to navigate,</span>
                  <span className="px-1 py-0.2 bg-zinc-900 border border-zinc-800 rounded font-mono text-[9px]">
                    ↵
                  </span>
                  <span>to execute</span>
                </div>
                <span>Silo v1.0</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
