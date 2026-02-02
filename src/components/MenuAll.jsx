import { MENU_ITEMS, rupiah } from "./data";

function Section({ title, items }) {
  return (
    <div style={{ marginTop: 26 }}>
      <h3 className="menu-section-title">{title}</h3>

      <div className="menu-list">
        {items.map((it) => (
          <article key={it.id} className="card menu-item">
            {it.image ? (
              <img src={it.image} alt={it.name} className="menu-thumb" />
            ) : (
              <div className="menu-thumb placeholder" />
            )}

            <div className="menu-body">
              <div className="menu-row-top">
                <div>
                  <h4 className="menu-name">{it.name}</h4>
                  <p className="menu-note">{it.note}</p>
                </div>
                <div className="price">{rupiah(it.price)}</div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export default function MenuFull() {
  const coffee = MENU_ITEMS.filter((it) => it.category === "coffee");
  const nonCoffee = MENU_ITEMS.filter((it) => it.category === "non-coffee");
  const food = MENU_ITEMS.filter((it) => it.category === "food");

  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title">Semua Menu</h2>
        <p className="section-desc">
          Semua menu dipisah berdasarkan kategori biar gampang dilihat.
        </p>

        <Section title="Coffee ☕" items={coffee} />
        <Section title="Non-Coffee 🧋" items={nonCoffee} />
        <Section title="Food 🍰" items={food} />
      </div>
    </section>
  );
}