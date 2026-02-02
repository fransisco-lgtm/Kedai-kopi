import { createContext, useContext, useMemo, useState } from "react";

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  // tambah item
  const addToCart = (item) => {
    setCart((prev) => {
      const found = prev.find((x) => x.id === item.id);
      if (found) {
        return prev.map((x) =>
          x.id === item.id ? { ...x, qty: x.qty + 1 } : x
        );
      }
      return [...prev, { ...item, qty: 1 }];
    });
  };

  // tambah qty
  const inc = (id) => {
    setCart((prev) =>
      prev.map((x) => (x.id === id ? { ...x, qty: x.qty + 1 } : x))
    );
  };

  // kurang qty
  const dec = (id) => {
    setCart((prev) =>
      prev
        .map((x) => (x.id === id ? { ...x, qty: x.qty - 1 } : x))
        .filter((x) => x.qty > 0)
    );
  };

  // hapus item
  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((x) => x.id !== id));
  };

  // kosongkan
  const clearCart = () => setCart([]);

  // total harga
  const total = useMemo(() => {
    return cart.reduce((sum, it) => sum + it.price * it.qty, 0);
  }, [cart]);

  // total jumlah barang
  const count = useMemo(() => {
    return cart.reduce((sum, it) => sum + it.qty, 0);
  }, [cart]);

  const value = {
    cart,
    addToCart,
    inc,
    dec,
    removeFromCart,
    clearCart,
    total,
    count,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart harus dipakai di dalam <CartProvider>");
  return ctx;
}