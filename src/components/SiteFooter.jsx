import { ArrowRightIcon, PhoneIcon, WhatsAppIcon } from './icons.jsx';
import {
  LOGO_SRC,
  PHONE_DISPLAY,
  PHONE_HREF,
  SERVICE_ROUTES,
  WHATSAPP_HREF,
  sectionHref,
} from './siteConfig.js';

export default function SiteFooter({ landing = false }) {
  const linkClass = 'flex items-center min-h-[44px] hover:text-brand-blue transition-colors';

  return (
    <footer className="bg-white border-t border-brand-border py-12 text-brand-slate text-sm">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10 pb-10 border-b border-slate-100">
          {/* Brand */}
          <div className="md:col-span-2">
            <a className="inline-flex items-center gap-3 mb-3 group" href="/">
              <img
                alt="QVC Concierge"
                className="w-8 h-8 object-contain rounded-full"
                height="32"
                loading="lazy"
                src={LOGO_SRC}
                width="32"
              />
              <span className="font-extrabold text-brand-navy text-base tracking-wider">QVC CONCIERGE</span>
            </a>
            <p className="text-brand-slate text-sm leading-relaxed max-w-sm mb-4">
              One destination for world-class services: flight tickets, bespoke tours, visa guidance, UK &amp; global
              education advisory, and dedicated lifestyle concierge.
            </p>
            <p className="text-xs text-brand-muted">
              IATA Certified Agency &bull; British Boarding Schools Network Advisory
            </p>
          </div>

          {/* Every routed service page */}
          <nav aria-labelledby="footer-services">
            <h2 className="text-xs uppercase tracking-wider font-bold text-brand-navy mb-2" id="footer-services">
              Our Services
            </h2>
            <ul>
              {SERVICE_ROUTES.map((route) => (
                <li key={route.href}>
                  <a className={linkClass} href={route.href}>
                    {route.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact & orientation */}
          <nav aria-labelledby="footer-desk">
            <h2 className="text-xs uppercase tracking-wider font-bold text-brand-navy mb-2" id="footer-desk">
              Private Client Desk
            </h2>
            <ul>
              <li>
                <a className={linkClass} href={sectionHref(landing, 'enquiry')}>
                  <span className="inline-flex items-center gap-1.5">
                    Make an Enquiry
                    <ArrowRightIcon className="w-3.5 h-3.5 text-brand-blue" />
                  </span>
                </a>
              </li>
              <li>
                <a className={linkClass} href={sectionHref(landing, 'trust')}>
                  About QVC
                </a>
              </li>
              <li>
                <a className={linkClass} href={sectionHref(landing, 'how-it-works')}>
                  How It Works
                </a>
              </li>
              <li>
                <a className={`${linkClass} gap-2`} href={PHONE_HREF}>
                  <PhoneIcon className="w-4 h-4 text-brand-blue" />
                  <span>{PHONE_DISPLAY}</span>
                </a>
              </li>
              <li>
                <a
                  className={`${linkClass} gap-2`}
                  href={WHATSAPP_HREF}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <WhatsAppIcon className="w-4 h-4 text-brand-whatsapp" />
                  <span>WhatsApp Concierge</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-brand-muted">
          <p>&copy; 2026 QVC Concierge &amp; Lifestyle Management. All rights reserved.</p>
          <p className="flex items-center gap-4 sm:gap-6">
            <span>Licensed Global Operator</span>
            <span aria-hidden="true">&bull;</span>
            <span>Discreet Family Advisory</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
