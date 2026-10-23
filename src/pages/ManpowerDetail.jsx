import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { manpowerCategories } from '../data/manpowerData';
import {
  ArrowLeft,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Phone,
  MessageCircle,
  FileText,
  Clock,
  HardHat,
  Award,
  Layers,
  ChevronRight,
  ExternalLink
} from 'lucide-react';
import '../styles/ManpowerDetail.css';

export default function ManpowerDetail({ lang, onOpenQuote }) {
  const { categoryId } = useParams();
  const [selectedRole, setSelectedRole] = useState(null);

  const category = manpowerCategories.find(
    (cat) => cat.id === categoryId || cat.code.toLowerCase() === categoryId?.toLowerCase()
  ) || manpowerCategories[0];

  const activeRole = selectedRole || category.roles[0];

  const phoneNumber = '+966567119230';
  const whatsappNumber = '966567119230';
  const whatsappMessage = encodeURIComponent(
    `Hello ORJWAN Contracting, I would like to inquire about manpower supply for Category ${category.code}: ${category.title} (${activeRole.name}). Please send rates and available CVs.`
  );

  return (
    <div className="manpower-detail-page">
      {/* 1. Breadcrumbs */}
      <div className="detail-breadcrumb-bar">
        <div className="container">
          <nav className="detail-breadcrumb">
            <Link to="/">{lang === 'en' ? 'Home' : 'الرئيسية'}</Link>
            <ChevronRight size={14} />
            <Link to="/#manpower-list">{lang === 'en' ? 'Manpower Supply' : 'توريد القوى العاملة'}</Link>
            <ChevronRight size={14} />
            <span className="current-crumb">
              {lang === 'en' ? `Category ${category.code}` : `الفئة ${category.code}`}: {category.title}
            </span>
          </nav>
        </div>
      </div>

      {/* 2. Category Hero Showcase */}
      <section className="detail-hero-section">
        <div className="detail-hero-bg">
          <img src={category.image} alt={category.title} className="detail-hero-bg-img" />
          <div className="detail-hero-gradient"></div>
        </div>

        <div className="container detail-hero-container">
          <div className="detail-hero-flex-layout">
            {/* Left Column: Information & Actions */}
            <div className="detail-hero-content">
              <div className="detail-hero-badges">
                <span className="cat-code-pill">
                  <span className="cat-lbl">{lang === 'en' ? 'CATEGORY' : 'الفئة'}</span>
                  <span className="cat-val">{category.code}</span>
                </span>
                <span className="cat-compliance-pill">
                  <ShieldCheck size={16} />
                  <span>{lang === 'en' ? 'Saudi Aramco & TUV Approved Standards' : 'معايير أرامكو وتوف المعتمدة'}</span>
                </span>
                <span className="cat-count-pill">
                  <HardHat size={16} />
                  <span>{category.roles.length} {lang === 'en' ? 'Verified Trades' : 'مهن معتمدة'}</span>
                </span>
              </div>

              <h1 className="detail-title-en">{category.title}</h1>
              <h2 className="detail-title-ar">{category.titleAr}</h2>

              <p className="detail-overview-text">
                {lang === 'en' ? category.overview : category.shortDescAr}
              </p>

              {/* Quick Action Buttons: Enquire, Call, WhatsApp */}
              <div className="detail-action-buttons">
                <button className="btn-primary-enquire" onClick={onOpenQuote}>
                  <FileText size={18} />
                  <span>{lang === 'en' ? 'Request Official Quotation & CVs' : 'طلب تسعيرة رسمية وسير ذاتية'}</span>
                  <ArrowRight size={16} />
                </button>

                <a 
                  href={`tel:${phoneNumber}`} 
                  className="btn-action-call" 
                  title={lang === 'en' ? 'Call Directly' : 'اتصل الآن'}
                >
                  <Phone size={18} />
                  <span>+966 56 711 9230</span>
                </a>

                <a 
                  href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-action-whatsapp"
                  title={lang === 'en' ? 'WhatsApp Instant Inquiry' : 'تواصل عبر واتساب'}
                >
                  <MessageCircle size={18} />
                  <span>{lang === 'en' ? 'WhatsApp Direct' : 'واتساب مباشر'}</span>
                </a>
              </div>
            </div>

            {/* Right Column: Crystal Clear High-Definition Image Card */}
            <div className="detail-hero-showcase-media">
              <div className="detail-hero-media-card">
                <img 
                  src={category.image} 
                  alt={category.title} 
                  className="detail-hero-media-img" 
                />
                <div className="detail-hero-media-glow"></div>
                <div className="detail-media-caption">
                  <span className="media-caption-badge">
                    <CheckCircle2 size={14} />
                    {lang === 'en' ? 'Active Field Category' : 'تخصص ميداني نشط'}
                  </span>
                  <span className="media-caption-title">{category.title}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Available Sub-Categories & Trades Showcase */}
      <section className="detail-subcategories-section">
        <div className="container">
          <div className="detail-section-header">
            <div className="section-label-gold">
              <Award size={16} />
              <span>{lang === 'en' ? 'MANPOWER CLASSIFICATION & SPECIFICATIONS' : 'تصنيف ومواصفات القوى العاملة'}</span>
            </div>
            <h2 className="section-main-heading">
              {lang === 'en'
                ? `Available Sub-Categories & Roles in Category ${category.code}`
                : `المسميات والمهن المتاحة تحت الفئة ${category.code}`}
            </h2>
            <p className="section-sub-heading">
              {lang === 'en'
                ? 'Select any trade below to inspect dedicated job specifications, responsibilities, and third-party certifications.'
                : 'اضغط على أي مهنة أدناه للاطلاع على تفاصيل ومسؤوليات الوظيفة والاعتمادات الرسمية.'}
            </p>
          </div>

          {/* Master Detail Grid Layout */}
          <div className="trades-master-detail-grid">
            {/* Left Column: Interactive Sub-Category Cards */}
            <div className="trades-cards-column">
              <h3 className="column-title">
                {lang === 'en' ? `Available Roles (${category.roles.length})` : `قائمة المهن المتاحة (${category.roles.length})`}
              </h3>

              <div className="trades-list">
                {category.roles.map((role, idx) => {
                  const isSelected = activeRole.name === role.name;
                  return (
                    <div
                      key={idx}
                      className={`trade-card-item ${isSelected ? 'active' : ''}`}
                      onClick={() => setSelectedRole(role)}
                    >
                      <div className="trade-card-thumb">
                        <img src={role.image || category.image} alt={role.name} />
                        <span className="trade-idx-badge">{idx + 1}</span>
                      </div>

                      <div className="trade-card-info">
                        <div className="trade-name-en">{role.name}</div>
                        <div className="trade-name-ar">{role.nameAr}</div>
                        <div className="trade-meta-row">
                          <span className="meta-badge-tuv">TUV</span>
                          <span className="meta-badge-aramco">ARAMCO</span>
                          <span className="meta-exp">{role.experience}</span>
                        </div>
                      </div>

                      <div className="trade-card-arrow">
                        <ChevronRight size={18} />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Column: Selected Trade Deep-Dive Inspector */}
            <div className="trade-inspector-column">
              <div className="trade-inspector-card">
                <div className="inspector-media-wrap">
                  <img 
                    src={activeRole.image || category.image} 
                    alt={activeRole.name} 
                    className="inspector-media-img" 
                  />
                  <div className="inspector-media-gradient"></div>
                  <div className="inspector-badge-row">
                    <span className="inspector-status-badge">
                      <CheckCircle2 size={14} />
                      {lang === 'en' ? 'Available for Monthly & Annual Hire' : 'متاح للإيجار الشهري والسنوي'}
                    </span>
                    <span className="inspector-lead-badge">
                      <Clock size={14} />
                      {category.leadTime}
                    </span>
                  </div>
                  <div className="inspector-title-overlay">
                    <div className="inspector-trade-name">{activeRole.name}</div>
                    <div className="inspector-trade-ar">{activeRole.nameAr}</div>
                  </div>
                </div>

                <div className="inspector-body">
                  <div className="spec-feature-box">
                    <h4 className="spec-title">
                      <Award size={17} className="spec-icon" />
                      {lang === 'en' ? 'Core Role Responsibilities' : 'المسؤوليات والمهام الأساسية'}
                    </h4>
                    <p className="spec-desc">{activeRole.responsibilities}</p>
                  </div>

                  <div className="spec-meta-grid">
                    <div className="spec-meta-cell">
                      <div className="spec-meta-label">{lang === 'en' ? 'Experience Level' : 'الخبرة الميدانية'}</div>
                      <div className="spec-meta-value">{activeRole.experience}</div>
                    </div>
                    <div className="spec-meta-cell">
                      <div className="spec-meta-label">{lang === 'en' ? 'Compliance Badges' : 'الشهادات والاعتمادات'}</div>
                      <div className="spec-meta-badges">
                        <span className="tag-tuv">TUV Verified</span>
                        <span className="tag-aramco">Saudi Aramco Standards</span>
                      </div>
                    </div>
                    <div className="spec-meta-cell">
                      <div className="spec-meta-label">{lang === 'en' ? 'Deployment Region' : 'نطاق التغطية'}</div>
                      <div className="spec-meta-value">{lang === 'en' ? 'Kingdom-wide (Jubail, Dammam, Riyadh, Yanbu)' : 'جميع مناطق المملكة'}</div>
                    </div>
                    <div className="spec-meta-cell">
                      <div className="spec-meta-label">{lang === 'en' ? 'Contract Models' : 'عقود التوريد'}</div>
                      <div className="spec-meta-value">{lang === 'en' ? 'Monthly, Yearly & Shutdown (TAR)' : 'عقود تشغيل شهرية، سنوية، وصيانة دورية'}</div>
                    </div>
                  </div>

                  {/* Immediate Hire Actions */}
                  <div className="inspector-actions">
                    <button className="btn-inspector-quote" onClick={onOpenQuote}>
                      <FileText size={16} />
                      <span>{lang === 'en' ? `Inquire for ${activeRole.name}` : `طلب تسعيرة لـ ${activeRole.name}`}</span>
                      <ArrowRight size={16} />
                    </button>

                    <div className="inspector-quick-contacts">
                      <a 
                        href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Hello ORJWAN, I need CVs and rates for: ${activeRole.name} (Category ${category.code}).`)}`}
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="btn-inspector-wa"
                      >
                        <MessageCircle size={16} />
                        <span>{lang === 'en' ? 'WhatsApp Inquire' : 'واتساب'}</span>
                      </a>
                      <a href={`tel:${phoneNumber}`} className="btn-inspector-tel">
                        <Phone size={16} />
                        <span>{lang === 'en' ? 'Direct Call' : 'اتصال'}</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Category Navigation Bar (Next / Prev Categories) */}
          <div className="other-categories-bar">
            <h4 className="other-cat-title">
              {lang === 'en' ? 'Explore Other Manpower Role Categories' : 'تصفح الفئات والتخصصات الأخرى'}
            </h4>
            <div className="other-cat-pills">
              {manpowerCategories.map((c) => (
                <Link
                  key={c.id}
                  to={`/manpower/${c.id}`}
                  className={`other-cat-pill ${c.id === category.id ? 'active' : ''}`}
                >
                  <span className="pill-code">{c.code}</span>
                  <span className="pill-name">{c.title}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
