import { useEffect, useRef, useState } from 'react';
import {
  ArrowRightIcon,
  ChevronDownIcon,
  CloseIcon,
  MenuIcon,
  PhoneIcon,
  WhatsAppIcon,
} from './icons.jsx';
import {
  LOGO_SRC,
  PHONE_DISPLAY,
  PHONE_HREF,
  SECTIONS,
  SECTION_IDS,
  SERVICE_ROUTES,
  WHATSAPP_HREF,
  sectionHref,
} from './siteConfig.js';

/** Highlights the section in view. Only meaningful on the landing page. */
function useActiveSection(enabled) {
  const [active, setActive] = useState('home');

  useEffect(() => {
    if (!enabled || !('IntersectionObserver' in window)) return undefined;
    const elements = SECTION_IDS.map((id) => document.getElementById(id)).filter(Boolean);
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
  }, [enabled]);

  return enabled ? active : null;
}

export default function SiteHeader({ landing = false, currentPath = '' }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [drawerServicesOpen, setDrawerServicesOpen] = useState(false);
  const servicesRef = useRef(null);
  const activeSection = useActiveSection(landing);

  const onServiceRoute = SERVICE_ROUTES.some((route) => route.href === currentPath);

  const closeAll = () => {
    setMenuOpen(false);
    setServicesOpen(false);
    setDrawerServicesOpen(false);
  };

  // Escape closes any open overlay — a predictable way out.
  useEffect(() => {
    if (!menuOpen && !servicesOpen) return undefined;
    const onKeyDown = (event) => {
      if (event.key === 'Escape') closeAll();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [menuOpen, servicesOpen]);

  // Clicking outside the services dropdown dismisses it.
  useEffect(() => {
    if (!servicesOpen) return undefined;
    const onPointerDown = (event) => {
      if (servicesRef.current && !servicesRef.current.contains(event.target)) setServicesOpen(false);
    };
    document.addEventListener('pointerdown', onPointerDown);
    return () => document.removeEventListener('pointerdown', onPointerDown);
  }, [servicesOpen]);

  const isSectionActive = (id) => landing && activeSection === id;

  const desktopLinkClass = (id) =>
    [
      'relative inline-flex items-center min-h-[44px] py-1 transition-colors',
      isSectionActive(id) ? 'text-brand-navy font-semibold hover:text-brand-blue' : 'text-brand-slate hover:text-brand-blue',
    ].join(' ');

  return (
    <header className="w-full sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-brand-border/80">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-12 h-20 flex items-center justify-between gap-4">
        {/* Brand wordmark */}
        <a className="flex items-center gap-3 sm:gap-3.5 group shrink-0" href="/">
          <img
            alt="QVC Concierge"
            className="w-9 h-9 object-contain rounded-full shadow-sm group-hover:scale-105 transition-transform duration-300"
            height="36"
            src={LOGO_SRC}
            width="36"
          />
          <span className="flex items-baseline gap-1.5">
            <span className="text-xl font-extrabold tracking-tight text-brand-navy">QVC</span>
            <span className="text-xs uppercase font-semibold tracking-[0.22em] text-brand-muted">
              Concierge
            </span>
          </span>
        </a>

        {/* Desktop navigation */}
        <nav aria-label="Primary" className="hidden md:flex items-center gap-7 lg:gap-9 text-sm font-medium tracking-tight">
          <a
            aria-current={isSectionActive('home') ? 'true' : undefined}
            className={desktopLinkClass('home')}
            href={landing ? '#home' : '/'}
          >
            Home
            {isSectionActive('home') ? (
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-brand-blue rounded-full" />
            ) : null}
          </a>

          {/* Services dropdown — every routed page stays reachable from here */}
          <div className="relative" ref={servicesRef}>
            <button
              aria-controls="services-menu"
              aria-expanded={servicesOpen}
              className={[
                'inline-flex items-center gap-1.5 min-h-[44px] py-1 transition-colors',
                servicesOpen || onServiceRoute || isSectionActive('services')
                  ? 'text-brand-navy font-semibold'
                  : 'text-brand-slate hover:text-brand-blue',
              ].join(' ')}
              onClick={() => setServicesOpen((open) => !open)}
              type="button"
            >
              <span>Our Services</span>
              <ChevronDownIcon className={`w-3.5 h-3.5 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
            </button>
            {servicesOpen ? (
              <div
                className="absolute left-0 top-full mt-2 w-[19rem] rounded-2xl border border-brand-border bg-white shadow-card-hover p-2"
                id="services-menu"
              >
                {SERVICE_ROUTES.map((route) => (
                  <a
                    aria-current={currentPath === route.href ? 'page' : undefined}
                    className={[
                      'flex flex-col justify-center min-h-[52px] px-3 py-2 rounded-xl transition-colors',
                      currentPath === route.href ? 'bg-blue-50 text-brand-blue' : 'hover:bg-brand-surface',
                    ].join(' ')}
                    href={route.href}
                    key={route.href}
                    onClick={closeAll}
                  >
                    <span className="text-sm font-semibold text-brand-navy">{route.label}</span>
                    <span className="text-xs text-brand-muted">{route.blurb}</span>
                  </a>
                ))}
                <a
                  className="flex items-center gap-1.5 min-h-[44px] px-3 mt-1 border-t border-brand-border text-xs font-bold uppercase tracking-wider text-brand-blue hover:text-brand-blueHover"
                  href={sectionHref(landing, 'services')}
                  onClick={closeAll}
                >
                  <span>All Services Overview</span>
                  <ArrowRightIcon className="w-3.5 h-3.5" />
                </a>
              </div>
            ) : null}
          </div>

          {SECTIONS.filter((section) => section.id !== 'home').map((section) => (
            <a
              aria-current={isSectionActive(section.id) ? 'true' : undefined}
              className={desktopLinkClass(section.id)}
              href={sectionHref(landing, section.id)}
              key={section.id}
            >
              {section.label}
              {isSectionActive(section.id) ? (
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-brand-blue rounded-full" />
              ) : null}
            </a>
          ))}
        </nav>

        {/* Header actions */}
        <div className="flex items-center gap-2 shrink-0">
          <a
            className="hidden sm:inline-flex items-center gap-2 min-h-[44px] px-5 py-3 rounded-full bg-brand-blue text-white text-sm font-semibold hover:bg-brand-blueHover shadow-glow-cobalt transition-colors duration-200 group"
            href={sectionHref(landing, 'enquiry')}
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

      {/* Mobile drawer */}
      <nav
        aria-label="Primary mobile"
        className={`md:hidden border-t border-brand-border/80 bg-white transition-all duration-300 ${
          menuOpen
            ? 'visible max-h-[calc(100dvh_-_5rem)] overflow-y-auto opacity-100'
            : 'invisible max-h-0 overflow-hidden opacity-0'
        }`}
        id="mobile-nav"
      >
        <div className="px-5 sm:px-6 py-3 flex flex-col">
          <a
            aria-current={isSectionActive('home') ? 'true' : undefined}
            className={`flex items-center min-h-[48px] text-[15px] font-semibold border-b border-brand-border/60 ${
              isSectionActive('home') ? 'text-brand-blue' : 'text-brand-navy'
            }`}
            href={landing ? '#home' : '/'}
            onClick={closeAll}
          >
            Home
          </a>

          <button
            aria-controls="mobile-services"
            aria-expanded={drawerServicesOpen}
            className="flex items-center justify-between min-h-[48px] text-[15px] font-semibold text-brand-navy border-b border-brand-border/60"
            onClick={() => setDrawerServicesOpen((open) => !open)}
            type="button"
          >
            <span>Our Services</span>
            <ChevronDownIcon className={`w-4 h-4 transition-transform ${drawerServicesOpen ? 'rotate-180' : ''}`} />
          </button>
          <div
            className={`${drawerServicesOpen ? 'visible max-h-[32rem] opacity-100' : 'invisible max-h-0 opacity-0'} overflow-hidden transition-all duration-300`}
            id="mobile-services"
          >
            {SERVICE_ROUTES.map((route) => (
              <a
                aria-current={currentPath === route.href ? 'page' : undefined}
                className={`flex items-center min-h-[44px] pl-4 text-sm border-b border-brand-border/40 ${
                  currentPath === route.href ? 'text-brand-blue font-semibold' : 'text-brand-slate'
                }`}
                href={route.href}
                key={route.href}
                onClick={closeAll}
              >
                {route.label}
              </a>
            ))}
            <a
              className="flex items-center min-h-[44px] pl-4 text-xs font-bold uppercase tracking-wider text-brand-blue border-b border-brand-border/40"
              href={sectionHref(landing, 'services')}
              onClick={closeAll}
            >
              All Services Overview
            </a>
          </div>

          {SECTIONS.filter((section) => section.id !== 'home').map((section) => (
            <a
              aria-current={isSectionActive(section.id) ? 'true' : undefined}
              className={`flex items-center min-h-[48px] text-[15px] font-semibold border-b border-brand-border/60 ${
                isSectionActive(section.id) ? 'text-brand-blue' : 'text-brand-navy'
              }`}
              href={sectionHref(landing, section.id)}
              key={section.id}
              onClick={closeAll}
            >
              {section.label}
            </a>
          ))}

          <div className="mt-3 pt-3 border-t border-brand-border grid grid-cols-1 gap-2 pb-2">
            <a
              className="inline-flex items-center justify-center gap-2 min-h-[48px] rounded-full bg-brand-blue text-white text-sm font-semibold"
              href={sectionHref(landing, 'enquiry')}
              onClick={closeAll}
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
  );
}
