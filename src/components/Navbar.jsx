import { useEffect, useMemo, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [q, setQ] = useState("");

  const cartCount = 0;

  const location = useLocation();
  const navigate = useNavigate();

  // lock scroll saat drawer mobile kebuka
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [open]);

  const closeDrawer = () => setOpen(false);

  const closeSearch = () => {
    setSearchOpen(false);
    setQ("");
  };

  // helper: scroll ke section (bisa dari halaman lain)
  const goSection = async (hash) => {
    closeDrawer();
    closeSearch();

    // kalau lagi bukan di home, balik dulu ke home
    if (location.pathname !== "/") {
      navigate("/" + hash);
      // tunggu render
      setTimeout(() => {
        const id = hash.replace("#", "");
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 200);
      return;
    }

    // kalau sudah di home, langsung scroll
    const id = hash.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  // search behavior sederhana: scroll ke menu
  const onSubmitSearch = (e) => {
    e.preventDefault();
    goSection("#menu");
  };

  const showClear = useMemo(() => q.trim().length > 0, [q]);

  return (
    <>
      <header className="nav">
        <div className="container nav-inner">
          {/* LEFT: Brand */}
          <Link
            className="brand"
            to="/"
            onClick={() => {
              closeDrawer();
              closeSearch();
            }}
          >
            <span className="logo" aria-hidden="true">
              ☕
            </span>
            <span>Kedai Kopi</span>
          </Link>

          {/* CENTER: Desktop menu */}
          <nav className="nav-links" aria-label="Primary">
            <Link to="/" onClick={() => goSection("#home")}>Home</Link>
            <Link to="/menu" onClick={() => { closeDrawer(); closeSearch(); }}>Menu</Link>
            <button type="button" className="navlink-btn" onClick={() => goSection("#tentang")}>
              Tentang
            </button>
            <button type="button" className="navlink-btn" onClick={() => goSection("#kontak")}>
              Kontak
            </button>
          </nav>

          {/* RIGHT: actions */}
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

        {/* Search bar dropdown */}
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
              <button type="submit" className="search-submit">
                Cari
              </button>
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
            <span className="logo" aria-hidden="true">
              ☕
            </span>
            <span>Kedai Kopi</span>
          </div>
          <button className="drawer-close" onClick={() => setOpen(false)} aria-label="Tutup">
            ✕
          </button>
        </div>

        {/* ✅ semua dibuat "kotak" style sama */}
        <nav className="drawer-links">
          <Link className="drawer-link" to="/" onClick={() => { closeDrawer(); closeSearch(); }}>
            Home
          </Link>

          <Link className="drawer-link" to="/menu" onClick={() => { closeDrawer(); closeSearch(); }}>
            Menu
          </Link>

          <button className="drawer-link" type="button" onClick={() => goSection("#tentang")}>
            Tentang
          </button>

          <button className="drawer-link" type="button" onClick={() => goSection("#kontak")}>
            Kontak
          </button>
        </nav>

        <div className="drawer-actions">
          <button
            className="drawer-action"
            onClick={() => {
              setSearchOpen(true);
              setOpen(false);
            }}
          >
            🔍 Cari Menu
          </button>
          <button className="drawer-action">🛒 Keranjang</button>
        </div>
      </aside>
    </>
  );
}