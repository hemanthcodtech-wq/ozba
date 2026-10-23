import React, { useState } from 'react';
import { 
  MapPin, Phone, Mail, Clock, ShieldCheck, ArrowRight, CheckCircle2, 
  Send, Copy, Check, Users, Wrench, HardHat, MessageSquare, 
  ChevronDown, HelpCircle, ExternalLink, Building2, Sparkles, MessageCircle
} from 'lucide-react';
import '../styles/Contact.css';

export default function Contact({ lang, showToast }) {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    phone: '',
    email: '',
    serviceRequired: 'Professional Support Services',
    location: '',
    details: ''
  });

  const [copied, setCopied] = useState(false);
  const [copiedDetails, setCopiedDetails] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  // Form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();
    if (showToast) {
      showToast(
        lang === 'en'
          ? 'Thank you! Your enquiry has been prepared and received. Our team will contact you shortly.'
          : 'شكراً لتواصلك! تم تجهيز طلبك واستلامه بنجاح، وسيتواصل معك فريقنا قريباً.'
      );
    }
    // Prepare enquiry text format
    const summary = `ORJWAN Project Enquiry:\n- Name: ${formData.fullName}\n- Company: ${formData.companyName || 'N/A'}\n- Phone: ${formData.phone}\n- Email: ${formData.email || 'N/A'}\n- Service: ${formData.serviceRequired}\n- Location: ${formData.location || 'Saudi Arabia'}\n- Details: ${formData.details}`;
    console.log(summary);
  };

  // Prepare Enquiry copy handler
  const handlePrepareEnquiry = () => {
    const textToCopy = `=== ORJWAN CONTRACTING ENQUIRY ===
Full Name: ${formData.fullName || '(Not provided)'}
Company: ${formData.companyName || '(Not provided)'}
Phone: ${formData.phone || '(Not provided)'}
Email: ${formData.email || '(Not provided)'}
Service Required: ${formData.serviceRequired}
Project Location: ${formData.location || '(Not provided)'}
Project Details: ${formData.details || '(Not provided)'}
==================================`;

    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    if (showToast) {
      showToast(lang === 'en' ? 'Enquiry summary copied to clipboard!' : 'تم نسخ ملخص الاستفسار إلى الحافظة!');
    }
    setTimeout(() => setCopied(false), 2500);
  };

  // Copy Company Contact Details handler
  const handleCopyCompanyDetails = () => {
    const companyDetails = `ORJWAN ZAKI BIN AHMED AL-RABH GENERAL CONTRACTING EST.
Commercial Registration (CR): 2053123342
Phone: 0568565143 / +966568565143
WhatsApp: +966567119230
Email: info@orjwans.com
Office Address: EDJC8593, 1st Floor, 8593 Al Khazzan St, Dammam 32242–3513, Kingdom of Saudi Arabia.`;

    navigator.clipboard.writeText(companyDetails);
    setCopiedDetails(true);
    if (showToast) {
      showToast(lang === 'en' ? 'Company contact details copied to clipboard!' : 'تم نسخ بيانات الاتصال بالشركة إلى الحافظة!');
    }
    setTimeout(() => setCopiedDetails(false), 2500);
  };

  // 4 Why Contact ORJWAN Pillars
  const whyContactPillars = [
    {
      icon: <Users size={28} />,
      titleEn: 'Manpower Solutions',
      titleAr: 'حلول القوى العاملة',
      descEn: 'Discuss technical and skilled personnel requirements with rapid Aramco/TUV compliant mobilization.',
      descAr: 'ناقش احتياجات الكوادر الفنية والمهنية المؤهلة مع سرعة التوريد ومطابقة اشتراطات أرامكو وتوف.'
    },
    {
      icon: <Wrench size={28} />,
      titleEn: 'Equipment Rentals',
      titleAr: 'تأجير المعدات والآليات',
      descEn: 'Enquire about machinery, certified fleet availability, and flexible short/long-term rental duration.',
      descAr: 'استفسر عن المعدات الثقيلة، جاهزية الأسطول المعتمد، ومرونة خيارات التأجير قصير وطويل الأجل.'
    },
    {
      icon: <HardHat size={28} />,
      titleEn: 'Contracting Services',
      titleAr: 'خدمات المقاولات العامة',
      descEn: 'Discuss civil, mechanical, structural, and turnkey subcontracting project requirements.',
      descAr: 'ناقش متطلبات مشاريع الهندسة المدنية والميكانيكية وحزم المقاولات الإنشائية المتكاملة.'
    },
    {
      icon: <MessageSquare size={28} />,
      titleEn: 'Direct Communication',
      titleAr: 'التواصل المباشر والسريع',
      descEn: 'Share your requirements and coordinate next steps directly with our project operations in Dammam.',
      descAr: 'شارك متطلباتك ونسّق الخطوات التالية مباشرة مع مهندسي العمليات وإدارة المشاريع بالدمام.'
    }
  ];

  // 4 FAQs
  const faqs = [
    {
      qEn: 'How can I request a quotation?',
      qAr: 'كيف يمكنني طلب عرض أسعار؟',
      aEn: 'Complete the enquiry form with your contact details, service requirements, project location, and scope of work. You can also call us directly at 0568565143 or email your BOQ/RFP to info@orjwans.com for a formal quotation within 24 hours.',
      aAr: 'أكمل نموذج الاستفسار مع بيانات الاتصال، نوع الخدمة المطلوبة، موقع المشروع ونطاق العمل. يمكنك أيضاً الاتصال بنا مباشرة على 0568565143 أو إرسال جدول الكميات إلى info@orjwans.com لاستلام عرض رسمي خلال 24 ساعة.'
    },
    {
      qEn: 'Can I enquire about manpower and equipment together?',
      qAr: 'هل يمكنني الاستفسار عن القوى العاملة والمعدات معاً؟',
      aEn: 'Yes. Describe both requirements in the project details field so the team can review your request and structure a comprehensive, cost-effective turnkey package combining certified operators, tradesmen, and heavy machinery.',
      aAr: 'نعم بالتأكيد. اذكر كلا المتطلبين في حقل تفاصيل المشروع ليقوم فريقنا بدراسة طلبك وتقديم حزمة متكاملة وموفرة للتكاليف تشمل المشغلين المعتمدين والمعدات الثقيلة معاً.'
    },
    {
      qEn: 'What information should I provide for equipment rentals?',
      qAr: 'ما هي المعلومات التي يجب تقديمها لتأجير المعدات؟',
      aEn: 'Specify the equipment type (e.g. mobile crane, excavator, boom truck, boom lift), required capacity/tonnage, quantity, project location, expected rental duration, and whether certified third-party operators (Aramco / TUV) are required.',
      aAr: 'يرجى تحديد نوع المعدة (مثل رافعة متحركة، حفارة، شاحنة بوم، مان لفت)، الحمولة المطلوبة، الكمية، موقع المشروع، مدة الإيجار وما إذا كنتم بحاجة لمشغلين معتمدين (أرامكو أو توف).'
    },
    {
      qEn: 'Can I discuss a large construction or subcontracting project?',
      qAr: 'هل يمكنني مناقشة مشروع إنشائي كبير أو مقاولة فرعية؟',
      aEn: 'Yes. Share the project scope, location, expected schedule, and relevant technical requirements. Our senior engineering and project management team will arrange an in-person meeting or technical alignment call.',
      aAr: 'نعم. يرجى تزويدنا بنطاق المشروع، الموقع، الجدول الزمني المتوقع، والمتطلبات الفنية، وسيقوم فريق الإدارة الهندسية والمشاريع بجدولة اجتماع أو مكالمة فنية متخصصة.'
    }
  ];

  return (
    <div className="contact-page-wrapper">
      {/* 1. Hero Section */}
      <section className="contact-hero-section">
        <div className="contact-hero-overlay"></div>
        <div className="container contact-hero-content">
          <div className="contact-hero-badge">
            <Sparkles size={16} />
            <span>{lang === 'en' ? 'CONTACT ORJWAN' : 'تواصل مع أرجوان'}</span>
          </div>

          <h1 className="contact-hero-title">
            {lang === 'en' ? "Let's Build Something Great Together." : 'معاً.. نبني مستقبلاً استثنائياً لمشاريعك'}
          </h1>

          <p className="contact-hero-desc">
            {lang === 'en'
              ? 'Whether you require professional manpower, technical support services, construction equipment rentals, or general contracting support, our team is ready to discuss your project requirements across Saudi Arabia.'
              : 'سواء كنت بحاجة إلى كوادر فنية مهنية، خدمات دعم فني، تأجير معدات إنشائية، أو دعم في المقاولات العامة، فريقنا مستعد لتلبية كافة متطلبات مشروعك في جميع أنحاء المملكة العربية السعودية.'}
          </p>

          <p className="contact-hero-sub">
            {lang === 'en'
              ? 'Contact us to share your needs, request a quotation, or explore how we can support your next project across Saudi Arabia.'
              : 'تواصل معنا الآن لتوضيح متطلباتك، طلب عروض أسعار تنافسية، أو استكشاف سبل التعاون في مشروعك القادم عبر أرجاء المملكة.'}
          </p>

          <div className="contact-hero-actions">
            <a href="#enquiry-form-section" className="btn-gold-primary">
              <Send size={18} />
              <span>{lang === 'en' ? 'Send an Enquiry' : 'أرسل استفسارك الآن'}</span>
            </a>
            <a href="tel:0568565143" className="btn-glass-call">
              <Phone size={18} />
              <span>{lang === 'en' ? 'Call Our Team' : 'اتصل بفريقنا مباشرة'}</span>
            </a>
          </div>
        </div>
      </section>

      {/* Main 2-Column Section: 2. Contact Information & 3. Send Us an Enquiry */}
      <section id="enquiry-form-section" className="contact-main-section">
        <div className="container">
          <div className="contact-two-column-layout">
            
            {/* LEFT COLUMN: 2. Contact Information */}
            <div className="contact-info-column">
              <div className="contact-info-panel">
                <div className="section-eyebrow-gold">
                  {lang === 'en' ? "WE'RE HERE TO HELP" : 'نحن هنا لمساعدتك'}
                </div>
                <h2 className="panel-headline">
                  {lang === 'en' ? 'Direct Access to Our Operations' : 'تواصل مباشر مع إدارة العمليات'}
                </h2>
                <p className="panel-subtext">
                  {lang === 'en'
                    ? 'Get in touch directly with our commercial, operations, and manpower dispatch teams stationed in Dammam.'
                    : 'تواصل معنا مباشرة عبر القنوات الرسمية للاستجابة السريعة وتنسيق متطلبات القوى العاملة والمعدات.'}
                </p>

                <div className="contact-cards-stack">
                  {/* Office Location Card */}
                  <div className="info-detail-card">
                    <div className="info-icon-gold">
                      <MapPin size={24} />
                    </div>
                    <div className="info-content-text">
                      <h3 className="info-item-title">{lang === 'en' ? 'Our Office' : 'مقر المكتب الرئيسي'}</h3>
                      <p className="info-item-value">
                        EDJC8593, 1st Floor, 8593 Al Khazzan St,<br />
                        Dammam 32242–3513, Saudi Arabia.
                      </p>
                      <a 
                        href="https://maps.google.com/?q=Dammam+Saudi+Arabia" 
                        target="_blank" 
                        rel="noreferrer"
                        className="info-sub-link"
                      >
                        <span>{lang === 'en' ? 'View on Google Maps' : 'عرض في خرائط جوجل'}</span>
                        <ExternalLink size={14} />
                      </a>
                    </div>
                  </div>

                  {/* Call Us Card */}
                  <div className="info-detail-card highlight-card">
                    <div className="info-icon-gold">
                      <Phone size={24} />
                    </div>
                    <div className="info-content-text">
                      <h3 className="info-item-title">{lang === 'en' ? 'Call Us' : 'اتصل بنا'}</h3>
                      <div className="phone-big-call">
                        <a href="tel:0568565143">0568565143</a>
                      </div>
                      <p className="info-item-note">
                        {lang === 'en' 
                          ? 'Contact us to discuss your service or project requirements.'
                          : 'اتصل بنا لمناقشة متطلبات مشروعك وتوريد الكوادر والمعدات فوراً.'}
                      </p>
                      <div className="phone-sub-line">
                        <strong>{lang === 'en' ? 'Phone:' : 'الهاتف:'}</strong> 0568565143
                      </div>
                      <div className="direct-chat-row">
                        <a 
                          href="https://wa.me/966567119230?text=Hello%20ORJWAN%20Contracting%2C%20I%20would%20like%20to%20enquire%20about%20your%20services."
                          target="_blank" 
                          rel="noreferrer"
                          className="whatsapp-quick-btn"
                        >
                          <MessageCircle size={16} />
                          <span>{lang === 'en' ? 'Instant WhatsApp Chat' : 'محادثة واتساب فورية'}</span>
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Commercial Registration Card */}
                  <div className="info-detail-card cr-card">
                    <div className="info-icon-gold">
                      <ShieldCheck size={24} />
                    </div>
                    <div className="info-content-text">
                      <h3 className="info-item-title">{lang === 'en' ? 'Commercial Registration' : 'السجل التجاري المعتمد'}</h3>
                      <div className="cr-number-tag">
                        <strong>CR No. 2053123342</strong>
                      </div>
                      <p className="cr-arabic-legal">
                        مؤسسة ارجوان زكي بن أحمد آل ربح للمقاولات العامة
                      </p>
                      <div className="cr-meta-strip">
                        <span>{lang === 'en' ? 'Kingdom of Saudi Arabia' : 'المملكة العربية السعودية'}</span>
                        <span>•</span>
                        <span>{lang === 'en' ? 'Class-A Compliance' : 'مطابقة أعلى معايير الجودة'}</span>
                      </div>
                    </div>
                  </div>

                  {/* Email & Hours */}
                  <div className="info-detail-card">
                    <div className="info-icon-gold">
                      <Mail size={24} />
                    </div>
                    <div className="info-content-text">
                      <h3 className="info-item-title">{lang === 'en' ? 'Email Inquiries' : 'البريد الإلكتروني الرسمي'}</h3>
                      <p className="info-item-value">
                        <a href="mailto:info@orjwans.com" className="email-link">info@orjwans.com</a>
                      </p>
                      <p className="info-item-note">
                        {lang === 'en' 
                          ? 'Send RFP, tenders, and official scope documents for rapid assessment.' 
                          : 'أرسل كراسات الشروط وطلبات الأسعار الرسمية للتقييم والتسعير.'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: 3. Send Us an Enquiry Form */}
            <div className="contact-form-column">
              <div className="contact-form-container">
                <div className="form-header-box">
                  <div className="section-eyebrow-gold">
                    {lang === 'en' ? 'SEND US AN ENQUIRY' : 'أرسل لنا استفسارك'}
                  </div>
                  <h2 className="form-heading">
                    {lang === 'en' ? 'Tell Us About Your Requirements' : 'أخبرنا عن متطلبات وتفاصيل مشروعك'}
                  </h2>
                  <p className="form-lead">
                    {lang === 'en'
                      ? 'Complete the form below, and our team can review your enquiry and follow up using your preferred contact details.'
                      : 'أكمل النموذج أدناه، وسيقوم فريق العمليات بمراجعة استفسارك والتواصل معك عبر تفاصيل الاتصال المفضلة لديك.'}
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="enquiry-actual-form">
                  <div className="form-badge-title">
                    <span>{lang === 'en' ? 'Enquiry Form' : 'نموذج الاستفسار وطلب الأسعار'}</span>
                  </div>

                  <div className="form-grid-row">
                    <div className="form-field-group">
                      <label className="field-label">
                        {lang === 'en' ? 'Full Name *' : 'الاسم الكامل *'}
                      </label>
                      <input 
                        type="text" 
                        required 
                        className="field-input" 
                        placeholder={lang === 'en' ? 'e.g. Abdullah Al-Otaibi' : 'مثال: عبدالله العتيبي'}
                        value={formData.fullName}
                        onChange={(e) => handleInputChange('fullName', e.target.value)}
                      />
                    </div>

                    <div className="form-field-group">
                      <label className="field-label">
                        {lang === 'en' ? 'Company Name' : 'اسم الشركة / المؤسسة'}
                      </label>
                      <input 
                        type="text" 
                        className="field-input" 
                        placeholder={lang === 'en' ? 'e.g. Al-Falak Contracting Est.' : 'مثال: شركة الفلك للمقاولات'}
                        value={formData.companyName}
                        onChange={(e) => handleInputChange('companyName', e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="form-grid-row">
                    <div className="form-field-group">
                      <label className="field-label">
                        {lang === 'en' ? 'Phone Number *' : 'رقم الجوال *'}
                      </label>
                      <input 
                        type="tel" 
                        required 
                        className="field-input" 
                        placeholder={lang === 'en' ? '+966 5X XXX XXXX / 0568565143' : '05XXXXXXXX / +966 5X XXX XXXX'}
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                      />
                    </div>

                    <div className="form-field-group">
                      <label className="field-label">
                        {lang === 'en' ? 'Email Address' : 'البريد الإلكتروني'}
                      </label>
                      <input 
                        type="email" 
                        className="field-input" 
                        placeholder={lang === 'en' ? 'name@company.com' : 'name@company.com'}
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="form-grid-row">
                    <div className="form-field-group">
                      <label className="field-label">
                        {lang === 'en' ? 'Service Required *' : 'الخدمة المطلوبة *'}
                      </label>
                      <div className="select-wrapper">
                        <select 
                          className="field-select"
                          value={formData.serviceRequired}
                          onChange={(e) => handleInputChange('serviceRequired', e.target.value)}
                        >
                          <option value="Professional Support Services">
                            {lang === 'en' ? 'Professional Support Services (Manpower)' : 'خدمات الدعم المهني (القوى العاملة)'}
                          </option>
                          <option value="Equipment Rentals">
                            {lang === 'en' ? 'Equipment Rentals (Cranes, Heavy Fleet)' : 'تأجير المعدات (رافعات، آليات ثقيلة)'}
                          </option>
                          <option value="General Contracting">
                            {lang === 'en' ? 'General Contracting & Subcontracting' : 'المقاولات العامة والفرعية'}
                          </option>
                          <option value="Combined Manpower and Equipment">
                            {lang === 'en' ? 'Combined (Manpower & Equipment Solutions)' : 'حزمة مشتركة (عمالة ومعدات معاً)'}
                          </option>
                        </select>
                      </div>
                    </div>

                    <div className="form-field-group">
                      <label className="field-label">
                        {lang === 'en' ? 'Project Location' : 'موقع المشروع في المملكة'}
                      </label>
                      <input 
                        type="text" 
                        className="field-input" 
                        placeholder={lang === 'en' ? 'e.g. Dammam, Jubail, Riyadh, NEOM' : 'مثال: الدمام، الجبيل، الرياض، نيوم'}
                        value={formData.location}
                        onChange={(e) => handleInputChange('location', e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="form-field-group full-width">
                    <label className="field-label">
                      {lang === 'en' ? 'Project Details *' : 'تفاصيل المشروع والاحتياجات *'}
                    </label>
                    <textarea 
                      rows={4} 
                      required
                      className="field-textarea" 
                      placeholder={lang === 'en' 
                        ? 'Describe required trades (e.g. Rigging, Safety, QA/QC), crane capacities, project duration, or start date...' 
                        : 'اذكر التخصصات المطلوبة (مثل مشرفي الرفع، ضباط السلامة، الفاحصين)، مواصفات المعدات، مدة العمل وتاريخ البدء...'}
                      value={formData.details}
                      onChange={(e) => handleInputChange('details', e.target.value)}
                    ></textarea>
                  </div>

                  {/* Dual Action: Submit Enquiry + Prepare Enquiry button */}
                  <div className="form-actions-stack">
                    <button type="submit" className="btn-form-submit">
                      <Send size={18} />
                      <span>{lang === 'en' ? 'Send Enquiry to ORJWAN' : 'إرسال الاستفسار إلى أرجوان'}</span>
                    </button>

                    <button 
                      type="button" 
                      onClick={handlePrepareEnquiry} 
                      className="btn-prepare-enquiry"
                      title={lang === 'en' ? 'Prepare and copy enquiry text' : 'تجهيز ونسخ نص الاستفسار'}
                    >
                      {copied ? <Check size={18} color="#10b981" /> : <Copy size={18} />}
                      <span>
                        {copied 
                          ? (lang === 'en' ? 'Enquiry Text Copied!' : 'تم نسخ نص الاستفسار!') 
                          : (lang === 'en' ? 'Prepare Enquiry (Copy Summary)' : 'تجهيز الاستفسار (نسخ الملخص)')}
                      </span>
                    </button>
                  </div>

                  <div className="form-disclaimer-note">
                    <CheckCircle2 size={16} />
                    <p>
                      {lang === 'en'
                        ? 'Prepare Enquiry: This sample form prepares your enquiry text to copy. Your developer must connect the production form to the company’s email, CRM, or backend to receive submissions.'
                        : 'تجهيز الاستفسار: يقوم هذا النموذج بتجهيز نص الاستفسار وتنسيقه للنسخ أو إرساله مباشرة لممثلي خدمة العملاء.'}
                    </p>
                  </div>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Our Location Section with Interactive Map View */}
      <section className="contact-location-section">
        <div className="container">
          <div className="location-header-center">
            <span className="section-eyebrow-gold">
              {lang === 'en' ? 'OUR LOCATION' : 'موقعنا الجغرافي'}
            </span>
            <h2 className="location-section-title">
              {lang === 'en' ? 'Visit Our Office in Dammam, Saudi Arabia' : 'تفضل بزيارة مكتبنا في الدمام، المملكة العربية السعودية'}
            </h2>
            <p className="location-section-sub">
              {lang === 'en'
                ? 'We welcome business enquiries regarding our contracting, manpower, technical support, and equipment rental services.'
                : 'نرحب بزياراتكم واستفساراتكم التجارية فيما يتعلق بخدمات المقاولات العامة، توريد الكوادر المؤهلة، والدعم الفني وتأجير المعدات.'}
            </p>
          </div>

          <div className="location-card-layout">
            <div className="location-info-bar">
              <div className="company-official-badge">
                <Building2 size={22} />
                <div>
                  <h3 className="company-full-title">
                    ORJWAN ZAKI BIN AHMED AL-RABH GENERAL CONTRACTING EST.
                  </h3>
                  <div className="company-arabic-title">
                    مؤسسة ارجوان زكي بن أحمد آل ربح للمقاولات العامة
                  </div>
                </div>
              </div>

              <div className="location-address-box">
                <MapPin size={22} className="loc-pin-icon" />
                <div className="address-text-block">
                  <strong>{lang === 'en' ? 'Headquarters Address:' : 'العنوان التفصيلي للمقر:'}</strong>
                  <p>EDJC8593, 1st Floor, 8593 Al Khazzan St, Dammam 32242–3513, Saudi Arabia.</p>
                </div>
              </div>

              <div className="location-actions-bar">
                <a 
                  href="https://maps.google.com/?q=EDJC8593+8593+Al+Khazzan+St+Dammam+Saudi+Arabia" 
                  target="_blank" 
                  rel="noreferrer"
                  className="btn-google-maps"
                >
                  <MapPin size={18} />
                  <span>{lang === 'en' ? 'Find Us on Google Maps' : 'حدد موقعنا على خرائط جوجل'}</span>
                  <ExternalLink size={16} />
                </a>
                <span className="map-pin-note">
                  {lang === 'en' ? 'Confirm the exact map pin with the client before publishing.' : 'يرجى تأكيد إحداثيات الموقع الدقيقة مع العميل قبل النشر النهائي.'}
                </span>
              </div>
            </div>

            {/* Embedded Visual Map Preview */}
            <div className="location-map-container">
              <iframe
                title="ORJWAN Office Location Dammam"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114400.08862678689!2d50.0543666!3d26.4206828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e49e5d4e1355555%3A0x6b6c0e5a8bcde123!2sDammam%20Saudi%20Arabia!5e0!3m2!1sen!2ssa!4v1700000000000!5m2!1sen!2ssa"
                width="100%"
                height="380"
                style={{ border: 0, display: 'block' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              <div className="map-overlay-tag">
                <div className="pulse-dot"></div>
                <span>Dammam Headquarters • Eastern Province</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Why Contact ORJWAN? Section */}
      <section className="why-contact-section">
        <div className="container">
          <div className="why-header-center">
            <span className="section-eyebrow-gold">
              {lang === 'en' ? 'OUR VALUE PROPOSITION' : 'قيمتنا المضافة'}
            </span>
            <h2 className="why-title">
              {lang === 'en' ? 'Why Contact ORJWAN?' : 'لماذا تختار التواصل مع أرجوان للمقاولات؟'}
            </h2>
            <p className="why-subtitle">
              {lang === 'en'
                ? 'We streamline operations, eliminate mobilization friction, and ensure strict project compliance.'
                : 'نعمل على تيسير العمليات اللوجستية وتوريد الكوادر المعتمدة لضمان سير مشاريعكم بأعلى كفاءة.'}
            </p>
          </div>

          <div className="why-contact-grid">
            {whyContactPillars.map((pillar, idx) => (
              <div key={idx} className="why-pillar-card">
                <div className="pillar-num-badge">0{idx + 1}</div>
                <div className="pillar-icon-box">
                  {pillar.icon}
                </div>
                <h3 className="pillar-card-title">
                  {lang === 'en' ? pillar.titleEn : pillar.titleAr}
                </h3>
                <p className="pillar-card-desc">
                  {lang === 'en' ? pillar.descEn : pillar.descAr}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Frequently Asked Questions Section */}
      <section className="contact-faq-section">
        <div className="container">
          <div className="faq-header-center">
            <div className="faq-badge">
              <HelpCircle size={16} />
              <span>{lang === 'en' ? 'COMMON QUESTIONS' : 'الأسئلة الشائعة'}</span>
            </div>
            <h2 className="faq-headline">
              {lang === 'en' ? 'Frequently Asked Questions' : 'الأسئلة المتكررة حول خدماتنا'}
            </h2>
            <p className="faq-subtext">
              {lang === 'en'
                ? 'Everything you need to know about requesting quotations, mobilizations, and combined resource packages.'
                : 'إجابات سريعة وواضحة حول تقديم عروض الأسعار، تعبئة الكوادر، وتوريد باقات المعدات المشتركة.'}
            </p>
          </div>

          <div className="faq-accordion-list">
            {faqs.map((faq, index) => {
              const isOpen = activeFaq === index;
              return (
                <div 
                  key={index} 
                  className={`faq-accordion-item ${isOpen ? 'active' : ''}`}
                >
                  <button 
                    className="faq-question-btn" 
                    onClick={() => toggleFaq(index)}
                    aria-expanded={isOpen}
                  >
                    <span className="faq-q-text">
                      {lang === 'en' ? faq.qEn : faq.qAr}
                    </span>
                    <span className="faq-chevron-icon">
                      <ChevronDown size={20} />
                    </span>
                  </button>
                  {isOpen && (
                    <div className="faq-answer-panel">
                      <p>{lang === 'en' ? faq.aEn : faq.aAr}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. Final Call to Action Section */}
      <section className="contact-final-cta-section">
        <div className="cta-gold-accent-line"></div>
        <div className="container">
          <div className="final-cta-content-box">
            <span className="cta-caps-tag">
              {lang === 'en' ? 'YOUR PROJECT STARTS HERE' : 'مشروعك القادم يبدأ من هنا'}
            </span>
            <h2 className="cta-main-title">
              {lang === 'en' ? "Let's Discuss Your Next Project." : 'دعنا نناقش متطلبات مشروعك القادم'}
            </h2>
            <p className="cta-description">
              {lang === 'en'
                ? 'Connect with ORJWAN for professional support services, manpower solutions, equipment rentals, and contracting enquiries across the Kingdom of Saudi Arabia.'
                : 'تواصل مع مؤسسة أرجوان للمقاولات للحصول على خدمات الدعم الفني، حلول القوى العاملة، تأجير المعدات الثقيلة، واستشارات المقاولات العامة.'}
            </p>

            <div className="cta-dual-buttons">
              <a href="tel:0568565143" className="btn-cta-primary">
                <Phone size={18} />
                <span>{lang === 'en' ? 'Call 0568565143' : 'اتصل الآن 0568565143'}</span>
              </a>

              <button 
                type="button" 
                onClick={handleCopyCompanyDetails}
                className="btn-cta-copy"
              >
                {copiedDetails ? <Check size={18} color="#10b981" /> : <Copy size={18} />}
                <span>
                  {copiedDetails 
                    ? (lang === 'en' ? 'Company Details Copied!' : 'تم نسخ بيانات الشركة!') 
                    : (lang === 'en' ? 'Copy Company Contact Details' : 'نسخ بيانات الاتصال بالشركة')}
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
