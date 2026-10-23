import React, { useState } from 'react';
import { 
  Calculator, 
  Truck, 
  Users, 
  MapPin, 
  Calendar, 
  ShieldCheck, 
  FileSpreadsheet, 
  Send, 
  MessageCircle, 
  Sparkles,
  CheckCircle2,
  Clock,
  ArrowRight
} from 'lucide-react';
import './FleetEstimator.css';

export default function FleetEstimator({ lang, onOpenQuote, showToast }) {
  const [serviceType, setServiceType] = useState('equipment'); // 'equipment' | 'manpower' | 'turnkey'
  const [selectedItem, setSelectedItem] = useState('crane');
  const [duration, setDuration] = useState('monthly');
  const [region, setRegion] = useState('eastern');
  const [withOperator, setWithOperator] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [calculated, setCalculated] = useState(false);

  const equipmentOptions = [
    { id: 'crane', nameEn: 'Hydraulic Mobile Crane (50T – 100T)', nameAr: 'رافعة هيدروليكية متحركة (٥٠ - ١٠٠ طن)', baseRate: 14500, unit: 'month' },
    { id: 'manlift', nameEn: 'Telescopic Boom Manlift (20m – 28m)', nameAr: 'رافعة أفراد تلسكوبية (٢٠ - ٢٨ م)', baseRate: 8500, unit: 'month' },
    { id: 'excavator', nameEn: 'Heavy Excavator (CAT 320D/330)', nameAr: 'حفارة ثقيلة (كاتربيلر 320D)', baseRate: 11000, unit: 'month' },
    { id: 'tanker', nameEn: 'Water / Fuel Tanker (32,000L)', nameAr: 'صهريج مياه / وقود (٣٢ ألف لتر)', baseRate: 9500, unit: 'month' },
    { id: 'trailer', nameEn: 'Flatbed & Lowbed Trailer (40ft - 60T)', nameAr: 'شاحنة ومقطورة مسطحة ولوابد ٦٠ طن', baseRate: 12000, unit: 'month' },
    { id: 'generator', nameEn: 'Heavy Power Generator (250 – 500 kVA)', nameAr: 'مولد كهربائي صناعي (٢٥٠ - ٥٠٠ ك.ف.أ)', baseRate: 7500, unit: 'month' }
  ];

  const manpowerOptions = [
    { id: 'aramco_wpr', nameEn: 'Saudi Aramco Certified WPR (Work Permit Receiver)', nameAr: 'مستلم تصاريح عمل معتمد من أرامكو', baseRate: 7500, unit: 'month' },
    { id: 'hse_officer', nameEn: 'Certified Safety / HSE Officers (OSHA/NEBOSH)', nameAr: 'مسؤولو ومشرفو سلامة وصحة مهنية معتمدون', baseRate: 8000, unit: 'month' },
    { id: 'certified_riggers', nameEn: 'Aramco Level II / III Certified Riggers', nameAr: 'ريجر معتمد من أرامكو (المستوى الثاني والثالث)', baseRate: 6500, unit: 'month' },
    { id: 'civil_foreman', nameEn: 'Civil & Mechanical Supervisors / Foremen', nameAr: 'مشرفو أعمال مدنية وميكانيكية', baseRate: 7000, unit: 'month' },
    { id: 'certified_welders', nameEn: '6G / TIG / SMAW Multi-Process Welders', nameAr: 'لحامون معتمدون 6G وTIG وSMAW', baseRate: 6000, unit: 'month' },
    { id: 'equipment_operators', nameEn: 'Heavy Equipment & Crane Certified Operators', nameAr: 'مشغلو رافعات ومعدات ثقيلة برخص سارية', baseRate: 5500, unit: 'month' }
  ];

  const regions = [
    { id: 'eastern', nameEn: 'Eastern Province (Dammam, Jubail, Khobar, Ras Tanura)', nameAr: 'المنطقة الشرقية (الدمام، الجبيل، الخبر، رأس تنورة)', mult: 1.0, dispatch: 'Immediate (12–24h)' },
    { id: 'riyadh', nameEn: 'Central Region (Riyadh Mega Projects, Diriyah)', nameAr: 'المنطقة الوسطى (مشاريع الرياض الكبرى، الدرعية)', mult: 1.08, dispatch: '24–48 Hours' },
    { id: 'neom_redsea', nameEn: 'Western & Northern Hubs (NEOM, Red Sea, Yanbu)', nameAr: 'المشاريع الكبرى (نيوم، البحر الأحمر، ينبع)', mult: 1.15, dispatch: 'Direct Mobilization' }
  ];

  const durations = [
    { id: 'daily', nameEn: 'Daily / Shift Basis', nameAr: 'يومي / حسب الوردية', factor: 0.06 },
    { id: 'weekly', nameEn: 'Weekly Contract', nameAr: 'عقد أسبوعي', factor: 0.28 },
    { id: 'monthly', nameEn: 'Monthly Lease (Recommended)', nameAr: 'عقد شهري (الأكثر طلباً)', factor: 1.0 },
    { id: 'longterm', nameEn: 'Long-Term Project (6+ Months)', nameAr: 'مشروع طويل الأجل (+6 أشهر - تخفيض خاص)', factor: 0.88 }
  ];

  const currentList = serviceType === 'equipment' ? equipmentOptions : manpowerOptions;
  const activeItemObj = currentList.find(x => x.id === selectedItem) || currentList[0];
  const activeRegionObj = regions.find(x => x.id === region) || regions[0];
  const activeDurationObj = durations.find(x => x.id === duration) || durations[2];

  // Rough estimation calculation
  const baseMonthly = activeItemObj.baseRate * quantity;
  const operatorFee = (serviceType === 'equipment' && withOperator) ? 3500 * quantity : 0;
  const calculatedEstimate = Math.round((baseMonthly + operatorFee) * activeDurationObj.factor * activeRegionObj.mult);

  const handleSendWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello ORJWAN Contracting,\nI used your online RFQ Estimator:\n- Service: ${serviceType.toUpperCase()}\n- Requirement: ${activeItemObj.nameEn}\n- Quantity: ${quantity}\n- Duration: ${activeDurationObj.nameEn}\n- Location: ${activeRegionObj.nameEn}\n- Operator: ${withOperator ? 'Yes, Certified Operator' : 'Bare Lease'}\n\nPlease share your formal stamped quotation and availability.`
    );
    window.open(`https://wa.me/966568565143?text=${text}`, '_blank');
  };

  return (
    <section className="fleet-estimator-section" id="fleet-estimator">
      <div className="container">
        
        <div className="estimator-header">
          <span className="estimator-tag">
            <Sparkles size={16} />
            {lang === 'en' ? 'INTERACTIVE PROJECT RFQ BUILDER' : 'حاسبة تقديرية تفاعلية لعروض الأسعار'}
          </span>
          <h2 className="estimator-title">
            {lang === 'en' ? 'Instant Fleet & Manpower Quotation Estimator' : 'حاسبة تسعير متطلبات المشاريع والمعدات الفورية'}
          </h2>
          <p className="estimator-subtitle">
            {lang === 'en' 
              ? 'Customize your heavy machinery or workforce deployment package, view estimated mobilization lead time, and export directly to our commercial desk.' 
              : 'حدد مواصفات أسطول المعدات أو الكوادر الفنية لمشروعك، وتعرف على مدة التجهيز وقدم طلب التسعير المباشر.'}
          </p>
        </div>

        <div className="estimator-card-wrapper">
          {/* Service Switcher Tabs */}
          <div className="estimator-tabs">
            <button 
              className={`estimator-tab ${serviceType === 'equipment' ? 'active' : ''}`}
              onClick={() => { setServiceType('equipment'); setSelectedItem('crane'); }}
            >
              <Truck size={18} />
              <span>{lang === 'en' ? 'Heavy Plant & Machinery' : 'أسطول المعدات الثقيلة'}</span>
            </button>
            <button 
              className={`estimator-tab ${serviceType === 'manpower' ? 'active' : ''}`}
              onClick={() => { setServiceType('manpower'); setSelectedItem('aramco_wpr'); }}
            >
              <Users size={18} />
              <span>{lang === 'en' ? 'Technical Manpower' : 'الكوادر الفنية المتخصصة'}</span>
            </button>
          </div>

          <div className="estimator-grid">
            
            {/* Left Controls Column */}
            <div className="estimator-controls">
              
              {/* 1. Item Selection */}
              <div className="estimator-control-group">
                <label className="estimator-label">
                  {serviceType === 'equipment' 
                    ? (lang === 'en' ? '1. Select Equipment Class & Model' : '١. اختر نوع وفئة المعدة المطلوبة')
                    : (lang === 'en' ? '1. Select Technical Skill Category' : '١. اختر التخصص الفني والمهني')}
                </label>
                <div className="estimator-options-list">
                  {currentList.map(item => (
                    <div 
                      key={item.id}
                      className={`estimator-radio-card ${selectedItem === item.id ? 'selected' : ''}`}
                      onClick={() => setSelectedItem(item.id)}
                    >
                      <div className="radio-indicator">
                        <div className="radio-dot"></div>
                      </div>
                      <div className="radio-content">
                        <div className="radio-title">{lang === 'en' ? item.nameEn : item.nameAr}</div>
                        <div className="radio-sub">
                          {serviceType === 'equipment' ? 'TUV / Aramco Inspected Sticker Available' : 'Saudi Aramco / OSHA Verified'}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 2. Quantity & Duration */}
              <div className="estimator-row-duo">
                <div className="estimator-control-group">
                  <label className="estimator-label">
                    {lang === 'en' ? '2. Number of Units / Staff' : '٢. عدد الوحدات / الكوادر'}
                  </label>
                  <div className="quantity-stepper">
                    <button 
                      type="button" 
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      aria-label="Decrease"
                    >-</button>
                    <span className="quantity-num">{quantity}</span>
                    <button 
                      type="button" 
                      onClick={() => setQuantity(quantity + 1)}
                      aria-label="Increase"
                    >+</button>
                  </div>
                </div>

                <div className="estimator-control-group">
                  <label className="estimator-label">
                    {lang === 'en' ? '3. Project Duration' : '٣. مدة التعاقد التقديرية'}
                  </label>
                  <select 
                    className="estimator-select"
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                  >
                    {durations.map(d => (
                      <option key={d.id} value={d.id}>
                        {lang === 'en' ? d.nameEn : d.nameAr}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* 3. Location Region */}
              <div className="estimator-control-group">
                <label className="estimator-label">
                  {lang === 'en' ? '4. Project Location & Mobilization Zone' : '٤. موقع المشروع ومنطقة التوريد'}
                </label>
                <select 
                  className="estimator-select"
                  value={region}
                  onChange={(e) => setRegion(e.target.value)}
                >
                  {regions.map(r => (
                    <option key={r.id} value={r.id}>
                      {lang === 'en' ? r.nameEn : r.nameAr}
                    </option>
                  ))}
                </select>
              </div>

              {/* 4. Certified Operator Toggle (for equipment) */}
              {serviceType === 'equipment' && (
                <div className="operator-toggle-card">
                  <label className="toggle-switch">
                    <input 
                      type="checkbox" 
                      checked={withOperator}
                      onChange={(e) => setWithOperator(e.target.checked)}
                    />
                    <span className="slider round"></span>
                  </label>
                  <div>
                    <div className="toggle-title">
                      {lang === 'en' ? 'Include Licensed & Certified Operator' : 'تضمين مشغل معتمد برخصة قيادة سارية'}
                    </div>
                    <div className="toggle-desc">
                      {lang === 'en' 
                        ? 'Equipped with valid safety badge, third-party certification & Aramco approval.' 
                        : 'يشمل سائق/مشغل معتمد بشهادات فحص طرف ثالث واختبارات قيادة آمنة.'}
                    </div>
                  </div>
                </div>
              )}

            </div>

            {/* Right Summary Breakdown Column */}
            <div className="estimator-summary-panel">
              <div className="summary-badge-top">
                <ShieldCheck size={18} color="#C5A052" />
                <span>{lang === 'en' ? 'COMMERCIAL RFQ ESTIMATE' : 'ملخص تقديري أولي للعرض'}</span>
              </div>

              <h3 className="summary-item-name">
                {lang === 'en' ? activeItemObj.nameEn : activeItemObj.nameAr}
              </h3>

              <div className="summary-specs-list">
                <div className="spec-row">
                  <span>{lang === 'en' ? 'Deployment Units:' : 'العدد المطلوب:'}</span>
                  <strong>{quantity} {lang === 'en' ? (quantity > 1 ? 'Units' : 'Unit') : 'وحدة'}</strong>
                </div>
                <div className="spec-row">
                  <span>{lang === 'en' ? 'Contract Term:' : 'مدة العقد:'}</span>
                  <strong>{lang === 'en' ? activeDurationObj.nameEn : activeDurationObj.nameAr}</strong>
                </div>
                <div className="spec-row">
                  <span>{lang === 'en' ? 'Delivery Zone:' : 'منطقة العمل:'}</span>
                  <strong>{activeRegionObj.nameEn.split('(')[0]}</strong>
                </div>
                <div className="spec-row">
                  <span>{lang === 'en' ? 'Mobilization Speed:' : 'سرعة التجهيز:'}</span>
                  <span className="lead-time-pill">
                    <Clock size={13} />
                    {activeRegionObj.dispatch}
                  </span>
                </div>
                {serviceType === 'equipment' && (
                  <div className="spec-row">
                    <span>{lang === 'en' ? 'Operator Status:' : 'حالة المشغل:'}</span>
                    <strong>{withOperator ? (lang === 'en' ? 'Certified Operator Included' : 'مع مشغل معتمد') : (lang === 'en' ? 'Bare Equipment Lease' : 'تأجير بدون مشغل')}</strong>
                  </div>
                )}
              </div>

              <div className="estimate-pricing-box">
                <div className="pricing-label">
                  {lang === 'en' ? 'Indicative Budget Estimate (SAR)*' : 'التقدير المالي الاسترشادي (ريال سعودي)*'}
                </div>
                <div className="pricing-figure">
                  <span className="currency">SAR</span>
                  <span className="amount">{calculatedEstimate.toLocaleString()}</span>
                  <span className="term">/ {lang === 'en' ? activeDurationObj.nameEn.split(' ')[0] : 'فترة'}</span>
                </div>
                <div className="pricing-disclaimer">
                  {lang === 'en' 
                    ? '*Final binding rates depend on site hazard assessment, overtime shifts, and custom mobilization requirements.'
                    : '*تخضع الأسعار النهائية لموافقة الإدارة التجارية وفق ساعات العمل وظروف الموقع الميدانية.'}
                </div>
              </div>

              <div className="summary-actions">
                <button 
                  className="btn-whatsapp-rfq"
                  onClick={handleSendWhatsApp}
                >
                  <MessageCircle size={18} />
                  <span>{lang === 'en' ? 'WhatsApp this RFQ to Dispatch' : 'إرسال التقدير عبر الواتساب فوراً'}</span>
                </button>
                <button 
                  className="btn-formal-rfq"
                  onClick={onOpenQuote}
                >
                  <FileSpreadsheet size={18} />
                  <span>{lang === 'en' ? 'Request Official Stamped Quote' : 'طلب عرض سعر رسمي مختوم'}</span>
                </button>
              </div>

              <div className="summary-cr-footer">
                <CheckCircle2 size={14} color="#10B981" />
                <span>CR No. 2053123342 • Dammam, Eastern Province, KSA</span>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
