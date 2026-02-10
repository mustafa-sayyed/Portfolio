import About from "./About";
import Footer from "./Footer";
import Hero from "./Hero";
import Projects from "./Projects";
import Technologies from "./Technologies";

function App() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center">
      <div className="w-full px-4 sm:px-8 md:max-w-3xl z-50">
        <Hero />
        <About />
        <Projects />
        <Technologies />
        <Footer />
      </div>
    </div>
  );
}

export default App;
