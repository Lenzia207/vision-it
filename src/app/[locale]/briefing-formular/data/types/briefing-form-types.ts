// ─── Shared option shapes ────────────────────────────────────────────────────

/** A checkbox item that maps to a boolean key in the form state */
export interface CheckboxOption {
  /** Key matching the boolean field in the corresponding state group */
  key: string;
  label: string;
  /** When checked, show an inline text input with this name */
  inlineInputName?: string;
  inlineInputPlaceholder?: string;
}

/** A radio / pill option */
export interface RadioOption {
  value: string;
  label: string;
}

// ─── Translated UI text (loaded from JSON message files) ─────────────────────

export interface BriefingFormData {
  title: string;
  description: string;
  submitButton: string;
  submittingText: string;
  successMessage: string;
  errorMessage: string;
  privacyLabel: string;

  clientInfo: {
    sectionTitle: string;
    /** Labels for the four text inputs, in render order */
    fields: Array<{ name: string; label: string; required?: boolean }>;
  };

  section1: {
    title: string;
    subtitle: string;
    options: CheckboxOption[];
    descriptionLabel: string;
  };

  section2: {
    title: string;
    options: CheckboxOption[];
    referencesLabel: string;
    styleLabel: string;
  };

  section3: {
    title: string;
    options: CheckboxOption[];
    pagesLabel: string;
  };

  section4: {
    title: string;
    options: CheckboxOption[];
  };

  section5: {
    title: string;
    options: CheckboxOption[];
  };

  section6: {
    title: string;
    options: CheckboxOption[];
    accessesLabel: string;
  };

  section7: {
    title: string;
    options: CheckboxOption[];
  };

  section8: {
    title: string;
    options: CheckboxOption[];
    note: string;
  };


  section9: {
    title: string;
    budgetLabel: string;
    budgetOptions: RadioOption[];
    timelineLabel: string;
    timelineOptions: RadioOption[];
    dateLabel: string;
  };

  section10: {
    title: string;
    maintenanceLabel: string;
    maintenanceOptions: RadioOption[];
    extraOptions: CheckboxOption[];
  };

  section11: {
    title: string;
    channelLabel: string;
    channelOptions: RadioOption[];
    feedbackLabel: string;
    feedbackOptions: RadioOption[];
    multipleStakeholders: string;
    availabilityLabel: string;
  };
}

/** The user's input state for the briefing form */
export interface BriefingFormState {
  // Client info
  companyName: string;
  contactPerson: string;
  emailPhone: string;
  existingWebsite: string;

  // Section 1
  projectTypes: {
    landingPage: boolean;
    businessWebsite: boolean;
    webshop: boolean;
    webapp: boolean;
    mobileApp: boolean;
    other: boolean;
  };
  projectTypeOther: string;
  projectDescription: string;

  // Section 2
  design: {
    hasDesign: boolean;
    hasLogo: boolean;
    hasColors: boolean;
    noDesign: boolean;
  };
  designFile: string;
  referenceWebsites: string;
  styleWish: string;

  // Section 3
  content: {
    hasTexts: boolean;
    hasImages: boolean;
    needsTexts: boolean;
    needsStockPhotos: boolean;
  };
  requiredPages: string;

  // Section 4
  features: {
    contactForm: boolean;
    booking: boolean;
    newsletter: boolean;
    login: boolean;
    shop: boolean;
    multilingual: boolean;
    api: boolean;
    googleMaps: boolean;
    liveChat: boolean;
    other: boolean;
  };
  languages: string;
  apiDetails: string;
  featuresOther: string;

  // Section 5
  hosting: {
    hasDomain: boolean;
    needsDomain: boolean;
    hasHosting: boolean;
    visionItHosting: boolean;
    wantsCMS: boolean;
    keepEmails: boolean;
  };
  domainName: string;
  hostingProvider: string;

  // Section 6
  existing: {
    siteReplaced: boolean;
    contentMigration: boolean;
  };
  accessesNeeded: string;

  // Section 7
  seo: {
    basicSEO: boolean;
    localSEO: boolean;
    googleBusiness: boolean;
    analytics: boolean;
    socialMedia: boolean;
  };
  socialPlatforms: string;

  // Section 8
  legal: {
    imprint: boolean;
    privacy: boolean;
    cookieBanner: boolean;
    agb: boolean;
    accessibility: boolean;
  };



  // Section 10
  budget: "under1500" | "1500-3000" | "3000-6000" | "6000-10000" | "over10000" | "open" | "";
  timeline: "asap" | "within4weeks" | "2to3months" | "fixedDate" | "noFixedDate" | "";
  fixedDate: string;

  // Section 11
  maintenanceType: "basic" | "professional" | "none" | "";
  onboarding: boolean;
  documentation: boolean;

  // Section 12
  preferredChannel: "email" | "whatsapp" | "phone" | "other" | "";
  channelOther: string;
  feedbackRounds: "1" | "2" | "3+" | "";
  multipleStakeholders: boolean;
  feedbackAvailability: string;

  // Privacy
  privacyAccepted: boolean;
}