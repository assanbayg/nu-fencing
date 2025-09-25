import About from "./components/about";
import Footer from "./components/footer";
import Header from "./components/header";
import Hero from "./components/hero";
import Social from "./components/social";
import Tournament from "./components/tournament";

function App() {
  return (
    <div className="relative bg-white text-gray-800 min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Tournament />
        <Social />
      </main>
      <Footer />
    </div>
  );
}

export default App;
