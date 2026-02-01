import { buildWaLink } from "./data";

export default function Contact() {
  const wa = buildWaLink("Halo Kedai Kopi! Aku mau tanya lokasi/jam buka ya ☕");

  return (
    <section id="kontak" className="section">
      <div className="container two-col">
        <div className="card box">
          <h2 className="section-title" style={{ marginBottom: 8 }}>Lokasi & Kontak</h2>
          <p className="section-desc">
            Alamat: (isi alamat kamu di sini) <br />
            Jam buka: 08.00–22.00 <br />
            Instagram: @kedai.kopi (contoh)
          </p>

          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            <a className="btn primary" href={wa} target="_blank" rel="noreferrer">Chat WhatsApp</a>
            <a className="btn" href="https://maps.google.com" target="_blank" rel="noreferrer">Buka Maps</a>
          </div>
        </div>

        <div className="card box">
          <h3 style={{ margin: 0, fontSize: 18 }}>Catatan Pemesanan</h3>
          <ul className="list">
            <li>Tulis nama + pesanan</li>
            <li>Jika delivery: tulis alamat lengkap</li>
            <li>Tambahkan catatan (less sugar/ice, dll.)</li>
          </ul>
        </div>
      </div>
    </section>
  );
}