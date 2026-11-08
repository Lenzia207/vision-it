import { Fragment, ReactNode } from "react";

/** Replaces {token} placeholders in a message with the given elements. */
export function fillTokens(text: string, tokens: Record<string, ReactNode>): ReactNode {
  return text.split(/\{(\w+)\}/).map((part, i) => (i % 2 === 1 ? <Fragment key={i}>{tokens[part]}</Fragment> : part));
}
