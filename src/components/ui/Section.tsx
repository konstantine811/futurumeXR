import React, { type ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  gridBg?: boolean;
}

export const Section: React.FC<SectionProps> = ({
  children,
  className = "",
  id,
  gridBg = false,
}) => {
  return (
    <section
      id={id}
      className={`relative py-20 md:py-32 px-4 md:px-8 max-w-7xl mx-auto w-full ${className}`}
    >
      {gridBg && (
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.03]"
          style={{
            backgroundImage: "radial-gradient(var(--tw-gradient-stops))",
          }}
        >
          {/* We use a workaround for CSS variable radial gradient via inline styles if needed, 
              but standard classes are better. Let's stick to the inline style but adjust color. */}
          <div className="absolute inset-0 bg-[radial-gradient(#34E1A1_1px,transparent_1px)] [background-size:40px_40px] opacity-20 dark:opacity-10"></div>
        </div>
      )}
      {children}
    </section>
  );
};

export const SectionTitle: React.FC<{
  children: ReactNode;
  subtitle?: string;
  align?: "left" | "center";
}> = ({ children, subtitle, align = "center" }) => {
  return (
    <div
      className={`mb-16 ${align === "center" ? "text-center" : "text-left"}`}
    >
      <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 dark:text-white mb-4 tracking-tight">
        {children}
      </h2>
      {subtitle && (
        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
      <div
        className={`h-1 w-24 bg-accent mt-6 rounded-full ${
          align === "center" ? "mx-auto" : ""
        }`}
      />
    </div>
  );
};
