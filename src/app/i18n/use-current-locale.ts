"use client";
import { useParams } from "next/navigation";

/**
 * Client hook to read the current locale from route params.
 * Falls back to routing.defaultLocale when not present.
 */
export default function useCurrentLocale(): string {
  const params = useParams();
  const currentLocale = params.locale as string;
  
  return currentLocale;
}
