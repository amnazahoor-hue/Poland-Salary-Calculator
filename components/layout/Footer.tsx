import Link from "next/link";
import { SITE_NAME } from "@/lib/constants";
import Logo from "./Logo";

const footerNavLinks = [
  { label: "Strona główna", href: "/" },
  { label: "Jak to działa", href: "/#jak-to-dziala" },
  { label: "Pytania", href: "/#faq" },
  { label: "O nas", href: "/o-nas" },
  { label: "Kontakt", href: "/kontakt" },
  { label: "Kalkulator", href: "/#kalkulator" },
] as const;

const footerLegalLinks = [
  { label: "Nota prawna", href: "/disclaimer" },
  { label: "Polityka prywatności", href: "/privacy-policy" },
  { label: "Regulamin", href: "/terms-and-conditions" },
  { label: "Kontakt", href: "/kontakt" },
] as const;

const socialLinks = [
  {
    name: "Facebook",
    href: "https://facebook.com",
    className: "bg-[#1877F2]",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-white">
        <path d="M14.5 8.1H17V4.3c-.4-.1-1.9-.2-3.6-.2-3.5 0-5.9 2.1-5.9 6v3.4H4v4.3h3.5V24h4.4v-6.2h3.6l.6-4.3h-4.2v-3c0-1.2.3-2.4 2.6-2.4Z" />
      </svg>
    ),
  },
  {
    name: "X",
    href: "https://x.com",
    className: "bg-black",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-white">
        <path d="M18.9 2h3.3l-7.3 8.3L23.5 22h-6.7l-5.3-6.9L5.5 22H2.2l7.8-8.9L1.8 2h6.9l4.8 6.4L18.9 2Zm-1.2 18h1.8L7.7 3.9H5.8L17.7 20Z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com",
    className: "bg-[#0A66C2]",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-white">
        <path d="M20.4 20.5h-3.6v-5.6c0-1.3 0-3-1.9-3s-2.1 1.4-2.1 2.9v5.7H9.2V9h3.4v1.6h.1c.5-.9 1.6-1.9 3.4-1.9 3.7 0 4.3 2.4 4.3 5.5v6.3ZM5.1 7.4a2.1 2.1 0 1 1 0-4.2 2.1 2.1 0 0 1 0 4.2Zm1.8 13.1H3.3V9h3.6v11.5Z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "https://instagram.com",
    className: "bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#FCAF45]",
    icon: (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-5 w-5 fill-none stroke-white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="3" width="18" height="18" rx="5.2" />
        <circle cx="12" cy="12" r="4.1" />
        <circle cx="17.4" cy="6.6" r="1.1" className="fill-white stroke-none" />
      </svg>
    ),
  },
  {
    name: "YouTube",
    href: "https://youtube.com",
    className: "bg-[#FF0000]",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-white">
        <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31.2 31.2 0 0 0 0 12a31.2 31.2 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31.2 31.2 0 0 0 24 12a31.2 31.2 0 0 0-.5-5.8ZM9.6 15.6V8.4l6.3 3.6-6.3 3.6Z" />
      </svg>
    ),
  },
] as const;

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-primary text-white">
      <div className="orb -left-20 top-8 h-72 w-72 bg-secondary/30" />
      <div className="orb bottom-0 right-0 h-80 w-80 bg-accent/25" />
      <div className="relative mx-auto max-w-7xl px-4 py-14 md:px-6 md:py-20">
        <div className="mb-12 rounded-[2rem] border border-white/10 bg-white/10 p-6 shadow-elevated backdrop-blur md:p-8">
          <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr] lg:items-center">
            <div>
              <p className="mb-2 text-sm font-semibold uppercase tracking-[0.22em] text-accent">
                Kalkulator 2025
              </p>
              <h2 className="max-w-3xl text-3xl font-semibold text-white md:text-4xl">
                Przejrzyste wynagrodzenia dla pracowników, freelancerów i zespołów HR.
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-white/70 md:text-base">
              Oblicz netto, sprawdź składki i podejmuj lepsze decyzje finansowe bez
              przedzierania się przez zawiłe przepisy.
            </p>
          </div>
        </div>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.35fr_0.85fr_0.85fr_0.85fr] xl:grid-cols-4">
          <div className="space-y-5">
            <Logo variant="dark" size="footer" />
            <p className="max-w-xs text-sm leading-relaxed text-white/80">
              {SITE_NAME} — profesjonalny kalkulator brutto-netto dla pracowników
              i specjalistów HR w Polsce. Obliczenia zgodne z przepisami podatkowymi
              2025.
            </p>
            <div className="max-w-xs rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-4">
              <div className="mb-4 flex items-center justify-between gap-3">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/45">
                  Media społecznościowe
                </p>
                <span className="h-px flex-1 bg-gradient-to-r from-white/15 to-transparent" />
              </div>
              <div className="grid grid-cols-3 gap-3 xl:grid-cols-5">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    title={social.name}
                    className="group relative grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/[0.06] shadow-sm backdrop-blur transition-all hover:-translate-y-1 hover:border-white/25 hover:bg-white/10 hover:shadow-elevated xl:h-12 xl:w-12"
                  >
                    <span
                      className={`absolute inset-1 rounded-full opacity-0 blur-md transition-opacity group-hover:opacity-45 ${social.className}`}
                    />
                    <span
                      className={`relative grid h-8 w-8 place-items-center rounded-full shadow-sm ring-2 ring-white/10 transition-transform group-hover:scale-110 xl:h-9 xl:w-9 ${social.className}`}
                    >
                      {social.icon}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div>
            <h3 className="mb-4 font-heading text-base font-semibold">Nawigacja</h3>
            <ul className="space-y-2">
              {footerNavLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/80 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-heading text-base font-semibold">Informacje</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/o-nas"
                  className="text-sm text-white/80 transition-colors hover:text-white"
                >
                  O Nas
                </Link>
              </li>
              <li>
                <Link
                  href="/#jak-to-dziala"
                  className="text-sm text-white/80 transition-colors hover:text-white"
                >
                  Jak To Działa
                </Link>
              </li>
              <li>
                <Link
                  href="/#faq"
                  className="text-sm text-white/80 transition-colors hover:text-white"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-heading text-base font-semibold">Prawne</h3>
            <ul className="space-y-2">
              {footerLegalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/80 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/20 pt-6 text-center text-sm text-white/60">
          © {year} {SITE_NAME}. Wszelkie prawa zastrzeżone.
        </div>
      </div>
    </footer>
  );
}
