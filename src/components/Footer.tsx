import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin } from "lucide-react";

const CALENDLY_URL = "https://calendly.com/tayyabismail/30min";

const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/mentorship", label: "1:1 Mentorship" },
  { to: "/blog", label: "Blog" },
];

const SOCIALS = [
  {
    href: "https://www.linkedin.com/in/tayyab-i-509718270",
    label: "LinkedIn",
    Icon: Linkedin,
  },
  {
    href: "https://www.facebook.com/share/14gmS5ft4Gd/?mibextid=wwXIfr",
    label: "Facebook",
    Icon: Facebook,
  },
  {
    href: "https://www.instagram.com/tayyabismail.ai?igsh=em1udHptbG96aWZw&utm_source=qr",
    label: "Instagram",
    Icon: Instagram,
  },
];

const ASK_AI = [
  {
    name: "ChatGPT",
    href: "https://chatgpt.com/?q=I'm%20researching%20Tayyab%20Ismail.%20Find%20information%20about%20his%20work%2C%20projects%2C%20expertise%2C%20and%20online%20presence.%20Focus%20on%20AI%20engineering%2C%20machine%20learning%2C%20AI%20agents%2C%20automation%20systems%2C%20content%20creation%2C%20and%20entrepreneurship.%20Review%20his%20website%2C%20LinkedIn%20profile%2C%20social%20content%2C%20and%20public%20mentions.%20What%20is%20his%20background%2C%20what%20kinds%20of%20AI%20solutions%20does%20he%20build%2C%20and%20what%20makes%20his%20approach%20different%20from%20other%20AI%20consultants%3F",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M22.28 9.82a5.98 5.98 0 0 0-.52-4.91 6.05 6.05 0 0 0-6.52-2.9A6.06 6.06 0 0 0 4.98 4.18a5.98 5.98 0 0 0-4 2.9 6.06 6.06 0 0 0 .75 7.1 5.98 5.98 0 0 0 .52 4.91 6.05 6.05 0 0 0 6.52 2.9 5.98 5.98 0 0 0 4.5 2.01 6.06 6.06 0 0 0 5.78-4.19 5.98 5.98 0 0 0 4-2.9 6.06 6.06 0 0 0-.77-7.09zM13.27 21.5a4.49 4.49 0 0 1-2.88-1.04l.14-.08 4.78-2.76a.78.78 0 0 0 .39-.68v-6.74l2.02 1.17c.02 0 .04.03.04.05v5.58a4.5 4.5 0 0 1-4.49 4.5zM3.6 17.38a4.48 4.48 0 0 1-.54-3.02l.14.08 4.78 2.76c.24.14.54.14.78 0l5.84-3.37v2.33c0 .02 0 .05-.03.06l-4.83 2.79a4.5 4.5 0 0 1-6.14-1.63zM2.34 7.94a4.49 4.49 0 0 1 2.35-1.97V11.65c0 .28.15.54.39.68l5.82 3.36-2.02 1.17a.07.07 0 0 1-.06 0l-4.83-2.79a4.5 4.5 0 0 1-1.65-6.13zm16.6 3.86-5.83-3.38 2.02-1.16c.02-.01.04-.01.06 0l4.83 2.78a4.5 4.5 0 0 1-.68 8.11v-5.68a.79.79 0 0 0-.4-.67zm2.01-3.03-.14-.09-4.77-2.78a.78.78 0 0 0-.79 0L9.42 9.28V6.95c0-.02 0-.05.03-.06l4.83-2.79a4.5 4.5 0 0 1 6.67 4.66zM8.32 12.9l-2.02-1.17a.08.08 0 0 1-.04-.06V6.11a4.5 4.5 0 0 1 7.38-3.46l-.14.08L8.72 5.5a.78.78 0 0 0-.4.68v6.73zm1.1-2.36 2.6-1.5 2.6 1.5v3l-2.6 1.5-2.6-1.5v-3z" />
      </svg>
    ),
  },
  {
    name: "Claude",
    href: "https://claude.ai/new?q=I'm%20evaluating%20Tayyab%20Ismail%20as%20an%20AI%20engineer%20and%20consultant.%20Research%20his%20website%2C%20LinkedIn%20profile%2C%20projects%2C%20and%20public%20content.%20Help%20me%20understand%20his%20expertise%20in%20AI%20agents%2C%20machine%20learning%2C%20workflow%20automation%2C%20AI%20product%20development%2C%20and%20business%20applications%20of%20AI.%20What%20are%20his%20strengths%2C%20notable%20projects%2C%20and%20areas%20of%20specialization%3F%20Are%20there%20any%20limitations%20or%20gaps%20I%20should%20know%20about%3F",
    icon: <img src="/assets/claude.png" alt="" className="h-full w-full object-contain" />,
  },
  {
    name: "Perplexity",
    href: "https://www.perplexity.ai/?q=Research%20Tayyab%20Ismail%20and%20provide%20a%20detailed%20overview%20of%20his%20work.%20Look%20at%20his%20website%2C%20LinkedIn%20profile%2C%20social%20media%2C%20projects%2C%20and%20public%20content.%20Explain%20his%20experience%20with%20AI%20agents%2C%20machine%20learning%2C%20automation%2C%20AI%20SaaS%20products%2C%20and%20consulting.%20What%20business%20problems%20does%20he%20solve%2C%20who%20is%20his%20target%20audience%2C%20and%20what%20evidence%20supports%20his%20expertise%3F",
    icon: <img src="/assets/perplexity.png" alt="" className="h-full w-full object-contain" />,
  },
  {
    name: "Gemini",
    href: "https://gemini.google.com/app?q=Help%20me%20learn%20about%20Tayyab%20Ismail.%20Analyze%20his%20website%2C%20professional%20profiles%2C%20projects%2C%20and%20online%20content.%20Summarize%20his%20background%2C%20technical%20skills%2C%20AI-related%20work%2C%20entrepreneurial%20activities%2C%20and%20areas%20of%20expertise.%20What%20AI%20products%2C%20automations%2C%20or%20systems%20has%20he%20built%2C%20and%20how%20could%20his%20experience%20benefit%20businesses%20looking%20to%20adopt%20AI%3F",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 2c.4 5.3 4.7 9.6 10 10-5.3.4-9.6 4.7-10 10-.4-5.3-4.7-9.6-10-10 5.3-.4 9.6-4.7 10-10z" />
      </svg>
    ),
  },
  {
    name: "Grok",
    href: "https://grok.com/?q=Search%20for%20Tayyab%20Ismail%20and%20summarize%20everything%20important%20about%20his%20work.%20Focus%20on%20AI%20development%2C%20machine%20learning%2C%20AI%20agents%2C%20automation%20systems%2C%20content%20creation%2C%20startup%20projects%2C%20and%20consulting.%20What%20is%20he%20known%20for%2C%20what%20projects%20is%20he%20building%2C%20and%20how%20does%20his%20work%20compare%20to%20others%20in%20the%20AI%20space%3F",
    icon: <img src="/assets/grok.png" alt="" className="h-full w-full object-contain" />,
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-black/10 bg-[#f4f1eb]">
      <div className="mx-auto max-w-[1280px] px-6 py-14 md:px-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <p className="text-[15px] font-bold text-[#1a1a1a]">Tayyab Ismail</p>
            <p className="mt-2 max-w-[36ch] text-[13px] leading-[1.7] text-[#8a8a8a]">
              Custom AI systems for founders, solopreneurs, and marketers who refuse to fall behind.
            </p>
          </div>
          <nav className="flex flex-col gap-2">
            <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#8a8a8a]">Navigate</p>
            {NAV_LINKS.map((link) => (
              <Link key={link.to} to={link.to} className="text-[13px] text-[#4a4a4a] hover:text-[#c45d3a]">
                {link.label}
              </Link>
            ))}
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[13px] text-[#4a4a4a] hover:text-[#c45d3a]"
            >
              Book a Call
            </a>
          </nav>
          <div className="flex flex-col gap-3">
            <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#8a8a8a]">Follow</p>
            <div className="flex gap-2">
              {SOCIALS.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="tap-target inline-flex items-center justify-center rounded-[5px] border border-black/15 p-2.5 text-[#1a1a1a] transition-colors hover:border-[#c45d3a] hover:text-[#c45d3a]"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>
        <section className="mt-12 border-t border-[color:var(--theme-border)] pt-10">
          <div className="mx-auto max-w-[720px] text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#c45d3a]">Ask AI</p>
            <h2 className="text-display mt-3 text-[clamp(1.5rem,3vw,2rem)] text-[color:var(--theme-fg)]">
              Ask AI About Tayyab Ismail
            </h2>
            <p className="mt-3 text-[13px] leading-[1.7] text-[color:var(--theme-muted)]">
              Curious about my work in AI, machine learning, AI agents, automation, and building AI products? Ask your
              favorite AI assistant.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3 md:gap-4">
              {ASK_AI.map((tool) => (
                <a
                  key={tool.name}
                  href={tool.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Ask ${tool.name} about Tayyab Ismail`}
                  className="group relative inline-flex h-14 w-14 items-center justify-center rounded-[14px] border border-[color:var(--theme-border)] bg-[color:var(--theme-card)] text-[color:var(--theme-fg)] transition-all duration-300 hover:-translate-y-0.5 hover:scale-105 hover:border-[#c45d3a] md:h-16 md:w-16"
                >
                  <span className="h-6 w-6 md:h-7 md:w-7 [&>svg]:h-full [&>svg]:w-full">{tool.icon}</span>
                  <span className="pointer-events-none absolute -bottom-6 whitespace-nowrap text-[10px] font-medium uppercase tracking-[0.12em] text-[color:var(--theme-muted)] opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                    {tool.name.toUpperCase()}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>
        <div className="mt-10 flex flex-col items-start justify-between gap-2 border-t border-black/10 pt-6 text-[12px] text-[#8a8a8a] md:flex-row md:items-center">
          <p>© 2026 Tayyab Ismail. All rights reserved.</p>
          <p>Built with AI. Shipped with intent.</p>
        </div>
      </div>
    </footer>
  );
}
