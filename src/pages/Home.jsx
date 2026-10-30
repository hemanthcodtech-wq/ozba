import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Users,
  Truck,
  ShieldCheck,
  Clock,
  ArrowRight,
  ArrowLeft,
  ChevronRight,
  CheckCircle2,
  Briefcase,
  Compass,
  HardHat,
  Wrench,
  Award,
  FileCheck,
  Building,
  Factory,
  Layers,
  MapPin,
  Phone,
  Mail,
  Copy,
  Check,
  MessageCircle,
  FileSpreadsheet,
  TrendingUp,
  CheckCircle
} from 'lucide-react';
import { motion } from 'motion/react';
import { manpowerCategories } from '../data/manpowerData';
import FleetEstimator from '../components/FleetEstimator';
import ComplianceCertDrawer from '../components/ComplianceCertDrawer';
import TypewriterText from '../components/TypewriterText';
import TextReveal from '../components/TextReveal';
import ScrollReveal from '../components/ScrollReveal';
import AnimatedCounter from '../components/AnimatedCounter';
import TiltCard from '../components/TiltCard';
import '../styles/Home.css';

export default function Home({ lang, onOpenQuote, showToast }) {
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [selectedPdfCategory, setSelectedPdfCategory] = useState('ALL');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isCertDrawerOpen, setIsCertDrawerOpen] = useState(false);

  const heroSlides = [
    {
      id: 1,
      image: '/images/hero-banner-enhanced.jpg',
      alt: 'High-rise Construction Site in Saudi Arabia at Sunset with Engineers'
    },
    {
      id: 2,
      image: '/images/hero-slide-2.jpg',
      alt: 'Industrial Infrastructure and Heavy Equipment Fleet at Dusk in KSA'
    },
    {
      id: 3,
      image: '/images/hero-slide-3.jpg',
      alt: 'Civil Engineering Modern Skyscrapers and Project Leadership'
    }
  ];

  // Auto-advance banner slides every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const [homeFormData, setHomeFormData] = useState({
    fullName: '',
    companyName: '',
    phone: '',
    email: '',
    serviceRequired: 'Professional Support Services',
    location: '',
    details: ''
  });

  const handleCopyPhone = () => {
    navigator.clipboard.writeText('+966590767595');
    setCopiedPhone(true);
    showToast(lang === 'en' ? 'Phone number copied: +966 59 076 7595' : 'تم نسخ رقم الهاتف: 0590767595');
    setTimeout(() => setCopiedPhone(false), 3000);
  };

  const handleHomeSubmit = (e) => {
    e.preventDefault();
    showToast(lang === 'en' ? 'Thank you! Your enquiry has been received.' : 'شكراً لك! تم استلام طلبك بنجاح.');
    setHomeFormData({
      fullName: '',
      companyName: '',
      phone: '',
      email: '',
      serviceRequired: 'Professional Support Services',
      location: '',
      details: ''
    });
  };

  const filteredPdfSections = selectedPdfCategory === 'ALL'
    ? manpowerCategories
    : manpowerCategories.filter(s => s.code === selectedPdfCategory);

  return (
    <div className="home-page-content">
      {/* 2. Hero Section — Main Banner (matching reference image EXACTLY, shifted far left, with 3 slides) */}
      <section className="hero-section" id="home">
        {/* Background construction photo slider with 3 distinct images */}
        <div className="hero-bg-slider">
          {heroSlides.map((slide, idx) => (
            <img 
              key={slide.id}
              src={slide.image} 
              alt={slide.alt} 
              className={`hero-slide-image ${idx === currentSlide ? 'active' : ''}`}
            />
          ))}
        </div>

        <div className="hero-gradient-overlay"></div>

        {/* Dedicated Mobile Image Showcase Card: clearly visible photo at top of mobile banner */}
        <div className="hero-mobile-image-showcase">
          <div className="hero-mobile-image-frame">
            <img 
              src={heroSlides[currentSlide].image} 
              alt={heroSlides[currentSlide].alt}
              className="hero-mobile-img" 
            />
            {/* <div className="hero-mobile-img-badge"> */}
              {/* <span className="hero-mobile-badge-dot"></span> */}
              {/* <span>{lang === 'en' ? 'Active Projects • KSA' : 'مشاريع نشطة • المملكة'}</span> */}
            {/* </div> */}
            <div className="hero-mobile-img-controls">
              <button onClick={prevSlide} aria-label="Previous Photo" className="hero-mob-ctrl-btn">
                <ArrowLeft size={14} />
              </button>
              <span className="hero-mob-slide-idx">0{currentSlide + 1} / 0{heroSlides.length}</span>
              <button onClick={nextSlide} aria-label="Next Photo" className="hero-mob-ctrl-btn">
                <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>

        <div className="container-hero" style={{ position: 'relative' }}>
          <div className="hero-content">
            {/* Header / Sub-title exactly as in reference image with unreveal mask */}
            <TextReveal delay={0.1} duration={0.65}>
              <div className="hero-legal-title-en">
                ORJWAN ZAKI BIN AHMED AL-RABH <br />
                GENERAL CONTRACTING EST.
              </div>
            </TextReveal>

            <TextReveal delay={0.2} duration={0.65}>
              <div className="hero-legal-title-ar">
                مؤسسة ارجوان زكي بن أحمد آل ربح للمقاولات العامة
              </div>
            </TextReveal>

            <TextReveal delay={0.3} duration={0.6}>
              <div className="hero-cr-line">
                CR NO : <strong>2053123342</strong> | رقم السجل التجاري: <strong>٢٠٥٣١٢٣٣٤٢</strong>
              </div>
            </TextReveal>

            {/* Main Catchphrase with unreveal + dynamic Typewriter */}
            <h1 className="hero-main-claim">
              <TextReveal delay={0.35} duration={0.75}>
                TRUST, RELIABILITY & <br />
              </TextReveal>
              <span className="claim-gold">
                {lang === 'en' ? (
                  <TypewriterText 
                    words={[
                      'COMMITTED TO QUALITY',
                      'CERTIFIED MANPOWER',
                      'HEAVY EQUIPMENT FLEET',
                      'SAFETY & COMPLIANCE FIRST'
                    ]}
                    typingSpeed={80}
                    deletingSpeed={45}
                    pauseTime={2400}
                    cursorColor="#E4C77E"
                  />
                ) : (
                  <TypewriterText 
                    words={[
                      'ملتزمون بأعلى معايير الجودة',
                      'توريد كوادر فنية معتمدة',
                      'أسطول آليات ومعدات ثقيلة',
                      'السلامة والامتثال أولاً'
                    ]}
                    typingSpeed={95}
                    deletingSpeed={50}
                    pauseTime={2500}
                    cursorColor="#E4C77E"
                  />
                )}
              </span>
            </h1>

            {/* Cinematic SVG drawing gold line */}
            <div className="hero-gold-line-wrapper">
              <svg className="hero-gold-svg-line" viewBox="0 0 320 6" fill="none">
                <path d="M0 3 L280 3 L320 3" stroke="url(#hero-gold-grad)" strokeWidth="3" strokeLinecap="round" />
                <defs>
                  <linearGradient id="hero-gold-grad" x1="0" y1="0" x2="320" y2="0" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#C5A052" />
                    <stop offset="0.6" stopColor="#E4C77E" />
                    <stop offset="1" stopColor="transparent" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {/* Supporting Content */}
            <p className="hero-supporting-text">
              {lang === 'en'
                ? "We supply a team of experienced and technically competent personnel's encompassing all categories."
                : 'نوفر فريقاً متخصصاً من الكوادر الفنية والهندسية ذات الخبرة والكفاءة العالية لتغطية كافة فئات وتخصصات المشاريع بالمملكة.'}
            </p>

            {/* Buttons: Amber Services with arrow & Dark Outline Contact Us */}
            <div className="hero-action-row">
              <Link to="/services" className="hero-btn-services">
                <span>{lang === 'en' ? 'Our Services' : 'خدماتنا'}</span>
                <ArrowRight size={18} />
              </Link>
              <Link to="/contact" className="hero-btn-contact">
                {lang === 'en' ? 'Contact Us' : 'اتصل بنا'}
              </Link>
            </div>
          </div>
        </div>

        {/* Reference Page/Slide indicator positioned independently at bottom right */}
        <div className="hero-slide-nav">
          <span className="slide-number">0{currentSlide + 1} / 0{heroSlides.length}</span>
          <div className="slide-controls-row">
            <button className="slide-btn" onClick={prevSlide} aria-label="Previous Slide">
              <ArrowLeft size={16} />
            </button>
            <button className="slide-btn" onClick={nextSlide} aria-label="Next Slide">
              <ArrowRight size={16} />
            </button>
          </div>
          <div className="hero-slide-dots">
            {heroSlides.map((_, dotIdx) => (
              <button
                key={dotIdx}
                className={`slide-dot ${dotIdx === currentSlide ? 'active' : ''}`}
                onClick={() => setCurrentSlide(dotIdx)}
                aria-label={`Go to slide ${dotIdx + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 3. Reference Four Trust Cards Immediately Below Hero with Stagger Reveal */}
      <section className="reference-trust-strip">
        <div className="container">
          <div className="reference-trust-grid">
            <motion.div 
              className="ref-trust-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="ref-trust-icon-box">
                <Briefcase size={22} />
              </div>
              <div>
                <div className="ref-trust-label">{lang === 'en' ? 'Professional' : 'الدعم الفني'}</div>
                <div className="ref-trust-sub">
                  <AnimatedCounter end={100} suffix="%" duration={1600} /> {lang === 'en' ? 'Vetted Support' : 'دعم مهني معتمد'}
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="ref-trust-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="ref-trust-icon-box">
                <Truck size={22} />
              </div>
              <div>
                <div className="ref-trust-label">{lang === 'en' ? 'Modern Fleet' : 'الأسطول الحديث'}</div>
                <div className="ref-trust-sub">
                  <AnimatedCounter end={85} suffix="+" duration={1800} /> {lang === 'en' ? 'Heavy Units' : 'آلية ومعدة'}
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="ref-trust-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="ref-trust-icon-box">
                <Users size={22} />
              </div>
              <div>
                <div className="ref-trust-label">{lang === 'en' ? 'Certified Crew' : 'قوى عاملة ماهرة'}</div>
                <div className="ref-trust-sub">
                  <AnimatedCounter end={500} suffix="+" duration={2000} /> {lang === 'en' ? 'Specialists' : 'كوادر مؤهلة'}
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="ref-trust-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="ref-trust-icon-box">
                <ShieldCheck size={22} />
              </div>
              <div>
                <div className="ref-trust-label">{lang === 'en' ? 'Safety Record' : 'سجل السلامة'}</div>
                <div className="ref-trust-sub">
                  <AnimatedCounter end={0} suffix=" LTI" duration={1200} /> • {lang === 'en' ? 'Zero Harm' : 'صفر إصابات'}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. Reference Exact OUR SERVICES Section */}
      <section className="ref-services-section">
        <div className="container">
          <div className="ref-services-header">
            <TextReveal delay={0.1}>
              <h2 className="ref-services-title">{lang === 'en' ? 'OUR SERVICES' : 'خدماتنا'}</h2>
            </TextReveal>
            <TextReveal delay={0.2}>
              <p className="ref-services-sub">
                {lang === 'en' ? 'Comprehensive solutions for your construction and project needs' : 'حلول شاملة ومتكاملة لاحتياجات البناء والمشاريع الهندسية'}
              </p>
            </TextReveal>
          </div>

          <div className="ref-services-grid">
            <TiltCard>
              <div className="ref-service-card">
                <div className="ref-service-img-wrap">
                  <img src="/images/service-manpower.jpg" alt="Professional Support Services" className="ref-service-img" />
                </div>
                <div className="ref-service-body">
                  <h3 className="ref-service-heading">{lang === 'en' ? 'Professional Support Services' : 'خدمات الدعم المهني'}</h3>
                  <p className="ref-service-text">{lang === 'en' ? 'Skilled manpower for all categories' : 'قوى عاملة وكوادر فنية متخصصة لكافة الفئات'}</p>
                  <Link to="/services" className="ref-service-learn">
                    <span>{lang === 'en' ? 'Learn More' : 'معرفة المزيد'}</span>
                    <ArrowRight size={15} />
                  </Link>
                </div>
              </div>
            </TiltCard>

            <TiltCard>
              <div className="ref-service-card">
                <div className="ref-service-img-wrap">
                  <img src="/images/service-equipment.jpg" alt="Equipment Rentals" className="ref-service-img" />
                </div>
                <div className="ref-service-body">
                  <h3 className="ref-service-heading">{lang === 'en' ? 'Equipment Rentals' : 'تأجير المعدات'}</h3>
                  <p className="ref-service-text">{lang === 'en' ? 'Top-quality and well-maintained equipment' : 'معدات ذات جودة عالية وصيانة دورية مستمرة'}</p>
                  <Link to="/equipment" className="ref-service-learn">
                    <span>{lang === 'en' ? 'Learn More' : 'معرفة المزيد'}</span>
                    <ArrowRight size={15} />
                  </Link>
                </div>
              </div>
            </TiltCard>

            <TiltCard>
              <div className="ref-service-card">
                <div className="ref-service-img-wrap">
                  <img src="/images/service-civil.jpg" alt="Construction & Project Support" className="ref-service-img" />
                </div>
                <div className="ref-service-body">
                  <h3 className="ref-service-heading">{lang === 'en' ? 'Construction & Project Support' : 'دعم الإنشاءات والمشاريع'}</h3>
                  <p className="ref-service-text">{lang === 'en' ? 'Reliable workforce for your projects' : 'قوى عاملة مدربة وموثوقة لنجاح مشاريعكم'}</p>
                  <Link to="/services" className="ref-service-learn">
                    <span>{lang === 'en' ? 'Learn More' : 'معرفة المزيد'}</span>
                    <ArrowRight size={15} />
                  </Link>
                </div>
              </div>
            </TiltCard>
          </div>
        </div>
      </section>

      {/* 7. Reference Exact Modern Equipment Banner */}
      <section className="ref-equipment-banner">
        <img src="/images/equipment-banner.jpg" alt="Modern Yellow Construction Equipment Fleet" className="ref-equipment-bg" />
        <div className="ref-equipment-overlay"></div>
        <div className="container">
          <div className="ref-equipment-content">
            <TextReveal delay={0.1}>
              <h2 className="ref-equipment-title">{lang === 'en' ? 'Modern Equipment' : 'معدات حديثة'}</h2>
            </TextReveal>
            <TextReveal delay={0.2}>
              <p className="ref-equipment-sub">
                {lang === 'en' ? "We're providing the best customer service" : 'نقدم أفضل خدمة دعم وتأجير للعملاء على مدار الساعة'}
              </p>
            </TextReveal>
            <Link to="/equipment" className="ref-equipment-btn">
              <span>{lang === 'en' ? 'View Equipment' : 'استعراض المعدات'}</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* 6. MANPOWER SUPPLY FOR RENTAL PURPOSES */}
      <section className="pdf-manpower-section" id="manpower-list">
        <div className="container">
          {/* Enhanced Feature Card with Workforce Image Banner */}
          <div className="manpower-hero-feature-card">
            <div className="manpower-hero-img-wrap">
              <img 
                src="/images/manpower-supply-hero.jpg" 
                alt="ORJWAN Certified Manpower Workforce" 
                className="manpower-hero-img" 
              />
              <div className="manpower-hero-overlay"></div>
            </div>

            <div className="manpower-hero-content">
              <div className="manpower-hero-text">
                <div className="manpower-compliance-badge">
                  <ShieldCheck size={16} />
                  <span>TUV & ARAMCO CERTIFIED PERSONNEL • 82 VERIFIED ROLES</span>
                </div>
                <TextReveal delay={0.1}>
                  <h2 className="manpower-main-title">
                    {lang === 'en' ? 'MANPOWER SUPPLY FOR RENTAL PURPOSES' : 'توريد القوى العاملة لأغراض الإيجار والتشغيل'}
                  </h2>
                </TextReveal>
                <TextReveal delay={0.2}>
                  <p className="manpower-sub-title">
                    {lang === 'en'
                      ? 'Official role categories with verified monthly availability, third-party certification (TUV), and Saudi Aramco compliance standards.'
                      : 'قائمة الوظائف المعتمدة مع توفر شهادات TUV واعتمادات أرامكو السعودية لتلبية عقود التشغيل الشهرية والسنوية.'}
                  </p>
                </TextReveal>
              </div>

              <div className="manpower-stats-pills">
                <div className="stat-pill">
                  <div className="stat-pill-num">82</div>
                  <div className="stat-pill-label">Roles Available</div>
                </div>
                <div className="stat-pill">
                  <div className="stat-pill-num">100%</div>
                  <div className="stat-pill-label">TUV Approved</div>
                </div>
                <div className="stat-pill">
                  <div className="stat-pill-num">100%</div>
                  <div className="stat-pill-label">Aramco Valid</div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Filter buttons */}
          <div className="category-tabs">
            <button 
              className={`tab-btn ${selectedPdfCategory === 'ALL' ? 'active' : ''}`}
              onClick={() => setSelectedPdfCategory('ALL')}
            >
              All Categories (82 Roles)
            </button>
            <button 
              className={`tab-btn ${selectedPdfCategory === 'A' ? 'active' : ''}`}
              onClick={() => setSelectedPdfCategory('A')}
            >
              A. Safety & HSE
            </button>
            <button 
              className={`tab-btn ${selectedPdfCategory === 'B' ? 'active' : ''}`}
              onClick={() => setSelectedPdfCategory('B')}
            >
              B. Mechanical
            </button>
            <button 
              className={`tab-btn ${selectedPdfCategory === 'C' ? 'active' : ''}`}
              onClick={() => setSelectedPdfCategory('C')}
            >
              C. QA/QC & Inspection
            </button>
            <button 
              className={`tab-btn ${selectedPdfCategory === 'D' ? 'active' : ''}`}
              onClick={() => setSelectedPdfCategory('D')}
            >
              D. Structural
            </button>
            <button 
              className={`tab-btn ${selectedPdfCategory === 'E' ? 'active' : ''}`}
              onClick={() => setSelectedPdfCategory('E')}
            >
              E. Operators
            </button>
            <button 
              className={`tab-btn ${selectedPdfCategory === 'F' ? 'active' : ''}`}
              onClick={() => setSelectedPdfCategory('F')}
            >
              F. Electrical
            </button>
            <button 
              className={`tab-btn ${selectedPdfCategory === 'G' ? 'active' : ''}`}
              onClick={() => setSelectedPdfCategory('G')}
            >
              G. Common Trades
            </button>
            <button 
              className={`tab-btn ${selectedPdfCategory === 'H' ? 'active' : ''}`}
              onClick={() => setSelectedPdfCategory('H')}
            >
              H. Piping & Welders
            </button>
            <button 
              className={`tab-btn ${selectedPdfCategory === 'I' ? 'active' : ''}`}
              onClick={() => setSelectedPdfCategory('I')}
            >
              I. Instrumentation
            </button>
            <button 
              className={`tab-btn ${selectedPdfCategory === 'J' ? 'active' : ''}`}
              onClick={() => setSelectedPdfCategory('J')}
            >
              J. Civil
            </button>
          </div>

          {/* Grid of categories & roles */}
          <div className="pdf-cards-luxury-grid">
            {filteredPdfSections.map((sec, idx) => (
              <div key={idx} className="pdf-card-luxury">
                {/* Header Image with Glassmorphism Overlay */}
                <div className="pdf-card-media">
                  <img 
                    src={sec.image} 
                    alt={sec.title} 
                    className="pdf-card-img" 
                    loading="lazy"
                  />
                  <div className="pdf-card-media-overlay"></div>
                  
                  {/* Top Floating Badges */}
                  <div className="pdf-card-top-bar">
                    <span className="pdf-category-code-tag">
                      <span className="code-prefix">{lang === 'en' ? 'CAT' : 'الفئة'}</span>
                      <strong className="code-letter">{sec.code}</strong>
                    </span>
                    <span className="pdf-certified-pill">
                      <CheckCircle2 size={13} className="pill-check-icon" />
                      <span>{lang === 'en' ? 'Aramco & TUV' : 'أرامكو وتوف'}</span>
                    </span>
                  </div>

                  {/* Category Title floating on media base */}
                  <div className="pdf-card-media-title">
                    <div className="pdf-card-title-en">{sec.title}</div>
                    <div className="pdf-card-title-ar">{sec.titleAr}</div>
                  </div>
                </div>

                {/* Card Body with description and action buttons */}
                <div className="pdf-card-body">
                  <p className="pdf-card-short-desc">
                    {lang === 'en' ? sec.shortDesc : sec.shortDescAr}
                  </p>

                  <div className="pdf-card-role-header">
                    <span className="role-header-title">
                      <HardHat size={15} className="role-icon" />
                      <span>{lang === 'en' ? 'Verified Trades Available' : 'المهن المعتمدة والمتوفرة'}</span>
                    </span>
                    <span className="role-count-chip">{sec.roles.length} {lang === 'en' ? 'Roles' : 'مهنة'}</span>
                  </div>

                  <div className="pdf-roles-wrap">
                    {sec.roles.slice(0, 3).map((r, rIdx) => (
                      <div key={rIdx} className="pdf-role-item">
                        <div className="role-name-wrapper">
                          <span className="role-dot"></span>
                          <span className="pdf-role-name">{r.name}</span>
                        </div>
                        <div className="tuv-aramco-tags">
                          <span className="tag-badge tag-tuv">TUV</span>
                          <span className="tag-badge tag-aramco">ARAMCO</span>
                        </div>
                      </div>
                    ))}

                    {sec.roles.length > 3 && (
                      <Link to={`/manpower/${sec.id}`} className="pdf-more-trades-link">
                        <span>
                          {lang === 'en'
                            ? `+ ${sec.roles.length - 3} more roles available in Category ${sec.code}`
                            : `+ ${sec.roles.length - 3} مهن وتخصصات إضافية متاحة`}
                        </span>
                        <ChevronRight size={14} />
                      </Link>
                    )}
                  </div>

                  {/* Dual Primary Buttons: View Details & Enquire */}
                  <div className="pdf-card-action-dual">
                    <Link 
                      to={`/manpower/${sec.id}`} 
                      className="btn-card-details"
                    >
                      <span>{lang === 'en' ? 'View Details' : 'عرض التفاصيل'}</span>
                      <ArrowRight size={15} />
                    </Link>

                    <button 
                      className="btn-card-enquire" 
                      onClick={onOpenQuote}
                    >
                      <span>{lang === 'en' ? 'Enquire' : 'طلب تسعيرة'}</span>
                    </button>
                  </div>

                  {/* Direct Contact Buttons: Call & WhatsApp */}
                  <div className="pdf-card-contact-row">
                    <a 
                      href="tel:+966567119230" 
                      className="btn-card-call"
                      title={lang === 'en' ? 'Call Directly' : 'اتصال مباشر'}
                    >
                      <Phone size={14} />
                      <span>{lang === 'en' ? 'Call' : 'اتصال'}</span>
                    </a>

                    <a 
                      href={`https://wa.me/966567119230?text=${encodeURIComponent(`Hello ORJWAN Contracting, I want to inquire about Manpower Category ${sec.code}: ${sec.title}. Please share rates and available CVs.`)}`}
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="btn-card-whatsapp"
                      title={lang === 'en' ? 'Inquire on WhatsApp' : 'واتساب مباشر'}
                    >
                      <MessageCircle size={14} />
                      <span>{lang === 'en' ? 'WhatsApp' : 'واتساب'}</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: 44 }}>
            <button className="btn-gold" onClick={onOpenQuote}>
              {lang === 'en' ? 'Request Full Manpower Rates & CVs' : 'طلب السير الذاتية والأسعار'}
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* 4. About Us — Company Introduction */}
      <section className="section-padding about-section">
        <div className="container">
          <div className="about-grid">
            <div className="about-img-wrap">
              <img 
                src="/images/service-manpower.jpg" 
                alt="ORJWAN Project Engineers & Workforce" 
                className="about-img" 
              />
              <div className="about-badge-card">
                <div className="badge-stat">
                  <AnimatedCounter end={100} suffix="%" duration={1800} />
                </div>
                <div className="badge-text">{lang === 'en' ? 'Saudi CR & Aramco Standard Compliant' : 'متوافق مع المعايير السعودية ومعايير الجودة'}</div>
              </div>
            </div>

            <div className="about-content-col">
              <span className="section-tag">{lang === 'en' ? 'WHO WE ARE' : 'من نحن'}</span>
              <TextReveal delay={0.1}>
                <h2 className="section-heading">
                  {lang === 'en' 
                    ? 'Your Trusted Partner in Construction & Project Support' 
                    : 'شريكك الموثوق في البناء والدعم المتكامل للمشاريع'}
                </h2>
              </TextReveal>
              <TextReveal delay={0.2}>
                <p className="about-lead">
                  {lang === 'en'
                    ? 'ORJWAN is a general contracting and project support company in the Kingdom of Saudi Arabia, providing manpower solutions, technical support services, equipment rentals, and subcontracting support for civil and mechanical construction projects.'
                    : 'مؤسسة أرجوان هي شركة رائدة في المقاولات العامة ودعم المشاريع بالمملكة العربية السعودية، تقدم حلول القوى العاملة، خدمات الدعم الفني، تأجير المعدات، والمقاولات الفرعية للأعمال المدنية والميكانيكية.'}
                </p>
              </TextReveal>
              <p className="about-text">
                {lang === 'en'
                  ? 'We bring together skilled professionals, practical project support, and dependable equipment to help clients meet their operational requirements with quality and speed.'
                  : 'نجمع بين المحترفين ذوي الكفاءة العالية والدعم العملي والمعدات المعتمدة لمساعدة عملائنا على إنجاز مشاريعهم بسلاسة.'}
              </p>

              <div className="about-pillars">
                <div className="pillar-item">
                  <CheckCircle2 size={18} className="pillar-check" />
                  <span>{lang === 'en' ? 'Kingdom-wide Mobilization' : 'تغطية شاملة لكافة مناطق المملكة'}</span>
                </div>
                <div className="pillar-item">
                  <CheckCircle2 size={18} className="pillar-check" />
                  <span>{lang === 'en' ? 'Strict HSE & QA/QC Compliance' : 'التزام صارم بمعايير السلامة والجودة'}</span>
                </div>
                <div className="pillar-item">
                  <CheckCircle2 size={18} className="pillar-check" />
                  <span>{lang === 'en' ? 'Verified Technical Credentials' : 'كوادر معتمدة ومفحوصة مهنياً'}</span>
                </div>
                <div className="pillar-item">
                  <CheckCircle2 size={18} className="pillar-check" />
                  <span>{lang === 'en' ? 'Competitive Rates & Fast Response' : 'أسعار تنافسية واستجابة فورية'}</span>
                </div>
              </div>

              <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginTop: 12 }}>
                <Link to="/about" className="btn-navy">
                  {lang === 'en' ? 'Discover Our Company' : 'اكتشف خدماتنا ومميزاتنا'}
                  <ChevronRight size={18} />
                </Link>
                <button 
                  className="btn-outline-gold" 
                  onClick={() => setIsCertDrawerOpen(true)}
                  style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '12px 22px', borderRadius: 8, border: '1.5px solid #C5A052', color: '#092448', fontWeight: 700, background: 'transparent', cursor: 'pointer' }}
                >
                  <Award size={18} color="#C5A052" />
                  <span>{lang === 'en' ? 'View CR & Accreditations' : 'شهادات الاعتماد والسجل التجاري'}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Fleet & Manpower Quotation Estimator (High-Impact Enterprise Feature) */}
      <FleetEstimator 
        lang={lang} 
        onOpenQuote={onOpenQuote} 
        showToast={showToast} 
      />

      {/* Compliance & Accreditations Drawer */}
      <ComplianceCertDrawer 
        lang={lang}
        isOpen={isCertDrawerOpen}
        onClose={() => setIsCertDrawerOpen(false)}
      />

      {/* 8. Why Choose ORJWAN? */}
      <section className="why-section">
        <img src="/images/why-choose-us.jpg" alt="Industrial engineering background" className="why-bg-img" />
        <div className="why-gradient"></div>

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="section-title-wrap">
            <span className="section-tag" style={{ color: '#e5a93c' }}>{lang === 'en' ? 'WHY CHOOSE ORJWAN?' : 'لماذا تختار أرجوان؟'}</span>
            <h2 style={{ color: '#ffffff', fontSize: '2.35rem', fontWeight: 800 }}>
              {lang === 'en' ? 'Built on Trust. Driven by Quality.' : 'بُنيت على الثقة. تقودها الجودة.'}
            </h2>
            <p style={{ color: '#cbd5e1', fontSize: '1.05rem' }}>
              {lang === 'en'
                ? 'We bring precision, compliance and responsiveness to every engagement.'
                : 'نقدم حلولاً تجمع بين الدقة، الالتزام بالمعايير وسرعة الاستجابة.'}
            </p>
          </div>

          <div className="why-grid">
            {[
              {
                icon: <Award size={26} />,
                titleEn: 'Professional Expertise',
                titleAr: 'خبرة مهنية متقدمة',
                descEn: 'Personnel across technical, engineering, supervisory and construction roles with verified industrial credentials.',
                descAr: 'كوادر هندسية وإشرافية وفنية ذات كفاءات معتمدة تلائم متطلبات المشاريع الكبرى.'
              },
              {
                icon: <Compass size={26} />,
                titleEn: 'Project-Focused Solutions',
                titleAr: 'حلول مخصصة للمشاريع',
                descEn: 'Resources selected according to the client’s exact scope of work, timeline constraints and site location requirements.',
                descAr: 'توفير الموارد البشرية والمعدات وفق النطاق المحدد والجدول الزمني المعتمد للعميل.'
              },
              {
                icon: <Truck size={26} />,
                titleEn: 'Reliable Equipment Support',
                titleAr: 'أسطول معدات جاهز وموثوق',
                descEn: 'Rental options for a broad range of well-maintained construction and industrial machinery ready for immediate mobilization.',
                descAr: 'معدات مفحوصة وصالحة للعمل الفوري مع خيارات التشغيل والصيانة الميدانية.'
              },
              {
                icon: <ShieldCheck size={26} />,
                titleEn: 'Quality Commitment',
                titleAr: 'التزام صارم بالجودة',
                descEn: 'Focus on professional delivery, efficient coordination and adhering to Saudi Aramco & Royal Commission safety standards.',
                descAr: 'التزام تام بأعلى معايير السلامة المهنية ومواصفات الجودة المعتمدة في المملكة.'
              },
              {
                icon: <Clock size={26} />,
                titleEn: 'Responsive Communication',
                titleAr: 'تواصل فعال ودائم',
                descEn: 'Clear coordination from initial enquiry, quotation submission, mobilization, right through to project closeout.',
                descAr: 'فريق عمل متجاوب وتنسيق مستمر من أول استفسار وحتى تسليم المشروع بنجاح.'
              },
              {
                icon: <FileCheck size={26} />,
                titleEn: 'Full Regulatory Compliance',
                titleAr: 'امتثال نظامي وقانوني كامل',
                descEn: 'Registered General Contracting Est. with active CR No. 2053123342, verified documentation and licensed operators.',
                descAr: 'مؤسسة رسمية بسجل تجاري رقم 2053123342 وتراخيص كاملة لجميع المعدات والمشغلين.'
              }
            ].map((card, idx) => (
              <motion.div 
                key={idx} 
                className="why-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
              >
                <div className="why-icon-box">{card.icon}</div>
                <h3 className="why-card-title">{lang === 'en' ? card.titleEn : card.titleAr}</h3>
                <p className="why-card-desc">{lang === 'en' ? card.descEn : card.descAr}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. Strong Call-to-Action Banner */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-flex">
            <div>
              <div className="cta-tag">{lang === 'en' ? "LET'S BUILD TOGETHER" : 'لنبنِ معاً نحو المستقبل'}</div>
              <h2 className="cta-title">{lang === 'en' ? 'Have a Project in Mind?' : 'هل لديك مشروع قيد التخطيط أو التنفيذ؟'}</h2>
              <p className="cta-desc">
                {lang === 'en'
                  ? 'Whether you need skilled manpower, technical personnel, construction equipment, or subcontracting support, connect with our team to discuss your requirements.'
                  : 'سواء كنت بحاجة إلى كوادر بشرية ماهرة، مهندسين، آليات ثقيلة أو مقاولات فرعية، تواصل معنا اليوم لتحصل على دعم فوري.'}
              </p>
            </div>

            <div className="cta-actions">
              <button className="btn-gold" onClick={onOpenQuote}>
                {lang === 'en' ? 'Request a Quote' : 'طلب تسعيرة'}
              </button>
              <button className="copy-phone-btn" onClick={handleCopyPhone}>
                {copiedPhone ? <Check size={18} color="#e5a93c" /> : <Copy size={18} />}
                <span>+966 59 076 7595</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 13. Contact Information & Enquiry Form */}
      <section className="section-padding contact-section" id="contact-home">
        <div className="container">
          <div className="section-title-wrap">
            <span className="section-tag">{lang === 'en' ? 'CONTACT US' : 'تواصل معنا'}</span>
            <h2 className="section-heading">{lang === 'en' ? "Let's Talk About Your Next Project" : 'دعنا نتحدث عن مشروعك القادم'}</h2>
            <p className="section-subtext">
              {lang === 'en'
                ? 'Get in touch with our team in Dammam for immediate assistance, proposals, or equipment availability.'
                : 'تواصل مع فريقنا في الدمام لتلبية متطلباتك والحصول على استشارة فورية.'}
            </p>
          </div>

          <div className="contact-grid">
            <div className="contact-info-card">
              <div>
                <h3 className="contact-info-title">ORJWAN GENERAL CONTRACTING</h3>
                <p className="contact-info-desc">
                  {lang === 'en'
                    ? 'Our dedicated team is ready to serve your construction, manpower and equipment leasing requirements throughout the Kingdom of Saudi Arabia.'
                    : 'فريقنا المتخصص على أتم الاستعداد لخدمتكم وتلبية متطلبات مشاريعكم الإنشائية في كافة أنحاء المملكة.'}
                </p>

                <div className="contact-item">
                  <div className="contact-icon-box"><MapPin size={20} /></div>
                  <div>
                    <div className="contact-label">{lang === 'en' ? 'Office Address' : 'عنوان المكتب الرئيسي'}</div>
                    <div className="contact-val">
                      EDJC8593, 1st Floor, 8593 Al Khazzan St,<br />
                      Dammam 32242–3513, Saudi Arabia
                    </div>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon-box"><Phone size={20} /></div>
                  <div>
                    <div className="contact-label">{lang === 'en' ? 'Direct Phone / WhatsApp' : 'الهاتف المباشر / واتساب'}</div>
                    <div className="contact-val">
                      <a href="tel:+966590767595" style={{ color: '#fff', textDecoration: 'none' }}>0590767595 / +966 59 076 7595</a>
                    </div>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon-box"><Mail size={20} /></div>
                  <div>
                    <div className="contact-label">{lang === 'en' ? 'Email Address' : 'البريد الإلكتروني'}</div>
                    <div className="contact-val">
                      <a href="mailto:info@orjuwanz.com" style={{ color: '#fff', textDecoration: 'none' }}>info@orjuwanz.com</a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="cr-banner-pill">
                <strong>Commercial Registration:</strong> CR No. 2053123342<br />
                <span style={{ fontSize: '0.8rem', opacity: 0.85 }}>مؤسسة ارجوان زكي بن أحمد آل ربح للمقاولات العامة</span>
              </div>
            </div>

            <div className="contact-form-wrap">
              <h3 className="form-title">{lang === 'en' ? 'Send Us an Enquiry' : 'إرسال طلب استفسار وتسعير'}</h3>
              <p className="form-sub">{lang === 'en' ? 'Fill out the form below and our operations manager will respond within 24 hours.' : 'يرجى تعبئة النموذج وسيقوم مسؤول العمليات بالتواصل معكم خلال 24 ساعة.'}</p>

              <form onSubmit={handleHomeSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">{lang === 'en' ? 'Full Name *' : 'الاسم الكامل *'}</label>
                    <input 
                      type="text" 
                      required 
                      className="form-input" 
                      placeholder={lang === 'en' ? 'e.g. Abdullah Al-Otaibi' : 'مثال: عبدالله العتيبي'}
                      value={homeFormData.fullName}
                      onChange={(e) => setHomeFormData({...homeFormData, fullName: e.target.value})}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">{lang === 'en' ? 'Company Name *' : 'اسم الشركة *'}</label>
                    <input 
                      type="text" 
                      required 
                      className="form-input" 
                      placeholder={lang === 'en' ? 'e.g. Al-Falak Contracting' : 'مثال: شركة الفلك للمقاولات'}
                      value={homeFormData.companyName}
                      onChange={(e) => setHomeFormData({...homeFormData, companyName: e.target.value})}
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">{lang === 'en' ? 'Phone Number *' : 'رقم الهاتف / الجوال *'}</label>
                    <input 
                      type="tel" 
                      required 
                      className="form-input" 
                      placeholder="+966 5X XXX XXXX"
                      value={homeFormData.phone}
                      onChange={(e) => setHomeFormData({...homeFormData, phone: e.target.value})}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">{lang === 'en' ? 'Email Address *' : 'البريد الإلكتروني *'}</label>
                    <input 
                      type="email" 
                      required 
                      className="form-input" 
                      placeholder="name@company.com"
                      value={homeFormData.email}
                      onChange={(e) => setHomeFormData({...homeFormData, email: e.target.value})}
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">{lang === 'en' ? 'Service Required *' : 'الخدمة المطلوبة *'}</label>
                    <select 
                      className="form-select"
                      value={homeFormData.serviceRequired}
                      onChange={(e) => setHomeFormData({...homeFormData, serviceRequired: e.target.value})}
                    >
                      <option value="Professional Support Services">{lang === 'en' ? 'Professional Support Services (Manpower)' : 'خدمات الدعم المهني (القوى العاملة)'}</option>
                      <option value="Equipment Rentals">{lang === 'en' ? 'Equipment Rentals' : 'تأجير المعدات والآليات'}</option>
                      <option value="General Contracting">{lang === 'en' ? 'General Contracting & Subcontracting' : 'المقاولات العامة والفرعية'}</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label">{lang === 'en' ? 'Project Location *' : 'موقع المشروع *'}</label>
                    <input 
                      type="text" 
                      required 
                      className="form-input" 
                      placeholder={lang === 'en' ? 'e.g. Dammam, Jubail, Neom, Riyadh' : 'مثال: الدمام، الجبيل، نيوم، الرياض'}
                      value={homeFormData.location}
                      onChange={(e) => setHomeFormData({...homeFormData, location: e.target.value})}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">{lang === 'en' ? 'Project Details & Specific Requirements' : 'تفاصيل المشروع والمتطلبات المحددة'}</label>
                  <textarea 
                    rows={4} 
                    className="form-textarea" 
                    placeholder={lang === 'en' ? 'Describe personnel roles, machinery numbers, estimated duration, or mobilization dates...' : 'حدد فئات العمالة، عدد الآليات، المدة المتوقعة وتاريخ بدء العمل...'}
                    value={homeFormData.details}
                    onChange={(e) => setHomeFormData({...homeFormData, details: e.target.value})}
                  ></textarea>
                </div>

                <button type="submit" className="btn-gold" style={{ width: '100%', justifyContent: 'center' }}>
                  {lang === 'en' ? 'Submit Enquiry' : 'إرسال طلب التسعيرة'}
                  <ArrowRight size={18} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
