import { useMemo, useRef, useState } from "react";
import { MENU_ITEMS, rupiah } from "./data";

const CATEGORIES = [
  { key: "all", label: "Semua" },
  { key: "coffee", label: "Coffee ☕" },
  { key: "non-coffee", label: "Non-Coffee 🧋" },
  { key: "food", label: "Food 🍰" },
];

export default function MenuAll() {
  const [active, setActive] = useState("all");
  const [query, setQuery] = useState("");
  const railRef = useRef(null);

  const items = useMemo(() => {
    let list = MENU_ITEMS;

    if (active !== "all") {
      list = list.filter((it) => it.category === active);
    }

    if (query.trim() !== "") {
      const q = query.toLowerCase();
      list = list.filter(
        (it) =>
          it.name.toLowerCase().includes(q) ||
          it.note.toLowerCase().includes(q)
      );
    }

    return list;
  }, [active, query]);

  const scrollChips = (dir) => {
    const el = railRef.current;
    if (!el) return;
    const amount = Math.max(220, Math.floor(el.clientWidth * 0.6));
    el.scrollBy({ left: dir * amount, behavior: "smooth" });
  };

  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title">Semua Menu</h2>
        <p className="section-desc">Cari menu dan pilih kategori.</p>

        {/* SEARCH */}
        <div className="menu-search">
          <input
            className="menu-search-input"
            type="text"
            placeholder="Cari menu... (espresso, latte, matcha)"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          {query && (
            <button
              className="menu-search-clear"
              type="button"
              onClick={() => setQuery("")}
            >
              ✕
            </button>
          )}
        </div>

        {/* CATEGORY SLIDER */}
        <div className="catbar">
          <button
            className="cat-arrow"
            type="button"
            aria-label="Geser kiri"
            onClick={() => scrollChips(-1)}
          >
            ‹
          </button>

          <div className="cat-rail" ref={railRef}>
            {CATEGORIES.map((c) => (
              <button
                key={c.key}
                type="button"
                className={`cat-chip ${active === c.key ? "active" : ""}`}
                onClick={() => setActive(c.key)}
              >
                {c.label}
              </button>
            ))}
          </div>

          <button
            className="cat-arrow"
            type="button"
            aria-label="Geser kanan"
            onClick={() => scrollChips(1)}
          >
            ›
          </button>
        </div>

        {/* LIST MENU */}
        <div className="menu-list">
          {items.length === 0 ? (
            <p style={{ color: "rgba(255,255,255,.7)" }}>
              Menu tidak ditemukan 😅
            </p>
          ) : (
            items.map((it) => (
              <article key={it.id} className="card menu-item">
                {it.image ? (
                  <img src={it.image} alt={it.name} className="menu-thumb" />
                ) : (
                  <div className="menu-thumb placeholder" />
                )}

                <div className="menu-body">
                  <div className="menu-row-top">
                    <div>
                      <h3 className="menu-name">{it.name}</h3>
                      <p className="menu-note">{it.note}</p>
                    </div>
                    <div className="price">{rupiah(it.price)}</div>
                  </div>
                </div>
              </article>
            ))
          )}
        </div>
      </div>
    </section>
  );
}