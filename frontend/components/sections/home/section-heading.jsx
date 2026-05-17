"use client";

import { motion } from "framer-motion";

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function renderHighlightedTitle(title, highlights) {
  if (typeof title !== "string" || !highlights?.length) {
    return title;
  }

  const terms = [...highlights].filter(Boolean).sort((left, right) => right.length - left.length);

  if (!terms.length) {
    return title;
  }

  const pattern = new RegExp(`(${terms.map(escapeRegExp).join("|")})`, "gi");
  const parts = title.split(pattern);
  let highlightIndex = 0;

  return parts.map((part, index) => {
    if (!terms.some((term) => term.toLowerCase() === part.toLowerCase())) {
      return part;
    }

    const colorClass = highlightIndex % 2 === 0 ? "text-primary" : "text-accent";
    highlightIndex += 1;

    return (
      <span key={`${part}-${index}`} className={colorClass}>
        {part}
      </span>
    );
  });
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className = "",
  eyebrowIcon,
  eyebrowClassName = "",
  titleClassName = "",
  descriptionClassName = "",
  highlights = [],
}) {
  const alignmentClasses = align === "left" ? "text-left items-start" : "text-center items-center";
  const renderedTitle = renderHighlightedTitle(title, highlights);

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={`mx-auto flex max-w-3xl flex-col gap-3 ${alignmentClasses} ${className}`}
    >
      {eyebrow ? (
        <div className={`flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.28em] text-primary/90 ${eyebrowClassName}`}>
          <span className="h-2 w-2 rounded-full bg-accent" />
          {eyebrowIcon}
          <span>{eyebrow}</span>
        </div>
      ) : null}
      <h2 className={`text-3xl font-semibold leading-[1.08] tracking-[-0.04em] text-foreground text-balance sm:text-4xl lg:text-5xl ${titleClassName}`}>
        {renderedTitle}
      </h2>
      {description ? (
        <p className={`max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base ${descriptionClassName}`}>
          {description}
        </p>
      ) : null}
    </motion.div>
  );
}