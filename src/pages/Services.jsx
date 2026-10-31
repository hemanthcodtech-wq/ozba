import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Users,
  Truck,
  Building,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Phone,
  MessageCircle,
  HelpCircle,
  ChevronDown,
  Award,
  Layers,
  Wrench,
  HardHat,
  Compass,
  Briefcase,
  Clock,
  MapPin,
  FileText
} from 'lucide-react';
import TextReveal from '../components/TextReveal';
import TiltCard from '../components/TiltCard';
import { motion } from 'motion/react';
import '../styles/Services.css';

export default function Services({ lang, onOpenQuote }) {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const coreServices = [
    {
      number: '01',
      tagEn: 'MANPOWER & TECHNICAL EXPERTISE',
      tagAr: 'القوى العاملة والكوادر الفنية',
      titleEn: 'Professional Support Services',
      titleAr: 'خدمات الدعم المهني والكوادر المتخصصة',
      descEn: 'We supply experienced and technically competent personnel across a wide range of construction, engineering, inspection, quality control, safety, supervision, and skilled trade disciplines. Our workforce solutions are designed to support project teams with qualified professionals and skilled workers according to project scope and requirements.',
      descAr: 'نقوم بتوريد كوادر مؤهلة وفنيين ذوي كفاءات عالية في مختلف مجالات الإنشاءات، الهندسة، التفتيش، مراقبة الجودة، السلامة، والإشراف والمهن الماهرة وفق متطلبات المشروع.',
      image: '/images/service-manpower.jpg',
      categories: [
        'Project Managers, Construction Managers and Planning Engineers',
        'QA/QC Managers, QC Supervisors and discipline-specific QC Inspectors',
        'Civil, Mechanical, Electrical, Piping and Instrumentation Engineers',
        'HSE Managers, Safety Supervisors, Safety Inspectors and Environmental Coordinators',
        'Civil, Mechanical, Piping, Electrical and Instrumentation Supervisors and Foremen',
        'Welding Supervisors, Welding Foremen, Welders and NDT Inspectors',
        'Pipe Fitters, Fabricators, Electricians, Technicians, Millwrights and Plumbers',
        'Crane, Excavator, Forklift, Bobcat and other equipment operators',
        'Drivers, Document Controllers, Secretaries and General Labour'
      ],
      btnEn: 'Enquire About Manpower',
      btnAr: 'طلب توريد كوادر',
      link: '/#manpower-list'
    },
    {
      number: '02',
      tagEn: 'MACHINERY & EQUIPMENT',
      tagAr: 'الآليات والمعدات الثقيلة',
      titleEn: 'Equipment Rentals',
      titleAr: 'تأجير المعدات والآليات الثقيلة',
      descEn: 'We offer construction and industrial equipment rental solutions to support site operations, material handling, earthmoving, lifting, transportation, and other project activities. Our rental options can be discussed according to equipment requirements, rental duration, project location, and availability.',
      descAr: 'نوفر حلول تأجير معدات البناء والصناعة لدعم العمليات الميدانية ومناولة المواد وأعمال الحفر والرفع والنقل بمرونة في مدد الإيجار والخيارات التشغيلية.',
      image: '/images/service-equipment.jpg',
      categories: [
        'Cranes and manlifts (Hydraulic, Rough Terrain & Crawler)',
        'Excavators and backhoe loaders (Wheeled & Tracked)',
        'Wheel loaders, bobcats, dozers and graders',
        'Forklifts and forklifts with certified operators',
        'Dump trucks, flatbeds, lowbed trailers and prime movers',
        'Water tankers, sweet water tankers, diesel or gasoline tankers, and crude oil tankers',
        'Buses, crew vans and emergency ambulances',
        'Generators, compressors, tower lights and motor welding machines',
        'Side booms and specialized petrochemical construction equipment'
      ],
      noteEn: 'Operator availability can be confirmed when requesting a quotation.',
      noteAr: 'يمكن تأكيد توفر المشغلين المعتمدين مع المعدات عند طلب التسعيرة.',
      btnEn: 'Request Equipment Rental',
      btnAr: 'طلب تأجير معدات',
      link: '/equipment'
    },
    {
      number: '03',
      tagEn: 'CONSTRUCTION & PROJECT EXECUTION',
      tagAr: 'المقاولات العامة وتنفيذ المشاريع',
      titleEn: 'General Contracting & Subcontracting',
      titleAr: 'المقاولات العامة والتعاقد من الباطن',
      descEn: 'We undertake civil and mechanical construction subcontracting projects based on the agreed scope of work, technical requirements, project schedules, and client expectations. Our objective is to support project execution through professional coordination, appropriate resources, and attention to quality and worksite requirements.',
      descAr: 'نتولى مشاريع المقاولات من الباطن للأعمال المدنية والميكانيكية وفق نطاق العمل المعتمد والمواصفات الفنية والجداول الزمنية مع الالتزام التام بالجودة والسلامة.',
      image: '/images/service-civil.jpg',
      categories: [
        'Civil construction and structural foundation activities',
        'Mechanical construction, static and rotating equipment erection',
        'Structural steel assembly and multi-tier pipe rack erection',
        'Plant turnaround (TAR) and shutdown maintenance technical support',
        'Comprehensive construction site logistic and maintenance support activities'
      ],
      noteEn: 'Specific scope, responsibilities, resources, and deliverables are agreed upon for each project.',
      noteAr: 'يتم الاتفاق على نطاق العمل المحدد والمسؤوليات والمخرجات لكل مشروع بشكل مستقل.',
      btnEn: 'Discuss Your Project',
      btnAr: 'مناقشة متطلبات المشروع',
      action: 'quote'
    }
  ];

  const manpowerBreakdown = [
    {
      titleEn: 'Engineering & Project Management',
      titleAr: 'الهندسة وإدارة المشاريع',
      image: '/images/hero-slide-3.jpg',
      link: '/#manpower-list',
      roles: 'Project Managers, Construction Managers, Planning Engineers, Civil Engineers, Mechanical Engineers, Piping Engineers, Electrical Engineers, Instrument Engineers, and Hydrotest & Commissioning Engineers.'
    },
    {
      titleEn: 'Quality Control & Inspection',
      titleAr: 'مراقبة الجودة والتفتيش (QA/QC)',
      image: '/images/categories/cat-C.jpg',
      link: '/manpower/qa-qc',
      roles: 'QA/QC Managers, QC Supervisors, Civil QC Inspectors, E&I QC Inspectors, Electrical QC Inspectors, Instrument QC Inspectors, Mechanical QC Inspectors, Welding QC Inspectors, NDT Inspectors, Painting & Coating QC Inspectors, Piping QC Inspectors, and NDT Coordinators.'
    },
    {
      titleEn: 'Health, Safety & Environment',
      titleAr: 'الصحة والسلامة والبيئة (HSE)',
      image: '/images/categories/cat-A.jpg',
      link: '/manpower/hse-safety',
      roles: 'HSE Managers, Safety Supervisors, Safety Inspectors, Environmental Coordinators, and Work Permit Receivers (WPR).'
    },
    {
      titleEn: 'Supervisors & Foremen',
      titleAr: 'المشرفون ومسؤولو الفرق (Foremen)',
      image: '/images/categories/cat-B.jpg',
      link: '/manpower/mechanical',
      roles: 'Civil, Mechanical, Piping, Electrical, Instrumentation, Hydrotest and Commissioning Supervisors, plus Civil, Electrical, Mechanical, Piping and Instrument Foremen.'
    },
    {
      titleEn: 'Skilled Trades & Technical Personnel',
      titleAr: 'المهن الحرفية والفنيون المهرة',
      image: '/images/categories/cat-H.jpg',
      link: '/manpower/piping',
      roles: 'Welders, Plate Welders, Alloy Steel Welders, Pipe Fitters, Pipe Fabricators, Structural Erectors, Structural Fabricators, Electricians, Instrument Technicians, E&I Technicians, AC Technicians, Plumbers, Millwrights, Diesel Mechanics, Scaffolders, Carpenters, Masons, Rebar Workers, Painters, Grinders, Sand Blasters and more.'
    },
    {
      titleEn: 'Operators & Site Support',
      titleAr: 'مشغلو المعدات والدعم الميداني',
      image: '/images/categories/cat-E.jpg',
      link: '/manpower/operators',
      roles: 'Crane Operators, Excavator Operators, Forklift Operators, Bobcat Operators, Side Boom Operators, Boom Truck Operators, Heavy-Duty Drivers, Trailer Drivers, Light-Duty Drivers, Document Controllers, Secretaries and General Labour.'
    }
  ];

  const whyChooseUs = [
    {
      icon: Users,
      titleEn: 'Experienced Personnel',
      titleAr: 'كوادر ذات كفاءة وخبرة',
      descEn: 'Access to a broad range of professional, technical and skilled personnel categories with proven field experience.'
    },
    {
      icon: Truck,
      titleEn: 'Equipment Options',
      titleAr: 'خيارات معدات متعددة',
      descEn: 'Flexible rental solutions for different construction and industrial activities, fully inspected and maintained.'
    },
    {
      icon: ShieldCheck,
      titleEn: 'Commitment to Quality',
      titleAr: 'التزام صارم بالجودة والسلامة',
      descEn: 'Strict adherence to agreed specifications, Aramco/TUV standards, and responsible project coordination.'
    },
    {
      icon: Award,
      titleEn: 'Client-Focused Support',
      titleAr: 'حلول مخصصة للمشاريع',
      descEn: 'Tailored solutions structured around your project scope, timeline, operational demands, and commercial terms.'
    }
  ];

  const processSteps = [
    {
      step: '01',
      titleEn: 'Submit Your Requirements',
      titleAr: 'تقديم متطلبات المشروع',
      descEn: 'Tell us which service you need, the project location, required resources and expected duration.'
    },
    {
      step: '02',
      titleEn: 'Discuss Your Scope',
      titleAr: 'مناقشة نطاق العمل',
      descEn: 'Our team reviews your enquiry and clarifies technical, operational, schedule and commercial requirements.'
    },
    {
      step: '03',
      titleEn: 'Receive a Quotation',
      titleAr: 'استلام عرض السعر',
      descEn: 'We prepare a transparent proposal based on agreed scope, verified rates, availability, and delivery terms.'
    },
    {
      step: '04',
      titleEn: 'Confirm & Coordinate',
      titleAr: 'التأكيد وبدء التنسيق',
      descEn: 'Once approved, the agreed service or equipment arrangement is rapidly deployed according to confirmed schedule.'
    }
  ];

  const faqs = [
    {
      qEn: 'What services does ORJWAN provide?',
      qAr: 'ما هي الخدمات الرئيسية التي تقدمها مؤسسة أرجوان؟',
      aEn: 'We provide professional support services, certified manpower solutions, heavy equipment rentals, and general contracting and subcontracting support for civil and mechanical projects.',
      aAr: 'نقدم خدمات الدعم المهني، توريد القوى العاملة المعتمدة، تأجير المعدات والآليات الثقيلة، وأعمال المقاولات العامة والتعاقد من الباطن للمشاريع المدنية والميكانيكية.'
    },
    {
      qEn: 'Can we request specific technical personnel?',
      qAr: 'هل يمكننا طلب كوادر فنية بتخصصات واعتمادات محددة؟',
      aEn: 'Yes. Submit the required roles, quantities, project location, and expected duration so our recruitment and technical teams can provide matching certified CVs.',
      aAr: 'نعم بكل تأكيد. يمكنك تقديم المسميات المطلوبة والكميات وموقع المشروع والمدة، وسيقوم فريقنا بمطابقة وتوفير السير الذاتية المعتمدة فوراً.'
    },
    {
      qEn: 'Can equipment be rented with operators?',
      qAr: 'هل يمكن استئجار المعدات مع المشغلين المعتمدين؟',
      aEn: 'Yes. Certain equipment options are available with Saudi Aramco and TUV third-party certified operators. Please specify your preference when submitting your enquiry.',
      aAr: 'نعم، نوفر خيارات تأجير المعدات مع مشغلين معتمدين من أرامكو وتوف أو بدون مشغلين حسب رغبة العميل.'
    },
    {
      qEn: 'How can we request a quotation?',
      qAr: 'كيف يمكننا طلب تسعيرة رسمية لمشروعنا؟',
      aEn: 'You can contact our team by phone (+966 59 076 7595) or submit the online quotation form. Pricing and availability will be confirmed promptly.',
      aAr: 'يمكنك التواصل معنا هاتفياً أو عبر واتساب أو تعبئة نموذج طلب التسعيرة الإلكتروني، وسنقوم بالرد بعرض رسمي مفصل.'
    },
    {
      qEn: 'Does ORJWAN support projects outside Dammam?',
      qAr: 'هل تدعم أرجوان المشاريع خارج مدينة الدمام؟',
      aEn: 'Yes. We support projects across the Eastern Province (Jubail, Dammam, Khobar, Ras Al-Khair, Tanajib) as well as Riyadh, Yanbu, Neom, and Western Region projects.',
      aAr: 'نعم، نقدم خدماتنا في كافة أنحاء المنطقة الشرقية (الجبيل، الدمام، الخبر، رأس الخير، تناقيب) بالإضافة إلى الرياض، ينبع، نيوم، والغربية.'
    }
  ];

  return (
    <div className="services-page-wrap">
      {/* 1. Hero Section */}
      <section className="services-hero-section">
        <div className="services-hero-bg">
          <img 
            src="/images/hero-construction-sunset.jpg" 
            alt="ORJWAN Construction & Industrial Solutions" 
            className="services-hero-bg-img" 
          />
          <div className="services-hero-overlay"></div>
        </div>

        <div className="container services-hero-container">
          <div className="services-hero-grid">
            <div className="services-hero-content">
              <span className="services-gold-tag">
                {lang === 'en' ? 'OUR SERVICES' : 'خدماتنا المتكاملة'}
              </span>
              <TextReveal delay={0.1}>
                <h1 className="services-hero-title">
                  {lang === 'en' 
                    ? 'Comprehensive Solutions for Construction & Industrial Projects' 
                    : 'حلول شاملة وموثوقة للمشاريع الإنشائية والصناعية'}
                </h1>
              </TextReveal>
              <TextReveal delay={0.2}>
                <p className="services-hero-desc">
                  {lang === 'en'
                    ? 'ORJWAN ZAKI BIN AHMED AL-RABH GENERAL CONTRACTING EST. delivers professional support services, skilled manpower solutions, equipment rentals, and general contracting support to meet the diverse needs of construction, maintenance, civil, and mechanical projects across the Kingdom of Saudi Arabia.'
                    : 'تقدم مؤسسة أرجوان زكي بن أحمد آل ربح للمقاولات العامة خدمات الدعم المهني المتخصص، حلول القوى العاملة، تأجير المعدات الثقيلة، والمقاولات العامة لتلبية احتياجات مشاريع الإنشاءات والصيانة المدنية والميكانيكية في المملكة العربية السعودية.'}
                </p>
              </TextReveal>
              <p className="services-hero-focus">
                {lang === 'en'
                  ? 'Our focus is on dependable service, technically competent personnel, suitable equipment, and a commitment to quality and efficient project support.'
                  : 'ينصب تركيزنا على تقديم خدمات موثوقة، وكوادر فنية مؤهلة، ومعدات ملائمة، مع التزام تام بالجودة ودعم إنجاز المشاريع بكفاءة عالية.'}
              </p>

              <div className="services-hero-btns">
                <button className="btn-gold" onClick={onOpenQuote}>
                  {lang === 'en' ? 'Request a Quote' : 'طلب تسعيرة'}
                  <ArrowRight size={18} />
                </button>
                <Link to="/contact" className="btn-outline-white">
                  {lang === 'en' ? 'Contact Our Team' : 'تواصل مع فريقنا'}
                </Link>
              </div>
            </div>

            {/* Right Column: Prominent High-Definition Showcase Image Card */}
            <div className="services-hero-media-wrapper">
              <div className="services-hero-card">
                <img 
                  src="/images/hero-banner-enhanced.jpg" 
                  alt="ORJWAN Construction & Industrial Solutions" 
                  className="services-hero-card-img" 
                />
                <div className="services-hero-card-glow"></div>
                <div className="services-hero-card-caption">
                  <div className="services-hero-card-badge">
                    <ShieldCheck size={15} />
                    <span>{lang === 'en' ? 'Verified Project Execution' : 'تنفيذ معتمد للمشاريع'}</span>
                  </div>
                  <div className="services-hero-card-sub">
                    {lang === 'en' ? 'Civil • Mechanical • Manpower • Rentals' : 'مدني • ميكانيكي • كوادر • تأجير معدات'}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 1.5. Featured Project Solutions (The 3 Core Cards from Home Page) */}
      <section className="services-overview-cards-section">
        <div className="container">
          <div className="section-header-center" style={{ marginBottom: 36 }}>
            <span className="section-label-gold">
              {lang === 'en' ? 'EXCELLENCE IN EXECUTION' : 'تميز التنفيذ والأداء'}
            </span>
            <h2 className="section-main-title">
              {lang === 'en' ? 'Core Project Solutions' : 'حلولنا الرئيسية للمشاريع'}
            </h2>
            <p className="section-sub-title">
              {lang === 'en'
                ? 'Three pillars of support tailored for industrial plant operations and general contracting.'
                : 'ثلاث ركائز دعم مخصصة لعمليات المصانع الصناعية والمقاولات العامة.'}
            </p>
          </div>

          <div className="ref-services-grid">
            <TiltCard>
              <div className="ref-service-card">
                <div className="ref-service-img-wrap">
                  <img src="/images/service-manpower.jpg" alt="Professional Support Services" className="ref-service-img" />
                </div>
                <div className="ref-service-body">
                  <span className="service-pillar-pill">01 • MANPOWER</span>
                  <h3 className="ref-service-heading">{lang === 'en' ? 'Professional Support Services' : 'خدمات الدعم المهني'}</h3>
                  <p className="ref-service-text">{lang === 'en' ? 'Skilled manpower for all categories including Aramco & TUV certified trades.' : 'قوى عاملة وكوادر فنية متخصصة لكافة الفئات مع اعتمادات أرامكو وتوف.'}</p>
                  <a href="#manpower-categories" className="ref-service-learn">
                    <span>{lang === 'en' ? 'Explore Manpower' : 'استعراض الكوادر'}</span>
                    <ArrowRight size={15} />
                  </a>
                </div>
              </div>
            </TiltCard>

            <TiltCard>
              <div className="ref-service-card">
                <div className="ref-service-img-wrap">
                  <img src="/images/service-equipment.jpg" alt="Equipment Rentals" className="ref-service-img" />
                </div>
                <div className="ref-service-body">
                  <span className="service-pillar-pill">02 • MACHINERY</span>
                  <h3 className="ref-service-heading">{lang === 'en' ? 'Equipment Rentals' : 'تأجير المعدات'}</h3>
                  <p className="ref-service-text">{lang === 'en' ? 'Top-quality and well-maintained construction, lifting and earthmoving fleet.' : 'أسطول متكامل من معدات الرفع والحفر والنقل بصيانة دورية مستمرة.'}</p>
                  <Link to="/equipment" className="ref-service-learn">
                    <span>{lang === 'en' ? 'View Equipment Fleet' : 'استعراض أسطول المعدات'}</span>
                    <ArrowRight size={15} />
                  </Link>
                </div>
              </div>
            </TiltCard>

            <TiltCard>
              <div className="ref-service-card">
                <div className="ref-service-img-wrap">
                  <img src="/images/service-civil.jpg" alt="Construction & Project Support" className="ref-service-img" />
                </div>
                <div className="ref-service-body">
                  <span className="service-pillar-pill">03 • CONTRACTING</span>
                  <h3 className="ref-service-heading">{lang === 'en' ? 'Construction & Project Support' : 'دعم الإنشاءات والمشاريع'}</h3>
                  <p className="ref-service-text">{lang === 'en' ? 'Reliable workforce and subcontracting for civil and mechanical projects.' : 'تنفيذ الأعمال المدنية والميكانيكية والمقاولات من الباطن بأعلى المعايير.'}</p>
                  <button onClick={onOpenQuote} className="ref-service-learn" style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>
                    <span>{lang === 'en' ? 'Discuss Your Project' : 'ناقش مشروعك'}</span>
                    <ArrowRight size={15} />
                  </button>
                </div>
              </div>
            </TiltCard>
          </div>
        </div>
      </section>

      {/* 2. Our Core Services Detailed */}
      <section className="core-services-section section-padding">
        <div className="container">
          <div className="section-header-center">
            <span className="section-label-gold">
              {lang === 'en' ? 'CORE CAPABILITIES' : 'مجالات التميز'}
            </span>
            <TextReveal delay={0.1}>
              <h2 className="section-main-title">
                {lang === 'en' ? 'Our Core Services Breakdown' : 'التفاصيل الشاملة لخدماتنا'}
              </h2>
            </TextReveal>
            <TextReveal delay={0.2}>
              <p className="section-sub-title">
                {lang === 'en'
                  ? 'Professional expertise, dependable resources, and project-focused solutions.'
                  : 'خبرة مهنية متقدمة، موارد موثوقة، وحلول هندسية مكرسة لنجاح المشاريع.'}
              </p>
            </TextReveal>
          </div>

          <div className="core-services-list">
            {coreServices.map((srv, idx) => (
              <div key={idx} className="core-service-card">
                <div className="core-service-media">
                  <img src={srv.image} alt={srv.titleEn} className="core-service-img" />
                  <div className="core-service-media-overlay"></div>
                  <span className="core-service-num">{srv.number}</span>
                </div>

                <div className="core-service-body">
                  <div className="core-service-tag">{srv.number} / {lang === 'en' ? srv.tagEn : srv.tagAr}</div>
                  <h3 className="core-service-title">{lang === 'en' ? srv.titleEn : srv.titleAr}</h3>
                  <p className="core-service-desc">{lang === 'en' ? srv.descEn : srv.descAr}</p>

                  <h4 className="categories-list-header">
                    {lang === 'en' ? 'Service Categories Include:' : 'تشمل الفئات والتخصصات:'}
                  </h4>
                  <ul className="core-service-bullets">
                    {srv.categories.map((cat, cIdx) => (
                      <li key={cIdx} className="bullet-item">
                        <CheckCircle2 size={16} className="bullet-icon" />
                        <span>{cat}</span>
                      </li>
                    ))}
                  </ul>

                  {(srv.noteEn || srv.noteAr) && (
                    <div className="core-service-note">
                      <strong>{lang === 'en' ? 'Note: ' : 'ملاحظة: '}</strong>
                      {lang === 'en' ? srv.noteEn : srv.noteAr}
                    </div>
                  )}

                  <div className="core-service-action">
                    {srv.action === 'quote' ? (
                      <button className="btn-service-action" onClick={onOpenQuote}>
                        <span>{lang === 'en' ? srv.btnEn : srv.btnAr}</span>
                        <ArrowRight size={16} />
                      </button>
                    ) : (
                      <Link to={srv.link} className="btn-service-action">
                        <span>{lang === 'en' ? srv.btnEn : srv.btnAr}</span>
                        <ArrowRight size={16} />
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Our Professional Manpower Categories */}
      <section className="manpower-breakdown-section section-padding" id="manpower-categories">
        <div className="container">
          <div className="section-header-center">
            <span className="section-label-gold">
              {lang === 'en' ? 'TALENT NETWORK' : 'شبكة الكوادر المتخصصة'}
            </span>
            <TextReveal delay={0.1}>
              <h2 className="section-main-title">
                {lang === 'en' ? 'Our Professional Manpower Categories' : 'تصنيفات القوى العاملة المهنية'}
              </h2>
            </TextReveal>
            <h3 className="section-sub-gold">
              {lang === 'en' ? 'The Right People for the Right Project' : 'الكوادر المناسبة للمشروع المناسب'}
            </h3>
            <TextReveal delay={0.2}>
              <p className="section-sub-title">
                {lang === 'en'
                  ? 'Our professional support services cover multiple technical and operational disciplines. Personnel requirements can be discussed according to the nature, schedule, and scope of each project.'
                  : 'تغطي خدمات الدعم المهني لدينا تخصصات فنية وتشغيلية متعددة تلبي متطلبات العقود الشهرية والسنوية ومشاريع التوسعة.'}
              </p>
            </TextReveal>
          </div>

          <div className="manpower-categories-grid">
            {manpowerBreakdown.map((item, idx) => (
              <div key={idx} className="manpower-role-card">
                {/* Media Image Header (from Home Page images) */}
                <div className="manpower-role-card-media">
                  <img 
                    src={item.image} 
                    alt={item.titleEn} 
                    className="manpower-role-card-img" 
                    loading="lazy" 
                  />
                  <div className="manpower-role-card-overlay"></div>
                  
                  <span className="manpower-role-card-badge">0{idx + 1}</span>
                  <span className="manpower-role-card-pill">
                    <CheckCircle2 size={13} />
                    <span>{lang === 'en' ? 'Verified Trades' : 'مهن معتمدة ومجهزة'}</span>
                  </span>

                  <div className="manpower-role-card-media-title">
                    <h4 className="role-card-title">{lang === 'en' ? item.titleEn : item.titleAr}</h4>
                  </div>
                </div>

                <div className="manpower-role-card-body">
                  <p className="role-card-content">{item.roles}</p>

                  <div className="role-card-footer">
                    <button className="btn-role-inquire" onClick={onOpenQuote}>
                      <span>{lang === 'en' ? 'Inquire for Discipline' : 'طلب هذا التخصص'}</span>
                      <ArrowRight size={14} />
                    </button>

                    <Link to={item.link} className="btn-role-view">
                      <span>{lang === 'en' ? 'View Details' : 'عرض التفاصيل'}</span>
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: 44 }}>
            <Link to="/#manpower-list" className="btn-gold">
              {lang === 'en' ? 'View Full 82-Role Manpower Catalog' : 'استعراض الدليل الشامل لـ 82 مهنة'}
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Why Choose ORJWAN? */}
      <section className="why-choose-section section-padding">
        <div className="container">
          <div className="section-header-center">
            <span className="section-label-gold">
              {lang === 'en' ? 'WHY CHOOSE ORJWAN?' : 'لماذا تختار أرجوان؟'}
            </span>
            <h2 className="section-main-title">
              {lang === 'en' 
                ? 'A Dependable Partner for Your Project Requirements' 
                : 'شريكك الموثوق لتلبية كافة احتياجات المشاريع'}
            </h2>
          </div>

          <div className="why-choose-grid">
            {whyChooseUs.map((w, idx) => {
              const Icon = w.icon;
              return (
                <div key={idx} className="why-feature-box">
                  <div className="why-icon-wrap">
                    <Icon size={26} />
                  </div>
                  <h4 className="why-feature-title">{lang === 'en' ? w.titleEn : w.titleAr}</h4>
                  <p className="why-feature-desc">{lang === 'en' ? w.descEn : w.descAr}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. Our Service Request Process */}
      <section className="process-section section-padding">
        <div className="container">
          <div className="section-header-center">
            <span className="section-label-gold">
              {lang === 'en' ? 'HOW WE WORK' : 'آلية العمل'}
            </span>
            <h2 className="section-main-title">
              {lang === 'en' ? 'Our Service Request Process' : 'خطوات طلب الخدمة'}
            </h2>
            <p className="section-sub-gold">
              {lang === 'en' ? 'From Enquiry to Project Support' : 'من الاستفسار حتى بدء الدعم الميداني'}
            </p>
          </div>

          <div className="process-grid">
            {processSteps.map((p, idx) => (
              <div key={idx} className="process-card">
                <div className="process-num-circle">{p.step}</div>
                <h4 className="process-card-title">{lang === 'en' ? p.titleEn : p.titleAr}</h4>
                <p className="process-card-desc">{lang === 'en' ? p.descEn : p.descAr}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Frequently Asked Questions */}
      <section className="faq-section section-padding">
        <div className="container">
          <div className="section-header-center">
            <span className="section-label-gold">
              {lang === 'en' ? 'COMMON QUESTIONS' : 'الأسئلة الشائعة'}
            </span>
            <h2 className="section-main-title">
              {lang === 'en' ? 'Frequently Asked Questions' : 'الأسئلة المتكررة حول خدماتنا'}
            </h2>
          </div>

          <div className="faq-list">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className={`faq-item ${isOpen ? 'active' : ''}`}>
                  <button className="faq-question-btn" onClick={() => toggleFaq(idx)}>
                    <span className="faq-q-text">{lang === 'en' ? faq.qEn : faq.qAr}</span>
                    <ChevronDown size={18} className={`faq-chevron ${isOpen ? 'rotate' : ''}`} />
                  </button>
                  {isOpen && (
                    <div className="faq-answer-body">
                      <p>{lang === 'en' ? faq.aEn : faq.aAr}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. Final Call to Action & 8. Contact Details */}
      <section className="services-final-cta-section">
        <div className="services-cta-bg">
          <img 
            src="/images/heavy-equipment-fleet.jpg" 
            alt="ORJWAN Equipment & Construction Site" 
            className="services-cta-bg-img" 
          />
          <div className="services-cta-gradient"></div>
        </div>

        <div className="container services-cta-container">
          <div className="services-cta-box">
            <span className="cta-gold-badge">
              {lang === 'en' ? "LET'S WORK TOGETHER" : 'فلنعمل معاً'}
            </span>
            <h2 className="cta-main-heading">
              {lang === 'en' ? 'Looking for Reliable Project Support?' : 'هل تبحث عن دعم موثوق لمشروعك القادم؟'}
            </h2>
            <p className="cta-sub-text">
              {lang === 'en'
                ? 'Tell us about your manpower, equipment rental or contracting requirements. Our team is ready to discuss the next steps with you.'
                : 'أخبرنا باحتياجاتك من القوى العاملة أو تأجير المعدات أو أعمال المقاولات، وفريقنا مستعد لمناقشة التفاصيل وتقديم أفضل العروض.'}
            </p>

            <div className="cta-actions-row">
              <button className="btn-gold-large" onClick={onOpenQuote}>
                <FileText size={18} />
                <span>{lang === 'en' ? 'Request a Quote' : 'طلب تسعيرة رسمية'}</span>
                <ArrowRight size={18} />
              </button>

              <a href="tel:0590767595" className="btn-cta-call">
                <Phone size={18} />
                <span>0590767595</span>
              </a>

              <a 
                href={`https://wa.me/966590767595?text=${encodeURIComponent('Hello ORJWAN Contracting, I would like to inquire about your services.')}`}
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-cta-whatsapp"
              >
                <MessageCircle size={18} />
                <span>{lang === 'en' ? 'WhatsApp' : 'واتساب'}</span>
              </a>
            </div>

            {/* 8. Contact Details Strip */}
            <div className="cta-contact-details-strip">
              <div className="cta-info-item">
                <Building size={16} className="cta-info-icon" />
                <div>
                  <div className="cta-info-lbl">Company</div>
                  <div className="cta-info-val">ORJWAN ZAKI BIN AHMED AL-RABH GENERAL CONTRACTING EST.</div>
                </div>
              </div>

              <div className="cta-info-item">
                <ShieldCheck size={16} className="cta-info-icon" />
                <div>
                  <div className="cta-info-lbl">CR Number</div>
                  <div className="cta-info-val">2053123342</div>
                </div>
              </div>

              <div className="cta-info-item">
                <MapPin size={16} className="cta-info-icon" />
                <div>
                  <div className="cta-info-lbl">Office Address</div>
                  <div className="cta-info-val">EDJC8593, 1st Floor, 8593 Al Khazzan St, Dammam 32242–3513, KSA</div>
                </div>
              </div>

              <div className="cta-info-item">
                <Phone size={16} className="cta-info-icon" />
                <div>
                  <div className="cta-info-lbl">Direct Phone</div>
                  <div className="cta-info-val">0590767595 / +966 59 076 7595</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
