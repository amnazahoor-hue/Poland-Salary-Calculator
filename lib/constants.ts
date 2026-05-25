export const SITE_URL = "https://kalkulatorwynagrodzen.pl";
export const SITE_NAME = "KalkulatorWynagrodzeń";

export const ZUS_RATES = {
  retirement: 0.0976,
  disability: 0.015,
  sickness: 0.0245,
} as const;

export const HEALTH_RATE = 0.09;
export const HEALTH_DEDUCTIBLE_RATE = 0.0775;
export const TAX_RELIEF_MONTHLY = 300;
export const INCOME_COSTS_UOP = 250;
export const INCOME_COSTS_ZLECENIE_RATE = 0.2;
export const INCOME_COSTS_DZIELO_RATE = 0.5;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Jak To Działa", href: "/#jak-to-dziala" },
  { label: "FAQ", href: "/#faq" },
  { label: "O Nas", href: "/o-nas" },
  { label: "Kontakt", href: "/kontakt" },
] as const;

export const LEGAL_LINKS = [
  { label: "Disclaimer", href: "/disclaimer" },
  { label: "Polityka Prywatności", href: "/privacy-policy" },
  { label: "Regulamin", href: "/terms-and-conditions" },
  { label: "Kontakt", href: "/kontakt" },
] as const;

export const FAQ_ITEMS = [
  {
    question: "Jak obliczyć wynagrodzenie netto?",
    answer:
      "Wynagrodzenie netto obliczasz, odejmując od kwoty brutto składki ZUS (emerytalna, rentowa, chorobowa), składkę zdrowotną oraz zaliczkę na podatek dochodowy PIT. Nasz kalkulator wynagrodzeń automatycznie wykonuje te obliczenia zgodnie z polskim prawem podatkowym na rok 2025 — wystarczy wpisać kwotę brutto, wybrać typ umowy i kliknąć „Oblicz”.",
  },
  {
    question: "Co to jest ZUS i ile wynosi?",
    answer:
      "ZUS (Zakład Ubezpieczeń Społecznych) to obowiązkowe składki na ubezpieczenia społeczne. W 2025 roku pracownik na umowie o pracę lub zlecenie płaci: 9,76% na emerytalne, 1,5% na rentowe oraz 2,45% na chorobowe — łącznie 13,71% wynagrodzenia brutto. Składki te finansują emerytury, renty i świadczenia chorobowe.",
  },
  {
    question: "Czym różni się umowa o pracę od umowy zlecenia?",
    answer:
      "Umowa o pracę wiąże się z pełnymi składkami ZUS, stałymi kosztami uzyskania przychodu (250 zł) i pełnym pakietem praw pracowniczych. Umowa zlecenie również podlega składkom ZUS, ale koszty uzyskania przychodu wynoszą 20% kwoty brutto. Umowa o dzieło nie podlega składkom ZUS — płacisz wyłącznie podatek PIT z 50% kosztami uzyskania przychodu.",
  },
  {
    question: "Kiedy stosuje się stawkę PIT 32%?",
    answer:
      "Stawka 32% PIT stosuje się w ramach tzw. „drugiego progu podatkowego” dla osób, których roczny dochód przekracza 120 000 zł (po odliczeniu kosztów). W kalkulatorze możesz wybrać stawkę 32%, jeśli Twoje roczne dochody kwalifikują Cię do wyższego progu podatkowego. Domyślnie większość pracowników stosuje stawkę 17%.",
  },
  {
    question: "Czy kalkulator uwzględnia ulgę podatkową?",
    answer:
      "Tak. Po włączeniu opcji „Ulga podatkowa (kwota wolna od podatku)” kalkulator zmniejsza miesięczną zaliczkę na PIT o 300 zł — odpowiada to rocznej kwocie wolnej od podatku wynoszącej 30 000 zł w 2025 roku. Ulga ta jest dostępna dla osób, które nie korzystają z ulgi dla młodych pracowników.",
  },
  {
    question: "Jak działa składka zdrowotna w 2025?",
    answer:
      "Składka zdrowotna w 2025 roku wynosi 9% podstawy wymiaru, która stanowi wynagrodzenie brutto pomniejszone o składki społeczne pracownika. Od składki zdrowotnej można odliczyć 7,75% podstawy wymiaru przy obliczaniu zaliczki na PIT. Składka zdrowotna nie dotyczy umowy o dzieło w standardowym modelu kalkulatora.",
  },
] as const;
