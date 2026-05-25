import Link from "next/link";
import PageHero from "@/components/layout/PageHero";
import JsonLd from "@/components/seo/JsonLd";
import ContactForm from "@/components/sections/ContactForm";
import { createMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schemas";
import { SITE_URL } from "@/lib/constants";

export const metadata = createMetadata({
  title: "Kontakt — Kalkulator Wynagrodzeń",
  description:
    "Skontaktuj się z zespołem KalkulatorWynagrodzeń. Wsparcie techniczne, pytania ogólne, współpraca biznesowa i kwestie prywatności.",
  path: "/kontakt",
});

export default function KontaktPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: SITE_URL },
          { name: "Kontakt", url: `${SITE_URL}/kontakt` },
        ])}
      />
      <PageHero
        title="Kontakt"
        description="Masz pytania dotyczące kalkulatora wynagrodzeń? Napisz do nas — chętnie pomożemy."
      />

      <section className="px-4 py-16 md:px-6 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1fr_0.9fr]">
          <div className="prose-content">
            <h2>Skontaktuj się z nami</h2>
            <p>
              Zespół KalkulatorWynagrodzeń jest do Twojej dyspozycji. Niezależnie od tego,
              czy masz pytanie techniczne dotyczące obliczeń brutto-netto, chcesz zgłosić
              błąd w kalkulatorze, czy interesuje Cię współpraca biznesowa — jesteśmy tu,
              aby Ci pomóc. Wypełnij formularz kontaktowy, a odpowiemy tak szybko, jak to
              możliwe.
            </p>

            <h2>Wsparcie techniczne</h2>
            <p>
              Jeśli napotkałeś problem z działaniem kalkulatora wynagrodzeń, opisz dokładnie
              sytuację: jaką kwotę brutto wprowadziłeś, jaki typ umowy wybrałeś oraz jakie
              wyniki otrzymałeś. Dołącz zrzut ekranu, jeśli to możliwe. Nasz zespół techniczny
              analizuje każde zgłoszenie i weryfikuje obliczenia zgodnie z aktualnymi przepisami
              podatkowymi na rok 2025.
            </p>

            <h2>Pytania ogólne</h2>
            <p>
              Chcesz dowiedzieć się więcej o tym, jak działa nasz kalkulator brutto-netto?
              Masz wątpliwości dotyczące składek ZUS, składki zdrowotnej lub podatku PIT?
              Przeczytaj sekcję{" "}
              <Link href="/#faq" className="text-secondary hover:underline">
                FAQ
              </Link>{" "}
              na stronie głównej lub napisz do nas bezpośrednio — chętnie wyjaśnimy wszelkie
              kwestie związane z wynagrodzeniem w Polsce.
            </p>

            <h2>Współpraca biznesowa i partnerstwa</h2>
            <p>
              Jesteś specjalistą HR, doradcą podatkowym lub właścicielem portalu finansowego?
              Zapraszamy do współpracy. Oferujemy możliwość integracji naszego kalkulatora
              wynagrodzeń, wymiany linków partnerskich oraz wspólnych projektów edukacyjnych
              z zakresu wynagrodzeń i podatków w Polsce. Skontaktuj się z nami, opisując
              charakter proponowanej współpracy.
            </p>

            <h2>Kwestie dotyczące treści i dokładności</h2>
            <p>
              Dokładamy wszelkich starań, aby nasz kalkulator odzwierciedlał aktualne stawki
              podatkowe i składkowe. Jeśli uważasz, że wyniki obliczeń są nieprawidłowe lub
              informacje na stronie wymagają aktualizacji, prosimy o zgłoszenie. Każde
              zgłoszenie jest weryfikowane przez nasz zespół redakcyjny specjalizujący się
              w polskim prawie podatkowym i systemie wynagrodzeń.
            </p>

            <h2>Prywatność i dane osobowe</h2>
            <p>
              W kwestiach związanych z ochroną danych osobowych zapoznaj się z naszą{" "}
              <Link href="/privacy-policy" className="text-secondary hover:underline">
                Polityką Prywatności
              </Link>
              . Możesz również skontaktować się z nami bezpośrednio w sprawie realizacji
              swoich praw wynikających z RODO, w tym prawa dostępu, sprostowania lub usunięcia
              danych.
            </p>

            <h2>Czas odpowiedzi</h2>
            <p>
              Staramy się odpowiadać na wszystkie wiadomości w ciągu 1–2 dni roboczych.
              W okresach wzmożonego ruchu czas odpowiedzi może być nieco dłuższy, jednak
              każde zgłoszenie jest dla nas priorytetem. Dziękujemy za cierpliwość i zaufanie.
            </p>
          </div>

          <div className="glass-card h-fit rounded-[2rem] p-6 md:p-8">
            <div className="mb-6 rounded-[1.5rem] bg-primary p-5 text-white">
              <p className="mb-1 text-sm font-semibold uppercase tracking-[0.18em] text-accent">
                Kontakt
              </p>
              <p className="text-sm leading-6 text-white/70">
                Opisz temat, a przygotujemy odpowiedź dopasowaną do Twojej sprawy.
              </p>
            </div>
            <h2 className="mb-6 font-heading text-xl font-semibold text-text-primary">
              Formularz kontaktowy
            </h2>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
