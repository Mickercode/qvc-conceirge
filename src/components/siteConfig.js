export const LOGO_SRC = '/logo.jpeg';

export const PHONE_DISPLAY = '+234 1 888 7820';
export const PHONE_HREF = 'tel:+23418887820';
export const WHATSAPP_HREF = 'https://wa.me/23418887820';

/** In-page sections of the landing page, in nav order. */
export const SECTIONS = [
  { label: 'Home', id: 'home' },
  { label: 'About QVC', id: 'trust' },
  { label: 'How It Works', id: 'how-it-works' },
  { label: 'Contact', id: 'enquiry' },
];

export const SECTION_IDS = ['home', 'services', 'trust', 'how-it-works', 'enquiry'];

/** Every routed service page, so all of them stay reachable from any page. */
export const SERVICE_ROUTES = [
  { label: 'Flight Tickets & Jets', href: '/tickets-and-aviation', blurb: 'Commercial & private aviation' },
  { label: 'Curated Tours', href: '/curated-tours', blurb: 'Bespoke travel & escapes' },
  { label: 'Group Tours', href: '/group-tours', blurb: 'Family & affinity groups' },
  { label: 'Corporate Travel', href: '/corporate-travel', blurb: 'Executive mobility' },
  { label: 'Visa Assistance', href: '/visa-consultancy', blurb: 'Consular pathways' },
  { label: 'School Placement', href: '/school-placement', blurb: 'UK & global education' },
  { label: 'Concierge & Lifestyle', href: '/concierge-lifestyle', blurb: 'Private lifestyle management' },
];

/**
 * Anchors are in-page on the landing page and cross-page everywhere else,
 * so the same header works on all routes.
 */
export const sectionHref = (landing, id) => (landing ? `#${id}` : `/#${id}`);
