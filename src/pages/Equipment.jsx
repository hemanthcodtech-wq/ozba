import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Truck, CheckCircle2, ArrowRight, ShieldCheck, Clock, 
  Search, Filter, Sparkles, Wrench, Calendar, Phone, Check, Info
} from 'lucide-react';
import PageTransition from '../components/PageTransition';
import ScrollReveal from '../components/ScrollReveal';
import TextReveal from '../components/TextReveal';
import TiltCard from '../components/TiltCard';
import '../styles/Equipment.css';

export default function Equipment({ lang, onOpenQuote }) {
  const [filter, setFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedEquip, setSelectedEquip] = useState(null);

  const catalog = [
    {
      id: 'mobile-cranes',
      title: 'Mobile & Rough Terrain Cranes',
      category: 'lifting',
      desc: 'Capacity from 25 Tons to 250 Tons, certified crane operators and rigging supervisors with Aramco credentials.',
      specs: ['25T - 250T Capacity', 'All-Terrain / Rough Terrain', 'Aramco Sticker Certified', 'Operator Provided on Confirmation'],
      img: '/images/service-equipment.jpg',
      availability: 'Confirmed on Request'
    },
    {
      id: 'hydraulic-excavators',
      title: 'Hydraulic Tracked Excavators',
      category: 'earthmoving',
      desc: 'Heavy tracked excavators for mass excavation, trenching, foundations, and rock breaking attachments.',
      specs: ['20T to 45T Operating Weight', 'Rock Breaker Attachment Available', 'Bucket Capacity 1.2 - 2.5 m³', 'High Fuel Efficiency Engine'],
      img: '/images/equipment-banner.jpg',
      availability: 'Confirmed on Request'
    },
    {
      id: 'wheel-loaders-bobcats',
      title: 'Wheel Loaders & Compact Bobcats',
      category: 'earthmoving',
      desc: 'Versatile wheel loaders and compact skid steer Bobcats for bulk material movement, grading and site cleanup.',
      specs: ['CAT / Komatsu / Volvo Models', 'Skid Steer & Heavy Wheel Types', 'Multi-attachment compatibility', 'Yard Dispatch within 24h'],
      img: '/images/equipment-banner.jpg',
      availability: 'Confirmed on Request'
    },
    {
      id: 'forklifts-telehandlers',
      title: 'Heavy Forklifts & Rough Telehandlers',
      category: 'lifting',
      desc: 'Industrial forklifts from 3T to 16T and telescopic handlers up to 17m reach for yard and warehouse logistics.',
      specs: ['3 Ton to 16 Ton Capacity', 'Rough Terrain Telehandlers (14m-17m)', 'Diesel Engine Powered', 'Certified Operators on Request'],
      img: '/images/service-equipment.jpg',
      availability: 'Confirmed on Request'
    },
    {
      id: 'dump-trucks-trailers',
      title: 'Heavy Dump Trucks & Flatbed Trailers',
      category: 'transport',
      desc: 'Rugged dump trucks (16m³ to 32m³) and multi-axle trailers for aggregate, asphalt and heavy machinery haulage.',
      specs: ['16m³ - 32m³ Dump Capacity', '40ft & 50ft Flatbed Trailers', 'Licensed Heavy Drivers Available', 'GPS Fleet Tracking'],
      img: '/images/equipment-banner.jpg',
      availability: 'Confirmed on Request'
    },
    {
      id: 'diesel-generators',
      title: 'Industrial Diesel Power Generators',
      category: 'power',
      desc: 'Silent diesel power generators for continuous construction site power and emergency plant backup.',
      specs: ['50 kVA to 1000 kVA', 'Soundproof Heavy Canopy', 'Synchronized Systems Available', 'Maintenance Support Included'],
      img: '/images/why-choose-us.jpg',
      availability: 'Confirmed on Request'
    },
    {
      id: 'water-fuel-tankers',
      title: 'Potable Water & Fuel Tankers',
      category: 'transport',
      desc: 'Potable water tankers, sweet water tankers, and fuel delivery tankers for remote site operational support.',
      specs: ['16,000L - 32,000L Capacity', 'Sweet Water / Raw Water', 'Approved Fuel Distribution', 'Scheduled Dispatch'],
      img: '/images/service-civil.jpg',
      availability: 'Confirmed on Request'
    },
    {
      id: 'manlifts-scissor-lifts',
      title: 'Boom Lifts & Scissor Manlifts',
      category: 'lifting',
      desc: 'Articulated boom lifts, telescopic aerial platforms and electric/diesel scissor lifts for high elevation tasks.',
      specs: ['Working Height up to 43m', 'Rough Terrain 4x4 Driven', 'Electric & Diesel Options', 'Daily/Monthly Rental Terms'],
      img: '/images/hero-banner.jpg',
      availability: 'Confirmed on Request'
    },
    {
      id: 'compactors-dozers-graders',
      title: 'Soil Compactors, Dozers & Motor Graders',
      category: 'earthmoving',
      desc: 'Motor graders, D8/D9 bulldozers, and single/double drum vibratory soil compactors for infrastructure earthworks.',
      specs: ['10T - 15T Vibratory Rollers', 'CAT 140K/M Motor Graders', 'Bulldozers with Multi-shank Rippers', 'Precision Road Grading'],
      img: '/images/equipment-banner.jpg',
      availability: 'Confirmed on Request'
    }
  ];

  const filteredCatalog = catalog.filter((item) => {
    const matchesCategory = filter === 'all' || item.category === filter;
    const matchesQuery = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  return (
    <PageTransition>
      <div className="equipment-page">
        {/* Banner */}
        <section className="page-hero-banner">
          <div className="container">
            <span className="page-hero-tag">
              <Sparkles size={16} />
              {lang === 'en' ? 'HEAVY EQUIPMENT RENTALS' : 'أسطول تأجير المعدات الثقيلة'}
            </span>
            <TextReveal delay={0.1}>
              <h1 className="page-hero-title">
                {lang === 'en' ? 'Reliable Machinery Fleet. Ready for Immediate Deployment.' : 'معدات وآليات ثقيلة موثوقة جاهزة للعمل الفوري'}
              </h1>
            </TextReveal>
            <TextReveal delay={0.2}>
              <p className="page-hero-desc">
                {lang === 'en'
                  ? 'Complete selection of lifting, earthmoving, transportation and power equipment with verified maintenance records and certified operators across Saudi Arabia.'
                  : 'مجموعة شاملة من الرافعات، الحفارات، الشاحنات، والمولدات المفحوصة والمطابقة للمواصفات السعودية مع مشغلين معتمدين.'}
              </p>
            </TextReveal>
          </div>
        </section>

        {/* Catalog & Filter */}
        <section className="section-padding" style={{ background: '#f3f5f8' }}>
          <div className="container">
            
            {/* Search and Category Filter Toolbar */}
            <div className="equipment-filter-toolbar">
              <div className="search-bar-wrap">
                <Search size={18} className="search-icon" />
                <input
                  type="text"
                  placeholder={lang === 'en' ? 'Search equipment by name or keyword...' : 'ابحث عن المعدة بالاسم أو النوع...'}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="search-input"
                />
              </div>

              {/* Filter tabs */}
              <div className="category-tabs">
                {[
                  { id: 'all', en: 'All Machinery', ar: 'جميع المعدات' },
                  { id: 'lifting', en: 'Lifting & Cranes', ar: 'الرافعات ومعدات الرفع' },
                  { id: 'earthmoving', en: 'Earthmoving', ar: 'الحفريات والردميات' },
                  { id: 'transport', en: 'Transport & Tankers', ar: 'النقل والصهاريج' },
                  { id: 'power', en: 'Generators & Power', ar: 'المولدات والطاقة' },
                ].map((tab) => (
                  <button 
                    key={tab.id}
                    className={`tab-btn ${filter === tab.id ? 'active' : ''}`}
                    onClick={() => setFilter(tab.id)}
                  >
                    {lang === 'en' ? tab.en : tab.ar}
                  </button>
                ))}
              </div>
            </div>

            {/* Results count & disclaimer note */}
            <div className="catalog-status-bar">
              <span className="results-count">
                {lang === 'en' ? `Showing ${filteredCatalog.length} machinery categories` : `عرض ${filteredCatalog.length} فئات من المعدات`}
              </span>
              <span className="availability-notice">
                <Info size={14} />
                {lang === 'en' ? 'Equipment availability and certified operator provision confirmed upon quotation request.' : 'يتم تأكيد جاهزية المعدات والمشغلين المعتمدين عند طلب عرض الأسعار.'}
              </span>
            </div>

            {/* Equipment Grid */}
            {filteredCatalog.length === 0 ? (
              <div className="empty-catalog-state">
                <Wrench size={48} color="#94a3b8" />
                <h3>{lang === 'en' ? 'No matching equipment found' : 'لم يتم العثور على معدات مطابقة للبحث'}</h3>
                <p>{lang === 'en' ? 'Try searching for cranes, excavators, loaders, generators, or reset filters.' : 'جرب البحث عن رافعات، حفارات، مولدات، أو أعد ضبط الفلاتر.'}</p>
                <button className="btn-gold" onClick={() => { setFilter('all'); setSearchQuery(''); }}>
                  {lang === 'en' ? 'Reset Filters' : 'إعادة ضبط البحث'}
                </button>
              </div>
            ) : (
              <div className="equipment-catalog-grid">
                {filteredCatalog.map((item, idx) => (
                  <ScrollReveal key={item.id} delay={idx * 0.08}>
                    <TiltCard style={{ height: '100%' }}>
                      <div className="equipment-catalog-card">
                        <div className="equipment-card-img-wrap" data-cursor-text="View">
                          <img 
                            src={item.img} 
                            alt={item.title} 
                            className="equipment-card-img" 
                            loading="lazy"
                          />
                          <span className="equipment-card-badge">Certified & Inspected</span>
                        </div>
                        <div className="equipment-card-body">
                          <h3 className="equipment-card-title">{item.title}</h3>
                          <p className="equipment-card-desc">{item.desc}</p>
                          
                          <ul className="equipment-card-features">
                            {item.specs.map((sp, sIdx) => (
                              <li key={sIdx}>
                                <CheckCircle2 size={15} />
                                <span>{sp}</span>
                              </li>
                            ))}
                          </ul>

                          <div className="equipment-actions-row">
                            <Link 
                              to="/quote" 
                              className="btn-gold" 
                              style={{ flex: 1, justifyContent: 'center' }}
                            >
                              <span>{lang === 'en' ? 'Request Rental Quote' : 'طلب تسعيرة الإيجار'}</span>
                              <ArrowRight size={16} />
                            </Link>
                            
                            <button 
                              type="button"
                              onClick={() => setSelectedEquip(item)}
                              className="btn-details-ghost"
                              title={lang === 'en' ? 'View Specifications' : 'عرض المواصفات'}
                            >
                              <Info size={18} />
                            </button>
                          </div>
                        </div>
                      </div>
                    </TiltCard>
                  </ScrollReveal>
                ))}
              </div>
            )}

            {/* Bottom Support CTA */}
            <div className="equipment-custom-cta-card">
              <div className="custom-cta-text">
                <h3 className="custom-cta-title">
                  {lang === 'en' ? 'Need Specialized Machinery or Long-Term Turnkey Fleet?' : 'هل تبحث عن معدات ذات مواصفات خاصة أو تأجير طويل الأجل؟'}
                </h3>
                <p className="custom-cta-desc">
                  {lang === 'en' 
                    ? 'We source prime movers, dozers, side booms, ambulances, buses, and high-tonnage cranes on demand across Saudi Arabia.' 
                    : 'نقوم بتأمين الشاحنات الثقيلة، البولدوزرات، الرافعات الجانبية، حافلات النقل وسيارات الإسعاف المجهزة فوراً.'}
                </p>
              </div>
              <div className="custom-cta-actions">
                <Link to="/quote" className="btn-gold">
                  {lang === 'en' ? 'Request Equipment RFP' : 'طلب تسعيرة أسطول'}
                  <ArrowRight size={18} />
                </Link>
                <a href="tel:0590767595" className="btn-call-outline">
                  <Phone size={16} />
                  <span>0590767595</span>
                </a>
              </div>
            </div>

          </div>
        </section>

        {/* Equipment Details Quick Modal */}
        {selectedEquip && (
          <div className="modal-overlay" onClick={() => setSelectedEquip(null)}>
            <div className="modal-container" onClick={(e) => e.stopPropagation()} style={{ maxWidth: 640 }}>
              <div className="modal-header">
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <Wrench size={22} color="var(--gold-accent)" />
                  <h3 style={{ color: '#fff', fontSize: '1.2rem', margin: 0 }}>
                    {selectedEquip.title}
                  </h3>
                </div>
                <button 
                  onClick={() => setSelectedEquip(null)} 
                  style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer', padding: 4 }}
                >
                  ✕
                </button>
              </div>

              <div className="modal-body">
                <img 
                  src={selectedEquip.img} 
                  alt={selectedEquip.title} 
                  style={{ width: '100%', height: 220, objectFit: 'cover', borderRadius: 8, marginBottom: 16 }}
                />
                <p style={{ color: '#475569', lineHeight: 1.6, marginBottom: 16 }}>
                  {selectedEquip.desc}
                </p>
                <div style={{ background: '#f8fafc', padding: 16, borderRadius: 8, border: '1px solid #e2e8f0', marginBottom: 20 }}>
                  <div style={{ fontWeight: 700, color: '#092448', marginBottom: 8 }}>
                    {lang === 'en' ? 'Verified Specifications & Features:' : 'المواصفات المعتمدة:'}
                  </div>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
                    {selectedEquip.specs.map((sp, idx) => (
                      <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: '0.88rem', color: '#334155' }}>
                        <Check size={14} color="#10b981" />
                        <span>{sp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div style={{ display: 'flex', gap: 12 }}>
                  <Link 
                    to="/quote" 
                    className="btn-gold" 
                    style={{ flex: 1, justifyContent: 'center' }}
                    onClick={() => setSelectedEquip(null)}
                  >
                    {lang === 'en' ? 'Proceed to Rental RFP' : 'المتابعة لطلب التسعيرة'}
                    <ArrowRight size={16} />
                  </Link>
                  <a href="tel:0590767595" className="btn-navy" style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                    <Phone size={16} />
                    <span>0590767595</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </PageTransition>
  );
}
