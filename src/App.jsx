import "./App.css";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Contact from "./pages/Contact/Contact";
import Gallery from "./pages/gallery/Gallery";
import Project from "./pages/project/Project";
import Skill from "./pages/skill/Skill";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Project />
      <Skill />
      <Gallery />
      <Contact />
    </div>
  );
}

export default App;
