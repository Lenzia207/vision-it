import { emailRegex } from '../_shared/validation';
import type { ContactData } from './email-format';

type ParseResult =
  | { data: ContactData; locale: string }
  | { error: string; status: number };

const isString = (value: unknown): value is string => typeof value === 'string';
const stringList = (value: unknown) => (Array.isArray(value) ? value.filter(isString) : undefined);

/** Validates the raw request body of the contact form — never trusts the cast. */
export function parseContactPayload(body: unknown): ParseResult {
  const payload = (body && typeof body === 'object' ? body : {}) as Record<string, unknown>;
  const { name, company, email, message, locale, privacyAccepted, interests, selectedPackage, selectedServices } = payload;

  if (!name || !email || !message || !isString(name) || !isString(email) || !isString(message)) {
    return { error: 'Invalid  input', status: 400 };
  }
  if (message.length > 5000) {
    return { error: 'Message too long', status: 413 };
  }
  if (!emailRegex.test(email)) {
    return { error: 'Invalid email format', status: 400 };
  }
  if (privacyAccepted !== true) {
    return { error: 'Privacy policy not accepted', status: 400 };
  }

  return {
    data: {
      name,
      company: isString(company) ? company : undefined,
      email,
      message,
      interests: stringList(interests),
      selectedPackage: isString(selectedPackage) ? selectedPackage : null,
      selectedServices: stringList(selectedServices),
    },
    locale: isString(locale) ? locale : 'de',
  };
}
