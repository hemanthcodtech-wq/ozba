import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Award, 
  FileCheck2, 
  HardHat, 
  Clock, 
  CheckCircle, 
  Download, 
  ExternalLink,
  X,
  FileText
} from 'lucide-react';
import './ComplianceCertDrawer.css';

export default function ComplianceCertDrawer({ lang, isOpen, onClose }) {
  if (!isOpen) return null;

  const certificates = [
    {
      id: 'cr',
      titleEn: 'Commercial Registration (CR) Certificate',
      titleAr: 'شهادة السجل التجاري الرسمي',
      regNo: '2053123342',
      issuer: 'Ministry of Commerce (KSA)',
      status: 'Active & Verified',
      statusAr: 'ساري ومعتمد',
      descEn: 'Licensed for General Contracting, Heavy Machinery Leasing, Support Services & Specialized Manpower Supply.',
      descAr: 'مرخص للمقاولات العامة، تأجير المعدات الثقيلة، خدمات الدعم الفني، وتوريد القوى العاملة المتخصصة.'
    },
    {
      id: 'aramco',
      titleEn: 'Saudi Aramco HSE & Work Standards Compliance',
      titleAr: 'مطابقة اشتراطات أرامكو السعودية للسلامة والمشغلين',
      regNo: 'Aramco Vendor Code Ready',
      issuer: 'Saudi Aramco Standards',
      status: 'Compliant Standards',
      statusAr: 'مطابق للمواصفات',
      descEn: 'Certified Work Permit Receivers (WPR), Riggers Level II/III, and inspected machines with Aramco safety stickers.',
      descAr: 'مستلمو تصاريح معتمدون، ريجرز مستويات معتمدة، ومعدات تحمل استيكر الفحص الميداني.'
    },
    {
      id: 'tuv',
      titleEn: 'Third-Party Technical Inspection (TUV / BV)',
      titleAr: 'شهادات الفحص الفني الدوري للرافعات (طرف ثالث)',
      regNo: 'TUV / Bureau Veritas Valid',
      issuer: 'Accredited Inspection Bodies',
      status: 'Annual Certification',
      statusAr: 'فحص دوري معتمد',
      descEn: 'Periodic load testing, wire rope certification, boom integrity, and hydraulic pressure testing.',
      descAr: 'اختبارات الأحمال الدورية، فحص سلامة الوايرات والهيدروليك، وشهادات المعايرة السارية.'
    },
    {
      id: 'zatca',
      titleEn: 'ZATCA VAT & Tax Registration',
      titleAr: 'شهادة التسجيل في ضريبة القيمة المضافة (ZATCA)',
      regNo: 'VAT Active Registered',
      issuer: 'Zakat, Tax & Customs Authority',
      status: 'Compliant (FATOORA)',
      statusAr: 'نظام الفاتورة الإلكترونية',
      descEn: 'Fully compliant with e-invoicing Phase 2 FATOORA integration for government and corporate accounting.',
      descAr: 'نظام فواتير ضريبية إلكترونية معتمد للمؤسسات والشركات الكبرى والمشاريع الحكومية.'
    }
  ];

  return (
    <div className="compliance-modal-overlay" onClick={onClose}>
      <div className="compliance-modal-container" onClick={(e) => e.stopPropagation()}>
        
        {/* Modal Header */}
        <div className="compliance-modal-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div className="modal-shield-icon">
              <ShieldCheck size={26} color="#06172D" />
            </div>
            <div>
              <h3 className="compliance-title">
                {lang === 'en' ? 'Regulatory Compliance & Quality Accreditations' : 'الاعتمادات النظامية وشهادات الجودة والسلامة'}
              </h3>
              <p className="compliance-subtitle">
                ORJWAN ZAKI BIN AHMED AL-RABH GENERAL CONTRACTING EST. • CR: 2053123342
              </p>
            </div>
          </div>
          <button className="compliance-close-btn" onClick={onClose} aria-label="Close">
            <X size={20} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="compliance-modal-body">
          
          {/* Key Stat Badges */}
          <div className="compliance-stats-grid">
            <div className="comp-stat-card">
              <span className="stat-number">100%</span>
              <span className="stat-label">{lang === 'en' ? 'Saudi CR & Legal Compliance' : 'سجل تجاري نظامي ساري'}</span>
            </div>
            <div className="comp-stat-card">
              <span className="stat-number">0 LTI</span>
              <span className="stat-label">{lang === 'en' ? 'Lost Time Injury Target (Zero Harm)' : 'سجل أمان مهني خالي من الإصابات'}</span>
            </div>
            <div className="comp-stat-card">
              <span className="stat-number">TUV / Aramco</span>
              <span className="stat-label">{lang === 'en' ? 'Third-Party Verified Fleet' : 'أسطول مفحوص من طرف ثالث'}</span>
            </div>
          </div>

          {/* Cards List */}
          <div className="certificates-grid">
            {certificates.map((cert) => (
              <div key={cert.id} className="cert-item-card">
                <div className="cert-top-row">
                  <div className="cert-badge-status">
                    <CheckCircle size={14} />
                    <span>{lang === 'en' ? cert.status : cert.statusAr}</span>
                  </div>
                  <span className="cert-reg-code">{cert.regNo}</span>
                </div>
                
                <h4 className="cert-name">
                  {lang === 'en' ? cert.titleEn : cert.titleAr}
                </h4>
                
                <div className="cert-issuer">
                  <span>{lang === 'en' ? 'Issuing Authority:' : 'جهة الإصدار والاعتماد:'}</span>
                  <strong>{cert.issuer}</strong>
                </div>

                <p className="cert-desc">
                  {lang === 'en' ? cert.descEn : cert.descAr}
                </p>
              </div>
            ))}
          </div>

          {/* Direct Download Callout */}
          <div className="company-profile-download-box">
            <div className="download-info">
              <FileText size={28} color="#C5A052" />
              <div>
                <h4>{lang === 'en' ? 'Need Full Vendor Pre-Qualification (PQ) Dossier?' : 'هل تحتاج لملف تأهيل الموردين الرسمي (PQ)؟'}</h4>
                <p>
                  {lang === 'en' 
                    ? 'Includes corporate profile, CR copy, chamber certificate, safety manuals, and equipment spec sheets.'
                    : 'يشمل السجل التجاري، اشتراك الغرفة، شهادات الفحص، وسجل السلامة لتقديمه لإدارة المشتريات.'}
                </p>
              </div>
            </div>
            <a 
              href="https://wa.me/966568565143?text=Hello%20ORJWAN%2C%20please%20send%20your%20Official%20Corporate%20PQ%20Dossier%20and%20Fleet%20Spec%20Sheet." 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-download-pq"
            >
              <Download size={16} />
              <span>{lang === 'en' ? 'Request PQ Pack on WhatsApp' : 'طلب ملف التأهيل فوراً'}</span>
            </a>
          </div>

        </div>

      </div>
    </div>
  );
}
