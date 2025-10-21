import React, { createContext, useContext, useMemo } from "react";

type Messages = {
  docs: string;
  download: string;
  or_other: string;
  hero_kicker: string; 
  hero_title: string;
  hero_subtitle: string;
  features_title: string;   
  privacy_first: string;
  privacy_copy: string;
  simple_by_design: string;
  simple_copy: string;
  lightweight: string;
  lightweight_copy: string;
  footer_made: string;
};

const en: Messages = {
  docs: "Docs",
  download: "Download",
  or_other: "Or for other platforms",
  hero_kicker: "⚡",
  hero_title: "Lightweight and Simple open source alternative to WeTransfer",
  hero_subtitle: "For desktop available for macOS, Windows and Linux",
  features_title: "With features you will fall in love 😍",
  privacy_first: "Privacy-First",
  privacy_copy:
    "Anonymous sharing by default. You don’t have to create an account or provide your email to share files.",
  simple_by_design: "Simple by design",
  simple_copy:
    "Share files without complications, just upload and share the link with whoever you want. Very simple, right? 😁",
  lightweight: "Lightweight",
  lightweight_copy:
    "Runs quietly in the background without hogging your machine. Ready to provide a great native user experience.",
  footer_made: "Miku Push! 2025 — made with ❤️",
};

const es: Messages = {
  docs: "Docs",
  download: "Descargar",
  or_other: "O para otras plataformas",
  hero_kicker: "⚡",
  hero_title: "Alternativa open source ligera y simple a WeTransfer",
  hero_subtitle: "Para escritorio: macOS, Windows y Linux",
  features_title: "Con funciones de las que te enamorarás 😍",
  privacy_first: "Privacidad primero",
  privacy_copy:
    "Compartición anónima por defecto. No necesitas cuenta ni email para compartir archivos.",
  simple_by_design: "Simple de diseño",
  simple_copy:
    "Comparte sin complicaciones: sube y pasa el enlace. Muy simple, ¿verdad? 😁",
  lightweight: "Ligera",
  lightweight_copy:
    "Funciona en segundo plano sin devorar recursos. Preparada para una gran experiencia nativa.",
  footer_made: "Miku Push! 2025 — hecho con ❤️",
};

const I18nCtx = createContext<Messages>(en);

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const lang = typeof navigator !== "undefined" ? navigator.language : "en";
  const msgs = useMemo(() => (lang.startsWith("es") ? es : en), [lang]);
  return <I18nCtx.Provider value={msgs}>{children}</I18nCtx.Provider>;
}

export function useI18n() {
  return useContext(I18nCtx);
}
