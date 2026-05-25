import Link from "next/link";
import PageHero from "@/components/layout/PageHero";
import JsonLd from "@/components/seo/JsonLd";
import { createMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schemas";
import { SITE_URL } from "@/lib/constants";

export const metadata = createMetadata({
  title: "Regulamin — Kalkulator Wynagrodzeń",
  description:
    "Regulamin korzystania z serwisu KalkulatorWynagrodzeń. Warunki użytkowania kalkulatora brutto-netto i strony internetowej.",
  path: "/terms-and-conditions",
});

export default function TermsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: SITE_URL },
          { name: "Regulamin", url: `${SITE_URL}/terms-and-conditions` },
        ])}
      />
      <PageHero
        title="Regulamin"
        description="Warunki korzystania z serwisu KalkulatorWynagrodzeń."
      />

      <article className="prose-content mx-auto max-w-4xl px-4 py-12 md:px-6 md:py-16">
        <h2>1. Akceptacja regulaminu</h2>
        <p>
          Niniejszy Regulamin określa zasady korzystania z serwisu internetowego
          KalkulatorWynagrodzeń, dostępnego pod adresem kalkulatorwynagrodzen.pl. Korzystając
          z serwisu — w tym z kalkulatora wynagrodzeń brutto-netto, sekcji informacyjnych,
          formularza kontaktowego oraz wszelkich publikowanych treści — użytkownik potwierdza,
          że zapoznał się z niniejszym Regulaminem, akceptuje jego postanowienia oraz zobowiązuje
          się do ich przestrzegania. Jeśli nie zgadzasz się z którymkolwiek z postanowień,
          prosimy o zaprzestanie korzystania z serwisu. Regulamin obowiązuje od momentu
          publikacji na stronie i dotyczy wszystkich użytkowników bez wyjątku.
        </p>

        <h2>2. Korzystanie ze strony internetowej</h2>
        <p>
          Serwis KalkulatorWynagrodzeń jest udostępniany bezpłatnie użytkownikom końcowym
          w celach informacyjnych i edukacyjnych. Użytkownik zobowiązuje się korzystać z serwisu
          w sposób zgodny z prawem, niniejszym Regulaminem oraz dobrymi obyczajami. Zabronione
          jest: wykorzystywanie serwisu w sposób mogący zakłócić jego funkcjonowanie lub
          infrastrukturę techniczną; podejmowanie prób nieautoryzowanego dostępu do systemów
          serwisu; automatyczne pobieranie treści (scraping) bez pisemnej zgody właściciela;
          publikowanie treści obraźliwych, niezgodnych z prawem lub naruszających prawa osób
          trzecich za pośrednictwem formularza kontaktowego; wykorzystywanie serwisu do celów
          komercyjnych bez uprzedniej zgody właściciela. Właściciel serwisu zastrzega sobie
          prawo do ograniczenia lub zablokowania dostępu użytkownikom naruszającym Regulamin.
        </p>

        <h2>3. Własność intelektualna</h2>
        <p>
          Wszystkie treści zamieszczone na serwisie KalkulatorWynagrodzeń — w tym teksty,
          grafiki, logo, ikony, układ strony, kod źródłowy kalkulatora, algorytmy obliczeniowe
          oraz baza wiedzy o podatkach i składkach ZUS — są chronione prawem autorskim i
          stanowią własność intelektualną właściciela serwisu lub podmiotów trzecich, które
          udzieliły odpowiednich licencji. Użytkownik może korzystać z treści serwisu wyłącznie
          do celów osobistych i niekomercyjnych. Kopiowanie, reprodukowanie, modyfikowanie,
          rozpowszechnianie lub tworzenie utworów zależnych na podstawie treści serwisu bez
          pisemnej zgody właściciela jest zabronione. Dozwolone jest cytowanie fragmentów
          treści z obowiązkowym podaniem źródła (link do kalkulatorwynagrodzen.pl) zgodnie
          z przepisami ustawy o prawie autorskim i prawach pokrewnych.
        </p>

        <h2>4. Warunki korzystania z kalkulatora</h2>
        <p>
          Kalkulator wynagrodzeń brutto-netto jest udostępniany bezpłatnie i ma charakter
          orientacyjny. Użytkownik korzysta z kalkulatora na własną odpowiedzialność.
          Wyniki obliczeń opierają się na ogólnych założeniach polskiego prawa podatkowego
          obowiązującym w 2025 roku i nie uwzględniają indywidualnych okoliczności każdego
          użytkownika. Właściciel serwisu nie gwarantuje, że wyniki kalkulatora będą identyczne
          z wynagrodzeniem wypłacanym przez pracodawcę. Zabronione jest automatyczne masowe
          korzystanie z kalkulatora (API scraping), reverse engineering algorytmów obliczeniowych
          oraz integracja kalkulatora z aplikacjami zewnętrznymi bez pisemnej zgody właściciela.
          Właściciel zastrzega sobie prawo do modyfikacji, aktualizacji lub czasowego
          wyłączenia kalkulatora bez wcześniejszego powiadomienia.
        </p>

        <h2>5. Wyłączenie gwarancji</h2>
        <p>
          Serwis KalkulatorWynagrodzeń jest udostępniany w stanie „takim, jaki jest&quot; (as is)
          i „w miarę dostępności&quot; (as available), bez jakichkolwiek gwarancji — wyraźnych
          ani dorozumianych. Właściciel serwisu nie gwarantuje, że serwis będzie działał
          bez przerw, błędów lub wad, że wyniki kalkulatora będą w 100% dokładne, ani że
          serwis będzie wolny od wirusów lub innych szkodliwych komponentów. W szczególności
          wyłączamy gwarancje przydatności do określonego celu, nienaruszalności praw osób
          trzecich oraz ciągłości dostępu do serwisu. Użytkownik korzysta z serwisu na własne
          ryzyko i powinien samodzielnie weryfikować informacje u wykwalifikowanych specjalistów.
        </p>

        <h2>6. Ograniczenie odpowiedzialności</h2>
        <p>
          W maksymalnym zakresie dozwolonym przez obowiązujące prawo polskie, właściciel serwisu
          KalkulatorWynagrodzeń nie ponosi odpowiedzialności za jakiekolwiek szkody — bezpośrednie,
          pośrednie, przypadkowe, szczególne lub wtórne — wynikające z korzystania lub
          niemożności korzystania z serwisu, w tym za: decyzje finansowe podjęte na podstawie
          wyników kalkulatora; utratę danych, zysków lub reputacji; przerwy w dostępie do serwisu
          spowodowane awariami technicznymi, konserwacją lub siłą wyższą; treści zamieszczone
          na stronach zewnętrznych, do których prowadzą linki z serwisu. Łączna odpowiedzialność
          właściciela serwisu wobec użytkownika z jakiegokolwiek tytułu jest ograniczona do
          kwoty zero złotych (0 PLN).
        </p>

        <h2>7. Linki do stron trzecich</h2>
        <p>
          Serwis może zawierać odnośniki do stron internetowych osób trzecich, w tym instytucji
          państwowych (ZUS, Ministerstwo Finansów), portali informacyjnych oraz serwisów
          partnerskich. Linki te są udostępniane wyłącznie dla wygody użytkownika. Właściciel
          serwisu nie kontroluje treści stron zewnętrznych, nie ponosi odpowiedzialności za
          ich treść, politykę prywatności ani praktyki, ani nie udziela gwarancji co do
          dokładności informacji na stronach trzecich. Korzystanie z linków zewnętrznych
          odbywa się na własne ryzyko użytkownika. Zachęcamy do zapoznania się z regulaminem
          i polityką prywatności każdej odwiedzanej strony zewnętrznej.
        </p>

        <h2>8. Modyfikacje regulaminu</h2>
        <p>
          Właściciel serwisu zastrzega sobie prawo do zmiany niniejszego Regulaminu w dowolnym
          momencie. Zmiany wchodzą w życie z chwilą publikacji zaktualizowanej wersji na tej
          stronie. W przypadku istotnych zmian postaramy się poinformować użytkowników poprzez
          widoczne ogłoszenie na stronie głównej. Kontynuowanie korzystania z serwisu po
          wprowadzeniu zmian oznacza akceptację nowego Regulaminu. Zalecamy regularne
          sprawdzanie tej strony w celu zapoznania się z aktualnymi warunkami korzystania
          z serwisu KalkulatorWynagrodzeń.
        </p>

        <h2>9. Prawo właściwe</h2>
        <p>
          Niniejszy Regulamin podlega prawu polskiemu. Wszelkie spory wynikające z korzystania
          z serwisu KalkulatorWynagrodzeń będą rozstrzygane przez sądy właściwe dla siedziby
          właściciela serwisu, zgodnie z obowiązującymi przepisami prawa polskiego, w tym
          Kodeksem cywilnym, ustawą o świadczeniu usług drogą elektroniczną oraz Rozporządzeniem
          RODO. Użytkownik będący konsumentem zachowuje prawa wynikające z bezwzględnie
          obowiązujących przepisów prawa konsumenckiego, w tym prawo do dochodzenia roszczeń
          przed sądem właściwym dla miejsca zamieszkania konsumenta.
        </p>

        <h2>10. Klauzula salwatoryjna i kontakt</h2>
        <p>
          Jeśli którekolwiek postanowienie niniejszego Regulaminu zostanie uznane za nieważne
          lub niewykonalne przez właściwy sąd, pozostałe postanowienia zachowują pełną moc
          prawną. Nieważność pojedynczego postanowienia nie wpływa na ważność Regulaminu
          w całości. W przypadku pytań dotyczących Regulaminu prosimy o kontakt poprzez{" "}
          <Link href="/kontakt" className="text-secondary hover:underline">
            formularz kontaktowy
          </Link>
          . Zapoznaj się również z naszą{" "}
          <Link href="/privacy-policy" className="text-secondary hover:underline">
            Polityką Prywatności
          </Link>{" "}
          oraz{" "}
          <Link href="/disclaimer" className="text-secondary hover:underline">
            Disclaimerem
          </Link>
          . Ostatnia aktualizacja: maj 2025.
        </p>
      </article>
    </>
  );
}
