import { useState } from 'react';

const LOGO_SRC = '/logo.jpeg';

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
  { label: 'Home', href: '#home', active: true },
  { label: 'Our Services', href: '#services' },
  { label: 'About QVC', href: '#trust' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Contact', href: '#enquiry' },
];

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
  { label: 'Privacy Policy', href: '#' },
  { label: 'Terms of Engagement', href: '#' },
];

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

const GlobeIcon = () => (
  <svg aria-hidden="true" className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
  </svg>
);

const ShieldCheckIcon = () => (
  <svg aria-hidden="true" className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
  </svg>
);

const StarIcon = () => (
  <svg aria-hidden="true" className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
  </svg>
);

const CREDENTIALS = [
  { label: 'Licensed IATA Agent', icon: <GlobeIcon />, tone: 'text-brand-blue' },
  { label: 'BBSN Member Advisory', icon: <ShieldCheckIcon />, tone: 'text-brand-blue' },
  { label: 'Discreet Personal Support', icon: <StarIcon />, tone: 'text-brand-gold' },
];

function ServiceCard({ service }) {
  const cardClass = `${service.span} bg-white rounded-3xl p-7 border border-brand-border shadow-subtle hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group`;

  const kicker = (
    <span className="text-xs font-bold text-brand-blue uppercase tracking-widest">
      {service.number} / {service.category}
    </span>
  );

  const discoverLink = (
    <a
      className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand-blue hover:text-brand-blueHover pt-2"
      href={service.href}
    >
      <span>Discover More</span>
      <span aria-hidden="true">&rarr;</span>
    </a>
  );

  if (service.wide) {
    return (
      <div className={cardClass}>
        <div className="flex flex-col sm:flex-row gap-6 items-start">
          <div className="w-full sm:w-5/12 h-48 sm:h-56 rounded-2xl overflow-hidden flex-shrink-0 bg-slate-100">
            <img
              alt={service.alt}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              decoding="async"
              loading="lazy"
              src={service.image}
            />
          </div>
          <div className="flex flex-col justify-between h-full">
            <div>
              {kicker}
              <h3 className="text-xl sm:text-2xl font-bold text-brand-navy mt-1 mb-2">{service.title}</h3>
              <p className="text-brand-slate text-sm leading-relaxed mb-4">{service.description}</p>
            </div>
            {discoverLink}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={cardClass}>
      <div>
        <div className={`w-full ${service.imageHeight || 'h-44'} rounded-2xl overflow-hidden mb-5 bg-slate-100`}>
          <img
            alt={service.alt}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            decoding="async"
            loading="lazy"
            src={service.image}
          />
        </div>
        {kicker}
        <h3 className={`${service.titleSize || 'text-xl'} font-bold text-brand-navy mt-1 mb-2`}>{service.title}</h3>
        <p className="text-brand-slate text-sm leading-relaxed mb-4">{service.description}</p>
      </div>
      {discoverLink}
    </div>
  );
}

export default function LandingPage() {
  const [enquirySent, setEnquirySent] = useState(false);

  const handleEnquirySubmit = (event) => {
    event.preventDefault();
    setEnquirySent(true);
  };

  return (
    <div className="bg-white text-brand-slateDark font-sans antialiased selection:bg-brand-blue selection:text-white">
      {/* BEGIN: MainHeader */}
      <header className="w-full sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-brand-border/80 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
          {/* Brand Logo Wordmark */}
          <a className="flex items-center gap-3.5 group" href="#home">
            <img
              alt="QVC Concierge"
              className="w-9 h-9 object-contain rounded-full shadow-sm group-hover:scale-105 transition-transform duration-300"
              src={LOGO_SRC}
            />
            <div className="flex items-baseline gap-1.5">
              <span className="font-sans text-xl font-extrabold tracking-tight text-brand-navy">QVC</span>
              <span className="text-xs uppercase font-semibold tracking-[0.22em] text-brand-muted">Concierge</span>
            </div>
          </a>
          {/* Primary Navigation Links */}
          <nav className="hidden md:flex items-center space-x-9 text-sm font-medium tracking-tight">
            {NAV_LINKS.map((link) => (
              <a
                className={
                  link.active
                    ? 'text-brand-navy font-semibold hover:text-brand-blue transition-colors relative py-1'
                    : 'text-brand-slate hover:text-brand-blue transition-colors py-1'
                }
                href={link.href}
                key={link.label}
              >
                {link.label}
                {link.active ? (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-brand-blue rounded-full" />
                ) : null}
              </a>
            ))}
          </nav>
          {/* Header Action Button */}
          <div className="flex items-center">
            <a
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-brand-blue text-white text-xs sm:text-sm font-semibold hover:bg-brand-blueHover shadow-glow-cobalt hover:shadow-lg transition-all duration-200 group"
              href="#enquiry"
            >
              <span>Make an Enquiry</span>
              <ArrowRightIcon className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </header>
      {/* END: MainHeader */}

      <main id="home">
        {/* BEGIN: HeroSection */}
        <section className="relative pt-12 pb-16 lg:pt-16 lg:pb-24 overflow-hidden bg-gradient-to-b from-[#FAFBFD] via-[#F8FAFC] to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Headline & Supporting Text */}
            <div className="text-center max-w-4xl mx-auto mb-10 lg:mb-14">
              <p className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.25em] text-brand-blue font-bold mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-blue" />
                Travel &bull; Education &bull; Lifestyle
              </p>
              <h1 className="text-4xl sm:text-6xl lg:text-[68px] font-extrabold tracking-tight leading-[1.08] mb-5 font-sans">
                <span className="text-brand-obsidian block">Whatever Life Takes You To.</span>
                <span className="text-brand-blue block">We&apos;ll Help You Get There.</span>
              </h1>
              <p className="text-brand-slate text-base sm:text-lg font-normal max-w-2xl mx-auto leading-relaxed mb-8">
                From journeys and new opportunities to life&apos;s important details, discover services and personalised
                support in one convenient place.
              </p>
              {/* Dual Action Buttons */}
              <div className="flex flex-wrap items-center justify-center gap-4">
                <a
                  className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-brand-blue text-white text-sm sm:text-base font-semibold shadow-glow-cobalt hover:bg-brand-blueHover hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
                  href="#services"
                >
                  <span>Explore Our Services</span>
                  <ArrowLongRightIcon />
                </a>
                <a
                  className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-white text-brand-navy text-sm sm:text-base font-semibold border border-brand-border hover:border-slate-300 hover:bg-brand-mist/50 transition-all duration-200 shadow-sm"
                  href="#enquiry"
                >
                  <span>Make an Enquiry</span>
                </a>
              </div>
            </div>

            {/* DISTINCTIVE SERVICE WORD-ART COMPOSITION (Editorial Live Typography, No Boxes/Pills) */}
            <div className="relative max-w-6xl mx-auto mt-6 lg:mt-10">
              <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] lg:gap-4 lg:min-h-[620px] xl:gap-8">
                {/* Central Focal Anchor: Architectural Editorial Masking */}
                <div className="order-1 lg:order-2 relative z-20 flex flex-col items-center">
                  <div className="relative w-64 sm:w-72 md:w-80 lg:w-[350px] aspect-[4/5] rounded-[28px] overflow-hidden shadow-editorial-image transition-all duration-700 hover:scale-[1.01] bg-slate-100">
                    <img
                      alt="Discreet traveler with refined luggage at private terminal"
                      className="w-full h-full object-cover object-center"
                      src={IMAGES.heroPortrait}
                    />
                    {/* Architectural Editorial Gradient Veil */}
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 via-transparent to-transparent pointer-events-none" />
                    {/* Discreet Inset Editorial Caption */}
                    <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between text-white select-none">
                      <span className="text-xs font-semibold tracking-wider uppercase text-white/95 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-blue" />
                        Bespoke Coordination
                      </span>
                      <span className="text-[11px] text-white/80 font-medium tracking-wide">Worldwide Access</span>
                    </div>
                  </div>
                </div>

                {/* Left Column Typographic Word-Art Flow */}
                <div className="order-2 lg:order-1 z-10 flex h-full flex-col justify-between gap-10 lg:gap-0 lg:py-10 pointer-events-none select-none">
                  {/* Top Left Cluster */}
                  <div className="text-left space-y-1 pl-2 sm:pl-6 lg:pl-4 xl:pl-8">
                    <span className="block text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-brand-obsidian">
                      Travel
                    </span>
                    <span className="block text-xs sm:text-sm font-semibold tracking-[0.16em] uppercase text-brand-blue">
                      Tickets &amp; Aviation
                    </span>
                    <span className="block text-[11px] sm:text-xs uppercase tracking-[0.28em] text-slate-400 font-medium pt-1">
                      Getaways
                    </span>
                  </div>
                  {/* Mid Left Cluster */}
                  <div className="text-left space-y-1.5 pl-4 sm:pl-10 lg:pl-8 xl:pl-12">
                    <span className="block text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-brand-navy">
                      Tours &amp; Escapes
                    </span>
                    <span className="block text-sm sm:text-base font-medium tracking-wide text-brand-slate">
                      Curated Itineraries
                    </span>
                    <span className="block text-lg sm:text-xl font-bold tracking-tight text-slate-300">Experiences</span>
                  </div>
                  {/* Bottom Left Cluster */}
                  <div className="text-left space-y-1 pl-2 sm:pl-6 xl:pl-10">
                    <span className="block text-xs sm:text-sm uppercase tracking-[0.22em] text-brand-blue font-semibold">
                      Global Mobility
                    </span>
                    <span className="block text-2xl sm:text-3xl xl:text-4xl font-extrabold tracking-tight text-brand-obsidian">
                      Visa Assistance
                    </span>
                    <span className="block text-xs sm:text-sm font-medium text-slate-500">
                      Expedited Consular Pathways
                    </span>
                  </div>
                </div>

                {/* Right Column Typographic Word-Art Flow */}
                <div className="order-3 z-10 flex h-full flex-col justify-between gap-10 lg:gap-0 lg:py-10 pointer-events-none select-none">
                  {/* Top Right Cluster */}
                  <div className="text-right space-y-1 pr-2 sm:pr-6 lg:pr-4 xl:pr-8">
                    <span className="block text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-brand-obsidian">
                      Education
                    </span>
                    <span className="block text-xs sm:text-sm font-semibold tracking-[0.16em] uppercase text-brand-blue">
                      School Placement
                    </span>
                    <span className="block text-[11px] sm:text-xs uppercase tracking-[0.28em] text-slate-400 font-medium pt-1">
                      Opportunities
                    </span>
                  </div>
                  {/* Mid Right Cluster */}
                  <div className="text-right space-y-1.5 pr-4 sm:pr-10 lg:pr-8 xl:pr-12">
                    <span className="block text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-brand-navy">
                      Concierge
                    </span>
                    <span className="block text-sm sm:text-base font-semibold tracking-wide text-brand-blue">
                      24/7 Dedicated Care
                    </span>
                    <span className="block text-lg sm:text-xl font-bold tracking-tight text-slate-300">Lifestyle</span>
                  </div>
                  {/* Bottom Right Cluster */}
                  <div className="text-right space-y-1 pr-2 sm:pr-6 xl:pr-10">
                    <span className="block text-xs sm:text-sm uppercase tracking-[0.22em] text-slate-400 font-semibold">
                      Tailored Living
                    </span>
                    <span className="block text-xl sm:text-2xl xl:text-3xl font-bold tracking-tight text-brand-obsidian">
                      Personal Assistance
                    </span>
                    <span className="block text-xs sm:text-sm font-bold tracking-wide text-brand-blue mt-1">
                      Discover More &bull; And Beyond
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Trust Credentials Horizontal Ribbon */}
            <div className="mt-14 pt-8 border-t border-brand-border/80 max-w-4xl mx-auto">
              <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-12 text-xs sm:text-sm font-semibold text-brand-slate">
                {CREDENTIALS.map((credential, index) => (
                  <div className="flex items-center gap-6 sm:gap-12" key={credential.label}>
                    {index > 0 ? <div className="hidden sm:block w-px h-4 bg-slate-200" /> : null}
                    <div className="flex items-center gap-2 hover:text-brand-navy transition-colors">
                      <span className={`p-1 rounded-full bg-blue-50 ${credential.tone}`}>{credential.icon}</span>
                      <span>{credential.label}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        {/* END: HeroSection */}

        {/* BEGIN: ServicesSection */}
        <section className="py-24 bg-brand-surface border-t border-brand-border scroll-mt-20" id="services">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            {/* Section Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div className="max-w-2xl">
                <p className="text-xs uppercase tracking-[0.22em] text-brand-blue font-bold mb-2">Our Capabilities</p>
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-brand-navy font-sans">
                  A World of Services. One Place to Begin.
                </h2>
                <p className="mt-3 text-brand-slate text-sm sm:text-base leading-relaxed">
                  Explore the services you need, discover new possibilities and let our team help coordinate the next
                  steps.
                </p>
              </div>
              <div>
                <a
                  className="inline-flex items-center gap-2 text-sm font-bold text-brand-blue hover:text-brand-blueHover transition-colors group"
                  href="#enquiry"
                >
                  <span>Explore All Services</span>
                  <span aria-hidden="true" className="transition-transform group-hover:translate-x-1 font-bold">
                    &rarr;
                  </span>
                </a>
              </div>
            </div>

            {/* Asymmetric Editorial Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
              {SERVICES.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          </div>
        </section>
        {/* END: ServicesSection */}

        {/* BEGIN: HowItWorksSection */}
        <section className="py-24 bg-white scroll-mt-20" id="how-it-works">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="text-xs uppercase tracking-[0.22em] text-brand-blue font-bold mb-2">Simple Process</p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy font-sans tracking-tight">
                One Conversation. We&apos;ll Help With the Rest.
              </h2>
              <p className="mt-3 text-brand-slate text-sm sm:text-base leading-relaxed">
                From first touchpoint to smooth fulfillment, our team ensures every coordination is effortless.
              </p>
            </div>

            {/* 3 Sequential Steps */}
            <div className="relative">
              <div className="hidden lg:block absolute top-10 left-[15%] right-[15%] h-[2px] bg-slate-100 z-0" />
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 relative z-10">
                {STEPS.map((step) => (
                  <div
                    className="bg-brand-surface lg:bg-transparent rounded-2xl p-6 lg:p-4 text-center flex flex-col items-center"
                    key={step.number}
                  >
                    <div
                      className={`w-16 h-16 rounded-2xl shadow-sm flex items-center justify-center font-extrabold text-lg mb-6 ${
                        step.accent
                          ? 'bg-blue-50 border border-blue-200/70 text-brand-blue'
                          : 'bg-white border border-brand-border text-brand-navy'
                      }`}
                    >
                      {step.number}
                    </div>
                    <h3 className="text-lg font-bold text-brand-navy mb-2">{step.title}</h3>
                    <p className="text-brand-slate text-sm leading-relaxed max-w-xs">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        {/* END: HowItWorksSection */}

        {/* BEGIN: TrustAdvisorySection */}
        <section className="py-24 bg-brand-surface border-t border-brand-border scroll-mt-20" id="trust">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Left: Image & Advisory Narrative */}
              <div className="lg:col-span-6 relative">
                <div className="relative rounded-3xl overflow-hidden shadow-subtle border border-brand-border bg-white p-2">
                  <img
                    alt="Personalized concierge advisory team"
                    className="w-full h-[420px] object-cover rounded-2xl"
                    decoding="async"
                    loading="lazy"
                    src={IMAGES.advisory}
                  />
                  <div className="absolute bottom-6 left-6 right-6 bg-brand-navy/90 backdrop-blur-md rounded-2xl p-4 text-white border border-white/10">
                    <p className="text-xs font-semibold text-brand-blue uppercase tracking-widest mb-1">
                      Human-Centered Coordination
                    </p>
                    <p className="text-sm font-medium leading-snug">
                      &ldquo;Dedicated advisors who understand your family&apos;s timeline, privacy, and
                      preferences.&rdquo;
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
                <p className="text-brand-slate text-sm sm:text-base leading-relaxed mb-6">
                  Every request is different. QVC brings a personal approach to coordinating the services, arrangements
                  and opportunities that matter to you.
                </p>
                <div className="space-y-4 mb-8">
                  {TRUST_POINTS.map((point) => (
                    <div className="flex items-start gap-3.5" key={point.title}>
                      <div className="w-6 h-6 rounded-full bg-blue-50 text-brand-blue flex items-center justify-center flex-shrink-0 mt-0.5 font-bold text-xs">
                        &#10003;
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-brand-navy">{point.title}</h4>
                        <p className="text-xs text-brand-slate mt-0.5">{point.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <a
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white border border-brand-border text-brand-navy text-xs sm:text-sm font-semibold hover:border-slate-300 hover:bg-brand-mist/50 transition-all shadow-sm"
                  href="#enquiry"
                >
                  <span>Speak With an Advisor</span>
                  <span aria-hidden="true" className="text-brand-blue">
                    &rarr;
                  </span>
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* END: TrustAdvisorySection */}

        {/* BEGIN: EnquirySection */}
        <section className="py-24 bg-brand-navy text-white relative overflow-hidden scroll-mt-20" id="enquiry">
          <div className="max-w-4xl mx-auto px-6 relative z-10">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <p className="text-xs uppercase tracking-[0.25em] text-brand-blue font-bold mb-2">Direct Intake</p>
              <h2 className="text-3xl sm:text-5xl font-extrabold font-sans tracking-tight mb-3">
                Where Can We Help You Go?
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Tell us what you have in mind. We&apos;ll help you find the right service and guide you through the next
                steps.
              </p>
            </div>

            {/* Conversational Intake Form with Obsidian-Contrast Styling */}
            {enquirySent ? (
              <div
                className="bg-[#111827]/70 backdrop-blur-xl p-8 sm:p-10 rounded-3xl border border-white/10 text-center max-w-2xl mx-auto shadow-2xl"
                role="status"
              >
                <div className="w-12 h-12 rounded-full bg-brand-blue/20 text-brand-blue flex items-center justify-center mx-auto mb-5 text-xl font-bold">
                  &#10003;
                </div>
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight mb-3">Enquiry Received</h3>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  Thank you for your enquiry. A senior QVC Concierge advisor will review your request and get in touch
                  promptly.
                </p>
                <button
                  className="mt-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-blue hover:text-white transition-colors"
                  onClick={() => setEnquirySent(false)}
                  type="button"
                >
                  <span>Send Another Enquiry</span>
                  <span aria-hidden="true">&rarr;</span>
                </button>
              </div>
            ) : (
              <form
                className="bg-[#111827]/70 backdrop-blur-xl p-8 sm:p-10 rounded-3xl border border-white/10 text-left max-w-2xl mx-auto shadow-2xl"
                onSubmit={handleEnquirySubmit}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                  <div>
                    <label
                      className="block text-xs uppercase tracking-wider font-semibold text-slate-300 mb-2"
                      htmlFor="enquiry-name"
                    >
                      Full Name
                    </label>
                    <input
                      autoComplete="name"
                      className="w-full bg-white/10 border-white/20 rounded-xl text-sm text-white placeholder-slate-400 focus:border-brand-blue focus:ring-brand-blue py-3 px-4 transition-colors"
                      id="enquiry-name"
                      name="fullName"
                      placeholder="e.g. Eleanor Vance"
                      required
                      type="text"
                    />
                  </div>
                  <div>
                    <label
                      className="block text-xs uppercase tracking-wider font-semibold text-slate-300 mb-2"
                      htmlFor="enquiry-contact"
                    >
                      Email or Phone Number
                    </label>
                    <input
                      autoComplete="email"
                      className="w-full bg-white/10 border-white/20 rounded-xl text-sm text-white placeholder-slate-400 focus:border-brand-blue focus:ring-brand-blue py-3 px-4 transition-colors"
                      id="enquiry-contact"
                      name="contact"
                      placeholder="name@domain.com or +44..."
                      required
                      type="text"
                    />
                  </div>
                </div>
                <div className="mb-5">
                  <label
                    className="block text-xs uppercase tracking-wider font-semibold text-slate-300 mb-2"
                    htmlFor="enquiry-service"
                  >
                    Service of Interest
                  </label>
                  <div className="relative">
                    <select
                      className="w-full bg-white/10 border-white/20 rounded-xl text-sm text-white focus:border-brand-blue focus:ring-brand-blue py-3 px-4 appearance-none cursor-pointer"
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
                  <label
                    className="block text-xs uppercase tracking-wider font-semibold text-slate-300 mb-2"
                    htmlFor="enquiry-brief"
                  >
                    Brief Description
                  </label>
                  <textarea
                    className="w-full bg-white/10 border-white/20 rounded-xl text-sm text-white placeholder-slate-400 focus:border-brand-blue focus:ring-brand-blue p-4 transition-colors"
                    id="enquiry-brief"
                    name="brief"
                    placeholder="Please outline destinations, preferred dates, schooling objectives, or specific requirements..."
                    rows="3"
                  />
                </div>
                <button
                  className="w-full py-4 rounded-full bg-brand-blue hover:bg-brand-blueHover text-white font-bold text-sm tracking-wide shadow-glow-cobalt transition-all duration-200"
                  type="submit"
                >
                  Tell Us What You Need &rarr;
                </button>
                <p className="text-center text-[11px] text-slate-400 mt-4">
                  Strictly confidential. An advisor typically responds within 2 business hours.
                </p>
              </form>
            )}
          </div>
        </section>
        {/* END: EnquirySection */}
      </main>

      {/* BEGIN: FooterSection */}
      <footer className="bg-white border-t border-brand-border py-12 text-brand-slate text-xs">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10 pb-10 border-b border-slate-100">
            {/* Column 1: Brand */}
            <div className="md:col-span-2">
              <a className="flex items-center gap-3 mb-3 group" href="#home">
                <img alt="QVC Concierge" className="w-8 h-8 object-contain rounded-full" src={LOGO_SRC} />
                <span className="font-sans font-extrabold text-brand-navy text-base tracking-wider">QVC CONCIERGE</span>
              </a>
              <p className="text-brand-slate text-xs leading-relaxed max-w-sm mb-4">
                One destination for five world-class services: flight tickets, bespoke tours, visa guidance, UK &amp;
                global education advisory, and dedicated lifestyle concierge.
              </p>
              <div className="text-[11px] text-brand-muted">
                IATA Certified Agency &bull; British Boarding Schools Network Advisory
              </div>
            </div>

            {/* Column 2: Services */}
            <div>
              <h4 className="text-xs uppercase tracking-wider font-bold text-brand-navy mb-3">Our Services</h4>
              <ul className="space-y-2 text-xs">
                {FOOTER_SERVICES.map((item) => (
                  <li key={item.label}>
                    <a className="hover:text-brand-blue transition-colors" href={item.href}>
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Contact & Legal */}
            <div>
              <h4 className="text-xs uppercase tracking-wider font-bold text-brand-navy mb-3">Private Client Desk</h4>
              <ul className="space-y-2 text-xs">
                {FOOTER_DESK.map((item) => (
                  <li key={item.label}>
                    <a className="hover:text-brand-blue transition-colors" href={item.href}>
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-brand-muted">
            <div>&copy; 2026 QVC Concierge. All rights reserved.</div>
            <div className="flex items-center gap-6">
              <span>Licensed Global Operator</span>
              <span aria-hidden="true">&bull;</span>
              <span>Discreet Family Advisory</span>
            </div>
          </div>
        </div>
      </footer>
      {/* END: FooterSection */}
    </div>
  );
}
