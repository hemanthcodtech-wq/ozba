import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  MapPin, Phone, Mail, Globe, Menu, X, ChevronDown, 
  Send, Sparkles, HardHat, Wrench, Users, Building, 
  ShieldCheck, ArrowRight, ChevronRight
} from 'lucide-react';
import logo from '../assets/logo.png';
import '../styles/Header.css';

export default function Header({ lang, toggleLanguage, onOpenQuote }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  // Scroll detection for sticky header state
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 25) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none';
    } else {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    };
  }, [isMenuOpen]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsMenuOpen(false);
        setIsServicesOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const closeAllMenus = () => {
    setIsMenuOpen(false);
    setIsServicesOpen(false);
  };

  return (
    <>
      {/* 1. Header Top Bar */}
      <div className="top-bar">
        <div className="container top-bar-inner">
          <ul className="top-info-list">
            <li className="top-info-item">
              <MapPin size={13} />
              <span>Dammam, Saudi Arabia</span>
            </li>
            <li className="top-info-item">
              <Phone size={13} />
              <a href="tel:0568565143" style={{ color: 'inherit', textDecoration: 'none' }}>
                0568565143
              </a>
            </li>
            <li className="top-info-item">
              <Mail size={13} />
              <a href="mailto:info@orjwans.com" style={{ color: 'inherit', textDecoration: 'none' }}>
                info@orjwans.com
              </a>
            </li>
          </ul>

          <div className="top-actions">
            <span style={{ fontSize: '0.8rem', opacity: 0.9 }}>
              CR NO: <strong style={{ color: '#C5A052' }}>2053123342</strong>
            </span>
            <button className="lang-switch" onClick={toggleLanguage} aria-label="Toggle Language">
              <Globe size={13} />
              <span>{lang === 'en' ? 'العربية' : 'English'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Header / Navigation with animated sticky behavior */}
      <header className={`main-header ${isScrolled ? 'header-scrolled' : ''}`}>
        <div className="nav-container">
          <Link to="/" className="brand-logo" onClick={closeAllMenus}>
            <div className="logo-glow-wrapper">
              <div className="logo-light-boom"></div>
              <img 
                src={logo}
                alt="ORJWAN GENERAL CONTRACTING" 
                className="site-main-logo" 
              />
            </div>
            <div className="header-brand-title-wrap">
              <span className="header-brand-main">ORJUWAN</span>
              <span className="header-brand-sub">ZAKI BIN AHMED AL REBH GENERAL CONTRACTING EST</span>
            </div>
          </Link>

          {/* Desktop Navigation Menu */}
          <ul className="nav-menu desktop-nav-menu">
            <li>
              <Link 
                to="/" 
                className={`nav-link ${isActive('/') ? 'active' : ''}`}
              >
                {lang === 'en' ? 'Home' : 'الرئيسية'}
              </Link>
            </li>
            <li>
              <Link 
                to="/about" 
                className={`nav-link ${isActive('/about') ? 'active' : ''}`}
              >
                {lang === 'en' ? 'About Us' : 'من نحن'}
              </Link>
            </li>

            {/* Services with Desktop Dropdown */}
            <li 
              className="nav-dropdown-item"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <div className="nav-link-dropdown-trigger">
                <Link 
                  to="/services" 
                  className={`nav-link ${isActive('/services') ? 'active' : ''}`}
                >
                  {lang === 'en' ? 'Services' : 'خدماتنا'}
                </Link>
                <button 
                  className="dropdown-chevron-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsServicesOpen(!isServicesOpen);
                  }}
                  aria-label="Toggle submenu"
                >
                  <ChevronDown size={14} className={isServicesOpen ? 'chevron-rotated' : ''} />
                </button>
              </div>

              {/* Desktop Submenu */}
              <div className={`nav-submenu ${isServicesOpen ? 'submenu-open' : ''}`}>
                <Link to="/services" className="submenu-link" onClick={closeAllMenus}>
                  <Users size={16} className="submenu-icon" />
                  <div>
                    <strong>{lang === 'en' ? 'Professional Support Services' : 'خدمات الدعم المهني'}</strong>
                    <span>{lang === 'en' ? 'Engineers, QA/QC, Safety, Trades' : 'مهندسون، فاحصو جودة، ضباط سلامة'}</span>
                  </div>
                </Link>

                <Link to="/equipment" className="submenu-link" onClick={closeAllMenus}>
                  <Wrench size={16} className="submenu-icon" />
                  <div>
                    <strong>{lang === 'en' ? 'Equipment Rentals' : 'تأجير المعدات والآليات'}</strong>
                    <span>{lang === 'en' ? 'Cranes, Heavy Fleet, Machinery' : 'رافعات، آليات ثقيلة، معدات متطورة'}</span>
                  </div>
                </Link>

                <Link to="/services" className="submenu-link" onClick={closeAllMenus}>
                  <Building size={16} className="submenu-icon" />
                  <div>
                    <strong>{lang === 'en' ? 'General Contracting' : 'المقاولات العامة والفرعية'}</strong>
                    <span>{lang === 'en' ? 'Civil & Mechanical Project Works' : 'أعمال المشاريع المدنية والميكانيكية'}</span>
                  </div>
                </Link>
              </div>
            </li>

            <li>
              <Link 
                to="/equipment" 
                className={`nav-link ${isActive('/equipment') ? 'active' : ''}`}
              >
                {lang === 'en' ? 'Equipment Rentals' : 'تأجير المعدات'}
              </Link>
            </li>
            <li>
              <Link 
                to="/gallery" 
                className={`nav-link ${isActive('/gallery') ? 'active' : ''}`}
              >
                {lang === 'en' ? 'Gallery' : 'معرض المشاريع'}
              </Link>
            </li>
            <li>
              <Link 
                to="/contact" 
                className={`nav-link ${isActive('/contact') ? 'active' : ''}`}
              >
                {lang === 'en' ? 'Contact' : 'اتصل بنا'}
              </Link>
            </li>
            <li>
              <Link
                to="/quote" 
                className="btn-gold-nav" 
              >
                <Send size={15} />
                <span>{lang === 'en' ? 'Request a Quote' : 'طلب تسعيرة'}</span>
              </Link>
            </li>
          </ul>

          {/* Mobile Right Controls: Language toggle + Menu Trigger */}
          <div className="mobile-header-actions">
            <button 
              className="mobile-lang-btn" 
              onClick={toggleLanguage}
              aria-label="Change Language"
            >
              <Globe size={15} />
              <span>{lang === 'en' ? 'العربية' : 'EN'}</span>
            </button>

            <button 
              className={`mobile-menu-btn ${isMenuOpen ? 'btn-active' : ''}`} 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </header>

      {/* Enhanced Mobile Drawer Backdrop */}
      <div 
        className={`mobile-drawer-backdrop ${isMenuOpen ? 'backdrop-visible' : ''}`}
        onClick={closeAllMenus}
        aria-hidden="true"
      />

      {/* Enhanced Mobile Navigation Drawer */}
      <nav 
        className={`mobile-nav-drawer ${isMenuOpen ? 'drawer-open' : ''}`}
        aria-label="Mobile Navigation"
      >
        <div className="mobile-drawer-inner">
          {/* Drawer Header with Logo & Close Button */}
          <div className="drawer-header">
            <div className="drawer-brand">
              <div className="drawer-logo-glow">
                <div className="drawer-logo-white-shade"></div>
                <img src={logo} alt="ORJWAN CONTRACTING" className="drawer-logo-img" />
              </div>
              <div className="drawer-brand-text">
                <span className="drawer-co-name">ORJUWAN ZAKI BIN AHMED AL REBH</span>
                <span className="drawer-co-subname">GENERAL CONTRACTING EST</span>
                <span className="drawer-cr-num">CR No. 2053123342</span>
              </div>
            </div>

            <button 
              className="drawer-close-btn" 
              onClick={closeAllMenus}
              aria-label="Close menu"
            >
              <X size={22} />
            </button>
          </div>

          {/* Quick Call & WhatsApp Action Banner */}
          <div className="drawer-quick-cta-bar">
            <a href="tel:0568565143" className="drawer-call-btn">
              <Phone size={15} />
              <span>0568565143</span>
            </a>
            <Link to="/quote" className="drawer-quote-pill" onClick={closeAllMenus}>
              <Send size={14} />
              <span>{lang === 'en' ? 'Get Quote' : 'طلب تسعيرة'}</span>
            </Link>
          </div>

          {/* Primary Navigation Links with smooth stagger */}
          <ul className="drawer-nav-list">
            <li className="drawer-nav-item">
              <Link 
                to="/" 
                className={`drawer-link ${isActive('/') ? 'link-active' : ''}`}
                onClick={closeAllMenus}
              >
                <span>{lang === 'en' ? 'Home' : 'الرئيسية'}</span>
                <ChevronRight size={18} className="drawer-link-arrow" />
              </Link>
            </li>

            <li className="drawer-nav-item">
              <Link 
                to="/about" 
                className={`drawer-link ${isActive('/about') ? 'link-active' : ''}`}
                onClick={closeAllMenus}
              >
                <span>{lang === 'en' ? 'About Us' : 'من نحن'}</span>
                <ChevronRight size={18} className="drawer-link-arrow" />
              </Link>
            </li>

            {/* Accordion Expandable Services Menu */}
            <li className="drawer-nav-item drawer-accordion-item">
              <div 
                className={`drawer-accordion-trigger ${isServicesOpen ? 'accordion-expanded' : ''} ${isActive('/services') ? 'link-active' : ''}`}
                onClick={() => setIsServicesOpen(!isServicesOpen)}
              >
                <span className="accordion-title-text">{lang === 'en' ? 'Services' : 'خدماتنا'}</span>
                <div className="accordion-chevron-pill">
                  <span className="sub-count">3</span>
                  <ChevronDown size={16} className={`accordion-chevron ${isServicesOpen ? 'chevron-up' : ''}`} />
                </div>
              </div>

              {/* Expandable Submenu for Mobile */}
              <div className={`drawer-submenu-collapse ${isServicesOpen ? 'collapse-open' : ''}`}>
                <div className="drawer-submenu-content">
                  <Link 
                    to="/services" 
                    className="drawer-sublink" 
                    onClick={closeAllMenus}
                  >
                    <div className="sublink-icon-box">
                      <Users size={16} />
                    </div>
                    <div className="sublink-text-block">
                      <strong className="sublink-title">
                        {lang === 'en' ? 'Professional Support Services' : 'خدمات الدعم المهني'}
                      </strong>
                      <span className="sublink-desc">
                        {lang === 'en' ? 'Engineers, QA/QC, Safety, Trades' : 'مهندسون، فاحصو جودة، ضباط سلامة'}
                      </span>
                    </div>
                  </Link>

                  <Link 
                    to="/equipment" 
                    className="drawer-sublink" 
                    onClick={closeAllMenus}
                  >
                    <div className="sublink-icon-box">
                      <Wrench size={16} />
                    </div>
                    <div className="sublink-text-block">
                      <strong className="sublink-title">
                        {lang === 'en' ? 'Equipment Rentals' : 'تأجير المعدات والآليات'}
                      </strong>
                      <span className="sublink-desc">
                        {lang === 'en' ? 'Cranes, Heavy Fleet, Machinery' : 'رافعات، آليات ثقيلة، معدات متطورة'}
                      </span>
                    </div>
                  </Link>

                  <Link 
                    to="/services" 
                    className="drawer-sublink" 
                    onClick={closeAllMenus}
                  >
                    <div className="sublink-icon-box">
                      <Building size={16} />
                    </div>
                    <div className="sublink-text-block">
                      <strong className="sublink-title">
                        {lang === 'en' ? 'General Contracting' : 'المقاولات العامة والفرعية'}
                      </strong>
                      <span className="sublink-desc">
                        {lang === 'en' ? 'Civil & Mechanical Project Works' : 'أعمال المشاريع المدنية والميكانيكية'}
                      </span>
                    </div>
                  </Link>
                </div>
              </div>
            </li>

            <li className="drawer-nav-item">
              <Link 
                to="/equipment" 
                className={`drawer-link ${isActive('/equipment') ? 'link-active' : ''}`}
                onClick={closeAllMenus}
              >
                <span>{lang === 'en' ? 'Equipment Rentals' : 'تأجير المعدات'}</span>
                <ChevronRight size={18} className="drawer-link-arrow" />
              </Link>
            </li>

            <li className="drawer-nav-item">
              <Link 
                to="/gallery" 
                className={`drawer-link ${isActive('/gallery') ? 'link-active' : ''}`}
                onClick={closeAllMenus}
              >
                <span>{lang === 'en' ? 'Gallery & Projects' : 'معرض المشاريع'}</span>
                <ChevronRight size={18} className="drawer-link-arrow" />
              </Link>
            </li>

            <li className="drawer-nav-item">
              <Link 
                to="/contact" 
                className={`drawer-link ${isActive('/contact') ? 'link-active' : ''}`}
                onClick={closeAllMenus}
              >
                <span>{lang === 'en' ? 'Contact Us' : 'اتصل بنا'}</span>
                <ChevronRight size={18} className="drawer-link-arrow" />
              </Link>
            </li>
          </ul>

          {/* Primary Action Button (Enhanced Request a Formal Project Quotation) */}
          <div className="drawer-cta-wrapper">
            <Link
              to="/quote" 
              className="drawer-primary-btn" 
              onClick={closeAllMenus}
            >
              <div className="drawer-btn-icon-gold">
                <Send size={18} />
              </div>
              <div className="drawer-btn-text-group">
                <span className="drawer-btn-title">
                  {lang === 'en' ? 'Request a Formal Project Quotation' : 'طلب عرض أسعار رسمي لمشروعك'}
                </span>
                <span className="drawer-btn-subtitle">
                  {lang === 'en' ? 'Direct RFP & Commercial Estimations • 24h Response' : 'تسعير رسمي معتمد • استجابة خلال 24 ساعة'}
                </span>
              </div>
              <div className="drawer-btn-arrow">
                <ArrowRight size={18} />
              </div>
            </Link>
          </div>

          {/* Drawer Footer Information */}
          <div className="drawer-footer-box">
            <div className="drawer-contact-line">
              <MapPin size={15} color="#C5A052" />
              <span>EDJC8593, Al Khazzan St, Dammam, KSA</span>
            </div>
            <div className="drawer-contact-line">
              <Mail size={15} color="#C5A052" />
              <a href="mailto:info@orjwans.com">info@orjwans.com</a>
            </div>

            <div className="drawer-legal-row">
              <Link to="/privacy" onClick={closeAllMenus}>Privacy</Link>
              <span>•</span>
              <Link to="/terms" onClick={closeAllMenus}>Terms</Link>
              <span>•</span>
              <Link to="/rental-terms" onClick={closeAllMenus}>Rental Terms</Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
