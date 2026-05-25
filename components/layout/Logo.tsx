interface LogoProps {
  variant?: "light" | "dark";
  size?: "desktop" | "mobile" | "footer" | "icon";
  className?: string;
}

export default function Logo({
  variant = "light",
  size = "desktop",
  className = "",
}: LogoProps) {
  const textColor =
    variant === "dark" ? "var(--color-card-bg)" : "var(--color-text-primary)";

  const dimensions = {
    desktop: { width: 205, height: 42 },
    mobile: { width: 152, height: 34 },
    footer: { width: 190, height: 38 },
    icon: { width: 32, height: 32 },
  };

  const { width, height } = dimensions[size];
  const showWordmark = size !== "icon";

  return (
    <svg
      width={width}
      height={height}
      viewBox={showWordmark ? "0 0 210 42" : "0 0 32 32"}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="KalkulatorWynagrodzeń"
      role="img"
    >
      <g transform={showWordmark ? "translate(0 5)" : undefined}>
        <rect width="32" height="32" rx="10" fill="var(--color-primary)" />
        <circle cx="16" cy="16" r="13" fill="var(--color-secondary)" opacity="0.18" />
        <rect
          x="6"
          y="5"
          width="20"
          height="23"
          rx="6"
          fill="var(--color-card-bg)"
        />
        <rect x="10" y="10" width="12" height="3" rx="1.5" fill="var(--color-accent)" />
        <rect
          x="10"
          y="16"
          width="5"
          height="3"
          rx="1"
          fill="var(--color-primary)"
        />
        <rect
          x="17"
          y="16"
          width="5"
          height="3"
          rx="1"
          fill="var(--color-primary)"
        />
        <rect
          x="10"
          y="22"
          width="5"
          height="3"
          rx="1"
          fill="var(--color-primary)"
        />
        <rect
          x="17"
          y="22"
          width="5"
          height="3"
          rx="1"
          fill="var(--color-gold)"
        />
      </g>
      {showWordmark && (
        <text
          x="38"
          y="26"
          fill={textColor}
          fontFamily="var(--font-sora), sans-serif"
          fontSize="12"
          fontWeight="700"
        >
          Kalkulator Wynagrodzeń
        </text>
      )}
    </svg>
  );
}
