import { useEffect, useRef, useState } from 'react';

const LOGO_URL =
  'https://lh3.googleusercontent.com/aida/AEtjO1W3tTyAFWs4FRfENIkRJTncZ8N8N-G316BYl-PxxMugfxsVRw2ljskM0G1TJLUQs9l-ewp6PIVnWxJyIKFtnFePVzKQxVxvjgNyTKnjRYji8TePKSJXUDLizul0SR9Fl23GJHndT5agW0GsHf-8lPV1PwtbU9u9Poo-4U4v2xmUM6W9PNFEPccqXz97CtrM_PQUgP2q6TmoPSpUlhf3Rs9dRU9R4hDueCjq45aAF5qahq4XrLQ_337sX8yVAYoWm5pSycvCTSec0A';

export default function LandingPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHeroPaused, setIsHeroPaused] = useState(false);
  const [openCards, setOpenCards] = useState({ school: true });
  const [formStatus, setFormStatus] = useState('idle'); // 'idle' | 'submitting' | 'submitted'

  // Hero carousel auto-slide
  useEffect(() => {
    const timer = setInterval(() => {
      if (!isHeroPaused) {
        setCurrentSlide((prev) => (prev + 1) % 3);
      }
    }, 5500);
    return () => clearInterval(timer);
  }, [isHeroPaused]);

  // 3D Tilt handler
  const handleTiltMove = (e) => {
    if (
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      return;
    }
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((centerY - y) / centerY) * 5.5;
    const rotateY = ((x - centerX) / centerX) * 5.5;
    card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(
      2
    )}deg) rotateY(${rotateY.toFixed(2)}deg) scale(1.02) translateZ(10px)`;
  };

  const handleTiltLeave = (e) => {
    e.currentTarget.style.transform = '';
  };

  // Toggle card expansion
  const toggleCard = (cardId, e) => {
    if (e) {
      if (e.target.closest('a') && !e.target.closest('.card-expand-toggle')) {
        return;
      }
    }
    setOpenCards((prev) => ({
      ...prev,
      [cardId]: !prev[cardId],
    }));
  };

  // Form submission handler
  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormStatus('submitting');
    setTimeout(() => {
      setFormStatus('submitted');
    }, 700);
  };

  const handleLogoError = (e) => {
    e.currentTarget.onerror = null;
    e.currentTarget.src = '/logo.jpeg';
  };

  return (
    <>
      {/* HEADER */}
      <header className="fixed top-0 w-full z-50 bg-surface/95 backdrop-blur-xl border-b border-outline shadow-[0_1px_8px_rgba(0,0,0,0.03)]">
        <div className="h-20 w-full px-margin md:px-space-xl lg:px-margin-desktop flex items-center justify-between">
          <div className="flex items-center gap-space-sm">
            <img
              alt="QVC-logo.jpg"
              className="h-8 w-auto object-contain"
              src={LOGO_URL}
              onError={handleLogoError}
            />
            <a className="flex flex-col" data-path="home" href="/">
              <span className="font-headline-sm text-headline-sm text-on-secondary-container leading-none font-bold tracking-tight">
                QVC
              </span>
              <span className="font-label-md text-label-md uppercase text-primary font-semibold tracking-widest">
                Concierge
              </span>
            </a>
          </div>

          <nav
            className="hidden lg:flex items-center gap-space-lg"
            data-active-classes="text-primary font-bold"
          >
            <a
              aria-current="page"
              className="transition-colors text-primary font-bold"
              data-path="home"
              href="/"
            >
              Home
            </a>

            <div className="relative group py-2">
              <a
                className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors flex items-center gap-space-xs font-medium"
                data-path="our-services"
                href="#qvc-difference-section"
              >
                <span>Our Services</span>
                <span className="material-symbols-outlined text-[16px] text-on-surface-variant transition-transform duration-200 group-hover:rotate-180">
                  expand_more
                </span>
              </a>
              <div className="absolute left-0 top-full hidden group-hover:flex flex-col w-64 bg-surface border border-outline p-space-sm shadow-[0_16px_40px_-12px_rgba(15,23,42,0.08)] z-50">
                <a
                  className="px-space-md py-space-sm font-body-sm text-body-sm text-on-surface-variant hover:bg-surface-container-low hover:text-primary transition-colors"
                  data-path="tickets"
                  href="/tickets-and-aviation"
                >
                  Tickets &amp; Aviation
                </a>
                <a
                  className="px-space-md py-space-sm font-body-sm text-body-sm text-on-surface-variant hover:bg-surface-container-low hover:text-primary transition-colors"
                  data-path="tours"
                  href="/curated-tours"
                >
                  Curated Tours
                </a>
                <a
                  className="px-space-md py-space-sm font-body-sm text-body-sm text-on-surface-variant hover:bg-surface-container-low hover:text-primary transition-colors"
                  data-path="visa-assistance"
                  href="/visa-consultancy"
                >
                  Visa Assistance
                </a>
                <a
                  className="px-space-md py-space-sm font-body-sm text-body-sm text-on-surface-variant hover:bg-surface-container-low hover:text-primary transition-colors"
                  data-path="school-placement"
                  href="/school-placement"
                >
                  School Placement
                </a>
                <a
                  className="px-space-md py-space-sm font-body-sm text-body-sm text-on-surface-variant hover:bg-surface-container-low hover:text-primary transition-colors"
                  data-path="concierge-services"
                  href="/concierge-lifestyle"
                >
                  Concierge Services
                </a>
              </div>
            </div>

            <a
              className="font-body-md text-body-md text-on-surface-variant hover:text-primary font-medium transition-colors"
              data-path="about-qvc"
              href="#qvc-difference-section"
            >
              About QVC
            </a>
            <a
              className="font-body-md text-body-md text-on-surface-variant hover:text-primary font-medium transition-colors"
              data-path="how-it-works"
              href="#how-it-works"
            >
              How It Works
            </a>
            <a
              className="font-body-md text-body-md text-on-surface-variant hover:text-primary font-medium transition-colors"
              data-path="contact"
              href="#enquiry-form"
            >
              Contact
            </a>
          </nav>

          <div className="flex items-center gap-space-md">
            <a
              className="hidden sm:inline-flex items-center justify-center bg-primary-container text-on-primary font-label-lg text-label-lg uppercase tracking-wider px-space-md py-space-xs transition-colors duration-200 hover:bg-primary shadow-sm"
              data-path="make-an-enquiry"
              href="#enquiry-form"
            >
              <span className="flex items-center gap-space-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary-fixed"></span>
                <span>Make an Enquiry</span>
              </span>
            </a>
            <div className="w-8 h-8 rounded-full bg-surface-container-low border border-outline flex items-center justify-center text-primary">
              <span className="material-symbols-outlined text-primary text-[18px]">
                person
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="w-full pt-20 bg-surface">
        <div className="flex flex-col w-full">
          {/* SECTION 1: EDITORIAL HERO CAROUSEL */}
          <section
            className="relative w-full h-[660px] lg:h-[720px] overflow-hidden bg-on-secondary-container text-on-primary selection:bg-primary-container selection:text-white"
            id="hero-carousel-section"
            onMouseEnter={() => setIsHeroPaused(true)}
            onMouseLeave={() => setIsHeroPaused(false)}
          >
            {/* Carousel Track */}
            <div className="relative w-full h-full" id="hero-slider">
              {/* Slide 1: Travel Without the Stress */}
              <div
                className={`hero-slide absolute inset-0 w-full h-full ${
                  currentSlide === 0 ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                } transition-opacity duration-1000 ease-out flex items-center`}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-10000 ease-linear scale-100"
                  data-alt="Bespoke luxury aviation and serene travel destination spread. A Gulfstream G650 private jet parked quietly on an exclusive Mediterranean tarmac at golden hour twilight with warm honey light, deep maroon reflection on the cabin windows, and elegant minimalist tarmac architecture in warm ivory and deep wine undertones."
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBizvCcg6DvJdXImWGyHyKYEoA6-7iOUrjWZdHecQFlGMAb6bpBgWd311A_Lj8VwfM4fQUcW_1-GT3z70-Nx9dd9g6AFH13txQEQr0qMCQlEWKWeBbl6_NJDoPj0Wj_Rxn9BlLer9A8W0VmgvCEcXbzwvtyTEWqJI8hBvf0ThFdYlnmp8UctUi920433I5h2Ti622n_LtMI2RJUmxvUFuPV769HCfuLjd7Q8WFb3gqI0M9x1KCO91n8')",
                  }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/70 to-slate-950/90"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-slate-950/40"></div>
                <div className="relative z-20 w-full px-margin md:px-space-xl lg:px-margin-desktop">
                  <div className="max-w-3xl mx-auto flex flex-col items-center text-center">
                    <div className="flex items-center justify-center gap-space-sm mb-space-sm">
                      <span className="w-8 h-px bg-primary-container"></span>
                      <span className="font-label-lg text-label-lg uppercase tracking-widest text-primary-fixed-dim font-semibold">
                        Your Journey Starts Here
                      </span>
                      <span className="w-8 h-px bg-primary-container"></span>
                    </div>
                    <h1 className="font-display text-display-sm lg:text-display text-surface leading-[1.15] mb-space-md font-bold text-center">
                      The world is yours to explore. We bring it all together.
                    </h1>
                    <p className="font-body-lg text-body-lg text-slate-200 max-w-xl mx-auto mb-space-lg font-normal leading-relaxed text-center">
                      From bespoke commercial tickets and private aviation to curated
                      tours and discreet consular visas, find every travel service
                      coordinated under one private roof.
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-space-md">
                      <a
                        className="inline-flex items-center justify-center bg-primary-container text-on-primary font-label-lg text-label-lg uppercase tracking-wider px-space-lg py-space-sm shadow-xl hover:bg-primary transition-all duration-300"
                        data-path="tickets"
                        href="/tickets-and-aviation"
                      >
                        <span>Explore Travel Services</span>
                      </a>
                      <a
                        className="inline-flex items-center gap-space-xs font-body-md text-body-md text-secondary-fixed hover:text-surface transition-colors py-space-xs group"
                        data-path="tours"
                        href="/curated-tours"
                      >
                        <span className="border-b border-secondary-fixed/50 pb-0.5 group-hover:border-surface">
                          Plan your next journey
                        </span>
                        <span className="material-symbols-outlined text-[16px] transition-transform group-hover:translate-x-1">
                          arrow_forward
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Slide 2: Education and New Opportunities */}
              <div
                className={`hero-slide absolute inset-0 w-full h-full ${
                  currentSlide === 1 ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                } transition-opacity duration-1000 ease-out flex items-center`}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-10000 ease-linear scale-100"
                  data-alt="Historic collegiate quadrangle architecture in Oxford or Cambridge during late autumn afternoon, golden sun filtering through ancient stone arches, an impeccably dressed African scholar carrying a leather portfolio in quiet contemplation, warm ochre leaves, high fashion editorial tone with rich burgundy and ivory grading."
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB1T9VUlHkC4GsWMXGalIUI7eSA6Fu-UdMVHrC-5IGUDLu0gMH5HkPUctCqZ7KfyiA716mpRt3SwEa5DtzsTnxkOA31VoUh3EuN8UaxDYhaVW5amBtj3y8MJ6sNlPpIoljeKGHRgND2Utog4_X1kLSwCHLW7xh7OuoxUHV3t37sm7tdxYHaUyjxWgz5O_jzFykjxpWuBC8KZ54r5BoFMV0Bat0I-p4DejNqdFdsXyLQNRQIfb1wh39_')",
                  }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/70 to-slate-950/90"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-slate-950/40"></div>
                <div className="relative z-20 w-full px-margin md:px-space-xl lg:px-margin-desktop">
                  <div className="max-w-3xl mx-auto flex flex-col items-center text-center">
                    <div className="flex items-center justify-center gap-space-sm mb-space-sm">
                      <span className="w-8 h-px bg-primary-container"></span>
                      <span className="font-label-lg text-label-lg uppercase tracking-widest text-primary-fixed-dim font-semibold">
                        Your Next Chapter
                      </span>
                      <span className="w-8 h-px bg-primary-container"></span>
                    </div>
                    <h2 className="font-display text-display-sm lg:text-display text-surface leading-[1.15] mb-space-md font-bold text-center">
                      Big dreams deserve a simpler way forward.
                    </h2>
                    <p className="font-body-lg text-body-lg text-slate-200 max-w-xl mx-auto mb-space-lg font-normal leading-relaxed text-center">
                      Explore premier British and North American school placement support
                      with vetted advisors navigating every dossier, interview, and
                      matriculation milestone.
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-space-md">
                      <a
                        className="inline-flex items-center justify-center bg-primary-container text-on-primary font-label-lg text-label-lg uppercase tracking-wider px-space-lg py-space-sm shadow-xl hover:bg-primary transition-all duration-300"
                        data-path="school-placement"
                        href="/school-placement"
                      >
                        <span>Explore School Placement</span>
                      </a>
                      <a
                        className="inline-flex items-center gap-space-xs font-body-md text-body-md text-secondary-fixed hover:text-surface transition-colors py-space-xs group"
                        data-path="contact"
                        href="#enquiry-form"
                      >
                        <span className="border-b border-secondary-fixed/50 pb-0.5 group-hover:border-surface">
                          Start your application journey
                        </span>
                        <span className="material-symbols-outlined text-[16px] transition-transform group-hover:translate-x-1">
                          arrow_forward
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Slide 3: Life, Handled Better */}
              <div
                className={`hero-slide absolute inset-0 w-full h-full ${
                  currentSlide === 2 ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                } transition-opacity duration-1000 ease-out flex items-center`}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-10000 ease-linear scale-100"
                  data-alt="High-end private concierge dining setting on a luxury penthouse balcony overlooking Lake Como at dusk. Crystal glassware, bespoke linen, subtle candlelight illuminating fine silverware and tailored personal concierge liaison placing handwritten place cards, subdued wine red velvet accents and soft warm ambient glow."
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCvBGt4sJsODUQbMgHKY5dIwP2mR8wBTSjg_Za28jLjAehf0_-BZHsm8ou8f_ttRunxvH2JUExyMRWNLbi_14hVzcY-m8Ti8FUYuYrgcOlTt4gXMTosuWIyyya3C1MoJegD6_dIJ4uE7JFdlxYs8D2VNWI28TagwprU1sf1u6JW1EnqE4Nd4ZgYVq1ZpjpiNQCSPx0Bwt4v76XUKUzlMSNJ1sBShhIZOQW8USMzaRxFJLDTSzYZoKLB')",
                  }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/70 to-slate-950/90"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-slate-950/40"></div>
                <div className="relative z-20 w-full px-margin md:px-space-xl lg:px-margin-desktop">
                  <div className="max-w-3xl mx-auto flex flex-col items-center text-center">
                    <div className="flex items-center justify-center gap-space-sm mb-space-sm">
                      <span className="w-8 h-px bg-primary-container"></span>
                      <span className="font-label-lg text-label-lg uppercase tracking-widest text-primary-fixed-dim font-semibold">
                        More Time For What Matters
                      </span>
                      <span className="w-8 h-px bg-primary-container"></span>
                    </div>
                    <h2 className="font-display text-display-sm lg:text-display text-surface leading-[1.15] mb-space-md font-bold text-center">
                      Tell us what you need. Consider it taken care of.
                    </h2>
                    <p className="font-body-lg text-body-lg text-slate-200 max-w-xl mx-auto mb-space-lg font-normal leading-relaxed text-center">
                      From confidential personal errands and bespoke lifestyle requests to
                      VIP arrivals, QVC coordinates the nuanced friction points that elevate
                      everyday living.
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-space-md">
                      <a
                        className="inline-flex items-center justify-center bg-primary-container text-on-primary font-label-lg text-label-lg uppercase tracking-wider px-space-lg py-space-sm shadow-xl hover:bg-primary transition-all duration-300"
                        data-path="concierge-services"
                        href="/concierge-lifestyle"
                      >
                        <span>Discover Concierge</span>
                      </a>
                      <a
                        className="inline-flex items-center gap-space-xs font-body-md text-body-md text-secondary-fixed hover:text-surface transition-colors py-space-xs group"
                        data-path="make-an-enquiry"
                        href="#enquiry-form"
                      >
                        <span className="border-b border-secondary-fixed/50 pb-0.5 group-hover:border-surface">
                          Let's make it happen
                        </span>
                        <span className="material-symbols-outlined text-[16px] transition-transform group-hover:translate-x-1">
                          arrow_forward
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 2: ONE-STOP-SHOP INTRODUCTION (THE QVC DIFFERENCE) */}
          <section
            className="w-full py-space-xl px-margin md:px-space-xl lg:px-margin-desktop bg-surface perspective-container"
            id="qvc-difference-section"
          >
            {/* Header Narrative */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop items-end mb-space-xl">
              <div className="lg:col-span-7 flex flex-col">
                <span className="font-label-lg text-label-lg uppercase tracking-[0.2em] text-primary mb-space-xs font-semibold">
                  The QVC Difference
                </span>
                <h2 className="font-headline-lg text-headline-lg text-on-secondary-container leading-tight">
                  Five ways we make life easier.
                  <br className="hidden sm:inline" /> One place to start.
                </h2>
              </div>
              <div className="lg:col-span-5 flex flex-col">
                <p className="font-body-md text-body-md text-secondary font-normal leading-relaxed">
                  Travel, education, and lifestyle governance brought together with
                  singular composure. Select or click any service card to view its bespoke
                  dossier, operational scope, and curated liaisons.
                </p>
              </div>
            </div>

            {/* Dynamic Motion Bento Grid Cluster */}
            <div className="cards-cluster flex flex-col gap-gutter-desktop">
              {/* Top Row Asymmetric Pair (Service 1 & Stacked 2, 3) */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop items-stretch">
                {/* Service 1: Hero Large Featured (School Placement & Education) */}
                <div
                  className={`interactive-service-card animate-float-1 lg:col-span-7 bg-surface p-space-lg flex flex-col justify-between border border-outline hover:border-primary/60 shadow-sm relative group cursor-pointer ${
                    openCards.school ? 'is-active' : ''
                  }`}
                  data-service-id="school"
                  data-tilt=""
                  onMouseMove={handleTiltMove}
                  onMouseLeave={handleTiltLeave}
                  onClick={(e) => toggleCard('school', e)}
                >
                  <div>
                    <div className="flex items-center justify-between mb-space-md">
                      <span className="font-label-md text-label-md uppercase tracking-widest text-primary px-space-xs py-1 bg-surface-container-low border border-outline">
                        01 • Education Portfolio
                      </span>
                      <div className="flex items-center gap-space-xs">
                        <span className="font-label-md text-label-md uppercase tracking-widest text-secondary font-bold">
                          BBSN Certified
                        </span>
                        <button
                          aria-label="Toggle preview"
                          className="card-expand-toggle w-6 h-6 rounded-full flex items-center justify-center bg-surface-container-low text-primary hover:bg-primary hover:text-white transition-colors ml-1"
                          type="button"
                        >
                          <span className="material-symbols-outlined text-[16px] transition-transform duration-300">
                            {openCards.school ? 'expand_less' : 'expand_more'}
                          </span>
                        </button>
                      </div>
                    </div>
                    <h3 className="font-headline-md text-headline-md text-on-surface mb-space-sm group-hover:text-primary transition-colors font-bold">
                      School Placement
                    </h3>
                    <p className="font-body-md text-body-md text-secondary max-w-lg mb-space-md leading-relaxed">
                      Personalised advisement for distinguished UK, US, and Swiss boarding
                      academies, A-level Sixth Forms, and global collegiate admissions. We
                      manage student dossiers, entrance exams, and parent campus tours.
                    </p>
                  </div>

                  {/* Contextual Expandable Image Panel */}
                  <div
                    className={`service-expand-panel w-full overflow-hidden transition-all duration-500 ${
                      openCards.school
                        ? 'max-h-[500px] opacity-100'
                        : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="w-full h-64 md:h-80 overflow-hidden mb-space-md bg-surface-container-low border border-outline relative group/img">
                      <div
                        className="w-full h-full bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
                        data-alt="High-contrast editorial capture of an elite English country boarding school with ivy-clad stone architecture, landscaped emerald lawns, morning mist, and warm light glowing through historic leaded library windows in soft ivory and muted wine tone."
                        style={{
                          backgroundImage:
                            "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDZXgY4p2HP8Zz4rlSi9yPjtzzKg8AAqxV9b9jsKjh0RTbqLLGANboBtxI3wlgqKDMo1VZ1JJG-DioQZAW8tDXuYnwqLcLWm8-ZTQnoXRGQfMn7H1xKUlLCFnVLVZADJ07dJ8rmpD_6SH2PzUkAAqkQTj1pIXvj_10u8PCFIewqH0cra9CIIfL5PdXWwhsCA3B48eRPrG4kUxkm5bbn2n9IuSXLt28mphMtAFqEMS9AALBW2GHeMh97')",
                        }}
                      ></div>
                      <div className="absolute bottom-2 left-2 bg-on-secondary-container/80 backdrop-blur-md px-2.5 py-1 text-white font-label-md text-label-md uppercase tracking-wider flex items-center gap-1.5 border border-white/10">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                        <span>Eton • Harrow • Le Rosey Network</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between pt-space-xs">
                      <span className="font-body-sm text-body-sm text-on-surface-variant">
                        Matriculation Cohort 2025/26 Now Open
                      </span>
                      <a
                        className="inline-flex items-center gap-space-xs font-label-lg text-label-lg uppercase tracking-wider text-primary group-hover:text-primary-container transition-colors font-semibold"
                        data-path="school-placement"
                        href="/school-placement"
                      >
                        <span className="border-b border-primary pb-0.5">
                          Explore Education
                        </span>
                        <span className="material-symbols-outlined text-[16px] transition-transform group-hover:translate-x-1">
                          arrow_forward
                        </span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Service 2 & 3: Right Stack */}
                <div className="lg:col-span-5 flex flex-col gap-gutter-desktop">
                  {/* Service 2: Flight Tickets & Private Aviation */}
                  <div
                    className={`interactive-service-card animate-float-2 bg-surface-container-low p-space-md flex flex-col justify-between border border-outline hover:border-primary/60 group shadow-sm cursor-pointer ${
                      openCards.tickets ? 'is-active' : ''
                    }`}
                    data-service-id="tickets"
                    data-tilt=""
                    onMouseMove={handleTiltMove}
                    onMouseLeave={handleTiltLeave}
                    onClick={(e) => toggleCard('tickets', e)}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-space-xs">
                        <span className="font-label-md text-label-md uppercase tracking-widest text-primary font-semibold">
                          02 • Aviation &amp; Airfare
                        </span>
                        <div className="flex items-center gap-space-xs">
                          <span className="material-symbols-outlined text-primary group-hover:translate-x-0.5 transition-transform">
                            flight_takeoff
                          </span>
                          <button
                            aria-label="Toggle preview"
                            className="card-expand-toggle w-6 h-6 rounded-full flex items-center justify-center bg-surface border border-outline text-primary hover:bg-primary hover:text-white transition-colors ml-1"
                            type="button"
                          >
                            <span className="material-symbols-outlined text-[16px] transition-transform duration-300">
                              {openCards.tickets ? 'expand_less' : 'expand_more'}
                            </span>
                          </button>
                        </div>
                      </div>
                      <h4 className="font-headline-sm text-headline-sm text-on-secondary-container mb-space-xs font-semibold group-hover:text-primary transition-colors">
                        Tickets &amp; Aviation
                      </h4>
                      <p className="font-body-sm text-body-sm text-secondary mb-space-sm leading-relaxed">
                        Commercial premium cabins, priority waitlist clearance, and ad-hoc
                        private jet charters across West Africa, Europe, and the Middle East
                        with zero friction.
                      </p>
                    </div>

                    {/* Contextual Expandable Image Panel */}
                    <div
                      className={`service-expand-panel w-full overflow-hidden transition-all duration-500 ${
                        openCards.tickets
                          ? 'max-h-[500px] opacity-100'
                          : 'max-h-0 opacity-0'
                      }`}
                    >
                      <div className="w-full h-44 overflow-hidden mb-space-sm bg-surface border border-outline relative">
                        <div
                          className="w-full h-full bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
                          data-alt="Luxurious private jet cabin interior and bespoke aviation tarmac lounge scene, hand-stitched leather seating, mahogany fold-out table with champagne glass, warm golden hour runway twilight."
                          style={{
                            backgroundImage:
                              "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBizvCcg6DvJdXImWGyHyKYEoA6-7iOUrjWZdHecQFlGMAb6bpBgWd311A_Lj8VwfM4fQUcW_1-GT3z70-Nx9dd9g6AFH13txQEQr0qMCQlEWKWeBbl6_NJDoPj0Wj_Rxn9BlLer9A8W0VmgvCEcXbzwvtyTEWqJI8hBvf0ThFdYlnmp8UctUi920433I5h2Ti622n_LtMI2RJUmxvUFuPV769HCfuLjd7Q8WFb3gqI0M9x1KCO91n8')",
                          }}
                        ></div>
                        <div className="absolute bottom-2 left-2 bg-on-secondary-container/85 backdrop-blur-md px-2 py-0.5 text-white font-label-md text-label-md uppercase tracking-wider flex items-center gap-1 border border-white/10">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary-container"></span>
                          <span>Gulfstream &amp; Falcon Charters</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-space-xs border-t border-outline">
                      <span className="font-label-md text-label-md uppercase text-on-surface-variant">
                        IATA Accredited
                      </span>
                      <a
                        className="inline-flex items-center gap-space-xs font-label-lg text-label-lg uppercase text-primary hover:text-on-secondary-container transition-colors font-semibold"
                        data-path="tickets"
                        href="/tickets-and-aviation"
                      >
                        <span>Explore Tickets</span>
                        <span className="material-symbols-outlined text-[14px]">
                          arrow_forward
                        </span>
                      </a>
                    </div>
                  </div>

                  {/* Service 3: Curated Tours */}
                  <div
                    className={`interactive-service-card animate-float-3 bg-surface p-space-md flex flex-col justify-between border border-outline hover:border-primary/60 shadow-sm group cursor-pointer ${
                      openCards.tours ? 'is-active' : ''
                    }`}
                    data-service-id="tours"
                    data-tilt=""
                    onMouseMove={handleTiltMove}
                    onMouseLeave={handleTiltLeave}
                    onClick={(e) => toggleCard('tours', e)}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-space-xs">
                        <span className="font-label-md text-label-md uppercase tracking-widest text-primary font-semibold">
                          03 • Curated Expeditions
                        </span>
                        <div className="flex items-center gap-space-xs">
                          <span className="material-symbols-outlined text-primary group-hover:translate-x-0.5 transition-transform">
                            travel_explore
                          </span>
                          <button
                            aria-label="Toggle preview"
                            className="card-expand-toggle w-6 h-6 rounded-full flex items-center justify-center bg-surface-container-low border border-outline text-primary hover:bg-primary hover:text-white transition-colors ml-1"
                            type="button"
                          >
                            <span className="material-symbols-outlined text-[16px] transition-transform duration-300">
                              {openCards.tours ? 'expand_less' : 'expand_more'}
                            </span>
                          </button>
                        </div>
                      </div>
                      <h4 className="font-headline-sm text-headline-sm text-on-secondary-container mb-space-xs font-semibold group-hover:text-primary transition-colors">
                        Curated Tours
                      </h4>
                      <p className="font-body-sm text-body-sm text-secondary mb-space-sm leading-relaxed">
                        Artfully designed holiday retreats, private safari charters in the
                        Serengeti, and seasonal cultural escapes curated exclusively
                        around your group's privacy.
                      </p>
                    </div>

                    {/* Contextual Expandable Image Panel */}
                    <div
                      className={`service-expand-panel w-full overflow-hidden transition-all duration-500 ${
                        openCards.tours
                          ? 'max-h-[500px] opacity-100'
                          : 'max-h-0 opacity-0'
                      }`}
                    >
                      <div className="w-full h-44 overflow-hidden mb-space-sm bg-surface-container-low border border-outline relative">
                        <img
                          alt="Cinematic luxury yacht moored in a private Mediterranean cove with exclusive coastal villa"
                          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                          src="https://lh3.googleusercontent.com/aida/AEtjO1Xm5oJ9_mg0qInsNuFRbcB1alrPNIOg_t923_L2HZkr5kidoqQuMJ5cdgAGnYPKf1s62KIwbOn-ZUeEC2UEDeAbJN_uf6DOfTh3IIs8vMu_Ppcixqs1UdYSfu0oMixQTFpoF07NQeWSDvwtrpyxS6eCKAHAJseoOoWmJNl9bG94WFKO1dEUoEfHTzp_nQZSGINkqnB_GWJWWaogdSUvzrvXF26uTum_sE6l90ns-0Np9bej-BW2XGEe_vE"
                        />
                        <div className="absolute bottom-2 left-2 bg-on-secondary-container/85 backdrop-blur-md px-2 py-0.5 text-white font-label-md text-label-md uppercase tracking-wider flex items-center gap-1 border border-white/10">
                          <span className="w-1.5 h-1.5 rounded-full bg-secondary-fixed"></span>
                          <span>Bespoke Yacht &amp; Villa Charters</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-space-xs border-t border-outline">
                      <span className="font-label-md text-label-md uppercase text-on-surface-variant">
                        Private Access Only
                      </span>
                      <a
                        className="inline-flex items-center gap-space-xs font-label-lg text-label-lg uppercase text-primary hover:text-on-secondary-container transition-colors font-semibold"
                        data-path="tours"
                        href="/curated-tours"
                      >
                        <span>Explore Tours</span>
                        <span className="material-symbols-outlined text-[14px]">
                          arrow_forward
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Asymmetric Pair (Service 4 & Service 5) */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop items-stretch">
                {/* Service 4: Visa Assistance */}
                <div
                  className={`interactive-service-card animate-float-4 lg:col-span-5 bg-surface p-space-lg flex flex-col justify-between border border-outline hover:border-primary/60 shadow-sm group cursor-pointer ${
                    openCards.visa ? 'is-active' : ''
                  }`}
                  data-service-id="visa"
                  data-tilt=""
                  onMouseMove={handleTiltMove}
                  onMouseLeave={handleTiltLeave}
                  onClick={(e) => toggleCard('visa', e)}
                >
                  <div>
                    <div className="flex items-center justify-between mb-space-sm">
                      <span className="font-label-md text-label-md uppercase tracking-widest text-primary font-semibold">
                        04 • Consular Affairs
                      </span>
                      <div className="flex items-center gap-space-xs">
                        <span className="material-symbols-outlined text-primary group-hover:text-primary-container transition-colors">
                          verified_user
                        </span>
                        <button
                          aria-label="Toggle preview"
                          className="card-expand-toggle w-6 h-6 rounded-full flex items-center justify-center bg-surface-container-low border border-outline text-primary hover:bg-primary hover:text-white transition-colors ml-1"
                          type="button"
                        >
                          <span className="material-symbols-outlined text-[16px] transition-transform duration-300">
                            {openCards.visa ? 'expand_less' : 'expand_more'}
                          </span>
                        </button>
                      </div>
                    </div>
                    <h4 className="font-headline-md text-headline-md text-on-secondary-container mb-space-xs font-semibold group-hover:text-primary transition-colors">
                      Visa Assistance
                    </h4>
                    <p className="font-body-md text-body-md text-secondary leading-relaxed mb-space-md">
                      Meticulous file preparation, expedited biometrics appointment
                      booking, and strategic consular advice for UK, Schengen, US, and
                      Canadian visitor and student permits.
                    </p>
                  </div>

                  {/* Contextual Expandable Image Panel */}
                  <div
                    className={`service-expand-panel w-full overflow-hidden transition-all duration-500 ${
                      openCards.visa
                        ? 'max-h-[500px] opacity-100'
                        : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="w-full h-52 overflow-hidden mb-space-md bg-surface-container-low border border-outline relative">
                      <div
                        className="w-full h-full bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
                        data-alt="Refined diplomatic leather passport case, consular documentation dossier, and first-class VIP terminal boarding lounge with warm ivory and rich navy accents."
                        style={{
                          backgroundImage:
                            "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB4xaHO76YHSjoXqaHzNhJRB1mKE1YlqBGumWMtQBGcJuAxZgFhFp8wjjkmwTVFSXFJ8JWu4yWBXMOl46ZVxtxwH7eViDcjfIde2uVvWqte54YNLgaWDcxELBxR3CcU1KgBAMmVmHKrsWK9epsCu61aG8k7vY1XpnB3NlhlPIbayqM6KfGlw3U-MB5n_6IhbS61voHsHnO6qUEGgCKQrl0WeBXe8GnuBsc7BPaTsm8iBdvZy-WgAYvY')",
                        }}
                      ></div>
                      <div className="absolute bottom-2 left-2 bg-on-secondary-container/85 backdrop-blur-md px-2.5 py-1 text-white font-label-md text-label-md uppercase tracking-wider flex items-center gap-1.5 border border-white/10">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                        <span>Expedited Biometrics &amp; Schengen Protocol</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-space-md border-t border-outline flex items-center justify-between">
                    <span className="font-label-md text-label-md uppercase text-on-surface-variant">
                      98.4% First-Pass Acceptance
                    </span>
                    <a
                      className="inline-flex items-center gap-space-xs font-label-lg text-label-lg uppercase text-primary hover:text-on-secondary-container transition-colors font-semibold"
                      data-path="visa-assistance"
                      href="/visa-consultancy"
                    >
                      <span>Explore Visa Services</span>
                      <span className="material-symbols-outlined text-[14px]">
                        arrow_forward
                      </span>
                    </a>
                  </div>
                </div>

                {/* Service 5: Concierge Services */}
                <div
                  className={`interactive-service-card animate-float-5 lg:col-span-7 bg-on-secondary-container text-on-primary p-space-lg flex flex-col justify-between relative overflow-hidden group border border-slate-900 hover:border-primary-fixed shadow-sm cursor-pointer ${
                    openCards.concierge ? 'is-active' : ''
                  }`}
                  data-service-id="concierge"
                  data-tilt=""
                  onMouseMove={handleTiltMove}
                  onMouseLeave={handleTiltLeave}
                  onClick={(e) => toggleCard('concierge', e)}
                >
                  <div className="absolute -right-12 -bottom-12 w-64 h-64 bg-primary-container/30 rounded-full blur-3xl pointer-events-none transition-transform duration-500 group-hover:scale-125"></div>
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-space-sm">
                      <span className="font-label-lg text-label-lg uppercase tracking-widest text-primary-fixed-dim font-semibold">
                        05 • Lifestyle Liaison
                      </span>
                      <div className="flex items-center gap-space-xs">
                        <span className="px-space-xs py-0.5 bg-primary-container text-on-primary font-label-md text-label-md uppercase tracking-wider font-semibold">
                          White Glove
                        </span>
                        <button
                          aria-label="Toggle preview"
                          className="card-expand-toggle w-6 h-6 rounded-full flex items-center justify-center bg-slate-800 border border-slate-700 text-primary-fixed-dim hover:bg-primary-container hover:text-white transition-colors ml-1"
                          type="button"
                        >
                          <span className="material-symbols-outlined text-[16px] transition-transform duration-300">
                            {openCards.concierge ? 'expand_less' : 'expand_more'}
                          </span>
                        </button>
                      </div>
                    </div>
                    <h4 className="font-headline-md text-headline-md text-surface mb-space-xs font-bold group-hover:text-primary-fixed-dim transition-colors">
                      Concierge Services
                    </h4>
                    <p className="font-body-md text-body-md text-slate-300 max-w-lg leading-relaxed mb-space-md">
                      Personalised, discretion-first coordination for high-value requests:
                      private villa buyouts, chauffeur dispatch in global capitals, VIP
                      airport tarmac protocol, and hard-to-source reservations.
                    </p>
                  </div>

                  {/* Contextual Expandable Image Panel */}
                  <div
                    className={`service-expand-panel relative z-10 w-full overflow-hidden transition-all duration-500 ${
                      openCards.concierge
                        ? 'max-h-[500px] opacity-100'
                        : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="w-full h-56 md:h-64 overflow-hidden mb-space-md bg-slate-950/60 border border-slate-800 relative">
                      <div
                        className="w-full h-full bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
                        data-alt="High-end private penthouse balcony dining suite overlooking Lake Como with candlelight, fine silverware, personal butler hospitality liaison and luxury bespoke lifestyle ambiance."
                        style={{
                          backgroundImage:
                            "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCvBGt4sJsODUQbMgHKY5dIwP2mR8wBTSjg_Za28jLjAehf0_-BZHsm8ou8f_ttRunxvH2JUExyMRWNLbi_14hVzcY-m8Ti8FUYuYrgcOlTt4gXMTosuWIyyya3C1MoJegD6_dIJ4uE7JFdlxYs8D2VNWI28TagwprU1sf1u6JW1EnqE4Nd4ZgYVq1ZpjpiNQCSPx0Bwt4v76XUKUzlMSNJ1sBShhIZOQW8USMzaRxFJLDTSzYZoKLB')",
                        }}
                      ></div>
                      <div className="absolute bottom-2 left-2 bg-slate-950/85 backdrop-blur-md px-2.5 py-1 text-white font-label-md text-label-md uppercase tracking-wider flex items-center gap-1.5 border border-white/10">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                        <span>Private Chauffeur • VIP Tarmac • Bespoke Suites</span>
                      </div>
                    </div>
                  </div>

                  <div className="relative z-10 pt-space-md border-t border-slate-800 flex items-center justify-between">
                    <span className="font-label-md text-label-md uppercase text-slate-400">
                      24/7 Dedicated Account Desk
                    </span>
                    <a
                      className="inline-flex items-center gap-space-xs font-label-lg text-label-lg uppercase text-primary-fixed-dim hover:text-surface transition-colors font-semibold"
                      data-path="concierge-services"
                      href="/concierge-lifestyle"
                    >
                      <span>Explore Concierge</span>
                      <span className="material-symbols-outlined text-[14px]">
                        arrow_forward
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 3: HOW IT WORKS (3-STEP PROCESS) */}
          <section
            className="w-full py-space-xl px-margin md:px-space-xl lg:px-margin-desktop bg-surface-container-low border-y border-outline"
            id="how-it-works"
          >
            <div className="max-w-4xl mx-auto text-center mb-space-xl flex flex-col items-center">
              <span className="font-label-lg text-label-lg uppercase tracking-[0.2em] text-primary mb-space-xs font-semibold">
                Structured Clarity
              </span>
              <h2 className="font-headline-lg text-headline-lg text-on-secondary-container mb-space-sm font-bold">
                You choose. We coordinate. You move forward.
              </h2>
              <p className="font-body-lg text-body-lg text-secondary max-w-2xl font-normal">
                No automated bots or unassisted checkouts. We replace impersonal web
                forms with a dedicated human liaison who absorbs your preferences and
                manages every variable.
              </p>
            </div>

            {/* 3 Step Horizontal Editorial Spread */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter-desktop relative">
              {/* Step 1 */}
              <div className="bg-surface p-space-lg flex flex-col relative border border-outline shadow-sm">
                <div className="flex items-center justify-between mb-space-md">
                  <span className="font-display text-headline-lg text-primary font-bold leading-none">
                    01
                  </span>
                  <span className="material-symbols-outlined text-primary text-[22px]">
                    category
                  </span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface mb-space-xs font-semibold">
                  Choose Your Service
                </h3>
                <p className="font-body-md text-body-md text-secondary leading-relaxed mb-space-md flex-grow">
                  Explore our private portfolio and determine the primary area where you
                  need guidance—from urgent flights to term-long education strategies.
                </p>
                <div className="w-full h-1 bg-surface-container-low">
                  <div className="w-1/3 h-full bg-primary-container"></div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="bg-surface p-space-lg flex flex-col relative border border-outline shadow-sm">
                <div className="flex items-center justify-between mb-space-md">
                  <span className="font-display text-headline-lg text-primary font-bold leading-none">
                    02
                  </span>
                  <span className="material-symbols-outlined text-primary text-[22px]">
                    edit_note
                  </span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface mb-space-xs font-semibold">
                  Tell Us What You Need
                </h3>
                <p className="font-body-md text-body-md text-secondary leading-relaxed mb-space-md flex-grow">
                  Provide your core dates, destinations, or specific requirements through
                  our encrypted briefing desk or a quick voice note via WhatsApp.
                </p>
                <div className="w-full h-1 bg-surface-container-low">
                  <div className="w-2/3 h-full bg-primary-container"></div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="bg-surface p-space-lg flex flex-col relative border border-outline shadow-sm">
                <div className="flex items-center justify-between mb-space-md">
                  <span className="font-display text-headline-lg text-primary font-bold leading-none">
                    03
                  </span>
                  <span className="material-symbols-outlined text-primary text-[22px]">
                    verified
                  </span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface mb-space-xs font-semibold">
                  We Take It From Here
                </h3>
                <p className="font-body-md text-body-md text-secondary leading-relaxed mb-space-md flex-grow">
                  Your designated concierge verifies feasibility, negotiates rates with
                  partners, presents tailored itineraries, and completes every booking.
                </p>
                <div className="w-full h-1 bg-surface-container-low">
                  <div className="w-full h-full bg-primary-container"></div>
                </div>
              </div>
            </div>

            {/* CTA centered */}
            <div className="mt-space-xl flex justify-center">
              <a
                className="inline-flex items-center justify-center bg-primary-container text-on-primary font-label-lg text-label-lg uppercase tracking-widest px-space-xl py-space-sm shadow-md hover:bg-primary transition-colors font-semibold"
                href="#enquiry-form"
              >
                <span>Start an Enquiry</span>
              </a>
            </div>
          </section>

          {/* SECTION 4: A PERSONAL APPROACH */}
          <section className="w-full py-space-xl px-margin md:px-space-xl lg:px-margin-desktop bg-surface overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop items-center">
              {/* Artful Asymmetric Image Collage */}
              <div className="lg:col-span-6 relative">
                <div className="w-full h-[480px] bg-surface-container-low relative overflow-hidden border border-outline">
                  <div
                    className="w-full h-full bg-cover bg-center"
                    data-alt="An elegant, confident African lifestyle concierge advisor in a sharply tailored charcoal blazer reviewing travel itineraries in an art-filled London or Lagos private club lounge with warm mahogany paneling, soft ivory lighting, and delicate gold accents."
                    style={{
                      backgroundImage:
                        "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB4xaHO76YHSjoXqaHzNhJRB1mKE1YlqBGumWMtQBGcJuAxZgFhFp8wjjkmwTVFSXFJ8JWu4yWBXMOl46ZVxtxwH7eViDcjfIde2uVvWqte54YNLgaWDcxELBxR3CcU1KgBAMmVmHKrsWK9epsCu61aG8k7vY1XpnB3NlhlPIbayqM6KfGlw3U-MB5n_6IhbS61voHsHnO6qUEGgCKQrl0WeBXe8GnuBsc7BPaTsm8iBdvZy-WgAYvY')",
                    }}
                  ></div>
                </div>
                {/* Overlapping floating reassurance dossier badge */}
                <div className="absolute -bottom-6 -right-4 md:right-8 bg-surface p-space-md shadow-[0_16px_40px_-12px_rgba(15,23,42,0.1)] max-w-xs border-l-4 border-primary border-y border-r border-outline">
                  <div className="flex items-center gap-space-xs mb-1">
                    <span className="material-symbols-outlined text-primary text-[20px]">
                      lock
                    </span>
                    <span className="font-label-md text-label-md uppercase tracking-wider text-on-secondary-container font-semibold">
                      Confidentiality Guarantee
                    </span>
                  </div>
                  <p className="font-body-sm text-body-sm text-secondary leading-snug">
                    All client briefs, academic records, and travel registries are handled
                    under strict private banking discretion protocols.
                  </p>
                </div>
              </div>

              {/* Narrative Copy & Direct WhatsApp Link */}
              <div className="lg:col-span-6 flex flex-col items-start lg:pl-space-md mt-space-lg lg:mt-0">
                <span className="font-label-lg text-label-lg uppercase tracking-[0.2em] text-primary mb-space-xs font-semibold">
                  Bespoke Human Touch
                </span>
                <h2 className="font-headline-lg text-headline-lg text-on-secondary-container mb-space-md leading-tight font-bold">
                  Not just a service.
                  <br />
                  Someone to help you get it done.
                </h2>
                <p className="font-body-lg text-body-lg text-secondary mb-space-sm leading-relaxed">
                  Every request is different. Whether you are navigating complicated
                  British visa timing, securing last-minute seat upgrades on Emirates, or
                  managing a child's transition to boarding school, QVC provides one
                  seasoned point of contact.
                </p>
                <p className="font-body-md text-body-md text-secondary mb-space-lg leading-relaxed">
                  We take the administrative friction off your hands so you spend your
                  valuable time where it counts—with family, board meetings, and the joy of
                  arriving unburdened.
                </p>

                {/* Direct Liaison CTA Cluster */}
                <div className="flex flex-wrap items-center gap-space-md">
                  <a
                    className="inline-flex items-center gap-space-sm bg-on-secondary-container text-on-primary px-space-md py-space-sm hover:bg-slate-800 transition-colors shadow-sm"
                    href="https://wa.me/23418887800"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <span className="material-symbols-outlined text-[20px] text-primary-fixed-dim">
                      chat
                    </span>
                    <span className="font-label-lg text-label-lg uppercase tracking-wider font-semibold">
                      Talk to QVC on WhatsApp
                    </span>
                  </a>
                  <a
                    className="inline-flex items-center gap-space-xs font-label-lg text-label-lg uppercase tracking-wider text-primary hover:text-on-secondary-container transition-colors py-space-xs font-semibold"
                    data-path="about-qvc"
                    href="#qvc-difference-section"
                  >
                    <span className="border-b border-primary pb-0.5">Learn Our Pedigree</span>
                    <span className="material-symbols-outlined text-[16px]">
                      arrow_forward
                    </span>
                  </a>
                </div>

                {/* Trust Metric Strip */}
                <div className="grid grid-cols-3 gap-space-md pt-space-lg mt-space-lg border-t border-outline w-full">
                  <div>
                    <span className="font-headline-md text-headline-md text-primary block font-bold">
                      10+
                    </span>
                    <span className="font-label-md text-label-md uppercase text-on-surface-variant font-medium">
                      Years Global Advisement
                    </span>
                  </div>
                  <div>
                    <span className="font-headline-md text-headline-md text-primary block font-bold">
                      99%
                    </span>
                    <span className="font-label-md text-label-md uppercase text-on-surface-variant font-medium">
                      Client Retention Rate
                    </span>
                  </div>
                  <div>
                    <span className="font-headline-md text-headline-md text-primary block font-bold">
                      &lt; 2h
                    </span>
                    <span className="font-label-md text-label-md uppercase text-on-surface-variant font-medium">
                      Average Desk Response
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 5: CONTACT AND ENQUIRY DESK */}
          <section
            className="w-full py-space-xl px-margin md:px-space-xl lg:px-margin-desktop bg-surface-container-low border-t border-outline"
            id="enquiry-form"
          >
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop items-start">
                {/* Sidebar Dossier & Protocol */}
                <div className="lg:col-span-5 flex flex-col">
                  <span className="font-label-lg text-label-lg uppercase tracking-[0.2em] text-primary mb-space-xs font-semibold">
                    Private Client Desk
                  </span>
                  <h2 className="font-headline-lg text-headline-lg text-on-secondary-container mb-space-sm font-bold">
                    What can we help you with?
                  </h2>
                  <p className="font-body-md text-body-md text-secondary mb-space-lg leading-relaxed">
                    Tell us what you are looking for. We will analyze your brief, identify
                    the optimal service corridor, and assign a dedicated advisor to guide
                    you through next steps.
                  </p>
                  <div className="bg-surface p-space-md mb-space-md border border-outline shadow-sm">
                    <h4 className="font-headline-sm text-headline-sm text-on-surface mb-space-xs font-semibold">
                      Prefer Immediate Conversation?
                    </h4>
                    <p className="font-body-sm text-body-sm text-secondary mb-space-sm">
                      Our Senior Desk Coordinator is active for urgent departure
                      adjustments and prompt consultations.
                    </p>
                    <a
                      className="inline-flex items-center gap-space-xs font-label-lg text-label-lg uppercase tracking-wider text-primary hover:text-on-secondary-container transition-colors font-semibold"
                      href="https://wa.me/23418887800"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <span className="material-symbols-outlined text-[18px]">chat</span>
                      <span className="border-b border-primary pb-0.5">
                        Or speak with an advisor on WhatsApp
                      </span>
                    </a>
                  </div>
                  <div className="flex flex-col gap-space-xs font-body-sm text-body-sm text-secondary">
                    <div className="flex items-center gap-space-xs">
                      <span className="material-symbols-outlined text-primary text-[16px]">
                        schedule
                      </span>
                      <span>
                        Advisory Hours: Monday – Saturday, 8:00am – 7:00pm WAT
                      </span>
                    </div>
                    <div className="flex items-center gap-space-xs">
                      <span className="material-symbols-outlined text-primary text-[16px]">
                        mail
                      </span>
                      <span>
                        Enquiries monitored continuously for registered families
                      </span>
                    </div>
                  </div>
                </div>

                {/* Multi-Field Interactive Dossier Form */}
                <div className="lg:col-span-7 bg-surface p-space-lg border border-outline shadow-[0_16px_40px_-12px_rgba(15,23,42,0.06)]">
                  <form
                    className="flex flex-col gap-space-md"
                    id="qvc-concierge-enquiry-form"
                    onSubmit={handleFormSubmit}
                  >
                    {/* Full Name */}
                    <div className="flex flex-col gap-1">
                      <label
                        className="font-label-md text-label-md uppercase tracking-wider text-secondary font-semibold"
                        htmlFor="client-name"
                      >
                        Full Name *
                      </label>
                      <input
                        className="w-full bg-surface-container-low border border-outline px-space-md py-space-sm font-body-md text-body-md text-on-surface placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all"
                        id="client-name"
                        placeholder="e.g. Dr. Adebayo Sterling"
                        required
                        type="text"
                      />
                    </div>

                    {/* Email & Phone Dual Column */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
                      <div className="flex flex-col gap-1">
                        <label
                          className="font-label-md text-label-md uppercase tracking-wider text-secondary font-semibold"
                          htmlFor="client-email"
                        >
                          Email Address *
                        </label>
                        <input
                          className="w-full bg-surface-container-low border border-outline px-space-md py-space-sm font-body-md text-body-md text-on-surface placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all"
                          id="client-email"
                          placeholder="name@domain.com"
                          required
                          type="email"
                        />
                      </div>
                      <div className="flex flex-col gap-1">
                        <label
                          className="font-label-md text-label-md uppercase tracking-wider text-secondary font-semibold"
                          htmlFor="client-phone"
                        >
                          Phone / WhatsApp *
                        </label>
                        <input
                          className="w-full bg-surface-container-low border border-outline px-space-md py-space-sm font-body-md text-body-md text-on-surface placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all"
                          id="client-phone"
                          placeholder="+234 800 000 0000"
                          required
                          type="tel"
                        />
                      </div>
                    </div>

                    {/* Service Selection */}
                    <div className="flex flex-col gap-1">
                      <label
                        className="font-label-md text-label-md uppercase tracking-wider text-secondary font-semibold"
                        htmlFor="client-service"
                      >
                        Service of Interest *
                      </label>
                      <select
                        className="w-full bg-surface-container-low border border-outline px-space-md py-space-sm font-body-md text-body-md text-on-surface focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all"
                        id="client-service"
                        required
                        defaultValue=""
                      >
                        <option disabled value="">
                          Select a service corridor...
                        </option>
                        <option value="tickets">
                          Flight Tickets &amp; Private Aviation
                        </option>
                        <option value="tours">Curated Tours &amp; Expeditions</option>
                        <option value="visa">
                          Visa Assistance &amp; Consular Protocol
                        </option>
                        <option value="school">
                          School Placement (UK / US / Europe)
                        </option>
                        <option value="concierge">
                          Personal Concierge &amp; Lifestyle Management
                        </option>
                        <option value="unsure">
                          Not sure yet / Multi-service Request
                        </option>
                      </select>
                    </div>

                    {/* Preferred Channel */}
                    <div className="flex flex-col gap-1">
                      <label className="font-label-md text-label-md uppercase tracking-wider text-secondary mb-1 font-semibold">
                        Preferred Contact Method
                      </label>
                      <div className="grid grid-cols-3 gap-space-sm">
                        <label className="flex items-center gap-space-xs p-space-xs bg-surface-container-low border border-outline cursor-pointer hover:border-primary transition-colors">
                          <input
                            defaultChecked
                            className="accent-primary"
                            name="contact-method"
                            type="radio"
                            value="WhatsApp"
                          />
                          <span className="font-body-sm text-body-sm text-on-surface">
                            WhatsApp
                          </span>
                        </label>
                        <label className="flex items-center gap-space-xs p-space-xs bg-surface-container-low border border-outline cursor-pointer hover:border-primary transition-colors">
                          <input
                            className="accent-primary"
                            name="contact-method"
                            type="radio"
                            value="Email"
                          />
                          <span className="font-body-sm text-body-sm text-on-surface">
                            Email
                          </span>
                        </label>
                        <label className="flex items-center gap-space-xs p-space-xs bg-surface-container-low border border-outline cursor-pointer hover:border-primary transition-colors">
                          <input
                            className="accent-primary"
                            name="contact-method"
                            type="radio"
                            value="Phone"
                          />
                          <span className="font-body-sm text-body-sm text-on-surface">
                            Phone Call
                          </span>
                        </label>
                      </div>
                    </div>

                    {/* Brief Description */}
                    <div className="flex flex-col gap-1">
                      <label
                        className="font-label-md text-label-md uppercase tracking-wider text-secondary font-semibold"
                        htmlFor="client-notes"
                      >
                        Brief Description of the Request
                      </label>
                      <textarea
                        className="w-full bg-surface-container-low border border-outline px-space-md py-space-sm font-body-md text-body-md text-on-surface placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all"
                        id="client-notes"
                        placeholder="Please outline travel dates, student age, destination preferences, or specific timings..."
                        rows={3}
                      ></textarea>
                    </div>

                    {/* Submit Button & Feedback Area */}
                    <div className="pt-space-xs flex flex-col gap-space-sm">
                      {formStatus !== 'submitted' && (
                        <button
                          className="w-full inline-flex items-center justify-center gap-space-sm bg-primary-container text-on-primary font-label-lg text-label-lg uppercase tracking-widest py-space-md hover:bg-primary transition-colors shadow-md group font-semibold"
                          id="submit-btn"
                          type="submit"
                          disabled={formStatus === 'submitting'}
                        >
                          {formStatus === 'submitting' ? (
                            <span>Processing Encrypted Brief...</span>
                          ) : (
                            <>
                              <span>Send My Enquiry</span>
                              <span className="material-symbols-outlined text-[18px] text-white group-hover:translate-x-1 transition-transform">
                                arrow_forward
                              </span>
                            </>
                          )}
                        </button>
                      )}

                      {/* Inline Feedback Banner */}
                      {formStatus === 'submitted' && (
                        <div
                          className="p-space-md bg-secondary-container border-l-4 border-primary text-on-surface"
                          id="enquiry-feedback"
                        >
                          <div className="flex items-center gap-space-xs mb-1">
                            <span className="material-symbols-outlined text-primary text-[20px]">
                              check_circle
                            </span>
                            <span className="font-headline-sm text-headline-sm text-on-secondary-container font-semibold">
                              Enquiry Transmitted
                            </span>
                          </div>
                          <p className="font-body-sm text-body-sm text-secondary">
                            Thank you. Your request dossier has been assigned to a Senior
                            Concierge Liaison. We will reach out via your preferred method
                            shortly.
                          </p>
                        </div>
                      )}
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="w-full bg-surface-container-low border-t border-outline">
        <div className="w-full px-margin md:px-space-xl lg:px-margin-desktop py-space-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-gutter-desktop">
            <div className="lg:col-span-4 flex flex-col items-start">
              <div className="flex items-center gap-space-sm mb-space-sm">
                <img
                  alt="QVC-logo.jpg"
                  className="h-7 w-auto object-contain"
                  src={LOGO_URL}
                  onError={handleLogoError}
                />
                <span className="font-headline-sm text-headline-sm text-on-secondary-container leading-none font-bold">
                  QVC Concierge
                </span>
              </div>
              <p className="font-body-md text-body-md text-secondary max-w-sm mb-space-md">
                Travel, education and personalised concierge services, all in one place.
              </p>
              <div className="flex flex-col gap-space-xs">
                <span className="font-label-md text-label-md uppercase text-primary font-semibold tracking-widest">
                  Private Client Desk
                </span>
                <span className="font-body-sm text-body-sm text-on-surface">
                  concierge@qvc-group.com
                </span>
                <span className="font-body-sm text-body-sm text-on-surface">
                  +234 (0) 1 888 7800
                </span>
              </div>
            </div>

            <div className="lg:col-span-3 flex flex-col">
              <span className="font-label-lg text-label-lg uppercase text-primary font-bold tracking-widest mb-space-md">
                Services Portfolio
              </span>
              <div className="flex flex-col gap-space-sm">
                <a
                  className="font-body-sm text-body-sm text-secondary hover:text-primary transition-colors"
                  data-path="tickets"
                  href="/tickets-and-aviation"
                >
                  Tickets &amp; Private Aviation
                </a>
                <a
                  className="font-body-sm text-body-sm text-secondary hover:text-primary transition-colors"
                  data-path="tours"
                  href="/curated-tours"
                >
                  Curated Expeditions &amp; Tours
                </a>
                <a
                  className="font-body-sm text-body-sm text-secondary hover:text-primary transition-colors"
                  data-path="visa-assistance"
                  href="/visa-consultancy"
                >
                  Visa &amp; Consular Protocol
                </a>
                <a
                  className="font-body-sm text-body-sm text-secondary hover:text-primary transition-colors"
                  data-path="school-placement"
                  href="/school-placement"
                >
                  Global School Placement
                </a>
                <a
                  className="font-body-sm text-body-sm text-secondary hover:text-primary transition-colors"
                  data-path="concierge-services"
                  href="/concierge-lifestyle"
                >
                  Bespoke Concierge Services
                </a>
              </div>
            </div>

            <div className="lg:col-span-2 flex flex-col">
              <span className="font-label-lg text-label-lg uppercase text-primary font-bold tracking-widest mb-space-md">
                Navigation
              </span>
              <div className="flex flex-col gap-space-sm">
                <a
                  className="font-body-sm text-body-sm text-secondary hover:text-primary transition-colors"
                  data-path="home"
                  href="/"
                >
                  Home
                </a>
                <a
                  className="font-body-sm text-body-sm text-secondary hover:text-primary transition-colors"
                  data-path="about-qvc"
                  href="#qvc-difference-section"
                >
                  About QVC
                </a>
                <a
                  className="font-body-sm text-body-sm text-secondary hover:text-primary transition-colors"
                  data-path="how-it-works"
                  href="#how-it-works"
                >
                  How It Works
                </a>
                <a
                  className="font-body-sm text-body-sm text-secondary hover:text-primary transition-colors"
                  data-path="make-an-enquiry"
                  href="#enquiry-form"
                >
                  Make an Enquiry
                </a>
                <a
                  className="font-body-sm text-body-sm text-secondary hover:text-primary transition-colors"
                  data-path="contact"
                  href="#enquiry-form"
                >
                  Contact
                </a>
              </div>
            </div>

            <div className="lg:col-span-3 flex flex-col">
              <span className="font-label-lg text-label-lg uppercase text-primary font-bold tracking-widest mb-space-md">
                Institutional Presence
              </span>
              <div className="bg-surface p-space-md mb-space-md border border-outline shadow-sm">
                <span className="font-label-md text-label-md uppercase text-primary font-bold block mb-space-xs">
                  Accredited &amp; Partnered
                </span>
                <p className="font-body-sm text-body-sm text-secondary">
                  IATA Certified Agent • BBSN Advisory • Global Education Liaison Network
                </p>
              </div>
              <div className="flex items-center gap-space-sm">
                <span className="font-label-md text-label-md uppercase px-space-sm py-space-xs bg-surface border border-outline text-secondary font-semibold">
                  Lagos
                </span>
                <span className="font-label-md text-label-md uppercase px-space-sm py-space-xs bg-surface border border-outline text-secondary font-semibold">
                  London
                </span>
                <span className="font-label-md text-label-md uppercase px-space-sm py-space-xs bg-surface border border-outline text-secondary font-semibold">
                  Dubai
                </span>
              </div>
            </div>
          </div>

          <div className="mt-space-xl pt-space-lg flex flex-col md:flex-row items-center justify-between gap-space-md border-t border-outline">
            <span className="font-body-sm text-body-sm text-secondary">
              © 2025 QVC Concierge. All rights reserved. Discreet luxury advisement and
              travel management.
            </span>
            <div className="flex items-center gap-space-lg">
              <a
                className="font-body-sm text-body-sm text-secondary hover:text-primary transition-colors"
                data-path="privacy-policy"
                href="#"
              >
                Privacy Policy
              </a>
              <a
                className="font-body-sm text-body-sm text-secondary hover:text-primary transition-colors"
                data-path="terms-of-service"
                href="#"
              >
                Terms of Service
              </a>
              <a
                className="font-body-sm text-body-sm text-secondary hover:text-primary transition-colors"
                data-path="security"
                href="#"
              >
                Client Discretion
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
