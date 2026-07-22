import { ArrowUpRight } from "lucide-react";
import { BENTO_CARDS } from "../../data";

export default function BentoSection() {
  return (
    <section
      className="relative w-full py-28 px-4 md:px-8 bg-[#030303] overflow-hidden"
      id="bento-section"
    >
      <div className="absolute top-[25%] left-1/2 -translate-x-1/2 w-[550px] h-[350px] rounded-full bg-emerald-950/5 blur-[120px] pointer-events-none" />

      <div className="text-center max-w-4xl mx-auto mb-16 sm:mb-20 flex flex-col items-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight font-sans leading-[1.15]">
          <span className="block text-zinc-500 font-medium">
            Same shortcut.
          </span>

          <span className="block text-white mt-1">New everything.</span>
        </h2>
      </div>

      <div
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8"
        id="bento-grid"
      >
        {BENTO_CARDS.map((card) => (
          <div
            key={card.id}
            className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/[0.08] bg-[rgba(13,13,16,0.75)] backdrop-blur-2xl transition-all duration-300 hover:-translate-y-1 hover:border-white/15 hover:shadow-[0_25px_50px_rgba(0,0,0,0.6)] cursor-pointer"
          >
            <div className="p-6 md:p-8 relative z-10">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-[10px] uppercase tracking-wider font-mono text-emerald-700 bg-emerald-950/40 border border-emerald-900/30 px-2 py-0.5 rounded-full">
                  {card.badge}
                </span>
                <span className="text-[10px] text-zinc-500 uppercase tracking-wider font-mono">
                  {card.category}
                </span>
              </div>

              <h3 className="text-white text-base sm:text-lg font-bold tracking-tight font-sans mb-3 flex items-center gap-1">
                <span>{card.title}</span>
                <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </h3>

              <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed max-w-md font-sans">
                {card.description}
              </p>
            </div>

            <div className="relative h-[220px] sm:h-[280px] w-full overflow-hidden mt-2 select-none">
              <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-[#0d0d10]/95 to-transparent z-10" />
              <div className="absolute inset-0 bg-black/10 hover:bg-black/0 transition-colors duration-300 z-10" />

              <img
                src={card.imageUrl}
                alt={card.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                referrerPolicy="no-referrer"
              />

              <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
