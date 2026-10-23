import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  MapPin, ArrowRight, X, ChevronLeft, ChevronRight, 
  ZoomIn, Sparkles, Building2, HardHat, Wrench, ShieldCheck 
} from 'lucide-react';
import PageTransition from '../components/PageTransition';
import ScrollReveal from '../components/ScrollReveal';
import '../styles/Gallery.css';

export default function Gallery({ lang, onOpenQuote }) {
  const [activeTab, setActiveTab] = useState('all');
  const [activeLightboxIndex, setActiveLightboxIndex] = useState(null);

  const galleryItems = [
    {
      title: 'Petrochemical Refineries & Turnaround',
      cat: 'manpower',
      location: 'Jubail Industrial City, KSA',
      desc: 'Deployment of certified QA/QC welding inspectors, piping engineers, and 6G certified welders for plant turnaround.',
      img: '/images/why-choose-us.jpg',
      scope: 'Rigging Supervisors & QC Inspectors (Aramco Approved)'
    },
    {
      title: 'Commercial Tower & High-Rise Civil Works',
      cat: 'civil',
      location: 'Dammam / Al Khobar, KSA',
      desc: 'Execution of deep foundation works, reinforced concrete casting, formwork, and complete safety supervision teams.',
      img: '/images/service-civil.jpg',
      scope: 'Structural Concrete & Civil Subcontracting'
    },
    {
      title: 'Industrial Logistics Hub & Yard Fleet',
      cat: 'equipment',
      location: 'Ras Tanura / Dammam, KSA',
      desc: 'Heavy wheel loaders, tracked excavators, and multi-axle trailers mobilizing raw construction materials round the clock.',
      img: '/images/equipment-banner.jpg',
      scope: 'Material Transport & Heavy Excavation Fleet'
    },
    {
      title: 'High-Elevation Structural Assembly',
      cat: 'equipment',
      location: 'Eastern Province, KSA',
      desc: 'Heavy cranes and articulated boom manlifts operating under stringent safety guidelines for steel structure erection.',
      img: '/images/hero-banner.jpg',
      scope: 'All-Terrain Cranes (50T - 160T) & Boom Lifts'
    },
    {
      title: 'Infrastructure Pipeline & Earthworks',
      cat: 'civil',
      location: 'Dammam Industrial Area, KSA',
      desc: 'Trenching, pipeline bedding, heavy compaction, and backfilling executed by certified operators and site surveyors.',
      img: '/images/service-equipment.jpg',
      scope: 'Pipeline Trenching & Subbase Compaction'
    },
    {
      title: 'Skilled Multi-Trade Site Workforce',
      cat: 'manpower',
      location: 'Eastern Province & Riyadh, KSA',
      desc: 'Certified electricians, instrument technicians, scaffolders, and bilingual site supervisors for major turnkey projects.',
      img: '/images/service-manpower.jpg',
      scope: 'TUV Certified Scaffolders, Electricians, WPR'
    }
  ];

  const filteredItems = activeTab === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.cat === activeTab);

  const openLightbox = (index) => {
    setActiveLightboxIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setActiveLightboxIndex(null);
    document.body.style.overflow = '';
  };

  const nextLightbox = () => {
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((activeLightboxIndex + 1) % filteredItems.length);
    }
  };

  const prevLightbox = () => {
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((activeLightboxIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  return (
    <PageTransition>
      <div className="gallery-page">
        {/* Banner */}
        <section className="page-hero-banner">
          <div className="container">
            <span className="page-hero-tag">
              <Sparkles size={16} />
              {lang === 'en' ? 'PROJECT PORTFOLIO & GALLERY' : 'معرض المشاريع والعمليات'}
            </span>
            <h1 className="page-hero-title">
              {lang === 'en' ? 'Our Work. Our Commitment on Ground.' : 'أعمالنا والتزامنا الميداني في كافة المشاريع'}
            </h1>
            <p className="page-hero-desc">
              {lang === 'en'
                ? 'Photographic documentation of our workforce, machinery operations, and contracting execution across the Kingdom of Saudi Arabia.'
                : 'توثيق حي للكوادر البشرية، أسطول المعدات، وإنجازات مشاريعنا في مختلف المواقع الصناعية والمدنية بالمملكة.'}
            </p>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="section-padding" style={{ background: '#f3f5f8' }}>
          <div className="container">
            {/* Filters */}
            <div className="gallery-filter-bar">
              <button 
                className={`gallery-filter-btn ${activeTab === 'all' ? 'active' : ''}`}
                onClick={() => setActiveTab('all')}
              >
                {lang === 'en' ? 'All Projects' : 'كافة الأعمال'}
              </button>
              <button 
                className={`gallery-filter-btn ${activeTab === 'manpower' ? 'active' : ''}`}
                onClick={() => setActiveTab('manpower')}
              >
                {lang === 'en' ? 'Manpower Deployments' : 'توريد الكوادر'}
              </button>
              <button 
                className={`gallery-filter-btn ${activeTab === 'equipment' ? 'active' : ''}`}
                onClick={() => setActiveTab('equipment')}
              >
                {lang === 'en' ? 'Equipment Fleet' : 'أسطول المعدات'}
              </button>
              <button 
                className={`gallery-filter-btn ${activeTab === 'civil' ? 'active' : ''}`}
                onClick={() => setActiveTab('civil')}
              >
                {lang === 'en' ? 'Civil & Contracting' : 'المقاولات والإنشاءات'}
              </button>
            </div>

            <div className="gallery-masonry-grid">
              {filteredItems.map((item, idx) => (
                <ScrollReveal key={idx} delay={idx * 0.08}>
                  <div 
                    className="gallery-item-card"
                    data-cursor-text="Zoom"
                    onClick={() => openLightbox(idx)}
                  >
                    <div className="gallery-item-img-wrap">
                      <img 
                        src={item.img} 
                        alt={item.title} 
                        className="gallery-item-img"
                        loading="lazy" 
                      />
                      <div className="gallery-zoom-badge">
                        <ZoomIn size={18} />
                      </div>
                      <span className="gallery-item-overlay">Verified Project Operations</span>
                    </div>
                    <div className="gallery-item-body">
                      <h3 className="gallery-item-title">{item.title}</h3>
                      <div className="gallery-item-meta">
                        <MapPin size={15} />
                        <span>{item.location}</span>
                      </div>
                      <p className="gallery-item-desc">{item.desc}</p>
                      <div className="gallery-scope-tag">
                        <strong>Scope:</strong> {item.scope}
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            <div style={{ textAlign: 'center', marginTop: 60 }}>
              <Link to="/quote" className="btn-gold" style={{ display: 'inline-flex', alignItems: 'center', gap: 10 }}>
                {lang === 'en' ? 'Partner With Us on Your Next Project' : 'شاركنا نجاح مشروعك القادم'}
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </section>

        {/* Accessible Lightbox Modal */}
        {activeLightboxIndex !== null && filteredItems[activeLightboxIndex] && (
          <div className="gallery-lightbox-overlay" onClick={closeLightbox}>
            <div className="lightbox-content-box" onClick={(e) => e.stopPropagation()}>
              <button 
                className="lightbox-close-btn" 
                onClick={closeLightbox}
                aria-label="Close Lightbox"
              >
                <X size={26} />
              </button>

              <button 
                className="lightbox-nav-btn prev-btn" 
                onClick={prevLightbox}
                aria-label="Previous image"
              >
                <ChevronLeft size={30} />
              </button>

              <div className="lightbox-image-container">
                <img 
                  src={filteredItems[activeLightboxIndex].img} 
                  alt={filteredItems[activeLightboxIndex].title} 
                  className="lightbox-img"
                />
                <div className="lightbox-caption-bar">
                  <h4 className="lightbox-title">{filteredItems[activeLightboxIndex].title}</h4>
                  <div className="lightbox-loc">
                    <MapPin size={14} />
                    <span>{filteredItems[activeLightboxIndex].location}</span>
                  </div>
                  <p className="lightbox-desc">{filteredItems[activeLightboxIndex].desc}</p>
                </div>
              </div>

              <button 
                className="lightbox-nav-btn next-btn" 
                onClick={nextLightbox}
                aria-label="Next image"
              >
                <ChevronRight size={30} />
              </button>
            </div>
          </div>
        )}

      </div>
    </PageTransition>
  );
}
