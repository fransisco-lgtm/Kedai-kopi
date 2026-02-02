import { useCart } from "../cart/CartContext.jsx";
import { rupiah } from "./data";

export default function CartPanel({ open, onClose }) {
  const { cart, inc, dec, removeFromCart, total, clearCart } = useCart();

  if (!open) return null;

  return (
    <div className="cart-overlay" onClick={onClose}>
      <div className="cart-panel" onClick={(e) => e.stopPropagation()}>
        <div className="cart-head">
          <h3 style={{ margin: 0 }}>Keranjang</h3>
          <button className="icon-btn" onClick={onClose} type="button">
            ✕
          </button>
        </div>

        {cart.length === 0 ? (
          <p style={{ color: "rgba(255,255,255,.7)" }}>Keranjang masih kosong.</p>
        ) : (
          <>
            <div className="cart-list">
              {cart.map((it) => (
                <div className="cart-item" key={it.id}>
                  {it.image ? (
                    <img className="cart-thumb" src={it.image} alt={it.name} />
                  ) : (
                    <div className="cart-thumb ph" />
                  )}

                  <div className="cart-info">
                    <div className="cart-row">
                      <div>
                        <b>{it.name}</b>
                        <div className="cart-price">{rupiah(it.price)}</div>
                      </div>

                      <button
                        className="cart-remove"
                        onClick={() => removeFromCart(it.id)}
                        type="button"
                      >
                        Hapus
                      </button>
                    </div>

                    <div className="cart-qty">
                      <button onClick={() => dec(it.id)} type="button">
                        -
                      </button>
                      <span>{it.qty}</span>
                      <button onClick={() => inc(it.id)} type="button">
                        +
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="cart-foot">
              <div className="cart-total">
                <span>Total</span>
                <b>{rupiah(total)}</b>
              </div>

              <div className="cart-actions">
                <button className="btn" onClick={clearCart} type="button">
                  Kosongkan
                </button>
                <button className="btn primary" type="button">
                  Checkout
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}