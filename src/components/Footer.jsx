import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, MapPin, Phone, Mail, Globe } from 'lucide-react';
import logo from '../assets/logo.png';
import '../styles/Footer.css';

export default function Footer({ lang, toggleLanguage }) {
  return (
    <>
      {/* Reference Strip (Above footer, exactly like reference image) */}
      <section className="ref-strip">
        <div className="container">
          <div className="ref-strip-grid">
            <div className="ref-strip-item">
              <div className="ref-strip-icon"><ShieldCheck size={22} /></div>
              <div>
                <div className="ref-strip-label">CR Number</div>
                <div className="ref-strip-val">2053123342 | ٢٠٥٣١٢٣٣٤٢</div>
              </div>
            </div>

            <div className="ref-strip-item">
              <div className="ref-strip-icon"><MapPin size={22} /></div>
              <div>
                <div className="ref-strip-label">Head Office</div>
                <div className="ref-strip-val">1st Floor, 8593 Al Khazzan St, Dammam 32242</div>
              </div>
            </div>

            <div className="ref-strip-item">
              <div className="ref-strip-icon"><Phone size={22} /></div>
              <div>
                <div className="ref-strip-label">Call Support</div>
                <div className="ref-strip-val">0568565143</div>
              </div>
            </div>

            <div className="ref-strip-item">
              <div className="ref-strip-icon"><Mail size={22} /></div>
              <div>
                <div className="ref-strip-label">Official Email</div>
                <div className="ref-strip-val">info@orjwans.com</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 14. Main Dark Navy Footer with User Logo */}
      <footer className="main-footer">
        <div className="container">
          <div className="footer-grid">
            {/* Col 1: Logo & About */}
            <div>
              <div style={{ marginBottom: 16 }}>
                <div className="logo-glow-wrapper" style={{ display: 'inline-flex', padding: '6px 14px' }}>
                  <div className="logo-light-boom"></div>
                  <img 
                    src={logo}
                    alt="OZBA CONTRACTING / ORJWAN GENERAL CONTRACTING" 
                    className="site-main-logo"
                    style={{ height: 68, width: 'auto', objectFit: 'contain' }}
                  />
                </div>
              </div>
              <p className="footer-about-text">
                {lang === 'en'
                  ? 'ORJUWAN ZAKI BIN AHMED AL REBH GENERAL CONTRACTING EST. provides general contracting, professional support services, manpower solutions, and equipment rental support across the Kingdom of Saudi Arabia.'
                  : 'مؤسسة ارجوان زكي بن أحمد آل ربح للمقاولات العامة تقدم خدمات المقاولات العامة، الدعم المهني، توريد القوى العاملة وتأجير المعدات الإنشائية في المملكة العربية السعودية.'}
              </p>
              <div style={{ color: 'var(--gold-accent)', fontSize: '0.86rem', fontWeight: 600 }}>
                CR No: 2053123342 | سجل تجاري رقم: ٢٠٥٣١٢٣٣٤٢
              </div>
            </div>

            {/* Col 2: Quick Links */}
            <div>
              <h4 className="footer-col-title">{lang === 'en' ? 'Quick Links' : 'روابط سريعة'}</h4>
              <ul className="footer-links">
                <li><Link to="/">{lang === 'en' ? 'Home' : 'الرئيسية'}</Link></li>
                <li><Link to="/about">{lang === 'en' ? 'About Us' : 'من نحن'}</Link></li>
                <li><Link to="/services">{lang === 'en' ? 'Services' : 'خدماتنا'}</Link></li>
                <li><Link to="/equipment">{lang === 'en' ? 'Equipment Rentals' : 'تأجير المعدات'}</Link></li>
                <li><Link to="/gallery">{lang === 'en' ? 'Project Gallery' : 'معرض المشاريع'}</Link></li>
                <li><Link to="/contact">{lang === 'en' ? 'Contact Us' : 'اتصل بنا'}</Link></li>
              </ul>
            </div>

            {/* Col 3: Services */}
            <div>
              <h4 className="footer-col-title">{lang === 'en' ? 'Services' : 'الخدمات'}</h4>
              <ul className="footer-links">
                <li><Link to="/services">{lang === 'en' ? 'Professional Support Services' : 'خدمات الدعم المهني'}</Link></li>
                <li><Link to="/services">{lang === 'en' ? 'Manpower Supply' : 'توريد القوى العاملة'}</Link></li>
                <li><Link to="/equipment">{lang === 'en' ? 'Equipment Rentals' : 'تأجير المعدات الثقيلة'}</Link></li>
                <li><Link to="/services">{lang === 'en' ? 'General Contracting' : 'المقاولات العامة'}</Link></li>
                <li><Link to="/services">{lang === 'en' ? 'Civil & Mechanical Support' : 'أعمال الهندسة المدنية والميكانيكية'}</Link></li>
              </ul>
            </div>

            {/* Col 4: Corporate Office */}
            <div>
              <h4 className="footer-col-title">{lang === 'en' ? 'Get In Touch' : 'تواصل معنا'}</h4>
              <p style={{ fontSize: '0.88rem', lineHeight: 1.6, marginBottom: 14 }}>
                EDJC8593, 1st Floor, 8593 Al Khazzan St,<br />
                Dammam 32242–3513, Saudi Arabia
              </p>
              <div style={{ fontSize: '0.88rem', marginBottom: 8 }}>
                <strong>Tel:</strong> <a href="tel:+966568565143" style={{ color: '#cbd5e1' }}>+966 56 856 5143</a>
              </div>
              <div style={{ fontSize: '0.88rem', marginBottom: 18 }}>
                <strong>Email:</strong> <a href="mailto:info@orjwans.com" style={{ color: '#cbd5e1' }}>info@orjwans.com</a>
              </div>
              <div>
                <button className="lang-switch" onClick={toggleLanguage}>
                  <Globe size={14} />
                  <span>{lang === 'en' ? 'تصفح بالعربية' : 'Browse in English'}</span>
                </button>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <div>
              &copy; {new Date().getFullYear()} ORJUWAN ZAKI BIN AHMED AL REBH GENERAL CONTRACTING EST. {lang === 'en' ? 'All rights reserved.' : 'جميع الحقوق محفوظة.'}
            </div>
            <div className="footer-cr-tag">
              CR NO: 2053123342 | رقم السجل التجاري: ٢٠٥٣١٢٣٣٤٢
            </div>
            <div style={{ display: 'flex', gap: 16 }}>
              <Link to="/privacy" style={{ color: '#94a3b8' }}>Privacy Policy</Link>
              <span>•</span>
              <Link to="/terms" style={{ color: '#94a3b8' }}>Terms & Conditions</Link>
              <span>•</span>
              <Link to="/rental-terms" style={{ color: '#94a3b8' }}>Rental Terms</Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
