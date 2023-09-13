import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Portofolio from "./components/Portofolio/Portofolio";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Portofolio />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
