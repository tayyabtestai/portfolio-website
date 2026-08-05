import { Check } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import { usePageMeta } from "@/hooks/usePageMeta";

const outcomes: string[] = [
  "Ship your first AI system in the first two weeks",
  "Automate one high-leverage workflow per session",
  "Build a personal AI stack you actually use",
  "Set up Claude Code and start engineering without a dev team",
  "Design a LinkedIn content engine that runs daily",
  "Debug your own stuck projects live, on the call",
];

export default function Mentorship() {
  usePageMeta(
    "AI Mentorship & Consulting | 1-on-1 With Tayyab Ismail",
    "One-on-one AI mentorship for founders and operators. Learn to build with AI through direct sessions. No fluff, no cohorts — leave every call with something running."
  );
  return (
    <main className="relative min-h-screen">
      <Navbar />

      <section className="mx-auto max-w-[1280px] px-6 pt-32 md:px-12 md:pt-40">
        <p className="text-[13px] font-medium uppercase tracking-[0.14em] text-[#c45d3a]">
          1:1 Mentorship
        </p>
        <h1 className="text-display mt-6 max-w-[20ch] text-[clamp(2.5rem,7vw,5rem)] text-[#1a1a1a]">
          Learn to <span className="accent-serif">build</span> with AI. One call
          at a time.
        </h1>
        <p className="mt-8 max-w-[54ch] text-[15px] leading-[1.75] text-[#4a4a4a]">
          Not a cohort. Not a Slack channel. A direct working relationship where
          every session ends with something running in your business — an
          automation, a system, an agent, a shipped feature.
        </p>
      </section>

      <section className="mx-auto max-w-[1280px] px-6 py-24 md:px-12 md:py-32">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#c45d3a]">
              How it works
            </p>
            <h2 className="text-display mt-4 text-[clamp(1.75rem,3.5vw,2.5rem)] text-[#1a1a1a]">
              Weekly 60-minute calls. Async support in between.
            </h2>
            <p className="mt-6 max-w-[42ch] text-[14px] leading-[1.75] text-[#4a4a4a]">
              We meet weekly, work on real projects on your screen, and I’m
              available async for stuck moments during the week. Minimum
              commitment: 4 weeks.
            </p>
          </div>
          <ul className="md:col-span-7 md:col-start-6">
            {outcomes.map((outcome, i) => (
              <Reveal
                key={outcome}
                as="li"
                delay={0.06 * i}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="flex items-start gap-4 border-b border-black/10 py-5 last:border-b-0"
              >
                <span className="mt-1 inline-flex size-6 shrink-0 items-center justify-center rounded-[5px] bg-[#b6ff00] text-[#0a0a0a]">
                  <Check size={14} strokeWidth={2.5} aria-hidden="true" />
                </span>
                <p className="text-[15px] text-[#1a1a1a]">{outcome}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-black/10 bg-[#ebe7df]">
        <div className="mx-auto flex max-w-[1280px] flex-col items-start gap-6 px-6 py-20 md:flex-row md:items-end md:justify-between md:px-12 md:py-28">
          <h2 className="text-display max-w-[22ch] text-[clamp(1.75rem,4vw,3rem)] text-[#1a1a1a]">
            Limited slots. Real work. Book a discovery call to see if we’re a
            fit.
          </h2>
          <a
            href="https://calendly.com/tayyabismail/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-[5px] bg-[#0a0a0a] px-6 py-3.5 text-[13px] font-semibold text-white transition-colors hover:bg-[#1a1a1a]"
          >
            Apply for Mentorship
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
