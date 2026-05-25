import Link from "next/link";
import PageHero from "@/components/layout/PageHero";
import JsonLd from "@/components/seo/JsonLd";
import { createMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schemas";
import { SITE_URL } from "@/lib/constants";

export const metadata = createMetadata({
  title: "Polityka Prywatności — Kalkulator Wynagrodzeń",
  description:
    "Polityka prywatności serwisu KalkulatorWynagrodzeń. Informacje o przetwarzaniu danych, cookies, Google Analytics i Microsoft Clarity.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: SITE_URL },
          { name: "Polityka Prywatności", url: `${SITE_URL}/privacy-policy` },
        ])}
      />
      <PageHero
        title="Polityka Prywatności"
        description="Informacje o tym, jak chronimy Twoje dane osobowe w serwisie KalkulatorWynagrodzeń."
      />

      <article className="prose-content mx-auto max-w-4xl px-4 py-12 md:px-6 md:py-16">
        <h2>1. Wprowadzenie</h2>
        <p>
          Niniejsza Polityka Prywatności opisuje zasady przetwarzania danych osobowych w serwisie
          internetowym KalkulatorWynagrodzeń (kalkulatorwynagrodzen.pl). Szanujemy Twoją prywatność
          i zobowiązujemy się do ochrony danych osobowych zgodnie z Rozporządzeniem Parlamentu
          Europejskiego i Rady (UE) 2016/679 (RODO) oraz ustawą o ochronie danych osobowych.
          Korzystając z naszej strony internetowej, kalkulatora wynagrodzeń brutto-netto oraz
          formularza kontaktowego, akceptujesz warunki opisane w niniejszej polityce. Zachęcamy
          do uważnego zapoznania się z poniższymi informacjami przed rozpoczęciem korzystania
          z serwisu.
        </p>

        <h2>2. Jakie informacje zbieramy</h2>
        <p>
          KalkulatorWynagrodzeń zbiera ograniczony zakres danych niezbędnych do funkcjonowania
          serwisu. Kalkulator wynagrodzeń brutto-netto działa w pełni po stronie przeglądarki
          użytkownika — wprowadzone kwoty wynagrodzenia brutto nie są przesyłane na serwer ani
          przechowywane w bazie danych. Nie wymagamy rejestracji konta ani logowania. Dane
          zbierane automatycznie obejmują: adres IP (w formie zanonimizowanej), typ przeglądarki,
          system operacyjny, data i godzina wizyty, odwiedzone podstrony, czas spędzony na stronie
          oraz źródło ruchu (np. wyszukiwarka Google). W przypadku korzystania z formularza
          kontaktowego zbieramy: imię i nazwisko, adres e-mail, temat wiadomości oraz treść
          wiadomości — wyłącznie za Twoją zgodą i w celu udzielenia odpowiedzi.
        </p>

        <h2>3. W jaki sposób wykorzystujemy Twoje informacje</h2>
        <p>
          Zebrane dane wykorzystujemy w następujących celach: zapewnienie prawidłowego
          funkcjonowania serwisu i kalkulatora wynagrodzeń; analiza ruchu na stronie w celu
          poprawy jakości usług i doświadczenia użytkownika; odpowiadanie na wiadomości
          przesłane przez formularz kontaktowy; wykrywanie i zapobieganie nadużyciom oraz
          atakom na infrastrukturę serwisu; wyświetlanie spersonalizowanych reklam (Google
          AdSense) zgodnie z preferencjami użytkownika; wypełnianie obowiązków prawnych
          wynikających z przepisów polskiego i unijnego prawa. Nie sprzedajemy, nie wynajmujemy
          ani nie udostępniamy danych osobowych podmiotom trzecim w celach marketingowych
          bez Twojej wyraźnej zgody.
        </p>

        <h2>4. Pliki cookies</h2>
        <p>
          Serwis KalkulatorWynagrodzeń wykorzystuje pliki cookies (ciasteczka) — małe pliki
          tekstowe zapisywane na urządzeniu użytkownika. Stosujemy następujące rodzaje cookies:
          cookies niezbędne — zapewniają podstawowe funkcje strony, takie jak nawigacja i
          dostęp do kalkulatora; cookies analityczne — Google Analytics 4 zbiera anonimowe
          dane statystyczne o ruchu na stronie; cookies reklamowe — Google AdSense może
          wykorzystywać cookies do wyświetlania reklam dopasowanych do zainteresowań użytkownika;
          cookies funkcjonalne — Microsoft Clarity rejestruje anonimowe sesje użytkowników
          w celu analizy UX. Możesz zarządzać cookies w ustawieniach swojej przeglądarki,
          blokując lub usuwając pliki cookies. Wyłączenie cookies analitycznych i reklamowych
          nie wpływa na działanie kalkulatora wynagrodzeń.
        </p>

        <h2>5. Google Analytics i usługi stron trzecich</h2>
        <p>
          Korzystamy z Google Analytics 4 (GA4) — narzędzia analitycznego firmy Google LLC —
          do analizy ruchu na stronie. GA4 zbiera anonimowe dane statystyczne, takie jak liczba
          odwiedzin, czas spędzony na stronie, bounce rate oraz źródła ruchu. Adres IP użytkownika
          jest anonimizowany przed przesłaniem do Google. Więcej informacji: policies.google.com/privacy.
          Wykorzystujemy również Microsoft Clarity — narzędzie do analizy zachowań użytkowników
          na stronie (mapy cieplne, nagrania sesji). Clarity nie rejestruje haseł ani danych
          wprowadzanych do kalkulatora. Więcej informacji: clarity.microsoft.com/terms.
          Serwis może wyświetlać reklamy Google AdSense. Google i jego partnerzy mogą wykorzystywać
          cookies do personalizacji reklam. Użytkownik może zrezygnować z personalizacji reklam
          w ustawieniach Google: adssettings.google.com.
        </p>

        <h2>6. Okres przechowywania danych</h2>
        <p>
          Dane z formularza kontaktowego przechowujemy przez okres niezbędny do udzielenia
          odpowiedzi i rozwiązania sprawy użytkownika, nie dłużej niż 24 miesiące od ostatniego
          kontaktu. Dane analityczne z Google Analytics 4 przechowywane są przez 14 miesięcy
          zgodnie z domyślnymi ustawieniami GA4. Nagrania sesji Microsoft Clarity przechowywane
          są przez maksymalnie 30 dni. Logi serwera (adres IP, data wizyty) przechowywane są
          przez 12 miesięcy w celach bezpieczeństwa. Po upływie wskazanych okresów dane są
          usuwane lub anonimizowane w sposób uniemożliwiający identyfikację użytkownika.
        </p>

        <h2>7. Twoje prawa</h2>
        <p>
          Zgodnie z RODO przysługują Ci następujące prawa: prawo dostępu do swoich danych
          osobowych; prawo do sprostowania (poprawiania) nieprawidłowych danych; prawo do
          usunięcia danych (prawo do bycia zapomnianym); prawo do ograniczenia przetwarzania;
          prawo do przenoszenia danych; prawo do sprzeciwu wobec przetwarzania danych w celach
          marketingowych; prawo do cofnięcia zgody w dowolnym momencie (bez wpływu na zgodność
          z prawem przetwarzania przed cofnięciem); prawo do wniesienia skargi do Prezesa
          Urzędu Ochrony Danych Osobowych (PUODO), ul. Stawki 2, 00-193 Warszawa. Aby skorzystać
          z powyższych praw, skontaktuj się z nami poprzez{" "}
          <Link href="/kontakt" className="text-secondary hover:underline">
            formularz kontaktowy
          </Link>
          .
        </p>

        <h2>8. Bezpieczeństwo danych</h2>
        <p>
          Stosujemy odpowiednie środki techniczne i organizacyjne w celu ochrony danych
          osobowych przed nieuprawnionym dostępem, utratą, zniszczeniem lub ujawnieniem.
          Serwis korzysta z szyfrowania HTTPS (SSL/TLS) zapewniającego bezpieczną transmisję
          danych między przeglądarką użytkownika a serwerem. Regularnie aktualizujemy
          oprogramowanie serwera i monitorujemy potencjalne zagrożenia bezpieczeństwa.
          Dostęp do danych osobowych z formularza kontaktowego mają wyłącznie upoważnieni
          członkowie zespołu KalkulatorWynagrodzeń. Pomimo stosowanych zabezpieczeń,
          żaden system transmisji danych przez Internet nie jest w 100% bezpieczny — korzystasz
          z serwisu na własne ryzyko w zakresie przesyłanych danych.
        </p>

        <h2>9. Zmiany polityki prywatności i kontakt</h2>
        <p>
          Zastrzegamy sobie prawo do aktualizacji niniejszej Polityki Prywatności w dowolnym
          momencie. O istotnych zmianach poinformujemy poprzez publikację zaktualizowanej
          wersji na tej stronie z nową datą ostatniej aktualizacji. Kontynuowanie korzystania
          z serwisu po wprowadzeniu zmian oznacza akceptację zaktualizowanej polityki.
          W przypadku pytań dotyczących ochrony danych osobowych prosimy o kontakt poprzez{" "}
          <Link href="/kontakt" className="text-secondary hover:underline">
            formularz kontaktowy
          </Link>
          . Zapoznaj się również z naszym{" "}
          <Link href="/disclaimer" className="text-secondary hover:underline">
            Disclaimerem
          </Link>{" "}
          oraz{" "}
          <Link href="/terms-and-conditions" className="text-secondary hover:underline">
            Regulaminem
          </Link>
          . Ostatnia aktualizacja: maj 2025.
        </p>
      </article>
    </>
  );
}
