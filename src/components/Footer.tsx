"use client";

import { BrandLogo } from "@/components/BrandLogo";
import { useLanguage } from "@/components/LanguageProvider";
import { site } from "@/lib/content";

export function Footer() {
  const { content } = useLanguage();
  const hasSocialLinks = content.footer.links.social.length > 0;
  const quickLinks: { label: string; href: string }[] = [
    { label: content.navLinks[0].label, href: "/" },
    { label: content.sections.problem.eyebrow, href: "/problem" },
    { label: content.navLinks[1].label, href: "/services" },
    { label: content.navLinks[2].label, href: "/how-it-works" },
    { label: content.sections.useCases.eyebrow, href: "/use-cases" },
    { label: content.sections.integrations.eyebrow, href: "/integrations" },
    { label: content.navLinks[3].label, href: "/pricing" },
    { label: content.sections.results.eyebrow, href: "/results" },
    { label: content.sections.testimonials.eyebrow, href: "/testimonials" },
    { label: content.navLinks[4].label, href: "/faq" },
    { label: content.navLinks[5].label, href: "/contact" },
  ];

  return (
    <footer className="bg-slate-950 px-4 pb-10 pt-14 text-white sm:px-6 lg:px-8">
      <div
        className={`mx-auto grid max-w-7xl gap-10 border-t border-white/10 pt-10 ${
          hasSocialLinks
            ? "lg:grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr]"
            : "lg:grid-cols-[1.2fr_0.8fr_0.8fr]"
        }`}
      >
        <div>
          <BrandLogo variant="light" />
          <p className="mt-5 max-w-sm text-sm leading-7 text-slate-400">
            {content.footer.description}
          </p>
          <div className="mt-5 space-y-2 text-sm text-slate-300">
            <a href={`mailto:${site.email}`} className="transition hover:text-cyan-300">
              {site.email}
            </a>
            <p>{site.location}</p>
            <p>{site.region}</p>
          </div>
        </div>

        <FooterColumn title={content.footer.quickLinksTitle} links={quickLinks} />
        <FooterColumn title={content.footer.servicesTitle} links={content.footer.links.services} />
        {hasSocialLinks ? (
          <FooterColumn title={content.footer.socialTitle} links={content.footer.links.social} />
        ) : null}
      </div>

      <div className="mx-auto mt-10 flex max-w-7xl flex-col gap-3 border-t border-white/10 pt-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <p>
          Copyright {new Date().getFullYear()} {site.name}. {content.footer.copyright}
        </p>
        <p>{content.footer.note}</p>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: readonly { label: string; href: string }[];
}) {
  return (
    <div>
      <h3 className="text-sm font-black uppercase tracking-[0.16em] text-slate-200">{title}</h3>
      <ul className="mt-4 space-y-3">
        {links.map((link) => (
          <li key={`${title}-${link.label}`}>
            <a href={link.href} className="text-sm text-slate-400 transition hover:text-cyan-300">
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
