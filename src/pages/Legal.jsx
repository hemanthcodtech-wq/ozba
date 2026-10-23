import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  ShieldCheck, 
  FileText, 
  Truck, 
  Building2, 
  Calendar, 
  Phone, 
  MapPin, 
  Printer, 
  Share2, 
  CheckCircle2, 
  AlertCircle,
  ExternalLink,
  ChevronRight
} from 'lucide-react';
import PageTransition from '../components/PageTransition';
import '../styles/Legal.css';

export default function Legal({ lang, type = 'privacy' }) {
  const location = useLocation();

  // Resolve active tab from URL path or prop
  const getInitialTab = () => {
    if (location.pathname === '/terms') return 'terms';
    if (location.pathname === '/rental-terms') return 'rental';
    if (location.pathname === '/privacy') return 'privacy';
    return type;
  };

  const [activeTab, setActiveTab] = useState(getInitialTab);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setActiveTab(getInitialTab());
  }, [location.pathname, type]);

  const handlePrint = () => {
    window.print();
  };

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const tabMeta = {
    privacy: {
      badgeEn: 'Data Governance & Privacy',
      badgeAr: 'حوكمة وحماية البيانات',
      titleEn: 'Privacy Policy',
      titleAr: 'سياسة الخصوصية وحماية البيانات',
      descEn: 'Official compliance policy on personal and business data protection under Saudi regulations.',
      descAr: 'السياسة الرسمية لجمع ومعالجة وحماية البيانات الشخصية والتجارية وفقاً للأنظمة واللوائح المعتمدة في المملكة العربية السعودية.',
      sectionsCount: 14
    },
    terms: {
      badgeEn: 'Terms of Use & Engagements',
      badgeAr: 'الشروط والأحكام العامة',
      titleEn: 'Terms & Conditions',
      titleAr: 'الشروط والأحكام العامة للتعامل',
      descEn: 'Governing terms for website usage, service quotations, and corporate contract engagements.',
      descAr: 'الشروط المنظمة لاستخدام الموقع الإلكتروني، طلبات عروض الأسعار، والتعاقدات التجارية الرسمية.',
      sectionsCount: 17
    },
    rental: {
      badgeEn: 'Heavy Equipment & Fleet Rental',
      badgeAr: 'لوائح وضوابط تأجير الآليات',
      titleEn: 'Equipment Rental Policies',
      titleAr: 'سياسات وضوابط تأجير المعدات الثقيلة',
      descEn: 'Operational terms, safety protocols, maintenance, and mobilization standards for plant & machinery leasing.',
      descAr: 'المعايير التشغيلية واللوائح الفنية لإجراءات تأجير الآليات والمعدات الثقيلة والمشغلين المعتمدين.',
      sectionsCount: 19
    }
  };

  const currentMeta = tabMeta[activeTab] || tabMeta.privacy;

  return (
    <PageTransition>
      <div className="legal-page-wrapper">
        
        {/* Hero Section */}
        <section className="legal-hero-banner">
          <div className="legal-hero-container">
            <div className="legal-hero-badge">
              <ShieldCheck size={16} />
              {lang === 'en' ? currentMeta.badgeEn : currentMeta.badgeAr}
            </div>
            
            <h1 className="legal-hero-title">
              {lang === 'en' ? currentMeta.titleEn : currentMeta.titleAr}
            </h1>
            
            <p className="legal-hero-desc">
              {lang === 'en' ? currentMeta.descEn : currentMeta.descAr}
            </p>

            <div className="legal-meta-strip">
              <div className="legal-meta-item">
                <Building2 size={16} color="#C5A052" />
                <span><strong>CR:</strong> 2053123342</span>
              </div>
              <div className="legal-meta-item">
                <Calendar size={16} color="#C5A052" />
                <span>{lang === 'en' ? 'Last Updated: 23 October 2026' : 'تاريخ آخر تحديث: ٢٣ أكتوبر ٢٠٢٦'}</span>
              </div>
              <div className="legal-meta-item">
                <FileText size={16} color="#C5A052" />
                <span>{lang === 'en' ? `${currentMeta.sectionsCount} Official Articles` : `${currentMeta.sectionsCount} بنود تفصيلية معتمدة`}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Policy Tab Switcher */}
        <div className="legal-tabs-nav-wrapper">
          <div className="legal-tabs-container">
            <div className="legal-tabs-list">
              <Link 
                to="/privacy"
                className={`legal-tab-btn ${activeTab === 'privacy' ? 'active' : ''}`}
                onClick={() => setActiveTab('privacy')}
              >
                <ShieldCheck size={18} className="tab-icon" color={activeTab === 'privacy' ? '#C5A052' : '#64748B'} />
                {lang === 'en' ? 'Privacy Policy' : 'سياسة الخصوصية'}
              </Link>
              <Link 
                to="/terms"
                className={`legal-tab-btn ${activeTab === 'terms' ? 'active' : ''}`}
                onClick={() => setActiveTab('terms')}
              >
                <FileText size={18} className="tab-icon" color={activeTab === 'terms' ? '#C5A052' : '#64748B'} />
                {lang === 'en' ? 'Terms & Conditions' : 'الشروط والأحكام'}
              </Link>
              <Link 
                to="/rental-terms"
                className={`legal-tab-btn ${activeTab === 'rental' ? 'active' : ''}`}
                onClick={() => setActiveTab('rental')}
              >
                <Truck size={18} className="tab-icon" color={activeTab === 'rental' ? '#C5A052' : '#64748B'} />
                {lang === 'en' ? 'Equipment Rental Policies' : 'سياسات تأجير المعدات'}
              </Link>
            </div>

            <div className="legal-actions-quick">
              <button className="legal-quick-btn" onClick={handlePrint} title="Print Document">
                <Printer size={15} />
                <span>{lang === 'en' ? 'Print' : 'طباعة'}</span>
              </button>
              <button className="legal-quick-btn" onClick={handleShare} title="Copy Link">
                <Share2 size={15} />
                <span>{copied ? (lang === 'en' ? 'Link Copied!' : 'تم النسخ!') : (lang === 'en' ? 'Share Link' : 'مشاركة الرابط')}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Document Content Section */}
        <section className="legal-content-section">
          <div className="legal-document-card">
            <div className="legal-document-inner">

              {/* Corporate Document Header */}
              <div className="legal-doc-header">
                <div>
                  <h2 className="legal-entity-title">
                    <Building2 size={24} color="#C5A052" />
                    ORJWAN ZAKI BIN AHMED AL-RABH GENERAL CONTRACTING EST.
                  </h2>
                  <div className="legal-entity-arabic">
                    مؤسسة ارجوان زكي بن أحمد آل ربح للمقاولات العامة
                  </div>
                  <div className="legal-official-badge">
                    <CheckCircle2 size={14} />
                    {lang === 'en' ? 'Officially Certified Document' : 'وثيقة رسمية معتمدة ومسجلة'}
                  </div>
                </div>

                <div className="legal-doc-details-table">
                  <div className="legal-doc-details-row">
                    <span>{lang === 'en' ? 'Commercial Reg. (CR):' : 'السجل التجاري:'}</span>
                    <span>2053123342</span>
                  </div>
                  <div className="legal-doc-details-row">
                    <span>{lang === 'en' ? 'Headquarters:' : 'المقر الرئيسي:'}</span>
                    <span>Dammam, Eastern Province, KSA</span>
                  </div>
                  <div className="legal-doc-details-row">
                    <span>{lang === 'en' ? 'Effective Date:' : 'تاريخ السريان:'}</span>
                    <span>23 October 2026</span>
                  </div>
                  <div className="legal-doc-details-row">
                    <span>{lang === 'en' ? 'Direct Contact:' : 'الهاتف المباشر:'}</span>
                    <span>0568565143</span>
                  </div>
                </div>
              </div>

              {/* 1. PRIVACY POLICY CONTENT */}
              {activeTab === 'privacy' && (
                <div className="legal-doc-body">
                  
                  <div className="legal-section-block">
                    <div className="legal-section-header">
                      <div className="legal-section-number">1</div>
                      <h3 className="legal-section-title">
                        {lang === 'en' ? '1. Introduction' : '١. مقدمة وتمهيد'}
                      </h3>
                    </div>
                    <div className="legal-section-body">
                      <p>
                        ORJWAN ZAKI BIN AHMED AL-RABH GENERAL CONTRACTING EST. (“ORJWAN,” “we,” “our,” or “us”) respects your privacy and is committed to protecting the personal and business information you provide when visiting our website, submitting an enquiry, requesting a quotation, or contacting our team.
                      </p>
                      <p>
                        This Privacy Policy explains how we collect, use, store, disclose, and protect information in connection with our website and business services.
                      </p>
                    </div>
                  </div>

                  <div className="legal-section-block">
                    <div className="legal-section-header">
                      <div className="legal-section-number">2</div>
                      <h3 className="legal-section-title">
                        {lang === 'en' ? '2. Information We Collect' : '٢. البيانات والمعلومات التي نجمعها'}
                      </h3>
                    </div>
                    <div className="legal-section-body">
                      <p>Depending on your interaction with us, we may collect the following information:</p>
                      <ul className="legal-bullet-list">
                        <li><strong>Contact information:</strong> Name, company name, telephone number, email address, and business address.</li>
                        <li><strong>Project information:</strong> Project location, service requirements, equipment specifications, manpower requirements, rental duration, and other details you submit.</li>
                        <li><strong>Quotation and booking information:</strong> Requested services, delivery requirements, schedules, and relevant correspondence.</li>
                        <li><strong>Technical information:</strong> IP address, browser type, device information, website usage data, and cookies or similar technologies, where enabled.</li>
                        <li><strong>Business documentation:</strong> Company details or supporting documents that you voluntarily provide when necessary to assess a business request.</li>
                      </ul>
                      <div className="legal-callout-box legal-callout-danger">
                        <AlertCircle size={20} style={{ flexShrink: 0, marginTop: 2 }} />
                        <div>
                          <strong>Important Notice:</strong> Please do not submit passwords, payment-card details, or unnecessary sensitive personal information through general enquiry forms.
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="legal-section-block">
                    <div className="legal-section-header">
                      <div className="legal-section-number">3</div>
                      <h3 className="legal-section-title">
                        {lang === 'en' ? '3. How We Use Your Information' : '٣. كيفية استخدام البيانات والمعلومات'}
                      </h3>
                    </div>
                    <div className="legal-section-body">
                      <p>We may use collected information to:</p>
                      <ul className="legal-bullet-list">
                        <li>Respond to enquiries and requests for quotations.</li>
                        <li>Assess manpower, equipment rental, and contracting requirements.</li>
                        <li>Prepare proposals and coordinate service delivery.</li>
                        <li>Communicate about project schedules, changes, and customer requests.</li>
                        <li>Maintain business records and manage customer relationships.</li>
                        <li>Improve our website, services, security, and user experience.</li>
                        <li>Prevent fraud, investigate misuse, and protect our legitimate business interests.</li>
                        <li>Meet applicable legal, regulatory, accounting, and contractual obligations.</li>
                      </ul>
                      <p>
                        We will use personal information for purposes consistent with the reason it was collected and applicable law.
                      </p>
                    </div>
                  </div>

                  <div className="legal-section-block">
                    <div className="legal-section-header">
                      <div className="legal-section-number">4</div>
                      <h3 className="legal-section-title">
                        {lang === 'en' ? '4. Legal Basis for Processing' : '٤. الأساس النظامي لمعالجة البيانات'}
                      </h3>
                    </div>
                    <div className="legal-section-body">
                      <p>
                        Where required by applicable law, we process personal information on an appropriate legal basis, such as your consent, steps taken at your request before entering into a contract, performance of a contract, compliance with legal obligations, or another lawful basis.
                      </p>
                      <p>
                        You may withdraw consent where processing relies on consent, subject to applicable legal requirements and the consequences of withdrawal.
                      </p>
                    </div>
                  </div>

                  <div className="legal-section-block">
                    <div className="legal-section-header">
                      <div className="legal-section-number">5</div>
                      <h3 className="legal-section-title">
                        {lang === 'en' ? '5. Sharing of Information' : '٥. مشاركة الإفصاح عن المعلومات'}
                      </h3>
                    </div>
                    <div className="legal-section-body">
                      <p><strong>We do not sell personal information as a business practice.</strong></p>
                      <p>We may share relevant information, where necessary and lawful, with:</p>
                      <ul className="legal-bullet-list">
                        <li>Authorized employees and representatives.</li>
                        <li>Service providers supporting website hosting, email, communications, security, or business operations.</li>
                        <li>Project partners, subcontractors, or suppliers involved in fulfilling your request.</li>
                        <li>Professional advisers, auditors, insurers, or legal representatives.</li>
                        <li>Government authorities or other parties where disclosure is required or permitted by applicable law.</li>
                      </ul>
                      <p>We limit disclosures to information reasonably necessary for the relevant purpose.</p>
                    </div>
                  </div>

                  <div className="legal-section-block">
                    <div className="legal-section-header">
                      <div className="legal-section-number">6</div>
                      <h3 className="legal-section-title">
                        {lang === 'en' ? '6. Data Storage and Security' : '٦. تخزين البيانات وأمن المعلومات'}
                      </h3>
                    </div>
                    <div className="legal-section-body">
                      <p>
                        We take reasonable organizational and technical measures designed to protect information against unauthorized access, disclosure, alteration, loss, or misuse.
                      </p>
                      <p>
                        Access to personal information is restricted to authorized persons who need it for legitimate business purposes.
                      </p>
                      <p>
                        No website, electronic transmission, or storage system can be guaranteed to be completely secure. We therefore cannot promise absolute security.
                      </p>
                    </div>
                  </div>

                  <div className="legal-section-block">
                    <div className="legal-section-header">
                      <div className="legal-section-number">7</div>
                      <h3 className="legal-section-title">
                        {lang === 'en' ? '7. Data Retention' : '٧. الاحتفاظ بالبيانات والمدة النظامية'}
                      </h3>
                    </div>
                    <div className="legal-section-body">
                      <p>
                        We retain personal information only for as long as reasonably necessary for the purposes described in this Policy, including responding to enquiries, maintaining contractual and business records, resolving disputes, and meeting applicable legal or regulatory retention requirements.
                      </p>
                      <p>
                        When information is no longer required, we will take appropriate steps to delete it, anonymize it, or securely dispose of it, subject to applicable law.
                      </p>
                    </div>
                  </div>

                  <div className="legal-section-block">
                    <div className="legal-section-header">
                      <div className="legal-section-number">8</div>
                      <h3 className="legal-section-title">
                        {lang === 'en' ? '8. Cookies and Website Technologies' : '٨. ملفات تعريف الارتباط والتقنيات التقنية'}
                      </h3>
                    </div>
                    <div className="legal-section-body">
                      <p>
                        Our website may use essential cookies or similar technologies to support basic functionality, security, and performance.
                      </p>
                      <p>
                        If analytics, advertising, or other optional tracking technologies are implemented, we will provide relevant information and obtain consent where required by applicable law. You can also manage cookies through your browser settings, although disabling certain cookies may affect website functionality.
                      </p>
                    </div>
                  </div>

                  <div className="legal-section-block">
                    <div className="legal-section-header">
                      <div className="legal-section-number">9</div>
                      <h3 className="legal-section-title">
                        {lang === 'en' ? '9. International Data Transfers' : '٩. نقل البيانات عبر الحدود'}
                      </h3>
                    </div>
                    <div className="legal-section-body">
                      <p>
                        If personal information is transferred outside Saudi Arabia through our systems or service providers, we will handle the transfer in accordance with applicable Saudi data protection requirements, including any required safeguards or procedures.
                      </p>
                    </div>
                  </div>

                  <div className="legal-section-block">
                    <div className="legal-section-header">
                      <div className="legal-section-number">10</div>
                      <h3 className="legal-section-title">
                        {lang === 'en' ? '10. Your Privacy Rights' : '١٠. حقوق الخصوصية للمستخدم والعميل'}
                      </h3>
                    </div>
                    <div className="legal-section-body">
                      <p>
                        Subject to applicable law, you may have the right to request access to your personal information, obtain a copy, request correction or completion, request deletion where legally available, withdraw consent where applicable, or exercise other rights provided by law.
                      </p>
                      <p>
                        We may need to verify your identity before processing a request. Certain records may need to be retained to satisfy legal obligations or establish, exercise, or defend legal claims.
                      </p>
                    </div>
                  </div>

                  <div className="legal-section-block">
                    <div className="legal-section-header">
                      <div className="legal-section-number">11</div>
                      <h3 className="legal-section-title">
                        {lang === 'en' ? '11. Third-Party Websites' : '١١. المواقع والخدمات التابعة لأطراف ثالثة'}
                      </h3>
                    </div>
                    <div className="legal-section-body">
                      <p>
                        Our website may contain links to third-party websites, maps, communication platforms, or service providers. Those services operate under their own privacy policies and practices. We encourage you to review their policies before providing information.
                      </p>
                    </div>
                  </div>

                  <div className="legal-section-block">
                    <div className="legal-section-header">
                      <div className="legal-section-number">12</div>
                      <h3 className="legal-section-title">
                        {lang === 'en' ? "12. Children's Privacy" : '١٢. خصوصية القاصرين والأطفال'}
                      </h3>
                    </div>
                    <div className="legal-section-body">
                      <p>
                        Our website and services are intended for business and professional use and are not directed at children. We do not knowingly seek to collect children's personal information through general business enquiry forms.
                      </p>
                    </div>
                  </div>

                  <div className="legal-section-block">
                    <div className="legal-section-header">
                      <div className="legal-section-number">13</div>
                      <h3 className="legal-section-title">
                        {lang === 'en' ? '13. Changes to This Policy' : '١٣. تحديث وتعديل سياسة الخصوصية'}
                      </h3>
                    </div>
                    <div className="legal-section-body">
                      <p>
                        We may update this Privacy Policy when our website, business operations, or legal requirements change. The revised version will be published on this page with an updated date.
                      </p>
                    </div>
                  </div>

                  <div className="legal-section-block">
                    <div className="legal-section-header">
                      <div className="legal-section-number">14</div>
                      <h3 className="legal-section-title">
                        {lang === 'en' ? '14. Contact Us' : '١٤. التواصل والاستفسارات الرسمية'}
                      </h3>
                    </div>
                    <div className="legal-section-body">
                      <p>For questions, requests, or concerns relating to this Privacy Policy, contact us:</p>
                      <div className="legal-callout-box legal-callout-info">
                        <div>
                          <p><strong>Company:</strong> ORJWAN ZAKI BIN AHMED AL-RABH GENERAL CONTRACTING EST.</p>
                          <p><strong>Commercial Registration (CR) No.:</strong> 2053123342</p>
                          <p><strong>Address:</strong> EDJC8593, 1st Floor, 8593 Al Khazzan St, Dammam 32242–3513, Saudi Arabia</p>
                          <p><strong>Phone:</strong> 0568565143</p>
                          <p style={{ marginTop: 8, fontSize: '0.9rem', color: '#1E3A8A' }}>
                            <em>* Please include “Privacy Policy Request” in the subject of your communication where applicable.</em>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              )}

              {/* 2. TERMS & CONDITIONS CONTENT */}
              {activeTab === 'terms' && (
                <div className="legal-doc-body">
                  
                  <div className="legal-section-block">
                    <div className="legal-section-header">
                      <div className="legal-section-number">1</div>
                      <h3 className="legal-section-title">
                        {lang === 'en' ? '1. Introduction' : '١. مقدمة وأحكام عامة'}
                      </h3>
                    </div>
                    <div className="legal-section-body">
                      <p>
                        These Terms & Conditions govern access to and use of the website operated by ORJWAN ZAKI BIN AHMED AL-RABH GENERAL CONTRACTING EST. (“ORJWAN,” “we,” “our,” or “us”).
                      </p>
                      <p>
                        By accessing this website or submitting a service enquiry, you agree to use the website lawfully and in accordance with these Terms. If you do not agree, please discontinue use of the website.
                      </p>
                      <p>
                        Any signed contract, accepted quotation, purchase order, or project-specific agreement may contain additional terms. Where legally valid and applicable, the specific agreement will govern the relevant transaction if it conflicts with these general website Terms.
                      </p>
                    </div>
                  </div>

                  <div className="legal-section-block">
                    <div className="legal-section-header">
                      <div className="legal-section-number">2</div>
                      <h3 className="legal-section-title">
                        {lang === 'en' ? '2. Company Information' : '٢. بيانات المنشأة الرسمية'}
                      </h3>
                    </div>
                    <div className="legal-section-body">
                      <ul className="legal-bullet-list">
                        <li><strong>Business Name:</strong> ORJWAN ZAKI BIN AHMED AL-RABH GENERAL CONTRACTING EST.</li>
                        <li><strong>Commercial Registration (CR) No.:</strong> 2053123342</li>
                        <li><strong>Address:</strong> EDJC8593, 1st Floor, 8593 Al Khazzan St, Dammam 32242–3513, Saudi Arabia</li>
                        <li><strong>Phone:</strong> 0568565143</li>
                      </ul>
                    </div>
                  </div>

                  <div className="legal-section-block">
                    <div className="legal-section-header">
                      <div className="legal-section-number">3</div>
                      <h3 className="legal-section-title">
                        {lang === 'en' ? '3. Website Information' : '٣. طبيعة معلومات الموقع الإلكتروني'}
                      </h3>
                    </div>
                    <div className="legal-section-body">
                      <p>
                        The website provides general information about our professional support services, manpower supply, equipment rental, and general contracting and subcontracting activities.
                      </p>
                      <p>
                        Descriptions, photographs, equipment listings, and service information are provided for general informational purposes. They do not constitute a binding offer, guarantee of availability, or commitment to provide a specific service unless confirmed in writing by ORJWAN.
                      </p>
                    </div>
                  </div>

                  <div className="legal-section-block">
                    <div className="legal-section-header">
                      <div className="legal-section-number">4</div>
                      <h3 className="legal-section-title">
                        {lang === 'en' ? '4. Enquiries and Quotations' : '٤. الاستفسارات وعروض الأسعار'}
                      </h3>
                    </div>
                    <div className="legal-section-body">
                      <p>
                        Submitting an enquiry or quotation request does not automatically create a contract or confirm a booking.
                      </p>
                      <p>Any quotation we issue may specify:</p>
                      <ul className="legal-bullet-list">
                        <li>Service scope and equipment specifications.</li>
                        <li>Manpower requirements, where applicable.</li>
                        <li>Rental or project duration.</li>
                        <li>Pricing, taxes, delivery, mobilization, and other charges.</li>
                        <li>Payment terms and quotation validity.</li>
                        <li>Customer responsibilities and applicable exclusions.</li>
                      </ul>
                      <p>
                        A booking or project will be considered confirmed only when the required acceptance, documentation, and approvals have been completed as communicated by ORJWAN.
                      </p>
                    </div>
                  </div>

                  <div className="legal-section-block">
                    <div className="legal-section-header">
                      <div className="legal-section-number">5</div>
                      <h3 className="legal-section-title">
                        {lang === 'en' ? '5. Service Availability' : '٥. توفر الخدمات والآليات'}
                      </h3>
                    </div>
                    <div className="legal-section-body">
                      <p>
                        Services and equipment are subject to availability, location, technical suitability, operational requirements, personnel availability, and applicable approvals.
                      </p>
                      <p>
                        We reserve the right to clarify, decline, or propose alternatives for requests that we cannot reasonably fulfil, subject to any existing contractual obligations and applicable law.
                      </p>
                    </div>
                  </div>

                  <div className="legal-section-block">
                    <div className="legal-section-header">
                      <div className="legal-section-number">6</div>
                      <h3 className="legal-section-title">
                        {lang === 'en' ? '6. Customer Responsibilities' : '٦. مسؤوليات العميل والمستأجر'}
                      </h3>
                    </div>
                    <div className="legal-section-body">
                      <p>Customers must:</p>
                      <ul className="legal-bullet-list">
                        <li>Provide accurate and complete contact, company, and project information.</li>
                        <li>Clearly communicate their requirements and expected schedules.</li>
                        <li>Obtain site access, permits, approvals, and permissions that are their responsibility under the applicable agreement.</li>
                        <li>Provide a safe and suitable worksite where required by the contract.</li>
                        <li>Use rented equipment only for its intended and authorized purpose.</li>
                        <li>Follow applicable safety requirements and lawful instructions.</li>
                        <li>Make payments in accordance with the agreed quotation or contract.</li>
                        <li>Avoid submitting false, misleading, unlawful, or unauthorized information.</li>
                      </ul>
                      <p>
                        The allocation of site preparation, operator provision, transportation, permits, fuel, insurance, maintenance, and other responsibilities must be confirmed in the applicable quotation or contract.
                      </p>
                    </div>
                  </div>

                  <div className="legal-section-block">
                    <div className="legal-section-header">
                      <div className="legal-section-number">7</div>
                      <h3 className="legal-section-title">
                        {lang === 'en' ? '7. Pricing and Payments' : '٧. الأسعار وضوابط السداد'}
                      </h3>
                    </div>
                    <div className="legal-section-body">
                      <p>
                        Prices, payment schedules, deposits, taxes, transportation fees, mobilization charges, overtime rates, and other costs will be stated in the applicable quotation or agreement.
                      </p>
                      <p>
                        No website price should be treated as final unless expressly identified as a binding price by ORJWAN.
                      </p>
                      <p>
                        Invoices must be paid according to the agreed terms. Any late-payment consequences, deposits, deductions, or additional charges must be specified in the applicable agreement and handled in accordance with applicable law.
                      </p>
                    </div>
                  </div>

                  <div className="legal-section-block">
                    <div className="legal-section-header">
                      <div className="legal-section-number">8</div>
                      <h3 className="legal-section-title">
                        {lang === 'en' ? '8. Cancellations and Changes' : '٨. الإلغاء والتعديلات'}
                      </h3>
                    </div>
                    <div className="legal-section-body">
                      <p>
                        Requests to change or cancel a booking, quotation, or project must be communicated through the contact details provided by ORJWAN.
                      </p>
                      <p>
                        The applicable quotation or signed agreement will determine whether notice periods, cancellation charges, rescheduling costs, or refunds apply. We will not treat an unspecified cancellation charge as automatically payable.
                      </p>
                    </div>
                  </div>

                  <div className="legal-section-block">
                    <div className="legal-section-header">
                      <div className="legal-section-number">9</div>
                      <h3 className="legal-section-title">
                        {lang === 'en' ? '9. Safety and Legal Compliance' : '٩. السلامة والامتثال النظامي'}
                      </h3>
                    </div>
                    <div className="legal-section-body">
                      <p>
                        All parties must comply with applicable laws, site rules, safety requirements, and relevant contractual obligations.
                      </p>
                      <p>
                        Customers must not request unlawful work or use equipment or services in a way that creates an unreasonable safety risk. Responsibilities for supervision, operator qualifications, protective equipment, permits, inspections, and site safety will be set out in the relevant agreement.
                      </p>
                    </div>
                  </div>

                  <div className="legal-section-block">
                    <div className="legal-section-header">
                      <div className="legal-section-number">10</div>
                      <h3 className="legal-section-title">
                        {lang === 'en' ? '10. Intellectual Property' : '١٠. حقوق الملكية الفكرية'}
                      </h3>
                    </div>
                    <div className="legal-section-body">
                      <p>
                        Unless otherwise stated, website content, text, branding, logos, graphics, and original materials are owned by ORJWAN or used with permission.
                      </p>
                      <p>
                        You may not reproduce, distribute, modify, publish, or commercially exploit our website materials without prior authorization, except where permitted by applicable law.
                      </p>
                    </div>
                  </div>

                  <div className="legal-section-block">
                    <div className="legal-section-header">
                      <div className="legal-section-number">11</div>
                      <h3 className="legal-section-title">
                        {lang === 'en' ? '11. Third-Party Links' : '١١. الروابط الخارجية'}
                      </h3>
                    </div>
                    <div className="legal-section-body">
                      <p>
                        Links to third-party websites or services are provided for convenience. ORJWAN does not control all third-party content, availability, or privacy practices and is not responsible for them except to the extent required by applicable law.
                      </p>
                    </div>
                  </div>

                  <div className="legal-section-block">
                    <div className="legal-section-header">
                      <div className="legal-section-number">12</div>
                      <h3 className="legal-section-title">
                        {lang === 'en' ? '12. Limitation of Liability' : '١٢. حدود المسؤولية'}
                      </h3>
                    </div>
                    <div className="legal-section-body">
                      <p>
                        To the extent permitted by applicable law, ORJWAN will not be responsible for losses arising solely from reliance on general website information, temporary website unavailability, or third-party services outside our reasonable control.
                      </p>
                      <p>
                        Nothing in these Terms excludes or limits liability where such exclusion or limitation is prohibited by law, including any liability that cannot lawfully be excluded. Any additional liability allocation must be stated in the applicable signed agreement.
                      </p>
                    </div>
                  </div>

                  <div className="legal-section-block">
                    <div className="legal-section-header">
                      <div className="legal-section-number">13</div>
                      <h3 className="legal-section-title">
                        {lang === 'en' ? '13. Force Majeure' : '١٣. القوة القاهرة'}
                      </h3>
                    </div>
                    <div className="legal-section-body">
                      <p>
                        Where permitted by law and subject to any applicable contract, a party may be excused from affected obligations to the extent performance is prevented or materially delayed by circumstances beyond its reasonable control, such as natural disasters, government restrictions, major disruptions, or other qualifying events.
                      </p>
                      <p>
                        The affected party should notify the other party as soon as reasonably practicable and take reasonable steps to reduce the impact.
                      </p>
                    </div>
                  </div>

                  <div className="legal-section-block">
                    <div className="legal-section-header">
                      <div className="legal-section-number">14</div>
                      <h3 className="legal-section-title">
                        {lang === 'en' ? '14. Privacy' : '١٤. الخصوصية وحماية البيانات'}
                      </h3>
                    </div>
                    <div className="legal-section-body">
                      <p>
                        Personal information submitted through the website will be handled in accordance with our Privacy Policy and applicable data protection requirements.
                      </p>
                    </div>
                  </div>

                  <div className="legal-section-block">
                    <div className="legal-section-header">
                      <div className="legal-section-number">15</div>
                      <h3 className="legal-section-title">
                        {lang === 'en' ? '15. Governing Law and Disputes' : '١٥. القانون الحاكم وتسوية المنازعات'}
                      </h3>
                    </div>
                    <div className="legal-section-body">
                      <p>
                        These Terms are intended to operate subject to the laws and regulations applicable in the Kingdom of Saudi Arabia.
                      </p>
                      <p>
                        The parties should first attempt to resolve disputes through good-faith discussions. Any unresolved dispute will be handled by the competent authority or court in accordance with applicable law and any valid dispute-resolution agreement.
                      </p>
                    </div>
                  </div>

                  <div className="legal-section-block">
                    <div className="legal-section-header">
                      <div className="legal-section-number">16</div>
                      <h3 className="legal-section-title">
                        {lang === 'en' ? '16. Changes to These Terms' : '١٦. التعديل على الشروط والأحكام'}
                      </h3>
                    </div>
                    <div className="legal-section-body">
                      <p>
                        We may revise these Terms from time to time. Updated Terms will be published on this page with a revised date. Changes will apply as permitted by law and will not override an existing contract where that contract remains controlling.
                      </p>
                    </div>
                  </div>

                  <div className="legal-section-block">
                    <div className="legal-section-header">
                      <div className="legal-section-number">17</div>
                      <h3 className="legal-section-title">
                        {lang === 'en' ? '17. Contact Information' : '١٧. معلومات التواصل الرسمية'}
                      </h3>
                    </div>
                    <div className="legal-section-body">
                      <p>For questions about these Terms, contact:</p>
                      <div className="legal-callout-box legal-callout-info">
                        <div>
                          <p><strong>ORJWAN ZAKI BIN AHMED AL-RABH GENERAL CONTRACTING EST.</strong></p>
                          <p><strong>CR No.:</strong> 2053123342</p>
                          <p><strong>Address:</strong> EDJC8593, 1st Floor, 8593 Al Khazzan St, Dammam 32242–3513, Saudi Arabia</p>
                          <p><strong>Phone:</strong> 0568565143</p>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              )}

              {/* 3. EQUIPMENT RENTAL POLICIES CONTENT */}
              {activeTab === 'rental' && (
                <div className="legal-doc-body">
                  
                  <div className="legal-section-block">
                    <div className="legal-section-header">
                      <div className="legal-section-number">1</div>
                      <h3 className="legal-section-title">
                        {lang === 'en' ? '1. Purpose' : '١. الهدف والآليات المشمولة'}
                      </h3>
                    </div>
                    <div className="legal-section-body">
                      <p>
                        These Equipment Rental Policies describe the general requirements for renting equipment through ORJWAN ZAKI BIN AHMED AL-RABH GENERAL CONTRACTING EST. (“ORJWAN”).
                      </p>
                      <p>
                        Our equipment rental offerings may include cranes, buses, ambulances, dump trucks, trailers, water tankers, manlifts, fuel tankers, prime movers, loaders, bobcats, dozers, compressors, welding machines, excavators, backhoe loaders, graders, generators, compactors, forklifts, and other equipment, subject to availability and the specific quotation.
                      </p>
                      <p>
                        The terms agreed in a confirmed quotation or signed rental agreement take precedence over these general policies where legally valid and applicable.
                      </p>
                    </div>
                  </div>

                  <div className="legal-section-block">
                    <div className="legal-section-header">
                      <div className="legal-section-number">2</div>
                      <h3 className="legal-section-title">
                        {lang === 'en' ? '2. Rental Enquiries and Reservations' : '٢. الاستفسارات وحجوزات المعدات'}
                      </h3>
                    </div>
                    <div className="legal-section-body">
                      <p>Customers should provide the following information when requesting equipment:</p>
                      <ul className="legal-bullet-list">
                        <li>Equipment type and required specifications.</li>
                        <li>Project or delivery location.</li>
                        <li>Intended use and site conditions.</li>
                        <li>Requested start date and rental duration.</li>
                        <li>Required operating hours or shift pattern.</li>
                        <li>Whether an operator or driver is required.</li>
                        <li>Transportation, mobilization, and demobilization requirements.</li>
                        <li>Any site access, certification, or safety requirements.</li>
                      </ul>
                      <p>
                        An enquiry does not guarantee availability. A reservation is confirmed only after ORJWAN communicates acceptance and the required contractual and payment arrangements have been completed.
                      </p>
                    </div>
                  </div>

                  <div className="legal-section-block">
                    <div className="legal-section-header">
                      <div className="legal-section-number">3</div>
                      <h3 className="legal-section-title">
                        {lang === 'en' ? '3. Quotation and Rental Charges' : '٣. عروض الأسعار وتكاليف الإيجار'}
                      </h3>
                    </div>
                    <div className="legal-section-body">
                      <p>The quotation or rental agreement will specify the applicable charges, which may include:</p>
                      <ul className="legal-bullet-list">
                        <li>Rental rate and billing period.</li>
                        <li>Minimum rental duration, if any.</li>
                        <li>Delivery, mobilization, and demobilization charges.</li>
                        <li>Operator or driver charges, if applicable.</li>
                        <li>Fuel, consumables, and maintenance responsibilities.</li>
                        <li>Overtime, additional shifts, standby, or waiting charges, where agreed.</li>
                        <li>Taxes and any applicable deposit.</li>
                        <li>Charges for agreed additional services or approved extensions.</li>
                      </ul>
                      <p>
                        All applicable rates and chargeable conditions must be disclosed in the quotation or rental agreement. Additional charges will not be assumed merely because they are mentioned in this general policy.
                      </p>
                    </div>
                  </div>

                  <div className="legal-section-block">
                    <div className="legal-section-header">
                      <div className="legal-section-number">4</div>
                      <h3 className="legal-section-title">
                        {lang === 'en' ? '4. Rental Period and Extensions' : '٤. مدة الإيجار والتمديد'}
                      </h3>
                    </div>
                    <div className="legal-section-body">
                      <p>
                        The rental period begins and ends as specified in the accepted quotation or agreement.
                      </p>
                      <p>
                        Customers who need to extend a rental must request approval before the scheduled return or off-hire time. Extensions are subject to equipment availability and written confirmation of any revised charges.
                      </p>
                      <p>
                        If the customer expects to return equipment early or requires a change of schedule, they must notify ORJWAN. Any minimum rental commitment or early-return adjustment will be governed by the agreed rental terms.
                      </p>
                    </div>
                  </div>

                  <div className="legal-section-block">
                    <div className="legal-section-header">
                      <div className="legal-section-number">5</div>
                      <h3 className="legal-section-title">
                        {lang === 'en' ? '5. Delivery, Collection, and Site Access' : '٥. التوصيل، الاستلام، ودخول الموقع'}
                      </h3>
                    </div>
                    <div className="legal-section-body">
                      <p>
                        The parties will agree on the delivery location, delivery schedule, site access requirements, and collection arrangements before dispatch.
                      </p>
                      <p>
                        The customer must ensure that the site is reasonably accessible and suitable for the equipment, including any necessary access permissions, ground conditions, clearance, loading areas, and safe operating space within the customer's responsibility.
                      </p>
                      <p>
                        Responsibility for transportation, permits, lifting plans, traffic management, site preparation, and related expenses will be specified in the quotation or rental agreement.
                      </p>
                      <p>
                        Delays caused by site access, customer readiness, weather, or other circumstances will be handled according to the agreed contract and applicable law.
                      </p>
                    </div>
                  </div>

                  <div className="legal-section-block">
                    <div className="legal-section-header">
                      <div className="legal-section-number">6</div>
                      <h3 className="legal-section-title">
                        {lang === 'en' ? '6. Equipment Condition and Inspection' : '٦. حالة المعدة والفحص الفني'}
                      </h3>
                    </div>
                    <div className="legal-section-body">
                      <p>
                        Where practicable, the equipment's condition, identification, accessories, and any visible damage should be recorded at delivery and return.
                      </p>
                      <p>
                        Customers should report visible damage, missing accessories, defects, or operational concerns promptly and before using the equipment.
                      </p>
                      <p>
                        Equipment must not be operated when it appears unsafe or defective. Customers should stop use when reasonably necessary for safety and contact ORJWAN for instructions.
                      </p>
                      <p>
                        Any agreed inspection, testing, certification, and handover documentation will be handled as specified in the rental agreement and applicable requirements.
                      </p>
                    </div>
                  </div>

                  <div className="legal-section-block">
                    <div className="legal-section-header">
                      <div className="legal-section-number">7</div>
                      <h3 className="legal-section-title">
                        {lang === 'en' ? '7. Operation and Authorized Use' : '٧. التشغيل والاستخدام المصرح به'}
                      </h3>
                    </div>
                    <div className="legal-section-body">
                      <p>
                        Equipment must be used only for its intended purpose and within the manufacturer's operating limits and applicable safety requirements.
                      </p>
                      <p>
                        Only suitably qualified, trained, and authorized operators may operate equipment where such qualifications are required.
                      </p>
                      <p>
                        The rental agreement must clarify whether the equipment is supplied with an operator or without one, and which party is responsible for operator supervision, fuel, daily checks, consumables, and operational control.
                      </p>
                      <div className="legal-callout-box legal-callout-danger">
                        <AlertCircle size={20} style={{ flexShrink: 0, marginTop: 2 }} />
                        <div>
                          <strong>Customers must not:</strong>
                          <ul style={{ margin: '6px 0 0', paddingLeft: 18 }}>
                            <li>Use equipment beyond its rated capacity or intended purpose.</li>
                            <li>Remove, bypass, or alter safety devices.</li>
                            <li>Make unauthorized repairs or modifications.</li>
                            <li>Transfer, sub-rent, or relocate equipment without required written approval.</li>
                            <li>Permit unauthorized persons to operate or access equipment.</li>
                            <li>Use equipment in unlawful or unsafe conditions.</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="legal-section-block">
                    <div className="legal-section-header">
                      <div className="legal-section-number">8</div>
                      <h3 className="legal-section-title">
                        {lang === 'en' ? '8. Safety and Site Requirements' : '٨. اشتراطات السلامة وموقع العمل'}
                      </h3>
                    </div>
                    <div className="legal-section-body">
                      <p>
                        Both parties must fulfil the safety responsibilities allocated to them under the rental agreement and applicable law.
                      </p>
                      <p>
                        The customer must communicate relevant site hazards and restrictions before equipment is deployed. Where the customer controls the site, the customer must meet its applicable site-safety obligations.
                      </p>
                      <p>
                        The parties must clarify responsibility for risk assessments, work permits, operator training, personal protective equipment, supervision, lifting or operating plans, and any required inspections or certifications.
                      </p>
                      <p>
                        ORJWAN may require unsafe operations to stop where there is a reasonable safety concern, subject to applicable law and contractual obligations.
                      </p>
                    </div>
                  </div>

                  <div className="legal-section-block">
                    <div className="legal-section-header">
                      <div className="legal-section-number">9</div>
                      <h3 className="legal-section-title">
                        {lang === 'en' ? '9. Maintenance, Breakdown, and Repairs' : '٩. الصيانة، الأعطال، والإصلاحات'}
                      </h3>
                    </div>
                    <div className="legal-section-body">
                      <p>
                        The rental agreement will identify responsibility for routine maintenance, servicing, repairs, consumables, and emergency support.
                      </p>
                      <p>
                        Customers must promptly report breakdowns, warning indicators, damage, or abnormal operation. Customers must not authorize third-party repairs or make significant repairs without approval, except where immediate action is reasonably necessary to protect life or prevent further damage and is permitted by law.
                      </p>
                      <p>
                        If equipment becomes unavailable due to a breakdown, the parties will follow the remedies and procedures stated in the agreement, which may include inspection, repair, replacement equipment where available, rental adjustments, or other agreed arrangements.
                      </p>
                    </div>
                  </div>

                  <div className="legal-section-block">
                    <div className="legal-section-header">
                      <div className="legal-section-number">10</div>
                      <h3 className="legal-section-title">
                        {lang === 'en' ? '10. Fuel and Consumables' : '١٠. الوقود والمستهلكات التشغيلية'}
                      </h3>
                    </div>
                    <div className="legal-section-body">
                      <p>
                        The quotation or rental agreement will specify which party supplies fuel, lubricants, gas, welding consumables, and other operating materials.
                      </p>
                      <p>
                        Any fuel-return requirement, refuelling charge, consumption allowance, or related fee must be agreed before the rental begins.
                      </p>
                    </div>
                  </div>

                  <div className="legal-section-block">
                    <div className="legal-section-header">
                      <div className="legal-section-number">11</div>
                      <h3 className="legal-section-title">
                        {lang === 'en' ? '11. Damage, Loss, Theft, and Insurance' : '١١. الأضرار، الفقد، السرقة، والتأمين'}
                      </h3>
                    </div>
                    <div className="legal-section-body">
                      <p>
                        The rental agreement should state the parties' responsibilities for loss, theft, damage, insurance, deductibles, and reporting requirements.
                      </p>
                      <p>
                        Customers must promptly notify ORJWAN of any accident, theft, loss, or damage involving rented equipment and cooperate with reasonable investigation and reporting requirements.
                      </p>
                      <p>
                        Responsibility for an incident will be determined by the agreement, the circumstances, applicable insurance arrangements, and applicable law. These policies do not automatically make either party liable for every incident.
                      </p>
                    </div>
                  </div>

                  <div className="legal-section-block">
                    <div className="legal-section-header">
                      <div className="legal-section-number">12</div>
                      <h3 className="legal-section-title">
                        {lang === 'en' ? '12. Cancellation and Rescheduling' : '١٢. الإلغاء وإعادة الجدولة'}
                      </h3>
                    </div>
                    <div className="legal-section-body">
                      <p>
                        Customers should submit cancellation or rescheduling requests in writing as early as possible.
                      </p>
                      <p>
                        Any deposit refund, cancellation fee, transport cost, mobilization cost, minimum rental charge, or rescheduling fee will be governed by the accepted quotation or rental agreement and applicable law.
                      </p>
                      <p>
                        If ORJWAN cannot supply confirmed equipment, the parties will discuss an appropriate alternative, revised schedule, or refund in accordance with the agreement and applicable law.
                      </p>
                    </div>
                  </div>

                  <div className="legal-section-block">
                    <div className="legal-section-header">
                      <div className="legal-section-number">13</div>
                      <h3 className="legal-section-title">
                        {lang === 'en' ? '13. Return and Off-Hire' : '١٣. الإرجاع وإنهاء التأجير (Off-Hire)'}
                      </h3>
                    </div>
                    <div className="legal-section-body">
                      <p>
                        Customers must make the equipment available for collection or return it as specified in the agreement.
                      </p>
                      <p>
                        At off-hire, the equipment and any supplied accessories should be returned in the agreed condition, allowing for reasonable wear and tear from proper use.
                      </p>
                      <p>
                        The parties should record the return date and time, condition, accessories, fuel status where relevant, and any reported damage. Rental charges will stop or continue according to the agreed off-hire procedure, not merely based on an informal or unconfirmed request.
                      </p>
                    </div>
                  </div>

                  <div className="legal-section-block">
                    <div className="legal-section-header">
                      <div className="legal-section-number">14</div>
                      <h3 className="legal-section-title">
                        {lang === 'en' ? '14. Late Return and Unauthorized Use' : '١٤. التأخير في الإرجاع والاستخدام غير المصرح'}
                      </h3>
                    </div>
                    <div className="legal-section-body">
                      <p>
                        Customers must notify ORJWAN immediately if equipment cannot be returned or made available at the agreed time.
                      </p>
                      <p>
                        Any additional rental period, late-return charge, standby charge, or recovery expense must be set out in the accepted rental agreement and applied in accordance with applicable law.
                      </p>
                    </div>
                  </div>

                  <div className="legal-section-block">
                    <div className="legal-section-header">
                      <div className="legal-section-number">15</div>
                      <h3 className="legal-section-title">
                        {lang === 'en' ? '15. Customer-Supplied Information' : '١٥. دقة البيانات المقدمة من العميل'}
                      </h3>
                    </div>
                    <div className="legal-section-body">
                      <p>
                        Customers must provide accurate information about the intended work, site conditions, load requirements, operating environment, and required equipment capacity.
                      </p>
                      <p>
                        ORJWAN may request clarification or recommend a different equipment specification where the requested equipment appears unsuitable for the stated use. The final equipment selection and responsibilities should be confirmed in writing.
                      </p>
                    </div>
                  </div>

                  <div className="legal-section-block">
                    <div className="legal-section-header">
                      <div className="legal-section-number">16</div>
                      <h3 className="legal-section-title">
                        {lang === 'en' ? '16. Payment and Invoicing' : '١٦. الفوترة والدفع'}
                      </h3>
                    </div>
                    <div className="legal-section-body">
                      <p>
                        Payments, deposits, invoicing frequency, due dates, and any applicable taxes will be specified in the quotation or rental agreement.
                      </p>
                      <p>
                        Customers should raise invoice queries promptly and pay undisputed amounts according to the agreed terms. Any late-payment remedies must comply with the contract and applicable law.
                      </p>
                    </div>
                  </div>

                  <div className="legal-section-block">
                    <div className="legal-section-header">
                      <div className="legal-section-number">17</div>
                      <h3 className="legal-section-title">
                        {lang === 'en' ? '17. Disputes' : '١٧. تسوية النزاعات'}
                      </h3>
                    </div>
                    <div className="legal-section-body">
                      <p>
                        The parties should first attempt to resolve rental-related disputes through good-faith discussions and review of the quotation, handover records, rental logs, correspondence, and other relevant documents.
                      </p>
                      <p>
                        Unresolved disputes will be handled under the applicable agreement and laws of the Kingdom of Saudi Arabia, subject to the jurisdiction of the competent authority or court.
                      </p>
                    </div>
                  </div>

                  <div className="legal-section-block">
                    <div className="legal-section-header">
                      <div className="legal-section-number">18</div>
                      <h3 className="legal-section-title">
                        {lang === 'en' ? '18. Policy Updates' : '١٨. تحديث سياسات التأجير'}
                      </h3>
                    </div>
                    <div className="legal-section-body">
                      <p>
                        ORJWAN may update these general policies from time to time. Updated policies will be published on this page. Changes will apply as permitted by law and will not override an existing rental agreement where that agreement remains controlling.
                      </p>
                    </div>
                  </div>

                  <div className="legal-section-block">
                    <div className="legal-section-header">
                      <div className="legal-section-number">19</div>
                      <h3 className="legal-section-title">
                        {lang === 'en' ? '19. Rental Enquiries and Contact' : '١٩. طلبات التأجير والتواصل'}
                      </h3>
                    </div>
                    <div className="legal-section-body">
                      <p>For equipment availability, quotations, rental terms, or support, contact:</p>
                      <div className="legal-callout-box legal-callout-info">
                        <div>
                          <p><strong>ORJWAN ZAKI BIN AHMED AL-RABH GENERAL CONTRACTING EST.</strong></p>
                          <p><strong>Commercial Registration (CR) No.:</strong> 2053123342</p>
                          <p><strong>Address:</strong> EDJC8593, 1st Floor, 8593 Al Khazzan St, Dammam 32242–3513, Saudi Arabia</p>
                          <p><strong>Phone:</strong> 0568565143</p>
                          <p style={{ marginTop: 8, fontSize: '0.9rem', color: '#1E3A8A' }}>
                            <em>* Please include the equipment type, project location, required dates, and rental duration in your enquiry.</em>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              )}

              {/* Corporate Signature Strip */}
              <div className="legal-signature-strip">
                <div className="legal-signature-info">
                  <h4>ORJWAN ZAKI BIN AHMED AL-RABH GENERAL CONTRACTING EST.</h4>
                  <p>
                    {lang === 'en' 
                      ? 'Commercial Registration No. 2053123342 • Dammam, Eastern Province, KSA' 
                      : 'سجل تجاري رقم ٢٠٥٣١٢٣٣٤٢ • الدمام، المنطقة الشرقية، المملكة العربية السعودية'}
                  </p>
                </div>
                <div className="legal-signature-actions">
                  <Link to="/quote" className="legal-action-link-btn">
                    <span>{lang === 'en' ? 'Submit Project Enquiry' : 'طلب تسعيرة رسمية'}</span>
                    <ChevronRight size={16} />
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </section>

      </div>
    </PageTransition>
  );
}
