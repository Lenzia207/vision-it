interface ContactData {
  name: string;
  company?: string;
  email: string;
  message: string;
  interests?: string[];
  selectedPackage?: string | null;
}

export function getOwnerNotificationEmail(data: ContactData) {
  const { name, company, email, message, interests, selectedPackage } = data;

  const interestHtml = interests && interests.length > 0
    ? `<p><strong>Interesse:</strong> ${interests.join(', ')}${
        selectedPackage ? ` &rarr; Paket: <strong>${selectedPackage}</strong>` : ''
      }</p>`
    : '';

  return {
    subject: `Nachricht von ${name} über vision-it.at`,
    text: `Name: ${name}\nCompany: ${company || 'N/A'}\nEmail: ${email}\n${interests?.length ? `Interesse: ${interests.join(', ')}${selectedPackage ? ` → Paket: ${selectedPackage}` : ''}\n` : ''}\nMessage:\n${message}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #2563eb;">Neue Nachricht vom Kontaktformular VisionIT</h2>
        <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Company:</strong> ${company || 'N/A'}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          ${interestHtml}
        </div>
        <div style="margin-top: 20px;">
          <h3>Nachricht:</h3>
          <p style="white-space: pre-wrap;">${message}</p>
        </div>
      </div>
    `,
  };
}

export function getCustomerConfirmationEmail(data: ContactData, locale: string) {
  const { name, message } = data;  
  
  const translations = {
    en: {
      subject: 'Thank you for contacting me!',
      greeting: `Hello ${name},`,
      intro: "thank you for reaching out to me! I've received your message and will get back to you as soon as possible.",
      yourMessage: 'Your message:',
      closing: 'Best regards,<br>Lena Zyadeh, BSc.',
    },
    de: {
      subject: 'Vielen Dank für deine Nachricht!',
      greeting: `Hallo ${name},`,
      intro: 'vielen Dank für deine Nachricht! Ich habe deine Anfrage erhalten und werde mich so schnell wie möglich bei dir melden.',
      yourMessage: 'Nochmals deine Nachricht bzw. Anfrage:',
      closing: 'Mit freundlichen Grüßen,<br>Lena Zyadeh, BSc.',
    },
  };

  const t = translations[locale as keyof typeof translations] || translations.en;
  
  return {
    subject: t.subject,
    text: `${t.greeting}\n\n${t.intro}\n\n${t.yourMessage}\n${message}\n\n${t.closing.replace('<br>', '\n')}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <p>${t.greeting}</p>
        <p>${t.intro}</p>
        <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="margin-top: 0;">${t.yourMessage}</h3>
          <p style="white-space: pre-wrap;">${message}</p>
        </div>
        <p>${t.closing}</p>
      </div>
    `,
  };
}
