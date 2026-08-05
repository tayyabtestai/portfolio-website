import { useState } from "react";
import { motion, useScroll } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight, Search } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { usePageMeta } from "@/hooks/usePageMeta";

type Post = {
  slug: string;
  title: string;
  description: string;
  category: string;
  categorySlug: string;
  image: string;
  imageAlt: string;
  date: string;
  readTime: number;
  eager?: boolean;
};

const CATEGORIES = [
  "All",
  "Customer Support",
  "Guides",
  "Machine Learning",
  "Custom Software",
  "Workflow Automation",
  "AI Voice",
  "AI Consulting",
];

const POSTS: Post[] = [
  {
    slug: "reduce-support-costs-with-ai",
    title: "How to Reduce Support Costs With AI Without Losing Customers",
    description:
      "A practical plan for lowering support costs with AI without turning your customer experience into a frustrating maze.",
    category: "Customer Support",
    categorySlug: "customer-support",
    image: "/assets/support-costs.jpg",
    imageAlt: "Support agent dashboard showing ticket volume trending down",
    date: "Jun 18, 2026",
    readTime: 5,
    eager: true,
  },
  {
    slug: "ai-readiness-assessment",
    title: "The AI Readiness Assessment: Are You Ready to Automate?",
    description:
      "Most failed AI projects fail before they start, because the business wasn't actually ready, and this checklist tells you where you stand.",
    category: "Guides",
    categorySlug: "guides",
    image: "/assets/ai-readiness.jpg",
    imageAlt:
      "Business owner checking off items on an AI readiness assessment checklist",
    date: "Jun 3, 2026",
    readTime: 5,
    eager: true,
  },
  {
    slug: "ai-chatbots-that-actually-solve-problems",
    title: "AI Chatbots That Actually Solve Problems",
    description:
      "A practical breakdown of what separates a chatbot that helps customers from one they abandon after one bad reply.",
    category: "Customer Support",
    categorySlug: "customer-support",
    image: "/assets/ai-chatbots.jpg",
    imageAlt: "Customer support chat interface on a laptop screen",
    date: "May 28, 2026",
    readTime: 5,
    eager: true,
  },
  {
    slug: "when-you-actually-need-machine-learning",
    title: "When You Actually Need Machine Learning (And When You Don't)",
    description:
      "Most business problems don't need machine learning; this guide gives a clear test for when they actually do.",
    category: "Machine Learning",
    categorySlug: "machine-learning",
    image: "/assets/when-you-need-ml.jpg",
    imageAlt:
      "A decision tree diagram comparing simple automation against machine learning",
    date: "May 20, 2026",
    readTime: 6,
  },
  {
    slug: "when-saas-stops-working-custom-ai-software",
    title: "When SaaS Stops Working: The Case for Custom AI Software",
    description:
      "When you're paying for five SaaS tools to force-fit your workflow, custom AI software often costs less and works better.",
    category: "Custom Software",
    categorySlug: "custom-software",
    image: "/assets/custom-software.jpg",
    imageAlt:
      "Business dashboard showing multiple disconnected software tools being replaced by one custom system",
    date: "May 11, 2026",
    readTime: 5,
  },
  {
    slug: "machine-learning-for-small-businesses",
    title: "Machine Learning for Small Businesses, Explained Simply",
    description:
      "Machine learning can help small businesses predict demand, catch fraud, and personalize offers, but only when the data and problem fit.",
    category: "Machine Learning",
    categorySlug: "machine-learning",
    image: "/assets/machine-learning-small-business.jpg",
    imageAlt:
      "A small business owner reviewing a dashboard of sales predictions on a laptop",
    date: "May 6, 2026",
    readTime: 6,
  },
];

const CATEGORY_LINKS = [
  { label: "Customer Support", slug: "customer-support" },
  { label: "Guides", slug: "guides" },
  { label: "Machine Learning", slug: "machine-learning" },
  { label: "Custom Software", slug: "custom-software" },
  { label: "Workflow Automation", slug: "workflow-automation" },
  { label: "AI Voice", slug: "ai-voice" },
  { label: "AI Consulting", slug: "ai-consulting" },
];

const Blog = () => {
  usePageMeta(
    "AI Systems Blog — Automation, Voice & ML Playbooks",
    "Practical guides on AI automation, voice agents, machine learning and custom software from Tayyab Ismail — 30+ systems shipped across 12+ industries."
  );
  const { scrollYProgress: progress } = useScroll();
  const [activeCategory, setActiveCategory] = useState("All");
  const [query, setQuery] = useState("");

  const filtered = POSTS.filter((post) => {
    const matchesCategory =
      activeCategory === "All" || post.category === activeCategory;
    const q = query.trim().toLowerCase();
    const matchesQuery =
      q === "" ||
      post.title.toLowerCase().includes(q) ||
      post.description.toLowerCase().includes(q) ||
      post.category.toLowerCase().includes(q);
    return matchesCategory && matchesQuery;
  });

  const articleCount = filtered.length;

  return (
    <div className="min-h-screen bg-[#f4f1eb]">
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-[2px] bg-[#b6ff00] shadow-[0_0_12px_rgba(182,255,0,0.5)]"
        style={{ transformOrigin: "0% 50%", scaleX: progress }}
      />
      <Navbar />
      <div className="mx-auto max-w-[1280px] px-6 pt-32 pb-24 md:px-12 md:pt-40 md:pb-32">
          <header className="flex flex-col gap-5">
            <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-[#c45d3a]">
              The Blog
            </p>
            <h1 className="text-display max-w-[22ch] text-[clamp(2rem,5vw,3.5rem)] leading-[1.05] text-[#1a1a1a]">
              AI systems, explained without the hype.
            </h1>
            <p className="max-w-[62ch] text-[15px] leading-[1.8] text-[#4a4a4a]">
              Field notes from building automation, voice agents, and machine
              learning systems for founders and operators. Every article is
              written from real deployments — with the numbers, the trade-offs,
              and the parts that broke.
            </p>
          </header>
          <div className="mt-12">
            <article className="group grid grid-cols-1 overflow-hidden rounded-[5px] border border-black/10 bg-[#fbfbf6] lg:grid-cols-[1.15fr_1fr]">
              <Link
                to="/blog/what-does-an-ai-consultant-actually-do"
                className="relative block aspect-[16/10] overflow-hidden bg-[#111111] lg:aspect-auto lg:h-full"
              >
                <img
                  src="/assets/ai-consultant.jpg"
                  alt="Consultant reviewing an AI automation workflow diagram with a client"
                  width={1280}
                  height={720}
                  fetchPriority="high"
                  decoding="async"
                  className="size-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </Link>
              <div className="flex flex-col justify-center gap-6 p-8 md:p-12">
                <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-[#c45d3a]">
                  Featured Article
                </p>
                <h2 className="text-display text-[clamp(1.5rem,3vw,2.25rem)] text-[#1a1a1a]">
                  <Link
                    to="/blog/what-does-an-ai-consultant-actually-do"
                    className="hover:underline"
                  >
                    What Does an AI Consultant Actually Do?
                  </Link>
                </h2>
                <p className="max-w-[46ch] text-[14px] leading-[1.75] text-[#4a4a4a]">
                  A plain-language breakdown of what AI consultants do day to
                  day, when to hire one, and how they differ from agencies and
                  freelancers.
                </p>
                <div className="flex flex-wrap items-center gap-4 border-t border-black/10 pt-6 text-[11px] uppercase tracking-[0.12em] text-[#8a8a8a]">
                  <span className="text-[#1a1a1a]">Tayyab Ismail</span>
                  <span>Apr 6, 2026</span>
                  <span>5 min read</span>
                </div>
                <Link
                  to="/blog/what-does-an-ai-consultant-actually-do"
                  className="inline-flex w-fit items-center gap-2 rounded-[5px] bg-[#b6ff00] px-5 py-3 text-[13px] font-semibold text-[#0a0a0a] transition-colors hover:bg-[#a3e600]"
                >
                  Read article <ArrowUpRight size={15} />
                </Link>
              </div>
            </article>
          </div>
          <section className="mt-16" aria-label="All articles">
            <div className="grid grid-cols-1 gap-5 border-y border-black/10 py-5 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
              <div className="relative">
                <Search
                  size={15}
                  className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-[#8a8a8a]"
                  aria-hidden="true"
                />
                <label htmlFor="blog-search" className="sr-only">
                  Search articles
                </label>
                <input
                  id="blog-search"
                  type="search"
                  maxLength={80}
                  placeholder="Search articles, topics, tools…"
                  className="w-full rounded-[5px] border border-black/15 bg-[#fbfbf6] py-3 pl-10 pr-4 text-[13.5px] text-[#1a1a1a] placeholder:text-[#8a8a8a] focus:border-[#1a1a1a] focus:outline-none"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
              </div>
              <div className="flex flex-wrap gap-2">
                {CATEGORIES.map((category) => (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setActiveCategory(category)}
                    className={`tap-target rounded-[5px] border px-3.5 py-2 text-[12px] transition-colors ${
                      activeCategory === category
                        ? "border-[#1a1a1a] bg-[#1a1a1a] text-[#f4f1eb]"
                        : "border-black/15 text-[#4a4a4a] hover:border-[#1a1a1a] hover:text-[#1a1a1a]"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
            <p className="mt-6 text-[12px] uppercase tracking-[0.12em] text-[#8a8a8a]">
              {articleCount} article{articleCount === 1 ? "" : "s"}
            </p>
            <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((post) => (
                <article
                  key={post.slug}
                  className="group relative flex flex-col overflow-hidden rounded-[5px] border border-black/10 bg-[#fbfbf6] transition-all duration-300 hover:-translate-y-1 hover:border-black/40 hover:shadow-[var(--shadow-hover)]"
                >
                  <Link
                    aria-label={post.title}
                    to={`/blog/${post.slug}`}
                    className="absolute inset-0 z-10"
                  ></Link>
                  <div className="aspect-[16/9] w-full overflow-hidden bg-[#111111]">
                    <img
                      src={post.image}
                      alt={post.imageAlt}
                      width={1280}
                      height={720}
                      loading={post.eager ? "eager" : "lazy"}
                      decoding="async"
                      className="size-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    />
                  </div>
                  <div className="flex flex-1 flex-col gap-4 p-6">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="text-[11px] font-medium uppercase tracking-[0.14em] text-[#c45d3a]">
                        {post.category}
                      </span>
                    </div>
                    <h3 className="text-display text-[18px] leading-[1.25] text-[#1a1a1a]">
                      {post.title}
                    </h3>
                    <p className="text-[13px] leading-[1.7] text-[#4a4a4a]">
                      {post.description}
                    </p>
                    <div className="mt-auto flex items-center justify-between gap-3 border-t border-black/10 pt-4 text-[11px] uppercase tracking-[0.12em] text-[#8a8a8a]">
                      <span>{post.date}</span>
                      <span>{post.readTime} min read</span>
                    </div>
                  </div>
                  <span className="sr-only">{post.categorySlug}</span>
                </article>
              ))}
            </div>
          </section>
          <section className="mt-16" aria-label="Browse by category">
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#8a8a8a]">
              Browse by category
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {CATEGORY_LINKS.map((cat) => (
                <button
                  key={cat.slug}
                  type="button"
                  onClick={() => setActiveCategory(cat.label)}
                  className="rounded-[5px] border border-black/15 px-3.5 py-2 text-[12px] text-[#4a4a4a] transition-colors hover:border-[#c45d3a] hover:text-[#c45d3a]"
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </section>
          <div className="mt-16">
            <section className="rounded-[5px] border border-black/10 bg-[#111111] p-8 md:p-12">
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#b6ff00]">
                Newsletter
              </p>
              <h2 className="text-display mt-3 max-w-[26ch] text-[clamp(1.35rem,2.6vw,2rem)] leading-[1.15] text-[#f4f1eb]">
                One practical AI system breakdown, every other week.
              </h2>
              <p className="mt-3 max-w-[52ch] text-[14px] leading-[1.8] text-[#c9c4bb]">
                Real builds, real numbers, no hype. Unsubscribe whenever.
              </p>
              <form
                className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center"
                onSubmit={(e) => e.preventDefault()}
              >
                <label htmlFor="newsletter-email" className="sr-only">
                  Email address
                </label>
                <input
                  id="newsletter-email"
                  type="email"
                  required
                  maxLength={255}
                  placeholder="you@company.com"
                  className="w-full rounded-[5px] border border-white/15 bg-white/[0.06] px-4 py-3 text-[14px] text-[#f4f1eb] placeholder:text-[#8a8a8a] focus:border-[#b6ff00] focus:outline-none sm:max-w-[320px]"
                />
                <button
                  type="submit"
                  className="tap-target inline-flex items-center justify-center rounded-[5px] bg-[#b6ff00] px-5 py-3 text-[13px] font-semibold text-[#0a0a0a] transition-colors hover:bg-[#a3e600] disabled:opacity-60"
                >
                  Subscribe
                </button>
              </form>
            </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Blog;
