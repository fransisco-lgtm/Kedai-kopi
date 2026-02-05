
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import { MENU_ITEMS, rupiah } from "../components/data.js";
import { useCart } from "../cart/CartContext.jsx";

const GROUPS = [
  { key: "coffee", title: "Coffee ☕" },
  { key: "non-coffee", title: "Non-Coffee 🧋" },
  { key: "food", title: "Food 🍰" },
];

export default function MenuPage() {
  const { cart, addToCart, inc, dec } = useCart();

  return (
    <>
      <Navbar />

      <main className="section">
        <div className="container">
          <h2 className="section-title">Semua Menu</h2>
          <p className="section-desc">
            Semua kategori lengkap: Coffee, Non-Coffee, dan Food.
          </p>

          {GROUPS.map((g) => {
            const items = MENU_ITEMS.filter((it) => it.category === g.key);
            if (items.length === 0) return null;

            return (
              <section key={g.key} style={{ marginTop: 22 }}>
                <h3 className="menu-section-title">{g.title}</h3>

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

                          {/* ACTION: belum ada -> Tambah | sudah ada -> (- qty +) */}
                          {!inCart ? (
                            <button
                              type="button"
                              className="btn btn-cart"
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
                            <div className="cart-qty cart-qty-inline">
                              <button type="button" onClick={() => dec(it.id)}>
                                −
                              </button>
                              <span>{inCart.qty}</span>
                              <button type="button" onClick={() => inc(it.id)}>
                                +
                              </button>
                            </div>
                          )}
                        </div>
                      </article>
                    );
                  })}
                </div>
              </section>
            );
          })}
        </div>
      </main>

      <Footer />
    </>
  );
}