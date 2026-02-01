export default function About() {
  return (
    <section id="tentang" className="section">
      <div className="container two-col">
        <div className="card box">
          <h2 className="section-title" style={{ marginBottom: 8 }}>Tentang Kedai</h2>
          <p className="section-desc" style={{ marginBottom: 0 }}>
            Kedai Kopi adalah tempat ngopi yang fokus pada rasa, suasana, dan kenyamanan.
            Cocok untuk kerja, diskusi, atau sekadar santai sore.
          </p>
        </div>

        <div className="card box">
          <h3 style={{ margin: 0, fontSize: 18 }}>Fasilitas</h3>
          <ul className="list">
            <li>Wi-Fi gratis</li>
            <li>Area indoor & outdoor</li>
            <li>Cashless payment</li>
            <li>Take away & delivery</li>
          </ul>
        </div>
      </div>
    </section>
  );
}