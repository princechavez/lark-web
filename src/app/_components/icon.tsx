type IconProps = {
  name: string;
  className?: string;
  filled?: boolean;
};

/** Material Symbols Outlined glyph. The font is loaded globally in layout.tsx. */
export function Icon({ name, className, filled }: IconProps) {
  return (
    <span
      className={`material-symbols-outlined ${className ?? ""}`}
      style={filled ? { fontVariationSettings: "'FILL' 1" } : undefined}
      aria-hidden="true"
    >
      {name}
    </span>
  );
}
