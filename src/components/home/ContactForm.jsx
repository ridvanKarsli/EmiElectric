import React, { useState } from 'react';
import "./ContactPage.css";

const FABRIKA_MAP_EMBED = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3127.1234567890123!2d27.12345678901234!3d38.12345678901234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzjCsDA3JzI0LjUiTiAyN8KwMDcnMjQuNSJF!5e0!3m2!1str!2str!4v1234567890123!5m2!1str!2str";
const MAGAZA_MAP_EMBED = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3127.1234567890123!2d27.12345678901234!3d38.12345678901234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzjCsDA3JzI0LjUiTiAyN8KwMDcnMjQuNSJF!5e0!3m2!1str!2str!4v1234567890123!5m2!1str!2str";
const FABRIKA_MAP_LINK = "https://www.google.com/maps?q=İTOB+OSB+Mahallesi+10014+Sokak+No:30+Menderes+-+İZMİR";
const MAGAZA_MAP_LINK = "https://www.google.com/maps?q=1203/11+Sokak+No:+4/M+Karabasan+Altı+İşmerkezi+Yenişehir+-+İzmir";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Mesajınız gönderildi!');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="contact-two-column-bg">
      <div className="contact-two-column">
        <div className="contact-form-side">
          <div style={{
            display: 'inline-block',
            padding: '0.5rem 1.5rem',
            marginBottom: '1.5rem',
            background: 'rgba(30, 42, 56, 0.1)',
            color: '#F7941D',
            borderRadius: '9999px',
            fontSize: '1.5rem',
            fontWeight: 700,
            letterSpacing: 2,
            textTransform: 'uppercase',
          }}>
            İLETİŞİM
          </div>
          <h2 className="contact-title">İletişim</h2>
          <form className="contact-form-modern" onSubmit={handleSubmit}>
            <div className="form-row">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Adınız Soyadınız"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="E-posta Adresiniz"
                required
              />
            </div>
            <div className="form-row">
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Telefon Numaranız"
                required
              />
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Konu"
                required
              />
            </div>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Mesajınız"
              required
            ></textarea>
            <button type="submit" className="contact-submit-btn">Gönder</button>
          </form>
        </div>
        <div className="contact-addresses-side">
          <div className="address-card-with-map">
            <iframe
              src={FABRIKA_MAP_EMBED}
              title="Fabrika Harita"
              className="address-map"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            ></iframe>
            <div className="address-card-content">
              <h3>Fabrika</h3>
              <p><b>Adres:</b> İTOB OSB Mahallesi 10014 Sokak No:30 Menderes - İZMİR</p>
              <p><b>Telefon:</b> +90 232 479 46 90</p>
              <p><b>E-posta:</b> info@emielektrik.com.tr</p>
              <a className="map-btn-modern" href={FABRIKA_MAP_LINK} target="_blank" rel="noopener noreferrer">Haritada Gör</a>
            </div>
          </div>
          <div className="address-card-with-map">
            <iframe
              src={MAGAZA_MAP_EMBED}
              title="Mağaza Harita"
              className="address-map"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            ></iframe>
            <div className="address-card-content">
              <h3>Mağaza</h3>
              <p><b>Adres:</b> 1203/11 Sokak No: 4/M Karabasan Altı İşmerkezi Yenişehir - İzmir</p>
              <p><b>Telefon:</b> +90 232 457 32 93 (Pbx)</p>
              <p><b>E-posta:</b> info@emielektrik.com.tr</p>
              <a className="map-btn-modern" href={MAGAZA_MAP_LINK} target="_blank" rel="noopener noreferrer">Haritada Gör</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
