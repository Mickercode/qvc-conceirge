import {
  AcademicCapIcon,
  ArrowLongRightIcon,
  BellIcon,
  CalendarIcon,
  PassportIcon,
  SunIcon,
  UsersIcon,
} from './icons.jsx';

const PHOTO = {
  aviation:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuB8qdWgrPD74mTl4k3YLjFScP-G6OsWxJDljPGbKNW4xDkV4zTVH22iHfaZCwHWpk758Up4LzpIF7LIJil_o2Wk4t722A3mUiprMq9B-9tUD7eHkjzij26BE4H2ShYC-_qLOecIDdq7MyoO3nAHfJjOrK42NF0vCHOjxF8K0bAzSHuCh2nZZoJA9vIm4_jIRhRtYFjhVv5wfgiQc0R-KB5_yteQVgOZ5_GX4SwB-WK--BZQ2kcPdhxl',
  destination:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuC1SC0Do71U2Q5BGwmN0amogwQuU_vEqkGiBois4wbgC108ZPXC_TUHLpS70vT_XghqHcIwsY1Ne-ynZbTZW50avxBbKhV0q-iA0PxmFlvnnWomZ8LAee7LW78XMb05aotpuqn324RsB2VB9s40xnW5NnfUBeYHjwytYpn8LK1qkXgLgr0rEx7aiv_hJO547rrcqs4NwLLTq2ZQzLqy26ZnXOENzg-P_XivcFLsLtcvUvOt96_HOQAb',
  documents:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuAuf2fMAoGNJzCnvaVR4gBcCJGV7LGz55FlYLH6fwo2CGt-Tb_SjWrCBkvu4T5gFr4OKAE0M55nYoNI8_LJMndm3_NgYie2AJ8VOs2dV-Q-6v_BCHpSHZNS__per3xlHgm-pOMnnc08659NmVimoHqfQuaK4eT0hEvjRSpaPltEq7F-HRHLx3aC73cMWI1JXaLr-5qXQPSAV74KkAWugw7TCGW_gkcfxUeV6jVGMnpCPvRoodkg4nD5',
  campus:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDWqvr7VzIuCdbz55yDicDz4i82dN28eB9eIm6f92fCCbMk2D5QxBDT8z_oJoa82SAXoksQdb--1EYB-s8orJmyWiL1LXGF5IgpoEfQYPDXXFFZpBEd4MVQ4nh5jupGTFa4cw2IokGVmUw3fUK48T35efvraD7Ia5sG3shsmajGXmlhZ5sqMB3Y0dhLsTe9OaiPOCah_eYGstOSNnPU4Tlfvn-MBpZy-ZIT7Mk3-4u-_tGwoJ6pv64_',
  hospitality:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuBlcCuPQsjWcEYijaarj5MvGkSj5AnrO7ibgVWMxiKM6fBcUZuI1QLcMX41Q635WW_syq6rJBlcPQSA6OvllzSbzkDdH8cosNSQVjLETZWjnuAG8Isj0klYm3yKRoQkyiKVzV5EpC2wWnavoRq9b-L04KlD64cy_m1igK1GYNCBaMUBnNm8tVLabsNTTnedMyiNENMBXyE_jUDKdPSUiFetXTPFiOiPCIbmgaZiVShZ9AGGgADYo6yp',
  group:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuATIij0RcaQfOVjpJpsxa1TFzHIfKv3nUSBx_MtuUDBVLAIDDF_3VkkkMYEy9CnBggEBU3QHdWGQnj9KnVDARXYFS14pKM6da4q8qxO3QHscylP-x5XlfkEf4JZ4etvSklGuXon4f6Z5H4BB1XNANY_Tvs_cuh3fDRTFO1glhF2C52jyxJZfQ9VvYWo-EbfUgny_5sAgIHYHhHtA4HB7P5ohGvNEMpqV0XLw0_ylS1A3qoTL6ovS0pU',
};

/**
 * The six core services, three to each side.
 *
 * The composition is driven entirely by this array — add, remove or reorder
 * freely. `top` and `edge` are percentages of the hero stage. Keep `edge` at
 * 9% or below: the centred headline box is 736px wide, which leaves 332px of
 * clear space either side on a 1400px stage, and a pill is about 200px wide.
 */
export const HERO_SERVICES = [
  { label: 'Flight Bookings', Icon: CalendarIcon, href: '/tickets-and-aviation', side: 'left', top: 8, edge: 7 },
  { label: 'Visa Assistance', Icon: PassportIcon, href: '/visa-consultancy', side: 'left', top: 44, edge: 2 },
  { label: 'Hotel & Tours', Icon: SunIcon, href: '/curated-tours', side: 'left', top: 80, edge: 9 },
  { label: 'School Placement', Icon: AcademicCapIcon, href: '/school-placement', side: 'right', top: 8, edge: 6 },
  { label: 'Concierge Services', Icon: BellIcon, href: '/concierge-lifestyle', side: 'right', top: 44, edge: 1 },
  { label: 'Group Travels', Icon: UsersIcon, href: '/group-tours', side: 'right', top: 80, edge: 8 },
];

/** Contextual photo cutouts, positioned independently of the pills. */
const HERO_PHOTOS = [
  { src: PHOTO.aviation, alt: 'Aircraft above the clouds', side: 'left', top: 2, edge: 13, size: 'w-28 xl:w-32' },
  { src: PHOTO.documents, alt: 'Travel documents', side: 'left', top: 33, edge: 12, size: 'w-24 xl:w-28' },
  { src: PHOTO.destination, alt: 'Coastal destination', side: 'left', top: 68, edge: 1, size: 'w-28 xl:w-32' },
  { src: PHOTO.campus, alt: 'University campus', side: 'right', top: 2, edge: 12, size: 'w-28 xl:w-32' },
  { src: PHOTO.hospitality, alt: 'Hotel concierge desk', side: 'right', top: 33, edge: 11, size: 'w-24 xl:w-28' },
  { src: PHOTO.group, alt: 'Group travel briefing', side: 'right', top: 68, edge: 1, size: 'w-28 xl:w-32' },
];

const CATEGORIES = ['Travel', 'Education', 'Lifestyle', 'Concierge', 'More'];

/** Faint orbital guides and connection dots. Decorative only. */
const ORBITS = (
  <div aria-hidden="true" className="pointer-events-none absolute inset-0 hidden xl:block">
    <div className="absolute left-[1%] top-[2%] h-[94%] w-[29%] rounded-full border border-blue-100" />
    <div className="absolute left-[6%] top-[16%] h-[66%] w-[21%] rounded-full border border-blue-100/60" />
    <div className="absolute right-[1%] top-[2%] h-[94%] w-[29%] rounded-full border border-blue-100" />
    <div className="absolute right-[6%] top-[16%] h-[66%] w-[21%] rounded-full border border-blue-100/60" />
    {[
      { top: '5%', left: '3.5%' },
      { top: '38%', left: '1.2%' },
      { top: '72%', left: '8%' },
      { top: '7%', right: '4%' },
      { top: '52%', right: '1.5%' },
      { top: '86%', right: '12%' },
    ].map((dot, index) => (
      <span className="absolute h-1.5 w-1.5 rounded-full bg-brand-blue/45" key={index} style={dot} />
    ))}
  </div>
);

function ServicePill({ service }) {
  const { Icon, label, href } = service;
  return (
    <a
      className={[
        'group inline-flex min-h-[44px] items-center gap-2.5 rounded-full border border-brand-border bg-white',
        'py-2 pl-2 pr-4 shadow-subtle whitespace-nowrap transition-all duration-200',
        'hover:-translate-y-0.5 hover:border-brand-blue hover:shadow-card-hover',
      ].join(' ')}
      href={href}
    >
      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-50 text-brand-blue transition-colors group-hover:bg-brand-blue group-hover:text-white">
        <Icon className="h-3.5 w-3.5" />
      </span>
      <span className="text-sm font-medium text-brand-navy">{label}</span>
    </a>
  );
}

function FloatingItem({ children, side, top, edge, index }) {
  return (
    <div
      className="hero-float absolute z-10"
      style={{
        top: `${top}%`,
        [side]: `${edge}%`,
        animationDelay: `${(index % 6) * 0.55}s`,
        animationDuration: `${6.5 + (index % 4) * 0.8}s`,
      }}
    >
      {children}
    </div>
  );
}

export default function HeroEcosystem() {
  return (
    <section
      className="relative overflow-hidden bg-gradient-to-b from-brand-canvas via-brand-surface to-white pb-14 pt-10 sm:pb-16 sm:pt-12 lg:pt-14 xl:pb-20"
      id="home"
    >
      <div className="relative mx-auto w-full max-w-[1180px] px-5 sm:px-6 lg:px-8 xl:max-w-[1400px]">
        {/* The stage: centred message, with the service ecosystem floating
            around it from xl up. */}
        <div className="relative flex flex-col justify-center xl:min-h-[480px]">
          {ORBITS}

          {/* Central message */}
          <div className="relative z-20 mx-auto max-w-[46rem] text-center">
            <h1 className="text-[2rem] font-extrabold leading-[1.14] tracking-tight text-brand-blue sm:text-5xl sm:leading-[1.08] xl:text-[56px]">
              <span className="block">Everywhere You&apos;re Headed.</span>
              <span className="block">One Team to Get You There.</span>
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-brand-slate sm:mt-5 sm:text-lg">
              From flights and visas to schooling abroad, a dedicated advisor handles every detail.
            </p>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
              <a
                className="inline-flex w-full min-h-[52px] items-center justify-center gap-2.5 rounded-full bg-brand-blue px-7 py-3.5 text-sm font-semibold text-white shadow-glow-cobalt transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-blueHover active:translate-y-0 sm:w-auto sm:text-base"
                href="#services"
              >
                <span>Explore Our Services</span>
                <ArrowLongRightIcon />
              </a>
              <a
                className="inline-flex w-full min-h-[52px] items-center justify-center rounded-full border border-brand-border bg-white px-7 py-3.5 text-sm font-semibold text-brand-navy shadow-sm transition-colors duration-200 hover:border-brand-blue hover:text-brand-blue sm:w-auto sm:text-base"
                href="#enquiry"
              >
                <span>Make an Enquiry</span>
              </a>
            </div>
          </div>

          {/* Floating ecosystem — xl and up, where there is room beside the
              centred headline. */}
          <div aria-hidden="true" className="hidden xl:block">
            {HERO_PHOTOS.map((photo, index) => (
              <FloatingItem edge={photo.edge} index={index + 2} key={photo.alt} side={photo.side} top={photo.top}>
                <div className={`${photo.size} overflow-hidden rounded-2xl bg-slate-100 shadow-editorial-image`}>
                  <img
                    alt=""
                    className="aspect-[4/3] w-full object-cover"
                    decoding="async"
                    loading="lazy"
                    src={photo.src}
                  />
                </div>
              </FloatingItem>
            ))}
          </div>
          <nav aria-label="Our services" className="hidden xl:block">
            {HERO_SERVICES.map((service, index) => (
              <FloatingItem edge={service.edge} index={index} key={service.label} side={service.side} top={service.top}>
                <ServicePill service={service} />
              </FloatingItem>
            ))}
          </nav>
        </div>

        {/* Below xl the ecosystem becomes a deliberate chip cluster rather
            than a shrunken version of the floating composition. */}
        <nav aria-label="Our services" className="mt-10 xl:hidden">
          <ul className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
            {HERO_SERVICES.map((service) => (
              <li key={service.label}>
                <ServicePill service={service} />
              </li>
            ))}
          </ul>
        </nav>

        {/* Category strip */}
        <div className="mt-10 flex items-center justify-center gap-4 xl:mt-8">
          <span aria-hidden="true" className="hidden h-px w-16 bg-brand-border sm:block lg:w-24" />
          <ul className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-muted">
            {CATEGORIES.map((category, index) => (
              <li className="flex items-center gap-3" key={category}>
                {index > 0 ? <span aria-hidden="true" className="h-1 w-1 rounded-full bg-brand-blue/40" /> : null}
                <span>{category}</span>
              </li>
            ))}
          </ul>
          <span aria-hidden="true" className="hidden h-px w-16 bg-brand-border sm:block lg:w-24" />
        </div>
      </div>
    </section>
  );
}
