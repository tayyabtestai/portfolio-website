import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import { usePageMeta } from "@/hooks/usePageMeta";

interface Stat {
  value: string;
  label: string;
}

const stats: Stat[] = [
  { value: "2.5+", label: "Years" },
  { value: "50+", label: "Tools tested" },
  { value: "365", label: "Daily posts" },
  { value: "0", label: "Code required" },
];

interface Faq {
  question: string;
  answer: string;
}

const faqs: Faq[] = [
  {
    question: "Who is Tayyab Ismail?",
    answer:
      "Tayyab Ismail is a Senior Data & AI Engineer with 5+ years building and deploying AI systems for businesses across the US, UK, Germany, Australia, India, and Europe. He operates as a solo consultant — handling strategy, build, and deployment personally with no handoffs to junior team members.",
  },
  {
    question: "What is your background in AI and technology?",
    answer:
      "I started in biotechnology and pivoted into AI through hands-on experimentation — not a traditional computer science degree path. I'm a self-taught builder who ships fast, working products using modern AI-assisted tooling like Claude Code, Cursor, and Lovable. This practical background means I focus on business outcomes, not theoretical perfection.",
  },
  {
    question: "How many AI systems have you deployed?",
    answer:
      "Over 30 AI systems deployed across 12+ industries including healthcare, legal, real estate, home services, dental, marketing, and SaaS. Each system is custom-built for the client's specific workflow — no templates, no cookie-cutter solutions.",
  },
  {
    question: "Where are you based and where do your clients come from?",
    answer:
      "I'm based in Pakistan and serve clients globally — primarily in the US, UK, Germany, Australia, India, and broader Europe and Asia. All work is done remotely with structured discovery calls, async communication, and phased delivery.",
  },
  {
    question: "How can I verify your work before booking a call?",
    answer:
      "My work is documented publicly on GitHub — you can judge the quality before we ever speak. I also share case studies and client results on my website. No black box delivery; everything is transparent.",
  },
];

const About = () => {
  usePageMeta(
    "About Tayyab Ismail | Senior Data & AI Engineer",
    "Tayyab Ismail: 5+ years building AI systems for businesses across US, UK, Germany, Australia, and India. Solo operator. No handoffs. Strategy through deployment."
  );
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <section className="mx-auto max-w-[1280px] px-6 pt-32 md:px-12 md:pt-40">
        <p className="text-[13px] font-medium uppercase tracking-[0.14em] text-[#c45d3a]">About</p>
        <h1 className="text-display mt-6 max-w-[18ch] text-[clamp(2.5rem,7vw,5.5rem)] text-[#1a1a1a]">
          2.5 years in the <span className="accent-serif">AI trenches</span>.
        </h1>
      </section>
      <section className="mx-auto max-w-[1280px] px-6 py-24 md:px-12 md:py-32">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-16">
          <Reveal y={20} className="md:col-span-5">
            <div className="overflow-hidden rounded-[5px] border border-black/10">
              <img
                src="/assets/about-tayyab.png"
                alt="Tayyab Ismail at his workspace"
                width={1024}
                height={1400}
                loading="lazy"
                className="aspect-[4/5] w-full object-cover object-top"
              />
            </div>
          </Reveal>
          <Reveal y={20} className="md:col-span-7">
            <div className="space-y-6 text-[15px] leading-[1.8] text-[#4a4a4a]">
              <p>
                <span className="font-semibold text-[#1a1a1a]">Most people talk about AI. I build with it.</span> For
                the past 2.5 years I’ve been deep inside the AI ecosystem — testing tools, shipping systems, and
                helping founders get real results.
              </p>
              <p>
                I started where most of my clients are now: overwhelmed. Tabs open everywhere. Watching tutorials and
                still feeling behind.{" "}
                <span className="font-semibold text-[#1a1a1a]">Then I stopped consuming and started building.</span>
              </p>
              <p>
                Today I help non-technical founders, solopreneurs, and marketers use AI to build MVPs in days,
                automate repetitive work, run content systems on autopilot, and generate inbound leads on LinkedIn.
              </p>
            </div>
            <div className="mt-12 grid grid-cols-2 gap-x-8 gap-y-8 border-t border-black/10 pt-10 md:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-display text-[clamp(1.5rem,2.5vw,2rem)] text-[#1a1a1a]">{stat.value}</p>
                  <p className="mt-1 text-[11px] uppercase tracking-[0.14em] text-[#8a8a8a]">{stat.label}</p>
                </div>
              ))}
            </div>
            <a
              href="https://calendly.com/tayyabismail/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-12 inline-flex items-center rounded-[5px] bg-[#b6ff00] px-6 py-3.5 text-[13px] font-semibold text-[#0a0a0a] transition-colors hover:bg-[#a3e600]"
            >
              Book a Free AI Strategy Call
            </a>
          </Reveal>
        </div>
      </section>
      <section className="mx-auto max-w-[1280px] px-6 pb-24 md:px-12 md:pb-32">
        <div className="mx-auto max-w-[820px]">
          <p className="text-[13px] font-medium uppercase tracking-[0.14em] text-[#c45d3a]">About the Work</p>
          <h2 className="text-display mt-4 text-[clamp(1.75rem,4vw,2.5rem)] text-[#1a1a1a]">Questions? Answered.</h2>
          <div className="mt-10 space-y-4">
            {faqs.map((faq) => (
              <details key={faq.question} className="group surface-card rounded-[5px] overflow-hidden">
                <summary className="flex cursor-pointer list-none items-center justify-between px-5 py-5 md:px-6 md:py-6">
                  <h3 className="text-[15px] font-semibold text-[#1a1a1a] pr-4">{faq.question}</h3>
                  <span className="flex-shrink-0 text-[#c45d3a] transition-transform group-open:rotate-180">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        d="M3 5L7 9L11 5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </summary>
                <div className="px-5 pb-6 md:px-6 md:pb-7">
                  <p className="text-[14px] leading-[1.8] text-[#4a4a4a]">{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default About;
