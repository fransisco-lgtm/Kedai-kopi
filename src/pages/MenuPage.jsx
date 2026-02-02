import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MenuAll from "../components/MenuAll";

export default function MenuPage() {
  return (
    <>
      <Navbar />
      <main>
        <MenuAll />
      </main>
      <Footer />
    </>
  );
}