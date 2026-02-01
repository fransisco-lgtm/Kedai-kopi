import "./Banner.css";
import bannerImg from "../assets/banner.png";

export default function Banner() {
  return (
    <section className="banner">
      <img src={bannerImg} alt="Kedai Kopi" className="banner-img" />

      <div className="banner-overlay">
        <div className="banner-content">
          <span className="badge">☕ Ngopi enak • Wi-Fi kencang</span>
          <h1>Kedai Kopi yang pas buat kerja, ngobrol, dan santai.</h1>
          <p>
            Pilih kopi favoritmu, pesan cepat via WhatsApp.
            Bisa dine-in atau take away.
          </p>

          <div className="banner-actions">
            <a href="#menu" className="btn primary">Lihat Menu</a>
            <a href="#kontak" className="btn">Pesan WhatsApp</a>
          </div>
        </div>
      </div>
    </section>
  );
}