import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-overlay"></div>

      <div className="hero-content">
        <div className="hero-text">
          <h1>Kedai Kopi</h1>
          <p>Ngopi enak, nyaman, dan santai ☕</p>
        </div>

        <div className="hero-actions">
          <a href="#menu" className="btn primary">Lihat Menu</a>
          <a href="https://wa.me/62xxxx" className="btn">Pesan WhatsApp</a>
        </div>
      </div>
    </section>
  );
}