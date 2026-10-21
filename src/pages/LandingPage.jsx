import { useEffect, useRef, useState } from 'react';
import {
  ArrowRightIcon,
  CheckIcon,
  ChevronDownIcon,
  GlobeIcon,
  PhoneIcon,
  ShieldCheckIcon,
  SparkleIcon,
  WhatsAppIcon,
} from '../components/icons.jsx';
import { PHONE_DISPLAY, PHONE_HREF, WHATSAPP_HREF } from '../components/siteConfig.js';
import HeroEcosystem from '../components/HeroEcosystem.jsx';

const IMAGES = {
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

const CREDENTIALS = [
  { label: 'Licensed IATA Agent', Icon: GlobeIcon, tone: 'text-brand-blue' },
  { label: 'BBSN Member Advisory', Icon: ShieldCheckIcon, tone: 'text-brand-blue' },
  { label: 'Discreet Personal Support', Icon: SparkleIcon, tone: 'text-brand-goldDeep' },
];

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
      errors[name]
        ? 'border-red-400 focus:border-red-400 focus:ring-red-400'
        : 'border-white/35 focus:border-brand-blue focus:ring-brand-blue',
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
          <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-300">
            <ChevronDownIcon />
          </span>
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
        <p className="mt-2 text-xs text-slate-400">
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

export default function LandingPage() {
  const [enquirySent, setEnquirySent] = useState(false);
  const [servicesRef, servicesShown] = useReveal();

  return (
    <>
      <HeroEcosystem />

      {/* Accreditations */}
      <section aria-label="Accreditations" className="bg-white">
        <div className="mx-auto max-w-4xl px-5 pb-12 pt-10 sm:px-6">
          <ul className="flex flex-wrap items-center justify-center gap-6 border-t border-brand-border/80 pt-8 text-sm font-semibold text-brand-slate sm:gap-12">
            {CREDENTIALS.map((credential, index) => (
              <li className="flex items-center gap-6 sm:gap-12" key={credential.label}>
                {index > 0 ? <span aria-hidden="true" className="hidden h-4 w-px bg-slate-200 sm:block" /> : null}
                <span className="flex items-center gap-2">
                  <span className={`rounded-full bg-blue-50 p-1 ${credential.tone}`}>
                    <credential.Icon />
                  </span>
                  <span>{credential.label}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* BEGIN: ServicesSection */}
      <section className="py-16 sm:py-20 lg:py-24 bg-brand-surface border-t border-brand-border" id="services">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-16 gap-6">
            <div className="max-w-2xl">
              <p className="text-xs uppercase tracking-[0.22em] text-brand-blue font-bold mb-2">Our Capabilities</p>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-brand-navy">
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
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy tracking-tight">
              One Conversation. We&apos;ll Help With the Rest.
            </h2>
            <p className="mt-3 text-brand-slate text-base leading-relaxed">
              From first touchpoint to smooth fulfillment, our team ensures every coordination is effortless.
            </p>
          </div>

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

            <div className="lg:col-span-6">
              <p className="text-xs uppercase tracking-[0.22em] text-brand-blue font-bold mb-2">Dedicated Advisory</p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy tracking-tight leading-tight mb-4">
                Thoughtful Support.
                <br />
                Every Step of the Way.
              </h2>
              <p className="text-brand-slate text-base leading-relaxed mb-6">
                Every request is different. QVC brings a personal approach to coordinating the services, arrangements and
                opportunities that matter to you.
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
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-3">Where Can We Help You Go?</h2>
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
    </>
  );
}
