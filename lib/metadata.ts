import type { Metadata } from "next";
import { SITE_NAME, SITE_URL } from "./constants";

export function createMetadata({
  title,
  description,
  path = "",
  keywords,
}: {
  title: string;
  description: string;
  path?: string;
  keywords?: string;
}): Metadata {
  const url = `${SITE_URL}${path}`;

  return {
    title,
    description,
    keywords,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      locale: "pl_PL",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export const homeMetadata = createMetadata({
  title: "Kalkulator Wynagrodzeń Oblicz Wynagrodzenie Netto | 2025",
  description:
    "Kalkulator brutto netto 2025. Oblicz wynagrodzenie netto dla umowy o pracę, zlecenie i o dzieło. Uwzględnia ZUS, składkę zdrowotną i PIT.",
  keywords:
    "kalkulator wynagrodzeń, kalkulator brutto netto, oblicz netto, ZUS kalkulator",
});
