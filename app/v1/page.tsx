"use client";

import { useState } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeatureSection from "./components/FeatureSection";
import BentoSection from "./components/BentoSection";
import ChangelogAndFaq from "./components/ChangelogAndFaq";
import DownloadModal from "./components/DownloadModal";
import { Terminal, Heart, Github } from "lucide-react";

export default function App() {
  const [downloadModalOpen, setDownloadModalOpen] = useState(false);
  const [initialDownloadPlatform, setInitialDownloadPlatform] = useState<
    "mac" | "windows" | "linux" | "shell"
  >("mac");

  const triggerDownloadModal = (
    platform?: "mac" | "windows" | "linux" | "shell",
  ) => {
    if (platform) {
      setInitialDownloadPlatform(platform);
    } else {
      setInitialDownloadPlatform("mac");
    }
    setDownloadModalOpen(true);
  };

  const handleScrollToChangelog = () => {
    const element = document.getElementById("changelog");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="v1-page relative min-h-screen overflow-x-hidden bg-[#030303] font-[var(--font-sans)] text-zinc-100 selection:bg-emerald-900/50 selection:text-white">
      <Navbar
        onChangelogClick={handleScrollToChangelog}
        onDownloadClick={() => triggerDownloadModal("mac")}
      />

      <main className="w-full">
        <div id="hero-segment">
          <HeroSection onDownloadClick={triggerDownloadModal} />
        </div>

        <div id="feature-segment">
          <FeatureSection />
        </div>

        <div id="bento-segment">
          <BentoSection />
        </div>

        <div id="changelog-segment">
          <ChangelogAndFaq />
        </div>
      </main>

      <footer className="relative bg-[#020202] border-t border-zinc-900/60 py-12 px-6 overflow-hidden">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 relative z-10 text-center md:text-left">
          <div className="flex items-center gap-2.5">
            <div className="relative w-6 h-6 flex items-center justify-center rounded bg-zinc-900 border border-zinc-800 text-zinc-400">
              <Terminal className="w-3.5 h-3.5 text-emerald-700" />
            </div>
            <span className="text-xs font-mono text-zinc-500">
              Silo CLI Launcher Workspace
            </span>
          </div>

          <div className="flex items-center gap-2 text-[11px] text-zinc-500 font-sans">
            <span>Crafted with meticulous detail</span>
            <Heart className="w-3 h-3 text-emerald-700 fill-emerald-700 animate-pulse" />
            <span>for developers</span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/Vic-Orlands/Silo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 hover:text-white transition-colors"
              title="Github repository"
            >
              <Github className="w-4 h-4" />
            </a>
            <span className="text-zinc-800">|</span>
            <span className="text-xs text-zinc-500 font-mono">
              2026 Silo Systems Inc.
            </span>
          </div>
        </div>
      </footer>

      <DownloadModal
        isOpen={downloadModalOpen}
        onClose={() => setDownloadModalOpen(false)}
        initialPlatform={initialDownloadPlatform}
      />
    </section>
  );
}
