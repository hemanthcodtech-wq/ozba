import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import SplashLoader from './components/SplashLoader';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Equipment from './pages/Equipment';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import ManpowerDetail from './pages/ManpowerDetail';
import Quote from './pages/Quote';
import Legal from './pages/Legal';
import BackToTop from './components/BackToTop';
import FloatingDispatchWidget from './components/FloatingDispatchWidget';
import { CheckCircle2, HardHat, X, ArrowRight } from 'lucide-react';

function ScrollToTop() {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  const [lang, setLang] = useState('en'); // 'en' | 'ar'
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [toast, setToast] = useState('');

  const toggleLanguage = () => {
    const nextLang = lang === 'en' ? 'ar' : 'en';
    setLang(nextLang);
    document.documentElement.lang = nextLang;
    document.body.dir = nextLang === 'ar' ? 'rtl' : 'ltr';
  };

  const showToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(''), 4000);
  };

  const handleModalSubmit = (e) => {
    e.preventDefault();
    showToast(lang === 'en' ? 'Thank you! Your quotation request was received.' : 'شكراً لك! تم استلام طلب التسعيرة بنجاح.');
    setIsQuoteModalOpen(false);
  };

  return (
    <Router>
      <ScrollToTop />
      {/* 4. Desktop Custom Gold Cursor */}
      <CustomCursor />
      
      {/* 5. Branded Initial Splash Screen */}
      <SplashLoader />

      <div className={`app-container ${lang === 'ar' ? 'rtl-layout' : ''}`}>
        {/* Navigation */}
        <Header 
          lang={lang} 
          toggleLanguage={toggleLanguage} 
          onOpenQuote={() => setIsQuoteModalOpen(true)} 
        />

        {/* Router Pages */}
        <main>
          <Routes>
            <Route path="/" element={<Home lang={lang} onOpenQuote={() => setIsQuoteModalOpen(true)} showToast={showToast} />} />
            <Route path="/about" element={<About lang={lang} onOpenQuote={() => setIsQuoteModalOpen(true)} />} />
            <Route path="/services" element={<Services lang={lang} onOpenQuote={() => setIsQuoteModalOpen(true)} />} />
            <Route path="/equipment" element={<Equipment lang={lang} onOpenQuote={() => setIsQuoteModalOpen(true)} />} />
            <Route path="/gallery" element={<Gallery lang={lang} onOpenQuote={() => setIsQuoteModalOpen(true)} />} />
            <Route path="/contact" element={<Contact lang={lang} showToast={showToast} />} />
            <Route path="/manpower/:categoryId" element={<ManpowerDetail lang={lang} onOpenQuote={() => setIsQuoteModalOpen(true)} />} />
            <Route path="/quote" element={<Quote lang={lang} showToast={showToast} />} />
            
            {/* Legal Pages */}
            <Route path="/privacy" element={<Legal lang={lang} type="privacy" />} />
            <Route path="/terms" element={<Legal lang={lang} type="terms" />} />
            <Route path="/rental-terms" element={<Legal lang={lang} type="rental" />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer 
          lang={lang} 
          toggleLanguage={toggleLanguage} 
        />

        {/* Global Request a Quote Modal */}
        {isQuoteModalOpen && (
          <div className="modal-overlay" onClick={() => setIsQuoteModalOpen(false)}>
            <div className="modal-container" onClick={(e) => e.stopPropagation()}>
              <div className="modal-header">
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <HardHat size={22} color="var(--gold-accent)" />
                  <h3 style={{ color: '#fff', fontSize: '1.2rem', margin: 0 }}>
                    {lang === 'en' ? 'Request a Quote / Project Proposal' : 'طلب تسعيرة وعرض رسمي للمشروع'}
                  </h3>
                </div>
                <button 
                  onClick={() => setIsQuoteModalOpen(false)} 
                  style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer', padding: 4 }}
                >
                  <X size={22} />
                </button>
              </div>

              <div className="modal-body">
                <form onSubmit={handleModalSubmit}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: 6 }}>
                        {lang === 'en' ? 'Full Name *' : 'الاسم الكامل *'}
                      </label>
                      <input type="text" required className="form-input" placeholder="Your Name" />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: 6 }}>
                        {lang === 'en' ? 'Company Name *' : 'اسم الشركة *'}
                      </label>
                      <input type="text" required className="form-input" placeholder="Company Name" />
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: 6 }}>
                        {lang === 'en' ? 'Phone Number *' : 'رقم الجوال *'}
                      </label>
                      <input type="tel" required className="form-input" placeholder="+966 5X XXX XXXX" />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: 6 }}>
                        {lang === 'en' ? 'Email Address *' : 'البريد الإلكتروني *'}
                      </label>
                      <input type="email" required className="form-input" placeholder="name@company.com" />
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: 6 }}>
                        {lang === 'en' ? 'Required Service' : 'الخدمة المطلوبة'}
                      </label>
                      <select className="form-select">
                        <option value="Manpower Supply">Manpower Supply & Technical Staff</option>
                        <option value="Equipment Rentals">Equipment & Machinery Rental</option>
                        <option value="General Contracting">General Civil & Mechanical Contracting</option>
                        <option value="Combined">Both Manpower & Equipment</option>
                      </select>
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: 6 }}>
                        {lang === 'en' ? 'Project Location *' : 'موقع المشروع *'}
                      </label>
                      <input type="text" required className="form-input" placeholder="e.g. Dammam, Jubail, Neom" />
                    </div>
                  </div>

                  <div style={{ marginBottom: 20 }}>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: 6 }}>
                      {lang === 'en' ? 'Requirements / Duration / Specifications' : 'تفاصيل الاحتياجات والمدة'}
                    </label>
                    <textarea rows={3} className="form-textarea" placeholder="Detail your requirements..."></textarea>
                  </div>

                  <button type="submit" className="btn-gold" style={{ width: '100%', justifyContent: 'center' }}>
                    {lang === 'en' ? 'Submit Quotation Request' : 'إرسال طلب التسعيرة'}
                    <ArrowRight size={18} />
                  </button>
                </form>
              </div>
            </div>
          </div>
        )}

        {/* Global Toast Message */}
        {toast && (
          <div className="toast-msg">
            <CheckCircle2 size={20} color="var(--gold-accent)" />
            <span>{toast}</span>
          </div>
        )}

        {/* 24/7 Floating B2B Dispatch & WhatsApp Hotline Widget */}
        <FloatingDispatchWidget lang={lang} />

        {/* Floating Circular Reading Progress BackToTop Button */}
        <BackToTop />
      </div>
    </Router>
  );
}
