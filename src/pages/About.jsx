import React from 'react';
import { Link } from 'react-router-dom';
import {
  ShieldCheck,
  Target,
  Eye,
  Award,
  Users,
  CheckCircle2,
  ArrowRight,
  Phone,
  Building,
  MapPin,
  FileText,
  Clock,
  Sparkles,
  Layers,
  Wrench,
  Truck,
  HardHat
} from 'lucide-react';
import AnimatedCounter from '../components/AnimatedCounter';
import TextReveal from '../components/TextReveal';
import TiltCard from '../components/TiltCard';
import { motion } from 'motion/react';
import '../styles/About.css';

export default function About({ lang, onOpenQuote }) {
  const coreValues = [
    {
      icon: ShieldCheck,
      titleEn: 'Integrity',
      titleAr: 'النزاهة والمصداقية',
      descEn: 'Building relationships through transparency, accountability, and professional conduct.',
      descAr: 'بناء علاقات عمل راسخة تقوم على الشفافية والمسؤولية والسلوك المهني النزيه.'
    },
    {
      icon: Award,
      titleEn: 'Quality',
      titleAr: 'الجودة والتميز',
      descEn: 'Focusing on agreed requirements, suitable resources, and quality standards.',
      descAr: 'التركيز على تلبية المتطلبات المعتمدة وتوفير الموارد الملائمة وأعلى معايير الجودة.'
    },
    {
      icon: Clock,
      titleEn: 'Reliability',
      titleAr: 'الموثوقية والالتزام',
      descEn: 'Supporting clients through clear communication and dependable coordination.',
      descAr: 'دعم عملائنا عبر التواصل الواضح والتنسيق العملياتي الموثوق في كل مرحلة.'
    },
    {
      icon: HardHat,
      titleEn: 'Safety',
      titleAr: 'السلامة والصحة المهنية',
      descEn: 'Recognizing the importance of safe work practices and site requirements.',
      descAr: 'إدراك الأهمية القصوى لممارسات العمل الآمنة والامتثال لكافة اشتراطات المواقع.'
    },
    {
      icon: Users,
      titleEn: 'Teamwork',
      titleAr: 'العمل الجماعي والتعاون',
      descEn: 'Coordinating with clients, project teams, and personnel to support shared goals.',
      descAr: 'التنسيق المستمر مع العملاء وفرق المشاريع والكوادر لتحقيق الأهداف المشتركة.'
    },
    {
      icon: Sparkles,
      titleEn: 'Continuous Improvement',
      titleAr: 'التطوير المستمر',
      descEn: 'Embracing better practices and practical solutions to project challenges.',
      descAr: 'تبني أفضل الممارسات والحلول العملية المبتكرة لتجاوز تحديات المشاريع.'
    }
  ];

  const whatWeDoList = [
    {
      number: '01',
      titleEn: 'Professional Support Services',
      titleAr: 'خدمات الدعم المهني والكوادر المتخصصة',
      descEn: 'We supply personnel across engineering, project management, quality control, inspection, safety, supervision, skilled trades, and site support.',
      descAr: 'نقوم بتوريد الكوادر المؤهلة في مجالات الهندسة، إدارة المشاريع، مراقبة الجودة، التفتيش، السلامة، الإشراف، المهن الماهرة، والدعم الميداني.',
      image: '/images/service-manpower.jpg',
      link: '/#manpower-list'
    },
    {
      number: '02',
      titleEn: 'Equipment Rentals',
      titleAr: 'تأجير المعدات والآليات الثقيلة',
      descEn: 'We provide rental options for construction and industrial equipment, based on project needs and equipment availability.',
      descAr: 'نوفر حلول تأجير المعدات الإنشائية والصناعية بمرونة عالية وفق احتياجات المشروع وجداول التوفر.',
      image: '/images/service-equipment.jpg',
      link: '/equipment'
    },
    {
      number: '03',
      titleEn: 'General Contracting & Subcontracting',
      titleAr: 'المقاولات العامة والتعاقد من الباطن',
      descEn: 'We undertake civil and mechanical construction subcontracting activities in line with agreed project scopes and requirements.',
      descAr: 'نتولى تنفيذ أنشطة المقاولات من الباطن للأعمال المدنية والميكانيكية بما يتماشى مع نطاق العمل والمتطلبات المعتمدة.',
      image: '/images/service-civil.jpg',
      link: '/services'
    }
  ];

  const approachSteps = [
    {
      step: '01',
      titleEn: 'Understand the Requirement',
      titleAr: 'فهم وتحليل المتطلبات',
      descEn: "We identify the client's project scope, personnel needs, equipment requirements, and expected timelines.",
      descAr: 'نحدد بدقة نطاق مشروع العميل، واحتياجات الكوادر الفنية، ومواصفات المعدات، والجداول الزمنية المتوقعة.'
    },
    {
      step: '02',
      titleEn: 'Plan the Solution',
      titleAr: 'تخطيط الحل المتكامل',
      descEn: 'We review the requirements and discuss appropriate resources, availability, and commercial terms.',
      descAr: 'ندرس المتطلبات ونناقش الموارد المناسبة ومستويات التوفر والشروط التجارية التنافسية.'
    },
    {
      step: '03',
      titleEn: 'Coordinate the Work',
      titleAr: 'التنسيق والتنفيذ الميداني',
      descEn: 'We coordinate the agreed services, personnel, or equipment according to the confirmed arrangement.',
      descAr: 'نقوم بالتنسيق التام للخدمات المتفق عليها والكوادر أو المعدات وفق الجدول المعتمد.'
    },
    {
      step: '04',
      titleEn: 'Maintain Communication',
      titleAr: 'التواصل والمتابعة المستمرة',
      descEn: 'We emphasize clear communication and coordination throughout the agreed service period.',
      descAr: 'نحرص على قنوات تواصل مفتوحة وتنسيق وثيق طوال فترة تقديم الخدمة لضمان نجاح المشروع.'
    }
  ];

  return (
    <div className="about-page-wrap">
      {/* 1. Hero Section — About Our Company */}
      <section className="about-hero-section">
        <div className="about-hero-bg">
          <img 
            src="/images/hero-banner-enhanced.jpg" 
            alt="ORJWAN Construction & Industrial Infrastructure" 
            className="about-hero-bg-img" 
          />
          <div className="about-hero-overlay"></div>
        </div>

        <div className="container about-hero-container">
          <div className="about-hero-grid">
            <div className="about-hero-content">
              <span className="about-gold-tag">
                {lang === 'en' ? 'ABOUT ORJWAN' : 'عن أرجوان'}
              </span>
              <TextReveal delay={0.1}>
                <h1 className="about-hero-title">
                  {lang === 'en' 
                    ? 'Building Partnerships. Delivering Quality.' 
                    : 'نبني الشراكات. ونلتزم بالجودة.'}
                </h1>
              </TextReveal>
              <TextReveal delay={0.2}>
                <p className="about-hero-desc">
                  {lang === 'en'
                    ? 'ORJWAN ZAKI BIN AHMED AL-RABH GENERAL CONTRACTING EST. is a Saudi Arabian contracting and project support company committed to providing professional manpower solutions, technical support services, equipment rentals, and civil and mechanical construction support.'
                    : 'مؤسسة أرجوان زكي بن أحمد آل ربح للمقاولات العامة هي شركة وطنية سعودية رائدة في مجال المقاولات ودعم المشاريع، ملتزمة بتقديم حلول القوى العاملة المتخصصة، خدمات الدعم الفني، تأجير المعدات الثقيلة، ودعم الإنشاءات المدنية والميكانيكية.'}
                </p>
              </TextReveal>
              <p className="about-hero-sub-desc">
                {lang === 'en'
                  ? 'We aim to build lasting business relationships through dependable service, professional coordination, and a commitment to quality.'
                  : 'نهدف إلى بناء علاقات أعمال طويلة الأمد من خلال خدمات موثوقة، وتنسيق احترافي، والتزام مستمر بأعلى معايير الجودة.'}
              </p>

              <div className="about-hero-btns">
                <Link to="/services" className="btn-gold">
                  {lang === 'en' ? 'Explore Our Services' : 'استعراض خدماتنا'}
                  <ArrowRight size={18} />
                </Link>
                <Link to="/contact" className="btn-outline-white">
                  {lang === 'en' ? 'Contact Us' : 'تواصل معنا'}
                </Link>
              </div>
            </div>

            {/* Right Media Card: Clear Industrial Photography */}
            <div className="about-hero-media-wrap">
              <div className="about-hero-card">
                <img 
                  src="/images/hero-slide-3.jpg" 
                  alt="ORJWAN Engineering Partnership in KSA" 
                  className="about-hero-card-img" 
                />
                <div className="about-hero-card-glow"></div>
                <div className="about-hero-card-caption">
                  <span className="about-caption-badge">
                    <ShieldCheck size={14} />
                    {lang === 'en' ? 'Saudi Licensed Contractor' : 'مقاول سعودي معتمد'}
                  </span>
                  <div className="about-caption-title">CR NO: 2053123342</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Company Overview — Split Image and Text */}
      <section className="about-overview-section section-padding">
        <div className="container">
          <div className="about-overview-grid">
            <div className="about-overview-media">
              <div className="overview-img-wrapper">
                <img 
                  src="/images/service-manpower.jpg" 
                  alt="ORJWAN Technical Team on Site" 
                  className="overview-img" 
                />
                <div className="overview-badge-float">
                  <div className="overview-badge-num">KSA</div>
                  <div className="overview-badge-lbl">Kingdom-Wide Support</div>
                </div>
              </div>
            </div>

            <div className="about-overview-text">
              <span className="section-label-gold">
                {lang === 'en' ? 'WHO WE ARE' : 'من نحن'}
              </span>
              <TextReveal delay={0.1}>
                <h2 className="section-main-heading">
                  {lang === 'en' 
                    ? 'Your Partner in Construction & Project Support' 
                    : 'شريكك الموثوق في الإنشاءات ودعم المشاريع'}
                </h2>
              </TextReveal>
              <TextReveal delay={0.2}>
                <p className="overview-lead">
                  {lang === 'en'
                    ? 'ORJWAN supports construction, industrial, and maintenance projects by providing access to technical personnel, skilled workers, equipment rental solutions, and contracting support.'
                    : 'تدعم أرجوان مشاريع البناء والقطاع الصناعي وأعمال الصيانة من خلال توفير الكوادر الفنية المعتمدة، والعمالة الماهرة، وحلول تأجير المعدات الثقيلة، وخدمات المقاولات المتكاملة.'}
                </p>
              </TextReveal>
              <p className="overview-body">
                {lang === 'en'
                  ? 'Our approach is centered on understanding client requirements, coordinating appropriate resources, and supporting project activities with professionalism and efficiency.'
                  : 'يقوم نهج عملنا على فهم متطلبات العميل بدقة، وتنسيق وتعبئة الموارد الملائمة، ودعم أنشطة المشروع بأعلى درجات الاحترافية والكفاءة التشغيلية.'}
              </p>

              <div className="overview-stats-animated-bar">
                <div className="stat-counter-item">
                  <div className="stat-counter-number">
                    <AnimatedCounter end={100} suffix="%" duration={1800} />
                  </div>
                  <div className="stat-counter-label">
                    {lang === 'en' ? 'Aramco & TUV Compliance' : 'مطابقة معايير أرامكو وتوف'}
                  </div>
                </div>

                <div className="stat-counter-divider"></div>

                <div className="stat-counter-item">
                  <div className="stat-counter-number">
                    <AnimatedCounter end={24} suffix="/7" duration={1400} />
                  </div>
                  <div className="stat-counter-label">
                    {lang === 'en' ? 'Project Mobilization Support' : 'جاهزية التعبئة الميدانية'}
                  </div>
                </div>

                <div className="stat-counter-divider"></div>

                <div className="stat-counter-item">
                  <div className="stat-counter-number">
                    <AnimatedCounter end={3} suffix=" Divisions" duration={1200} />
                  </div>
                  <div className="stat-counter-label">
                    {lang === 'en' ? 'Manpower, Fleet & Civil' : 'العمالة، المعدات والمقاولات'}
                  </div>
                </div>
              </div>

              <div className="overview-highlights-row">
                <div className="highlight-pill">
                  <CheckCircle2 size={16} className="highlight-icon" />
                  <span>{lang === 'en' ? 'Technical Personnel' : 'كوادر فنية متخصصة'}</span>
                </div>
                <div className="highlight-pill">
                  <CheckCircle2 size={16} className="highlight-icon" />
                  <span>{lang === 'en' ? 'Equipment Fleet' : 'أسطول معدات حديث'}</span>
                </div>
                <div className="highlight-pill">
                  <CheckCircle2 size={16} className="highlight-icon" />
                  <span>{lang === 'en' ? 'Civil & Mechanical' : 'أعمال مدنية وميكانيكية'}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3 & 4. Mission & Vision — Two Premium Cards */}
      <section className="about-mv-section section-padding">
        <div className="container">
          <div className="section-header-center">
            <span className="section-label-gold">
              {lang === 'en' ? 'PURPOSE & DIRECTION' : 'أهدافنا ورؤيتنا'}
            </span>
            <h2 className="section-main-heading">
              {lang === 'en' ? 'Driven by Quality & Long-Term Trust' : 'مدفوعون بالجودة والثقة طويلة الأمد'}
            </h2>
          </div>

          <div className="about-mv-cards-grid">
            {/* Mission Card */}
            <div className="about-mv-card mission-card">
              <div className="mv-card-top">
                <div className="mv-icon-box">
                  <Target size={28} />
                </div>
                <span className="mv-card-tag">{lang === 'en' ? 'OUR MISSION' : 'رسالتنا'}</span>
              </div>
              <h3 className="mv-card-title">{lang === 'en' ? 'Our Mission' : 'رسالة أرجوان'}</h3>
              <p className="mv-card-desc">
                {lang === 'en'
                  ? 'To provide dependable contracting, professional support services, skilled manpower, and equipment rental solutions that help clients meet their project requirements efficiently, while maintaining a strong focus on quality, safety, and professional service.'
                  : 'تقديم حلول مقاولات موثوقة، وخدمات دعم مهني، وقوى عاملة ماهرة، وتأجير معدات تساعد عملاءنا على إنجاز متطلبات مشاريعهم بكفاءة، مع الحفاظ على تركيز راسخ على الجودة والسلامة والخدمة الاحترافية.'}
              </p>
            </div>

            {/* Vision Card */}
            <div className="about-mv-card vision-card">
              <div className="mv-card-top">
                <div className="mv-icon-box gold-icon">
                  <Eye size={28} />
                </div>
                <span className="mv-card-tag">{lang === 'en' ? 'OUR VISION' : 'رؤيتنا'}</span>
              </div>
              <h3 className="mv-card-title">{lang === 'en' ? 'Our Vision' : 'رؤية أرجوان'}</h3>
              <p className="mv-card-desc">
                {lang === 'en'
                  ? 'To build lasting partnerships and establish ORJWAN as a trusted provider of contracting and project support solutions in Saudi Arabia through continuous improvement, responsible business practices, and a commitment to client satisfaction.'
                  : 'بناء شراكات مستدامة وترسيخ مكانة أرجوان كمزود موثوق لحلول المقاولات ودعم المشاريع في المملكة العربية السعودية من خلال التطوير المستمر وممارسات الأعمال المسؤولة والالتزام التام برضا العملاء.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Our Core Values — Six Icon Cards */}
      <section className="about-values-section section-padding">
        <div className="container">
          <div className="section-header-center">
            <span className="section-label-gold">
              {lang === 'en' ? 'GUIDING PRINCIPLES' : 'المبادئ التوجيهية'}
            </span>
            <h2 className="section-main-heading">
              {lang === 'en' ? 'Our Core Values' : 'قيمنا الجوهرية'}
            </h2>
            <p className="section-sub-heading">
              {lang === 'en'
                ? 'The standards and ethics that guide every partnership and project engagement.'
                : 'المعايير والأخلاقيات المهنية التي توجه كل شراكة وتفاعل في مشاريعنا.'}
            </p>
          </div>

          <div className="about-values-grid">
            {coreValues.map((v, idx) => {
              const Icon = v.icon;
              return (
                <div key={idx} className="value-card">
                  <div className="value-icon-wrap">
                    <Icon size={24} />
                  </div>
                  <h4 className="value-title">{lang === 'en' ? v.titleEn : v.titleAr}</h4>
                  <p className="value-desc">{lang === 'en' ? v.descEn : v.descAr}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. What We Do — Three Service Blocks */}
      <section className="about-what-we-do-section section-padding">
        <div className="container">
          <div className="section-header-center">
            <span className="section-label-gold">
              {lang === 'en' ? 'WHAT WE DO' : 'مجالات أعمالنا'}
            </span>
            <h2 className="section-main-title">
              {lang === 'en' 
                ? 'Integrated Solutions for Project Requirements' 
                : 'حلول متكاملة لتلبية كافة متطلبات المشاريع'}
            </h2>
          </div>

          <div className="what-we-do-grid">
            {whatWeDoList.map((item, idx) => (
              <div key={idx} className="what-we-do-card">
                <div className="what-we-do-media">
                  <img src={item.image} alt={item.titleEn} className="what-we-do-img" />
                  <span className="what-we-do-num">{item.number}</span>
                </div>
                <div className="what-we-do-body">
                  <h3 className="what-we-do-title">{lang === 'en' ? item.titleEn : item.titleAr}</h3>
                  <p className="what-we-do-desc">{lang === 'en' ? item.descEn : item.descAr}</p>
                  <Link to={item.link} className="what-we-do-link">
                    <span>{lang === 'en' ? 'Learn More' : 'معرفة المزيد'}</span>
                    <ArrowRight size={15} />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: 44 }}>
            <Link to="/services" className="btn-gold">
              {lang === 'en' ? 'View All Services' : 'استعراض كافة الخدمات'}
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* 7. Our Approach — Four-Step Timeline */}
      <section className="about-approach-section section-padding">
        <div className="container">
          <div className="section-header-center">
            <span className="section-label-gold">
              {lang === 'en' ? 'OPERATIONAL METHODOLOGY' : 'منهجية العمل'}
            </span>
            <h2 className="section-main-heading">
              {lang === 'en' ? 'Our Approach' : 'نهج العمل والتنفيذ'}
            </h2>
            <p className="section-sub-gold">
              {lang === 'en' 
                ? 'From Understanding Requirements to Project Support' 
                : 'من فهم المتطلبات حتى نجاح الدعم الميداني'}
            </p>
          </div>

          <div className="approach-timeline-grid">
            {approachSteps.map((step, idx) => (
              <div key={idx} className="approach-step-box">
                <div className="approach-step-num">{step.step}</div>
                <h4 className="approach-step-title">{lang === 'en' ? step.titleEn : step.titleAr}</h4>
                <p className="approach-step-desc">{lang === 'en' ? step.descEn : step.descAr}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Why Choose ORJWAN? — Enhanced Dark Navy & 24K Gold Stagger */}
      <section className="about-why-section section-padding">
        <div className="container">
          <div className="about-why-box">
            <div className="section-header-center" style={{ marginBottom: 40, textAlign: 'center' }}>
              <span className="section-label-gold">
                {lang === 'en' ? 'WHY CHOOSE ORJWAN?' : 'لماذا تختار أرجوان؟'}
              </span>
              <TextReveal delay={0.1}>
                <h2 className="about-why-heading">
                  {lang === 'en' 
                    ? 'Trust, Reliability & Commitment to Quality' 
                    : 'الثقة، الموثوقية والالتزام بالجودة'}
                </h2>
              </TextReveal>
              <TextReveal delay={0.2}>
                <p className="about-why-lead">
                  {lang === 'en'
                    ? 'Our approach combines professional support, suitable resources, and client-focused coordination to help meet the demands of construction and industrial projects.'
                    : 'يجمع نهجنا بين الدعم المهني والموارد الملائمة والتنسيق المرتكز على العميل لتلبية متطلبات المشاريع الإنشائية والصناعية الكبرى.'}
                </p>
              </TextReveal>
            </div>

            <div className="about-why-pillars-grid">
              
              {/* Pillar 01 */}
              <TiltCard className="why-tilt-wrap">
                <motion.div 
                  className="about-why-pillar-card"
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="why-pillar-top-row">
                    <div className="why-pillar-icon-box">
                      <Users size={26} />
                    </div>
                    <div className="why-pillar-badge">01</div>
                  </div>

                  <h4 className="why-pillar-title">
                    {lang === 'en' ? 'Broad Technical Capabilities' : 'قدرات فنية واسعة'}
                  </h4>
                  
                  <p className="why-pillar-desc">
                    {lang === 'en' 
                      ? 'Multiple professional, technical, supervisory, and skilled worker categories encompassing engineering, QA/QC, HSE, and specialized machinery operation.' 
                      : 'فئات متعددة من الكوادر المهنية والفنية والإشرافية والعمالة الماهرة تشمل الهندسة، الجودة، السلامة، وتشغيل الآليات الثقيلة.'}
                  </p>

                  <div className="why-pillar-tags">
                    <span className="why-pillar-tag-item">
                      <CheckCircle2 size={13} color="#C5A052" />
                      {lang === 'en' ? '82+ Certified Job Roles' : '+82 مهنة وتخصص معتمد'}
                    </span>
                    <span className="why-pillar-tag-item">
                      <CheckCircle2 size={13} color="#C5A052" />
                      {lang === 'en' ? 'Aramco & TUV Ready' : 'معايير أرامكو وتوف'}
                    </span>
                  </div>
                </motion.div>
              </TiltCard>

              {/* Pillar 02 */}
              <TiltCard className="why-tilt-wrap">
                <motion.div 
                  className="about-why-pillar-card"
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="why-pillar-top-row">
                    <div className="why-pillar-icon-box">
                      <Truck size={26} />
                    </div>
                    <div className="why-pillar-badge">02</div>
                  </div>

                  <h4 className="why-pillar-title">
                    {lang === 'en' ? 'Flexible Project Support' : 'دعم مرن للمشاريع'}
                  </h4>
                  
                  <p className="why-pillar-desc">
                    {lang === 'en' 
                      ? "Solutions discussed around each client's scope and operational needs, offering tailored shift patterns, turnkey packages, and rapid equipment mobilization." 
                      : 'حلول مصممة ومرنة تتكيف مع نطاق واحتياجات كل مشروع تشغيلية، مع جداول ورديات مخصصة وتعبئة سريعة للمعدات في الموقع.'}
                  </p>

                  <div className="why-pillar-tags">
                    <span className="why-pillar-tag-item">
                      <CheckCircle2 size={13} color="#C5A052" />
                      {lang === 'en' ? 'Kingdom-Wide Coverage' : 'تغطية شاملة للمملكة'}
                    </span>
                    <span className="why-pillar-tag-item">
                      <CheckCircle2 size={13} color="#C5A052" />
                      {lang === 'en' ? 'Rapid 24h Mobilization' : 'جاهزية توريد فورية'}
                    </span>
                  </div>
                </motion.div>
              </TiltCard>

              {/* Pillar 03 */}
              <TiltCard className="why-tilt-wrap">
                <motion.div 
                  className="about-why-pillar-card"
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="why-pillar-top-row">
                    <div className="why-pillar-icon-box">
                      <ShieldCheck size={26} />
                    </div>
                    <div className="why-pillar-badge">03</div>
                  </div>

                  <h4 className="why-pillar-title">
                    {lang === 'en' ? 'Commitment to Professional Service' : 'التزام بالخدمة الاحترافية'}
                  </h4>
                  
                  <p className="why-pillar-desc">
                    {lang === 'en' 
                      ? 'An emphasis on quality, communication, and agreed deliverables supported by an active Saudi CR and strict adherence to industrial safety covenants.' 
                      : 'تركيز دائم على معايير الجودة، التواصل المستمر، والالتزام بالمخرجات المتفق عليها بموجب سجل تجاري رسمي واشتراطات السلامة المهنية.'}
                  </p>

                  <div className="why-pillar-tags">
                    <span className="why-pillar-tag-item">
                      <CheckCircle2 size={13} color="#C5A052" />
                      {lang === 'en' ? 'CR: 2053123342' : 'س.ت: ٢٠٥٣١٢٣٣٤٢'}
                    </span>
                    <span className="why-pillar-tag-item">
                      <CheckCircle2 size={13} color="#C5A052" />
                      {lang === 'en' ? 'Zero-Harm HSE Record' : 'سجل سلامة خالي من الإصابات'}
                    </span>
                  </div>
                </motion.div>
              </TiltCard>

            </div>
          </div>
        </div>
      </section>

      {/* 9. Company Information — Corporate Details Panel */}
      <section className="about-company-info-section section-padding">
        <div className="container">
          <div className="corporate-panel">
            <div className="corporate-panel-header">
              <div className="corporate-badge-row">
                <Building size={20} className="corp-header-icon" />
                <span className="corp-tag">{lang === 'en' ? 'OFFICIAL CORPORATE DETAILS' : 'البيانات الرسمية للمؤسسة'}</span>
              </div>
              <h3 className="corp-panel-title">
                {lang === 'en' ? 'Company Registration & Head Office' : 'بيانات التسجيل التجاري والمقر الرئيسي'}
              </h3>
            </div>

            <div className="corporate-details-grid">
              <div className="corp-detail-cell">
                <div className="corp-cell-lbl">{lang === 'en' ? 'Registered Company Name' : 'اسم المؤسسة المسجل'}</div>
                <div className="corp-cell-val">ORJWAN ZAKI BIN AHMED AL-RABH GENERAL CONTRACTING EST.</div>
                <div className="corp-cell-sub">مؤسسة ارجوان زكي بن أحمد آل ربح للمقاولات العامة</div>
              </div>

              <div className="corp-detail-cell">
                <div className="corp-cell-lbl">{lang === 'en' ? 'Commercial Registration Number' : 'رقم السجل التجاري'}</div>
                <div className="corp-cell-val gold-val">2053123342</div>
                <div className="corp-cell-sub">سجل تجاري ساري ومعتمد في المملكة العربية السعودية</div>
              </div>

              <div className="corp-detail-cell">
                <div className="corp-cell-lbl">{lang === 'en' ? 'Office Address' : 'العنوان والمقر الرئيسي'}</div>
                <div className="corp-cell-val">EDJC8593, 1st Floor, 8593 Al Khazzan St, Dammam 32242–3513, Saudi Arabia</div>
                <div className="corp-cell-sub">المنطقة الشرقية، المملكة العربية السعودية</div>
              </div>

              <div className="corp-detail-cell">
                <div className="corp-cell-lbl">{lang === 'en' ? 'Contact Number' : 'رقم الاتصال المباشر'}</div>
                <div className="corp-cell-val">
                  <a href="tel:0568565143" className="corp-phone-link">0568565143</a> / <a href="tel:+966567119230" className="corp-phone-link">+966 56 711 9230</a>
                </div>
                <div className="corp-cell-sub">خدمة العملاء والدعم الفني على مدار الساعة</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. Call to Action — Full-Width Banner */}
      <section className="about-cta-banner-section">
        <div className="about-cta-bg">
          <img 
            src="/images/heavy_equipment_fleet_1792762124890.jpg" 
            alt="ORJWAN Machinery and Workforce Fleet" 
            className="about-cta-bg-img" 
          />
          <div className="about-cta-overlay"></div>
        </div>

        <div className="container about-cta-container">
          <div className="about-cta-box">
            <span className="cta-gold-badge">
              {lang === 'en' ? "LET'S BUILD TOGETHER" : 'لنبنِ معاً'}
            </span>
            <h2 className="cta-heading">
              {lang === 'en' 
                ? "Let's Build a Stronger Partnership" 
                : 'لنبنِ معاً شراكة راسخة ومستدامة'}
            </h2>
            <p className="cta-desc">
              {lang === 'en'
                ? 'Looking for manpower, technical support, equipment rentals, or contracting services? Contact ORJWAN to discuss your project requirements.'
                : 'هل تبحث عن كوادر فنية، أو دعم تشغيلي، أو تأجير معدات، أو خدمات مقاولات؟ تواصل مع أرجوان اليوم لمناقشة متطلبات مشروعك.'}
            </p>

            <div className="about-cta-btns">
              <Link to="/contact" className="btn-gold-large">
                <Users size={18} />
                <span>{lang === 'en' ? 'Contact Our Team' : 'تواصل مع فريقنا'}</span>
                <ArrowRight size={18} />
              </Link>
              <button className="btn-cta-quote" onClick={onOpenQuote}>
                <FileText size={18} />
                <span>{lang === 'en' ? 'Request a Quote' : 'طلب تسعيرة'}</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
