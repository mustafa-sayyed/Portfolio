import About from "./About";
import Hero from "./Hero";
import Projects from "./Projects";

function App() {
  return (
    <div className="min-h-screen w-full bg-[#020617] text-white relative px-2 sm:px-4 md:px-6 xl:px-64">
      <div
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: `radial-gradient(circle 500px at 50% 200px, #3e3e3e, transparent)`,
        }}
      />
      <Hero />
      <About />
      <Projects />
    </div>
  );
}

export default App;
