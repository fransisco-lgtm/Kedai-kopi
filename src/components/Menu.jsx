import { useMemo, useRef, useState } from "react";
import { MENU_ITEMS, rupiah } from "./data";

const CATEGORIES = [
  { key: "all", label: "Semua" },
  { key: "coffee", label: "Coffee ☕" },
  { key: "non-coffee", label: "Non-Coffee 🧋" },
  { key: "food", label: "Food 🍰" },
];

export default function Menu() {
  const [active, setActive] = useState("coffee");
  const railRef = useRef(null);

  const items = useMemo(() => {
    if (active === "all") return MENU_ITEMS;
    return MENU_ITEMS.filter((it) => it.category === active);
  }, [active]);

  const scrollChips = (dir) => {
    const el = railRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * 220, behavior: "smooth" });
  };

  return (
    <section id="menu" className="section">
      <div className="container">
        <h2 className="section-title">Pilihan Menu</h2>
        <p className="section-desc">
          Pilih kategori dulu, baru lihat menu-nya.
        </p>

        {/* CATEGORY */}
        <div className="catbar">
          <button className="cat-arrow" onClick={() => scrollChips(-1)}>
            ‹
          </button>

          <div className="cat-rail" ref={railRef}>
            {CATEGORIES.map((c) => (
              <button
                key={c.key}
                className={`cat-chip ${active === c.key ? "active" : ""}`}
                onClick={() => setActive(c.key)}
              >
                {c.label}
              </button>
            ))}
          </div>

          <button className="cat-arrow" onClick={() => scrollChips(1)}>
            ›
          </button>
        </div>

        {/* MENU LIST (LEFT IMAGE) */}
        <div className="menu-list">
          {items.map((it) => (
            <article key={it.id} className="card menu-item">
              {it.image && (
                <img
                  src={it.image}
                  alt={it.name}
                  className="menu-thumb"
                />
              )}

              <div className="menu-body">
                <div className="menu-row-top">
                  <h3 className="menu-name">{it.name}</h3>
                  <div className="price">{rupiah(it.price)}</div>
                </div>
                <p className="menu-note">{it.note}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}