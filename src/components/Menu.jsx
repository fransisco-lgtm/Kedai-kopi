import { useMemo, useRef, useState } from "react";
import { MENU_ITEMS, rupiah } from "./data";
import { useCart } from "../cart/CartContext";

const CATEGORIES = [
  { key: "coffee", label: "Coffee ☕" },
  { key: "non-coffee", label: "Non-Coffee 🧋" },
  { key: "food", label: "Food 🍰" },
];

export default function Menu() {
  const [active, setActive] = useState("coffee");
  const railRef = useRef(null);

  const { cart, addToCart, inc, dec } = useCart();

  const items = useMemo(() => {
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
        <h2 className="section-title">Menu Favorit</h2>
        <p className="section-desc">
          Pilihan menu yang paling sering dipesan.
        </p>

        {/* CATEGORY */}
        <div className="catbar">
          <button className="cat-arrow" onClick={() => scrollChips(-1)}>‹</button>
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
          <button className="cat-arrow" onClick={() => scrollChips(1)}>›</button>
        </div>

        {/* MENU LIST */}
        <div className="menu-list">
          {items.map((it) => {
            const inCart = cart.find((c) => c.id === it.id);

            return (
              <article key={it.id} className="card menu-item">
                {it.image ? (
                  <img src={it.image} alt={it.name} className="menu-thumb" />
                ) : (
                  <div className="menu-thumb placeholder" />
                )}

                <div className="menu-body">
                  <div className="menu-row-top">
                    <h4 className="menu-name">{it.name}</h4>
                    <div className="price">{rupiah(it.price)}</div>
                  </div>

                  <p className="menu-note">{it.note}</p>

                  {/* ACTION */}
                  {!inCart ? (
                    <button
                      className="btn-cart"
                      onClick={() =>
                        addToCart({
                          id: it.id,
                          name: it.name,
                          price: it.price,
                          image: it.image,
                        })
                      }
                    >
                      <span className="cart-ico">🛒</span>
                      Tambah ke Keranjang
                    </button>
                  ) : (
                    <div className="cart-qty">
                      <button onClick={() => dec(it.id)}>−</button>
                      <span>{inCart.qty}</span>
                      <button onClick={() => inc(it.id)}>+</button>
                    </div>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}