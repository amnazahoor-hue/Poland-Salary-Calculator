import Link from "next/link";
import PageHero from "@/components/layout/PageHero";
import JsonLd from "@/components/seo/JsonLd";
import { createMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schemas";
import { SITE_URL } from "@/lib/constants";

export const metadata = createMetadata({
  title: "O Nas — Kalkulator Wynagrodzeń",
  description:
    "Poznaj zespół KalkulatorWynagrodzeń. Profesjonalny kalkulator brutto-netto dla pracowników i HR. Oblicz netto, ZUS kalkulator 2025.",
  path: "/o-nas",
  keywords: "kalkulator wynagrodzeń, oblicz netto, ZUS kalkulator",
});

export default function ONasPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: SITE_URL },
          { name: "O Nas", url: `${SITE_URL}/o-nas` },
        ])}
      />
      <PageHero
        title="O Nas — Kalkulator Wynagrodzeń"
        description="Tworzymy narzędzia, które pomagają Polakom zrozumieć swoje wynagrodzenie."
      />

      <article className="prose-content mx-auto max-w-4xl px-4 py-12 md:px-6 md:py-16">
        <p>
          KalkulatorWynagrodzeń to niezależny, profesjonalny serwis internetowy stworzony z
          myślą o pracownikach, freelancerach i specjalistach HR w Polsce. Naszym celem jest
          dostarczenie precyzyjnego, łatwego w użyciu kalkulatora brutto-netto, który pozwala
          błyskawicznie obliczyć wynagrodzenie netto z uwzględnieniem składek ZUS, ubezpieczenia
          zdrowotnego i podatku dochodowego PIT. Wierzymy, że każdy pracownik powinien w pełni
          rozumieć, ile faktycznie zarabia na rękę — bez konieczności studiowania skomplikowanych
          przepisów podatkowych.
        </p>

        <h2>Kim jesteśmy?</h2>
        <p>
          Jesteśmy zespołem specjalistów z wieloletnim doświadczeniem w dziedzinie polskiego
          prawa podatkowego, systemu wynagrodzeń i technologii webowych. Nasza redakcja składa
          się z ekspertów ds. payroll, doradców podatkowych oraz programistów, którzy łączą
          wiedzę merytoryczną z nowoczesnymi rozwiązaniami technologicznymi. Dzięki temu
          KalkulatorWynagrodzeń to nie tylko proste narzędzie online — to wiarygodne źródło
          informacji o wynagrodzeniach w Polsce, zgodne z zasadami E-E-A-T (Experience,
          Expertise, Authoritativeness, Trustworthiness), które Google premiuje w wynikach
          wyszukiwania.
        </p>

        <h2>Nasza misja</h2>
        <p>
          Misją KalkulatorWynagrodzeń jest demokratyzacja wiedzy o wynagrodzeniach w Polsce.
          Rynek pracy w naszym kraju oferuje różne formy zatrudnienia — umowę o pracę, umowę
          zlecenie i umowę o dzieło — a każda z nich wiąże się z odmiennymi zasadami
          naliczania składek i podatków. Nasz kalkulator wynagrodzeń upraszcza ten złożony
          proces, pozwalając użytkownikowi w kilka sekund uzyskać pełne zestawienie odliczeń
          i wynagrodzenia netto. Chcemy, aby każdy Polak — niezależnie od poziomu wiedzy
          finansowej — mógł świadomie negocjować pensję, planować budżet domowy i rozumieć
          wpływ decyzji podatkowych na swoje finanse.
        </p>

        <h2>Dlaczego możesz nam zaufać?</h2>
        <p>
          Dokładność obliczeń to fundament naszego serwisu. Kalkulator oparty jest na
          aktualnych przepisach podatkowych obowiązujących w 2025 roku, w tym stawkach
          składek ZUS (emerytalne 9,76%, rentowe 1,5%, chorobowe 2,45%), składce zdrowotnej
          (9% podstawy wymiaru) oraz zasadach naliczania zaliczki na PIT (stawki 17% i 32%).
          Regularnie weryfikujemy nasze algorytmy z oficjalnymi tabelami podatkowymi i
          publikacjami Ministerstwa Finansów oraz Zakładu Ubezpieczeń Społecznych. Każda
          aktualizacja przepisów jest natychmiast wdrażana w kalkulatorze, aby użytkownicy
          zawsze otrzymywali wiarygodne wyniki.
        </p>

        <p>
          Warto podkreślić, że nasz kalkulator brutto-netto obsługuje trzy najpopularniejsze
          formy zatrudnienia w Polsce. Dla umowy o pracę uwzględniamy pełne składki ZUS,
          składkę zdrowotną z możliwością odliczenia 7,75% podstawy wymiaru oraz standardowe
          koszty uzyskania przychodu (250 zł miesięcznie). Dla umowy zlecenie stosujemy 20%
          kosztów uzyskania przychodu oraz pełne składki społeczne. Natomiast umowa o dzieło
          jest obliczana bez składek ZUS, z 50% kosztami uzyskania przychodu — zgodnie z
          obowiązującymi przepisami.
        </p>

        <h2>Zespół redakcyjny</h2>
        <p>
          Treści publikowane na KalkulatorWynagrodzeń są tworzone i weryfikowane przez zespół
          redakcyjny z doświadczeniem w polskim systemie podatkowym i HR. Nasi autorzy śledzą
          zmiany legislacyjne, uczestniczą w branżowych konferencjach i współpracują z
          certyfikowanymi doradcami podatkowymi. Dzięki temu sekcje informacyjne, FAQ oraz
          artykuły edukacyjne na stronie odzwierciedlają aktualny stan prawny i najlepsze
          praktyki branżowe.
        </p>

        <h2>Stała aktualizacja stawek podatkowych</h2>
        <p>
          Polski system podatkowy ulega regularnym zmianom — nowe stawki ZUS, modyfikacje
          kwoty wolnej od podatku, aktualizacje progów podatkowych. Zobowiązujemy się do
          bieżącej aktualizacji naszego kalkulatora wynagrodzeń po każdej istotnej zmianie
          przepisów. W 2025 roku uwzględniamy m.in. kwotę wolna od podatku w wysokości
          30 000 zł rocznie (300 zł miesięcznej ulgi), stawki składek społecznych oraz
          zasady naliczania składki zdrowotnej. Informujemy użytkowników o istotnych
          zmianach poprzez aktualizacje na stronie głównej.
        </p>

        <h2>Przejrzystość i niezależność</h2>
        <p>
          KalkulatorWynagrodzeń działa jako niezależny serwis informacyjny. Nie jesteśmy
          powiązani z żadnym urzędem skarbowym, firmą payroll ani instytucją finansową.
          Nasze obliczenia mają charakter orientacyjny i służą celom edukacyjnym — zawsze
          zalecamy weryfikację wyników u pracodawcy lub doradcy podatkowego. Pełne
          informacje prawne znajdziesz w naszym{" "}
          <Link href="/disclaimer" className="text-secondary hover:underline">
            Disclaimerze
          </Link>
          ,{" "}
          <Link href="/privacy-policy" className="text-secondary hover:underline">
            Polityce Prywatności
          </Link>{" "}
          oraz{" "}
          <Link href="/terms-and-conditions" className="text-secondary hover:underline">
            Regulaminie
          </Link>
          .
        </p>

        <h2>Skorzystaj z kalkulatora już teraz</h2>
        <p>
          Zapraszamy do skorzystania z naszego{" "}
          <Link href="/#kalkulator" className="text-secondary hover:underline">
            kalkulatora wynagrodzeń brutto-netto
          </Link>
          . Wpisz swoje wynagrodzenie brutto, wybierz typ umowy i w kilka sekund dowiedz się,
          ile zarobisz na rękę. Jeśli masz pytania lub sugestie,{" "}
          <Link href="/kontakt" className="text-secondary hover:underline">
            skontaktuj się z nami
          </Link>
          — Twoja opinia pomaga nam tworzyć jeszcze lepsze narzędzia dla polskich pracowników
          i specjalistów HR.
        </p>
      </article>
    </>
  );
}
