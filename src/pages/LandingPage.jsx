import { useEffect, useRef, useState } from 'react';

const LOGO_SRC = '/logo.jpeg';

const PHONE_DISPLAY = '+234 1 888 7820';
const PHONE_HREF = 'tel:+23418887820';
const WHATSAPP_HREF = 'https://wa.me/23418887820';

const IMAGES = {
  heroPortrait:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuAKWSspKfqb45viwY46A4nGU15wrD1wrpzDndTfy2gsfN-tMXqwWZ2I69_0kCLbW9EqIq03gMNHCFrU3IL5KbUYu8hvD2OaE4_H4CUjD7wyewX83qjbJrjpOZx6PChs6-ghPoTzogwSX3bjEgFiDaqXQRZj5Uw5BENDnW0mk4acs9k_tJilvEDAt03Zl6_jQYXWgmef4ZDAy63rbmdOAUxcY9j43Rsw2lgCH9TjtAc7E-066qGsXTCJ',
  tickets:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuB8qdWgrPD74mTl4k3YLjFScP-G6OsWxJDljPGbKNW4xDkV4zTVH22iHfaZCwHWpk758Up4LzpIF7LIJil_o2Wk4t722A3mUiprMq9B-9tUD7eHkjzij26BE4H2ShYC-_qLOecIDdq7MyoO3nAHfJjOrK42NF0vCHOjxF8K0bAzSHuCh2nZZoJA9vIm4_jIRhRtYFjhVv5wfgiQc0R-KB5_yteQVgOZ5_GX4SwB-WK--BZQ2kcPdhxl',
  tours:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuC1SC0Do71U2Q5BGwmN0amogwQuU_vEqkGiBois4wbgC108ZPXC_TUHLpS70vT_XghqHcIwsY1Ne-ynZbTZW50avxBbKhV0q-iA0PxmFlvnnWomZ8LAee7LW78XMb05aotpuqn324RsB2VB9s40xnW5NnfUBeYHjwytYpn8LK1qkXgLgr0rEx7aiv_hJO547rrcqs4NwLLTq2ZQzLqy26ZnXOENzg-P_XivcFLsLtcvUvOt96_HOQAb',
  visa:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuAuf2fMAoGNJzCnvaVR4gBcCJGV7LGz55FlYLH6fwo2CGt-Tb_SjWrCBkvu4T5gFr4OKAE0M55nYoNI8_LJMndm3_NgYie2AJ8VOs2dV-Q-6v_BCHpSHZNS__per3xlHgm-pOMnnc08659NmVimoHqfQuaK4eT0hEvjRSpaPltEq7F-HRHLx3aC73cMWI1JXaLr-5qXQPSAV74KkAWugw7TCGW_gkcfxUeV6jVGMnpCPvRoodkg4nD5',
  school:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDWqvr7VzIuCdbz55yDicDz4i82dN28eB9eIm6f92fCCbMk2D5QxBDT8z_oJoa82SAXoksQdb--1EYB-s8orJmyWiL1LXGF5IgpoEfQYPDXXFFZpBEd4MVQ4nh5jupGTFa4cw2IokGVmUw3fUK48T35efvraD7Ia5sG3shsmajGXmlhZ5sqMB3Y0dhLsTe9OaiPOCah_eYGstOSNnPU4Tlfvn-MBpZy-ZIT7Mk3-4u-_tGwoJ6pv64_',
  concierge:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuBlcCuPQsjWcEYijaarj5MvGkSj5AnrO7ibgVWMxiKM6fBcUZuI1QLcMX41Q635WW_syq6rJBlcPQSA6OvllzSbzkDdH8cosNSQVjLETZWjnuAG8Isj0klYm3yKRoQkyiKVzV5EpC2wWnavoRq9b-L04KlD64cy_m1igK1GYNCBaMUBnNm8tVLabsNTTnedMyiNENMBXyE_jUDKdPSUiFetXTPFiOiPCIbmgaZiVShZ9AGGgADYo6yp',
  advisory:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuATIij0RcaQfOVjpJpsxa1TFzHIfKv3nUSBx_MtuUDBVLAIDDF_3VkkkMYEy9CnBggEBU3QHdWGQnj9KnVDARXYFS14pKM6da4q8qxO3QHscylP-x5XlfkEf4JZ4etvSklGuXon4f6Z5H4BB1XNANY_Tvs_cuh3fDRTFO1glhF2C52jyxJZfQ9VvYWo-EbfUgny_5sAgIHYHhHtA4HB7P5ohGvNEMpqV0XLw0_ylS1A3qoTL6ovS0pU',
};

const NAV_LINKS = [
  { label: 'Home', href: '#home', id: 'home' },
  { label: 'Our Services', href: '#services', id: 'services' },
  { label: 'About QVC', href: '#trust', id: 'trust' },
  { label: 'How It Works', href: '#how-it-works', id: 'how-it-works' },
  { label: 'Contact', href: '#enquiry', id: 'enquiry' },
];

const SECTION_IDS = NAV_LINKS.map((link) => link.id);

const SERVICES = [
  {
    id: 'tickets',
    number: '01',
    category: 'Aviation',
    title: 'Tickets',
    description:
      'First-class commercial reservations, private jet charters, and priority tarmac handling tailored for seamless corporate and family itineraries.',
    image: IMAGES.tickets,
    alt: 'Flight Tickets & Private Aviation',
    href: '/tickets-and-aviation',
    span: 'lg:col-span-7',
    wide: true,
  },
  {
    id: 'tours',
    number: '02',
    category: 'Travel',
    title: 'Tours',
    description:
      'Bespoke travel experiences, private Mediterranean retreats, and customized cultural journeys organized with discreet attention.',
    image: IMAGES.tours,
    alt: 'Curated Bespoke Tours',
    href: '/curated-tours',
    span: 'lg:col-span-5',
    imageHeight: 'h-44 sm:h-48',
    titleSize: 'text-xl sm:text-2xl',
  },
  {
    id: 'visa',
    number: '03',
    category: 'Mobility',
    title: 'Visa Assistance',
    description:
      'End-to-end visa guidance, diplomatic documentation review, and expediting pathways across key international borders.',
    image: IMAGES.visa,
    alt: 'Visa Assistance and Mobility',
    href: '/visa-consultancy',
    span: 'lg:col-span-4',
  },
  {
    id: 'school',
    number: '04',
    category: 'Education',
    title: 'School Placement',
    description:
      'Authoritative counsel for British boarding schools, international colleges, entrance examinations, and certified BBSN guardianship.',
    image: IMAGES.school,
    alt: 'School Placement Advisory',
    href: '/school-placement',
    span: 'lg:col-span-4',
  },
  {
    id: 'concierge',
    number: '05',
    category: 'Lifestyle',
    title: 'Concierge Services',
    description:
      'Private lifestyle management, unlisted property sourcing, Michelin reservations, and customized errands with personal discretion.',
    image: IMAGES.concierge,
    alt: 'Bespoke Concierge & Lifestyle Management',
    href: '/concierge-lifestyle',
    span: 'lg:col-span-4',
  },
];

const STEPS = [
  {
    number: '01',
    title: 'Tell Us What You Need',
    description: 'Choose a service and share the details of your request via online enquiry, message, or phone.',
    accent: false,
  },
  {
    number: '02',
    title: 'We Coordinate the Next Steps',
    description: 'Our team reviews your request and contacts you to clarify the details, options, and timelines.',
    accent: true,
  },
  {
    number: '03',
    title: 'Move Forward With Confidence',
    description: 'We help coordinate the process and keep you informed as your request progresses to completion.',
    accent: false,
  },
];

const TRUST_POINTS = [
  {
    title: 'Single Point of Contact',
    description: 'No fragmented desks. One liaison manages all your tickets, schooling, and itineraries.',
  },
  {
    title: 'IATA Certified & BBSN Member',
    description: 'Fully accredited ticketing desk and recognized British Boarding School advisory.',
  },
  {
    title: 'Discreet & Verified Partners',
    description: 'Only audited aviation operators, vetted tutors, and verified local hospitality teams.',
  },
];

const SERVICE_OPTIONS = [
  { value: 'Tickets', label: 'Tickets (Flight Bookings & Private Jets)' },
  { value: 'Tours', label: 'Tours (Bespoke Travel & Escapes)' },
  { value: 'Visa Assistance', label: 'Visa Assistance & Mobility' },
  { value: 'School Placement', label: 'School Placement (UK & Global Education)' },
  { value: 'Concierge Services', label: 'Concierge Services (Lifestyle Management)' },
  { value: 'Something Else', label: 'Something Else / Multiple Services' },
];

const FOOTER_SERVICES = [
  { label: 'Flight Tickets & Jets', href: '/tickets-and-aviation' },
  { label: 'Curated Tours', href: '/curated-tours' },
  { label: 'Visa Support Desk', href: '/visa-consultancy' },
  { label: 'School Placement', href: '/school-placement' },
  { label: 'VIP Lifestyle Concierge', href: '/concierge-lifestyle' },
];

const FOOTER_DESK = [
  { label: 'Make an Enquiry', href: '#enquiry' },
  { label: 'About QVC', href: '#trust' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: PHONE_DISPLAY, href: PHONE_HREF },
];

/* --- Icons (single family: 24px outline, 2px stroke) ---------------------- */

const ArrowRightIcon = ({ className = 'w-4 h-4' }) => (
  <svg aria-hidden="true" className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
  </svg>
);

const ArrowLongRightIcon = ({ className = 'w-4 h-4' }) => (
  <svg aria-hidden="true" className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path d="M17 8l4 4m0 0l-4 4m4-4H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
  </svg>
);

const CheckIcon = ({ className = 'w-4 h-4' }) => (
  <svg aria-hidden="true" className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
  </svg>
);

const GlobeIcon = ({ className = 'w-4 h-4' }) => (
  <svg aria-hidden="true" className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
  </svg>
);

const ShieldCheckIcon = ({ className = 'w-4 h-4' }) => (
  <svg aria-hidden="true" className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
  </svg>
);

const SparkleIcon = ({ className = 'w-4 h-4' }) => (
  <svg aria-hidden="true" className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      d="M12 3l2.09 5.26L19.5 10l-5.41 1.74L12 17l-2.09-5.26L4.5 10l5.41-1.74L12 3z"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
  </svg>
);

const PhoneIcon = ({ className = 'w-4 h-4' }) => (
  <svg aria-hidden="true" className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      d="M3 5a2 2 0 012-2h2.28a2 2 0 011.94 1.52l.64 2.56a2 2 0 01-.55 1.9L8.09 10.3a12.04 12.04 0 005.61 5.61l1.32-1.32a2 2 0 011.9-.55l2.56.64A2 2 0 0121 16.72V19a2 2 0 01-2 2h-.5C10.49 21 3 13.51 3 5.5V5z"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
  </svg>
);

const WhatsAppIcon = ({ className = 'w-5 h-5' }) => (
  <svg aria-hidden="true" className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.32 4.97L2 22l5.25-1.38a9.9 9.9 0 004.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.5 2 12.04 2zm0 18.01h-.01a8.2 8.2 0 01-4.18-1.15l-.3-.18-3.11.82.83-3.04-.19-.31a8.19 8.19 0 01-1.26-4.36c0-4.54 3.7-8.23 8.24-8.23 2.2 0 4.26.86 5.82 2.41a8.18 8.18 0 012.41 5.83c0 4.54-3.7 8.23-8.25 8.23zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.4-.12-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06a6.7 6.7 0 01-1.97-1.21 7.4 7.4 0 01-1.37-1.7c-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.44.12-.14.17-.25.25-.41.08-.17.04-.31-.02-.44-.06-.12-.56-1.35-.77-1.84-.2-.48-.41-.42-.56-.42h-.48c-.17 0-.44.06-.67.31-.23.25-.87.85-.87 2.07 0 1.23.89 2.41 1.01 2.58.13.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.6.19 1.14.17 1.57.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.14-1.18-.06-.11-.23-.17-.48-.29z" />
  </svg>
);

const MenuIcon = ({ className = 'w-6 h-6' }) => (
  <svg aria-hidden="true" className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" strokeWidth="2" />
  </svg>
);

const CloseIcon = ({ className = 'w-6 h-6' }) => (
  <svg aria-hidden="true" className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" strokeWidth="2" />
  </svg>
);

const CREDENTIALS = [
  { label: 'Licensed IATA Agent', Icon: GlobeIcon, tone: 'text-brand-blue' },
  { label: 'BBSN Member Advisory', Icon: ShieldCheckIcon, tone: 'text-brand-blue' },
  { label: 'Discreet Personal Support', Icon: SparkleIcon, tone: 'text-brand-goldDeep' },
];

/* --- Hooks ---------------------------------------------------------------- */

const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/** Reveals a block the first time it scrolls into view. Falls back to "always
 *  visible" when motion is reduced or IntersectionObserver is unavailable. */
function useReveal() {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    if (prefersReducedMotion() || !('IntersectionObserver' in window) || !ref.current) {
      setShown(true);
      return undefined;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          observer.disconnect();
        }
      },
      { rootMargin: '0px 0px -10% 0px' }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return [ref, shown];
}

/** Tracks which section is in view so the nav can show the current location. */
function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0]);

  useEffect(() => {
    if (!('IntersectionObserver' in window)) return undefined;
    const elements = ids.map((id) => document.getElementById(id)).filter(Boolean);
    if (!elements.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const best = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (best) setActive(best.target.id);
      },
      { rootMargin: '-96px 0px -50% 0px', threshold: [0.05, 0.2, 0.5] }
    );
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [ids]);

  return active;
}

/* --- Components ----------------------------------------------------------- */

function ServiceCard({ service, index, shown }) {
  const cardClass = [
    service.span,
    'bg-white rounded-3xl p-5 sm:p-7 border border-brand-border shadow-subtle hover:shadow-card-hover',
    'transition-all duration-300 flex flex-col justify-between group',
    shown ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4',
  ].join(' ');

  const kicker = (
    <span className="text-xs font-bold text-brand-blue uppercase tracking-widest">
      {service.number} / {service.category}
    </span>
  );

  const discoverLink = (
    <a
      className="inline-flex items-center gap-1.5 min-h-[44px] text-xs font-bold uppercase tracking-wider text-brand-blue hover:text-brand-blueHover"
      href={service.href}
    >
      <span>Discover More</span>
      <ArrowRightIcon className="w-3.5 h-3.5" />
    </a>
  );

  const image = (extraClass) => (
    <div className={`${extraClass} rounded-2xl overflow-hidden bg-slate-100`}>
      <img
        alt={service.alt}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        decoding="async"
        loading="lazy"
        src={service.image}
      />
    </div>
  );

  return (
    <div className={cardClass} style={{ transitionDelay: shown ? `${index * 70}ms` : '0ms' }}>
      {service.wide ? (
        <div className="flex flex-col sm:flex-row gap-6 items-start">
          {image('w-full sm:w-5/12 h-48 sm:h-56 flex-shrink-0')}
          <div className="flex flex-col justify-between h-full">
            <div>
              {kicker}
              <h3 className="text-xl sm:text-2xl font-bold text-brand-navy mt-1 mb-2">{service.title}</h3>
              <p className="text-brand-slate text-[15px] leading-relaxed mb-3">{service.description}</p>
            </div>
            {discoverLink}
          </div>
        </div>
      ) : (
        <>
          <div>
            {image(`w-full ${service.imageHeight || 'h-44'} mb-5`)}
            {kicker}
            <h3 className={`${service.titleSize || 'text-xl'} font-bold text-brand-navy mt-1 mb-2`}>{service.title}</h3>
            <p className="text-brand-slate text-[15px] leading-relaxed mb-3">{service.description}</p>
          </div>
          {discoverLink}
        </>
      )}
    </div>
  );
}

function EnquiryForm({ onSent }) {
  const [errors, setErrors] = useState({});

  const validateField = (name, rawValue) => {
    const value = rawValue.trim();
    if (name === 'fullName') {
      return value.length >= 2 ? '' : 'Please enter your full name so we know who to reply to.';
    }
    if (name === 'contact') {
      if (!value) return 'Please enter an email address or phone number.';
      const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value);
      const isPhone = /^[+(]?[\d][\d\s()+-]{6,}$/.test(value);
      return isEmail || isPhone ? '' : 'That does not look like an email address or phone number.';
    }
    return '';
  };

  const handleBlur = (event) => {
    const { name, value } = event.target;
    setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    // Only clear an existing error as the user corrects it; never add one mid-keystroke.
    setErrors((prev) => (prev[name] && !validateField(name, value) ? { ...prev, [name]: '' } : prev));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const next = {
      fullName: validateField('fullName', form.fullName.value),
      contact: validateField('contact', form.contact.value),
    };
    setErrors(next);

    const firstInvalid = Object.keys(next).find((key) => next[key]);
    if (firstInvalid) {
      form[firstInvalid].focus();
      return;
    }
    onSent();
  };

  const fieldClass = (name) =>
    [
      'w-full bg-white/10 rounded-xl text-base text-white placeholder-slate-400 py-3 px-4 transition-colors',
      errors[name] ? 'border-red-400 focus:border-red-400 focus:ring-red-400' : 'border-white/35 focus:border-brand-blue focus:ring-brand-blue',
    ].join(' ');

  const labelClass = 'block text-xs uppercase tracking-wider font-semibold text-slate-300 mb-2';

  const requiredMark = (
    <span className="text-brand-blue" title="Required">
      {' *'}
    </span>
  );

  const fieldError = (name) =>
    errors[name] ? (
      <p className="mt-2 text-xs font-medium text-red-300" id={`enquiry-${name}-error`} role="alert">
        {errors[name]}
      </p>
    ) : null;

  return (
    <form
      className="bg-brand-obsidian/70 backdrop-blur-xl p-6 sm:p-10 rounded-3xl border border-white/10 text-left max-w-2xl mx-auto shadow-2xl"
      noValidate
      onSubmit={handleSubmit}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
        <div>
          <label className={labelClass} htmlFor="enquiry-fullName">
            Full Name{requiredMark}
          </label>
          <input
            aria-describedby={errors.fullName ? 'enquiry-fullName-error' : undefined}
            aria-invalid={errors.fullName ? 'true' : undefined}
            aria-required="true"
            autoComplete="name"
            className={fieldClass('fullName')}
            id="enquiry-fullName"
            name="fullName"
            onBlur={handleBlur}
            onChange={handleChange}
            placeholder="e.g. Eleanor Vance"
            type="text"
          />
          {fieldError('fullName')}
        </div>
        <div>
          <label className={labelClass} htmlFor="enquiry-contact">
            Email or Phone Number{requiredMark}
          </label>
          <input
            aria-describedby={errors.contact ? 'enquiry-contact-error' : undefined}
            aria-invalid={errors.contact ? 'true' : undefined}
            aria-required="true"
            autoComplete="email"
            className={fieldClass('contact')}
            id="enquiry-contact"
            inputMode="email"
            name="contact"
            onBlur={handleBlur}
            onChange={handleChange}
            placeholder="name@domain.com or +234..."
            type="text"
          />
          {fieldError('contact')}
        </div>
      </div>

      <div className="mb-5">
        <label className={labelClass} htmlFor="enquiry-service">
          Service of Interest
        </label>
        <div className="relative">
          <select
            className="w-full bg-white/10 border-white/35 rounded-xl text-base text-white focus:border-brand-blue focus:ring-brand-blue py-3 px-4 appearance-none cursor-pointer"
            defaultValue="Tickets"
            id="enquiry-service"
            name="service"
          >
            {SERVICE_OPTIONS.map((option) => (
              <option className="bg-brand-navy text-white" key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-300">
            <svg aria-hidden="true" className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>

      <div className="mb-6">
        <label className={labelClass} htmlFor="enquiry-brief">
          Brief Description
        </label>
        <textarea
          className="w-full bg-white/10 border-white/35 rounded-xl text-base text-white placeholder-slate-400 focus:border-brand-blue focus:ring-brand-blue p-4 transition-colors"
          id="enquiry-brief"
          name="brief"
          placeholder="Destinations, preferred dates, schooling objectives, or specific requirements..."
          rows="3"
        />
        <p className="mt-2 text-xs text-slate-400" id="enquiry-brief-help">
          Optional, but the more detail you share the faster we can come back with options.
        </p>
      </div>

      <button
        className="w-full inline-flex items-center justify-center gap-2 min-h-[52px] py-4 rounded-full bg-brand-blue hover:bg-brand-blueHover text-white font-bold text-sm tracking-wide shadow-glow-cobalt transition-colors duration-200"
        type="submit"
      >
        <span>Tell Us What You Need</span>
        <ArrowRightIcon />
      </button>
      <p className="text-center text-xs text-slate-400 mt-4">
        <span className="text-brand-blue">*</span> Required. Strictly confidential &mdash; an advisor typically responds
        within 2 business hours.
      </p>
    </form>
  );
}

/* --- Page ----------------------------------------------------------------- */

export default function LandingPage() {
  const [enquirySent, setEnquirySent] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const activeSection = useActiveSection(SECTION_IDS);
  const [servicesRef, servicesShown] = useReveal();

  // Escape closes the mobile drawer; a predictable escape route from any overlay.
  useEffect(() => {
    if (!menuOpen) return undefined;
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [menuOpen]);

  const navLinkClass = (id) =>
    [
      'inline-flex items-center min-h-[44px] py-1 transition-colors relative',
      activeSection === id
        ? 'text-brand-navy font-semibold hover:text-brand-blue'
        : 'text-brand-slate hover:text-brand-blue',
    ].join(' ');

  return (
    <div className="bg-white text-brand-slateDark font-sans antialiased selection:bg-brand-blue selection:text-white">
      <a className="skip-link" href="#main">
        Skip to main content
      </a>

      {/* BEGIN: MainHeader */}
      <header className="w-full sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-brand-border/80">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-12 h-20 flex items-center justify-between gap-4">
          {/* Brand Logo Wordmark */}
          <a className="flex items-center gap-3.5 group" href="#home">
            <img
              alt="QVC Concierge"
              className="w-9 h-9 object-contain rounded-full shadow-sm group-hover:scale-105 transition-transform duration-300"
              height="36"
              src={LOGO_SRC}
              width="36"
            />
            <div className="flex items-baseline gap-1.5">
              <span className="font-sans text-xl font-extrabold tracking-tight text-brand-navy">QVC</span>
              <span className="text-xs uppercase font-semibold tracking-[0.22em] text-brand-muted">Concierge</span>
            </div>
          </a>

          {/* Primary Navigation Links */}
          <nav aria-label="Primary" className="hidden md:flex items-center space-x-9 text-sm font-medium tracking-tight">
            {NAV_LINKS.map((link) => (
              <a
                aria-current={activeSection === link.id ? 'true' : undefined}
                className={navLinkClass(link.id)}
                href={link.href}
                key={link.label}
              >
                {link.label}
                {activeSection === link.id ? (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-brand-blue rounded-full" />
                ) : null}
              </a>
            ))}
          </nav>

          {/* Header Actions */}
          <div className="flex items-center gap-2">
            <a
              className="hidden sm:inline-flex items-center gap-2 min-h-[44px] px-5 py-3 rounded-full bg-brand-blue text-white text-sm font-semibold hover:bg-brand-blueHover shadow-glow-cobalt transition-colors duration-200 group"
              href="#enquiry"
            >
              <span>Make an Enquiry</span>
              <ArrowRightIcon className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              aria-label={`Call QVC Concierge on ${PHONE_DISPLAY}`}
              className="sm:hidden inline-flex items-center justify-center w-11 h-11 rounded-full border border-brand-border text-brand-navy hover:border-brand-blue hover:text-brand-blue transition-colors"
              href={PHONE_HREF}
            >
              <PhoneIcon className="w-5 h-5" />
            </a>
            <button
              aria-controls="mobile-nav"
              aria-expanded={menuOpen}
              aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-full border border-brand-border text-brand-navy hover:border-brand-blue hover:text-brand-blue transition-colors"
              onClick={() => setMenuOpen((open) => !open)}
              type="button"
            >
              {menuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <nav
          aria-label="Primary mobile"
          className={`md:hidden overflow-hidden border-t border-brand-border/80 bg-white transition-all duration-300 ${
            menuOpen ? 'visible max-h-[32rem] opacity-100' : 'invisible max-h-0 opacity-0'
          }`}
          id="mobile-nav"
        >
          <div className="px-6 py-3 flex flex-col">
            {NAV_LINKS.map((link) => (
              <a
                aria-current={activeSection === link.id ? 'true' : undefined}
                className={`flex items-center min-h-[48px] text-[15px] font-semibold border-b border-brand-border/60 last:border-0 ${
                  activeSection === link.id ? 'text-brand-blue' : 'text-brand-navy'
                }`}
                href={link.href}
                key={link.label}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="mt-3 pt-3 border-t border-brand-border grid grid-cols-1 gap-2">
              <a
                className="inline-flex items-center justify-center gap-2 min-h-[48px] rounded-full bg-brand-blue text-white text-sm font-semibold"
                href="#enquiry"
                onClick={() => setMenuOpen(false)}
              >
                <span>Make an Enquiry</span>
                <ArrowRightIcon />
              </a>
              <div className="grid grid-cols-2 gap-2">
                <a
                  className="inline-flex items-center justify-center gap-2 min-h-[48px] rounded-full border border-brand-border text-brand-navy text-sm font-semibold"
                  href={PHONE_HREF}
                >
                  <PhoneIcon className="w-4 h-4 text-brand-blue" />
                  <span>Call</span>
                </a>
                <a
                  className="inline-flex items-center justify-center gap-2 min-h-[48px] rounded-full border border-brand-border text-brand-navy text-sm font-semibold"
                  href={WHATSAPP_HREF}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <WhatsAppIcon className="w-4 h-4 text-brand-whatsapp" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </nav>
      </header>
      {/* END: MainHeader */}

      <main id="main">
        {/* BEGIN: HeroSection */}
        <section
          className="relative pt-10 pb-14 sm:pt-12 sm:pb-16 lg:pt-16 lg:pb-24 overflow-hidden bg-gradient-to-b from-brand-canvas via-brand-surface to-white"
          id="home"
        >
          <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
            {/* Headline & Supporting Text */}
            <div className="text-center max-w-4xl mx-auto mb-10 lg:mb-14">
              <p className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-brand-blue font-bold mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-blue" />
                Travel &bull; Education &bull; Lifestyle
              </p>
              <h1 className="text-[2rem] sm:text-6xl lg:text-[68px] font-extrabold tracking-tight leading-[1.14] sm:leading-[1.08] mb-4 sm:mb-5 font-sans">
                <span className="text-brand-obsidian block">Whatever Life Takes You To.</span>
                <span className="text-brand-blue block">We&apos;ll Help You Get There.</span>
              </h1>
              <p className="text-brand-slate text-base sm:text-lg font-normal max-w-xl sm:max-w-2xl mx-auto leading-relaxed mb-8">
                From journeys and new opportunities to life&apos;s important details, discover services and personalised
                support in one convenient place.
              </p>
              {/* Dual Action Buttons */}
              <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
                <a
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 min-h-[52px] px-7 py-3.5 rounded-full bg-brand-blue text-white text-sm sm:text-base font-semibold shadow-glow-cobalt hover:bg-brand-blueHover hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
                  href="#services"
                >
                  <span>Explore Our Services</span>
                  <ArrowLongRightIcon />
                </a>
                <a
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 min-h-[52px] px-7 py-3.5 rounded-full bg-white text-brand-navy text-sm sm:text-base font-semibold border border-brand-border hover:border-slate-300 hover:bg-brand-mist/50 transition-colors duration-200 shadow-sm"
                  href="#enquiry"
                >
                  <span>Talk to an Advisor</span>
                </a>
              </div>
            </div>

            {/* Editorial word-art composition. Decorative: every service name here
                also appears, linked, in the Services section below. */}
            <div className="relative max-w-6xl mx-auto mt-2 lg:mt-10" aria-hidden="true">
              <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] lg:gap-4 lg:min-h-[620px] xl:gap-8">
                {/* Central Focal Anchor */}
                <div className="order-1 lg:order-2 relative z-20 flex flex-col items-center">
                  <div className="relative w-64 sm:w-72 md:w-80 lg:w-[350px] aspect-[4/5] rounded-[28px] overflow-hidden shadow-editorial-image transition-transform duration-300 hover:scale-[1.01] bg-slate-100">
                    <img
                      alt="Traveller with luggage at a private terminal"
                      className="w-full h-full object-cover object-center"
                      src={IMAGES.heroPortrait}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between text-white select-none">
                      <span className="text-xs font-semibold tracking-wider uppercase text-white/95 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-blue" />
                        Bespoke Coordination
                      </span>
                      <span className="text-xs text-white/85 font-medium tracking-wide">Worldwide Access</span>
                    </div>
                  </div>
                </div>

                {/* Left Column Word-Art Flow */}
                <div className="order-2 lg:order-1 z-10 hidden lg:flex h-full flex-col justify-between lg:py-10 pointer-events-none select-none">
                  <div className="text-left space-y-1 pl-2 sm:pl-6 lg:pl-4 xl:pl-8">
                    <span className="block text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-brand-obsidian">
                      Travel
                    </span>
                    <span className="block text-xs sm:text-sm font-semibold tracking-[0.16em] uppercase text-brand-blue">
                      Tickets &amp; Aviation
                    </span>
                    <span className="block text-xs uppercase tracking-[0.28em] text-brand-muted font-semibold pt-1">
                      Getaways
                    </span>
                  </div>
                  <div className="text-left space-y-1.5 pl-4 sm:pl-10 lg:pl-8 xl:pl-12">
                    <span className="block text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-brand-navy">
                      Tours &amp; Escapes
                    </span>
                    <span className="block text-sm sm:text-base font-medium tracking-wide text-brand-slate">
                      Curated Itineraries
                    </span>
                    <span className="block text-lg sm:text-xl font-bold tracking-tight text-brand-muted">
                      Experiences
                    </span>
                  </div>
                  <div className="text-left space-y-1 pl-2 sm:pl-6 xl:pl-10">
                    <span className="block text-xs sm:text-sm uppercase tracking-[0.22em] text-brand-blue font-semibold">
                      Global Mobility
                    </span>
                    <span className="block text-2xl sm:text-3xl xl:text-4xl font-extrabold tracking-tight text-brand-obsidian">
                      Visa Assistance
                    </span>
                    <span className="block text-sm font-medium text-brand-muted">Expedited Consular Pathways</span>
                  </div>
                </div>

                {/* Right Column Word-Art Flow */}
                <div className="order-3 z-10 hidden lg:flex h-full flex-col justify-between lg:py-10 pointer-events-none select-none">
                  <div className="text-right space-y-1 pr-2 sm:pr-6 lg:pr-4 xl:pr-8">
                    <span className="block text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-brand-obsidian">
                      Education
                    </span>
                    <span className="block text-xs sm:text-sm font-semibold tracking-[0.16em] uppercase text-brand-blue">
                      School Placement
                    </span>
                    <span className="block text-xs uppercase tracking-[0.28em] text-brand-muted font-semibold pt-1">
                      Opportunities
                    </span>
                  </div>
                  <div className="text-right space-y-1.5 pr-4 sm:pr-10 lg:pr-8 xl:pr-12">
                    <span className="block text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-brand-navy">
                      Concierge
                    </span>
                    <span className="block text-sm sm:text-base font-semibold tracking-wide text-brand-blue">
                      24/7 Dedicated Care
                    </span>
                    <span className="block text-lg sm:text-xl font-bold tracking-tight text-brand-muted">Lifestyle</span>
                  </div>
                  <div className="text-right space-y-1 pr-2 sm:pr-6 xl:pr-10">
                    <span className="block text-xs sm:text-sm uppercase tracking-[0.22em] text-brand-muted font-semibold">
                      Tailored Living
                    </span>
                    <span className="block text-xl sm:text-2xl xl:text-3xl font-bold tracking-tight text-brand-obsidian">
                      Personal Assistance
                    </span>
                    <span className="block text-sm font-bold tracking-wide text-brand-blue mt-1">
                      Discover More &bull; And Beyond
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Trust Credentials Horizontal Ribbon */}
            <div className="mt-10 sm:mt-14 pt-8 border-t border-brand-border/80 max-w-4xl mx-auto">
              <ul className="flex flex-wrap items-center justify-center gap-6 sm:gap-12 text-sm font-semibold text-brand-slate">
                {CREDENTIALS.map((credential, index) => (
                  <li className="flex items-center gap-6 sm:gap-12" key={credential.label}>
                    {index > 0 ? <span className="hidden sm:block w-px h-4 bg-slate-200" aria-hidden="true" /> : null}
                    <span className="flex items-center gap-2">
                      <span className={`p-1 rounded-full bg-blue-50 ${credential.tone}`}>
                        <credential.Icon />
                      </span>
                      <span>{credential.label}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
        {/* END: HeroSection */}

        {/* BEGIN: ServicesSection */}
        <section className="py-16 sm:py-20 lg:py-24 bg-brand-surface border-t border-brand-border" id="services">
          <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-12">
            {/* Section Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-16 gap-6">
              <div className="max-w-2xl">
                <p className="text-xs uppercase tracking-[0.22em] text-brand-blue font-bold mb-2">Our Capabilities</p>
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-brand-navy font-sans">
                  A World of Services. One Place to Begin.
                </h2>
                <p className="mt-3 text-brand-slate text-base leading-relaxed">
                  Explore the services you need, discover new possibilities and let our team help coordinate the next
                  steps.
                </p>
              </div>
              <div>
                <a
                  className="inline-flex items-center gap-2 min-h-[44px] text-sm font-bold text-brand-blue hover:text-brand-blueHover transition-colors group"
                  href="#enquiry"
                >
                  <span>Explore All Services</span>
                  <ArrowRightIcon className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>

            {/* Asymmetric Editorial Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5 sm:gap-8" ref={servicesRef}>
              {SERVICES.map((service, index) => (
                <ServiceCard index={index} key={service.id} service={service} shown={servicesShown} />
              ))}
            </div>
          </div>
        </section>
        {/* END: ServicesSection */}

        {/* BEGIN: HowItWorksSection */}
        <section className="py-16 sm:py-20 lg:py-24 bg-white" id="how-it-works">
          <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-12">
            <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
              <p className="text-xs uppercase tracking-[0.22em] text-brand-blue font-bold mb-2">Simple Process</p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy font-sans tracking-tight">
                One Conversation. We&apos;ll Help With the Rest.
              </h2>
              <p className="mt-3 text-brand-slate text-base leading-relaxed">
                From first touchpoint to smooth fulfillment, our team ensures every coordination is effortless.
              </p>
            </div>

            {/* 3 Sequential Steps */}
            <div className="relative">
              <div
                aria-hidden="true"
                className="hidden lg:block absolute top-10 left-[15%] right-[15%] h-[2px] bg-slate-100 z-0"
              />
              <ol className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-10 relative z-10">
                {STEPS.map((step) => (
                  <li
                    className="bg-brand-surface lg:bg-transparent rounded-2xl p-6 lg:p-4 text-center flex flex-col items-center"
                    key={step.number}
                  >
                    <div
                      aria-hidden="true"
                      className={`w-16 h-16 rounded-2xl shadow-sm flex items-center justify-center font-extrabold text-lg mb-6 ${
                        step.accent
                          ? 'bg-blue-50 border border-blue-200/70 text-brand-blue'
                          : 'bg-white border border-brand-border text-brand-navy'
                      }`}
                    >
                      {step.number}
                    </div>
                    <h3 className="text-lg font-bold text-brand-navy mb-2">{step.title}</h3>
                    <p className="text-brand-slate text-[15px] leading-relaxed max-w-xs">{step.description}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>
        {/* END: HowItWorksSection */}

        {/* BEGIN: TrustAdvisorySection */}
        <section className="py-16 sm:py-20 lg:py-24 bg-brand-surface border-t border-brand-border" id="trust">
          <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left: Image & Advisory Narrative */}
              <div className="lg:col-span-6 relative">
                <div className="relative rounded-3xl overflow-hidden shadow-subtle border border-brand-border bg-white p-2">
                  <img
                    alt="A QVC advisor reviewing travel and schooling plans with a client"
                    className="w-full h-[320px] sm:h-[420px] object-cover rounded-2xl"
                    decoding="async"
                    loading="lazy"
                    src={IMAGES.advisory}
                  />
                  <div className="absolute bottom-6 left-6 right-6 bg-brand-navy/90 backdrop-blur-md rounded-2xl p-4 text-white border border-white/10">
                    <p className="text-xs font-semibold text-brand-blue uppercase tracking-widest mb-1">
                      Human-Centered Coordination
                    </p>
                    <p className="text-[15px] font-medium leading-snug">
                      Dedicated advisors who understand your family&apos;s timeline, privacy, and preferences.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right: Detail & Verification Checkmarks */}
              <div className="lg:col-span-6">
                <p className="text-xs uppercase tracking-[0.22em] text-brand-blue font-bold mb-2">Dedicated Advisory</p>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy font-sans tracking-tight leading-tight mb-4">
                  Thoughtful Support.
                  <br />
                  Every Step of the Way.
                </h2>
                <p className="text-brand-slate text-base leading-relaxed mb-6">
                  Every request is different. QVC brings a personal approach to coordinating the services, arrangements
                  and opportunities that matter to you.
                </p>
                <ul className="space-y-4 mb-8">
                  {TRUST_POINTS.map((point) => (
                    <li className="flex items-start gap-3.5" key={point.title}>
                      <span className="w-6 h-6 rounded-full bg-blue-50 text-brand-blue flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckIcon className="w-3.5 h-3.5" />
                      </span>
                      <span>
                        <strong className="block text-[15px] font-bold text-brand-navy">{point.title}</strong>
                        <span className="block text-sm text-brand-slate mt-0.5">{point.description}</span>
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-3">
                  <a
                    className="inline-flex items-center gap-2 min-h-[44px] px-6 py-3 rounded-full bg-white border border-brand-border text-brand-navy text-sm font-semibold hover:border-slate-300 hover:bg-brand-mist/50 transition-colors shadow-sm"
                    href="#enquiry"
                  >
                    <span>Speak With an Advisor</span>
                    <ArrowRightIcon className="w-4 h-4 text-brand-blue" />
                  </a>
                  <a
                    className="inline-flex items-center gap-2 min-h-[44px] px-6 py-3 rounded-full border border-brand-border text-brand-navy text-sm font-semibold hover:border-brand-blue hover:text-brand-blue transition-colors"
                    href={PHONE_HREF}
                  >
                    <PhoneIcon className="w-4 h-4 text-brand-blue" />
                    <span>{PHONE_DISPLAY}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* END: TrustAdvisorySection */}

        {/* BEGIN: EnquirySection */}
        <section className="py-16 sm:py-20 lg:py-24 bg-brand-navy text-white relative overflow-hidden" id="enquiry">
          <div className="max-w-4xl mx-auto px-5 sm:px-6 relative z-10">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <p className="text-xs uppercase tracking-[0.25em] text-brand-blue font-bold mb-2">Direct Intake</p>
              <h2 className="text-3xl sm:text-5xl font-extrabold font-sans tracking-tight mb-3">
                Where Can We Help You Go?
              </h2>
              <p className="text-slate-300 text-base leading-relaxed">
                Tell us what you have in mind. We&apos;ll help you find the right service and guide you through the next
                steps.
              </p>
              <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                <a
                  className="inline-flex items-center gap-2 min-h-[44px] px-5 py-3 rounded-full border border-white/35 text-white text-sm font-semibold hover:border-white hover:bg-white/10 transition-colors"
                  href={PHONE_HREF}
                >
                  <PhoneIcon className="w-4 h-4" />
                  <span>{PHONE_DISPLAY}</span>
                </a>
                <a
                  className="inline-flex items-center gap-2 min-h-[44px] px-5 py-3 rounded-full border border-white/35 text-white text-sm font-semibold hover:border-white hover:bg-white/10 transition-colors"
                  href={WHATSAPP_HREF}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  <span>WhatsApp Concierge</span>
                </a>
              </div>
            </div>

            {enquirySent ? (
              <div
                className="bg-brand-obsidian/70 backdrop-blur-xl p-6 sm:p-10 rounded-3xl border border-white/10 text-center max-w-2xl mx-auto shadow-2xl"
                role="status"
              >
                <div className="w-12 h-12 rounded-full bg-brand-blue/20 text-brand-blue flex items-center justify-center mx-auto mb-5">
                  <CheckIcon className="w-6 h-6" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight mb-3">Enquiry Received</h3>
                <p className="text-slate-300 text-base leading-relaxed">
                  Thank you for your enquiry. A senior QVC Concierge advisor will review your request and get in touch
                  promptly.
                </p>
                <button
                  className="mt-6 inline-flex items-center gap-2 min-h-[44px] px-5 text-xs font-bold uppercase tracking-wider text-brand-blue hover:text-white transition-colors"
                  onClick={() => setEnquirySent(false)}
                  type="button"
                >
                  <span>Send Another Enquiry</span>
                  <ArrowRightIcon className="w-3.5 h-3.5" />
                </button>
              </div>
            ) : (
              <EnquiryForm onSent={() => setEnquirySent(true)} />
            )}
          </div>
        </section>
        {/* END: EnquirySection */}
      </main>

      {/* BEGIN: FooterSection */}
      <footer className="bg-white border-t border-brand-border py-12 text-brand-slate text-sm">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10 pb-10 border-b border-slate-100">
            {/* Column 1: Brand */}
            <div className="md:col-span-2">
              <a className="inline-flex items-center gap-3 mb-3 group" href="#home">
                <img
                  alt="QVC Concierge"
                  className="w-8 h-8 object-contain rounded-full"
                  height="32"
                  loading="lazy"
                  src={LOGO_SRC}
                  width="32"
                />
                <span className="font-sans font-extrabold text-brand-navy text-base tracking-wider">QVC CONCIERGE</span>
              </a>
              <p className="text-brand-slate text-sm leading-relaxed max-w-sm mb-4">
                One destination for five world-class services: flight tickets, bespoke tours, visa guidance, UK &amp;
                global education advisory, and dedicated lifestyle concierge.
              </p>
              <p className="text-xs text-brand-muted">
                IATA Certified Agency &bull; British Boarding Schools Network Advisory
              </p>
            </div>

            {/* Column 2: Services */}
            <div>
              <h2 className="text-xs uppercase tracking-wider font-bold text-brand-navy mb-2">Our Services</h2>
              <ul>
                {FOOTER_SERVICES.map((item) => (
                  <li key={item.label}>
                    <a
                      className="flex items-center min-h-[44px] hover:text-brand-blue transition-colors"
                      href={item.href}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Private Client Desk */}
            <div>
              <h2 className="text-xs uppercase tracking-wider font-bold text-brand-navy mb-2">Private Client Desk</h2>
              <ul>
                {FOOTER_DESK.map((item) => (
                  <li key={item.label}>
                    <a
                      className="flex items-center min-h-[44px] hover:text-brand-blue transition-colors"
                      href={item.href}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
                <li>
                  <a
                    className="flex items-center gap-2 min-h-[44px] hover:text-brand-blue transition-colors"
                    href={WHATSAPP_HREF}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <WhatsAppIcon className="w-4 h-4 text-brand-whatsapp" />
                    <span>WhatsApp Concierge</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-brand-muted">
            <p>&copy; 2026 QVC Concierge. All rights reserved.</p>
            <p className="flex items-center gap-6">
              <span>Licensed Global Operator</span>
              <span aria-hidden="true">&bull;</span>
              <span>Discreet Family Advisory</span>
            </p>
          </div>
        </div>
      </footer>
      {/* END: FooterSection */}

      {/* Persistent WhatsApp channel */}
      <a
        aria-label="Chat with QVC Concierge on WhatsApp"
        className="fixed bottom-[calc(1rem+env(safe-area-inset-bottom,0px))] right-4 sm:bottom-6 sm:right-6 z-40 inline-flex items-center justify-center w-14 h-14 rounded-full bg-brand-whatsapp text-white shadow-lg hover:scale-105 transition-transform duration-200"
        href={WHATSAPP_HREF}
        rel="noopener noreferrer"
        target="_blank"
      >
        <WhatsAppIcon className="w-7 h-7" />
      </a>
    </div>
  );
}
