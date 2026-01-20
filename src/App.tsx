import About from "./About";
import Hero from "./Hero";
import Projects from "./Projects";
import Technologies from "./Technologies";

function App() {
  return (
    <div className="min-h-screen w-full bg-[#020617] text-white flex items-center justify-center">
      <div
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: `radial-gradient(circle 500px at 50% 200px, #3e3e3e, transparent)`,
        }}
      />
      <div className="w-full px-4 sm:px-8 md:max-w-5xl z-50">
        <Hero />
        <About />
        <Projects />
        <Technologies />
      </div>
    </div>
  );
}

export default App;
