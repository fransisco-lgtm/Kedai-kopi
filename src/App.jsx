import { Routes, Route, Link } from "react-router-dom";

import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Menu from "./components/Menu";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import MenuPage from "./pages/MenuPage";

function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Banner />

        <Menu />

        {/* tombol ke halaman menu */}
        <div className="container" style={{ marginTop: 16 }}>
          <Link className="btn primary" to="/menu">
            Lihat Semua Menu
          </Link>
        </div>

        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/menu" element={<MenuPage />} />
    </Routes>
  );
}