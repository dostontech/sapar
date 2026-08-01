type LogoProps = {
  variant?: "default" | "dark";
  className?: string;
};

export const Logo = ({ variant = "default", className }: LogoProps) => {
  const textColor = variant === "dark" ? "#F7F6F2" : "#1B2A4A";
  const badgeFill = variant === "dark" ? "#F7F6F2" : "#1B2A4A";
  const accent = "#E8A33D";

  return (
    <svg
      className={className}
      width="220"
      height="80"
      viewBox="0 0 340 100"
      role="img"
      aria-label="Sapar logo"
    >
      <rect x="10" y="10" width="80" height="80" rx="20" fill={badgeFill} />
      <path
        d="M32 68 C32 57.2 45.2 58.8 48.8 51.2 C53.2 42 61.2 48.4 68 34"
        fill="none"
        stroke={accent}
        strokeWidth="5.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="32" cy="68" r="2.8" fill={accent} opacity="0.5" />
      <circle cx="68" cy="34" r="4" fill={accent} />
      <text
        x="110"
        y="58"
        fontFamily="Space Grotesk, sans-serif"
        fontWeight="700"
        fontSize="44"
        fill={textColor}
      >
        Sapar
      </text>
      <text
        x="110"
        y="80"
        fontFamily="Inter, sans-serif"
        fontWeight="500"
        fontSize="20"
        fill="#4B5670"
      >
        Business OS
      </text>
    </svg>
  );
};
