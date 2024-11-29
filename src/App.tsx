import "./assets/styles/normalize.css";
import "./assets/styles/main.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Catalog from "./components/Catalog";
import Sale from "./components/Sale";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Catalog />
        <Sale />
      </main>
    </>
  );
}

export default App;
