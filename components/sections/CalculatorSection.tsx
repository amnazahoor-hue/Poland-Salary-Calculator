"use client";

import {
  BadgePercent,
  Calculator,
  Download,
  FileText,
  Loader2,
  Mail,
  ShieldCheck,
  Wallet,
} from "lucide-react";
import { useState } from "react";
import Button from "@/components/ui/Button";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { useLanguage, type Language } from "@/components/language/LanguageProvider";
import {
  calculate,
  formatPLN,
  validateGrossSalary,
  type CalculatorResult,
} from "@/lib/calculator";
import { SITE_URL } from "@/lib/constants";

const employmentOptions = [
  {
    value: "uop",
    label: { pl: "Umowa o pracę", en: "Employment contract" },
    description: {
      pl: "Pełne składki i standardowe koszty",
      en: "Full contributions and standard costs",
    },
  },
  {
    value: "zlecenie",
    label: { pl: "Umowa zlecenie", en: "Mandate contract" },
    description: {
      pl: "20% kosztów uzyskania przychodu",
      en: "20% tax-deductible costs",
    },
  },
  {
    value: "dzielo",
    label: { pl: "Umowa o dzieło", en: "Specific-task contract" },
    description: {
      pl: "Bez ZUS, 50% kosztów autorskich",
      en: "No ZUS, 50% author costs",
    },
  },
] as const;

type EmploymentType = (typeof employmentOptions)[number]["value"];

const getEmploymentLabel = (type: EmploymentType) =>
  employmentOptions.find((option) => option.value === type)?.label.pl ?? "Umowa";

const calculatorCopy = {
  pl: {
    kicker: "Kalkulator brutto-netto",
    title: "Wszystkie dane do wypłaty w jednym eleganckim panelu",
    description:
      "Wprowadź kwotę brutto, wybierz typ umowy i od razu zobacz wynagrodzenie netto z czytelnym rozbiciem na ZUS, składkę zdrowotną oraz PIT.",
    grossLabel: "Wynagrodzenie brutto miesięcznie",
    contractType: "Typ umowy",
    taxRelief: "Ulga podatkowa",
    taxReliefHint: "Kwota wolna od podatku w rozliczeniu miesięcznym.",
    pitRate: "Stawka PIT",
    submit: "Oblicz wynagrodzenie",
    loading: "Obliczanie...",
    summaryTitle: "Podsumowanie wyniku",
    summarySubtitle: "Czytelny obraz tego, co trafia na konto.",
    netSalary: "Wynagrodzenie netto",
    shareTitle: "Udostępnij lub zapisz wynik",
    emptyItems: [
      "Kwota netto po odliczeniach",
      "Składki ZUS i zdrowotna",
      "Zaliczka PIT i suma potrąceń",
    ],
    readyTitle: "Gotowy do obliczeń",
    readyDescription:
      "Wynik pojawi się tutaj natychmiast po wpisaniu wynagrodzenia i kliknięciu przycisku obliczania.",
  },
  en: {
    kicker: "Gross-to-net calculator",
    title: "All salary details in one elegant panel",
    description:
      "Enter your gross salary, choose the contract type, and instantly see your net pay with a clear ZUS, health insurance, and PIT breakdown.",
    grossLabel: "Monthly gross salary",
    contractType: "Contract type",
    taxRelief: "Tax relief",
    taxReliefHint: "Monthly tax-free allowance deduction.",
    pitRate: "PIT rate",
    submit: "Calculate salary",
    loading: "Calculating...",
    summaryTitle: "Result summary",
    summarySubtitle: "A clear view of what reaches your account.",
    netSalary: "Net salary",
    shareTitle: "Share or save result",
    emptyItems: [
      "Net amount after deductions",
      "ZUS and health insurance",
      "PIT advance and total deductions",
    ],
    readyTitle: "Ready to calculate",
    readyDescription:
      "Your result will appear here immediately after entering salary details and clicking calculate.",
  },
} as const;

const resultRows = (results: CalculatorResult, language: Language = "pl") =>
  language === "pl"
    ? [
        { label: "ZUS pracownik", value: results.zusEmployee },
        { label: "Składka zdrowotna", value: results.healthInsurance },
        { label: "Zaliczka PIT", value: results.incomeTax },
        { label: "Łączne odliczenia", value: results.totalDeductions },
      ]
    : [
        { label: "Employee ZUS", value: results.zusEmployee },
        { label: "Health insurance", value: results.healthInsurance },
        { label: "PIT advance", value: results.incomeTax },
        { label: "Total deductions", value: results.totalDeductions },
      ];

function createShareText({
  gross,
  employmentType,
  pitRate,
  taxRelief,
  results,
}: {
  gross: number;
  employmentType: EmploymentType;
  pitRate: 17 | 32;
  taxRelief: boolean;
  results: CalculatorResult;
}) {
  return [
    "Profesjonalne podsumowanie wynagrodzenia 2025",
    "",
    `Kwota brutto: ${formatPLN(gross)}`,
    `Typ umowy: ${getEmploymentLabel(employmentType)}`,
    `Stawka PIT: ${pitRate}%`,
    `Ulga podatkowa: ${taxRelief ? "tak" : "nie"}`,
    "",
    `Netto na rękę: ${formatPLN(results.netSalary)}`,
    `ZUS pracownik: ${formatPLN(results.zusEmployee)}`,
    `Składka zdrowotna: ${formatPLN(results.healthInsurance)}`,
    `Zaliczka PIT: ${formatPLN(results.incomeTax)}`,
    `Łączne odliczenia: ${formatPLN(results.totalDeductions)}`,
    "",
    `Sprawdź swoje wynagrodzenie tutaj: ${SITE_URL}/#kalkulator`,
  ].join("\n");
}

function formatPdfMoney(value: number) {
  return formatPLN(value)
    .replace(/\u00a0/g, " ")
    .replace(/\s*zł/g, " PLN");
}

async function downloadResultPdf({
  gross,
  employmentType,
  pitRate,
  taxRelief,
  results,
}: {
  gross: number;
  employmentType: EmploymentType;
  pitRate: 17 | 32;
  taxRelief: boolean;
  results: CalculatorResult;
}) {
  const { jsPDF } = await import("jspdf");
  const doc = new jsPDF({ unit: "mm", format: "a4" });
  const pageWidth = doc.internal.pageSize.getWidth();
  const generatedDate = new Intl.DateTimeFormat("pl-PL", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(new Date());
  const pdfEmploymentLabel =
    employmentType === "uop"
      ? "Umowa o prace"
      : employmentType === "zlecenie"
        ? "Umowa zlecenie"
        : "Umowa o dzielo";
  const rows = [
    { label: "Kwota brutto", value: formatPdfMoney(gross), highlight: false },
    { label: "Wynagrodzenie netto", value: formatPdfMoney(results.netSalary), highlight: true },
    { label: "ZUS pracownik", value: formatPdfMoney(results.zusEmployee), highlight: false },
    { label: "Skladka zdrowotna", value: formatPdfMoney(results.healthInsurance), highlight: false },
    { label: "Zaliczka PIT", value: formatPdfMoney(results.incomeTax), highlight: false },
    { label: "Laczne odliczenia", value: formatPdfMoney(results.totalDeductions), highlight: true },
  ];

  doc.setFillColor(245, 247, 251);
  doc.rect(0, 0, pageWidth, 297, "F");

  doc.setFillColor(255, 255, 255);
  doc.roundedRect(14, 12, 182, 273, 8, 8, "F");
  doc.setDrawColor(219, 229, 240);
  doc.setLineWidth(0.3);
  doc.roundedRect(14, 12, 182, 273, 8, 8, "S");

  // Logo mark
  doc.setFillColor(16, 24, 40);
  doc.roundedRect(22, 22, 14, 14, 3, 3, "F");
  doc.setFillColor(255, 255, 255);
  doc.roundedRect(25, 24, 8, 10, 2, 2, "F");
  doc.setFillColor(20, 184, 166);
  doc.roundedRect(27, 27, 4, 1.8, 0.8, 0.8, "F");
  doc.setFillColor(16, 24, 40);
  doc.roundedRect(27, 30, 2, 1.6, 0.4, 0.4, "F");
  doc.roundedRect(30, 30, 2, 1.6, 0.4, 0.4, "F");
  doc.setFillColor(245, 158, 11);
  doc.roundedRect(30, 32.5, 2, 1.6, 0.4, 0.4, "F");

  doc.setFont("helvetica", "bold");
  doc.setFontSize(16);
  doc.setTextColor(16, 24, 40);
  doc.text("Kalkulator Wynagrodzen", 42, 30);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(9);
  doc.setTextColor(82, 97, 115);
  doc.text("Profesjonalny raport brutto-netto", 42, 35);

  doc.setFillColor(238, 244, 255);
  doc.roundedRect(145, 24, 35, 10, 5, 5, "F");
  doc.setFontSize(9);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(79, 70, 229);
  doc.text("Raport 2025", 152, 30.5);

  // Net salary hero card
  doc.setFillColor(16, 24, 40);
  doc.roundedRect(22, 48, 166, 42, 7, 7, "F");
  doc.setFillColor(79, 70, 229);
  doc.roundedRect(118, 48, 70, 42, 7, 7, "F");
  doc.setFillColor(20, 184, 166);
  doc.roundedRect(160, 48, 28, 42, 7, 7, "F");
  doc.setFont("helvetica", "bold");
  doc.setFontSize(10);
  doc.setTextColor(220, 252, 246);
  doc.text("WYNAGRODZENIE NETTO", 32, 62);
  doc.setFontSize(27);
  doc.setTextColor(255, 255, 255);
  doc.text(formatPdfMoney(results.netSalary), 32, 78);

  const meta = [
    ["Typ umowy", pdfEmploymentLabel],
    ["Stawka PIT", `${pitRate}%`],
    ["Ulga podatkowa", taxRelief ? "Tak" : "Nie"],
    ["Data wygenerowania", generatedDate],
  ];

  meta.forEach(([label, value], index) => {
    const x = index % 2 === 0 ? 22 : 107;
    const y = index < 2 ? 102 : 124;
    doc.setFillColor(238, 244, 255);
    doc.roundedRect(x, y, 81, 17, 4, 4, "F");
    doc.setFont("helvetica", "normal");
    doc.setFontSize(8);
    doc.setTextColor(82, 97, 115);
    doc.text(label, x + 5, y + 6);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(10);
    doc.setTextColor(16, 24, 40);
    doc.text(value, x + 5, y + 12.5, { maxWidth: 70 });
  });

  doc.setFont("helvetica", "bold");
  doc.setFontSize(14);
  doc.setTextColor(16, 24, 40);
  doc.text("Podsumowanie obliczen", 22, 158);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(9);
  doc.setTextColor(82, 97, 115);
  doc.text("Wszystkie wartosci podane sa w PLN.", 22, 164);

  rows.forEach((row, index) => {
    const y = 174 + index * 14;
    if (row.highlight) {
      doc.setFillColor(220, 252, 246);
      doc.setDrawColor(20, 184, 166);
    } else {
      doc.setFillColor(248, 250, 252);
      doc.setDrawColor(219, 229, 240);
    }
    doc.roundedRect(22, y, 166, 10.5, 3, 3, "FD");
    doc.setFont("helvetica", row.highlight ? "bold" : "normal");
    doc.setFontSize(9.5);
    doc.setTextColor(row.highlight ? 16 : 82, row.highlight ? 24 : 97, row.highlight ? 40 : 115);
    doc.text(row.label, 28, y + 6.8);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(16, 24, 40);
    doc.text(row.value, 182, y + 6.8, { align: "right" });
  });

  doc.setDrawColor(219, 229, 240);
  doc.line(22, 263, 188, 263);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(8.5);
  doc.setTextColor(82, 97, 115);
  doc.text(
    "Raport ma charakter informacyjny. Ostateczne rozliczenie moze zalezec od indywidualnej sytuacji podatkowej i zasad pracodawcy.",
    22,
    271,
    { maxWidth: 166 }
  );
  doc.setFont("helvetica", "bold");
  doc.setTextColor(79, 70, 229);
  doc.text(`Oblicz wlasne wynagrodzenie: ${SITE_URL}/#kalkulator`, 22, 280);

  doc.save(`wynagrodzenie-netto-${generatedDate.replace(/\./g, "-")}.pdf`);
}

export default function CalculatorSection() {
  const { language } = useLanguage();
  const copy = calculatorCopy[language];
  const [grossSalary, setGrossSalary] = useState("");
  const [employmentType, setEmploymentType] = useState<"uop" | "zlecenie" | "dzielo">("uop");
  const [taxRelief, setTaxRelief] = useState(true);
  const [pitRate, setPitRate] = useState<17 | 32>(17);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<CalculatorResult | null>(null);
  const [showResults, setShowResults] = useState(false);

  const handleCalculate = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationError = validateGrossSalary(grossSalary);
    if (validationError) {
      setError(validationError);
      setShowResults(false);
      return;
    }

    setError(null);
    setLoading(true);
    setShowResults(false);

    await new Promise((resolve) => setTimeout(resolve, 400));

    const result = calculate({
      grossSalary: parseFloat(grossSalary),
      employmentType,
      taxRelief,
      pitRate,
    });

    setResults(result);
    setLoading(false);
    setShowResults(true);
  };

  const grossValue = Number.parseFloat(grossSalary) || 0;
  const shareText = results
    ? createShareText({
        gross: grossValue,
        employmentType,
        pitRate,
        taxRelief,
        results,
      })
    : "";
  const whatsappHref = `https://wa.me/?text=${encodeURIComponent(shareText)}`;
  const emailHref = `mailto:?subject=${encodeURIComponent(
    "Wynik wynagrodzenia netto 2025"
  )}&body=${encodeURIComponent(shareText)}`;

  const handleExportPdf = async () => {
    if (!results) return;

    await downloadResultPdf({
      gross: grossValue,
      employmentType,
      pitRate,
      taxRelief,
      results,
    });
  };

  return (
    <section
      id="kalkulator"
      className="relative overflow-hidden bg-gradient-to-b from-white via-muted/45 to-white px-4 pb-20 pt-12 md:px-6 md:pb-28 md:pt-16"
    >
      <div className="orb -right-28 top-20 h-72 w-72 bg-secondary/20" />
      <div className="orb -left-24 bottom-10 h-64 w-64 bg-accent/20" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <span className="section-kicker">{copy.kicker}</span>
          <h2 className="mx-auto mb-4 max-w-3xl text-text-primary">
            {copy.title}
          </h2>
          <p className="mx-auto max-w-2xl text-lg leading-8 text-text-secondary">
            {copy.description}
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div className="glass-card rounded-[2rem] p-6 md:p-8">
            <form onSubmit={handleCalculate} className="space-y-7" noValidate>
              <div>
                <label
                  htmlFor="wynagrodzenie_brutto"
                  className="mb-3 flex items-center gap-2 text-sm font-bold text-text-primary"
                >
                  <Wallet size={18} className="text-secondary" />
                  {copy.grossLabel}
                </label>
                <input
                  id="wynagrodzenie_brutto"
                  type="number"
                  name="wynagrodzenie_brutto"
                  placeholder="np. 5000"
                  min={1}
                  step="0.01"
                  value={grossSalary}
                  onChange={(e) => {
                    setGrossSalary(e.target.value);
                    if (error) setError(null);
                  }}
                  className={`soft-input text-lg font-semibold ${
                    error ? "border-error focus:border-error focus:ring-error/20" : ""
                  }`}
                  aria-invalid={!!error}
                  aria-describedby={error ? "gross-error" : undefined}
                />
                {error && (
                  <p id="gross-error" className="mt-2 text-sm font-semibold text-error" role="alert">
                    {error}
                  </p>
                )}
              </div>

              <fieldset>
                <legend className="mb-3 flex items-center gap-2 text-sm font-bold text-text-primary">
                  <FileText size={18} className="text-secondary" />
                  {copy.contractType}
                </legend>
                <div className="grid gap-3 md:grid-cols-3">
                  {employmentOptions.map((option) => (
                    <label
                      key={option.value}
                      className={`cursor-pointer rounded-2xl border p-4 transition-all ${
                        employmentType === option.value
                          ? "border-secondary bg-secondary/10 shadow-card"
                          : "border-border/70 bg-white/70 hover:border-secondary/40 hover:bg-white"
                      }`}
                    >
                      <input
                        type="radio"
                        name="typ_umowy"
                        value={option.value}
                        checked={employmentType === option.value}
                        onChange={() => setEmploymentType(option.value)}
                        className="sr-only"
                      />
                      <span className="mb-1 block font-heading text-sm font-bold text-text-primary">
                        {option.label[language]}
                      </span>
                      <span className="block text-xs leading-5 text-text-secondary">
                        {option.description[language]}
                      </span>
                    </label>
                  ))}
                </div>
              </fieldset>

              <div className="grid gap-4 md:grid-cols-[1fr_0.85fr]">
                <div className="flex items-center justify-between gap-4 rounded-2xl border border-border/70 bg-white/70 px-4 py-4">
                  <div>
                    <label
                      htmlFor="ulga_podatkowa"
                      className="font-heading text-sm font-bold text-text-primary"
                    >
                      {copy.taxRelief}
                    </label>
                    <p className="mt-1 text-xs text-text-secondary">
                      {copy.taxReliefHint}
                    </p>
                  </div>
                  <button
                    type="button"
                    id="ulga_podatkowa"
                    role="switch"
                    aria-checked={taxRelief}
                    onClick={() => setTaxRelief(!taxRelief)}
                    className={`relative h-8 w-14 shrink-0 overflow-hidden rounded-full shadow-inner transition-colors ${
                      taxRelief ? "bg-accent" : "bg-slate-300"
                    }`}
                  >
                    <span
                      className={`absolute left-1 top-1 h-6 w-6 rounded-full bg-white shadow-md transition-transform ${
                        taxRelief ? "translate-x-6" : "translate-x-0"
                      }`}
                    />
                  </button>
                </div>

                <fieldset className="rounded-2xl border border-border/70 bg-white/70 px-4 py-4">
                  <legend className="sr-only">Stawka PIT</legend>
                  <div className="mb-3 flex items-center gap-2 text-sm font-bold text-text-primary">
                    <BadgePercent size={18} className="text-secondary" />
                    {copy.pitRate}
                  </div>
                  <div className="flex gap-3">
                    {([17, 32] as const).map((rate) => (
                      <label
                        key={rate}
                        className={`flex flex-1 cursor-pointer items-center justify-center rounded-xl border px-4 py-3 text-sm font-bold transition-all ${
                          pitRate === rate
                            ? "border-secondary bg-secondary text-white shadow-sm"
                            : "border-border bg-white text-text-secondary hover:border-secondary/50"
                        }`}
                      >
                        <input
                          type="radio"
                          name="stawka_pit"
                          value={rate}
                          checked={pitRate === rate}
                          onChange={() => setPitRate(rate)}
                          className="sr-only"
                        />
                        {rate}%
                      </label>
                    ))}
                  </div>
                </fieldset>
              </div>

              <Button type="submit" size="lg" className="w-full" disabled={loading}>
                {loading ? (
                  <>
                    <Loader2 className="animate-spin" size={20} />
                    {copy.loading}
                  </>
                ) : (
                  <>
                    <Calculator size={20} />
                    {copy.submit}
                  </>
                )}
              </Button>
            </form>
          </div>

          <div className="glass-card rounded-[2rem] p-6 md:p-8">
            <div className="mb-6 flex items-center gap-3">
              <div className="rounded-2xl bg-accent/10 p-3">
                <ShieldCheck className="text-accent" size={24} />
              </div>
              <div>
                <p className="font-heading text-lg font-bold text-text-primary">
                  {copy.summaryTitle}
                </p>
                <p className="text-sm text-text-secondary">
                  {copy.summarySubtitle}
                </p>
              </div>
            </div>

            {showResults && results ? (
              <div className="overflow-hidden rounded-[1.5rem] border border-border/70 bg-white/90">
                  <div className="bg-gradient-to-br from-primary via-secondary to-accent px-6 py-6 text-white">
                    <p className="mb-2 text-sm font-semibold text-white/75">
                      {copy.netSalary}
                    </p>
                    <p className="font-heading text-4xl font-bold md:text-5xl">
                      <AnimatedCounter to={results.netSalary} duration={1.2} suffix=" zł" />
                    </p>
                  </div>

                  <div className="space-y-3 p-4">
                    {resultRows(results, language).map((row) => (
                      <div
                        key={row.label}
                        className="flex items-center justify-between rounded-2xl bg-muted/50 px-4 py-3"
                      >
                        <span className="text-sm text-text-secondary">{row.label}</span>
                        <span className="font-heading font-bold text-text-primary">
                          {row.label === "Łączne odliczenia" && showResults ? (
                            <AnimatedCounter to={row.value} duration={1} suffix=" zł" />
                          ) : (
                            formatPLN(row.value)
                          )}
                        </span>
                      </div>
                    ))}

                    <div className="rounded-[1.35rem] border border-border/70 bg-white p-4">
                      <p className="mb-3 font-heading text-sm font-bold text-text-primary">
                        {copy.shareTitle}
                      </p>
                      <div className="grid gap-3 sm:grid-cols-3">
                        <a
                          href={whatsappHref}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#25D366] px-4 py-3 text-sm font-bold text-white shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-card"
                        >
                          <svg
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                            className="h-[18px] w-[18px] fill-white"
                          >
                            <path d="M20.5 3.5A11.8 11.8 0 0 0 12.1 0C5.6 0 .3 5.3.3 11.8c0 2.1.5 4.1 1.6 5.9L.2 24l6.5-1.7a11.8 11.8 0 0 0 5.6 1.4h.1c6.5 0 11.8-5.3 11.8-11.8 0-3.2-1.3-6.2-3.7-8.4ZM12.3 21.7h-.1a9.8 9.8 0 0 1-5-1.4l-.4-.2-3.8 1 1-3.7-.2-.4a9.7 9.7 0 0 1-1.5-5.2c0-5.4 4.4-9.8 9.9-9.8 2.6 0 5.1 1 7 2.9a9.8 9.8 0 0 1 2.9 7c0 5.4-4.4 9.8-9.8 9.8Zm5.4-7.3c-.3-.1-1.8-.9-2-.9-.3-.1-.5-.1-.7.1-.2.3-.8.9-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.2-.4-2.3-1.4-.8-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6l.5-.6c.1-.2.2-.3.3-.5.1-.2.1-.4 0-.6 0-.1-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.1 1.1-1.1 2.7s1.2 3.1 1.3 3.3c.2.2 2.3 3.5 5.5 4.9.8.3 1.4.5 1.8.7.8.2 1.5.2 2.1.1.6-.1 1.8-.7 2-1.4.2-.7.2-1.3.2-1.4-.1-.1-.3-.2-.6-.4Z" />
                          </svg>
                          WhatsApp
                        </a>
                        <a
                          href={emailHref}
                          className="inline-flex items-center justify-center gap-2 rounded-2xl bg-primary px-4 py-3 text-sm font-bold text-white shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-card"
                        >
                          <Mail size={17} />
                          Email
                        </a>
                        <button
                          type="button"
                          onClick={handleExportPdf}
                          className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-secondary to-accent px-4 py-3 text-sm font-bold text-white shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-card"
                        >
                          <Download size={17} />
                          PDF
                        </button>
                      </div>
                    </div>
                  </div>
              </div>
            ) : (
              <div className="space-y-4">
                  {copy.emptyItems.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 rounded-2xl border border-border/70 bg-white/70 p-4"
                    >
                      <span className="h-3 w-3 rounded-full bg-accent" />
                      <span className="font-semibold text-text-secondary">{item}</span>
                    </div>
                  ))}
                  <div className="rounded-[1.5rem] bg-primary p-5 text-white">
                    <p className="mb-2 font-heading text-xl font-bold">
                      {copy.readyTitle}
                    </p>
                    <p className="text-sm leading-6 text-white/70">
                      {copy.readyDescription}
                    </p>
                  </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
