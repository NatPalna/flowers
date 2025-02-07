import "./assets/styles/normalize.css";
import "./assets/styles/main.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Catalog from "./components/Catalog";
import Sale from "./components/Sale";
import Slider from "./components/Compositions";

function App() {
  const images: string[] = [
    "./src/assets/img/composition1.jpg",
    "./src/assets/img/composition2.jpg",
    "./src/assets/img/composition3.jpg",
    "./src/assets/img/composition4.jpg",
    "./src/assets/img/composition5.jpg",
  ];

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Catalog />
        <Sale />
        <Slider images={images} interval={3000} />
      </main>
    </>
  );
}

export default App;
