import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";

const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/mentorship", label: "1:1 Mentorship" },
  { to: "/blog", label: "Blog" },
];

const CALENDLY_URL = "https://calendly.com/tayyabismail/30min";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { dark, toggle } = useTheme();

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b transition-colors border-transparent bg-[#f4f1eb]/60 backdrop-blur">
      <nav className="mx-auto flex w-full max-w-[1280px] items-center justify-between gap-3 px-6 py-4 md:px-12">
        <Link to="/" className="flex items-center gap-3">
          <span className="relative inline-block size-9 overflow-hidden rounded-full ring-1 ring-black/10 dark:ring-white/10">
            <img
              src="/assets/tayyab-logo.png"
              alt=""
              width={44}
              height={44}
              className="absolute inset-0 size-full scale-[1.12] object-cover object-center"
            />
          </span>
          <span className="text-[15px] font-bold tracking-tight text-[#1a1a1a]">Tayyab Ismail</span>
        </Link>
        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `text-[13px] transition-colors ${
                  isActive ? "text-[#1a1a1a] font-semibold" : "text-[#8a8a8a] hover:text-[#1a1a1a]"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>
        <div className="hidden items-center gap-2 md:flex">
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-[5px] bg-[#b6ff00] px-4 py-2.5 text-[13px] font-semibold text-[#0a0a0a] transition-colors hover:bg-[#a3e600]"
          >
            Book a Call
          </a>
          <button
            type="button"
            aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
            onClick={toggle}
            className="tap-target inline-flex items-center justify-center rounded-[5px] border border-[color:var(--theme-border)] bg-transparent p-2.5 text-[color:var(--theme-fg)] transition-colors hover:bg-black/5 dark:hover:bg-white/5"
          >
            {dark ? <Sun size={16} /> : <Moon size={16} />}
          </button>
        </div>
        <button
          aria-label="Menu"
          onClick={() => setOpen((o) => !o)}
          className="tap-target rounded-[5px] border border-black/10 p-2 md:hidden"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>
      {open && (
        <div className="border-t border-black/10 bg-[#f4f1eb] md:hidden">
          <div className="mx-auto flex max-w-[1280px] flex-col gap-1 px-6 py-4">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className="rounded-[5px] px-3 py-2.5 text-sm text-[#1a1a1a] hover:bg-black/5"
              >
                {link.label}
              </NavLink>
            ))}
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center justify-center rounded-[5px] bg-[#b6ff00] px-4 py-2.5 text-sm font-semibold text-[#0a0a0a]"
            >
              Book a Call
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
