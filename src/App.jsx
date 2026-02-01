import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Menu from "./components/Menu";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />

      <main>
        <Banner />
        <Menu />
        <About />
        <Contact />
      </main>

      <Footer />
    </>
  );
}