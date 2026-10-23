import React, { useState } from 'react';
import { MessageCircle, Phone, Clock, X, ChevronUp, Send, Check } from 'lucide-react';
import './FloatingDispatchWidget.css';

export default function FloatingDispatchWidget({ lang }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('Heavy Equipment Rental');

  const preFilledMessages = [
    { id: 'equip', labelEn: 'Heavy Equipment Rental', labelAr: 'تأجير معدات وآليات ثقيلة', text: 'Hello ORJWAN team, I need equipment availability and rates for an upcoming project.' },
    { id: 'manpower', labelEn: 'Technical Manpower Supply', labelAr: 'توريد كوادر فنية معتمدة', text: 'Hello ORJWAN team, I need a quotation for skilled manpower (WPR / Riggers / Supervisors).' },
    { id: 'urgent', labelEn: 'Urgent Site Mobilization', labelAr: 'توريد فوري لموقع العمل', text: 'Hello ORJWAN team, I require immediate dispatch of machinery / personnel to our worksite.' }
  ];

  const handleOpenWhatsApp = (text) => {
    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/966568565143?text=${encoded}`, '_blank');
  };

  return (
    <div className="floating-dispatch-container">
      
      {/* Expanded Quick Dispatch Card */}
      {isOpen && (
        <div className="dispatch-card-popup">
          <div className="dispatch-popup-header">
            <div className="dispatch-status-badge">
              <span className="live-pulse"></span>
              <span>{lang === 'en' ? 'Fleet Dispatch Desk: Active' : 'المكتب الميداني: متاح للتجاوب الفوري'}</span>
            </div>
            <button className="dispatch-close-icon" onClick={() => setIsOpen(false)} aria-label="Close">
              <X size={16} />
            </button>
          </div>

          <div className="dispatch-popup-body">
            <div className="dispatch-greeting">
              <h4>{lang === 'en' ? 'Direct Project Support' : 'التواصل المباشر مع غرفة العمليات'}</h4>
              <p>
                {lang === 'en'
                  ? 'Connect with our operations manager in Dammam for immediate machinery mobilization or manpower deployment.'
                  : 'تواصل مع إدارة المشاريع والتأجير بالدمام لتنسيق التوريد والمواصفات الفنية فوراً.'}
              </p>
            </div>

            <div className="quick-intent-picker">
              <span className="intent-label">{lang === 'en' ? 'Select Enquiry Topic:' : 'اختر نوع الاستفسار:'}</span>
              {preFilledMessages.map((item) => (
                <button
                  key={item.id}
                  className="intent-btn"
                  onClick={() => handleOpenWhatsApp(item.text)}
                >
                  <MessageCircle size={15} color="#25D366" />
                  <span>{lang === 'en' ? item.labelEn : item.labelAr}</span>
                </button>
              ))}
            </div>

            <div className="dispatch-direct-call">
              <a href="tel:0568565143" className="direct-call-link">
                <Phone size={15} />
                <span>{lang === 'en' ? 'Call Operations: 0568565143' : 'اتصال مباشر: ٠٥٦٨٥٦٥١٤٣'}</span>
              </a>
            </div>

            <div className="dispatch-cr-micro">
              CR 2053123342 • Dammam, KSA
            </div>
          </div>
        </div>
      )}

      {/* Floating Action Trigger Button */}
      <button 
        className={`floating-dispatch-btn ${isOpen ? 'active' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Direct Project Dispatch"
      >
        <div className="btn-icon-wrapper">
          <MessageCircle size={24} className="wa-icon" />
          <span className="dispatch-btn-dot"></span>
        </div>
        <span className="dispatch-btn-text">
          {lang === 'en' ? '24/7 Dispatch' : 'الدعم والعمليات'}
        </span>
      </button>

    </div>
  );
}
