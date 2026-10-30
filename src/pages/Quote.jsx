import React, { useState } from 'react';
import { 
  CheckCircle2, ArrowRight, ArrowLeft, ShieldCheck, 
  Send, User, Building, Phone, Mail, MapPin, Calendar, 
  Wrench, Users, FileText, AlertCircle, Sparkles, Check
} from 'lucide-react';
import PageTransition from '../components/PageTransition';
import ScrollReveal from '../components/ScrollReveal';
import TextReveal from '../components/TextReveal';
import '../styles/Quote.css';

export default function Quote({ lang, showToast }) {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const [formData, setFormData] = useState({
    // Step 1: Contact info
    fullName: '',
    companyName: '',
    phone: '',
    email: '',
    // Step 2: Service category
    serviceCategory: 'Manpower Supply',
    // Step 3: Specific requirements
    requirementType: '',
    headcountOrUnits: '',
    specifications: '',
    // Step 4: Schedule & Location
    projectLocation: '',
    startDate: '',
    duration: '',
    operatorNeeded: 'Yes',
    additionalNotes: ''
  });

  const handleInputChange = (field, val) => {
    setFormData(prev => ({ ...prev, [field]: val }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: null }));
    }
  };

  const validateStep = (currentStep) => {
    const newErrors = {};

    if (currentStep === 1) {
      if (!formData.fullName.trim()) newErrors.fullName = lang === 'en' ? 'Full name is required' : 'الاسم الكامل مطلوب';
      if (!formData.phone.trim()) newErrors.phone = lang === 'en' ? 'Valid phone number is required' : 'رقم الجوال مطلوب';
      if (!formData.email.trim() || !formData.email.includes('@')) {
        newErrors.email = lang === 'en' ? 'Valid business email is required' : 'البريد الإلكتروني غير صحيح';
      }
    }

    if (currentStep === 2) {
      if (!formData.serviceCategory) newErrors.serviceCategory = lang === 'en' ? 'Please select a service' : 'يرجى اختيار الخدمة';
    }

    if (currentStep === 3) {
      if (!formData.requirementType.trim()) {
        newErrors.requirementType = lang === 'en' ? 'Please specify trades or machinery required' : 'يرجى تحديد المعدات أو التخصصات';
      }
    }

    if (currentStep === 4) {
      if (!formData.projectLocation.trim()) {
        newErrors.projectLocation = lang === 'en' ? 'Project location is required' : 'موقع المشروع مطلوب';
      }
      if (!formData.startDate) {
        newErrors.startDate = lang === 'en' ? 'Start date is required' : 'تاريخ البدء مطلوب';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep(step)) {
      setStep(prev => Math.min(prev + 1, 5));
      window.scrollTo({ top: 300, behavior: 'smooth' });
    }
  };

  const prevStep = () => {
    setStep(prev => Math.max(prev - 1, 1));
    window.scrollTo({ top: 300, behavior: 'smooth' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateStep(1) || !validateStep(3) || !validateStep(4)) {
      return;
    }

    setIsSubmitting(true);

    // Simulate reliable dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      if (showToast) {
        showToast(
          lang === 'en'
            ? 'Quotation request submitted successfully! Reference #ORJ-' + Math.floor(100000 + Math.random() * 900000)
            : 'تم إرسال طلب عرض الأسعار بنجاح! رقم المرجع #ORJ-' + Math.floor(100000 + Math.random() * 900000)
        );
      }
    }, 1200);
  };

  const stepsMeta = [
    { num: 1, titleEn: 'Contact Info', titleAr: 'بيانات الاتصال' },
    { num: 2, titleEn: 'Service Category', titleAr: 'نوع الخدمة' },
    { num: 3, titleEn: 'Requirements', titleAr: 'تفاصيل المتطلبات' },
    { num: 4, titleEn: 'Location & Dates', titleAr: 'الموقع والجدول' },
    { num: 5, titleEn: 'Review & Submit', titleAr: 'المراجعة والإرسال' },
  ];

  return (
    <PageTransition>
      <div className="quote-page-wrapper">
        {/* Banner */}
        <section className="quote-hero-banner">
          <div className="container">
            <span className="quote-hero-tag">
              <Sparkles size={16} />
              {lang === 'en' ? 'COMMERCIAL INQUIRY & ESTIMATIONS' : 'طلب عروض الأسعار والتسعير الرسمي'}
            </span>
            <TextReveal delay={0.1}>
              <h1 className="quote-hero-title">
                {lang === 'en' ? 'Request a Formal Project Quotation' : 'طلب عرض أسعار رسمي لمشروعك'}
              </h1>
            </TextReveal>
            <TextReveal delay={0.2}>
              <p className="quote-hero-desc">
                {lang === 'en'
                  ? 'Complete our 5-step structured RFP form. Our commercial and engineering operations team in Dammam will review your BOQ and submit an official proposal within 24 hours.'
                  : 'أكمل نموذج الاستفسار المكون من 5 خطوات. سيقوم فريق التسعير وإدارة العمليات بالدمام بدراسة جدول الكميات وتزويدكم بعرض رسمي خلال 24 ساعة.'}
              </p>
            </TextReveal>
          </div>
        </section>

        {/* Form Container */}
        <section className="quote-main-section">
          <div className="container">
            <div className="quote-stepper-card">
              
              {/* Steps Progress Indicator */}
              <div className="stepper-progress-header">
                {stepsMeta.map((s) => (
                  <div 
                    key={s.num} 
                    className={`step-indicator-item ${step === s.num ? 'active' : ''} ${step > s.num ? 'completed' : ''}`}
                  >
                    <div className="step-circle">
                      {step > s.num ? <Check size={16} /> : s.num}
                    </div>
                    <span className="step-label">
                      {lang === 'en' ? s.titleEn : s.titleAr}
                    </span>
                  </div>
                ))}
              </div>

              {/* Submitted Confirmation State */}
              {isSubmitted ? (
                <div className="quote-success-state">
                  <div className="success-icon-badge">
                    <CheckCircle2 size={54} color="#10B981" />
                  </div>
                  <h2 className="success-title">
                    {lang === 'en' ? 'Quotation Request Received' : 'تم استلام طلب التسعيرة بنجاح'}
                  </h2>
                  <p className="success-text">
                    {lang === 'en'
                      ? 'Thank you for reaching out to ORJWAN Contracting. Our estimations manager has logged your inquiry. An official response and competitive quotation will be dispatched to your provided contact details.'
                      : 'شكراً لتواصلك مع مؤسسة أرجوان للمقاولات. تم تسجيل طلبكم بنجاح وسيقوم مدير التسعير بالتواصل معكم وتزويدكم بالعرض الرسمي قريباً.'}
                  </p>

                  <div className="summary-submitted-box">
                    <div><strong>CR Number:</strong> 2053123342</div>
                    <div><strong>Company:</strong> ORJWAN ZAKI BIN AHMED AL-RABH GENERAL CONTRACTING EST.</div>
                    <div><strong>Direct Phone:</strong> <a href="tel:0590767595">0590767595</a></div>
                  </div>

                  <button 
                    onClick={() => {
                      setIsSubmitted(false);
                      setStep(1);
                      setFormData({
                        fullName: '', companyName: '', phone: '', email: '',
                        serviceCategory: 'Manpower Supply', requirementType: '',
                        headcountOrUnits: '', specifications: '', projectLocation: '',
                        startDate: '', duration: '', operatorNeeded: 'Yes', additionalNotes: ''
                      });
                    }}
                    className="btn-gold"
                    style={{ marginTop: 24 }}
                  >
                    {lang === 'en' ? 'Submit Another Quotation' : 'تقديم طلب تسعيرة جديد'}
                  </button>
                </div>
              ) : (
                <form onSubmit={(e) => e.preventDefault()} className="stepper-actual-form">
                  
                  {/* STEP 1: Contact Information */}
                  {step === 1 && (
                    <div className="form-step-content">
                      <div className="step-heading-group">
                        <span className="step-eyebrow">Step 01 of 05</span>
                        <h3 className="step-headline">
                          {lang === 'en' ? 'Client & Representative Contact Information' : 'بيانات العميل وممثل الجهة الطالبة'}
                        </h3>
                        <p className="step-sub">
                          {lang === 'en'
                            ? 'Please provide the focal point contact information for commercial follow-up.'
                            : 'يرجى تزويدنا ببيانات المسؤول لمتابعة تقديم العرض المالي والفني.'}
                        </p>
                      </div>

                      <div className="form-two-col">
                        <div className="quote-input-group">
                          <label className="quote-label">
                            {lang === 'en' ? 'Full Name *' : 'الاسم الكامل *'}
                          </label>
                          <div className="input-with-icon">
                            <User size={18} className="field-icon" />
                            <input
                              type="text"
                              value={formData.fullName}
                              onChange={(e) => handleInputChange('fullName', e.target.value)}
                              placeholder={lang === 'en' ? 'e.g. Abdullah Al-Otaibi' : 'مثال: عبدالله العتيبي'}
                              className={`quote-input ${errors.fullName ? 'has-error' : ''}`}
                            />
                          </div>
                          {errors.fullName && <span className="error-hint">{errors.fullName}</span>}
                        </div>

                        <div className="quote-input-group">
                          <label className="quote-label">
                            {lang === 'en' ? 'Company Name' : 'اسم الشركة أو المؤسسة'}
                          </label>
                          <div className="input-with-icon">
                            <Building size={18} className="field-icon" />
                            <input
                              type="text"
                              value={formData.companyName}
                              onChange={(e) => handleInputChange('companyName', e.target.value)}
                              placeholder={lang === 'en' ? 'e.g. Al-Falak Contracting Est.' : 'مثال: شركة الفلك للمقاولات'}
                              className="quote-input"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="form-two-col">
                        <div className="quote-input-group">
                          <label className="quote-label">
                            {lang === 'en' ? 'Mobile Phone *' : 'رقم الجوال *'}
                          </label>
                          <div className="input-with-icon">
                            <Phone size={18} className="field-icon" />
                            <input
                              type="tel"
                              value={formData.phone}
                              onChange={(e) => handleInputChange('phone', e.target.value)}
                              placeholder="+966 5X XXX XXXX"
                              className={`quote-input ${errors.phone ? 'has-error' : ''}`}
                            />
                          </div>
                          {errors.phone && <span className="error-hint">{errors.phone}</span>}
                        </div>

                        <div className="quote-input-group">
                          <label className="quote-label">
                            {lang === 'en' ? 'Business Email Address *' : 'البريد الإلكتروني المهني *'}
                          </label>
                          <div className="input-with-icon">
                            <Mail size={18} className="field-icon" />
                            <input
                              type="email"
                              value={formData.email}
                              onChange={(e) => handleInputChange('email', e.target.value)}
                              placeholder="name@company.com"
                              className={`quote-input ${errors.email ? 'has-error' : ''}`}
                            />
                          </div>
                          {errors.email && <span className="error-hint">{errors.email}</span>}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* STEP 2: Service Category */}
                  {step === 2 && (
                    <div className="form-step-content">
                      <div className="step-heading-group">
                        <span className="step-eyebrow">Step 02 of 05</span>
                        <h3 className="step-headline">
                          {lang === 'en' ? 'Select Project Service Discipline' : 'حدد قطاع الخدمة المطلوب'}
                        </h3>
                        <p className="step-sub">
                          {lang === 'en'
                            ? 'Choose the primary capability category required for your project mobilization.'
                            : 'اختر نوع الحزمة المطلوبة لمشروعك.'}
                        </p>
                      </div>

                      <div className="service-choice-cards">
                        {[
                          {
                            id: 'Manpower Supply',
                            titleEn: 'Professional Support Services & Manpower',
                            titleAr: 'خدمات الدعم المهني والكوادر الفنية',
                            descEn: 'Engineers, QA/QC, Safety officers, supervisors, certified welders, skilled trades.',
                            descAr: 'مهندسون، فاحصو جودة، ضباط سلامة، مشرفو رفع وسقالات، لحامون معتمدون.',
                            icon: <Users size={28} />
                          },
                          {
                            id: 'Equipment Rentals',
                            titleEn: 'Heavy Equipment & Machinery Rentals',
                            titleAr: 'تأجير المعدات والآليات الثقيلة',
                            descEn: 'Mobile cranes, excavators, boom trucks, generators, compactors, tankers, manlifts.',
                            descAr: 'رافعات متحركة، حفارات، شاحنات بوم، مولدات، مداحل، تناكر، مان لفت.',
                            icon: <Wrench size={28} />
                          },
                          {
                            id: 'General Contracting',
                            titleEn: 'General Contracting & Subcontracting',
                            titleAr: 'المقاولات العامة والفرعية',
                            descEn: 'Civil construction, mechanical pipeline, structural erection, site preparation.',
                            descAr: 'أعمال الإنشاءات المدنية، خطوط الأنابيب، الهياكل الإنشائية وأعمال الموقع.',
                            icon: <Building size={28} />
                          },
                          {
                            id: 'Combined Turnkey',
                            titleEn: 'Combined Turnkey Package (Manpower + Fleet)',
                            titleAr: 'حزمة متكاملة (عمالة + معدات)',
                            descEn: 'Comprehensive project dispatch providing certified operators with heavy equipment.',
                            descAr: 'حلول تعبئة شاملة تضم الكوادر الفنية والمشغلين مع أسطول المعدات الثقيلة.',
                            icon: <Sparkles size={28} />
                          }
                        ].map((cat) => (
                          <div 
                            key={cat.id}
                            onClick={() => handleInputChange('serviceCategory', cat.id)}
                            className={`choice-card ${formData.serviceCategory === cat.id ? 'selected' : ''}`}
                          >
                            <div className="choice-icon-wrap">{cat.icon}</div>
                            <div className="choice-body">
                              <h4 className="choice-title">{lang === 'en' ? cat.titleEn : cat.titleAr}</h4>
                              <p className="choice-desc">{lang === 'en' ? cat.descEn : cat.descAr}</p>
                            </div>
                            <div className="choice-radio-circle">
                              {formData.serviceCategory === cat.id && <div className="choice-radio-dot" />}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* STEP 3: Requirements */}
                  {step === 3 && (
                    <div className="form-step-content">
                      <div className="step-heading-group">
                        <span className="step-eyebrow">Step 03 of 05</span>
                        <h3 className="step-headline">
                          {lang === 'en' ? 'Requirements & Scope Specifications' : 'تفاصيل ومواصفات الاحتياجات'}
                        </h3>
                        <p className="step-sub">
                          {lang === 'en'
                            ? 'Specify required personnel trades or machinery models and quantities needed.'
                            : 'حدد التخصصات المهنية أو أنواع المعدات والكميات المطلوبة.'}
                        </p>
                      </div>

                      <div className="quote-input-group">
                        <label className="quote-label">
                          {lang === 'en' 
                            ? 'Trades / Equipment Models Required *' 
                            : 'التخصصات المهنية أو طرازات المعدات المطلوبة *'}
                        </label>
                        <input
                          type="text"
                          value={formData.requirementType}
                          onChange={(e) => handleInputChange('requirementType', e.target.value)}
                          placeholder={lang === 'en' 
                            ? 'e.g. Rigging Supervisor (Aramco), Safety Officer (TUV), 50T Mobile Crane' 
                            : 'مثال: مشرف رفع (أرامكو)، ضابط سلامة (توف)، رافعة 50 طن'}
                          className={`quote-input ${errors.requirementType ? 'has-error' : ''}`}
                        />
                        {errors.requirementType && <span className="error-hint">{errors.requirementType}</span>}
                      </div>

                      <div className="form-two-col">
                        <div className="quote-input-group">
                          <label className="quote-label">
                            {lang === 'en' ? 'Estimated Quantity / Headcount' : 'الكمية التقديرية / عدد الكوادر'}
                          </label>
                          <input
                            type="text"
                            value={formData.headcountOrUnits}
                            onChange={(e) => handleInputChange('headcountOrUnits', e.target.value)}
                            placeholder={lang === 'en' ? 'e.g. 5 supervisors, 2 mobile cranes' : 'مثال: 5 مشرفين، 2 رافعة'}
                            className="quote-input"
                          />
                        </div>

                        <div className="quote-input-group">
                          <label className="quote-label">
                            {lang === 'en' ? 'Certified Operator Required?' : 'هل المشغل المعتمد مطلوب؟'}
                          </label>
                          <select
                            value={formData.operatorNeeded}
                            onChange={(e) => handleInputChange('operatorNeeded', e.target.value)}
                            className="quote-input"
                          >
                            <option value="Yes">{lang === 'en' ? 'Yes - With Certified Operator (Aramco / TUV)' : 'نعم - مع مشغل معتمد (أرامكو / توف)'}</option>
                            <option value="No">{lang === 'en' ? 'No - Bare Rental Only' : 'لا - تأجير معدة فقط بدون مشغل'}</option>
                            <option value="N/A">{lang === 'en' ? 'Not Applicable (Manpower Only)' : 'غير منطبق (طلب عمالة فقط)'}</option>
                          </select>
                        </div>
                      </div>

                      <div className="quote-input-group">
                        <label className="quote-label">
                          {lang === 'en' ? 'Technical Specifications & Scope Details' : 'المواصفات الفنية وتفاصيل نطاق العمل'}
                        </label>
                        <textarea
                          rows={4}
                          value={formData.specifications}
                          onChange={(e) => handleInputChange('specifications', e.target.value)}
                          placeholder={lang === 'en'
                            ? 'Mention certification standards, load capacity, site safety induction constraints...'
                            : 'اذكر معايير الاعتماد المطلوبة، سعة التحميل، واشتراطات السلامة الخاصة بالموقع...'}
                          className="quote-textarea"
                        />
                      </div>
                    </div>
                  )}

                  {/* STEP 4: Schedule & Location */}
                  {step === 4 && (
                    <div className="form-step-content">
                      <div className="step-heading-group">
                        <span className="step-eyebrow">Step 04 of 05</span>
                        <h3 className="step-headline">
                          {lang === 'en' ? 'Project Location & Mobilization Schedule' : 'موقع المشروع والجدول الزمني'}
                        </h3>
                        <p className="step-sub">
                          {lang === 'en'
                            ? 'Where and when does your project team need mobilization support?'
                            : 'حدد أين ومتى يتطلب المشروع بدء تعبئة الموارد؟'}
                        </p>
                      </div>

                      <div className="form-two-col">
                        <div className="quote-input-group">
                          <label className="quote-label">
                            {lang === 'en' ? 'Project Site / City *' : 'موقع المشروع / المدينة *'}
                          </label>
                          <div className="input-with-icon">
                            <MapPin size={18} className="field-icon" />
                            <input
                              type="text"
                              value={formData.projectLocation}
                              onChange={(e) => handleInputChange('projectLocation', e.target.value)}
                              placeholder={lang === 'en' ? 'e.g. Dammam, Jubail, NEOM, Ras Tanura' : 'مثال: الدمام، الجبيل، نيوم، رأس تنورة'}
                              className={`quote-input ${errors.projectLocation ? 'has-error' : ''}`}
                            />
                          </div>
                          {errors.projectLocation && <span className="error-hint">{errors.projectLocation}</span>}
                        </div>

                        <div className="quote-input-group">
                          <label className="quote-label">
                            {lang === 'en' ? 'Expected Mobilization Date *' : 'تاريخ بدء التعبئة المتوقع *'}
                          </label>
                          <div className="input-with-icon">
                            <Calendar size={18} className="field-icon" />
                            <input
                              type="date"
                              value={formData.startDate}
                              onChange={(e) => handleInputChange('startDate', e.target.value)}
                              className={`quote-input ${errors.startDate ? 'has-error' : ''}`}
                            />
                          </div>
                          {errors.startDate && <span className="error-hint">{errors.startDate}</span>}
                        </div>
                      </div>

                      <div className="form-two-col">
                        <div className="quote-input-group">
                          <label className="quote-label">
                            {lang === 'en' ? 'Expected Duration' : 'المدة المتوقعة للمشروع'}
                          </label>
                          <input
                            type="text"
                            value={formData.duration}
                            onChange={(e) => handleInputChange('duration', e.target.value)}
                            placeholder={lang === 'en' ? 'e.g. 6 Months / 1 Year / Ongoing' : 'مثال: 6 أشهر / سنة واحدة / مستمر'}
                            className="quote-input"
                          />
                        </div>

                        <div className="quote-input-group">
                          <label className="quote-label">
                            {lang === 'en' ? 'Additional Notes / Procurement Remarks' : 'ملاحظات إضافية أو شروط التوريد'}
                          </label>
                          <input
                            type="text"
                            value={formData.additionalNotes}
                            onChange={(e) => handleInputChange('additionalNotes', e.target.value)}
                            placeholder={lang === 'en' ? 'e.g. Need Aramco approved vendor code' : 'مثال: يشترط كود مورد معتمد'}
                            className="quote-input"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* STEP 5: Review & Submit */}
                  {step === 5 && (
                    <div className="form-step-content">
                      <div className="step-heading-group">
                        <span className="step-eyebrow">Step 05 of 05</span>
                        <h3 className="step-headline">
                          {lang === 'en' ? 'Review Your Inquiry Details' : 'مراجعة وتأكيد بيانات الطلب'}
                        </h3>
                        <p className="step-sub">
                          {lang === 'en'
                            ? 'Please verify the accuracy of your information before final submission.'
                            : 'يرجى مراجعة ملخص بيانات الطلب قبل الإرسال النهائي.'}
                        </p>
                      </div>

                      <div className="review-summary-grid">
                        <div className="review-block">
                          <div className="review-block-title">{lang === 'en' ? 'Contact Details' : 'بيانات الاتصال'}</div>
                          <div><strong>Name:</strong> {formData.fullName || '-'}</div>
                          <div><strong>Company:</strong> {formData.companyName || '-'}</div>
                          <div><strong>Phone:</strong> {formData.phone || '-'}</div>
                          <div><strong>Email:</strong> {formData.email || '-'}</div>
                        </div>

                        <div className="review-block">
                          <div className="review-block-title">{lang === 'en' ? 'Service & Scope' : 'الخدمة والنطاق'}</div>
                          <div><strong>Service:</strong> {formData.serviceCategory}</div>
                          <div><strong>Requirement:</strong> {formData.requirementType || '-'}</div>
                          <div><strong>Quantity:</strong> {formData.headcountOrUnits || '-'}</div>
                          <div><strong>Operator:</strong> {formData.operatorNeeded}</div>
                        </div>

                        <div className="review-block full-width">
                          <div className="review-block-title">{lang === 'en' ? 'Location & Schedule' : 'الموقع والجدول'}</div>
                          <div><strong>Location:</strong> {formData.projectLocation || '-'}</div>
                          <div><strong>Start Date:</strong> {formData.startDate || '-'}</div>
                          <div><strong>Duration:</strong> {formData.duration || '-'}</div>
                          {formData.specifications && (
                            <div style={{ marginTop: 8 }}>
                              <strong>Specifications:</strong> {formData.specifications}
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="compliance-disclaimer-box">
                        <ShieldCheck size={20} color="#C5A052" />
                        <p>
                          {lang === 'en'
                            ? 'ORJWAN ZAKI BIN AHMED AL-RABH GENERAL CONTRACTING EST. (CR 2053123342) ensures all proposals comply with Saudi labor regulations and Aramco/TUV HSE standards.'
                            : 'مؤسسة ارجوان زكي بن أحمد آل ربح للمقاولات العامة (سجل تجاري 2053123342) تلتزم بتقديم كافة العروض وفق معايير العمل السعودية واشتراطات السلامة.'}
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Stepper Navigation Buttons */}
                  <div className="stepper-actions-bar">
                    {step > 1 && (
                      <button type="button" onClick={prevStep} className="btn-stepper-back">
                        <ArrowLeft size={18} />
                        <span>{lang === 'en' ? 'Back' : 'السابق'}</span>
                      </button>
                    )}

                    <div style={{ flex: 1 }} />

                    {step < 5 ? (
                      <button type="button" onClick={nextStep} className="btn-stepper-next">
                        <span>{lang === 'en' ? 'Next Step' : 'الخطوة التالية'}</span>
                        <ArrowRight size={18} />
                      </button>
                    ) : (
                      <button 
                        type="button" 
                        onClick={handleSubmit} 
                        disabled={isSubmitting}
                        className="btn-stepper-submit"
                      >
                        {isSubmitting ? (
                          <span>{lang === 'en' ? 'Transmitting Request...' : 'جاري إرسال الطلب...'}</span>
                        ) : (
                          <>
                            <Send size={18} />
                            <span>{lang === 'en' ? 'Submit Official RFP' : 'تأكيد وإرسال طلب التسعيرة'}</span>
                          </>
                        )}
                      </button>
                    )}
                  </div>
                </form>
              )}

            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
