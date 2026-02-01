import { useEffect, useMemo, useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [q, setQ] = useState("");

  // (opsional) contoh jumlah keranjang
  const cartCount = 0;

  // lock scroll saat drawer mobile kebuka
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [open]);

  const closeDrawer = () => setOpen(false);

  // tutup search saat pindah mode / klik link
  const closeSearch = () => {
    setSearchOpen(false);
    setQ("");
  };

  // search behavior sederhana: scroll ke menu
  const onSubmitSearch = (e) => {
    e.preventDefault();
    const el = document.getElementById("menu");
    if (el) el.scrollIntoView({ behavior: "smooth" });
    // nanti bisa dipakai buat filter menu
    // sekarang fokus UI dulu
  };

  const showClear = useMemo(() => q.trim().length > 0, [q]);

  return (
    <>
      <header className="nav">
        <div className="container nav-inner">
          {/* LEFT: Brand */}
          <a className="brand" href="#home" onClick={() => { closeDrawer(); closeSearch(); }}>
            <span className="logo" aria-hidden="true">☕</span>
            <span>Kedai Kopi</span>
          </a>

          {/* CENTER: Desktop menu */}
          <nav className="nav-links" aria-label="Primary">
            <a href="#home">Home</a>
            <a href="#menu">Menu</a>
            <a href="#tentang">Tentang</a>
            <a href="#kontak">Kontak</a>
          </nav>

          {/* RIGHT: actions (desktop kanan, mobile di sebelah hamburger) */}
          <div className="nav-actions">
            {/* Search */}
            <button
              className="icon-btn"
              aria-label="Cari"
              onClick={() => setSearchOpen((v) => !v)}
            >
              🔍
            </button>

            {/* Cart */}
            <button className="icon-btn cart-btn" aria-label="Keranjang">
              🛒
              {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
            </button>

            {/* Hamburger (mobile only) */}
            <button
              className="burger"
              aria-label="Buka menu"
              aria-expanded={open}
              onClick={() => setOpen(true)}
            >
              ☰
            </button>
          </div>
        </div>

        {/* Search bar dropdown (muncul di bawah navbar) */}
        <div className={`searchbar ${searchOpen ? "show" : ""}`}>
          <div className="container search-inner">
            <form className="search-form" onSubmit={onSubmitSearch}>
              <input
                className="search-input"
                placeholder="Cari menu... (contoh: latte)"
                value={q}
                onChange={(e) => setQ(e.target.value)}
              />
              {showClear && (
                <button
                  type="button"
                  className="search-clear"
                  onClick={() => setQ("")}
                  aria-label="Hapus"
                >
                  ✕
                </button>
              )}
              <button type="submit" className="search-submit">Cari</button>
              <button type="button" className="search-close" onClick={closeSearch}>
                Tutup
              </button>
            </form>
          </div>
        </div>
      </header>

      {/* Overlay drawer */}
      <div className={`nav-overlay ${open ? "show" : ""}`} onClick={() => setOpen(false)} />

      {/* Drawer kiri (mobile) */}
      <aside className={`nav-drawer ${open ? "open" : ""}`} aria-label="Menu">
        <div className="drawer-header">
          <div className="drawer-brand">
            <span className="logo" aria-hidden="true">☕</span>
            <span>Kedai Kopi</span>
          </div>
          <button className="drawer-close" onClick={() => setOpen(false)} aria-label="Tutup">
            ✕
          </button>
        </div>

        <nav className="drawer-links">
          <a href="#home" onClick={closeDrawer}>Home</a>
          <a href="#menu" onClick={closeDrawer}>Menu</a>
          <a href="#tentang" onClick={closeDrawer}>Tentang</a>
          <a href="#kontak" onClick={closeDrawer}>Kontak</a>
        </nav>

        <div className="drawer-actions">
          <button className="drawer-action" onClick={() => { setSearchOpen(true); setOpen(false); }}>
            🔍 Cari Menu
          </button>
          <button className="drawer-action">
            🛒 Keranjang
          </button>
        </div>
      </aside>
    </>
  );
}