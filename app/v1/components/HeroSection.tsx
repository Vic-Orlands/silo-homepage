import { useState } from "react";
import { Apple, Terminal } from "lucide-react";

interface HeroSectionProps {
  onDownloadClick: (platform?: "mac" | "windows" | "linux" | "shell") => void;
}

export default function HeroSection({ onDownloadClick }: HeroSectionProps) {
  const [activeTab, setActiveTab] = useState<
    "mac" | "windows" | "linux" | "shell"
  >("mac");

  return (
    <section className="relative w-full min-h-[70vh] flex flex-col justify-center items-center text-center px-4 pt-36 pb-20 overflow-hidden bg-[#030303]">
      <div className="absolute inset-0 pointer-events-none select-none z-0">
        <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[80%] h-[50%] rounded-full bg-emerald-950/10 blur-[120px]" />

        <div className="absolute top-[-20%] left-[-20%] right-[-20%] bottom-[-20%] flex items-center justify-center rotate-[-28deg] animate-pulse-glow">
          <div className="w-[180px] md:w-[280px] lg:w-[400px] h-[150%] bg-gradient-to-b from-transparent via-emerald-950/40 via-emerald-900/40 via-emerald-950/30 to-transparent blur-[60px] opacity-75 mix-blend-screen" />
          <div className="absolute w-[80px] md:w-[150px] lg:w-[200px] h-[150%] bg-gradient-to-b from-transparent via-emerald-950/10 via-emerald-900/30 via-emerald-950/20 to-transparent blur-[35px] opacity-85 mix-blend-color-dodge" />
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#030303] to-transparent" />
      </div>

      <div
        className="relative z-10 flex flex-col items-center max-w-5xl mx-auto"
        id="hero-content"
      >
        <h1
          className="text-white text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight font-sans leading-[1.05] max-w-4xl"
          id="hero-title"
        >
          Share{" "}
          <span className="font-[var(--font-display)] italic font-normal tracking-[-0.06em]">
            Everything
          </span>{" "}
          <br />
          <span className="font-[var(--font-display)] font-semibold tracking-[-0.06em]">
            Securely
          </span>
        </h1>

        <p
          className="text-zinc-400 text-xs sm:text-sm md:text-[14px] max-w-xl md:max-w-2xl mt-5 font-sans leading-relaxed tracking-normal px-4"
          id="hero-subtitle"
        >
          A collection of powerful productivity tools all within{" "}
          <br className="hidden sm:inline" />
          an extendable launcher. Fast, ergonomic and reliable.
        </p>

        <div
          className="flex flex-col items-center gap-4 mt-8 sm:mt-10 max-w-md w-full px-4"
          id="os-switcher-container"
        >
          <div className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800/80 flex items-center justify-center text-zinc-400 shadow-md">
            {activeTab === "mac" && (
              <Apple className="w-4.5 h-4.5 fill-current text-white" />
            )}
            {activeTab === "windows" && (
              <svg
                viewBox="0 0 24 24"
                className="w-4 h-4 fill-current text-white"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 3.449L9.75 2.1v9.45H0V3.449zM0 12.45h9.75v9.45L0 20.551v-8.1zM11.25 1.899L24 0v11.55H11.25V1.899zM11.25 12.45H24v11.55l-12.75-1.9v-9.65z" />
              </svg>
            )}
            {activeTab === "linux" && (
              <svg
                viewBox="0 0 24 24"
                className="w-4 h-4 fill-current text-white"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 2s-.5.3-1 .8c-.6-.4-1.2-.6-1.9-.6-2.2 0-4 1.8-4 4 0 1 .4 1.9 1 2.6-.2.8-.2 1.7.1 2.5C5.4 12.1 5 13.5 5 15c0 3.9 3.1 7 7 7s7-3.1 7-7c0-1.5-.4-2.9-1.2-3.7.3-.8.3-1.7.1-2.5.6-.7 1-1.6 1-2.6 0-2.2-1.8-4-4-4-.7 0-1.3.2-1.9.6-.5-.5-1-.8-1-.8z" />
              </svg>
            )}
            {activeTab === "shell" && (
              <Terminal className="w-4.5 h-4.5 text-emerald-700" />
            )}
          </div>

          <div className="flex items-center gap-5 text-[11px] font-mono tracking-wider text-zinc-500 select-none">
            <span
              onClick={() => setActiveTab("mac")}
              className={`cursor-pointer transition-colors py-1 px-1.5 hover:text-white uppercase ${
                activeTab === "mac"
                  ? "text-emerald-700 font-semibold font-bold"
                  : ""
              }`}
            >
              mac
            </span>
            <span className="text-zinc-800">|</span>
            <span
              onClick={() => setActiveTab("windows")}
              className={`cursor-pointer transition-colors py-1 px-1.5 hover:text-white uppercase ${
                activeTab === "windows"
                  ? "text-emerald-700 font-semibold font-bold"
                  : ""
              }`}
            >
              windows
            </span>
            <span className="text-zinc-800">|</span>
            <span
              onClick={() => setActiveTab("linux")}
              className={`cursor-pointer transition-colors py-1 px-1.5 hover:text-white uppercase ${
                activeTab === "linux"
                  ? "text-emerald-700 font-semibold font-bold"
                  : ""
              }`}
            >
              linux
            </span>
            <span className="text-zinc-800">|</span>
            <span
              onClick={() => setActiveTab("shell")}
              className={`cursor-pointer transition-colors py-1 px-1.5 hover:text-white uppercase ${
                activeTab === "shell"
                  ? "text-emerald-700 font-semibold font-bold"
                  : ""
              }`}
            >
              shell
            </span>
          </div>

          <a
            id="download-dynamic-btn"
            href="https://github.com/Vic-Orlands/Silo"
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto min-w-[250px] bg-white hover:bg-zinc-100 text-black font-semibold text-[13px] px-7 py-2.5 rounded-lg flex items-center justify-center gap-2 transition-all active:scale-98 shadow-xl shadow-white/5 cursor-pointer mt-1"
          >
            {activeTab === "mac" && <Apple className="w-4 h-4 fill-current" />}
            {activeTab === "windows" && (
              <svg
                viewBox="0 0 24 24"
                className="w-4 h-4 fill-current"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 3.449L9.75 2.1v9.45H0V3.449zM0 12.45h9.75v9.45L0 20.551v-8.1zM11.25 1.899L24 0v11.55H11.25V1.899zM11.25 12.45H24v11.55l-12.75-1.9v-9.65z" />
              </svg>
            )}
            {activeTab === "linux" && (
              <svg
                viewBox="0 0 24 24"
                className="w-4 h-4 fill-current"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 2s-.5.3-1 .8c-.6-.4-1.2-.6-1.9-.6-2.2 0-4 1.8-4 4 0 1 .4 1.9 1 2.6-.2.8-.2 1.7.1 2.5C5.4 12.1 5 13.5 5 15c0 3.9 3.1 7 7 7s7-3.1 7-7c0-1.5-.4-2.9-1.2-3.7.3-.8.3-1.7.1-2.5.6-.7 1-1.6 1-2.6 0-2.2-1.8-4-4-4-.7 0-1.3.2-1.9.6-.5-.5-1-.8-1-.8z" />
              </svg>
            )}
            {activeTab === "shell" && <Terminal className="w-4 h-4" />}

            <span>
              {activeTab === "mac" && "Download for Mac"}
              {activeTab === "windows" && "Download for Windows"}
              {activeTab === "linux" && "Download for Linux"}
              {activeTab === "shell" && "Install via Shell"}
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
