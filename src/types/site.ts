export interface SiteConfig {
  name: string;
  nameEn: string;
  description: string;
  websiteUrl: string;
  phoneDisplay: string;
  phoneHref: string;
  email: string;
  address: {
    street: string;
    locality: string;
    region: string;
    postalCode: string;
    country: string;
    countryCode: string;
  };
  gatherings: Array<{ name: string; time: string }>;
  tagline: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}
