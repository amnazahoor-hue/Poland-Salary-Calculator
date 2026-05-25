import CalculatorSection from "@/components/sections/CalculatorSection";
import FAQSection from "@/components/sections/FAQSection";
import HeroSection from "@/components/sections/HeroSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import InfoCardsSection from "@/components/sections/InfoCardsSection";
import JsonLd from "@/components/seo/JsonLd";
import { homeMetadata } from "@/lib/metadata";
import {
  breadcrumbSchema,
  faqSchema,
  organizationSchema,
  webApplicationSchema,
} from "@/lib/schemas";
import { SITE_URL } from "@/lib/constants";

export const metadata = homeMetadata;

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={[
          organizationSchema(),
          faqSchema(),
          webApplicationSchema(),
          breadcrumbSchema([{ name: "Home", url: SITE_URL }]),
        ]}
      />
      <HeroSection />
      <CalculatorSection />
      <HowItWorksSection />
      <InfoCardsSection />
      <FAQSection />
    </>
  );
}
