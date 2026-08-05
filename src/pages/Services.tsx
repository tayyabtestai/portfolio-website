import { ArrowUpRight, Plus } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import { usePageMeta } from "@/hooks/usePageMeta";

type Service = {
  number: string;
  title: string;
  description: string;
  tags: string[];
};

const services: Service[] = [
  {
    number: "01",
    title: "AI / ML Solutions & Deployment",
    description:
      "Build machine learning systems tailored to your business data and goals. From predictive models to intelligent automation, every solution is developed, tested, and deployed for real-world business outcomes.",
    tags: [
      "Machine learning models",
      "Predictive analytics",
      "AI deployment",
      "Custom AI solutions",
    ],
  },
  {
    number: "02",
    title: "AI Workflow Automation",
    description:
      "Replace repetitive work with AI-powered workflows that operate around the clock. Automate emails, documents, approvals, CRM updates, and internal processes so your team can focus on higher-value work.",
    tags: [
      "Workflow automation",
      "Document processing",
      "Email automation",
      "CRM automation",
    ],
  },
  {
    number: "03",
    title: "AI Voice & Communication",
    description:
      "Never miss a lead, appointment, or customer inquiry. AI voice agents handle calls, qualify prospects, schedule meetings, and keep conversations moving 24/7.",
    tags: [
      "AI voice agents",
      "AI receptionist",
      "Call automation",
      "Lead qualification",
    ],
  },
  {
    number: "04",
    title: "Customer Support Systems",
    description:
      "Deliver instant support across every customer touchpoint. AI agents answer questions, route tickets, and provide accurate responses using your company's knowledge and documentation.",
    tags: ["AI chatbots", "Knowledge agents", "Ticket routing", "Customer support"],
  },
  {
    number: "05",
    title: "Custom Software & AI Development",
    description:
      "Build custom AI software designed around your workflow and operations. From internal tools to customer-facing applications, every system is tailored to your business requirements.",
    tags: ["Custom AI agents", "AI applications", "API integrations", "RAG systems"],
  },
  {
    number: "06",
    title: "AI Development & Consulting",
    description:
      "Help your team adopt modern AI tools with confidence. From setup and implementation to workflow design and training, I guide businesses in using today's leading AI development platforms effectively.",
    tags: ["Claude Code", "Cursor", "Lovable", "Codex"],
  },
];

type Faq = {
  question: string;
  answer: string;
};

const faqs: Faq[] = [
  {
    question: "What does an AI consultant actually do?",
    answer:
      "An AI consultant diagnoses your business operations, identifies where AI can eliminate repetitive work or unlock growth, then builds and deploys the system end-to-end. Unlike agencies that hand you a strategy deck, I ship working automations, voice agents, and custom software that your team uses from day one.",
  },
  {
    question: "How much does it cost to hire an AI consultant?",
    answer:
      "Most projects range from $3,000 to $25,000 depending on scope and complexity. Simple workflow automations start lower; custom AI voice agents and multi-system integrations require more investment. I offer fixed project pricing, hybrid models, and performance-based fees tied to measurable outcomes like hours saved or leads recovered.",
  },
  {
    question: "What is AI workflow automation and how does it work?",
    answer:
      "AI workflow automation uses intelligent systems to handle repetitive business tasks — processing emails, classifying documents, updating CRMs, routing approvals — without human intervention. Unlike traditional software that just stores data, AI workflows learn your patterns, make decisions within rules you set, and operate 24/7.",
  },
  {
    question:
      "Can AI voice agents really sound natural and handle real conversations?",
    answer:
      "Yes. Modern AI voice agents use large language models and natural language processing to understand context, remember conversation history, and respond in a human-like tone. They handle inbound calls, qualify leads, schedule appointments, and route urgent issues — all while sounding professional and on-brand.",
  },
  {
    question: "What industries do you specialize in for AI automation?",
    answer:
      "I've deployed AI systems across real estate, legal, healthcare, dental, med spas, HVAC, plumbing, solar, roofing, gyms, insurance, accounting, marketing agencies, SaaS, and professional services. The common thread: businesses with repetitive tasks, high call volume, or scaling pain that AI can eliminate.",
  },
  {
    question: "How long does it take to build and deploy an AI system?",
    answer:
      "Most systems ship in phases within 2–6 weeks. Simple automations like email processing or CRM updates can be live in days. Complex multi-agent systems or custom voice agents typically take 4–8 weeks. Each phase delivers something working before moving to the next, so you see results early.",
  },
  {
    question: "Do I need technical knowledge to use the AI systems you build?",
    answer:
      "No. Every system is built for non-technical users with intuitive interfaces and full documentation. Most clients run independently within weeks. I handle all technical complexity during build and deployment; you get the business results without writing a single line of code.",
  },
  {
    question: "What AI tools and platforms do you use?",
    answer:
      "I work with the leading AI development platforms including Claude Code, Cursor, Lovable, and Codex for rapid development. For automation and orchestration, I use LangGraph, n8n, and custom multi-agent systems. For infrastructure, I deploy on local hardware (Mac Mini, GPU servers), VPS, or cloud — whatever fits your privacy and cost requirements.",
  },
  {
    question:
      "Can AI automation integrate with my existing tools like QuickBooks, Salesforce, or my CRM?",
    answer:
      "Yes. I build integrations with popular business tools including QuickBooks, Xero, Salesforce, HubSpot, Zoho, Slack, Microsoft Teams, Google Workspace, and most modern CRMs. Custom API integrations can also connect legacy or proprietary systems into one coherent workflow.",
  },
  {
    question: "Is my business data safe with AI automation?",
    answer:
      "Absolutely. I offer local and private AI deployment with zero cloud dependency for sensitive data. All systems include prompt injection protection, access controls, and audit logging. Your business data never trains public AI models, and infrastructure can be configured to keep everything on your own hardware.",
  },
  {
    question:
      "What's the difference between AI automation and hiring a virtual assistant?",
    answer:
      "A virtual assistant handles tasks one at a time, during working hours, with human speed and error rates. AI automation handles thousands of tasks simultaneously, 24/7, with consistent accuracy and zero fatigue. One AI voice agent can answer 50 calls at once — something no human team can match.",
  },
  {
    question: "What is the ROI of AI automation for small businesses?",
    answer:
      "Clients typically see 3–5× ROI within 90 days. Common returns include $5,000–$50,000 per month in labor savings, 40–60% more leads captured through 24/7 AI voice agents, 30–50% faster invoice payment, and elimination of 3–5 separate SaaS subscriptions by building one unified system.",
  },
  {
    question: "Do you offer ongoing support or is it one-time delivery?",
    answer:
      "Most clients are running independently within weeks with full documentation. No retainers required unless you want one. I deliver phased handovers so your team owns the system. Optional support is available for optimization, scaling, or adding new features as your business grows.",
  },
  {
    question: "How do I know which AI service my business needs?",
    answer:
      "Book a free 30-minute AI strategy call. I'll diagnose your biggest automation opportunity, map your current workflow, and recommend the right service — whether that's a simple email automation, a full AI voice system, or custom software. No obligation, no sales pressure.",
  },
];

export default function Services() {
  usePageMeta(
    "AI / ML Solutions & Deployment | AI Automation Services | Workflow, Voice, Support & Custom AI",
    "End-to-end AI automation services: workflow automation, AI voice agents, customer support systems, and custom AI development. No retainers. Systems shipped in weeks."
  );
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <section className="mx-auto max-w-[1280px] px-6 pt-32 md:px-12 md:pt-40">
        <p className="text-[13px] font-medium uppercase tracking-[0.14em] text-[#c45d3a]">
          Services
        </p>
        <h1 className="text-display mt-6 max-w-[18ch] text-[clamp(2.5rem,7vw,5rem)] text-[#1a1a1a]">
          Systems that <span className="accent-serif">work</span> while you focus
          on what matters.
        </h1>
        <p className="mt-8 max-w-[54ch] text-[15px] leading-[1.75] text-[#4a4a4a]">
          Every engagement is scoped, shipped, and handed over with
          documentation. No retainers unless you want one — most clients are
          running independently within weeks.
        </p>
      </section>
      <section className="mx-auto max-w-[1280px] px-6 py-24 md:px-12 md:py-32">
        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-[5px] border border-black/10 bg-black/10 md:grid-cols-2">
          {services.map((service) => (
            <Reveal
              key={service.number}
              as="article"
              y={20}
              className="group flex flex-col gap-6 bg-[#f4f1eb] p-8 transition-colors hover:bg-[#ebe7df] md:p-12"
            >
              <div className="flex items-baseline justify-between">
                <span className="text-[13px] font-semibold text-[#c45d3a]">
                  {service.number}
                </span>
                <ArrowUpRight
                  size={18}
                  className="text-[#8a8a8a] transition-colors group-hover:text-[#1a1a1a]"
                  aria-hidden="true"
                />
              </div>
              <h2 className="text-display text-[clamp(1.5rem,2.5vw,2rem)] text-[#1a1a1a]">
                {service.title}
              </h2>
              <p className="max-w-[46ch] text-[14px] leading-[1.75] text-[#4a4a4a]">
                {service.description}
              </p>
              <ul className="mt-auto flex flex-wrap gap-2 pt-4">
                {service.tags.map((tag) => (
                  <li
                    key={tag}
                    className="inline-flex items-center rounded-[5px] border border-black/15 bg-[#f4f1eb] px-3 py-1.5 text-[11px] font-medium text-[#4a4a4a]"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </section>
      <section className="border-t border-black/10">
        <div className="mx-auto max-w-[1280px] px-6 py-24 md:px-12 md:py-32">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-[minmax(0,1fr)_minmax(0,1.5fr)] md:gap-16">
            <div>
              <p className="eyebrow text-[13px] font-medium uppercase tracking-[0.14em] text-[#c45d3a]">
                FAQ
              </p>
              <h2 className="text-display mt-6 text-[clamp(2rem,5vw,3.5rem)] leading-[1.05] text-[#1a1a1a]">
                Questions? <span className="accent-serif">Answered.</span>
              </h2>
              <p className="mt-6 max-w-[36ch] text-[14px] leading-[1.75] text-[#4a4a4a]">
                Everything founders and operators ask before we start. Still
                curious? Book a call and we'll cover the rest.
              </p>
            </div>
            <div className="divide-y divide-black/10 border-y border-black/10">
              {faqs.map((faq) => (
                <details key={faq.question} className="faq-item group py-5 md:py-6">
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-6">
                    <h3 className="text-display text-[clamp(1.05rem,1.6vw,1.35rem)] leading-[1.35] text-[#1a1a1a]">
                      {faq.question}
                    </h3>
                    <span className="mt-1 flex size-8 shrink-0 items-center justify-center rounded-full border border-black/15 text-[#1a1a1a] transition-transform duration-300 group-open:rotate-45">
                      <Plus size={16} aria-hidden="true" />
                    </span>
                  </summary>
                  <p className="mt-4 max-w-[64ch] text-[14px] leading-[1.75] text-[#4a4a4a]">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="border-t border-black/10 bg-[#ebe7df]">
        <div className="mx-auto flex max-w-[1280px] flex-col items-start gap-6 px-6 py-20 md:flex-row md:items-end md:justify-between md:px-12 md:py-28">
          <h2 className="text-display max-w-[20ch] text-[clamp(1.75rem,4vw,3rem)] text-[#1a1a1a]">
            Not sure which service fits? Let&rsquo;s figure it out in 30 minutes.
          </h2>
          <a
            href="https://calendly.com/tayyabismail/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-[5px] bg-[#b6ff00] px-6 py-3.5 text-[13px] font-semibold text-[#0a0a0a] transition-colors hover:bg-[#a3e600]"
          >
            Book a Free AI Strategy Call
          </a>
        </div>
      </section>
      <Footer />
    </main>
  );
}
