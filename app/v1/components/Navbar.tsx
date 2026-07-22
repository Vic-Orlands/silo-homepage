import { useState, useEffect } from "react";
import { LogIn, Menu, X, ArrowUpRight } from "lucide-react";

interface NavbarProps {
  onChangelogClick: () => void;
  onDownloadClick: () => void;
}

export default function Navbar({
  onChangelogClick,
  onDownloadClick,
}: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-[85%] max-w-xl transition-all duration-300">
      <div
        className={`rounded-2xl border border-white/6 bg-[rgba(10,10,12,0.4)] px-5 py-2.5 backdrop-blur-[20px] flex items-center justify-between transition-all duration-300 ${
          scrolled
            ? "shadow-[0_20px_50px_rgba(0,0,0,0.6)] border-white/10"
            : "border-white/5"
        }`}
        id="navbar-container"
      >
        <div
          className="flex items-center gap-2 select-none cursor-pointer group"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <span className="font-semibold tracking-tight text-white text-[15px] font-sans">
            Silo
          </span>
        </div>

        <div className="flex-1"></div>

        <div className="hidden md:flex items-center gap-4">
          <a
            href="https://github.com/Vic-Orlands/Silo"
            target="_blank"
            rel="noreferrer"
            className="text-[12px] text-zinc-400 hover:text-white font-medium transition-colors"
          >
            Github
          </a>

          <a
            href="https://github.com/Vic-Orlands/Silo"
            target="_blank"
            rel="noreferrer"
            className="bg-white text-black font-semibold text-[12px] px-3.5 py-1.5 rounded-lg flex items-center gap-1.5 hover:bg-zinc-200 active:scale-95 transition-all duration-200 cursor-pointer shadow-md"
          >
            <span>Download</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={onChangelogClick}
            className="p-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-emerald-600 text-[11px] font-medium px-2.5"
            title="Changelog"
          >
            Changelog
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-zinc-400 hover:text-white p-1"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="absolute top-16 left-0 right-0 rounded-2xl border border-white/10 bg-[rgba(13,13,16,0.75)] p-4 mt-1 flex flex-col gap-3 shadow-2xl backdrop-blur-2xl md:hidden">
          <div className="flex flex-col gap-2 pt-1">
            <a
              href="https://github.com/Vic-Orlands/Silo"
              target="_blank"
              rel="noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="text-zinc-300 hover:text-white text-xs py-1.5 flex items-center gap-2"
            >
              <LogIn className="w-3.5 h-3.5" />
              <span>Github</span>
            </a>
            <a
              href="https://github.com/Vic-Orlands/Silo"
              target="_blank"
              rel="noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="bg-white text-black font-semibold text-xs py-2.5 rounded-lg flex items-center justify-center gap-1.5 hover:bg-zinc-200"
            >
              <span>Download CLI</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
