import Link from "next/link";
import PageHero from "@/components/layout/PageHero";
import JsonLd from "@/components/seo/JsonLd";
import { createMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schemas";
import { SITE_URL } from "@/lib/constants";

export const metadata = createMetadata({
  title: "Disclaimer — Kalkulator Wynagrodzeń",
  description:
    "Zastrzeżenia prawne serwisu KalkulatorWynagrodzeń. Informacje o charakterze orientacyjnym kalkulatora brutto-netto.",
  path: "/disclaimer",
});

export default function DisclaimerPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: SITE_URL },
          { name: "Disclaimer", url: `${SITE_URL}/disclaimer` },
        ])}
      />
      <PageHero
        title="Disclaimer"
        description="Zastrzeżenia prawne dotyczące korzystania z serwisu KalkulatorWynagrodzeń."
      />

      <article className="prose-content mx-auto max-w-4xl px-4 py-12 md:px-6 md:py-16">
        <h2>1. Ogólne zastrzeżenie</h2>
        <p>
          Niniejszy dokument stanowi pełne zastrzeżenie prawne (disclaimer) serwisu internetowego
          KalkulatorWynagrodzeń, dostępnego pod adresem kalkulatorwynagrodzen.pl. Korzystając z
          naszej strony internetowej, kalkulatora wynagrodzeń brutto-netto oraz wszelkich
          publikowanych treści, użytkownik akceptuje warunki opisane poniżej. Serwis ma charakter
          informacyjny i edukacyjny. Nie stanowi on porady prawnej, podatkowej, finansowej ani
          kadrowej w rozumieniu obowiązujących przepisów prawa polskiego. Właściciel serwisu
          dokłada starań, aby publikowane informacje były aktualne i rzetelne, jednak nie
          gwarantuje ich kompletności, dokładności ani przydatności do konkretnych celów
          użytkownika.
        </p>

        <h2>2. Zastrzeżenie dotyczące korzystania z kalkulatora</h2>
        <p>
          Kalkulator wynagrodzeń brutto-netto dostępny na stronie KalkulatorWynagrodzeń służy
          wyłącznie celom orientacyjnym. Wyniki obliczeń opierają się na ogólnych założeniach
          polskiego prawa podatkowego i ubezpieczeń społecznych obowiązujących w 2025 roku,
          w tym stawkach składek ZUS, składce zdrowotnej oraz zasadach naliczania zaliczki na
          podatek dochodowy PIT. Rzeczywiste wynagrodzenie netto może różnić się od wyników
          kalkulatora ze względu na indywidualną sytuację podatkową użytkownika, dodatkowe
          ulgi podatkowe, status studenta, wiek poniżej 26 lat, praca w więcej niż jednym
          miejscu, dodatkowe źródła dochodu, PPK (Pracownicze Plany Kapitałowe) oraz inne
          czynniki indywidualne, które kalkulator nie uwzględnia.
        </p>
        <p>
          Użytkownik korzysta z kalkulatora na własną odpowiedzialność. Zalecamy weryfikację
          wyników u pracodawcy, działu kadr, księgowości lub u certyfikowanego doradcy
          podatkowego przed podjęciem jakichkolwiek decyzji finansowych opartych na wynikach
          kalkulatora. Właściciel serwisu nie ponosi odpowiedzialności za decyzje podjęte
          na podstawie wyników generowanych przez narzędzie online.
        </p>

        <h2>3. Zastrzeżenie dotyczące linków zewnętrznych</h2>
        <p>
          Serwis KalkulatorWynagrodzeń może zawierać odnośniki (linki) do stron internetowych
          osób trzecich, w tym instytucji państwowych, portali informacyjnych, serwisów
          partnerskich oraz profili w mediach społecznościowych. Linki te są udostępniane
          wyłącznie dla wygody użytkownika i nie oznaczają rekomendacji, aprobaty ani
          powiązania z treściami zamieszczonymi na stronach zewnętrznych. Nie mamy kontroli
          nad treścią, polityką prywatności ani praktykami stron trzecich i nie ponosimy
          odpowiedzialności za jakiekolwiek szkody wynikające z korzystania z tych stron.
          Zachęcamy do zapoznania się z regulaminem i polityką prywatności każdej odwiedzanej
          strony zewnętrznej.
        </p>

        <h2>4. Zastrzeżenie dotyczące porad profesjonalnych</h2>
        <p>
          Żadna treść publikowana na KalkulatorWynagrodzeń — w tym artykuły informacyjne,
          sekcja FAQ, opisy składek ZUS i PIT oraz wyniki kalkulatora — nie stanowi porady
          profesjonalnej w dziedzinie prawa podatkowego, prawa pracy, ubezpieczeń społecznych
          ani doradztwa finansowego. Informacje mają charakter ogólny i nie uwzględniają
          specyfiki indywidualnej sytuacji każdego użytkownika. W przypadku wątpliwości
          dotyczących wynagrodzenia, podatków lub składek ZUS zalecamy konsultację z
          wykwalifikowanym specjalistą: doradcą podatkowym, radcą prawnym specjalizującym
          się w prawie pracy, biegłym rewidentem lub przedstawicielem Zakładu Ubezpieczeń
          Społecznych bądź Urzędu Skarbowego.
        </p>

        <h2>5. Dokładność informacji</h2>
        <p>
          Dokładamy wszelkich starań, aby informacje zamieszczone na stronie KalkulatorWynagrodzeń
          były aktualne, kompletne i zgodne z obowiązującymi przepisami prawa polskiego na
          rok 2025. Regularnie aktualizujemy stawki składek ZUS, zasady naliczania składki
          zdrowotnej, progi podatkowe PIT oraz koszty uzyskania przychodu dla różnych form
          zatrudnienia. Mimo to prawo podatkowe i ubezpieczeniowe ulega częstym zmianom,
          a interpretacja przepisów może się różnić w zależności od indywidualnych okoliczności.
          Nie gwarantujemy, że wszystkie informacje są w danym momencie w pełni aktualne lub
          wolne od błędów. Użytkownik powinien samodzielnie weryfikować informacje w
          oficjalnych źródłach, takich jak ISAP (Internetowy System Aktów Prawnych), strony
          Ministerstwa Finansów, ZUS oraz Krajowej Informacji Skarbowej.
        </p>

        <h2>6. Zastrzeżenie dotyczące programów partnerskich i reklam</h2>
        <p>
          Serwis KalkulatorWynagrodzeń może wyświetlać reklamy, w tym reklamy Google AdSense,
          oraz uczestniczyć w programach partnerskich (affiliate marketing). Treści reklamowe
          są oznaczane zgodnie z obowiązującymi przepisami i wytycznymi platform reklamowych.
          Właściciel serwisu może otrzymywać wynagrodzenie za kliknięcia w reklamy lub zakupy
          dokonane za pośrednictwem linków partnerskich. Nie wpływa to na obiektywność
          informacji publikowanych w kalkulatorze i sekcjach edukacyjnych, jednak użytkownik
          powinien mieć świadomość, że serwis może generować przychody z reklam i partnerstw
          biznesowych. Reklamy osób trzecich nie stanowią rekomendacji produktów ani usług
          przez zespół KalkulatorWynagrodzeń.
        </p>

        <h2>7. Błędy i pominięcia</h2>
        <p>
          Pomimo starannej weryfikacji treści, serwis KalkulatorWynagrodzeń może zawierać
          błędy typograficzne, techniczne lub merytoryczne. Zastrzegamy sobie prawo do
          korygowania błędów w dowolnym momencie bez wcześniejszego powiadomienia. Nie
          ponosimy odpowiedzialności za jakiekolwiek straty lub szkody — bezpośrednie,
          pośrednie, przypadkowe lub wtórne — wynikające z korzystania z serwisu, polegania
          na zamieszczonych informacjach lub niemożności korzystania z serwisu z powodu
          awarii technicznej, przerwy w dostępie lub aktualizacji. W maksymalnym zakresie
          dozwolonym przez prawo polskie, całkowita odpowiedzialność właściciela serwisu
          wobec użytkownika jest ograniczona do kwoty zero złotych.
        </p>

        <h2>8. Zmiany niniejszego disclaimeru i kontakt</h2>
        <p>
          Zastrzegamy sobie prawo do modyfikacji niniejszego disclaimeru w dowolnym momencie.
          Zmiany wchodzą w życie z chwilą publikacji zaktualizowanej wersji na tej stronie.
          Kontynuowanie korzystania z serwisu po wprowadzeniu zmian oznacza akceptację
          nowych warunków. Zalecamy regularne sprawdzanie tej strony w celu zapoznania się
          z aktualnymi zastrzeżeniami prawnymi. W przypadku pytań dotyczących niniejszego
          disclaimeru prosimy o kontakt poprzez{" "}
          <Link href="/kontakt" className="text-secondary hover:underline">
            formularz kontaktowy
          </Link>{" "}
          lub zapoznanie się z naszą{" "}
          <Link href="/privacy-policy" className="text-secondary hover:underline">
            Polityką Prywatności
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
