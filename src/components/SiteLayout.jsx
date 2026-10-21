import SiteFooter from './SiteFooter.jsx';
import SiteHeader from './SiteHeader.jsx';
import { WhatsAppIcon } from './icons.jsx';
import { WHATSAPP_HREF } from './siteConfig.js';

/**
 * The global chrome: skip link, header, main landmark, footer and the
 * persistent WhatsApp channel. Every route renders inside this.
 *
 * `landing` switches the nav between in-page anchors (#enquiry) and
 * cross-page ones (/#enquiry), and enables scroll-spy.
 */
export default function SiteLayout({ children, landing = false, currentPath = '' }) {
  return (
    <div className="bg-white text-brand-slateDark font-sans antialiased selection:bg-brand-blue selection:text-white">
      <a className="skip-link" href="#main">
        Skip to main content
      </a>

      <SiteHeader currentPath={currentPath} landing={landing} />

      <main id="main">{children}</main>

      <SiteFooter landing={landing} />

      <a
        aria-label="Chat with QVC Concierge on WhatsApp"
        className="fixed bottom-[calc(1rem_+_env(safe-area-inset-bottom,0px))] right-4 sm:bottom-6 sm:right-6 z-40 inline-flex items-center justify-center w-14 h-14 rounded-full bg-brand-whatsapp text-white shadow-lg hover:scale-105 transition-transform duration-200"
        href={WHATSAPP_HREF}
        rel="noopener noreferrer"
        target="_blank"
      >
        <WhatsAppIcon className="w-7 h-7" />
      </a>
    </div>
  );
}
