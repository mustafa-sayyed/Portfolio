import About from "./pages/About";
import Articles from "./pages/Articles";
import Footer from "./pages/Footer";
import Hero from "./pages/Hero";
import Projects from "./pages/Projects";
import Technologies from "./pages/Technologies";

function App() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center">
      <div className="w-full px-4 sm:px-8 md:max-w-3xl z-50">
        <Hero />
        <About />
        <Projects />
        <Articles />
        <Technologies />
        <Footer />
      </div>
    </div>
  );
}

export default App;
