import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import { usePageMeta } from "@/hooks/usePageMeta";

const CALENDLY_URL = "https://calendly.com/tayyabismail/30min";

const CLIENT_LOGOS = [
  { src: "/assets/hca.png", alt: "HCA Healthcare UK" },
  { src: "/assets/london-estates.png", alt: "London Estates" },
  { src: "/assets/legal-solicitors.png", alt: "Legal Solicitors" },
  { src: "/assets/guhr.png", alt: "GUHR Steuerberatung" },
  { src: "/assets/mgp.png", alt: "MGP" },
  { src: "/assets/majori.png", alt: "Majori Consulting" },
  { src: "/assets/opoura.png", alt: "Opoura" },
  { src: "/assets/lhc.png", alt: "LHC" },
];

const STATS = [
  { value: "4+", label: "Years in AI" },
  { value: "30+", label: "AI Systems Deployed" },
  { value: "5×", label: "Avg. ROI Per Project" },
  { value: "12+", label: "Industries Served" },
];

const PILLARS = [
  {
    eyebrow: "01 — Services",
    title: "AI systems, built the way you'd build a business.",
    body: "Automations, custom agents, and AI-powered products that fit how your team actually operates.",
    linkTo: "/services",
    linkLabel: "Explore Services",
    reversed: false,
  },
  {
    eyebrow: "02 — About",
    title: "2.5 years inside the AI trenches.",
    body: "I stopped consuming tutorials and started shipping systems. Now I do the same for founders who need results, not another course.",
    linkTo: "/about",
    linkLabel: "About Tayyab",
    reversed: true,
  },
  {
    eyebrow: "03 — Mentorship",
    title: "Learn to build with AI, one-on-one.",
    body: "Direct 1:1 sessions. No fluff, no cohorts. You leave every call with something running in your business.",
    linkTo: "/mentorship",
    linkLabel: "See Mentorship",
    reversed: false,
  },
];

export default function Home() {
  usePageMeta(
    "AI Automation & Consulting | Tayyab Ismail — 30+ Systems Deployed",
    "Custom AI systems for businesses: workflow automation, AI voice agents, customer support bots, and custom software. 5× average ROI across 12+ industries. Book a free discovery call."
  );
  return (
    <main className="relative min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 md:pt-40">
        <div className="mx-auto max-w-[1280px] px-6 md:px-12">
          <Reveal as="p" y={8} onMount className="text-[13px] font-medium uppercase tracking-[0.14em] text-[#c45d3a]">
            AI Solutions &amp; Consulting
          </Reveal>
          <Reveal
            as="h1"
            y={16}
            delay={0.08}
            onMount
            className="text-display mt-6 max-w-[16ch] text-[clamp(2.5rem,8vw,6rem)] text-[#1a1a1a]"
          >
            Transform Your <span className="accent-serif">Growth</span>
            <br />
            with AI.
          </Reveal>
          <Reveal
            as="p"
            y={16}
            delay={0.16}
            onMount
            className="mt-8 max-w-[52ch] text-[15px] leading-[1.7] text-[#4a4a4a] md:text-[16px]"
          >
            Custom AI systems for businesses that refuse to fall behind. The biggest risk is moving too slowly while the
            world adapts to AI without you. If it feels safe to wait, it isn&rsquo;t.
          </Reveal>
          <Reveal y={12} delay={0.24} onMount className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-[5px] bg-[#b6ff00] px-6 py-3.5 text-[13px] font-semibold text-[#0a0a0a] transition-colors hover:bg-[#a3e600]"
            >
              Book a Free AI Strategy Call
            </a>
            <Link
              to="/services"
              className="inline-flex items-center rounded-[5px] border border-black/15 bg-transparent px-6 py-3.5 text-[13px] font-semibold text-[#1a1a1a] transition-colors hover:border-black/40 hover:bg-black/5"
            >
              Explore Services
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Worked with */}
      <section className="mt-24 md:mt-32">
        <div className="mx-auto max-w-[1280px] px-6 md:px-12">
          <p className="text-center text-[11px] font-semibold uppercase tracking-[0.24em] text-[color:var(--theme-muted)]">
            Worked With
          </p>
        </div>
        <div className="worked-with-marquee mt-8 py-2">
          <div className="worked-with-track">
            {[...CLIENT_LOGOS, ...CLIENT_LOGOS].map((logo, i) => (
              <div key={i} className="worked-with-item flex shrink-0 items-center justify-center">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  loading="lazy"
                  className="worked-with-logo max-h-10 w-auto object-contain md:max-h-12"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="mx-auto mt-24 max-w-[1280px] px-6 md:mt-32 md:px-12">
        <div className="grid grid-cols-2 gap-x-6 gap-y-8 border-y border-black/10 py-8 md:grid-cols-4">
          {STATS.map((stat) => (
            <div key={stat.label}>
              <p className="text-display text-[clamp(1.75rem,3vw,2.5rem)] text-[#1a1a1a]">{stat.value}</p>
              <p className="mt-1 text-[11px] uppercase tracking-[0.14em] text-[#8a8a8a]">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pillars */}
      <section className="mx-auto max-w-[1280px] px-6 py-24 md:px-12 md:py-32">
        <div className="flex flex-col gap-20 md:gap-28">
          {PILLARS.map((pillar) => (
            <Reveal
              as="article"
              key={pillar.eyebrow}
              y={24}
              className={`grid grid-cols-1 gap-8 md:grid-cols-12 md:gap-12 ${
                pillar.reversed ? "md:[&>*:first-child]:col-start-7" : ""
              }`}
            >
              <div className="md:col-span-6">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#c45d3a]">{pillar.eyebrow}</p>
                <h2 className="text-display mt-4 text-[clamp(1.75rem,4vw,3rem)] text-[#1a1a1a]">{pillar.title}</h2>
              </div>
              <div className="md:col-span-5 md:col-start-8">
                <p className="text-[15px] leading-[1.75] text-[#4a4a4a]">{pillar.body}</p>
                <Link
                  to={pillar.linkTo}
                  className="mt-6 inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#1a1a1a] hover:text-[#c45d3a]"
                >
                  {pillar.linkLabel} <ArrowUpRight size={14} />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-black/10 bg-[#ebe7df]">
        <div className="mx-auto flex max-w-[1280px] flex-col items-start gap-8 px-6 py-20 md:flex-row md:items-end md:justify-between md:px-12 md:py-28">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#c45d3a]">Ready when you are</p>
            <h2 className="text-display mt-4 max-w-[18ch] text-[clamp(2rem,5vw,3.5rem)] text-[#1a1a1a]">
              Let&rsquo;s put AI to work in your business.
            </h2>
          </div>
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-[5px] bg-[#0a0a0a] px-6 py-3.5 text-[13px] font-semibold text-white transition-colors hover:bg-[#1a1a1a]"
          >
            Book a Free AI Strategy Call
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
