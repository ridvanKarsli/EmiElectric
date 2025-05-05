import React from "react";
import "./ContactPage.css";

const ContactPage = () => {
  return (
    <div className="contact-section">
      <div className="overlay" />
      <div className="container">
        <h2 className="title">İletişim Bilgileri</h2>
        <div className="card-wrapper">
          <div className="contact-card">
            <iframe
              title="Fabrika Harita"
              src="https://www.google.com/maps/embed?pb=!1m18..."
              loading="lazy"
              className="map"
            ></iframe>
            <div className="info">
              <h3>Fabrika</h3>
              <p><strong>Adres:</strong> İTOB OSB Mahallesi 10014 Sokak No:30 Menderes - İZMİR</p>
              <p><strong>Tel:</strong> +90 232 479 46 90</p>
              <p><strong>Faks:</strong> +90 232 479 46 16</p>
              <p><strong>E-posta:</strong> info@emielektrik.com.tr</p>
              <a href="https://goo.gl/maps/..." className="map-btn">Yol Tarifi</a>
            </div>
          </div>
          <div className="contact-card">
            <iframe
              title="Mağaza Harita"
              src="https://www.google.com/maps/embed?pb=!1m18..."
              loading="lazy"
              className="map"
            ></iframe>
            <div className="info">
              <h3>Mağaza</h3>
              <p><strong>Adres:</strong> 1203/11 Sokak No: 4/M Karabasan Altı İşmerkezi Yenişehir - İzmir</p>
              <p><strong>Tel:</strong> +90 232 457 32 93 (Pbx)</p>
              <p><strong>Faks:</strong> +90 232 458 67 92</p>
              <p><strong>E-posta:</strong> info@emielektrik.com.tr</p>
              <a href="https://goo.gl/maps/..." className="map-btn">Yol Tarifi</a>
            </div>
          </div>
        </div>

        <div className="form-section">
          <h3>Bize Ulaşın</h3>
          <form className="contact-form">
            <input type="text" placeholder="Adınız Soyadınız" />
            <input type="email" placeholder="E-posta Adresiniz" />
            <input type="text" placeholder="Konu" />
            <textarea placeholder="Mesajınız" rows="5"></textarea>
            <button type="submit">Gönder</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
