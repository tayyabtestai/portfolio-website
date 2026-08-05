import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { motion, useScroll } from "framer-motion";
import { Plus } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { usePageMeta } from "@/hooks/usePageMeta";
import { ARTICLES, type Article } from "@/data/posts";

const CONTAINER = "mx-auto max-w-[1280px] px-6 md:px-12";
const PROSE = "max-w-[68ch]";

function ArticleCard({ article }: { article: Article }) {
  return (
    <Link
      to={`/blog/${article.slug}`}
      className="group relative flex flex-col overflow-hidden rounded-[5px] border border-black/10 bg-[#fbfbf6] transition-all duration-300 hover:-translate-y-1 hover:border-black/40 hover:shadow-[var(--shadow-hover)]"
    >
      <div className="aspect-[16/9] w-full overflow-hidden bg-[#111111]">
        <img
          src={article.image}
          alt={article.imageAlt}
          width={1280}
          height={720}
          loading="lazy"
          decoding="async"
          className="size-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
        />
      </div>
      <div className="flex flex-1 flex-col gap-4 p-6">
        <div className="flex flex-wrap items-center gap-3">
          <span className="text-[11px] font-medium uppercase tracking-[0.14em] text-[#c45d3a]">
            {article.category}
          </span>
        </div>
        <h3 className="text-display text-[18px] leading-[1.25] text-[#1a1a1a]">
          {article.title}
        </h3>
        <p className="text-[13px] leading-[1.7] text-[#4a4a4a]">
          {article.description}
        </p>
        <div className="mt-auto flex items-center justify-between gap-3 border-t border-black/10 pt-4 text-[11px] uppercase tracking-[0.12em] text-[#8a8a8a]">
          <span>{article.date}</span>
          <span>{article.readTime} min read</span>
        </div>
      </div>
    </Link>
  );
}

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const { scrollYProgress: progress } = useScroll();
  const article = ARTICLES.find((entry) => entry.slug === slug);

  usePageMeta(
    article
      ? `${article.title} | Tayyab Ismail`
      : "Article not found | Tayyab Ismail",
    article
      ? article.excerpt
      : "That article does not exist. Browse every AI automation, voice and machine learning guide on the blog."
  );

  useEffect(() => {
    if (!article) return;
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify([
      {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: article.title,
        description: article.excerpt,
        datePublished: article.date,
        image: `${window.location.origin}${article.image}`,
        keywords: article.keywords.join(", "),
        articleSection: article.category,
        author: {
          "@type": "Person",
          name: "Tayyab Ismail",
        },
        publisher: {
          "@type": "Person",
          name: "Tayyab Ismail",
        },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": window.location.href,
        },
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: article.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.a,
          },
        })),
      },
    ]);
    document.head.appendChild(script);
    return () => {
      script.remove();
    };
  }, [article]);

  if (!article) {
    return (
      <main className="relative min-h-screen">
        <Navbar />
        <section className="mx-auto max-w-[1280px] px-6 pt-32 pb-32 md:px-12 md:pt-40">
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#c45d3a]">
            404
          </p>
          <h1 className="text-display mt-4 max-w-[24ch] text-[clamp(2rem,5vw,3.5rem)] text-[#1a1a1a]">
            Article not found
          </h1>
          <p className="mt-6 max-w-[52ch] text-[15px] leading-[1.85] text-[#4a4a4a]">
            This article does not exist or has moved. Everything published so
            far is listed on the blog.
          </p>
          <Link
            to="/blog"
            className="mt-8 inline-flex items-center rounded-[5px] bg-[#b6ff00] px-6 py-3.5 text-[13px] font-semibold text-[#0a0a0a] transition-colors hover:bg-[#a3e600]"
          >
            Back to the blog
          </Link>
        </section>
        <Footer />
      </main>
    );
  }

  const related = article.related
    .map((relatedSlug) => ARTICLES.find((entry) => entry.slug === relatedSlug))
    .filter((entry): entry is Article => Boolean(entry));

  return (
    <main className="relative min-h-screen">
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-[2px] bg-[#b6ff00] shadow-[0_0_12px_rgba(182,255,0,0.5)]"
        style={{ transformOrigin: "0% 50%", scaleX: progress }}
      />
      <Navbar />

      <section className="mx-auto max-w-[1280px] px-6 pt-32 md:px-12 md:pt-40">
        <nav aria-label="Breadcrumb">
          <Link
            to="/blog"
            className="text-[11px] uppercase tracking-[0.14em] text-[#8a8a8a] transition-colors hover:text-[#1a1a1a]"
          >
            The Blog
          </Link>
        </nav>
        <p className="mt-8 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#c45d3a]">
          {article.category}
        </p>
        <h1 className="text-display mt-4 max-w-[24ch] text-[clamp(2rem,5vw,3.5rem)] text-[#1a1a1a]">
          {article.title}
        </h1>
        <div className="mt-8 flex flex-wrap items-center gap-4 border-t border-black/10 pt-6 text-[11px] uppercase tracking-[0.14em] text-[#8a8a8a]">
          <span className="text-[#1a1a1a]">Tayyab Ismail</span>
          <span>{article.date}</span>
          <span>{article.readTime} min read</span>
        </div>
        <div className={`${PROSE} mt-10 rounded-[5px] border border-black/10 bg-[#fbfbf6] p-6 md:p-8`}>
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#8a8a8a]">
            The short answer
          </p>
          <p className="mt-3 text-[16px] leading-[1.8] text-[#1a1a1a]">
            {article.excerpt}
          </p>
        </div>
      </section>

      <div className={`${CONTAINER} mt-12`}>
        <img
          src={article.image}
          alt={article.imageAlt}
          width={1280}
          height={720}
          fetchPriority="high"
          decoding="async"
          className="aspect-[16/9] w-full rounded-[5px] object-cover"
        />
      </div>

      <article className={`${CONTAINER} pb-8 pt-4`}>
        <div className={PROSE}>
          {article.body.map((section) => (
            <section key={section.heading}>
              <h2 className="text-display mt-14 text-[clamp(1.35rem,2.5vw,1.9rem)] text-[#1a1a1a]">
                {section.heading}
              </h2>
              {section.paragraphs.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 48)}
                  className="mt-5 text-[15px] leading-[1.85] text-[#4a4a4a]"
                >
                  {paragraph}
                </p>
              ))}
              {section.bullets && (
                <ul className="mt-5 list-disc space-y-3 pl-5 text-[15px] leading-[1.85] text-[#4a4a4a] marker:text-[#b6ff00]">
                  {section.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>
      </article>

      <section className={`${CONTAINER} py-16 md:py-20`}>
        <div className={PROSE}>
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#c45d3a]">
            FAQ
          </p>
          <h2 className="text-display mt-4 text-[clamp(1.35rem,2.5vw,1.9rem)] text-[#1a1a1a]">
            Frequently asked questions
          </h2>
          <div className="mt-8 divide-y divide-black/10 border-y border-black/10">
            {article.faqs.map((faq) => (
              <details key={faq.q} className="faq-item group py-5 md:py-6">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-6">
                  <h3 className="text-display text-[clamp(1.05rem,1.6vw,1.35rem)] leading-[1.35] text-[#1a1a1a]">
                    {faq.q}
                  </h3>
                  <span className="mt-1 flex size-8 shrink-0 items-center justify-center rounded-full border border-black/15 text-[#1a1a1a] transition-transform duration-300 group-open:rotate-45">
                    <Plus size={16} aria-hidden="true" />
                  </span>
                </summary>
                <p className="mt-4 max-w-[64ch] text-[14px] leading-[1.75] text-[#4a4a4a]">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="border-t border-black/10">
          <div className={`${CONTAINER} py-16 md:py-24`}>
            <h2 className="text-display text-[clamp(1.35rem,2.5vw,1.9rem)] text-[#1a1a1a]">
              Keep reading
            </h2>
            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
              {related.map((entry) => (
                <ArticleCard key={entry.slug} article={entry} />
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="border-t border-black/10 bg-[#ebe7df]">
        <div className="mx-auto flex max-w-[1280px] flex-col items-start gap-6 px-6 py-20 md:flex-row md:items-end md:justify-between md:px-12 md:py-28">
          <h2 className="text-display max-w-[20ch] text-[clamp(1.75rem,4vw,3rem)] text-[#1a1a1a]">
            Want this applied to your business? Let&rsquo;s figure it out in 30
            minutes.
          </h2>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="https://calendly.com/tayyabismail/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-[5px] bg-[#b6ff00] px-6 py-3.5 text-[13px] font-semibold text-[#0a0a0a] transition-colors hover:bg-[#a3e600]"
            >
              Book a Free AI Strategy Call
            </a>
            <Link
              to="/blog"
              className="inline-flex items-center rounded-[5px] border border-black/15 px-6 py-3.5 text-[13px] font-semibold text-[#1a1a1a] transition-colors hover:border-[#1a1a1a]"
            >
              All articles
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
