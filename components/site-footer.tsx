import Link from "next/link";
import { Container } from "@/components/container";

const links = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-line">
      <Container className="space-y-4 py-8 text-sm text-slate-400">
        <p className="max-w-3xl text-slate-200">
          Stupidly good-looking, high-converting websites for brands that are done being boring.
        </p>

        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <nav aria-label="Footer" className="flex flex-wrap items-center gap-4">
            {links.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-neon">
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col items-end gap-1">
            <Link href="/privacy-policy" className="hover:text-neon">
              Privacy Policy
            </Link>
            <p>Built in this dimension with questionable amounts of caffeine.</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
