/**
 * One icon family for the whole site: 24px viewBox, 2px outline stroke.
 * Keeping them here stops text glyphs (arrows, ticks) creeping back in.
 */

export const ArrowRightIcon = ({ className = 'w-4 h-4' }) => (
  <svg aria-hidden="true" className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
  </svg>
);

export const ArrowLongRightIcon = ({ className = 'w-4 h-4' }) => (
  <svg aria-hidden="true" className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path d="M17 8l4 4m0 0l-4 4m4-4H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
  </svg>
);

export const CheckIcon = ({ className = 'w-4 h-4' }) => (
  <svg aria-hidden="true" className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
  </svg>
);

export const ChevronDownIcon = ({ className = 'w-4 h-4' }) => (
  <svg aria-hidden="true" className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
  </svg>
);

export const GlobeIcon = ({ className = 'w-4 h-4' }) => (
  <svg aria-hidden="true" className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
  </svg>
);

export const ShieldCheckIcon = ({ className = 'w-4 h-4' }) => (
  <svg aria-hidden="true" className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
  </svg>
);

export const SparkleIcon = ({ className = 'w-4 h-4' }) => (
  <svg aria-hidden="true" className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      d="M12 3l2.09 5.26L19.5 10l-5.41 1.74L12 17l-2.09-5.26L4.5 10l5.41-1.74L12 3z"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
  </svg>
);

export const PhoneIcon = ({ className = 'w-4 h-4' }) => (
  <svg aria-hidden="true" className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      d="M3 5a2 2 0 012-2h2.28a2 2 0 011.94 1.52l.64 2.56a2 2 0 01-.55 1.9L8.09 10.3a12.04 12.04 0 005.61 5.61l1.32-1.32a2 2 0 011.9-.55l2.56.64A2 2 0 0121 16.72V19a2 2 0 01-2 2h-.5C10.49 21 3 13.51 3 5.5V5z"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
  </svg>
);

export const WhatsAppIcon = ({ className = 'w-5 h-5' }) => (
  <svg aria-hidden="true" className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.32 4.97L2 22l5.25-1.38a9.9 9.9 0 004.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.5 2 12.04 2zm0 18.01h-.01a8.2 8.2 0 01-4.18-1.15l-.3-.18-3.11.82.83-3.04-.19-.31a8.19 8.19 0 01-1.26-4.36c0-4.54 3.7-8.23 8.24-8.23 2.2 0 4.26.86 5.82 2.41a8.18 8.18 0 012.41 5.83c0 4.54-3.7 8.23-8.25 8.23zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.4-.12-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06a6.7 6.7 0 01-1.97-1.21 7.4 7.4 0 01-1.37-1.7c-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.44.12-.14.17-.25.25-.41.08-.17.04-.31-.02-.44-.06-.12-.56-1.35-.77-1.84-.2-.48-.41-.42-.56-.42h-.48c-.17 0-.44.06-.67.31-.23.25-.87.85-.87 2.07 0 1.23.89 2.41 1.01 2.58.13.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.6.19 1.14.17 1.57.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.14-1.18-.06-.11-.23-.17-.48-.29z" />
  </svg>
);

export const MenuIcon = ({ className = 'w-6 h-6' }) => (
  <svg aria-hidden="true" className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" strokeWidth="2" />
  </svg>
);

export const CloseIcon = ({ className = 'w-6 h-6' }) => (
  <svg aria-hidden="true" className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" strokeWidth="2" />
  </svg>
);

/* --- Hero service icons --------------------------------------------------
   Same family as above: 24px viewBox, 2px outline stroke, round joins. */

export const PlaneIcon = ({ className = 'w-4 h-4' }) => (
  <svg aria-hidden="true" className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path d="M3.5 13.5l17-7-3 8.5 3 8.5-17-7v-3z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
  </svg>
);

export const CalendarIcon = ({ className = 'w-4 h-4' }) => (
  <svg aria-hidden="true" className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      d="M4 7a2 2 0 012-2h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V7zm0 4h16M8 3v4m8-4v4"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
  </svg>
);

export const SunIcon = ({ className = 'w-4 h-4' }) => (
  <svg aria-hidden="true" className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      d="M12 7a5 5 0 100 10 5 5 0 000-10zM12 2v2m0 16v2M4.9 4.9l1.4 1.4m11.4 11.4l1.4 1.4M2 12h2m16 0h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
  </svg>
);

export const UsersIcon = ({ className = 'w-4 h-4' }) => (
  <svg aria-hidden="true" className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      d="M9 11a3.5 3.5 0 100-7 3.5 3.5 0 000 7zm-7 9a7 7 0 0114 0M16.5 5.3a3.5 3.5 0 010 6.4M18 20a6.5 6.5 0 00-2-4.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
  </svg>
);

export const PassportIcon = ({ className = 'w-4 h-4' }) => (
  <svg aria-hidden="true" className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      d="M5 4a1 1 0 011-1h12a1 1 0 011 1v16a1 1 0 01-1 1H6a1 1 0 01-1-1V4zm7 7a3 3 0 100-6 3 3 0 000 6zm-3 5h6"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
  </svg>
);

export const MapIcon = ({ className = 'w-4 h-4' }) => (
  <svg aria-hidden="true" className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      d="M9 4L3 6.5v13L9 17l6 2.5 6-2.5v-13L15 7 9 4zm0 0v13m6-10v12.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
  </svg>
);

export const SuitcaseIcon = ({ className = 'w-4 h-4' }) => (
  <svg aria-hidden="true" className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      d="M3 9a2 2 0 012-2h14a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9zm6-2V5a1 1 0 011-1h4a1 1 0 011 1v2"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
  </svg>
);

export const AcademicCapIcon = ({ className = 'w-4 h-4' }) => (
  <svg aria-hidden="true" className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      d="M12 4L2 9l10 5 10-5-10-5zM6 11.5V16c0 1.7 2.7 3 6 3s6-1.3 6-3v-4.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
  </svg>
);

export const BellIcon = ({ className = 'w-4 h-4' }) => (
  <svg aria-hidden="true" className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      d="M3 18h18M5 18a7 7 0 0114 0M12 5v2m0-2a1.5 1.5 0 110-.01z"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
  </svg>
);

export const UserIcon = ({ className = 'w-4 h-4' }) => (
  <svg aria-hidden="true" className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      d="M12 11a4 4 0 100-8 4 4 0 000 8zm-8 10a8 8 0 0116 0"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
  </svg>
);

export const StarIcon = ({ className = 'w-4 h-4' }) => (
  <svg aria-hidden="true" className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      d="M12 3.5l2.7 5.6 6.1.9-4.4 4.3 1 6.2-5.4-2.9-5.4 2.9 1-6.2L3.2 10l6.1-.9L12 3.5z"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
  </svg>
);

export const DotsIcon = ({ className = 'w-4 h-4' }) => (
  <svg aria-hidden="true" className={className} fill="currentColor" viewBox="0 0 24 24">
    <circle cx="5" cy="12" r="1.9" />
    <circle cx="12" cy="12" r="1.9" />
    <circle cx="19" cy="12" r="1.9" />
  </svg>
);
