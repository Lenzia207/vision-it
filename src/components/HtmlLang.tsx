"use client";

import { useEffect } from "react";

/**
 * Sets the `lang` attribute on <html> client-side per locale.
 * Required because the root layout (which owns <html>) can't read
 * the [locale] route segment directly.
 */
export function HtmlLang({ locale }: { locale: string }) {
  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  return null;
}
