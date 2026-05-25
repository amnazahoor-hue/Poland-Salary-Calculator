import {
  HEALTH_DEDUCTIBLE_RATE,
  HEALTH_RATE,
  INCOME_COSTS_DZIELO_RATE,
  INCOME_COSTS_UOP,
  INCOME_COSTS_ZLECENIE_RATE,
  TAX_RELIEF_MONTHLY,
  ZUS_RATES,
} from "./constants";

export interface CalculatorInput {
  grossSalary: number;
  employmentType: "uop" | "zlecenie" | "dzielo";
  taxRelief: boolean;
  pitRate: 17 | 32;
}

export interface CalculatorResult {
  netSalary: number;
  zusEmployee: number;
  zusRetirement: number;
  zusDisability: number;
  zusSick: number;
  healthInsurance: number;
  incomeTax: number;
  totalDeductions: number;
}

function round(value: number): number {
  return Math.round(value * 100) / 100;
}

function calculateZus(gross: number) {
  const zusRetirement = round(gross * ZUS_RATES.retirement);
  const zusDisability = round(gross * ZUS_RATES.disability);
  const zusSick = round(gross * ZUS_RATES.sickness);
  const zusEmployee = round(zusRetirement + zusDisability + zusSick);
  return { zusRetirement, zusDisability, zusSick, zusEmployee };
}

function calculatePit(
  taxableBase: number,
  pitRate: 17 | 32,
  taxRelief: boolean
): number {
  let tax = round(taxableBase * (pitRate / 100));
  if (taxRelief) {
    tax = round(Math.max(0, tax - TAX_RELIEF_MONTHLY));
  }
  return Math.max(0, tax);
}

export function calculate(input: CalculatorInput): CalculatorResult {
  const { grossSalary, employmentType, taxRelief, pitRate } = input;
  const gross = grossSalary;

  if (employmentType === "dzielo") {
    const incomeCosts = round(gross * INCOME_COSTS_DZIELO_RATE);
    const taxableBase = Math.max(0, gross - incomeCosts);
    const incomeTax = calculatePit(taxableBase, pitRate, taxRelief);
    const totalDeductions = round(incomeTax);
    const netSalary = round(gross - totalDeductions);

    return {
      netSalary,
      zusEmployee: 0,
      zusRetirement: 0,
      zusDisability: 0,
      zusSick: 0,
      healthInsurance: 0,
      incomeTax,
      totalDeductions,
    };
  }

  const { zusRetirement, zusDisability, zusSick, zusEmployee } =
    calculateZus(gross);

  const healthBase = gross - zusEmployee;
  const healthInsurance = round(healthBase * HEALTH_RATE);
  const healthDeductible = round(healthBase * HEALTH_DEDUCTIBLE_RATE);

  let incomeCosts = 0;
  if (employmentType === "uop") {
    incomeCosts = INCOME_COSTS_UOP;
  } else if (employmentType === "zlecenie") {
    incomeCosts = round(gross * INCOME_COSTS_ZLECENIE_RATE);
  }

  const taxableBase = Math.max(
    0,
    gross - zusEmployee - incomeCosts - healthDeductible
  );
  const incomeTax = calculatePit(taxableBase, pitRate, taxRelief);

  const totalDeductions = round(zusEmployee + healthInsurance + incomeTax);
  const netSalary = round(gross - totalDeductions);

  return {
    netSalary,
    zusEmployee,
    zusRetirement,
    zusDisability,
    zusSick,
    healthInsurance,
    incomeTax,
    totalDeductions,
  };
}

export function formatPLN(value: number): string {
  return (
    new Intl.NumberFormat("pl-PL", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(value) + " zł"
  );
}

export function validateGrossSalary(value: string): string | null {
  if (!value.trim()) {
    return "Wprowadź wynagrodzenie brutto.";
  }
  const num = parseFloat(value);
  if (isNaN(num) || num <= 0) {
    return "Wynagrodzenie musi być liczbą większą od zera.";
  }
  if (num > 1000000) {
    return "Wprowadź realistyczną kwotę wynagrodzenia.";
  }
  return null;
}
